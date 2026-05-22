import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/brand";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion/MotionSection";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Button";
import { GoldParticles } from "@/components/motion/GoldParticles";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six specialised desks: bond underwriting, government securities, high-yield, portfolio management, credit rating advisory, and secondary trading.",
};

export default function ServicesPage() {
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
            <p className="eyebrow text-[var(--accent)] mb-6">Services</p>
          </MotionSection>
          <MotionSection delay={0.15} duration={0.95}>
            <h1
              className="text-[clamp(40px,9vw,140px)] leading-[0.92] tracking-[-0.04em] mb-8"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Six desks.{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                One standard.
              </em>
            </h1>
          </MotionSection>
          <MotionSection delay={0.4}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-[var(--ink-muted)] max-w-3xl">
              From corporate underwriting to secondary market-making — every desk runs the same
              institutional standard for compliance, transparency, and execution quality.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section className="container-wide pb-24 sm:pb-32">
        <MotionStagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerChildren={0.08}
        >
          {SERVICES.map((s, i) => (
            <MotionItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                data-cursor="view"
                className="group relative block aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--rule)]"
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={85}
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                <span className="absolute top-6 left-6 num-display text-[14px] tracking-wider text-white/70">
                  0{i + 1} / 0{SERVICES.length}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                  <h3
                    className="text-[clamp(22px,2.4vw,30px)] tracking-[-0.015em] leading-[1.15] mb-3"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[13px] leading-[1.5] text-white/80 mb-4 line-clamp-2">
                    {s.summary}
                  </p>
                  <span className="text-[13px] inline-flex items-center gap-2 text-[var(--accent)] font-medium">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </MotionItem>
          ))}
        </MotionStagger>
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
              Need something{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                different?
              </em>
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[var(--ink-muted)] max-w-2xl mx-auto mb-10">
              We build bespoke programmes for issuers, treasuries, and asset managers with
              specialised debt market needs.
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
