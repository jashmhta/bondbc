"use client";

import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface YieldCurveChartProps {
  data: { tenor: string; yield: number; tenorYears: number }[];
  /** Optional bond placement on the curve to show spread */
  placeBond?: { tenorYears: number; yield: number; label: string };
  height?: number;
}

export function YieldCurveChart({ data, placeBond, height = 320 }: YieldCurveChartProps) {
  // Mount-gate prevents Recharts SSR width(-1) warning + first-paint blank
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div
        className="w-full relative overflow-hidden"
        style={{ height }}
        aria-hidden
      >
        {/* Mock curve — gentle upward sweep */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 40"
        >
          <defs>
            <linearGradient id="curveSkel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--rule)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--rule)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0 30 Q 25 25, 40 18 T 100 8 L 100 40 L 0 40 Z"
            fill="url(#curveSkel)"
          />
          <path
            d="M 0 30 Q 25 25, 40 18 T 100 8"
            stroke="var(--rule)"
            strokeWidth="0.5"
            fill="none"
          />
        </svg>
        {/* Tenor labels */}
        <div className="absolute inset-x-0 bottom-0 flex justify-between px-4 text-[11px] text-[var(--ink-dim)] font-mono">
          {["1Y", "3Y", "5Y", "7Y", "10Y", "15Y", "20Y", "30Y"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 16, right: 16, bottom: 8, left: 8 }}>
          <defs>
            <linearGradient id="curveFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.18} />
              <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} stroke="var(--rule)" strokeDasharray="2 4" />
          <XAxis
            dataKey="tenor"
            tick={{ fill: "var(--ink-dim)", fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: "var(--rule)" }}
          />
          <YAxis
            tickFormatter={(v: number) => `${v.toFixed(1)}%`}
            tick={{ fill: "var(--ink-dim)", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            domain={["dataMin - 0.3", "dataMax + 0.3"]}
            width={48}
          />
          <Tooltip
            cursor={{ stroke: "var(--ink-dim)", strokeDasharray: "2 2" }}
            content={({ active, payload }) => {
              if (!active || !payload?.length) return null;
              const d = payload[0].payload as { tenor: string; yield: number };
              return (
                <div className="card-quiet !p-3 shadow-[var(--shadow-md)]">
                  <p className="eyebrow !text-[10px] mb-1">G-Sec {d.tenor}</p>
                  <p className="font-mono text-[14px] font-medium text-[var(--ink)]">
                    {d.yield.toFixed(2)}%
                  </p>
                </div>
              );
            }}
          />
          <Area
            type="monotone"
            dataKey="yield"
            stroke="var(--chart-1)"
            strokeWidth={2}
            fill="url(#curveFill)"
            isAnimationActive={false}
            dot={{ r: 3, fill: "var(--chart-1)", stroke: "var(--bg)", strokeWidth: 2 }}
            activeDot={{ r: 4, fill: "var(--chart-1)", stroke: "var(--bg)", strokeWidth: 2 }}
          />
          {placeBond && (
            <ReferenceDot
              x={data.find((d) => Math.abs(d.tenorYears - placeBond.tenorYears) < 0.3)?.tenor}
              y={placeBond.yield}
              r={6}
              fill="var(--accent)"
              stroke="var(--bg)"
              strokeWidth={3}
            />
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
