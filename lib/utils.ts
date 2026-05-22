import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Tailwind class merger — same primitive shadcn uses. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Indian number formatting ──────────────────────────────────────────────
// Indian numbering uses lakh (1,00,000) and crore (1,00,00,000) groupings.

const inrFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const inrFormatter2 = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2,
});

/** Format ₹ with Indian numbering (1,00,000). No decimals by default. */
export function inr(value: number, opts: { precise?: boolean } = {}): string {
  return opts.precise ? inrFormatter2.format(value) : inrFormatter.format(value);
}

/** Compact: "₹1.5 Cr", "₹2 L", "₹50 K" */
export function inrCompact(value: number): string {
  if (Math.abs(value) >= 1_00_00_000) {
    const cr = value / 1_00_00_000;
    return `₹${cr.toFixed(cr % 1 === 0 ? 0 : 1)} Cr`;
  }
  if (Math.abs(value) >= 1_00_000) {
    const l = value / 1_00_000;
    return `₹${l.toFixed(l % 1 === 0 ? 0 : 1)} L`;
  }
  if (Math.abs(value) >= 1_000) {
    return `₹${(value / 1_000).toFixed(0)}K`;
  }
  return `₹${value.toFixed(0)}`;
}

/** "8.45%" */
export function pct(value: number, decimals = 2): string {
  return `${value.toFixed(decimals)}%`;
}

/** "+25 bps" */
export function bps(value: number): string {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(0)} bps`;
}

// ─── Date helpers ──────────────────────────────────────────────────────────

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  year: "numeric",
  month: "short",
  day: "2-digit",
});

const dateMonthYear = new Intl.DateTimeFormat("en-IN", {
  year: "numeric",
  month: "short",
});

export function formatDate(d: Date | string): string {
  const dt = typeof d === "string" ? new Date(d) : d;
  return dateFormatter.format(dt);
}

export function formatMonthYear(d: Date | string): string {
  const dt = typeof d === "string" ? new Date(d) : d;
  return dateMonthYear.format(dt);
}

/** "2Y 3M 15D" residual-tenure formatter (matches existing app behavior) */
export function residualTenure(maturityDate: Date | string): string {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const m = typeof maturityDate === "string" ? new Date(maturityDate) : maturityDate;
  m.setHours(0, 0, 0, 0);
  if (isNaN(m.getTime()) || m <= today) return "Matured";
  let years = m.getFullYear() - today.getFullYear();
  let months = m.getMonth() - today.getMonth();
  let days = m.getDate() - today.getDate();
  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(m.getFullYear(), m.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  const parts: string[] = [];
  if (years > 0) parts.push(`${years}Y`);
  if (months > 0) parts.push(`${months}M`);
  if (days > 0 && years === 0) parts.push(`${days}D`);
  return parts.join(" ") || "< 1 Day";
}
