import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { MotionSection } from "@/components/motion/MotionSection";
import { FaqAccordion } from "@/components/marketing/Faq";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Button";
import { GoldParticles } from "@/components/motion/GoldParticles";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about institutional bond underwriting, secondary trading, ICCL settlement, Section 194A, ISIN allotment, and our process at Binary Bonds.",
};

const FAQ_GROUPS: Array<{ heading: string; eyebrow: string; items: Array<{ q: string; a: React.ReactNode }> }> = [
  {
    eyebrow: "01 · Working with us",
    heading: "How an engagement actually unfolds.",
    items: [
      {
        q: "Are you an OBPP / retail bond platform?",
        a: (
          <>
            <p>
              No. Binary Bonds is an institutional bond house. We serve banks, insurance,
              mutual fund houses, family offices, and corporate treasuries — typical ticket
              sizes start at ₹5 Cr and go to ₹500 Cr+.
            </p>
            <p>
              For retail bond access, India has SEBI-registered Online Bond Platform Providers
              (OBPPs). We are not one of them.
            </p>
          </>
        ),
      },
      {
        q: "What's the minimum size you'll work on?",
        a: (
          <>
            <p>
              For underwriting mandates, ₹25 Cr is our typical minimum. Below that, the fixed
              costs of structuring, rating engagement, and post-issue compliance don&apos;t
              clear for either party.
            </p>
            <p>
              For secondary trading, ₹5 Cr per trade is the typical institutional lot we work
              with. Smaller is feasible for existing clients.
            </p>
          </>
        ),
      },
      {
        q: "How fast can you move on a placement?",
        a: (
          <>
            <p>
              Repeat issuers with existing ratings and clean documentation can go from mandate
              to settlement in 14–21 days. First-time issuers typically need 30–45 days, with
              rating engagement on the critical path.
            </p>
          </>
        ),
      },
      {
        q: "Do you sign exclusivity / lead-arranger mandates?",
        a: "Yes — both. Most of our engagements are sole-arranger. Joint mandates are common for ₹500 Cr+ tickets where we partner with another house.",
      },
    ],
  },
  {
    eyebrow: "02 · Settlement & operations",
    heading: "The plumbing — ICCL, ISIN, T+1.",
    items: [
      {
        q: "How does ICCL settlement work?",
        a: (
          <>
            <p>
              All our institutional bond trades settle via Indian Clearing Corporation Limited
              (ICCL) on T+1. ICCL is the central counterparty — once the trade is matched, ICCL
              novates and guarantees settlement.
            </p>
            <p>
              We handle the full ICCL workflow: trade reporting, margin calls, settlement
              confirmation, and corporate action processing. You see one workflow.
            </p>
          </>
        ),
      },
      {
        q: "When is the ISIN allotted?",
        a: (
          <>
            <p>
              For new issuances, ISIN allotment happens on the day of allotment, after all
              regulatory filings are complete. For secondary trades, the bond already has an
              ISIN — we identify and confirm it during the RFQ stage.
            </p>
          </>
        ),
      },
      {
        q: "What's involved in post-issue compliance?",
        a: (
          <>
            <p>
              For issuer engagements: SEBI EBP (Electronic Bidding Platform) reporting,
              listing on NSE/BSE debt segment if applicable, RBI reporting for FPI-eligible
              instruments, and trustee execution.
            </p>
            <p>We file all of this on your behalf and share a compliance pack at issuance.</p>
          </>
        ),
      },
    ],
  },
  {
    eyebrow: "03 · Tax & accounting",
    heading: "Section 194A, accruals, and reporting.",
    items: [
      {
        q: "How is Section 194A TDS handled?",
        a: (
          <>
            <p>
              Section 194A of the Income Tax Act requires the issuer (or paying agent) to
              deduct TDS on interest payments to bondholders, currently at 10 % for residents
              with PAN. The threshold for TDS on interest from listed corporate bonds is ₹5,000
              per year per bondholder.
            </p>
            <p>
              For institutional buyers with Form 15G/15H or specific exemptions (e.g.,
              insurance companies, mutual funds for certain instruments), we coordinate the
              exemption documentation with the issuer&apos;s paying agent.
            </p>
          </>
        ),
      },
      {
        q: "How are accrued interest and dirty price calculated?",
        a: (
          <>
            <p>
              Accrued interest is calculated on a 30/360 day-count convention for most
              corporate bonds, and actual/365 for G-Secs. Dirty price = clean price + accrued
              interest, and is what you actually pay or receive in the trade.
            </p>
            <p>
              Our trade confirmations and portfolio reports break out clean price, accrued,
              dirty, and yield — so reconciliation is straightforward.
            </p>
          </>
        ),
      },
      {
        q: "What portfolio reporting do you provide?",
        a: (
          <>
            <p>
              For ongoing trading clients we send monthly portfolio reports showing: position
              NAV, accrued interest, weighted average yield, modified duration, and rating
              distribution. Quarterly we add a curve attribution analysis (was the move yield
              or spread?).
            </p>
          </>
        ),
      },
    ],
  },
  {
    eyebrow: "04 · Risk & ratings",
    heading: "What you should ask any bond house.",
    items: [
      {
        q: "How is bond risk really assessed?",
        a: (
          <>
            <p>
              Three layers. Credit: rating + spread analysis vs sector + financial covenants.
              Market: duration / convexity / spread duration vs your liability profile.
              Liquidity: bid-offer spreads, volume in the secondary market, and time to exit
              an institutional lot.
            </p>
            <p>
              We share our internal credit memo and our market-risk view alongside any
              recommendation. You don&apos;t have to take our word — you get the workings.
            </p>
          </>
        ),
      },
      {
        q: "What if the rating gets downgraded after I buy?",
        a: (
          <>
            <p>
              Rating action surveillance is part of the relationship. We notify clients within
              the same business day of a rating action, share our view on whether to hold,
              hedge, or exit, and offer to source a replacement at indicative spreads.
            </p>
          </>
        ),
      },
      {
        q: "Do you provide credit research?",
        a: "Yes. Our research team publishes weekly market commentary (see our Letters from the Desk on the homepage) and detailed credit notes for any counterparty we underwrite.",
      },
    ],
  },
];

