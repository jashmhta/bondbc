"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Activity, Award } from "lucide-react";

type Placement = {
  issuer: string;
  rating: string;
  tenor: string;
  coupon: string;
  size: string;
  type: "Underwriting" | "Secondary" | "Placement";
  status: "Live" | "Pricing" | "Closed";
  sinceMinutes?: number;
};

// Indicative book — never claims to be real-time
const PLACEMENTS: Placement[] = [
  {
    issuer: "AAA-PSU · Power",
    rating: "AAA",
    tenor: "10Y",
    coupon: "7.42 %",
    size: "₹250 Cr",
    type: "Underwriting",
    status: "Live",
    sinceMinutes: 12,
  },
  {
    issuer: "AAA-Corp · NBFC",
    rating: "AAA",
    tenor: "5Y",
    coupon: "8.85 %",
    size: "₹100 Cr",
    type: "Placement",
    status: "Pricing",
    sinceMinutes: 38,
  },
  {
    issuer: "AA+ · Infrastructure",
    rating: "AA+",
    tenor: "7Y",
    coupon: "9.05 %",
    size: "₹75 Cr",
    type: "Secondary",
    status: "Live",
    sinceMinutes: 64,
  },
  {
    issuer: "AAA-PSU · Banking",
    rating: "AAA",
    tenor: "3Y",
    coupon: "7.18 %",
    size: "₹400 Cr",
    type: "Underwriting",
    status: "Closed",
    sinceMinutes: 124,
  },
  {
    issuer: "AA · Real Estate",
    rating: "AA",
    tenor: "5Y",
    coupon: "9.75 %",
    size: "₹50 Cr",
    type: "Placement",
    status: "Closed",
    sinceMinutes: 218,
  },
];

const STATUS_TONE: Record<Placement["status"], string> = {
  Live: "text-[var(--gain)]",
  Pricing: "text-[var(--warn)]",
  Closed: "text-[var(--ink-dim)]",
};

/**
 * TodayOnTheDesk — indicative live placements widget.
 *
 * Cycles through 3 representative deals at a time. Clearly labelled as
 * indicative so it doesn't claim to be real-time market data (we'd need
 * SEBI EBP reporting integration for that — a Phase 2 project).
 */
export function TodayOnTheDesk() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick((t) => (t + 1) % PLACEMENTS.length), 5500);
    return () => clearInterval(id);
  }, []);

  // Show 3 placements at a time, rotating
  const visible = [0, 1, 2].map((i) => PLACEMENTS[(tick + i) % PLACEMENTS.length]);

  return (
    <div className="card-quiet overflow-hidden">
      <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-[var(--rule)] flex flex-wrap items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent)]">
              <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
            </span>
            <p className="eyebrow text-[var(--accent)]">Today on the desk</p>
          </div>
          <h3
            className="text-[clamp(18px,2.2vw,26px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
            }}
          >
            Recent placements from our book.
          </h3>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--ink-dim)] font-mono">
          Indicative · last 24h
        </span>
      </div>

      {/* Placements list */}
      <div className="divide-y divide-[var(--rule)]">
        <AnimatePresence mode="wait" initial={false}>
          {visible.map((p, i) => (
            <motion.div
              key={`${tick}-${i}-${p.issuer}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto_auto_auto] gap-3 sm:gap-6 items-baseline px-5 sm:px-8 py-4 sm:py-5 group hover:bg-[var(--bg-2)]/50 transition-colors"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.14em] uppercase ${STATUS_TONE[p.status]}`}
                  >
                    {p.status === "Live" ? (
                      <Activity className="h-2.5 w-2.5" />
                    ) : p.status === "Pricing" ? (
                      <TrendingUp className="h-2.5 w-2.5" />
                    ) : (
                      <Award className="h-2.5 w-2.5" />
                    )}
                    {p.status}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--ink-dim)]">·</span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--ink-dim)]">
                    {p.type}
                  </span>
                  {p.sinceMinutes !== undefined && (
                    <>
                      <span className="text-[10px] font-mono text-[var(--ink-dim)]">·</span>
                      <span className="text-[10px] font-mono text-[var(--ink-dim)]">
                        {p.sinceMinutes < 60
                          ? `${p.sinceMinutes}m ago`
                          : `${Math.round(p.sinceMinutes / 60)}h ago`}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-[14px] sm:text-[15px] text-[var(--ink)] font-medium leading-tight">
                  {p.issuer}
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--ink-dim)]">
                  Tenor
                </span>
                <span className="text-[13px] text-[var(--ink)] font-mono">{p.tenor}</span>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--ink-dim)]">
                  Coupon
                </span>
                <span className="text-[13px] text-[var(--accent)] font-mono">{p.coupon}</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[var(--ink-dim)]">
                  Size
                </span>
                <span className="text-[14px] sm:text-[15px] text-[var(--ink)] font-medium tabular-nums">
                  {p.size}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footnote */}
      <div className="px-5 sm:px-8 py-3.5 border-t border-[var(--rule)] bg-[var(--bg-2)]">
        <p className="text-[11px] text-[var(--ink-dim)] leading-[1.5]">
          Indicative recent placements from our institutional book. Names anonymised. Full
          deal economics shared in engagement under NDA.
        </p>
      </div>
    </div>
  );
}
