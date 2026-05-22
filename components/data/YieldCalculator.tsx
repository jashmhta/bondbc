"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { CashflowChart } from "./CashflowChart";
import { generateSampleCashflows } from "@/lib/finance";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

/**
 * YieldCalculator — interactive bond cashflow projector.
 *
 * Three sliders + a frequency selector control face value, coupon, and tenor.
 * Outputs a live cashflow chart + KPI strip (total interest, principal at
 * maturity, Macaulay duration).
 *
 * Dynamic slider fill: each track shows a gold gradient that ends exactly at
 * the current value position — controlled via CSS custom property updated
 * per-slider.
 */
export function YieldCalculator() {
  const [face, setFace] = useState(1_00_00_000);
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

  // Compute fill percentage for each slider
  const faceMin = 10_00_000, faceMax = 50_00_00_000;
  const facePct = ((face - faceMin) / (faceMax - faceMin)) * 100;
  const couponPct = ((coupon - 5) / (14 - 5)) * 100;
  const tenorPct = ((tenor - 1) / (30 - 1)) * 100;

  return (
    <div className="card-quiet overflow-hidden">
      {/* Heading row */}
      <div className="px-5 sm:px-8 pt-6 sm:pt-8 pb-5 border-b border-[var(--rule)] flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow text-[var(--accent)] mb-1.5">Live Bond Calculator</p>
          <h3
            className="text-[clamp(18px,2.2vw,28px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
            }}
          >
            Project the cashflows on your next placement.
          </h3>
        </div>
        <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--ink-dim)] font-mono">
          Indicative · Pre-tax
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Controls */}
        <div className="lg:col-span-5 p-5 sm:p-8 border-b lg:border-b-0 lg:border-r border-[var(--rule)] space-y-7">
          <SliderRow
            label="Face value"
            value={`₹${inrCompact(face)}`}
            fillPct={facePct}
            input={
              <input
                type="range"
                min={faceMin}
                max={faceMax}
                step={5_00_000}
                value={face}
                onChange={(e) => setFace(Number(e.target.value))}
                className="bb-range w-full"
                aria-label="Face value"
              />
            }
          />

          <SliderRow
            label="Coupon"
            value={`${coupon.toFixed(2)} %`}
            fillPct={couponPct}
            input={
              <input
                type="range"
                min={5}
                max={14}
                step={0.05}
                value={coupon}
                onChange={(e) => setCoupon(Number(e.target.value))}
                className="bb-range w-full"
                aria-label="Coupon rate"
              />
            }
          />

          <SliderRow
            label="Tenor"
            value={`${tenor} ${tenor === 1 ? "year" : "years"}`}
            fillPct={tenorPct}
            input={
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={tenor}
                onChange={(e) => setTenor(Number(e.target.value))}
                className="bb-range w-full"
                aria-label="Tenor in years"
              />
            }
          />

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
        <div className="lg:col-span-7 p-5 sm:p-8">
          {/* KPI strip — 1 col mobile, 3 col tablet+ */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--rule)] rounded-lg overflow-hidden border border-[var(--rule)] mb-6">
            <Kpi label="Total interest" value={`₹${inrCompact(totalInterest)}`} />
            <Kpi label="Principal at maturity" value={`₹${inrCompact(principalAtMaturity)}`} />
            <Kpi
              label="Macaulay duration"
              value={`${macaulayDuration.toFixed(2)} y`}
              sub="approx"
            />
          </div>

          <CashflowChart data={cashflows} height={220} />

          <p className="mt-4 text-[11px] text-[var(--ink-dim)] flex items-start gap-1.5">
            <Info className="h-3 w-3 mt-[2px] shrink-0" />
            Macaulay duration is computed at the entered yield. Modified duration ≈
            Macaulay ÷ (1 + y/m). Tax (Section 194A TDS) and settlement fees are not
            modelled here.
          </p>
        </div>
      </div>

      <style jsx global>{`
        .bb-range {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          background: linear-gradient(
            to right,
            var(--accent) 0%,
            var(--accent) var(--bb-fill, 50%),
            var(--rule-strong) var(--bb-fill, 50%),
            var(--rule-strong) 100%
          );
          border-radius: 2px;
          outline: none;
          cursor: grab;
        }
        .bb-range:active {
          cursor: grabbing;
        }
        .bb-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent);
          border: 3px solid var(--bg);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          cursor: grab;
          transition: transform 0.15s var(--ease-out-expo), background 0.15s ease;
        }
        .bb-range::-webkit-slider-thumb:hover {
          transform: scale(1.12);
        }
        .bb-range::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.2);
        }
        .bb-range::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--accent);
          border: 3px solid var(--bg);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          cursor: grab;
        }
        .bb-range:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 4px;
        }
      `}</style>
    </div>
  );
}

function SliderRow({
  label,
  value,
  input,
  fillPct,
}: {
  label: string;
  value: string;
  input: React.ReactNode;
  fillPct: number;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-3">
        <p className="eyebrow !text-[10px]">{label}</p>
        <p className="num-display text-[16px] sm:text-[17px] text-[var(--ink)] leading-none">
          {value}
        </p>
      </div>
      <div
        style={{ "--bb-fill": `${fillPct}%` } as React.CSSProperties}
        className="py-2 -my-2"
      >
        {input}
      </div>
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
    <div className="bg-[var(--bg)] p-4 sm:p-5">
      <p className="eyebrow !text-[10px] mb-2">{label}</p>
      <p className="num-display text-[clamp(20px,2.2vw,26px)] text-[var(--ink)] leading-none tracking-[-0.01em]">
        {value}
      </p>
      {sub && (
        <p className="mt-1.5 text-[10px] text-[var(--ink-dim)] tracking-[0.1em] uppercase">
          {sub}
        </p>
      )}
    </div>
  );
}