export default function FaqPage() {
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
            <p className="eyebrow text-[var(--accent)] mb-6">Common questions</p>
          </MotionSection>

          <MotionSection delay={0.15} duration={0.95}>
            <h1
              className="text-[clamp(40px,9vw,140px)] leading-[0.92] tracking-[-0.04em] mb-8"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Questions{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                worth asking.
              </em>
            </h1>
          </MotionSection>

          <MotionSection delay={0.4}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-[var(--ink-muted)] max-w-3xl">
              Real questions from real institutional clients. If you&apos;re evaluating a bond
              house — these are the ones to ask.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* FAQ GROUPS */}
      <section className="container-wide pb-24 sm:pb-32 max-w-5xl">
        <div className="space-y-20 sm:space-y-28">
          {FAQ_GROUPS.map((group, i) => (
            <MotionSection key={group.heading} delay={i * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
                <div className="lg:col-span-12">
                  <p className="eyebrow text-[var(--accent)] mb-4 font-mono">{group.eyebrow}</p>
                  <h2
                    className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-[-0.025em] max-w-3xl"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                    }}
                  >
                    {group.heading}
                  </h2>
                </div>
              </div>
              <FaqAccordion items={group.items} />
            </MotionSection>
          ))}
        </div>
      </section>

      {/* SCHEMA: FAQPage */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_GROUPS.flatMap((g) =>
              g.items.map((it) => ({
                "@type": "Question",
                name: it.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: typeof it.a === "string" ? it.a : "See site for full answer.",
                },
              })),
            ),
          }),
        }}
      />

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
              Have a different{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                question?
              </em>
            </h2>
            <p className="text-[15px] sm:text-[17px] text-[var(--ink-muted)] max-w-2xl mx-auto mb-10">
              Schedule a call with our relationship team. We&apos;ll route you to the right desk
              within 24 hours.
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
