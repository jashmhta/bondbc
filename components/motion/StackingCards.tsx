"use client";

import { ReactNode, useRef, Children, isValidElement, cloneElement } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * StackingCards — children stack on top of each other as the user scrolls.
 * Each card pins, the next one scrolls over the top with a slight scale-down
 * applied to the previous card. Classic "deck" pattern.
 */
export function StackingCards({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const cards = ref.current.querySelectorAll("[data-stack-card]");
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;
        gsap.to(card, {
          scale: 0.94,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top top+=80",
            endTrigger: cards[i + 1],
            end: "top top+=120",
            scrub: 1,
          },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        const props = child.props as { className?: string; style?: React.CSSProperties };
        return cloneElement(child as React.ReactElement<{ className?: string; style?: React.CSSProperties; "data-stack-card"?: boolean }>, {
          "data-stack-card": true,
          className: `sticky top-24 ${props.className ?? ""}`,
          style: { ...(props.style ?? {}), zIndex: 10 + i },
        });
      })}
    </div>
  );
}
