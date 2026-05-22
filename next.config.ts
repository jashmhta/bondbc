import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Silence multi-lockfile warning by pinning Turbopack root
  turbopack: {
    root: path.resolve(__dirname),
  },

  // Allow access to dev resources from this AWS public IP and any localhost-mapped host.
  // Needed because the dev server is reverse-proxied for preview.
  // Updated for Next 16 — accepts plain hostnames or wildcard patterns.
  allowedDevOrigins: [
    "16.171.169.156",
    "*.compute.amazonaws.com",
    "*.amazonaws.com",
    "localhost",
    "127.0.0.1",
  ],

  images: {
    remotePatterns: [
      // Pexels images
      { protocol: "https", hostname: "images.pexels.com" },
      // CloudFront brand assets (existing)
      { protocol: "https", hostname: "d2xsxph8kpxj0f.cloudfront.net" },
    ],
    // Allow the qualities used across editorial photography & posters
    qualities: [60, 70, 75, 80, 85, 90, 95],
    // Larger aspect ratios + tight quality for editorial photography
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
