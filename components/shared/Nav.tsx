"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { BRAND, NAV } from "@/lib/brand";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  // Lock body scroll when menu open — also stop Lenis
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  return (
    <>
      {/* ───────── DESKTOP — full-width refined bar ───────── */}
      <header
        className={cn(
          "hidden md:flex fixed top-0 left-0 right-0 z-50",
          "transition-[backdrop-filter,background,border,padding] duration-500 ease-[var(--ease-out-expo)]",
          scrolled
            ? "border-b border-[var(--rule)] bg-[var(--bg)]/85 backdrop-blur-[20px] backdrop-saturate-[180%] py-1"
            : "border-b border-transparent bg-transparent py-2",
        )}
      >
        <div className="container-wide w-full flex h-[64px] items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2.5"
            aria-label="Binary Bonds — Home"
          >
            <Image
              src="/brand/logo.png"
              alt="Binary Bonds"
              width={40}
              height={40}
              priority
            />
            <span
              className="font-[family-name:var(--font-fraunces)] text-[18px] tracking-[-0.01em] leading-none text-[var(--ink)]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1' }}
            >
              Binary Bonds
            </span>
          </Link>

          <nav className="flex items-center gap-1 text-[14px]">
            {NAV.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "px-3 py-2 rounded-md tracking-[-0.005em]",
                    "text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-2)]",
                    "transition-colors",
                    active && "text-[var(--ink)] bg-[var(--bg-2)]",
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={`tel:${BRAND.contact.phone.replace(/\s+/g, "")}`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 text-[13px] text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors font-mono"
            >
              <Phone className="h-3.5 w-3.5" />
              {BRAND.contact.phone}
            </a>
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center gap-1.5 h-9 px-4 rounded-md",
                "bg-[var(--ink)] text-[var(--ink-inverse)]",
                "text-[13px] font-medium tracking-[-0.005em]",
                "hover:opacity-90 transition-opacity",
              )}
            >
              {BRAND.cta.primary}
              <ArrowUpRight className="h-3.5 w-3.5 -mr-0.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* ───────── MOBILE — two floating pills ───────── */}
      <div className="md:hidden fixed top-3 left-3 right-3 z-50 flex items-center justify-between gap-3 pointer-events-none">
        {/* Left pill — logo + brandmark */}
        <Link
          href="/"
          aria-label="Binary Bonds — Home"
          className={cn(
            "pointer-events-auto inline-flex items-center gap-2 h-12 pl-2 pr-4",
            "rounded-full border border-[var(--rule)]",
            "bg-[var(--bg)]/85 backdrop-blur-[20px] backdrop-saturate-[180%]",
            "shadow-lg shadow-black/10 transition-all duration-300",
            "active:scale-[0.97]",
          )}
        >
          <span className="block h-9 w-9 rounded-full bg-[var(--surface)] grid place-items-center overflow-hidden">
            <Image
              src="/brand/logo.png"
              alt=""
              width={36}
              height={36}
              priority
              className="object-contain"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className="text-[14px] tracking-[-0.01em] text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
              }}
            >
              Binary Bonds
            </span>
            <span className="mt-0.5 text-[9px] tracking-[0.16em] uppercase text-[var(--ink-dim)] font-mono">
              by Binary Capital
            </span>
          </span>
        </Link>

        {/* Right pill — theme toggle + hamburger */}
        <div
          className={cn(
            "pointer-events-auto inline-flex items-center gap-1 h-12 px-1.5",
            "rounded-full border border-[var(--rule)]",
            "bg-[var(--bg)]/85 backdrop-blur-[20px] backdrop-saturate-[180%]",
            "shadow-lg shadow-black/10",
          )}
        >
          <ThemeToggle className="!h-9 !w-9 !rounded-full" />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="h-9 w-9 inline-flex items-center justify-center rounded-full bg-[var(--ink)] text-[var(--ink-inverse)] active:scale-[0.94] transition-transform"
          >
            <Menu className="h-4 w-4" strokeWidth={2.2} />
          </button>
        </div>
      </div>

      {/* ───────── MOBILE — full-screen takeover menu ───────── */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} pathname={pathname} />
    </>
  );
}

