import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ArrowUpRight, Building2 } from "lucide-react";
import { BRAND } from "@/lib/brand";
import { MotionSection, MotionStagger, MotionItem } from "@/components/motion/MotionSection";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Button";
import { GoldParticles } from "@/components/motion/GoldParticles";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule an institutional bond consultation with Binary Bonds. Mumbai-based debt capital markets desk serving banks, insurance, mutual funds, and treasury desks.",
};

export default function ContactPage() {
  return (
    <div className="bg-[var(--bg)] overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden pt-44 pb-24 sm:pt-56 sm:pb-32">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[80%] -z-10 opacity-[0.10] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, var(--accent) 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 -z-10 opacity-30">
          <GoldParticles density={0.4} connect />
        </div>

        <div className="container-wide text-center max-w-5xl mx-auto">
          <MotionSection delay={0.1}>
            <p className="eyebrow text-[var(--accent)] mb-6">Contact</p>
          </MotionSection>
          <MotionSection delay={0.15} duration={0.95}>
            <h1
              className="text-[clamp(40px,8vw,120px)] leading-[0.95] tracking-[-0.04em] mb-6"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Speak with the{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                bond desk.
              </em>
            </h1>
          </MotionSection>
          <MotionSection delay={0.3}>
            <p className="text-[clamp(15px,1.4vw,18px)] leading-[1.6] text-[var(--ink-muted)] max-w-2xl mx-auto">
              Initial consultations are typically scheduled within one to two business days.
              Whether you&apos;re an issuer planning a placement or an institutional buyer
              building duration, our relationship team will route you to the right desk.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="container-wide pb-24 sm:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT — Direct lines */}
          <div className="lg:col-span-7 space-y-6">
            <MotionSection>
              <p className="eyebrow text-[var(--accent)] mb-4">Direct lines</p>
              <h2
                className="text-[clamp(28px,4vw,48px)] leading-[1.05] tracking-[-0.025em] mb-2"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                The fastest path is a phone call.
              </h2>
              <p className="text-[14px] text-[var(--ink-muted)] mb-8">
                Our relationship desk picks up between 09:00 and 18:00 IST, weekdays.
              </p>
            </MotionSection>

            <MotionStagger className="space-y-4" staggerChildren={0.08}>
              <MotionItem>
                <ContactRow
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  primary={BRAND.contact.phone}
                  href={`tel:${BRAND.contact.phone.replace(/\s+/g, "")}`}
                  hint="Mon–Fri · 9 AM – 6 PM IST"
                />
              </MotionItem>
              <MotionItem>
                <ContactRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  primary={BRAND.contact.email}
                  href={`mailto:${BRAND.contact.email}`}
                  hint="We respond within 24 business hours"
                />
              </MotionItem>
              <MotionItem>
                <ContactRow
                  icon={<MapPin className="h-5 w-5" />}
                  label="Office"
                  primary={BRAND.contact.address.line1}
                  secondary={BRAND.contact.address.line2}
                  hint={BRAND.contact.address.coords}
                />
              </MotionItem>
            </MotionStagger>

            <MotionSection delay={0.4}>
              <div className="rule-t pt-8 mt-10">
                <p className="eyebrow text-[var(--accent)] mb-3">Banking partner</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-md bg-[var(--bg-2)] border border-[var(--rule)] grid place-items-center">
                    <Building2 className="h-5 w-5 text-[var(--ink-muted)]" />
                  </div>
                  <div>
                    <p className="text-[15px] font-medium text-[var(--ink)]">
                      The Federal Bank Limited
                    </p>
                    <p className="text-[12px] text-[var(--ink-dim)] mt-0.5">
                      Settlement, escrow, and treasury operations
                    </p>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>

          {/* RIGHT — Schedule consultation form (lightweight, mailto-fallback) */}
          <div className="lg:col-span-5">
            <MotionSection delay={0.2}>
              <div className="card-quiet p-7 sm:p-9">
                <p className="eyebrow text-[var(--accent)] mb-3">Schedule consultation</p>
                <h3
                  className="text-[24px] sm:text-[28px] tracking-[-0.015em] leading-[1.2] mb-6"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                  }}
                >
                  Tell us what you&apos;re working on.
                </h3>

                <form
                  action={`mailto:${BRAND.contact.email}?subject=${encodeURIComponent("Consultation request — Binary Bonds")}`}
                  method="post"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <FormField label="Full name" name="name" required />
                  <FormField label="Institution" name="institution" required />
                  <FormField label="Email" name="email" type="email" required />
                  <FormField label="Phone" name="phone" type="tel" />

                  <div>
                    <label className="block eyebrow !text-[10px] mb-2">
                      I&apos;m interested in
                    </label>
                    <select
                      name="interest"
                      className="w-full bg-[var(--bg)] border border-[var(--rule)] rounded-md px-3 py-2.5 text-[14px] text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    >
                      <option>Underwriting & primary issuance</option>
                      <option>Secondary market trading</option>
                      <option>Government securities</option>
                      <option>Credit rating advisory</option>
                      <option>Portfolio management</option>
                      <option>Bespoke programme</option>
                    </select>
                  </div>

                  <div>
                    <label className="block eyebrow !text-[10px] mb-2">Notes (optional)</label>
                    <textarea
                      name="notes"
                      rows={4}
                      placeholder="Indicative size, target tenor, rating, timing…"
                      className="w-full bg-[var(--bg)] border border-[var(--rule)] rounded-md px-3 py-2.5 text-[14px] text-[var(--ink)] placeholder:text-[var(--ink-dim)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <MagneticButton strength={0.18}>
                    <Button type="submit" size="lg" variant="accent" className="w-full !gap-2">
                      Request consultation
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </MagneticButton>

                  <p className="text-[11px] text-[var(--ink-dim)] text-center pt-2">
                    Your details go directly to our relationship desk.
                    <br />
                    We never share contact information with third parties.
                  </p>
                </form>
              </div>
            </MotionSection>
          </div>
        </div>
      </section>

      {/* HOURS STRIP */}
      <section className="rule-t bg-[var(--bg-2)] py-16 sm:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <HoursCard
              icon={<Clock className="h-5 w-5" />}
              label="Bond Desk"
              hours="09:00 – 18:00 IST"
              days="Monday – Friday"
            />
            <HoursCard
              icon={<Clock className="h-5 w-5" />}
              label="Settlement"
              hours="T+1 ICCL"
              days="On every trade day"
            />
            <HoursCard
              icon={<Clock className="h-5 w-5" />}
              label="Emergency line"
              hours="24/7 for active programmes"
              days="Existing clients only"
            />
          </div>
        </div>
      </section>

      {/* CTA back home */}
      <section className="container-wide py-20 text-center">
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

function FormField({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block eyebrow !text-[10px] mb-2">
        {label} {required && <span className="text-[var(--accent)]">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-[var(--bg)] border border-[var(--rule)] rounded-md px-3 py-2.5 text-[14px] text-[var(--ink)] focus:border-[var(--accent)] focus:outline-none transition-colors"
      />
    </div>
  );
}

function ContactRow({
  icon,
  label,
  primary,
  secondary,
  href,
  hint,
}: {
  icon: React.ReactNode;
  label: string;
  primary: string;
  secondary?: string;
  href?: string;
  hint?: string;
}) {
  const Body = (
    <div className="card-quiet p-6 flex items-center gap-5 group hover:border-[var(--accent)]/40 transition-colors duration-500">
      <div className="h-12 w-12 rounded-md bg-[var(--bg-2)] grid place-items-center text-[var(--accent)] shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="eyebrow !text-[10px] mb-1">{label}</p>
        <p className="text-[16px] sm:text-[18px] text-[var(--ink)] font-medium leading-tight">
          {primary}
        </p>
        {secondary && (
          <p className="text-[14px] text-[var(--ink-muted)] mt-0.5">{secondary}</p>
        )}
        {hint && (
          <p className="text-[11px] text-[var(--ink-dim)] mt-1.5 font-mono tracking-[0.05em]">
            {hint}
          </p>
        )}
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-[var(--ink-dim)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} data-cursor="grow" className="block">
        {Body}
      </a>
    );
  }
  return Body;
}

function HoursCard({
  icon,
  label,
  hours,
  days,
}: {
  icon: React.ReactNode;
  label: string;
  hours: string;
  days: string;
}) {
  return (
    <div className="text-center sm:text-left">
      <div className="inline-flex h-10 w-10 rounded-md bg-[var(--bg)] border border-[var(--rule)] items-center justify-center text-[var(--accent)] mb-4">
        {icon}
      </div>
      <p className="eyebrow !text-[10px] mb-2">{label}</p>
      <p className="text-[18px] text-[var(--ink)] font-medium tracking-tight">{hours}</p>
      <p className="text-[13px] text-[var(--ink-muted)] mt-1">{days}</p>
    </div>
  );
}
