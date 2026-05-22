import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, AlertTriangle, Scale, BookOpen } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { MotionSection } from "@/components/motion/MotionSection";

export const metadata: Metadata = {
  title: "Disclaimer & Risk",
  description:
    "Risk disclosure, regulatory positioning, and important legal information for clients of Binary Bonds and Binary Capital.",
};

export default function DisclaimerPage() {
  return (
    <div className="bg-[var(--bg)] overflow-x-hidden">
      {/* HERO */}
      <section className="container-wide pt-44 pb-16 sm:pt-56 sm:pb-20 max-w-6xl">
        <MotionSection delay={0.1}>
          <p className="eyebrow text-[var(--accent)] mb-6">Important Information</p>
        </MotionSection>
        <MotionSection delay={0.15} duration={0.95}>
          <h1
            className="text-[clamp(36px,8vw,120px)] leading-[0.95] tracking-[-0.04em] mb-6"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
            }}
          >
            Disclaimer &{" "}
            <em
              className="text-[var(--accent)]"
              style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
            >
              risk disclosure.
            </em>
          </h1>
        </MotionSection>
        <MotionSection delay={0.4}>
          <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.65] text-[var(--ink-muted)] max-w-3xl">
            The information on this site is for institutional, accredited, and qualified
            investors. It is not investment advice, an offer to sell, or a solicitation to buy
            any security. Read carefully before engaging.
          </p>
        </MotionSection>
      </section>

      {/* SECTIONS */}
      <section className="container-wide pb-24 max-w-4xl space-y-14">
        <Block
          icon={<ShieldAlert className="h-5 w-5" />}
          title="Regulatory positioning"
        >
          <p>
            Binary Bonds is the institutional bond desk of Binary Capital, an Indian investment
            banking and financial advisory firm. Activities are conducted within India&apos;s
            applicable regulatory framework — including SEBI (Securities and Exchange Board of
            India), RBI (Reserve Bank of India), and ICCL (Indian Clearing Corporation Limited)
            for settlement.
          </p>
          <p>
            The Federal Bank Limited is our banking partner for settlement, escrow, and
            treasury operations. Specific SEBI / RBI registrations are maintained at the
            Binary Capital level; details are available on request and disclosed in
            engagement letters.
          </p>
        </Block>

        <Block
          icon={<AlertTriangle className="h-5 w-5" />}
          title="Investment risk"
        >
          <p>
            Investments in debt securities — including government securities, corporate bonds,
            non-convertible debentures (NCDs), and structured debt — are subject to multiple
            risks. Past performance does not predict future results. Yield, price, and
            principal can fluctuate. The full list of typical risks includes:
          </p>
          <ul className="space-y-2.5 pl-1">
            {[
              "Credit risk: the issuer may default on coupon or principal payments. Rating actions are not predictive — they are an opinion at a point in time.",
              "Interest rate risk: bond prices fall when market yields rise. Longer-duration paper amplifies the move.",
              "Liquidity risk: institutional bonds are not always continuously priced; exit lots may face wider bid-offer spreads.",
              "Reinvestment risk: coupons received may be reinvested at lower yields than the original bond.",
              "Inflation / real-return risk: inflation can erode the real return on a fixed-coupon bond.",
              "Call / prepayment risk: callable bonds may be redeemed before maturity in declining-rate environments.",
              "Tax risk: changes in TDS (Section 194A), capital gains treatment, or indexation rules can change post-tax returns.",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-[14px]">
                <span className="mt-2 h-1 w-1 rounded-full bg-[var(--accent)] shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </Block>

        <Block
          icon={<Scale className="h-5 w-5" />}
          title="No investment advice"
        >
          <p>
            Nothing on this website constitutes investment advice, a recommendation to buy or
            sell any security, or a solicitation. Information is provided for educational and
            informational purposes only. Investors must conduct their own analysis or consult
            a SEBI-registered investment advisor before making any investment decision.
          </p>
          <p>
            Indicative yields, spreads, and coupons shown anywhere on this site are for
            illustrative purposes only and do not represent firm pricing. Firm pricing is
            available only to mandated counterparties and is set out in formal term sheets.
          </p>
        </Block>

        <Block
          icon={<BookOpen className="h-5 w-5" />}
          title="Indicative data & calculators"
        >
          <p>
            Calculators on this site (including the live yield calculator) compute pre-tax
            cashflows on simplified assumptions — fixed coupon, no embedded options, no
            credit-event scenarios, no transaction costs. They are for educational illustration
            only and do not capture: Section 194A TDS, settlement fees, ICCL margins, or other
            real-world economics.
          </p>
          <p>
            Macaulay duration is approximated using the input yield as the discount rate.
            Modified duration ≈ Macaulay ÷ (1 + y/m). Convexity, key-rate duration, OAS, and
            similar advanced sensitivities are not modelled in the public calculator.
          </p>
        </Block>

        <Block
          icon={<Scale className="h-5 w-5" />}
          title="Forward-looking statements"
        >
          <p>
            Any forward-looking statements (e.g., views in our Letters from the Desk research
            commentary) are based on current expectations and assumptions, are subject to
            significant uncertainty, and may differ materially from actual outcomes. Binary
            Bonds and Binary Capital do not undertake any obligation to update such statements.
          </p>
        </Block>

        <Block icon={<Scale className="h-5 w-5" />} title="Contact for clarification">
          <p>
            If anything on this site is unclear or if you require formal documentation about
            our regulatory standing, please contact our compliance team at{" "}
            <a
              href={`mailto:${BRAND.contact.email}`}
              className="text-[var(--accent)] hover:underline underline-offset-4"
            >
              {BRAND.contact.email}
            </a>{" "}
            or call <span className="font-mono">{BRAND.contact.phone}</span>.
          </p>
          <p className="text-[12px] text-[var(--ink-dim)] pt-2">
            Last updated: April 2026.
          </p>
        </Block>
      </section>

      <section className="container-wide py-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[14px] text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors"
        >
          ← Back to overview
        </Link>
      </section>
    </div>
  );
}

function Block({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span className="h-9 w-9 rounded-md bg-[var(--bg-2)] border border-[var(--rule)] grid place-items-center text-[var(--accent)] shrink-0">
          {icon}
        </span>
        <h2
          className="text-[clamp(22px,3vw,32px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)]"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
          }}
        >
          {title}
        </h2>
      </div>
      <div className="space-y-3 text-[14px] sm:text-[15px] leading-[1.7] text-[var(--ink-muted)] pl-12">
        {children}
      </div>
    </div>
  );
}
