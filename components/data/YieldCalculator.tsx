"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { CashflowChart } from "./CashflowChart";
import { generateSampleCashflows } from "@/lib/finance";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

/**
 * YieldCalculator — interactive bond cashflow projection.
 *
 * Three sliders + a frequency selector control face value, coupon, and
 * tenor. Outputs a live bar chart of semi-annual cashflows + a summary
 * KPI strip showing total interest, principal at maturity, and an
 * approximate Macaulay duration.
 *
 * No competitor in the Indian institutional bond space exposes this kind
 * of live, transparent cashflow reasoning on their landing page. This is
 * deliberate — it shows we think in real bond mechanics, not marketing.
 */
export function YieldCalculator() {
  const [face, setFace] = useState(1_00_00_000); // 1 Cr default
  const [coupon, setCoupon] = useState(8.85);
  const [tenor, setTenor] = useState(5);
  const [frequency, setFrequency] = useState<"annual" | "semi-annual" | "quarterly">(
    "semi-annual",
  );

  const cashflows = useMemo(
    () =>
      generateSampleCashflows({
        faceValue: face,
        couponPct: coupon,
        tenureYears: tenor,
        frequency,
      }),
    [face, coupon, tenor, frequency],
  );

  const totalInterest = useMemo(
    () => cashflows.reduce((acc, c) => acc + c.interest, 0),
    [cashflows],
  );
  const principalAtMaturity = useMemo(
    () => cashflows.reduce((acc, c) => acc + c.principal, 0),
    [cashflows],
  );

  // Approximate Macaulay duration (years)
  const macaulayDuration = useMemo(() => {
    const r = coupon / 100;
    const m = frequency === "annual" ? 1 : frequency === "semi-annual" ? 2 : 4;
    const n = tenor * m;
    let weighted = 0;
    let pvSum = 0;
    for (let t = 1; t <= n; t++) {
      const cf = (face * r) / m + (t === n ? face : 0);
      const pv = cf / Math.pow(1 + r / m, t);
      weighted += (t / m) * pv;
      pvSum += pv;
    }
    return weighted / pvSum;
  }, [face, coupon, tenor, frequency]);

  const inrCompact = (n: number) => {
    if (n >= 1_00_00_000) return `${(n / 1_00_00_000).toFixed(2)} Cr`;
    if (n >= 1_00_000) return `${(n / 1_00_000).toFixed(1)} L`;
    if (n >= 1000) return `${(n / 1000).toFixed(0)} K`;
    return `${Math.round(n)}`;
  };

  return (
    <div className="card-quiet overflow-hidden">
      {/* Heading row */}
      <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-[var(--rule)] flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow text-[var(--accent)] mb-1.5">Live Bond Calculator</p>
          <h3 className="text-[clamp(20px,2.2vw,28px)] tracking-[-0.015em] leading-[1.15] text-[var(--ink)]">
            Project the cashflows on your next placement.
          </h3>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--ink-dim)] font-mono">
          Indicative · Pre-tax
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Controls */}
        <div className="lg:col-span-5 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[var(--rule)] space-y-6">
          {/* Face value */}
          <SliderRow
            label="Face value"
            value={`₹${inrCompact(face)}`}
            input={
              <input
                type="range"
                min={10_00_000}
                max={50_00_00_000}
                step={5_00_000}
                value={face}
                onChange={(e) => setFace(Number(e.target.value))}
                className="bb-range w-full"
              />
            }
          />

          {/* Coupon */}
          <SliderRow
            label="Coupon"
            value={`${coupon.toFixed(2)} %`}
            input={
              <input
                type="range"
                min={5}
                max={14}
                step={0.05}
                value={coupon}
                onChange={(e) => setCoupon(Number(e.target.value))}
                className="bb-range w-full"
              />
            }
          />

          {/* Tenor */}
          <SliderRow
            label="Tenor"
            value={`${tenor} ${tenor === 1 ? "year" : "years"}`}
            input={
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenor}
                onChange={(e) => setTenor(Number(e.target.value))}
                className="bb-range w-full"
              />
            }
          />

          {/* Frequency segmented */}
          <div>
            <p className="eyebrow !text-[10px] mb-2.5">Frequency</p>
            <div className="grid grid-cols-3 gap-1 p-1 rounded-md bg-[var(--bg-2)] border border-[var(--rule)]">
              {(["annual", "semi-annual", "quarterly"] as const).map((f) => {
                const active = frequency === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFrequency(f)}
                    className={`text-[12px] py-2 rounded-sm transition-colors ${
                      active
                        ? "bg-[var(--ink)] text-[var(--ink-inverse)] font-medium"
                        : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                    }`}
                  >
                    {f === "annual" ? "Annual" : f === "semi-annual" ? "Semi" : "Quarterly"}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rule-t pt-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[13px] text-[var(--accent)] font-medium hover:underline underline-offset-4"
            >
              Apply this analysis to your portfolio
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Output */}
        <div className="lg:col-span-7 p-6 sm:p-8">
          {/* KPI strip */}
          <div className="grid grid-cols-3 gap-px bg-[var(--rule)] rounded-md overflow-hidden border border-[var(--rule)] mb-6">
            <Kpi label="Total interest" value={`₹${inrCompact(totalInterest)}`} />
            <Kpi
              label="Principal at maturity"
              value={`₹${inrCompact(principalAtMaturity)}`}
            />
            <Kpi
              label="Macaulay duration"
              value={`${macaulayDuration.toFixed(2)} y`}
              sub="approx"
            />
          </div>

          {/* Chart */}
          <CashflowChart data={cashflows} height={220} />

          {/* Footnote */}
          <p className="mt-4 text-[11px] text-[var(--ink-dim)] flex items-start gap-1.5">
            <Info className="h-3 w-3 mt-[2px] shrink-0" />
            Macaulay duration is computed at the entered yield. Modified duration ≈
            Macaulay ÷ (1 + y/m). Tax (Section 194A TDS) and settlement fees are not
            modelled here.
          </p>
        </div>
      </div>

      {/* Custom slider styles */}
      <style jsx global>{`
        .bb-range {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: linear-gradient(
            to right,
            var(--accent) 0%,
            var(--accent) var(--bb-fill, 50%),
            var(--rule) var(--bb-fill, 50%),
            var(--rule) 100%
          );
          border-radius: 2px;
          outline: none;
        }
        .bb-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--ink);
          border: 2px solid var(--bg);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: grab;
          transition: transform 0.15s var(--ease-out-expo);
        }
        .bb-range::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.15);
        }
        .bb-range::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--ink);
          border: 2px solid var(--bg);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: grab;
        }
      `}</style>
    </div>
  );
}

function SliderRow({
  label,
  value,
  input,
}: {
  label: string;
  value: string;
  input: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <p className="eyebrow !text-[10px]">{label}</p>
        <p className="num-display text-[15px] text-[var(--ink)] leading-none">{value}</p>
      </div>
      {input}
    </div>
  );
}

function Kpi({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="bg-[var(--bg)] p-4">
      <p className="eyebrow !text-[10px] mb-1.5">{label}</p>
      <p className="num-display text-[clamp(18px,2vw,24px)] text-[var(--ink)] leading-none">
        {value}
      </p>
      {sub && (
        <p className="mt-1 text-[10px] text-[var(--ink-dim)] tracking-[0.1em] uppercase">
          {sub}
        </p>
      )}
    </div>
  );
}
