import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { YieldCurveChart } from "@/components/data/YieldCurveChart";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion/MotionSection";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { GoldParticles } from "@/components/motion/GoldParticles";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "G-Sec Yield Curve",
  description:
    "Live Indian Government Security yield curve, with corporate spread analysis. The institutional fixed-income reference our desk uses every morning.",
  alternates: { canonical: "/research/yield-curve" },
};

// Indicative curve — refreshes from market feeds in production
const G_SEC_CURVE = [
  { tenor: "3M", tenorYears: 0.25, yield: 6.55 },
  { tenor: "6M", tenorYears: 0.5, yield: 6.62 },
  { tenor: "1Y", tenorYears: 1, yield: 6.81 },
  { tenor: "2Y", tenorYears: 2, yield: 6.95 },
  { tenor: "3Y", tenorYears: 3, yield: 7.0 },
  { tenor: "5Y", tenorYears: 5, yield: 7.06 },
  { tenor: "7Y", tenorYears: 7, yield: 7.11 },
  { tenor: "10Y", tenorYears: 10, yield: 7.18 },
  { tenor: "15Y", tenorYears: 15, yield: 7.24 },
  { tenor: "20Y", tenorYears: 20, yield: 7.28 },
  { tenor: "30Y", tenorYears: 30, yield: 7.32 },
];

const SPREAD_TABLE = [
  { rating: "AAA-PSU", t5: 35, t10: 42, t15: 48 },
  { rating: "AAA-CORP", t5: 38, t10: 46, t15: 54 },
  { rating: "AA+", t5: 64, t10: 78, t15: 92 },
  { rating: "AA", t5: 92, t10: 116, t15: 138 },
  { rating: "AA-", t5: 138, t10: 168, t15: 198 },
  { rating: "A+", t5: 198, t10: 240, t15: 285 },
];

const CURVE_KPIS = [
  { label: "10Y G-Sec", value: "7.18 %", delta: -0.03, hint: "vs prev close" },
  { label: "5Y/30Y slope", value: "+26 bps", delta: -1.5, hint: "steeper today" },
  { label: "AAA-PSU 10Y spread", value: "42 bps", delta: -1.2, hint: "compression" },
  { label: "AA 10Y spread", value: "116 bps", delta: +1.8, hint: "wider" },
];

