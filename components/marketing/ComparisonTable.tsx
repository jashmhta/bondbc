"use client";

import { CheckCircle2, X, Circle } from "lucide-react";
import { MotionSection } from "@/components/motion/MotionSection";

type Cell = "yes" | "no" | "partial" | string;

interface Row {
  feature: string;
  hint?: string;
  binaryBonds: Cell;
  obpp1: Cell;
  obpp2: Cell;
  obpp3: Cell;
}

const COMPETITORS = ["Wint Wealth", "GoldenPi", "IndiaBonds"];

const ROWS: Row[] = [
  {
    feature: "Institutional underwriting",
    hint: "Firm commitment of balance sheet during issuance",
    binaryBonds: "yes",
    obpp1: "no",
    obpp2: "no",
    obpp3: "no",
  },
  {
    feature: "Direct rating-agency engagement",
    hint: "We co-shape the credit story with CRISIL / ICRA",
    binaryBonds: "yes",
    obpp1: "no",
    obpp2: "no",
    obpp3: "no",
  },
  {
    feature: "Macaulay & Modified duration shown",
    hint: "Pre-purchase duration math, not hidden in PDFs",
    binaryBonds: "yes",
    obpp1: "no",
    obpp2: "no",
    obpp3: "partial",
  },
  {
    feature: "Live G-Sec yield curve",
    hint: "Spread visualisation against the risk-free benchmark",
    binaryBonds: "yes",
    obpp1: "no",
    obpp2: "no",
    obpp3: "no",
  },
  {
    feature: "Fee transparency (worked examples)",
    hint: "Published bps, not term-sheet negotiated",
    binaryBonds: "yes",
    obpp1: "no",
    obpp2: "no",
    obpp3: "partial",
  },
  {
    feature: "Voiced market commentary",
    hint: "Letters from the desk, opinionated macro",
    binaryBonds: "yes",
    obpp1: "no",
    obpp2: "no",
    obpp3: "no",
  },
  {
    feature: "Bespoke programmes for treasuries",
    hint: "Mandates ≥ ₹25 Cr structured around your liabilities",
    binaryBonds: "yes",
    obpp1: "no",
    obpp2: "no",
    obpp3: "no",
  },
  {
    feature: "Retail-style listing browser",
    hint: "ISIN-by-ISIN catalog for individual investors",
    binaryBonds: "partial",
    obpp1: "yes",
    obpp2: "yes",
    obpp3: "yes",
  },
];

