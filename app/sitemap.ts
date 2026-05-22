import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/brand";

const SITE_URL = "https://binarybonds.in";

const STATIC_ROUTES = [
  { path: "/", changeFrequency: "daily" as const, priority: 1.0 },
  { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/services", changeFrequency: "weekly" as const, priority: 0.85 },
  { path: "/how-it-works", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/pricing", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/faq", changeFrequency: "weekly" as const, priority: 0.7 },
  { path: "/research/yield-curve", changeFrequency: "daily" as const, priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly" as const, priority: 0.85 },
  { path: "/disclaimer", changeFrequency: "monthly" as const, priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
  const serviceEntries = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
  return [...staticEntries, ...serviceEntries];
}
