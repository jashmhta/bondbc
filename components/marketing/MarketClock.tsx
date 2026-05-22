"use client";

import { useEffect, useState } from "react";

interface MarketClockProps {
  className?: string;
  variant?: "compact" | "full";
}

/**
 * MarketClock — live IST clock with a market-status indicator.
 * Calculates whether NSE/BSE is currently in the 09:00–17:00 IST trading window.
 * The "BBND DESK" label keeps the institutional voice.
 */
export function MarketClock({ className, variant = "full" }: MarketClockProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return (
      <span
        className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--ink-dim)] ${className ?? ""}`}
        aria-hidden
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink-dim)]" />
        Bond Desk · Mumbai
      </span>
    );
  }

  const istFormatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const dayFormatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
  });
  const time = istFormatter.format(now);
  const day = dayFormatter.format(now);

  // IST hour
  const istNow = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
  );
  const hour = istNow.getHours();
  const minute = istNow.getMinutes();
  const dayOfWeek = istNow.getDay(); // 0=Sun, 6=Sat

  const isWeekday = dayOfWeek !== 0 && dayOfWeek !== 6;
  const totalMin = hour * 60 + minute;
  // Markets: 09:00–17:00 IST (debt segment is 09:00–17:00)
  const marketOpen = isWeekday && totalMin >= 9 * 60 && totalMin < 17 * 60;

  if (variant === "compact") {
    return (
      <span
        className={`inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] uppercase ${className ?? ""}`}
      >
        <span
          className={`relative h-1.5 w-1.5 rounded-full ${
            marketOpen ? "bg-[var(--accent)]" : "bg-[var(--ink-dim)]"
          }`}
        >
          {marketOpen && (
            <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
          )}
        </span>
        <span className="text-[var(--ink-muted)]">
          {time} <span className="text-[var(--ink-dim)]">IST</span>
        </span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.16em] uppercase ${className ?? ""}`}
    >
      <span
        className={`relative h-1.5 w-1.5 rounded-full ${
          marketOpen ? "bg-[var(--accent)]" : "bg-[var(--ink-dim)]"
        }`}
      >
        {marketOpen && (
          <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
        )}
      </span>
      <span className="text-[var(--accent)]">
        {marketOpen ? "Desk Open" : "Desk Closed"}
      </span>
      <span className="text-[var(--ink-dim)]">·</span>
      <span className="text-[var(--ink-muted)] tabular-nums">
        {day} {time} <span className="text-[var(--ink-dim)]">IST</span>
      </span>
    </span>
  );
}
