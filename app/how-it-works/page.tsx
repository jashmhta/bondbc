import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone, FileText, Briefcase, BadgeCheck, Activity } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion/MotionSection";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Button";
import { GoldParticles } from "@/components/motion/GoldParticles";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Five steps from first call to ongoing bond programme — Binary Bonds' institutional onboarding process for issuers, treasury desks, and asset managers.",
};

const STEPS = [
  {
    icon: Phone,
    duration: "Day 0",
    title: "Initial conversation",
    body:
      "A 30-minute call with our relationship team to understand your mandate. For issuers: balance sheet, capex, refinancing window. For investors: portfolio mandate, duration target, credit appetite.",
    artifacts: ["Internal call summary", "Indicative deal economics", "Reference list (on request)"],
  },
  {
    icon: FileText,
    duration: "Days 1–3",
    title: "KYC & engagement",
    body:
      "Standard institutional KYC against the Companies Act and SEBI norms. We sign a formal engagement letter with all-in fees, scope, and timing. No work begins without it.",
    artifacts: [
      "KYC pack & beneficial ownership",
      "Engagement letter (fees + scope)",
      "Trading account or issuer mandate",
    ],
  },
  {
    icon: Briefcase,
    duration: "Days 3–14",
    title: "Structure & rating",
    body:
      "For issuers: 3–4 alternative structures modelled against the curve, indicative buyer demand, and rating implications. For investors: portfolio construction with target tenor / rating / coupon profile.",
    artifacts: [
      "Structure memo (3–4 alternates)",
      "Rating agency engagement plan",
      "Indicative term sheet",
    ],
  },
  {
    icon: BadgeCheck,
    duration: "Days 14–30",
    title: "Underwrite & place",
    body:
      "We commit balance sheet (firm underwriting), open the book to our 150+ institutional buyers, and allocate. Issuer signs the placement memorandum, ISIN is allotted, ICCL settles T+1.",
    artifacts: [
      "Final placement memorandum",
      "ISIN allotment",
      "ICCL T+1 settlement",
      "SEBI/RBI post-issue filings",
    ],
  },
  {
    icon: Activity,
    duration: "Day 30+",
    title: "Surveillance & service",
    body:
      "Post-issuance market-making, secondary RFQ access, monthly portfolio reporting, and rating-action surveillance. Annual rating review preparation included for issuer engagements.",
    artifacts: [
      "Monthly portfolio NAV / duration / accrual",
      "Secondary market-making (your book)",
      "Annual rating review prep",
    ],
  },
];

const ROLES = [
  {
    role: "Issuers",
    body: "Corporates and PSUs raising debt capital. We structure, rate, underwrite, and place — front to back.",
    cta: { label: "Discuss issuance", href: "/contact" },
  },
  {
    role: "Banks & insurance",
    body: "Treasury desks building duration. Primary allocation, secondary RFQ access, RFP-quality portfolio reporting.",
    cta: { label: "Open trading account", href: "/contact" },
  },
  {
    role: "Mutual funds",
    body: "AMC debt schemes seeking sourcing depth across PSU, AAA, and AA paper. Both primary and secondary.",
    cta: { label: "Sourcing brief", href: "/contact" },
  },
  {
    role: "Family offices",
    body: "Substantial HNI / family office portfolios with mandate flexibility. We curate primary access and unlisted opportunities.",
    cta: { label: "Mandate review", href: "/contact" },
  },
];

