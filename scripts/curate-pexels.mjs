#!/usr/bin/env node
/**
 * Curate Pexels assets for BinaryBonds landing page.
 * Filters for high-quality landscape orientation, dark/warm avg color,
 * and asks the editor (you) to pick from results.
 *
 * Run: PEXELS_KEY=... node scripts/curate-pexels.mjs
 */
const KEY = process.env.PEXELS_KEY;
if (!KEY) {
  console.error("Missing PEXELS_KEY env var");
  process.exit(1);
}

const QUERIES = {
  // Hero candidates — cinematic, monochrome leaning, Indian/financial
  hero_image: [
    "mumbai skyline night",
    "financial district skyscraper",
    "stock market screen",
    "bombay stock exchange",
    "indian currency abstract",
  ],
  hero_video: [
    "stock market ticker",
    "city skyline aerial",
    "financial graph animation",
    "indian flag waving",
  ],

  // Manifesto / pillar imagery — paper, hands, ledger, working
  pillar_fees: ["receipt close up", "indian ledger paper", "calculator hand"],
  pillar_math: ["mathematical formula chalkboard", "abstract data chart", "trading screen"],
  pillar_research: ["research notes desk", "open book with pencil", "library reading"],

  // Section imagery
  trust: ["sebi mumbai building", "supreme court of india", "indian government building"],
  process: ["mobile phone payment india", "upi payment", "person on laptop work"],
  cta_bg: ["sunset over mumbai", "financial district aerial dusk"],
};

async function search(query, type = "photo") {
  const url =
    type === "video"
      ? `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape&size=large`
      : `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape&size=large`;
  const res = await fetch(url, { headers: { Authorization: KEY } });
  const data = await res.json();
  return data;
}

const out = {};
for (const [bucket, queries] of Object.entries(QUERIES)) {
  out[bucket] = [];
  const isVideo = bucket.includes("video");
  for (const q of queries) {
    const result = await search(q, isVideo ? "video" : "photo");
    if (isVideo) {
      const videos = (result.videos ?? []).map((v) => ({
        id: v.id,
        query: q,
        url: v.url,
        photographer: v.user?.name,
        avg: v.avg_color,
        duration: v.duration,
        // pick the best HD-or-better h264 file ≤ 1920px
        files: (v.video_files ?? [])
          .filter((f) => f.file_type === "video/mp4")
          .map((f) => ({ width: f.width, height: f.height, link: f.link, quality: f.quality }))
          .sort((a, b) => Math.abs(1920 - a.width) - Math.abs(1920 - b.width))
          .slice(0, 2),
      }));
      out[bucket].push(...videos);
    } else {
      const photos = (result.photos ?? []).map((p) => ({
        id: p.id,
        query: q,
        url: p.url,
        photographer: p.photographer,
        avg: p.avg_color,
        alt: p.alt,
        src: {
          large2x: p.src.large2x,
          large: p.src.large,
          medium: p.src.medium,
          original: p.src.original,
          landscape: p.src.landscape,
        },
      }));
      out[bucket].push(...photos);
    }
  }
}

console.log(JSON.stringify(out, null, 2));
