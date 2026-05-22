"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { BRAND } from "@/lib/brand";

/**
 * MumbaiMap — stylized editorial map of Mumbai with our office marker.
 *
 * Pure SVG (no external map service) — generated coastline + districts +
 * animated pulse on the Andheri West marker. Reads as a designer's
 * cartographic illustration, not a Google Maps embed.
 */
export function MumbaiMap() {
  return (
    <div className="relative card-quiet overflow-hidden">
      <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-[var(--rule)] flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow text-[var(--accent)] mb-1.5">Find us</p>
          <h3
            className="text-[clamp(20px,2.2vw,26px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
            }}
          >
            Andheri West, Mumbai
          </h3>
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${BRAND.contact.address.coords}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[12px] text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors font-mono tracking-[0.04em]"
        >
          {BRAND.contact.address.coords}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="relative aspect-[16/10] bg-[var(--bg-2)] overflow-hidden">
        <svg
          viewBox="0 0 800 500"
          className="absolute inset-0 w-full h-full"
          aria-label="Stylized map of Mumbai with Binary Bonds office marker"
        >
          <defs>
            <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--bg-2)" />
              <stop offset="100%" stopColor="var(--bg-3)" />
            </linearGradient>
            <radialGradient id="mapVignette" cx="50%" cy="50%" r="65%">
              <stop offset="60%" stopColor="transparent" />
              <stop offset="100%" stopColor="var(--bg-3)" stopOpacity="0.4" />
            </radialGradient>
            <pattern id="streetGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="var(--rule)"
                strokeWidth="0.5"
                opacity="0.4"
              />
            </pattern>
          </defs>

          {/* Land base */}
          <rect width="800" height="500" fill="url(#mapBg)" />
          <rect width="800" height="500" fill="url(#streetGrid)" opacity="0.4" />

          {/* Arabian Sea (left edge) */}
          <path
            d="M0 0 L0 500 L160 500 C150 420, 180 360, 200 300 C210 240, 195 180, 200 120 C190 80, 180 40, 160 0 Z"
            fill="var(--bg-3)"
            opacity="0.55"
          />
          {/* Sea wave hatching */}
          {[60, 100, 140, 180, 220, 260, 300, 340, 380, 420].map((y) => (
            <path
              key={y}
              d={`M${10 + (y % 20)} ${y} q 20 -6, 40 0 t 40 0 t 40 0`}
              stroke="var(--rule-strong)"
              strokeWidth="0.6"
              fill="none"
              opacity="0.35"
            />
          ))}

          {/* Mahim Bay / inland water */}
          <path
            d="M180 240 C 220 230, 260 250, 280 280 C 270 320, 230 340, 200 320 Z"
            fill="var(--bg-3)"
            opacity="0.5"
          />

          {/* District lines (suggestion of street network) */}
          <g stroke="var(--rule-strong)" strokeWidth="0.8" fill="none" opacity="0.55">
            {/* Western Express Highway */}
            <path d="M 220 60 L 380 240 L 360 460" />
            {/* SV Road */}
            <path d="M 240 50 L 340 230 L 320 470" />
            {/* Link Road */}
            <path d="M 200 80 L 320 240 L 300 480" />
            {/* East-west cross streets */}
            <path d="M 220 180 L 540 180" />
            <path d="M 220 260 L 580 260" />
            <path d="M 220 340 L 560 340" />
          </g>

          {/* Andheri West label */}
          <g fontFamily="ui-monospace, monospace" fontSize="10" fill="var(--ink-dim)">
            <text x="280" y="218" letterSpacing="0.18em" textAnchor="start">
              ANDHERI W
            </text>
            <text x="450" y="190" letterSpacing="0.18em" textAnchor="start">
              BKC
            </text>
            <text x="500" y="320" letterSpacing="0.18em" textAnchor="start">
              BANDRA
            </text>
            <text x="380" y="430" letterSpacing="0.18em" textAnchor="start">
              WORLI
            </text>
            <text x="600" y="450" letterSpacing="0.18em" textAnchor="start">
              FORT
            </text>
            <text x="50" y="200" letterSpacing="0.18em" textAnchor="start" opacity="0.7">
              ARABIAN SEA
            </text>
          </g>

          {/* Office marker with pulse */}
          <g transform="translate(310, 245)">
            <motion.circle
              cx="0"
              cy="0"
              r="6"
              fill="var(--accent)"
              opacity="0.4"
              animate={{ r: [6, 22, 6], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
            <circle cx="0" cy="0" r="6" fill="var(--accent)" />
            <circle cx="0" cy="0" r="2.5" fill="var(--accent-fg)" />
          </g>

          {/* Vignette */}
          <rect width="800" height="500" fill="url(#mapVignette)" />
        </svg>

        {/* Floating address card */}
        <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:bottom-6 sm:right-6 sm:w-[260px] card-quiet bg-[var(--surface)]/95 backdrop-blur p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-[var(--accent)] mt-0.5 shrink-0" />
            <div>
              <p className="eyebrow !text-[10px] mb-1">Bond desk</p>
              <p className="text-[13px] text-[var(--ink)] leading-[1.45] font-medium">
                {BRAND.contact.address.line1}
              </p>
              <p className="text-[12px] text-[var(--ink-muted)] mt-0.5">
                {BRAND.contact.address.line2}
              </p>
              <p className="mt-2 text-[10px] font-mono tracking-[0.08em] text-[var(--ink-dim)]">
                {BRAND.contact.address.coords}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
