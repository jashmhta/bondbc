import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Award, ShieldCheck, Building2 } from "lucide-react";
import { BRAND, TEAM } from "@/lib/brand";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion/MotionSection";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { BeamCard } from "@/components/motion/BeamCard";
import { GhostReveal } from "@/components/motion/GhostReveal";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Button";
import { GoldParticles } from "@/components/motion/GoldParticles";

export const metadata: Metadata = {
  title: "About",
  description:
    "Founded by Shray Vasudeva and Rati Ravi Kant, Binary Bonds is the institutional bond desk of Binary Capital — underwriting, trading, and rating advisory across India's debt capital markets.",
};

const TIMELINE = [
  {
    year: "2010",
    label: "Binary Capital founded",
    body: "Shray Vasudeva launches Binary Capital in Mumbai as an investment banking and financial advisory firm.",
  },
  {
    year: "2014",
    label: "Debt capital practice",
    body: "Adds a dedicated debt capital markets desk for mid-market corporate placements.",
  },
  {
    year: "2018",
    label: "Underwriting scale",
    body: "Crosses ₹500 Cr underwritten cumulative volume across PSU and corporate bond issuances.",
  },
  {
    year: "2021",
    label: "Binary Bonds spun out",
    body: "Institutional bond practice spun into Binary Bonds, the dedicated bond house brand.",
  },
  {
    year: "2024",
    label: "Federal Bank partnership",
    body: "Banking partnership with The Federal Bank Limited for settlement and treasury operations.",
  },
  {
    year: "2026",
    label: "₹2,000 Cr+ underwritten",
    body: "Crosses the ₹2,000 Cr+ underwritten milestone, serving 150+ institutional clients.",
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Trust and Integrity",
    body:
      "Strict SEBI and RBI regulatory compliance is the floor, not the ceiling. We over-disclose, document everything, and align our incentives with our clients before any commercial conversation begins.",
  },
  {
    icon: Award,
    title: "Excellence and Expertise",
    body:
      "Our partners hold CFA charters and MBA Finance from IIM International. Together they bring 35+ years across investment banking, credit analysis, and institutional sales — applied to your specific mandate.",
  },
  {
    icon: Building2,
    title: "Client-Centric",
    body:
      "Every issuance, every secondary trade, every advisory engagement is measured by one question: did the client come back? 150+ institutional clients tell that story better than we can.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--bg)] overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden pt-44 pb-24 sm:pt-56 sm:pb-32 isolate">
        {/* Background imagery — Mumbai evening twilight */}
        <Image
          src="/brand/pexels-mumbai-skyline-evening.jpg"
          alt=""
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover -z-20 opacity-30 dark:opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--bg), transparent 25%) 0%, var(--bg) 70%, var(--bg) 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[80%] -z-10 opacity-[0.08] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, var(--accent) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-25 pointer-events-none">
          <GoldParticles density={0.4} connect />
        </div>

        <div className="container-wide max-w-6xl relative">
          <MotionSection delay={0.1}>
            <p className="eyebrow text-[var(--accent)] mb-6">House Note</p>
          </MotionSection>

          <MotionSection delay={0.15} duration={0.95}>
            <h1
              className="text-[clamp(40px,9vw,140px)] leading-[0.92] tracking-[-0.04em] mb-8"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              <GhostReveal stagger={0.05} duration={1.2} drift="0.6em">
                A specialised division of Binary Capital, focused on India&apos;s bond markets.
              </GhostReveal>
            </h1>
          </MotionSection>

          <MotionSection delay={0.4}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-[var(--ink-muted)] max-w-3xl">
              Founded in Mumbai in 2010, Binary Capital is an investment banking and financial
              advisory firm. Binary Bonds is its dedicated institutional bond desk — underwriting
              corporate and government securities, market-making in the secondary market, and
              advising both issuers and investors on rating, structure, and execution.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* MISSION + IMAGE */}
      <section className="container-wide pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16 items-center">
          <MotionSection className="lg:col-span-5" delay={0.1}>
            <p className="eyebrow text-[var(--accent)] mb-4">Mission</p>
            <h2
              className="text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.025em] mb-6"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              We transform aspirations into{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                achievements.
              </em>
            </h2>
            <p className="text-[15px] leading-[1.7] text-[var(--ink-muted)]">
              Our mission is to empower our clients&apos; financial futures with integrity,
              expertise, and an unwavering commitment to delivering exceptional value. Whether
              you&apos;re an issuer raising debt capital or an institutional buyer building
              portfolio duration, we put balance sheet, relationships, and judgement on the table
              alongside you.
            </p>
          </MotionSection>

          <MotionSection className="lg:col-span-7" delay={0.25}>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[var(--bg-2)]">
              <ParallaxImage
                src="/brand/binary-capital-trust-card.png"
                alt="Bond desk meeting with institutional clients"
                intensity={6}
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
                <p className="eyebrow !text-white/65 mb-1">A typical morning</p>
                <p className="text-[15px] sm:text-[18px] text-white font-medium leading-tight">
                  Underwriting committee · Mumbai · 09:30 IST
                </p>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* VALUES */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[var(--accent)] mb-4">What we believe</p>
              <h2
                className="text-[clamp(32px,5vw,64px)] leading-[1.0] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Three values that <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  govern every desk.
                </em>
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
              These aren&apos;t mounted on a wall. They show up in how a placement is structured,
              how a settlement is reconciled, how a difficult conversation is held.
            </p>
          </div>

          <MotionStagger
            className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-xl overflow-hidden"
            staggerChildren={0.08}
          >
            {VALUES.map((v, i) => (
              <MotionItem key={v.title}>
                <div className="bg-[var(--bg)] p-8 h-full flex flex-col group hover:bg-[var(--surface)] transition-colors duration-500">
                  <div className="flex items-baseline justify-between mb-8">
                    <span className="num-display text-[clamp(36px,4vw,56px)] leading-none text-[var(--ink)]/[0.10] tracking-[-0.02em] group-hover:text-[var(--accent)]/40 transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <v.icon className="h-5 w-5 text-[var(--ink-dim)] group-hover:text-[var(--accent)] transition-colors duration-500" />
                  </div>
                  <h3
                    className="text-[clamp(20px,2vw,26px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)] mb-4"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                    }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-[var(--ink-muted)]">{v.body}</p>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-wide py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
          <div className="lg:col-span-5">
            <p className="eyebrow text-[var(--accent)] mb-4">Timeline</p>
            <h2
              className="text-[clamp(32px,5vw,64px)] leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Sixteen years, <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                continuous compounding.
              </em>
            </h2>
          </div>
          <p className="lg:col-span-5 lg:col-start-8 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
            Binary Capital&apos;s broader story, distilled to the moments that matter for the
            bond desk you&apos;re working with today.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical rail */}
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-[14px] sm:left-[80px] w-px bg-[var(--rule)]"
          />

          <MotionStagger className="space-y-12 sm:space-y-16" staggerChildren={0.08}>
            {TIMELINE.map((t) => (
              <MotionItem key={t.year}>
                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[140px_1fr] gap-6 sm:gap-12 relative">
                  {/* Year */}
                  <div className="relative">
                    <span
                      className="num-display text-[clamp(20px,2.4vw,28px)] text-[var(--accent)] tracking-[-0.01em] block"
                    >
                      {t.year}
                    </span>
                    <span
                      aria-hidden
                      className="absolute top-2 -right-[7px] sm:-right-[7px] w-3 h-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]"
                    />
                  </div>
                  {/* Label */}
                  <div>
                    <h3
                      className="text-[clamp(18px,2vw,26px)] text-[var(--ink)] tracking-[-0.01em] leading-tight mb-2"
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                      }}
                    >
                      {t.label}
                    </h3>
                    <p className="text-[14px] leading-[1.65] text-[var(--ink-muted)] max-w-2xl">
                      {t.body}
                    </p>
                  </div>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* TEAM */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-4">Founders</p>
              <h2
                className="text-[clamp(32px,5vw,64px)] leading-[1.0] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                The people you actually <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  want on the trade.
                </em>
              </h2>
            </div>
          </div>

          <MotionStagger
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
            staggerChildren={0.18}
          >
            {TEAM.map((m, i) => (
              <MotionItem key={m.name}>
                <BeamCard beamSpeed={i === 0 ? 7 : 9}>
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center gap-5 mb-8">
                      <div className="num-display h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-[var(--accent)] text-[var(--accent-fg)] flex items-center justify-center text-[clamp(20px,2vw,28px)] font-medium tracking-tight">
                        {m.initials}
                      </div>
                      <div>
                        <h3
                          className="text-[clamp(22px,2.4vw,30px)] tracking-[-0.015em] leading-[1.15] text-[var(--ink)]"
                          style={{
                            fontFamily: "var(--font-fraunces)",
                            fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                          }}
                        >
                          {m.name}
                        </h3>
                        <p className="text-[13px] text-[var(--accent)] mt-1 font-medium">{m.role}</p>
                      </div>
                    </div>
                    <p className="eyebrow !text-[10px] mb-2">Expertise</p>
                    <p className="text-[15px] text-[var(--ink)] mb-1">{m.expertise}</p>
                    <p className="text-[12px] text-[var(--ink-dim)] caps mb-6">
                      Experience · {m.experience}
                    </p>
                    <p className="text-[14px] leading-[1.6] text-[var(--ink-muted)] mb-6">
                      {m.bio}
                    </p>
                    <div className="rule-t pt-5 flex items-center gap-2 text-[12px] text-[var(--ink-muted)]">
                      <Award className="h-3.5 w-3.5 text-[var(--accent)]" />
                      {m.edu}
                    </div>
                  </div>
                </BeamCard>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* REGULATORY POSITIONING */}
      <section className="container-wide py-24 sm:py-32">
        <MotionSection>
          <div className="card-quiet p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-4">Regulatory positioning</p>
              <h2
                className="text-[clamp(28px,4vw,52px)] tracking-[-0.025em] leading-[1.05] mb-5"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Compliance is the{" "}
                <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  floor, not the ceiling.
                </em>
              </h2>
              <p className="text-[15px] leading-[1.7] text-[var(--ink-muted)] mb-6">
                Binary Bonds operates within India&apos;s SEBI and RBI regulatory framework. Our
                settlement runs through ICCL (Indian Clearing Corporation Limited) on T+1.
                ISIN allotment, post-issue reporting, and audit trail documentation are part of
                every mandate — not an afterthought.
              </p>
              <ul className="space-y-2.5 text-[14px] text-[var(--ink-muted)]">
                {[
                  "SEBI registration aligned to Binary Capital",
                  "RBI compliance for institutional debt market participation",
                  "ICCL T+1 settlement infrastructure",
                  "Direct relationships with CRISIL, ICRA, CARE, India Ratings",
                  "Section 194A TDS handling on interest payments",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
              <div className="rule-t pt-6">
                <p className="eyebrow !text-[10px] mb-2">Banking partner</p>
                <p className="text-[16px] text-[var(--ink)] font-medium">
                  The Federal Bank Limited
                </p>
                <p className="text-[12px] text-[var(--ink-muted)] mt-0.5">
                  Settlement, escrow, treasury operations
                </p>
              </div>
              <div className="rule-t pt-6">
                <p className="eyebrow !text-[10px] mb-2">Parent firm</p>
                <p className="text-[16px] text-[var(--ink)] font-medium">{BRAND.parentEntity}</p>
                <a
                  href="https://binarycapital.in"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 text-[12px] text-[var(--accent)] hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  binarycapital.in
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <div className="rule-t pt-6">
                <p className="eyebrow !text-[10px] mb-2">Office</p>
                <p className="text-[14px] text-[var(--ink)] leading-tight">
                  {BRAND.contact.address.line1}
                  <br />
                  {BRAND.contact.address.line2}
                </p>
              </div>
            </div>
          </div>
        </MotionSection>
      </section>

      {/* CTA */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-32">
        <div className="container-wide text-center max-w-4xl mx-auto">
          <MotionSection>
            <h2
              className="text-[clamp(36px,7vw,96px)] leading-[0.98] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Ready to <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >work together?</em>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <MagneticButton strength={0.22}>
                <Link href="/contact" data-cursor="grow">
                  <Button size="xl" variant="accent" className="!gap-2">
                    {BRAND.cta.primary}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </MagneticButton>
              <Link href="/services" data-cursor="grow">
                <Button size="xl" variant="outline">
                  Browse services
                </Button>
              </Link>
            </div>
          </MotionSection>
        </div>
      </section>
    </div>
  );
}
