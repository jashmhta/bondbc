"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface T {
  quote: string;
  name: string;
  role: string;
  org: string;
}

/**
 * RotatingTestimonial — a single full-attention testimonial that morphs every
 * ~7s. Honors prefers-reduced-motion (no auto-rotate).
 */
export function RotatingTestimonial({ items }: { items: T[] }) {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 7000);
    return () => clearInterval(t);
  }, [items.length]);

  const t = items[idx];

  return (
    <div ref={ref} className="relative max-w-6xl">
      {/* Decorative quote mark */}
      <span
        aria-hidden
        className="block text-[clamp(140px,18vw,280px)] leading-[0.5] text-[var(--accent)]/25 -mb-12 sm:-mb-20"
        style={{ fontFamily: "var(--font-instrument-serif)" }}
      >
        “
      </span>

      <AnimatePresence mode="wait">
        <motion.figure
          key={idx}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <blockquote
            className="text-[clamp(28px,3.4vw,56px)] leading-[1.12] tracking-[-0.02em] text-[var(--ink)]"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            <span className="italic">{t.quote}</span>
          </blockquote>
          <figcaption className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4 sm:gap-8 items-end">
            <div>
              <p className="text-[clamp(14px,1.2vw,16px)] font-medium text-[var(--ink)]">
                {t.name}
              </p>
              <p className="mt-1 text-[clamp(12px,1vw,14px)] text-[var(--ink-muted)]">
                {t.role}
              </p>
              <p className="mt-1 eyebrow !text-[10px]">{t.org}</p>
            </div>
            {/* Pagination */}
            <div className="flex sm:justify-end items-center gap-3">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Quote ${i + 1}`}
                  className="group inline-flex items-center"
                >
                  <span
                    className={`block h-px transition-all duration-500 ${
                      i === idx
                        ? "w-12 bg-[var(--accent)]"
                        : "w-6 bg-[var(--rule-strong)] group-hover:bg-[var(--ink-dim)]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </figcaption>
        </motion.figure>
      </AnimatePresence>
    </div>
  );
}