export default function HowItWorksPage() {
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
            <p className="eyebrow text-[var(--accent)] mb-6">Process</p>
          </MotionSection>
          <MotionSection delay={0.15} duration={0.95}>
            <h1
              className="text-[clamp(40px,9vw,140px)] leading-[0.92] tracking-[-0.04em] mb-8"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              From first call to{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                ongoing programme.
              </em>
            </h1>
          </MotionSection>
          <MotionSection delay={0.4}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-[var(--ink-muted)] max-w-3xl">
              Five clearly-defined steps. We tell you what we&apos;ll do, what artifacts you&apos;ll
              get at the end of each step, and what the realistic timing is. No surprises in the
              middle of a placement.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* STEPS */}
      <section className="container-wide pb-24 sm:pb-32">
        <div className="relative max-w-5xl mx-auto">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[14px] sm:left-[32px] w-px bg-[var(--rule)]"
          />

          <MotionStagger className="space-y-12 sm:space-y-14" staggerChildren={0.1}>
            {STEPS.map((s, i) => (
              <MotionItem key={s.title}>
                <div className="grid grid-cols-[40px_1fr] sm:grid-cols-[80px_1fr] gap-6 sm:gap-10 relative">
                  {/* Number node */}
                  <div className="relative">
                    <div className="relative z-10 h-7 w-7 sm:h-9 sm:w-9 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)] grid place-items-center">
                      <span className="num-display text-[12px] sm:text-[14px] text-[var(--accent)] tracking-tight">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="card-quiet p-6 sm:p-9 group hover:border-[var(--accent)]/40 transition-colors duration-500">
                    <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                      <div className="flex items-baseline gap-4">
                        <s.icon className="h-5 w-5 text-[var(--accent)]" />
                        <h3
                          className="text-[clamp(22px,2.4vw,32px)] tracking-[-0.015em] leading-[1.15] text-[var(--ink)]"
                          style={{
                            fontFamily: "var(--font-fraunces)",
                            fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                          }}
                        >
                          {s.title}
                        </h3>
                      </div>
                      <span className="font-mono text-[10px] sm:text-[11px] caps tracking-[0.14em] text-[var(--ink-dim)]">
                        ⏱ {s.duration}
                      </span>
                    </div>
                    <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[var(--ink-muted)] mb-6 max-w-3xl">
                      {s.body}
                    </p>
                    <div className="rule-t pt-5">
                      <p className="eyebrow !text-[10px] mb-3">You receive</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                        {s.artifacts.map((a) => (
                          <li
                            key={a}
                            className="text-[13px] text-[var(--ink-muted)] flex items-start gap-2"
                          >
                            <span className="mt-[7px] h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-4">Who we work with</p>
              <h2
                className="text-[clamp(32px,5vw,64px)] leading-[1.0] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Four institutional <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  client archetypes.
                </em>
              </h2>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
              The framework is the same. The artifacts shift to match how each archetype
              consumes bond markets.
            </p>
          </div>

          <MotionStagger
            className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-xl overflow-hidden"
            staggerChildren={0.08}
          >
            {ROLES.map((r) => (
              <MotionItem key={r.role}>
                <Link
                  href={r.cta.href}
                  className="block bg-[var(--bg)] p-7 sm:p-9 h-full group hover:bg-[var(--surface)] transition-colors duration-500"
                >
                  <h3
                    className="text-[clamp(22px,2.4vw,30px)] leading-[1.15] tracking-[-0.015em] text-[var(--ink)] mb-3"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                    }}
                  >
                    {r.role}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[var(--ink-muted)] mb-6">
                    {r.body}
                  </p>
                  <span className="text-[13px] text-[var(--accent)] inline-flex items-center gap-1.5 font-medium">
                    {r.cta.label}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-24 sm:py-32 text-center">
        <MotionSection>
          <h2
            className="text-[clamp(36px,7vw,96px)] leading-[0.98] tracking-[-0.035em] mb-8 max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
            }}
          >
            Ready to take{" "}
            <em
              className="text-[var(--accent)]"
              style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
            >
              step one?
            </em>
          </h2>
          <MagneticButton strength={0.22}>
            <Link href="/contact" data-cursor="grow">
              <Button size="xl" variant="accent" className="!gap-2">
                {BRAND.cta.primary}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
          </MagneticButton>
        </MotionSection>
      </section>
    </div>
  );
}
