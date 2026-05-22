"use client";

import { Marquee } from "@/components/motion/Marquee";

/**
 * HugeMarquee — massive horizontal scrolling tagline strip used between sections.
 * Editorial replacement for stat strips.
 */
export function HugeMarquee({
  items,
  speed = 60,
  className,
}: {
  items: string[];
  speed?: number;
  className?: string;
}) {
  return (
    <div className={`py-8 sm:py-12 overflow-hidden ${className ?? ""}`}>
      <Marquee speed={speed} fadeEdges={false}>
        {items.map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 sm:gap-14 text-[clamp(56px,11vw,180px)] leading-[0.9] tracking-[-0.04em] select-none"
            style={{ fontFamily: "var(--font-fraunces)", fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1' }}
          >
            <span className="text-[var(--ink)]">{it}</span>
            <span aria-hidden className="text-[var(--accent)] text-[0.6em]">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
