"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface GhostRevealProps {
  children: string;
  className?: string;
  /** When word-stagger is "char", animate per glyph. Default: "word". */
  by?: "word" | "char";
  /** Total fade duration per token */
  duration?: number;
  /** Time between successive tokens */
  stagger?: number;
  /** Delay before first token */
  delay?: number;
  /** Trigger when this fraction of element is in view */
  amount?: number;
  /** Vertical drift distance, e.g. "0.25em" */
  drift?: string;
  /** Apply once (default) or every time */
  once?: boolean;
}

/**
 * GhostReveal — a poetic reveal where text appears to drift in from the
 * page itself. Each word starts at low opacity + blurred + slightly raised,
 * then settles into place. Designed for hero pull quotes and statement
 * paragraphs where SplitTextReveal feels too mechanical.
 *
 * No GSAP, no DOM mutation — pure Framer Motion variants for stable hydration.
 */
export function GhostReveal({
  children,
  className,
  by = "word",
  duration = 1.1,
  stagger = 0.045,
  delay = 0,
  amount = 0.35,
  drift = "0.5em",
  once = true,
}: GhostRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, amount });

  // Tokenize preserving whitespace so layout is identical to plain text
  const tokens =
    by === "word"
      ? children.split(/(\s+)/)
      : Array.from(children);

  return (
    <span ref={ref} className={cn("inline", className)}>
      {tokens.map((tok, i) => {
        // Preserve whitespace tokens verbatim
        if (/^\s+$/.test(tok)) {
          return <span key={i}>{tok}</span>;
        }
        return (
          <motion.span
            key={i}
            className="inline-block"
            initial={{
              opacity: 0,
              y: drift,
              filter: "blur(8px)",
            }}
            animate={
              inView
                ? {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }
                : {}
            }
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {tok}
          </motion.span>
        );
      })}
    </span>
  );
}
