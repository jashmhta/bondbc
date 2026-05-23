import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, TrendingUp, ShieldCheck, Clock, Wallet } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion/MotionSection";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Button";
import { GoldParticles } from "@/components/motion/GoldParticles";
import { ParallaxImage } from "@/components/motion/ParallaxImage";

export const metadata: Metadata = {
  title: "Buy Bonds — Binary Bonds Platform",
  description:
    "Start investing in premium bonds with India's most transparent marketplace. Access 50+ curated bonds, SEBI regulated, ICCL settled.",
};

const PROMISE = [
  {
    icon: ShieldCheck,
    title: "Pre-screened paper only",
    body:
      "Every listed bond passes our institutional credit committee. AAA-PSU and AAA-corporate dominate. AA paper appears only with our memo attached.",
  },
  {
    icon: TrendingUp,
    title: "Wholesale yields, retail size",
    body:
      "We aggregate institutional lots and break them down. You see the same yield the bank sees — not a retail markup.",
  },
  {
    icon: Clock,
    title: "Paperless KYC, T+1 settle",
    body:
      "Aadhaar OTP onboarding, ICCL T+1 settlement, demat in your linked account. No paper, no phone calls, no surprises.",
  },
  {
    icon: Wallet,
    title: "Start at ₹10,000",
    body:
      "Fractional access to AAA paper. The same desk that places ₹500 Cr issues now serves ₹10,000 tickets.",
  },
];

export default function BuyBondsPage() {
  return (
    <div className="bg-[var(--bg)] overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden pt-44 pb-24 sm:pt-56 sm:pb-32">
        <Image
          src="/brand/pexels-mumbai-skyline-night.jpg"
          alt="Mumbai skyline at night"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover -z-20 opacity-40"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, color-mix(in oklab, var(--bg), transparent 20%) 0%, var(--bg) 60%, var(--bg) 100%)",
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-40">
          <GoldParticles density={0.5} connect />
        </div>

        <div className="container-wide max-w-6xl relative">
          <MotionSection delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] text-[11px] tracking-[0.16em] uppercase font-medium font-mono">
                <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--accent)]">
                  <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-60" />
                </span>
                Now Live
              </span>
              <span className="text-[11px] tracking-[0.18em] uppercase text-[var(--ink-dim)] font-mono">
                Retail Platform · Open Access
              </span>
            </div>
          </MotionSection>

          <MotionSection delay={0.15} duration={0.95}>
            <h1
              className="text-[clamp(44px,10vw,160px)] leading-[0.9] tracking-[-0.045em] mb-8"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              The same bond desk{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                in your pocket.
              </em>
            </h1>
          </MotionSection>

          <MotionSection delay={0.35}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-[var(--ink-muted)] max-w-3xl mb-10">
              For sixteen years our desk has placed bonds for banks, insurance companies, and
              mutual funds at wholesale yields. Now we&apos;re giving individual Indian investors
              that same access — same paper, same yields, same desk.
              Start investing today. Fully digital, SEBI regulated, ICCL T+1 settlement.
            </p>
          </MotionSection>

          {/* CTA BUTTON */}
          <MotionSection delay={0.5}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton strength={0.18}>
                <a
                  href="https://bondbc.manus.space/register"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="accent" className="!gap-2">
                    Start Investing Now
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </a>
              </MagneticButton>
              <MagneticButton strength={0.18}>
                <a
                  href="https://bondbc.manus.space/bonds"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline" className="!gap-2">
                    Browse Bonds
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </MagneticButton>
            </div>
            <p className="mt-3 text-[12px] text-[var(--ink-dim)]">
              SEBI regulated · ICCL T+1 settlement · Paperless KYC
            </p>
          </MotionSection>
        </div>
      </section>

      {/* PROMISE GRID */}
      <section className="container-wide py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[var(--accent)] mb-4">The promise</p>
            <h2
              className="text-[clamp(32px,5vw,64px)] leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Four things <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                we won&apos;t compromise on.
              </em>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
            Every retail bond platform claims access. Most quietly trade off rigor for volume.
            We won&apos;t.
          </p>
        </div>

        <MotionStagger
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-xl overflow-hidden"
          staggerChildren={0.08}
        >
          {PROMISE.map((p, i) => (
            <MotionItem key={p.title}>
              <div className="bg-[var(--bg)] p-8 sm:p-10 h-full flex flex-col group hover:bg-[var(--surface)] transition-colors duration-500">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="num-display text-[clamp(36px,4vw,56px)] leading-none text-[var(--ink)]/[0.10] tracking-[-0.02em] group-hover:text-[var(--accent)]/40 transition-colors duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p.icon className="h-5 w-5 text-[var(--ink-dim)] group-hover:text-[var(--accent)] transition-colors duration-500" />
                </div>
                <h3
                  className="text-[clamp(20px,2vw,26px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)] mb-4"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                  }}
                >
                  {p.title}
                </h3>
                <p className="text-[14px] leading-[1.65] text-[var(--ink-muted)]">{p.body}</p>
              </div>
            </MotionItem>
          ))}
        </MotionStagger>
      </section>

      {/* PARENT CONTEXT */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-32">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <MotionSection delay={0.1} className="lg:col-span-7">
            <p className="eyebrow text-[var(--accent)] mb-4">Built on our institutional book</p>
            <h2
              className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-[-0.025em] mb-6"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              ₹2,000 crore underwritten.
              <br />
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                Now opening to retail.
              </em>
            </h2>
            <p className="text-[15px] leading-[1.7] text-[var(--ink-muted)] mb-6">
              The Buy Bonds platform is not a fintech wrapper around someone else&apos;s product.
              It&apos;s the same desk, the same credit committee, the same relationships with
              CRISIL / ICRA / ICCL — fractionalised. When you buy a bond on the platform,
              you&apos;re buying paper from our institutional book.
            </p>
            <ul className="space-y-2.5 text-[14px] text-[var(--ink-muted)]">
              {[
                "SEBI-registered OBPP framework (in process)",
                "Aadhaar-OTP KYC, paperless onboarding",
                "ICCL T+1 settlement, demat to linked account",
                "Indicative yields shown live before purchase",
                "Internal credit memo attached to every AA listing",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </MotionSection>

          <MotionSection delay={0.25} className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-3)]">
              <ParallaxImage
                src="/brand/pexels-bond-certificate.jpg"
                alt="Bond certificate document"
                intensity={6}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <p className="eyebrow !text-white/70 mb-1">From the institutional book</p>
                <p className="text-[15px] text-white font-medium leading-tight">
                  AAA-PSU · 5Y · semi-annual coupon
                </p>
              </div>
            </div>
          </MotionSection>
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
            Be there{" "}
            <em
              className="text-[var(--accent)]"
              style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
            >
              on day one.
            </em>
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[var(--ink-muted)] max-w-2xl mx-auto mb-10">
            Early access opens 30 days before public launch. Join the waitlist to lock your spot.
          </p>
          <MagneticButton strength={0.22}>
            <a href={`mailto:${BRAND.contact.email}?subject=Buy%20Bonds%20Early%20Access`} data-cursor="grow">
              <Button size="xl" variant="accent" className="!gap-2">
                Reserve early access
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </MagneticButton>
        </MotionSection>
      </section>
    </div>
  );
}