function Mark({ value }: { value: Cell }) {
  if (value === "yes") {
    return (
      <span
        className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[var(--accent-muted)] text-[var(--accent)]"
        aria-label="Available"
      >
        <CheckCircle2 className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === "no") {
    return (
      <span
        className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[var(--bg-2)] text-[var(--ink-dim)]"
        aria-label="Not available"
      >
        <X className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span
        className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-[var(--bg-2)] text-[var(--ink-muted)]"
        aria-label="Partial"
      >
        <Circle className="h-3 w-3 fill-current" />
      </span>
    );
  }
  return (
    <span className="font-mono text-[12px] text-[var(--ink-muted)]">{value}</span>
  );
}

/**
 * ComparisonTable — institutional Binary Bonds vs Indian retail OBPPs.
 * Honest positioning: we win on the institutional dimensions, they win on
 * retail browsing. Frames the trade-off our clients face.
 */
export function ComparisonTable() {
  return (
    <div className="card-quiet overflow-hidden">
      {/* Heading */}
      <div className="px-5 sm:px-8 pt-7 pb-5 border-b border-[var(--rule)]">
        <p className="eyebrow text-[var(--accent)] mb-2">How we differ</p>
        <h3
          className="text-[clamp(20px,2.4vw,30px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)]"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
          }}
        >
          Where institutional and retail diverge.
        </h3>
        <p className="mt-2 text-[13px] sm:text-[14px] text-[var(--ink-muted)] max-w-2xl leading-[1.55]">
          A side-by-side with India&apos;s leading retail bond platforms. Different products,
          different audiences — read this as a fit check, not a hit piece.
        </p>
      </div>

      {/* Desktop / tablet table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-[14px]">
          <thead>
            <tr className="border-b border-[var(--rule)] bg-[var(--bg-2)]">
              <th className="text-left px-5 sm:px-8 py-4 eyebrow !text-[10px] w-[42%]">
                Capability
              </th>
              <th className="text-center px-3 sm:px-4 py-4">
                <p className="eyebrow !text-[10px] text-[var(--accent)]">Binary Bonds</p>
                <p className="text-[11px] text-[var(--ink-dim)] mt-1 font-mono tracking-[0.08em]">
                  Institutional
                </p>
              </th>
              {COMPETITORS.map((c) => (
                <th key={c} className="text-center px-3 sm:px-4 py-4">
                  <p className="eyebrow !text-[10px]">{c}</p>
                  <p className="text-[11px] text-[var(--ink-dim)] mt-1 font-mono tracking-[0.08em]">
                    Retail OBPP
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--rule)]">
            {ROWS.map((r) => (
              <tr key={r.feature} className="hover:bg-[var(--bg-2)]/50 transition-colors">
                <td className="px-5 sm:px-8 py-4">
                  <p className="text-[14px] text-[var(--ink)] font-medium leading-tight">
                    {r.feature}
                  </p>
                  {r.hint && (
                    <p className="mt-1 text-[12px] text-[var(--ink-dim)] leading-[1.45]">
                      {r.hint}
                    </p>
                  )}
                </td>
                <td className="text-center px-3 sm:px-4 py-4">
                  <Mark value={r.binaryBonds} />
                </td>
                <td className="text-center px-3 sm:px-4 py-4">
                  <Mark value={r.obpp1} />
                </td>
                <td className="text-center px-3 sm:px-4 py-4">
                  <Mark value={r.obpp2} />
                </td>
                <td className="text-center px-3 sm:px-4 py-4">
                  <Mark value={r.obpp3} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stack — pivoted as feature-rows */}
      <div className="sm:hidden divide-y divide-[var(--rule)]">
        {ROWS.map((r) => (
          <div key={r.feature} className="p-5">
            <p className="text-[14px] text-[var(--ink)] font-medium leading-tight">
              {r.feature}
            </p>
            {r.hint && (
              <p className="mt-1 text-[12px] text-[var(--ink-dim)] leading-[1.5]">
                {r.hint}
              </p>
            )}
            <div className="mt-4 grid grid-cols-4 gap-2">
              <div className="text-center">
                <p className="text-[9px] tracking-[0.12em] uppercase text-[var(--accent)] mb-1.5">
                  BB
                </p>
                <Mark value={r.binaryBonds} />
              </div>
              <div className="text-center">
                <p className="text-[9px] tracking-[0.12em] uppercase text-[var(--ink-dim)] mb-1.5">
                  Wint
                </p>
                <Mark value={r.obpp1} />
              </div>
              <div className="text-center">
                <p className="text-[9px] tracking-[0.12em] uppercase text-[var(--ink-dim)] mb-1.5">
                  G·Pi
                </p>
                <Mark value={r.obpp2} />
              </div>
              <div className="text-center">
                <p className="text-[9px] tracking-[0.12em] uppercase text-[var(--ink-dim)] mb-1.5">
                  I·B
                </p>
                <Mark value={r.obpp3} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="px-5 sm:px-8 py-4 border-t border-[var(--rule)] bg-[var(--bg-2)]">
        <p className="text-[11px] text-[var(--ink-dim)] leading-[1.55]">
          Comparison reflects publicly-disclosed capabilities as of April 2026. OBPP product
          surfaces evolve quickly — verify on their sites. Binary Bonds&apos; retail-style
          listing browser will launch with{" "}
          <a
            href="https://bondtrading-2gpm5jbj.manus.space" target="_blank" rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline underline-offset-2"
          >
            Buy Bonds Q4 2026
          </a>
          .
        </p>
      </div>
    </div>
  );
}
