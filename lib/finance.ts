/**
 * Client-safe pure financial functions.
 * These mirror the server-side logic in the existing codebase so we can
 * compute yields, post-tax IRR, duration, etc. inline in marketing pages.
 */

// ─── XIRR (Newton-Raphson) ────────────────────────────────────────────────
const MS_PER_DAY = 86_400_000;
const DAYS_PER_YEAR = 365;

function npv(rate: number, cf: { date: number; amount: number }[]) {
  const t0 = cf[0].date;
  let s = 0;
  for (const c of cf) {
    const years = (c.date - t0) / (MS_PER_DAY * DAYS_PER_YEAR);
    s += c.amount / Math.pow(1 + rate, years);
  }
  return s;
}

function dnpv(rate: number, cf: { date: number; amount: number }[]) {
  const t0 = cf[0].date;
  let s = 0;
  for (const c of cf) {
    const years = (c.date - t0) / (MS_PER_DAY * DAYS_PER_YEAR);
    if (years === 0) continue;
    s -= (years * c.amount) / Math.pow(1 + rate, years + 1);
  }
  return s;
}

export function xirr(
  cashflows: { date: Date | string | number; amount: number }[],
  guess = 0.1,
): number {
  const cf = cashflows
    .map((c) => ({
      date: typeof c.date === "number" ? c.date : new Date(c.date).getTime(),
      amount: c.amount,
    }))
    .sort((a, b) => a.date - b.date);
  let rate = guess;
  for (let i = 0; i < 1000; i++) {
    const f = npv(rate, cf);
    const df = dnpv(rate, cf);
    if (Math.abs(df) < 1e-15) break;
    const next = rate - f / df;
    if (Math.abs(next - rate) < 1e-10) return next;
    rate = Math.max(-0.99, Math.min(10, next));
  }
  return rate;
}

// ─── Modified / Macaulay Duration (proper, not approximation) ─────────────
export function macaulayDuration(
  cashflows: { date: Date | string | number; amount: number }[],
  yieldRate: number, // yield per year, e.g. 0.085 for 8.5%
): number {
  const cf = cashflows
    .map((c) => ({
      date: typeof c.date === "number" ? c.date : new Date(c.date).getTime(),
      amount: c.amount,
    }))
    .sort((a, b) => a.date - b.date);
  if (cf.length < 2) return 0;
  const t0 = cf[0].date;
  let pvSum = 0;
  let weightedSum = 0;
  for (const c of cf.slice(1)) {
    const t = (c.date - t0) / (MS_PER_DAY * DAYS_PER_YEAR);
    const pv = c.amount / Math.pow(1 + yieldRate, t);
    pvSum += pv;
    weightedSum += t * pv;
  }
  return pvSum > 0 ? weightedSum / pvSum : 0;
}

export function modifiedDuration(
  cashflows: { date: Date | string | number; amount: number }[],
  yieldRate: number,
  paymentsPerYear = 2,
): number {
  const dMac = macaulayDuration(cashflows, yieldRate);
  return dMac / (1 + yieldRate / paymentsPerYear);
}

// ─── Convexity ────────────────────────────────────────────────────────────
export function convexity(
  cashflows: { date: Date | string | number; amount: number }[],
  yieldRate: number,
): number {
  const cf = cashflows
    .map((c) => ({
      date: typeof c.date === "number" ? c.date : new Date(c.date).getTime(),
      amount: c.amount,
    }))
    .sort((a, b) => a.date - b.date);
  if (cf.length < 2) return 0;
  const t0 = cf[0].date;
  let priceSum = 0;
  let cxSum = 0;
  for (const c of cf.slice(1)) {
    const t = (c.date - t0) / (MS_PER_DAY * DAYS_PER_YEAR);
    const pv = c.amount / Math.pow(1 + yieldRate, t);
    priceSum += pv;
    cxSum += (t * (t + 1) * c.amount) / Math.pow(1 + yieldRate, t + 2);
  }
  return priceSum > 0 ? cxSum / priceSum : 0;
}

// ─── Post-tax (slab + surcharge + cess) IRR ─────────────────────────────
export interface PostTaxOptions {
  slab: 0 | 5 | 10 | 20 | 30; // marginal income-tax slab %
  surchargePct?: 0 | 10 | 15 | 25 | 37; // applies on tax (income > threshold)
  cessPct?: number; // health & education cess (default 4%)
  isNRI?: boolean; // flat 20% TDS for non-resident interest
  dtaaRate?: number; // override NRI rate (e.g. 10% for some treaties)
  isTaxFree?: boolean; // Section 10(15)(iv)(h) etc.
}

/** Effective tax rate on interest income, given user profile. */
export function effectiveTaxRate({
  slab,
  surchargePct = 0,
  cessPct = 4,
  isNRI = false,
  dtaaRate,
  isTaxFree = false,
}: PostTaxOptions): number {
  if (isTaxFree) return 0;
  if (isNRI) {
    const base = (dtaaRate ?? 20) / 100;
    return base * (1 + cessPct / 100);
  }
  const base = slab / 100;
  const withSurcharge = base * (1 + surchargePct / 100);
  return withSurcharge * (1 + cessPct / 100);
}

/** Post-tax yield given pre-tax yield and tax profile. */
export function postTaxYield(preTaxYield: number, opts: PostTaxOptions): number {
  return preTaxYield * (1 - effectiveTaxRate(opts));
}

// ─── Sample cashflow generator (for marketing demos) ──────────────────────
export interface SampleBondInput {
  faceValue: number;
  couponPct: number;
  tenureYears: number;
  frequency: "annual" | "semi-annual" | "quarterly" | "monthly";
  startDate?: Date;
}

export function generateSampleCashflows(input: SampleBondInput): {
  date: string;
  interest: number;
  principal: number;
  total: number;
}[] {
  const { faceValue, couponPct, tenureYears, frequency, startDate = new Date() } = input;
  const periodsPerYear =
    frequency === "annual" ? 1 : frequency === "semi-annual" ? 2 : frequency === "quarterly" ? 4 : 12;
  const totalPeriods = tenureYears * periodsPerYear;
  const periodicCoupon = (faceValue * (couponPct / 100)) / periodsPerYear;
  const result: { date: string; interest: number; principal: number; total: number }[] = [];
  for (let i = 1; i <= totalPeriods; i++) {
    const d = new Date(startDate);
    d.setMonth(d.getMonth() + (12 / periodsPerYear) * i);
    const isLast = i === totalPeriods;
    result.push({
      date: d.toISOString().slice(0, 10),
      interest: periodicCoupon,
      principal: isLast ? faceValue : 0,
      total: periodicCoupon + (isLast ? faceValue : 0),
    });
  }
  return result;
}

// ─── Indian formatters helpers (re-exported from utils for convenience) ──
export { inr, inrCompact, pct, bps, formatDate, formatMonthYear, residualTenure } from "./utils";