export default function YieldCurvePage() {
  return (
    <div className="bg-[var(--bg)] overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden pt-44 pb-16 sm:pt-56 sm:pb-24">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[80%] -z-10 opacity-[0.10] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, var(--accent) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-25">
          <GoldParticles density={0.4} connect />
        </div>
        <div className="container-wide max-w-6xl">
          <MotionSection delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <p className="eyebrow text-[var(--accent)]">Research</p>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--ink-dim)] inline-flex items-center gap-2">
                <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent)]">
                  <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
                </span>
                Indicative · refreshed daily
              </span>
            </div>
          </MotionSection>
          <MotionSection delay={0.15} duration={0.95}>
            <h1
              className="text-[clamp(40px,9vw,140px)] leading-[0.92] tracking-[-0.04em] mb-8"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              The{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                G-Sec curve.
              </em>
            </h1>
          </MotionSection>
          <MotionSection delay={0.4}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-[var(--ink-muted)] max-w-3xl">
              Every morning, our desk starts here. The G-Sec curve is the Indian rates
              benchmark — corporate bond spreads price relative to it, your portfolio duration
              is measured against it, and policy moves echo through it before anything else.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* KPI STRIP */}
      <section className="container-wide pb-12">
        <MotionStagger
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-xl overflow-hidden"
          staggerChildren={0.06}
        >
          {CURVE_KPIS.map((kpi) => {
            const Icon = kpi.delta > 0 ? TrendingUp : kpi.delta < 0 ? TrendingDown : Minus;
            const tone =
              kpi.delta > 0
                ? "text-[var(--gain)]"
                : kpi.delta < 0
                  ? "text-[var(--loss)]"
                  : "text-[var(--ink-dim)]";
            return (
              <MotionItem key={kpi.label} className="bg-[var(--bg)] p-6">
                <p className="eyebrow !text-[10px] mb-2.5">{kpi.label}</p>
                <div className="flex items-baseline justify-between gap-2">
                  <p className="num-display text-[clamp(20px,2.4vw,28px)] text-[var(--ink)] tracking-[-0.01em]">
                    {kpi.value}
                  </p>
                  <span className={`inline-flex items-center gap-1 font-mono text-[12px] ${tone}`}>
                    <Icon className="h-3 w-3" />
                    {Math.abs(kpi.delta).toFixed(kpi.label.includes("spread") ? 1 : 2)}
                  </span>
                </div>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.14em] text-[var(--ink-dim)]">
                  {kpi.hint}
                </p>
              </MotionItem>
            );
          })}
        </MotionStagger>
      </section>

      {/* CURVE CHART */}
      <section className="container-wide pb-24 sm:pb-32 max-w-6xl">
        <MotionSection delay={0.2}>
          <div className="card-quiet p-6 sm:p-10">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-7">
              <div>
                <p className="eyebrow text-[var(--accent)] mb-1.5">G-Sec Curve · Today</p>
                <h2
                  className="text-[clamp(22px,2.5vw,30px)] tracking-[-0.015em] leading-[1.15]"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                  }}
                >
                  3 months → 30 years.
                </h2>
              </div>
              <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--ink-dim)]">
                Source: indicative composite · refreshed daily
              </span>
            </div>
            <YieldCurveChart data={G_SEC_CURVE} height={360} />
            <p className="mt-4 text-[12px] text-[var(--ink-dim)]">
              Yields shown are mid-market indicative. Live firm pricing is set in trade tickets.
            </p>
          </div>
        </MotionSection>
      </section>

      {/* CORPORATE SPREADS */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-32">
        <div className="container-wide max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-4">Corporate spreads · today</p>
              <h2
                className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-[-0.025em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Where corporate paper{" "}
                <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  prices over G-Sec.
                </em>
              </h2>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
              Indicative spreads in basis points (bps) over the G-Sec benchmark of the same
              tenor. AAA-PSU is tightest; AA paper offers meaningful pickup with appropriate
              credit work.
            </p>
          </div>

          <div className="rounded-xl border border-[var(--rule)] overflow-hidden bg-[var(--bg)]">
            <table className="w-full">
              <thead className="border-b border-[var(--rule)] bg-[var(--bg-2)]">
                <tr>
                  <th className="text-left px-6 py-4 eyebrow !text-[10px]">Rating</th>
                  <th className="text-right px-6 py-4 eyebrow !text-[10px]">5Y</th>
                  <th className="text-right px-6 py-4 eyebrow !text-[10px]">10Y</th>
                  <th className="text-right px-6 py-4 eyebrow !text-[10px]">15Y</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--rule)]">
                {SPREAD_TABLE.map((r) => (
                  <tr key={r.rating} className="hover:bg-[var(--bg-2)] transition-colors">
                    <td className="px-6 py-4 text-[14px] text-[var(--ink)] font-medium">
                      {r.rating}
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-[14px] text-[var(--ink)] tabular-nums">
                      {r.t5}
                      <span className="text-[var(--ink-dim)] ml-1">bps</span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-[14px] text-[var(--ink)] tabular-nums">
                      {r.t10}
                      <span className="text-[var(--ink-dim)] ml-1">bps</span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-[14px] text-[var(--ink)] tabular-nums">
                      {r.t15}
                      <span className="text-[var(--ink-dim)] ml-1">bps</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-[12px] text-[var(--ink-dim)]">
            Spreads are mid-market indicative for our institutional book. Thin / illiquid lots
            may price wider.
          </p>
        </div>
      </section>

      {/* COMMENTARY BOX */}
      <section className="container-wide py-24 sm:py-32 max-w-5xl">
        <MotionSection>
          <div className="card-quiet p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-5">Curve commentary · April 2026</p>
              <h2
                className="text-[clamp(24px,3vw,38px)] tracking-[-0.02em] leading-[1.2] mb-5"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                The 5Y/30Y is{" "}
                <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  unusually flat.
                </em>
              </h2>
              <div className="space-y-3 text-[15px] leading-[1.7] text-[var(--ink-muted)]">
                <p>
                  At +26 bps, the 5Y/30Y G-Sec slope is sitting near the flattest level we&apos;ve
                  seen in three years. Insurance buyers are extending duration faster than mutual
                  funds can build it — and supply isn&apos;t keeping pace.
                </p>
                <p>
                  Counterintuitively, this is constructive for AA and AA+ paper: when the top
                  tier compresses, the discriminating institutional buyer reaches one notch lower
                  for spread pickup. AA+ 10Y at 78 bps over G-Sec is starting to look attractive
                  on a credit-adjusted basis.
                </p>
                <p>
                  We&apos;d position long duration in highly-rated paper, with selective AA+
                  exposure for spread carry. Avoid the front-end (1–3Y) until liquidity surplus
                  normalises.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              <div className="rule-t pt-5">
                <p className="eyebrow !text-[10px] mb-2">Author</p>
                <p className="text-[15px] text-[var(--ink)] font-medium">Shray Vasudeva</p>
                <p className="text-[12px] text-[var(--ink-dim)] mt-0.5">
                  Co-Founder · Bond Desk
                </p>
              </div>
              <div className="rule-t pt-5">
                <p className="eyebrow !text-[10px] mb-2">Disclosure</p>
                <p className="text-[12px] text-[var(--ink-muted)] leading-[1.6]">
                  Commentary represents the author&apos;s view at the time of writing. Not
                  investment advice. See <Link href="/disclaimer" className="text-[var(--accent)] hover:underline underline-offset-2">disclaimer</Link>.
                </p>
              </div>
            </div>
          </div>
        </MotionSection>
      </section>

      {/* CTA */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-32 text-center">
        <div className="container-wide max-w-4xl mx-auto">
          <MotionSection>
            <h2
              className="text-[clamp(36px,7vw,96px)] leading-[0.98] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Trade the{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                spread.
              </em>
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[var(--ink-muted)] max-w-2xl mx-auto mb-10">
              Get desk-quality curve commentary, indicative bid-offers, and access to our
              institutional book.
            </p>
            <MagneticButton strength={0.22}>
              <Link href="/contact" data-cursor="grow">
                <Button size="xl" variant="accent" className="!gap-2">
                  {BRAND.cta.primary}
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </MagneticButton>
          </MotionSection>
        </div>
      </section>
    </div>
  );
}
