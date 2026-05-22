import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, AlertCircle, ChevronRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion/MotionSection";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Button";
import { GoldParticles } from "@/components/motion/GoldParticles";
import { SpotlightCard } from "@/components/motion/SpotlightCard";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent institutional bond fee structure — underwriting bps, secondary trading, and rating advisory pricing for Binary Bonds.",
};

const FEE_TIERS = [
  {
    label: "Issuer · Underwriting",
    headline: "Bps on issue size",
    range: "10 – 25 bps",
    description:
      "Charged on the underwritten amount, payable from issue proceeds. Includes structuring, rating engagement, investor allocation, and post-issue reporting.",
    inclusions: [
      "Structure design (3–4 alternates against curve)",
      "Rating agency engagement (CRISIL, ICRA, CARE, India Ratings)",
      "Devolvement risk (firm underwriting)",
      "Institutional buyer allocation (150+ relationships)",
      "ICCL settlement & ISIN allotment",
      "Post-issue SEBI/RBI reporting",
    ],
    notes: "Lower end for AAA-PSU 5Y+. Upper end for first-time AA issuers.",
    cta: { label: "Discuss issuance", href: "/contact" },
    highlighted: true,
  },
  {
    label: "Investor · Secondary",
    headline: "Bps on trade value",
    range: "5 – 12 bps",
    description:
      "Charged on the secondary market trade value. We make markets in liquid PSU and corporate paper, and source illiquid lots from our institutional book.",
    inclusions: [
      "Two-way pricing in liquid PSU & AAA paper",
      "Sourcing for illiquid AA / unlisted lots",
      "RFQ access on ICCL platform",
      "Trade matching & settlement (T+1)",
      "Tax-aware execution (Section 194A handling)",
      "Portfolio reporting (NAV, duration, accrual)",
    ],
    notes: "Volume-based slabs available for treasury programmes ≥ ₹100 Cr/quarter.",
    cta: { label: "Open trading account", href: "/contact" },
    highlighted: false,
  },
  {
    label: "Rating Advisory",
    headline: "Engagement fee",
    range: "₹3 – 12 L",
    description:
      "Flat-fee engagements for issuers seeking first-time ratings or rating upgrades. Includes positioning, financial restatement, and direct agency dialogue.",
    inclusions: [
      "Rating positioning workshop",
      "Financial restatement to agency methodology",
      "Pre-rating committee dry runs",
      "Direct agency dialogue with rating analysts",
      "Surveillance preparation for annual review",
    ],
    notes: "Fee scales with issue programme size and rating complexity.",
    cta: { label: "Request brief", href: "/contact" },
    highlighted: false,
  },
];

const WORKED_EXAMPLES = [
  {
    title: "₹100 Cr · 5Y AAA-PSU placement",
    rows: [
      { l: "Underwriting fee", r: "15 bps", n: "₹15,00,000" },
      { l: "Rating engagement", r: "Existing AAA · waived", n: "—" },
      { l: "ICCL settlement", r: "Pass-through", n: "₹2,500" },
      { l: "Stamp duty (issuer)", r: "0.0001 % of FV", n: "₹10,000" },
    ],
    total: "Effective cost · 15.13 bps",
  },
  {
    title: "₹50 Cr · 7Y AA+ corporate · first issue",
    rows: [
      { l: "Underwriting fee", r: "22 bps", n: "₹11,00,000" },
      { l: "Rating engagement (AA+)", r: "₹6,50,000", n: "₹6,50,000" },
      { l: "ICCL settlement", r: "Pass-through", n: "₹1,500" },
      { l: "Stamp duty (issuer)", r: "0.0001 % of FV", n: "₹5,000" },
    ],
    total: "Effective cost · 35.13 bps",
  },
];

