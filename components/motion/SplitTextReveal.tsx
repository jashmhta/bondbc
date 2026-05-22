"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * SplitTextReveal — splits text into words (and optionally chars) and reveals
 * them on scroll with a staggered translate-y animation. ScrollTrigger-driven.
 */
export function SplitTextReveal({
  children,
  className,
  by = "word",
  stagger = 0.025,
  duration = 0.8,
  yOffset = "1.1em",
  start = "top 85%",
}: {
  children: string;
  className?: string;
  by?: "word" | "char";
  stagger?: number;
  duration?: number;
  yOffset?: string;
  start?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = ref.current.querySelectorAll("[data-split]");
      gsap.set(items, { yPercent: 110, opacity: 0 });
      gsap.to(items, {
        yPercent: 0,
        opacity: 1,
        duration,
        stagger,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start, once: true },
      });
    },
    { scope: ref },
  );

  const tokens =
    by === "word"
      ? children.split(/(\s+)/)
      : Array.from(children);

  return (
    <span ref={ref} className={cn("inline-block", className)}>
      {tokens.map((tok, i) => {
        if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>;
        return (
          <span key={i} className="inline-block overflow-hidden align-baseline">
            <span data-split className="inline-block will-change-transform">
              {tok}
            </span>
          </span>
        );
      })}
    </span>
  );
}
