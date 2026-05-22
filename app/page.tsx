import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Phone,
  Download,
  ShieldCheck,
  Award,
  Building2,
  Activity,
  Zap,
  CheckCircle2,
  MapPin,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { HeroVideo } from "@/components/motion/HeroVideo";
import { GoldParticles } from "@/components/motion/GoldParticles";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion/MotionSection";
import { AnimatedNumber } from "@/components/motion/AnimatedNumber";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { BeamCard } from "@/components/motion/BeamCard";
import { SpotlightCard } from "@/components/motion/SpotlightCard";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { GhostReveal } from "@/components/motion/GhostReveal";
import { ComparisonTable } from "@/components/marketing/ComparisonTable";
import { TodayOnTheDesk } from "@/components/marketing/TodayOnTheDesk";
import { AnimatedYieldCurve } from "@/components/data/AnimatedYieldCurve";
import { HugeMarquee } from "@/components/marketing/HugeMarquee";
import { RotatingTestimonial } from "@/components/marketing/RotatingTestimonial";
import { ServicesHorizontal } from "@/components/marketing/ServicesHorizontal";
import { TickerTape } from "@/components/marketing/TickerTape";
import { MarketClock } from "@/components/marketing/MarketClock";
import { InlinePill, InlineMarker } from "@/components/marketing/InlineImageHeading";
import { LettersFromDesk } from "@/components/marketing/LettersFromDesk";
import { ImmersiveChapter } from "@/components/marketing/ImmersiveChapter";
import { YieldCalculator } from "@/components/data/YieldCalculator";

import {
  BRAND,
  WHY_CHOOSE,
  TESTIMONIALS,
  TEAM,
  VIDEOS,
} from "@/lib/brand";

