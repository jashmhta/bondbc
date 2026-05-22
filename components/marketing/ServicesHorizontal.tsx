"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/brand";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesHorizontal — Awwwards-style pinned horizontal scroll showcase.
 * On desktop: pins, scrolls horizontally driven by vertical wheel.
 * On mobile (≤1024px): falls back to a vertical stack.
 */
export function ServicesHorizontal() {
  const wrapper = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapper.current || !track.current) return;
      const trackEl = track.current;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const distance = trackEl.scrollWidth - window.innerWidth;
        if (distance <= 0) return;
        const tween = gsap.to(trackEl, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper.current,
            start: "top top",
            end: () => `+=${distance + 200}`,
            scrub: 1.05,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Per-card subtle reveal
        const cards = trackEl.querySelectorAll("[data-svc-card]");
        gsap.set(cards, { opacity: 0.45, scale: 0.97 });
        cards.forEach((c) => {
          gsap.to(c, {
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: c,
              containerAnimation: tween,
              start: "left center",
              end: "center center",
              scrub: 0.5,
            },
          });
        });

        return () => tween.kill();
      });
    },
    { scope: wrapper },
  );

  return (
    <>
      {/* Desktop: pinned horizontal scroll */}
      <section
        ref={wrapper}
        className="hidden lg:block relative overflow-hidden bg-[var(--bg)]"
      >
        {/* Section label rail */}
        <div className="absolute top-1/2 -translate-y-1/2 left-6 z-20 -rotate-90 origin-left whitespace-nowrap">
          <p className="eyebrow !text-[10px] tracking-[0.3em]">
            Services · 01 — 06 · scroll →
          </p>
        </div>

        <div ref={track} className="flex h-screen items-center pl-[10vw] pr-[6vw] gap-8 will-change-transform">
          {/* Intro panel */}
          <div className="shrink-0 w-[80vw] sm:w-[60vw] lg:w-[40vw] flex flex-col justify-end h-[80vh]">
            <p className="eyebrow text-[var(--accent)] mb-4">Our Core Services</p>
            <h2 className="text-[clamp(40px,5vw,80px)] leading-[0.98] tracking-[-0.03em] mb-8">
              From expert{" "}
              <em
                className="text-[var(--accent)]"
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                bond underwriting
              </em>
              <br />
              to comprehensive portfolio management.
            </h2>
            <p className="text-[15px] leading-[1.65] text-[var(--ink-muted)] max-w-md">
              Six specialised desks. One institutional standard. Scroll to explore each →
            </p>
          </div>

          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              data-svc-card
              data-cursor="view"
              className="group shrink-0 w-[70vw] sm:w-[55vw] lg:w-[40vw] xl:w-[36vw] h-[80vh] relative overflow-hidden rounded-2xl bg-[var(--surface)] border border-[var(--rule)]"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="40vw"
                quality={85}
                className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* Top-left number */}
              <span className="absolute top-7 left-7 num-display text-[14px] tracking-wider text-white/70">
                0{i + 1} / 06
              </span>

              {/* Content bottom */}
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10 text-white">
                <h3 className="text-[clamp(24px,2.6vw,38px)] tracking-[-0.02em] leading-[1.1] mb-3">
                  {s.title}
                </h3>
                <p className="text-[14px] leading-[1.55] text-white/80 max-w-md mb-6">
                  {s.summary}
                </p>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 max-w-md mb-7">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-[12px] text-white/75 inline-flex items-center gap-2"
                    >
                      <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <span className="text-[13px] inline-flex items-center gap-2 text-[var(--accent)] font-medium">
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          ))}

          {/* Outro panel */}
          <div className="shrink-0 w-[60vw] lg:w-[40vw] flex flex-col justify-center items-start pl-12">
            <p className="eyebrow text-[var(--accent)] mb-4">Need something else?</p>
            <p className="text-[clamp(28px,3vw,48px)] leading-[1.1] tracking-[-0.02em] mb-8">
              We build <em
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >bespoke programmes</em> for every institutional treasury.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[15px] text-[var(--ink)] underline underline-offset-8 decoration-[var(--rule-strong)] hover:decoration-[var(--accent)]"
            >
              Schedule consultation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile / tablet: vertical stack */}
      <section className="lg:hidden container-wide py-20">
        <p className="eyebrow text-[var(--accent)] mb-4">Our Core Services</p>
        <h2 className="text-[clamp(32px,5vw,48px)] leading-[1.0] tracking-[-0.025em] mb-12">
          From expert{" "}
          <em
            className="text-[var(--accent)]"
            style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
          >
            bond underwriting
          </em>{" "}
          to comprehensive portfolio management.
        </h2>
        <div className="space-y-6">
          {SERVICES.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group block relative overflow-hidden rounded-xl border border-[var(--rule)] bg-[var(--surface)] aspect-[5/7]"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                quality={85}
                className="object-cover transition-transform duration-1000 ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <span className="absolute top-5 left-5 num-display text-[13px] tracking-wider text-white/70">
                0{i + 1} / 06
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="text-[24px] tracking-[-0.015em] leading-[1.15] mb-3">{s.title}</h3>
                <p className="text-[13px] leading-[1.55] text-white/80 mb-5">{s.summary}</p>
                <span className="text-[13px] inline-flex items-center gap-2 text-[var(--accent)] font-medium">
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
