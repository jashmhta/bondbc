"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Letter {
  date: string;
  author: string;
  authorRole: string;
  headline: string;
  body: string;
  category: "Macro" | "Curve" | "Credit" | "Policy";
}

const LETTERS: Letter[] = [
  {
    date: "Apr 2026",
    author: "Shray Vasudeva",
    authorRole: "Co-Founder · Bond Desk",
    category: "Macro",
    headline: "The shape of demand is changing.",
    body:
      "Insurance buyers are extending duration faster than mutual funds can build it. We're seeing 25Y G-Sec demand outstrip supply in three of the last four auctions — a structural signal worth more than any single CPI print.",
  },
  {
    date: "Mar 2026",
    author: "Rati Ravi Kant",
    authorRole: "Director · Underwriting",
    category: "Credit",
    headline: "AAA spreads are quietly compressing.",
    body:
      "AAA-PSU 10Y spreads narrowed 11 bps over Q1. Counterintuitively, this is a buy signal for AA+ paper — when the top tier compresses, the discriminating institutional buyer reaches for one notch lower.",
  },
  {
    date: "Feb 2026",
    author: "Shray Vasudeva",
    authorRole: "Co-Founder · Bond Desk",
    category: "Curve",
    headline: "The 5/30 inversion is real, but transient.",
    body:
      "We've been pricing 5Y G-Sec inverted to 30Y for 47 sessions running. History says this resolves through long-end rally, not short-end sell-off. Position accordingly — but with size discipline.",
  },
  {
    date: "Jan 2026",
    author: "Rati Ravi Kant",
    authorRole: "Director · Underwriting",
    category: "Policy",
    headline: "Liquidity is doing the heavy lifting.",
    body:
      "RBI's variable rate reverse repo absorption tells the story: ₹1.8L cr+ system surplus is keeping front-end soft. A 25 bps repo cut without OMO sales would steepen — that's the asymmetric trade.",
  },
];

/**
 * LettersFromDesk — editorial commentary block presented as a rotating
 * letter format. Premium institutional sites (PIMCO Insights, Bridgewater
 * Daily Observations) build authority through opinionated, voiced research.
 * Indian retail-OBPP competitors do not have this voice — that's our wedge.
 */
export function LettersFromDesk() {
  const [idx, setIdx] = useState(0);
  const letter = LETTERS[idx];

  const next = () => setIdx((i) => (i + 1) % LETTERS.length);
  const prev = () => setIdx((i) => (i - 1 + LETTERS.length) % LETTERS.length);

  return (
    <div className="relative card-quiet overflow-hidden">
      {/* Header */}
      <div className="px-7 sm:px-10 pt-8 pb-5 border-b border-[var(--rule)] flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow text-[var(--accent)] mb-1">Letters from the Desk</p>
          <p className="text-[13px] text-[var(--ink-muted)]">
            Curated market commentary from our underwriting partners.
          </p>
        </div>

        {/* Pager */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous letter"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-[var(--rule)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--rule-strong)] transition-colors"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="font-mono text-[11px] text-[var(--ink-dim)] mx-2 tabular-nums">
            {String(idx + 1).padStart(2, "0")} / {String(LETTERS.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next letter"
            className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-[var(--rule)] text-[var(--ink-muted)] hover:text-[var(--ink)] hover:border-[var(--rule-strong)] transition-colors"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="relative px-7 sm:px-10 py-10 sm:py-14 min-h-[280px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={letter.headline}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5 text-[11px] tracking-[0.16em] uppercase text-[var(--ink-dim)] font-mono">
              <span className="px-2.5 py-1 rounded-full bg-[var(--accent-muted)] text-[var(--accent)] tracking-[0.14em]">
                {letter.category}
              </span>
              <span>·</span>
              <span>{letter.date}</span>
            </div>

            <h3
              className="text-[clamp(28px,4vw,52px)] leading-[1.05] tracking-[-0.025em] text-[var(--ink)] max-w-3xl mb-6"
              style={{ fontFamily: "var(--font-fraunces)", fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1' }}
            >
              <em
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                &ldquo;
              </em>
              {letter.headline}
              <em
                style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
              >
                &rdquo;
              </em>
            </h3>

            <p className="text-[15px] sm:text-[17px] leading-[1.65] text-[var(--ink-muted)] max-w-2xl mb-8">
              {letter.body}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-[14px] font-medium text-[var(--ink)]">{letter.author}</p>
                <p className="text-[12px] text-[var(--ink-dim)] mt-0.5">{letter.authorRole}</p>
              </div>
              <a
                href="/research"
                className="inline-flex items-center gap-1.5 text-[12px] text-[var(--ink-muted)] hover:text-[var(--accent)] transition-colors group"
              >
                Read in research archive
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress indicators */}
      <div className="px-7 sm:px-10 pb-7 flex items-center gap-1.5">
        {LETTERS.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`Letter ${i + 1}`}
            className="h-px flex-1 transition-colors"
            style={{
              background:
                i === idx ? "var(--accent)" : "var(--rule)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