export default function PricingPage() {
  return (
    <div className="bg-[var(--bg)] overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden pt-44 pb-24 sm:pt-56 sm:pb-32">
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
            <p className="eyebrow text-[var(--accent)] mb-6">Pricing</p>
          </MotionSection>
          <MotionSection delay={0.15} duration={0.95}>
            <h1
              className="text-[clamp(40px,9vw,140px)] leading-[0.92] tracking-[-0.04em] mb-8"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Fees you can{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                actually quote.
              </em>
            </h1>
          </MotionSection>
          <MotionSection delay={0.4}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-[var(--ink-muted)] max-w-3xl">
              Most institutional bond houses guard fee structures behind term sheets. We don&apos;t.
              Below is the actual range we operate in across underwriting, secondary trading, and
              rating advisory — disclosed up-front so your treasury committee can model the deal
              before they call us.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* TIERS */}
      <section className="container-wide pb-24 sm:pb-32">
        <MotionStagger
          className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-xl overflow-hidden"
          staggerChildren={0.1}
        >
          {FEE_TIERS.map((tier) => (
            <MotionItem key={tier.label}>
              <SpotlightCard
                intensity={tier.highlighted ? 0.22 : 0.14}
                className="h-full"
              >
                <div
                  className={`relative h-full p-8 sm:p-10 flex flex-col ${
                    tier.highlighted
                      ? "bg-[var(--surface)]"
                      : "bg-[var(--bg)]"
                  }`}
                >
                  {tier.highlighted && (
                    <span className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-[10px] tracking-[0.16em] uppercase bg-[var(--accent)] text-[var(--accent-fg)] font-medium">
                      Most engaged
                    </span>
                  )}

                  <p className="eyebrow text-[var(--accent)] mb-3">{tier.label}</p>
                  <h3
                    className="text-[clamp(22px,2.4vw,30px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)] mb-2"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                    }}
                  >
                    {tier.headline}
                  </h3>
                  <p className="num-display text-[clamp(36px,4vw,52px)] text-[var(--ink)] tracking-[-0.02em] leading-none mb-6">
                    {tier.range}
                  </p>
                  <p className="text-[14px] text-[var(--ink-muted)] leading-[1.65] mb-7">
                    {tier.description}
                  </p>

                  <p className="eyebrow !text-[10px] mb-3">What&apos;s included</p>
                  <ul className="space-y-2 mb-8 flex-1">
                    {tier.inclusions.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-[13px]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[var(--accent)] mt-[2px] shrink-0" />
                        <span className="text-[var(--ink-muted)] leading-[1.5]">{inc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rule-t pt-5 mb-6">
                    <p className="text-[12px] text-[var(--ink-dim)] flex items-start gap-2">
                      <AlertCircle className="h-3 w-3 mt-[3px] shrink-0" />
                      {tier.notes}
                    </p>
                  </div>

                  <Link href={tier.cta.href} data-cursor="grow">
                    <Button
                      variant={tier.highlighted ? "accent" : "outline"}
                      size="lg"
                      className="w-full !gap-2"
                    >
                      {tier.cta.label}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </SpotlightCard>
            </MotionItem>
          ))}
        </MotionStagger>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-4">Worked examples</p>
              <h2
                className="text-[clamp(32px,5vw,64px)] leading-[1.0] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Two placements,<br />
                <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  fully costed.
                </em>
              </h2>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
              These are indicative deal economics from our recent book. Your specific structure
              may vary based on tenor, rating, complexity, and market conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {WORKED_EXAMPLES.map((ex, i) => (
              <MotionSection key={ex.title} delay={i * 0.15}>
                <div className="card-quiet overflow-hidden bg-[var(--bg)]">
                  <div className="px-7 py-6 border-b border-[var(--rule)]">
                    <p className="eyebrow !text-[10px] mb-1">Example {String(i + 1).padStart(2, "0")}</p>
                    <h3
                      className="text-[clamp(20px,2.2vw,26px)] tracking-[-0.015em] leading-[1.2]"
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                      }}
                    >
                      {ex.title}
                    </h3>
                  </div>
                  <div className="px-7 py-2 divide-y divide-[var(--rule)]">
                    {ex.rows.map((r) => (
                      <div
                        key={r.l}
                        className="grid grid-cols-[1fr_auto_auto] gap-6 py-3.5 items-baseline"
                      >
                        <span className="text-[14px] text-[var(--ink)]">{r.l}</span>
                        <span className="font-mono text-[12px] text-[var(--ink-dim)]">{r.r}</span>
                        <span className="font-mono text-[14px] text-[var(--ink)] tabular-nums">
                          {r.n}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="px-7 py-5 bg-[var(--bg-2)] border-t border-[var(--rule)] flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink-dim)]">
                      All-in
                    </span>
                    <span className="text-[15px] font-medium text-[var(--accent)]">
                      {ex.total}
                    </span>
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>

          <p className="mt-12 text-center text-[12px] text-[var(--ink-dim)] max-w-2xl mx-auto">
            Worked examples are indicative only. Final fees are set in the engagement letter
            after rating, structure, and timing are confirmed.
          </p>
        </div>
      </section>

      {/* TRANSPARENCY POSITIONING */}
      <section className="container-wide py-24 sm:py-32">
        <MotionSection>
          <div className="card-quiet p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-4">Why disclose at all?</p>
              <h2
                className="text-[clamp(28px,4vw,52px)] tracking-[-0.025em] leading-[1.05] mb-5"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Because the alternative is{" "}
                <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  a black box.
                </em>
              </h2>
              <p className="text-[15px] leading-[1.7] text-[var(--ink-muted)] mb-6">
                Most institutional desks negotiate fees deal-by-deal in opaque term sheets. We
                think that asymmetry should die. Treasury teams should be able to evaluate three
                houses on apples-to-apples economics before issuing the mandate. Pricing
                transparency is how we win mandates we deserve.
              </p>
              <ul className="space-y-2.5 text-[14px] text-[var(--ink-muted)]">
                {[
                  "All-in fee disclosed before mandate signing",
                  "Pass-through costs (ICCL, stamp, rating) shown separately",
                  "No success-fee gimmicks or hidden retainers",
                  "Fee adjustment formulas if structure changes mid-execution",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <ChevronRight className="h-3.5 w-3.5 mt-1 text-[var(--accent)] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 gap-3">
              <div className="rule-t pt-5">
                <p className="eyebrow !text-[10px] mb-2">Our pricing principle</p>
                <p
                  className="text-[clamp(20px,2.4vw,30px)] leading-[1.2] tracking-[-0.015em] text-[var(--ink)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  &ldquo;Fees should reflect the work, not the leverage.&rdquo;
                </p>
                <p className="mt-3 eyebrow text-[var(--ink-dim)]">— Founders, Binary Bonds</p>
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
              Get a precise{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                term sheet.
              </em>
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[var(--ink-muted)] max-w-2xl mx-auto mb-10">
              Tell us about your placement or programme — we&apos;ll come back with an
              all-in number, structure, and timing in 48 hours.
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
