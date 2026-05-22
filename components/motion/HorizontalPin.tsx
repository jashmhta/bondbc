"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * HorizontalPin — pins a section to the viewport while user scrolls vertically,
 * translating the inner track horizontally. Classic Awwwards/agency move.
 */
export function HorizontalPin({
  children,
  className,
  trackClassName,
}: {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
}) {
  const wrapper = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!wrapper.current || !track.current) return;
      const trackEl = track.current;

      const ctx = gsap.context(() => {
        const setup = () => {
          const distance = trackEl.scrollWidth - window.innerWidth;
          if (distance <= 0) return;
          gsap.to(trackEl, {
            x: -distance,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper.current,
              start: "top top",
              end: () => `+=${distance}`,
              scrub: 1,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });
        };
        setup();
      }, wrapper);

      return () => ctx.revert();
    },
    { scope: wrapper },
  );

  return (
    <section ref={wrapper} className={`relative overflow-hidden ${className ?? ""}`}>
      <div
        ref={track}
        className={`flex items-stretch will-change-transform ${trackClassName ?? ""}`}
      >
        {children}
      </div>
    </section>
  );
}
