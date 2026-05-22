import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, ChevronLeft } from "lucide-react";
import { BRAND, SERVICES } from "@/lib/brand";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion/MotionSection";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/motion/ParallaxImage";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service" };
  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <div className="bg-[var(--bg)] overflow-x-hidden">
      {/* HERO IMAGE */}
      <section className="relative h-[55vh] sm:h-[70vh] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-black/40" />

        <div className="container-wide relative h-full flex flex-col justify-end pb-12 sm:pb-20">
          <Link
            href="/services"
            className="absolute top-32 sm:top-40 left-8 sm:left-12 inline-flex items-center gap-1.5 text-[13px] text-white/80 hover:text-white transition-colors group"
          >
            <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            All services
          </Link>

          <p className="eyebrow !text-white/70 mb-3">
            Service · {String(idx + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
          </p>
          <h1
            className="text-white text-[clamp(40px,9vw,140px)] leading-[0.92] tracking-[-0.04em] max-w-5xl [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
            }}
          >
            {service.title}
          </h1>
        </div>
      </section>

      {/* OVERVIEW + WHAT WE DO */}
      <section className="container-wide py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16">
          <MotionSection className="lg:col-span-5">
            <p className="eyebrow text-[var(--accent)] mb-4">Overview</p>
            <p
              className="text-[clamp(20px,2.5vw,30px)] leading-[1.3] tracking-[-0.015em] text-[var(--ink)] max-w-md"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              {service.summary}
            </p>
          </MotionSection>

          <MotionSection className="lg:col-span-6 lg:col-start-7" delay={0.15}>
            <p className="eyebrow text-[var(--accent)] mb-5">Capabilities</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[14px] leading-[1.55]">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent)] mt-[2px] shrink-0" />
                  <span className="text-[var(--ink-muted)]">{b}</span>
                </li>
              ))}
            </ul>
          </MotionSection>
        </div>
      </section>

      {/* HERO CONTEXT IMAGE — slow parallax */}
      <section className="container-wide pb-20 sm:pb-32">
        <MotionSection>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--bg-2)]">
            <ParallaxImage
              src={service.image}
              alt={service.title}
              intensity={6}
              sizes="(min-width: 1024px) 90vw, 100vw"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 bg-gradient-to-t from-black/85 via-black/30 to-transparent">
              <p className="eyebrow !text-white/70 mb-1">In practice</p>
              <p className="text-[15px] sm:text-[18px] text-white font-medium leading-tight max-w-2xl">
                {service.title} — Mumbai · {BRAND.contact.address.coords}
              </p>
            </div>
          </div>
        </MotionSection>
      </section>

      {/* WHO BENEFITS */}
      <section className="rule-t bg-[var(--bg-2)] py-20 sm:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 sm:mb-16">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-4">Who benefits</p>
              <h2
                className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-[-0.025em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Built for institutional{" "}
                <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  scale.
                </em>
              </h2>
            </div>
          </div>

          <MotionStagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-xl overflow-hidden"
            staggerChildren={0.06}
          >
            {[
              "Banks & insurance",
              "Mutual funds",
              "Family offices",
              "Corporate treasuries",
            ].map((b) => (
              <MotionItem key={b}>
                <div className="bg-[var(--bg)] p-7 sm:p-8 text-center sm:text-left">
                  <p className="text-[14px] text-[var(--ink)] font-medium leading-tight">
                    {b}
                  </p>
                </div>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* CTA */}
      <section className="container-wide py-20 sm:py-32 text-center">
        <MotionSection>
          <h2
            className="text-[clamp(32px,6vw,80px)] leading-[1.0] tracking-[-0.035em] mb-8 max-w-4xl mx-auto"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
            }}
          >
            Engage the{" "}
            <em
              className="text-[var(--accent)]"
              style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
            >
              {service.title.toLowerCase()}
            </em>{" "}
            desk.
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

      {/* PREV / NEXT NAVIGATION */}
      <section className="rule-t bg-[var(--bg-2)]">
        <div className="container-wide grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[var(--rule)]">
          <Link
            href={`/services/${prev.slug}`}
            className="group p-8 sm:p-12 flex flex-col gap-2 hover:bg-[var(--bg)] transition-colors"
          >
            <span className="eyebrow text-[var(--accent)]">← Previous service</span>
            <span
              className="text-[clamp(20px,2.4vw,28px)] tracking-[-0.015em] leading-[1.15] text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/services/${next.slug}`}
            className="group p-8 sm:p-12 flex flex-col gap-2 sm:text-right hover:bg-[var(--bg)] transition-colors"
          >
            <span className="eyebrow text-[var(--accent)]">Next service →</span>
            <span
              className="text-[clamp(20px,2.4vw,28px)] tracking-[-0.015em] leading-[1.15] text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              {next.title}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
