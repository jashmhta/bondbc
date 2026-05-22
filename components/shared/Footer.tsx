import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { BRAND, SERVICES } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="rule-t bg-[var(--bg-2)] mt-32 relative overflow-hidden">
      {/* Decorative giant brand wordmark in background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 left-0 right-0 text-center select-none"
      >
        <span
          className="inline-block text-[clamp(140px,20vw,360px)] leading-[0.8] tracking-[-0.05em] text-[var(--ink)]/[0.04]"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1',
          }}
        >
          Binary Bonds.
        </span>
      </div>

      <div className="container-wide py-20 relative">
        {/* Top — brand + tagline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5 max-w-md">
            <Logo size="lg" href={null} />
            <p
              className="mt-8 text-[clamp(20px,2vw,28px)] tracking-[-0.015em] leading-[1.2] text-[var(--ink)]"
              style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
            >
              {BRAND.tagline}.
            </p>
            <p className="mt-4 text-[14px] leading-[1.55] text-[var(--ink-muted)]">
              A specialized division of {BRAND.parent}.
            </p>
            <div className="mt-8 space-y-2.5">
              <a
                href={`tel:${BRAND.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-[14px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors group"
              >
                <Phone className="h-4 w-4 text-[var(--accent)]" />
                <span className="font-mono">{BRAND.contact.phone}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="flex items-center gap-3 text-[14px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors group"
              >
                <Mail className="h-4 w-4 text-[var(--accent)]" />
                <span>{BRAND.contact.email}</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
              <div className="flex items-start gap-3 text-[14px] text-[var(--ink-muted)]">
                <MapPin className="h-4 w-4 text-[var(--accent)] mt-0.5" />
                <span>
                  {BRAND.contact.address.line1}
                  <br />
                  {BRAND.contact.address.line2}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="eyebrow !text-[var(--ink)] mb-4">Services</h4>
              <ul className="space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="eyebrow !text-[var(--ink)] mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li><Link href="/about" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">About</Link></li>
                <li><Link href="/services" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">Services</Link></li>
                <li><Link href="/faq" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">FAQ</Link></li>
                <li><Link href="/contact" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">Contact</Link></li>
                <li>
                  <a
                    href="https://binarycapital.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1"
                  >
                    Binary Capital
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="eyebrow !text-[var(--ink)] mb-4">Compliance</h4>
              <ul className="space-y-2.5">
                <li><Link href="/disclaimer" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">Disclaimer</Link></li>
                <li><Link href="/privacy-policy" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">Privacy</Link></li>
                <li><Link href="/terms-of-service" className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">Terms</Link></li>
                <li>
                  <a
                    href="https://scores.sebi.gov.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    SEBI SCORES
                  </a>
                </li>
                <li>
                  <a
                    href="https://smartodr.in"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
                  >
                    Smart ODR
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Trust banner */}
        <div className="rule-t pt-8 mb-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="eyebrow !text-[10px] mb-2">Banking partner</p>
            <p className="text-[14px] font-medium text-[var(--ink)]">
              {BRAND.trust.bank}
            </p>
            <p className="text-[12px] text-[var(--ink-dim)] mt-1">Demat services & settlement</p>
          </div>
          <div>
            <p className="eyebrow !text-[10px] mb-2">Compliance</p>
            <p className="text-[14px] font-medium text-[var(--ink)]">
              {BRAND.trust.sebiNote}
            </p>
            <p className="text-[12px] text-[var(--ink-dim)] mt-1">Reg. with SEBI · Central Bank guidance</p>
          </div>
          <div>
            <p className="eyebrow !text-[10px] mb-2">Trusted by</p>
            <p className="text-[14px] font-medium text-[var(--ink)]">
              150+ Institutional Clients
            </p>
            <p className="text-[12px] text-[var(--ink-dim)] mt-1">Banks · Insurance · MFs · HNIs</p>
          </div>
        </div>

        {/* Bottom — copyright */}
        <div className="rule-t pt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
          <p className="text-[12px] text-[var(--ink-dim)] font-mono">
            © {new Date().getFullYear()} {BRAND.parentEntity}. All rights reserved · Mumbai, India
          </p>
          <p className="text-[12px] text-[var(--ink-dim)] md:text-right">
            Investments in debt securities are subject to market risks. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}
