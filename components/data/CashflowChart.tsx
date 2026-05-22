"use client";

import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { inrCompact } from "@/lib/utils";

interface CashflowChartProps {
  data: { date: string; interest: number; principal: number }[];
  height?: number;
  showGrid?: boolean;
}

export function CashflowChart({ data, height = 280, showGrid = true }: CashflowChartProps) {
  // Recharts ResponsiveContainer can't measure size during SSR — mount-gate
  // prevents the blank-flash AND the "width(-1) height(-1)" console warning.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Compress dates: show year only, except last point gets month-year
  const chartData = data.map((d, i) => ({
    ...d,
    label:
      i === data.length - 1
        ? `${new Date(d.date).toLocaleString("en-IN", { month: "short", year: "2-digit" })}`
        : i % Math.ceil(data.length / 8) === 0
          ? new Date(d.date).getFullYear().toString()
          : "",
  }));

  if (!mounted) {
    return (
      <div
        className="w-full relative overflow-hidden rounded-md"
        style={{ height }}
        aria-hidden
      >
        {/* Skeleton bars — paints something instead of blank during SSR */}
        <div className="absolute inset-x-2 bottom-2 top-6 flex items-end gap-[3%] pr-14">
          {Array.from({ length: 14 }).map((_, i) => {
            const h = 25 + ((i * 13) % 60);
            return (
              <span
                key={i}
                className="flex-1 rounded-sm bg-[var(--rule)]"
                style={{ height: `${h}%` }}
              />
            );
          })}
        </div>
        <span className="absolute right-2 top-1 bottom-1 w-12 flex flex-col justify-between py-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="h-px w-full bg-[var(--rule)]/60" />
          ))}
        </span>
      </div>
    );
  }

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
          {showGrid && (
            <CartesianGrid
              vertical={false}
              stroke="var(--rule)"
              strokeDasharray="2 4"
            />
          )}
          <XAxis
            dataKey="label"
            tick={{ fill: "var(--ink-dim)", fontSize: 11 }}
            tickLine={false}
            axisLine={{ stroke: "var(--rule)" }}
          />
          <YAxis
            tickFormatter={(v) => inrCompact(v)}
            tick={{ fill: "var(--ink-dim)", fontSize: 11 }}
            tickLine={false}
            axisLine={false}
            width={60}
          />
          <Tooltip
            cursor={{ fill: "var(--accent-muted)" }}
            content={({ active, payload, label }) => {
              if (!active || !payload || payload.length === 0) return null;
              const interest = (payload.find((p) => p.dataKey === "interest")?.value ?? 0) as number;
              const principal = (payload.find((p) => p.dataKey === "principal")?.value ?? 0) as number;
              const date = (payload[0]?.payload as { date: string })?.date ?? label;
              return (
                <div className="card-quiet !p-3 shadow-[var(--shadow-md)]">
                  <p className="eyebrow !text-[10px] mb-1.5">{date}</p>
                  <div className="space-y-1 text-[12px]">
                    <div className="flex items-center justify-between gap-6">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-[var(--chart-1)]" />
                        <span className="text-[var(--ink-muted)]">Interest</span>
                      </span>
                      <span className="font-mono font-medium text-[var(--ink)]">
                        {inrCompact(interest)}
                      </span>
                    </div>
                    {principal > 0 && (
                      <div className="flex items-center justify-between gap-6">
                        <span className="flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-[var(--chart-2)]" />
                          <span className="text-[var(--ink-muted)]">Principal</span>
                        </span>
                        <span className="font-mono font-medium text-[var(--ink)]">
                          {inrCompact(principal)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            }}
          />
          <Bar
            dataKey="interest"
            stackId="cf"
            fill="var(--chart-1)"
            radius={[0, 0, 0, 0]}
            isAnimationActive={false}
          />
          <Bar
            dataKey="principal"
            stackId="cf"
            fill="var(--chart-2)"
            radius={[3, 3, 0, 0]}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
