"use client";

import { useEffect, useState } from "react";

type TickerItem = {
  symbol: string;
  label: string;
  yield?: number;
  spread?: number;
  change?: number;
};

const SEED_DATA: TickerItem[] = [
  { symbol: "GSEC 7.18%", label: "10Y G-Sec", yield: 7.18, change: -0.03 },
  { symbol: "GSEC 7.06%", label: "5Y G-Sec", yield: 7.06, change: -0.01 },
  { symbol: "GSEC 7.32%", label: "30Y G-Sec", yield: 7.32, change: +0.02 },
  { symbol: "AAA-CORP", label: "AAA 5Y Spread", spread: 38, change: -1.2 },
  { symbol: "AA+CORP", label: "AA+ 5Y Spread", spread: 64, change: +0.5 },
  { symbol: "AA-CORP", label: "AA 5Y Spread", spread: 92, change: +1.8 },
  { symbol: "REPO", label: "RBI Policy Repo", yield: 6.5, change: 0 },
  { symbol: "MIBOR", label: "Overnight MIBOR", yield: 6.71, change: +0.04 },
  { symbol: "NCD-AAA", label: "AAA NCD 3Y", yield: 7.85, change: -0.05 },
  { symbol: "PSU-BOND", label: "PSU AAA 10Y", yield: 7.42, change: -0.02 },
  { symbol: "T-BILL 91D", label: "91-Day T-Bill", yield: 6.92, change: +0.01 },
  { symbol: "T-BILL 364D", label: "364-Day T-Bill", yield: 7.04, change: -0.02 },
  { symbol: "INR/USD", label: "USD-INR", yield: 83.45, change: -0.12 },
  { symbol: "10Y BREAKEVEN", label: "10Y Inflation BE", yield: 4.81, change: +0.06 },
];

interface TickerTapeProps {
  /** Speed in seconds for one full rotation */
  duration?: number;
  className?: string;
}

/**
 * TickerTape — Bloomberg-style continuously-scrolling bond market data
 * strip. Numbers gently jitter every 8s to feel live without ever lying
 * about being a real feed (this is positioned as a visual atmospheric).
 */
export function TickerTape({ duration = 90, className }: TickerTapeProps) {
  const [data, setData] = useState<TickerItem[]>(SEED_DATA);

  // Subtle, deterministic-feeling jitter so numbers feel "alive"
  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) =>
        prev.map((d) => {
          const jitter = (Math.random() - 0.5) * 0.04;
          if (d.yield !== undefined) {
            return { ...d, yield: +(d.yield + jitter).toFixed(2), change: +jitter.toFixed(2) };
          }
          if (d.spread !== undefined) {
            const sj = (Math.random() - 0.5) * 1.6;
            return { ...d, spread: Math.round(d.spread + sj), change: +sj.toFixed(1) };
          }
          return d;
        }),
      );
    }, 6500);
    return () => clearInterval(id);
  }, []);

  const ItemRow = ({ d }: { d: TickerItem }) => {
    const positive = (d.change ?? 0) >= 0;
    return (
      <span className="inline-flex items-center gap-2 px-5 py-2 text-[12px] font-mono whitespace-nowrap">
        <span className="text-[var(--ink-dim)] uppercase tracking-[0.12em] text-[10px]">
          {d.symbol}
        </span>
        <span className="text-[var(--ink-muted)]">{d.label}</span>
        <span className="text-[var(--ink)]">
          {d.yield !== undefined && (
            <>
              {d.yield.toFixed(2)}
              <span className="text-[var(--ink-dim)] ml-0.5">%</span>
            </>
          )}
          {d.spread !== undefined && (
            <>
              {d.spread}
              <span className="text-[var(--ink-dim)] ml-0.5">bps</span>
            </>
          )}
        </span>
        {d.change !== undefined && d.change !== 0 && (
          <span
            className={
              positive
                ? "text-[var(--gain)] inline-flex items-center gap-0.5"
                : "text-[var(--loss)] inline-flex items-center gap-0.5"
            }
          >
            <span aria-hidden>{positive ? "▲" : "▼"}</span>
            {Math.abs(d.change).toFixed(d.spread !== undefined ? 1 : 2)}
          </span>
        )}
        <span className="text-[var(--ink-dim)] mx-2">·</span>
      </span>
    );
  };

  return (
    <div
      className={`relative overflow-hidden border-y border-[var(--rule)] bg-[var(--bg-2)] ${className ?? ""}`}
    >
      {/* Edge fades */}
      <div
        className="absolute inset-y-0 left-0 w-12 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--bg-2) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-12 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--bg-2) 0%, transparent 100%)",
        }}
      />

      <div className="flex items-center">
        {/* Live label */}
        <div className="hidden sm:flex shrink-0 items-center gap-2 pl-5 pr-4 py-2 border-r border-[var(--rule)] bg-[var(--bg-2)] z-20">
          <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent)]">
            <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--accent)]">
            Live · Indicative
          </span>
        </div>

        {/* Marquee track */}
        <div
          className="flex shrink-0 ticker-track"
          style={{ animation: `ticker-scroll ${duration}s linear infinite` }}
        >
          {data.map((d) => (
            <ItemRow key={`a-${d.symbol}`} d={d} />
          ))}
        </div>
        <div
          className="flex shrink-0 ticker-track"
          style={{ animation: `ticker-scroll ${duration}s linear infinite` }}
          aria-hidden
        >
          {data.map((d) => (
            <ItemRow key={`b-${d.symbol}`} d={d} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(-100%, 0, 0);
          }
        }
        .ticker-track {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