export default function HomePage() {
  return (
    <div className="bg-[var(--bg)] overflow-x-hidden">

      {/* ============================================================ */}
      {/* HERO  ▸  cinematic Mumbai golden-hour, image-first             */}
      {/* ============================================================ */}
      <section className="relative min-h-[100svh] flex flex-col isolate">
        <HeroVideo
          videoSrc={VIDEOS.hero_skyline.src}
          posterSrc={VIDEOS.hero_skyline.poster}
          posterSrcLight="/brand/pexels-skyscrapers-gold.jpg"
          posterAlt={VIDEOS.hero_skyline.alt}
          bottomFade={0.55}
          sideFade={false}
        />

        {/* Sparse gold particle field */}
        <div className="absolute inset-0 -z-[5] opacity-70">
          <GoldParticles density={0.6} connect />
        </div>

        {/* Side rail — desktop */}
        <aside
          aria-hidden
          className="hidden xl:flex absolute top-0 bottom-0 right-6 z-10 flex-col justify-between py-32 pointer-events-none"
        >
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--ink)]/60 dark:text-white/60 [writing-mode:vertical-rl] rotate-180 dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
            BBND · {BRAND.contact.address.coords}
          </span>
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--ink)]/60 dark:text-white/60 [writing-mode:vertical-rl] rotate-180 dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
            est. 2010 · Mumbai, IN
          </span>
        </aside>

        <div className="container-wide flex-1 flex flex-col pt-32 sm:pt-40 pb-12">
          {/* Eyebrow strip — live clock + division */}
          <MotionSection delay={0.15} duration={0.7} yOffset={10}>
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-12 sm:mb-16">
              <MarketClock />
              <span className="hidden sm:block h-px w-10 bg-white/30" />
              <span className="text-[11px] sm:text-[12px] tracking-[0.18em] uppercase text-[var(--ink)]/65 dark:text-white/65 font-mono dark:[text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                A division of Binary Capital
              </span>
            </div>
          </MotionSection>

          {/* Headline — institutional gravity, with inline image moment */}
          <MotionStagger
            className="max-w-[1500px]"
            delayChildren={0.25}
            staggerChildren={0.06}
          >
            <MotionItem>
              <h1
                className="text-[clamp(48px,11vw,180px)] leading-[0.88] tracking-[-0.045em] text-[var(--ink)] dark:text-white dark:[text-shadow:0_2px_24px_rgba(0,0,0,0.35)]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                India&apos;s bond
              </h1>
            </MotionItem>
            <MotionItem>
              <h1
                className="text-[clamp(48px,11vw,180px)] leading-[0.88] tracking-[-0.045em] text-[var(--ink)] dark:text-white dark:[text-shadow:0_2px_24px_rgba(0,0,0,0.35)]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                market,
                <InlinePill
                  src="/brand/pexels-boardroom-meeting.jpg"
                  alt=""
                  size="lg"
                  tilt={-2}
                />
                <em
                  className="text-[var(--accent)]"
                  style={{
                    fontFamily: "var(--font-instrument-serif)",
                    fontStyle: "italic",
                  }}
                >
                  underwritten
                </em>
                <InlineMarker variant="dot" />
              </h1>
            </MotionItem>
          </MotionStagger>

          {/* Sub line + CTAs */}
          <div className="mt-auto pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <MotionSection
              delay={0.7}
              duration={0.8}
              className="lg:col-span-6 max-w-xl"
            >
              <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-[var(--ink)]/85 dark:text-white/85">
                {BRAND.name} is{" "}
                <em
                  className="text-[var(--ink)] dark:text-white not-italic font-medium"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  India&apos;s premier institutional bond house.
                </em>{" "}
                Underwriting, secondary trading, and rating advisory for banks,
                insurance, mutual funds, and treasury desks.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton strength={0.22}>
                  <Link href="/contact" data-cursor="grow">
                    <Button size="xl" variant="accent" className="!gap-2 !shadow-2xl">
                      {BRAND.cta.primary}
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </MagneticButton>
                <a href="/brochure.pdf" download data-cursor="grow">
                  <Button
                    size="xl"
                    variant="outline"
                    className="backdrop-blur-md bg-white/10 border-white/30 text-[var(--ink)] dark:text-white hover:bg-white/20"
                  >
                    <Download className="h-4 w-4 mr-1.5" />
                    {BRAND.cta.secondary}
                  </Button>
                </a>
              </div>
            </MotionSection>

            {/* Stat strip with animated counters */}
            <MotionSection
              delay={0.9}
              duration={0.85}
              className="lg:col-span-6 lg:col-start-8"
            >
              <div className="border-t border-white/25 pt-6 grid grid-cols-3 divide-x divide-white/15">
                <div className="pr-4 sm:pr-6">
                  <p
                    className="num-display text-[clamp(28px,3.5vw,48px)] leading-none tracking-[-0.02em] text-[var(--ink)] dark:text-white"
                  >
                    ₹
                    <AnimatedNumber value={2000} duration={2} />
                    <span className="text-[var(--accent)]">cr+</span>
                  </p>
                  <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[var(--ink)]/60 dark:text-white/60">
                    Underwritten
                  </p>
                </div>
                <div className="px-4 sm:px-6">
                  <p
                    className="num-display text-[clamp(28px,3.5vw,48px)] leading-none tracking-[-0.02em] text-[var(--ink)] dark:text-white"
                  >
                    <AnimatedNumber value={150} duration={1.6} />
                    <span className="text-[var(--accent)]">+</span>
                  </p>
                  <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[var(--ink)]/60 dark:text-white/60">
                    Institutional
                    <br className="hidden sm:inline" /> Clients
                  </p>
                </div>
                <div className="pl-4 sm:pl-6">
                  <p className="num-display text-[clamp(28px,3.5vw,48px)] leading-none tracking-[-0.02em] text-[var(--accent)]">
                    AAA
                  </p>
                  <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[var(--ink)]/60 dark:text-white/60">
                    Rating Partners
                  </p>
                </div>
              </div>
            </MotionSection>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 z-10">
          <span className="font-mono text-[9px] tracking-[0.24em] uppercase text-[var(--ink)]/55 dark:text-white/55">
            scroll
          </span>
          <span className="h-10 w-px bg-gradient-to-b from-white/55 to-transparent" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* TICKER TAPE  ▸  live (indicative) market data strip            */}
      {/* ============================================================ */}
      <TickerTape />

      {/* ============================================================ */}
      {/* HUGE MARQUEE — cinematic transition                           */}
      {/* ============================================================ */}
      <div className="rule-b bg-[var(--bg)]">
        <HugeMarquee
          items={[
            "Building Trust",
            "Strategic Bond Investments",
            "Primary Market",
            "Secondary Market",
            "Underwriting Excellence",
            "Mumbai · India",
          ]}
          speed={70}
        />
      </div>

      {/* ============================================================ */}
      {/* ABOUT  ▸  asymmetric editorial spread                        */}
      {/* ============================================================ */}
      <section className="container-wide pt-24 sm:pt-40 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-16">
          <div className="lg:col-span-1 lg:order-1">
            <p className="eyebrow text-[var(--accent)] [writing-mode:horizontal-tb] lg:[writing-mode:vertical-rl] lg:rotate-180">
              House Note
            </p>
          </div>

          <div className="lg:col-span-7 lg:order-2">
            <h2
              className="text-[clamp(36px,6vw,96px)] leading-[0.96] tracking-[-0.035em]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              <GhostReveal stagger={0.06} duration={1.2} drift="0.6em">
                A specialised division of Binary Capital, focused exclusively on the primary and secondary bond markets.
              </GhostReveal>
            </h2>
          </div>

          <MotionSection delay={0.2} className="lg:col-span-4 lg:col-start-9 lg:order-3 lg:row-span-2">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[var(--bg-2)]">
              <ParallaxImage
                src="/brand/pexels-boardroom-meeting.jpg"
                alt="Institutional bond clients meeting"
                intensity={8}
                priority
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="absolute inset-0"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                <p className="eyebrow !text-white/70 mb-1">Trusted by</p>
                <p className="text-[15px] text-white font-medium">
                  Banks · Insurance · Mutual Funds · HNI Family Offices
                </p>
              </div>
            </div>
          </MotionSection>

          <div className="lg:col-span-7 lg:col-start-2 lg:order-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <MotionSection delay={0.1}>
              <p className="text-[15px] leading-[1.7] text-[var(--ink-muted)]">
                We provide comprehensive bond underwriting services, government securities
                trading, and debt capital market solutions for banks, high-net-worth individuals,
                mutual fund houses, insurance companies, and various financial institutions across
                India.
              </p>
            </MotionSection>
            <MotionSection delay={0.2}>
              <p className="text-[15px] leading-[1.7] text-[var(--ink-muted)]">
                Our expertise lies in achieving optimal returns through prudent risk assessment
                while maintaining strict <strong className="text-[var(--ink)]">SEBI and RBI
                regulatory compliance</strong>. With over <strong className="text-[var(--ink)]">₹2,000
                crore</strong> in bonds successfully underwritten and more than <strong
                  className="text-[var(--ink)]"
                >150 institutional clients</strong> served, we have established ourselves as
                trusted partners in India&apos;s debt capital markets.
              </p>
            </MotionSection>
          </div>

          <MotionSection delay={0.3} className="lg:col-span-7 lg:col-start-2 lg:order-5">
            <p
              className="text-[clamp(20px,2.4vw,32px)] tracking-[-0.015em] leading-[1.25] text-[var(--ink)]"
              style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
            >
              &ldquo;Our mission is to transform aspirations into achievements by empowering our
              clients&apos; financial futures with integrity, expertise, and an unwavering
              commitment to delivering exceptional value.&rdquo;
            </p>
            <p className="mt-6 eyebrow text-[var(--ink-dim)]">— Founders, Binary Bonds</p>
          </MotionSection>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIVE YIELD CALCULATOR — innovation showcase                    */}
      {/* ============================================================ */}
      <section className="container-wide pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 sm:mb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[var(--accent)] mb-4">Calculator · Try it live</p>
            <h2
              className="text-[clamp(32px,5vw,72px)] leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              We <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                show our work.
              </em>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
            Adjust face value, coupon, tenor, and frequency. We compute cashflow projection,
            total interest, and an indicative Macaulay duration in real-time. No retail OBPP
            does this on their landing page.
          </p>
        </div>
        <YieldCalculator />

        {/* Animated curve teaser strip below calculator */}
        <MotionSection delay={0.2} className="mt-12 sm:mt-16">
          <div className="card-quiet p-5 sm:p-8">
            <div className="flex flex-wrap items-end justify-between gap-3 mb-4 sm:mb-5">
              <div>
                <p className="eyebrow text-[var(--accent)] mb-1.5">G-Sec curve · today</p>
                <p
                  className="text-[clamp(16px,2vw,22px)] tracking-[-0.01em] leading-[1.25] text-[var(--ink)]"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                  }}
                >
                  3-month to 30-year curve, drawn live.
                </p>
              </div>
              <Link
                href="/research/yield-curve"
                className="inline-flex items-center gap-1.5 text-[12px] text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors font-mono tracking-[0.04em]"
              >
                Full analysis
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
            <AnimatedYieldCurve height={220} />
          </div>
        </MotionSection>
      </section>

      {/* ============================================================ */}
      {/* TODAY ON THE DESK + COMPARISON  ▸  institutional context       */}
      {/* ============================================================ */}
      <section className="container-wide pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <MotionSection delay={0.05} className="lg:col-span-7">
            <TodayOnTheDesk />
          </MotionSection>
          <MotionSection delay={0.15} className="lg:col-span-5 flex flex-col gap-6">
            {/* Side card — institutional positioning quote */}
            <div className="card-quiet p-6 sm:p-8 flex-1">
              <p className="eyebrow text-[var(--accent)] mb-3">Why institutional</p>
              <p
                className="text-[clamp(18px,2.2vw,24px)] tracking-[-0.01em] leading-[1.35] text-[var(--ink)] mb-5"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                &ldquo;Retail OBPPs reach for ticket size. We reach for{" "}
                <span className="text-[var(--accent)]">balance-sheet weight.</span>&rdquo;
              </p>
              <p className="text-[13px] text-[var(--ink-muted)] leading-[1.6]">
                We don&apos;t aggregate retail orders into wholesale lots; we underwrite
                directly into the issue book and place out of our own balance sheet. The
                economics flow differently — and so does the conversation.
              </p>
              <p className="mt-4 eyebrow text-[var(--ink-dim)]">— Shray Vasudeva</p>
            </div>
          </MotionSection>
        </div>

        {/* Comparison table below */}
        <MotionSection delay={0.2} className="mt-12">
          <ComparisonTable />
        </MotionSection>
      </section>

      {/* ============================================================ */}
      {/* WHY CHOOSE  ▸  6-pillar grid                                  */}
      {/* ============================================================ */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-32 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
            <div className="lg:col-span-5">
              <p className="eyebrow text-[var(--accent)] mb-4">Why Binary Bonds</p>
              <h2
                className="text-[clamp(32px,5vw,72px)] leading-[1.0] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  Six pillars
                </em>{" "}
                of an institutional bond house.
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
              Transparency, compliance, and client success — built on relationships with rating
              agencies, exchanges, and 150+ institutional buyers.
            </p>
          </div>

          <MotionStagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-xl overflow-hidden"
            staggerChildren={0.05}
          >
            {WHY_CHOOSE.map((item, i) => (
              <MotionItem key={i}>
                <SpotlightCard intensity={0.14} className="h-full">
                  <div className="bg-[var(--bg)] p-7 sm:p-8 h-full flex flex-col group hover:bg-[var(--surface)] transition-colors duration-500">
                    <div className="flex items-baseline justify-between mb-8">
                      <span className="num-display text-[clamp(36px,4vw,56px)] leading-none text-[var(--ink)]/[0.10] tracking-[-0.02em] group-hover:text-[var(--accent)]/40 transition-colors duration-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[var(--ink-dim)] group-hover:text-[var(--accent)] transition-colors duration-500">
                        {[
                          <ShieldCheck key="sc" className="h-5 w-5" />,
                          <Activity key="ac" className="h-5 w-5" />,
                          <Building2 key="b" className="h-5 w-5" />,
                          <Award key="aw" className="h-5 w-5" />,
                          <Zap key="z" className="h-5 w-5" />,
                          <CheckCircle2 key="cc" className="h-5 w-5" />,
                        ][i]}
                      </span>
                    </div>
                    <h3
                      className="text-[clamp(20px,2vw,26px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)] mb-4"
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.6] text-[var(--ink-muted)]">
                      {item.body}
                    </p>
                  </div>
                </SpotlightCard>
              </MotionItem>
            ))}
          </MotionStagger>
        </div>
      </section>

      {/* ============================================================ */}
      {/* IMMERSIVE CHAPTER  ▸  GSAP-style scroll-pinned narrative      */}
      {/* ============================================================ */}
      <ImmersiveChapter
        chapter="The Underwriting Floor"
        title="The Process"
        frames={[
          {
            image: "/brand/pexels-boardroom-meeting.jpg",
            imageAlt: "Boardroom meeting with institutional bond clients",
            eyebrow: "Origination",
            headline: "It begins with a brief.",
            body:
              "An issuer's treasury walks us through their balance sheet, capex pipeline, and refinancing window. We model 3–4 structures against the curve and committed buyer demand.",
          },
          {
            image: "/brand/pexels-bond-certificate.jpg",
            imageAlt: "Bond certificate document",
            eyebrow: "Rating",
            headline: "Then we engage the agencies.",
            body:
              "Direct working relationships with CRISIL, ICRA, CARE, and India Ratings let us shape the credit story before the formal rating committee — saving weeks and protecting the spread.",
          },
          {
            image: "/brand/pexels-newspaper-finance.jpg",
            imageAlt: "Financial newspaper with bond pricing",
            eyebrow: "Underwriting",
            headline: "We commit balance sheet.",
            body:
              "Devolvement risk sits with us, not the issuer. With 150+ institutional buyers on speed dial — banks, insurance, MFs — we firm-underwrite or hard-place every issue we touch.",
          },
          {
            image: "/brand/pexels-trading-screens.jpg",
            imageAlt: "Trading screens with live market data",
            eyebrow: "Settlement",
            headline: "Then we settle on ICCL.",
            body:
              "T+1 ICCL settlement, ISIN allotment, RBI/SEBI reporting, and post-issue market-making — handled end-to-end. Your treasury sees one workflow, never the plumbing.",
          },
        ]}
      />

      {/* ============================================================ */}
      {/* SERVICES  ▸  pinned horizontal scroll                          */}
      {/* ============================================================ */}
      <ServicesHorizontal />

      {/* ============================================================ */}
      {/* LETTERS FROM THE DESK — innovation: rotating commentary        */}
      {/* ============================================================ */}
      <section className="container-wide py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10 sm:mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow text-[var(--accent)] mb-4">Research</p>
            <h2
              className="text-[clamp(32px,5vw,72px)] leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Voiced market{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                commentary.
              </em>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
            Curated weekly notes from our underwriting partners — the kind of opinionated
            macro and credit reasoning your treasury would otherwise pay a sell-side analyst for.
          </p>
        </div>
        <LettersFromDesk />
      </section>

      {/* ============================================================ */}
      {/* EDITORIAL PHOTO STRIP  ▸  city as character                    */}
      {/* ============================================================ */}
      <section className="rule-t bg-[var(--bg)] py-20 sm:py-28">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-4">Where we are</p>
              <h2
                className="text-[clamp(32px,5vw,64px)] leading-[1.0] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Mumbai. <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  Where the curve meets the city.
                </em>
              </h2>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
              India&apos;s debt capital markets concentrate within a five-square-kilometer
              radius around BKC, Nariman Point, and Fort. Our desk sits at the geographic
              center of it.
            </p>
          </div>

          {/* Photo essay — feature panel + 3-card film strip */}
          <MotionStagger
            className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-5"
            staggerChildren={0.08}
          >
            {/* Hero: Mumbai night feature */}
            <MotionItem className="lg:col-span-8">
              <figure className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-[var(--bg-2)] group">
                <Image
                  src="/brand/pexels-mumbai-skyline-night.jpg"
                  alt="Mumbai skyline at night with city lights reflected on water"
                  fill
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  quality={90}
                  priority={false}
                  className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-9 text-white">
                  <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-white/65 mb-2">
                    19.07° N · 72.87° E · Mumbai
                  </p>
                  <p
                    className="text-[clamp(20px,2.4vw,30px)] tracking-[-0.015em] leading-[1.2] max-w-md"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                    }}
                  >
                    The bond market <em
                      style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                    >
                      never really sleeps.
                    </em>
                  </p>
                </figcaption>
              </figure>
            </MotionItem>

            {/* Side rail: 2 tall cards */}
            <MotionItem className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-5">
              <figure className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-2)] group">
                <Image
                  src="/brand/pexels-skyscrapers-gold.jpg"
                  alt="Skyscrapers at golden hour"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  quality={85}
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/70 mb-0.5">BKC · Open</p>
                  <p className="text-[13px] sm:text-[14px] text-white font-medium leading-tight">
                    Bandra-Kurla Complex
                  </p>
                </figcaption>
              </figure>

              <figure className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--bg-2)] group">
                <Image
                  src="/brand/pexels-trading-screens.jpg"
                  alt="Trading screens with live market data"
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  quality={85}
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/70 mb-0.5">Live · G-Sec</p>
                  <p className="text-[13px] sm:text-[14px] text-white font-medium leading-tight">
                    Trading desk · ICCL
                  </p>
                </figcaption>
              </figure>
            </MotionItem>

            {/* Bottom strip: 3 small cards */}
            <MotionItem className="lg:col-span-4">
              <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg-2)] group">
                <Image
                  src="/brand/pexels-indian-architecture.jpg"
                  alt="Heritage colonial architecture in Mumbai"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  quality={85}
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/70 mb-0.5">Heritage</p>
                  <p className="text-[13px] text-white font-medium">Fort · 1865</p>
                </figcaption>
              </figure>
            </MotionItem>

            <MotionItem className="lg:col-span-4">
              <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg-2)] group">
                <Image
                  src="/brand/pexels-mumbai-skyline-evening.jpg"
                  alt="Mumbai skyline at evening twilight"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  quality={85}
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/70 mb-0.5">Marine Drive</p>
                  <p className="text-[13px] text-white font-medium">17:42 IST · Twilight</p>
                </figcaption>
              </figure>
            </MotionItem>

            <MotionItem className="lg:col-span-4">
              <figure className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[var(--bg-2)] group">
                <Image
                  src="/brand/pexels-newspaper-finance.jpg"
                  alt="Financial newspaper archive"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  quality={85}
                  className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/70 mb-0.5">Print Archive</p>
                  <p className="text-[13px] text-white font-medium">Mint · ET · BS</p>
                </figcaption>
              </figure>
            </MotionItem>
          </MotionStagger>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TRADING FLOOR VIDEO MOMENT                                    */}
      {/* ============================================================ */}
      <section className="relative h-[80vh] sm:h-[100svh] overflow-hidden isolate">
        {/* Poster always paints — video overlays once loaded */}
        <Image
          src={VIDEOS.trading_floor.poster}
          alt={VIDEOS.trading_floor.alt}
          fill
          sizes="100vw"
          quality={85}
          className="absolute inset-0 object-cover z-0"
        />
        <video
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={VIDEOS.trading_floor.poster}
        >
          <source src={VIDEOS.trading_floor.src} type="video/mp4" />
        </video>
        {/* Overlays for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-black/30 z-[2]" />

        <div className="container-wide h-full flex flex-col justify-end pb-16 sm:pb-32 relative z-10">
          <MotionSection yOffset={28} duration={0.95}>
            <p className="eyebrow text-[var(--accent)] mb-4 [text-shadow:0_1px_8px_rgba(0,0,0,0.6)]">
              The Desk
            </p>
            <h2
              className="max-w-[1400px] text-[clamp(36px,9vw,160px)] leading-[0.92] tracking-[-0.04em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.6)]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Seamless execution.
              <br />
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                Strategic insights.
              </em>
              <br />
              Trusted partnerships.
            </h2>
          </MotionSection>
        </div>
        <p className="absolute bottom-3 right-4 text-[10px] text-white/45 caps z-10 hidden sm:block">
          {VIDEOS.trading_floor.credit}
        </p>
      </section>

      {/* ============================================================ */}
      {/* ROTATING TESTIMONIAL                                           */}
      {/* ============================================================ */}
      <section className="container-wide py-28 sm:py-40 relative">
        <p className="eyebrow text-[var(--accent)] mb-10 sm:mb-16">
          Voices · Trusted by leading institutions
        </p>
        <RotatingTestimonial items={[...TESTIMONIALS]} />
      </section>

      {/* ============================================================ */}
      {/* TEAM  ▸  founders                                              */}
      {/* ============================================================ */}
      <section className="rule-t bg-[var(--bg-2)] py-24 sm:py-36">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14 sm:mb-20">
            <div className="lg:col-span-7">
              <p className="eyebrow text-[var(--accent)] mb-4">Team</p>
              <h2
                className="text-[clamp(32px,5vw,72px)] leading-[1.0] tracking-[-0.03em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Decades of <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  combined experience
                </em>
                <br />
                in debt capital markets.
              </h2>
            </div>
            <p className="lg:col-span-4 lg:col-start-9 text-[15px] sm:text-[17px] leading-[1.6] text-[var(--ink-muted)] self-end">
              Seasoned professionals from investment banking, credit analysis, and institutional
              sales — the people you actually want on your bond programme.
            </p>
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

      {/* ============================================================ */}
      {/* BINARY CAPITAL CROSS-LINK                                    */}
      {/* ============================================================ */}
      <section className="container-wide py-24 sm:py-32">
        <MotionSection>
          <div className="card-quiet p-8 sm:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              {/* Binary Capital lockup — logo + wordmark */}
              <div className="flex items-center gap-4 mb-7">
                <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl bg-[var(--bg-2)] grid place-items-center text-[var(--ink)] shrink-0 border border-[var(--rule)]">
                  <img
                    src="/brand/binary-capital-mark.svg"
                    alt="Binary Capital"
                    className="h-10 w-auto opacity-90"
                  />
                </div>
                <div>
                  <p className="eyebrow text-[var(--accent)] mb-1">Parent firm</p>
                  <p
                    className="text-[clamp(20px,2vw,26px)] text-[var(--ink)] leading-none tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                    }}
                  >
                    Binary Capital
                  </p>
                </div>
              </div>

              <h2
                className="text-[clamp(28px,4vw,52px)] tracking-[-0.025em] leading-[1.05] mb-6"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                <em
                  className="text-[var(--accent)]"
                  style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
                >
                  Bespoke
                </em>{" "}
                financial strategies for India&apos;s most ambitious clients.
              </h2>
              <p className="text-[15px] leading-[1.7] text-[var(--ink-muted)] max-w-xl mb-8">
                Binary Capital is a leading investment banking and financial advisory firm
                specialising in M&amp;A advisory, capital markets, project finance, and structured
                finance solutions. Over 10 years of excellence, serving clients across India.
              </p>
              <a href="https://binarycapital.in" target="_blank" rel="noreferrer" data-cursor="grow">
                <Button variant="primary" size="lg">
                  Visit Binary Capital
                  <ArrowUpRight className="h-4 w-4 ml-1" />
                </Button>
              </a>
            </div>

            <div className="lg:col-span-5">
              {/* Practice areas */}
              <p className="eyebrow !text-[10px] mb-5">Practice areas</p>
              <div className="grid grid-cols-1 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-xl overflow-hidden">
                {[
                  { t: "M&A Advisory", d: "Strategic mergers & acquisitions" },
                  { t: "Capital Markets", d: "Equity & debt capital raising" },
                  { t: "Project Finance", d: "Infrastructure & project funding" },
                  { t: "Structured Finance", d: "Bespoke debt & equity structures" },
                ].map((c) => (
                  <div
                    key={c.t}
                    className="bg-[var(--bg)] p-5 grid grid-cols-[auto_1fr] gap-5 items-baseline group hover:bg-[var(--surface)] transition-colors"
                  >
                    <span className="font-mono text-[10px] tracking-[0.18em] text-[var(--ink-dim)] group-hover:text-[var(--accent)] transition-colors">
                      →
                    </span>
                    <div>
                      <p className="text-[15px] font-medium text-[var(--ink)]">{c.t}</p>
                      <p className="text-[12px] text-[var(--ink-muted)] mt-0.5">{c.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MotionSection>
      </section>

      {/* ============================================================ */}
      {/* CONTACT  ▸  large editorial CTA                               */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--bg)] rule-t pt-24 pb-32 sm:pt-36 sm:pb-44">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[70%] -z-10 opacity-[0.10] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 30%, var(--accent) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 grain -z-10" aria-hidden />
        <div className="absolute inset-0 -z-10 opacity-30">
          <GoldParticles density={0.4} connect />
        </div>

        <div className="container-wide relative">
          <MotionSection>
            <p className="eyebrow text-[var(--accent)] text-center mb-8">Ready when you are</p>
          </MotionSection>

          <MotionSection delay={0.1} duration={0.95}>
            <h2
              className="text-center text-[clamp(48px,11vw,200px)] leading-[0.92] tracking-[-0.045em] max-w-6xl mx-auto"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Experience excellence
              <br />
              in <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >bond markets.</em>
            </h2>
          </MotionSection>

          <MotionSection delay={0.25}>
            <p className="mt-12 text-center max-w-xl mx-auto text-[clamp(15px,1.4vw,18px)] leading-[1.55] text-[var(--ink-muted)]">
              Initial consultations are typically scheduled within one to two business days.
              Connect with our relationship team to discuss your portfolio.
            </p>
          </MotionSection>

          <MotionSection delay={0.35}>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <MagneticButton strength={0.3}>
                <Link href="/contact" data-cursor="grow">
                  <Button size="xl" variant="accent" className="!gap-2">
                    {BRAND.cta.primary}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </Link>
              </MagneticButton>
              <a href={`tel:${BRAND.contact.phone.replace(/\s+/g, "")}`} data-cursor="grow">
                <Button size="xl" variant="outline">
                  <Phone className="h-4 w-4 mr-1" />
                  {BRAND.contact.phone}
                </Button>
              </a>
            </div>
          </MotionSection>

          {/* Contact info trio */}
          <MotionStagger
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--rule)] border border-[var(--rule)] rounded-xl overflow-hidden"
            staggerChildren={0.1}
          >
            <MotionItem className="bg-[var(--bg)] p-7">
              <Phone className="h-5 w-5 text-[var(--accent)] mb-4" />
              <p className="eyebrow !text-[10px] mb-2">Phone</p>
              <a
                href={`tel:${BRAND.contact.phone.replace(/\s+/g, "")}`}
                className="font-mono text-[15px] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                {BRAND.contact.phone}
              </a>
              <p className="mt-2 text-[12px] text-[var(--ink-dim)]">
                Mon–Fri 9 AM – 6 PM IST
              </p>
            </MotionItem>
            <MotionItem className="bg-[var(--bg)] p-7">
              <Mail className="h-5 w-5 text-[var(--accent)] mb-4" />
              <p className="eyebrow !text-[10px] mb-2">Email</p>
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="text-[15px] text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
              >
                {BRAND.contact.email}
              </a>
              <p className="mt-2 text-[12px] text-[var(--ink-dim)]">
                We respond within 24 hours
              </p>
            </MotionItem>
            <MotionItem className="bg-[var(--bg)] p-7">
              <MapPin className="h-5 w-5 text-[var(--accent)] mb-4" />
              <p className="eyebrow !text-[10px] mb-2">Office</p>
              <p className="text-[15px] text-[var(--ink)] leading-[1.4]">
                {BRAND.contact.address.line1}
                <br />
                {BRAND.contact.address.line2}
              </p>
              <p className="mt-2 font-mono text-[11px] text-[var(--ink-dim)]">
                {BRAND.contact.address.coords}
              </p>
            </MotionItem>
          </MotionStagger>
        </div>
      </section>
    </div>
  );
}
