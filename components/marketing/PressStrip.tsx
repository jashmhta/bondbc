"use client";

import { Marquee } from "@/components/motion/Marquee";

const LOGOS = [
  "The Economic Times",
  "Mint",
  "Bloomberg",
  "Moneycontrol",
  "Business Standard",
  "CNBC TV18",
  "Outlook Money",
  "The Hindu BusinessLine",
  "BFSI",
  "Inc42",
];

export function PressStrip() {
  return (
    <div className="rule-t rule-b py-10 bg-[var(--bg-2)]">
      <p className="eyebrow text-center text-[var(--ink-dim)] mb-6">
        Coverage · written about / in conversation with
      </p>
      <Marquee speed={42} fadeEdges>
        {LOGOS.map((name) => (
          <span
            key={name}
            className="text-[clamp(18px,2vw,28px)] tracking-[-0.01em] text-[var(--ink-muted)] font-[family-name:var(--font-instrument-serif)] italic select-none"
          >
            {name}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