// ─── Mobile menu — full-screen, editorial type, slide-in ─────────────────
function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="md:hidden fixed inset-0 z-[60] bg-[var(--bg)]"
          aria-modal="true"
          role="dialog"
        >
          {/* Subtle accent gradient */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-[40%] opacity-[0.10] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at top, var(--accent) 0%, transparent 60%)",
            }}
          />
          <div aria-hidden className="absolute inset-0 grain pointer-events-none" />

          {/* Top bar — same pill positioning, swap hamburger for X */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-3">
            <span
              className="inline-flex items-center gap-2 h-12 pl-2 pr-4 rounded-full border border-[var(--rule)] bg-[var(--bg)]/95 backdrop-blur"
              style={{ minWidth: 0 }}
            >
              <span className="block h-9 w-9 rounded-full bg-[var(--surface)] grid place-items-center overflow-hidden">
                <Image src="/brand/logo.png" alt="" width={36} height={36} priority />
              </span>
              <span
                className="text-[14px] tracking-[-0.01em] text-[var(--ink)]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                Binary Bonds
              </span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="h-12 w-12 inline-flex items-center justify-center rounded-full border border-[var(--rule)] bg-[var(--ink)] text-[var(--ink-inverse)] shadow-lg active:scale-[0.94] transition-transform"
            >
              <X className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </div>

          {/* Menu body */}
          <div className="absolute inset-0 pt-24 pb-10 overflow-y-auto flex flex-col">
            <div className="px-6 flex-1">
              <p className="eyebrow !text-[var(--accent)] mb-6">Menu</p>
              <ul className="space-y-1">
                {NAV.map((l, i) => {
                  const active = pathname === l.href;
                  return (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.08 + i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        href={l.href}
                        onClick={onClose}
                        className={cn(
                          "group block py-3 border-b border-[var(--rule)]",
                          "transition-colors duration-200",
                        )}
                      >
                        <span className="flex items-center justify-between gap-3">
                          <span
                            className={cn(
                              "text-[clamp(36px,11vw,64px)] tracking-[-0.025em] leading-[1.05]",
                              active ? "text-[var(--accent)]" : "text-[var(--ink)]",
                            )}
                            style={
                              active
                                ? {
                                    fontFamily: "var(--font-instrument-serif)",
                                    fontStyle: "italic",
                                  }
                                : {
                                    fontFamily: "var(--font-fraunces)",
                                    fontVariationSettings:
                                      '"opsz" 144, "SOFT" 60, "WONK" 1',
                                  }
                            }
                          >
                            {l.label}
                          </span>
                          <ArrowUpRight
                            className={cn(
                              "h-5 w-5 -rotate-45 transition-all",
                              active
                                ? "text-[var(--accent)] rotate-0"
                                : "text-[var(--ink-dim)] group-active:rotate-0 group-active:text-[var(--accent)]",
                            )}
                          />
                        </span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.08 + NAV.length * 0.05 + 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 h-14 w-full rounded-full bg-[var(--accent)] text-[var(--accent-fg)] text-[16px] font-medium shadow-lg shadow-[var(--accent)]/25 active:scale-[0.98] transition-transform"
                >
                  {BRAND.cta.primary}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Contact footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="px-6 pt-8 mt-10 border-t border-[var(--rule)] grid grid-cols-1 gap-4"
            >
              <a
                href={`tel:${BRAND.contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-[14px] text-[var(--ink-muted)] active:text-[var(--ink)]"
              >
                <Phone className="h-4 w-4 text-[var(--accent)]" />
                <span className="font-mono">{BRAND.contact.phone}</span>
              </a>
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="flex items-center gap-3 text-[14px] text-[var(--ink-muted)] active:text-[var(--ink)]"
              >
                <Mail className="h-4 w-4 text-[var(--accent)]" />
                {BRAND.contact.email}
              </a>
              <div className="flex items-start gap-3 text-[13px] text-[var(--ink-muted)]">
                <MapPin className="h-4 w-4 text-[var(--accent)] mt-0.5" />
                <span>
                  {BRAND.contact.address.line1}
                  <br />
                  {BRAND.contact.address.line2}
                </span>
              </div>
              <p className="mt-4 text-[10px] tracking-[0.16em] uppercase text-[var(--ink-dim)] font-mono">
                SEBI Registered · RBI Compliant · Mumbai, IN
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
