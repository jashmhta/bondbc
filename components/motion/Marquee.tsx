"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Continuous horizontal marquee — used for press logos / yields ticker. */
export function Marquee({
  children,
  speed = 38,
  pauseOnHover = false,
  className,
  fadeEdges = true,
}: {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
  fadeEdges?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className ?? ""}`}
      style={
        fadeEdges
          ? {
              maskImage:
                "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
            }
          : undefined
      }
    >
      <motion.div
        className="flex gap-12 whitespace-nowrap will-change-transform"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {/* Render twice for seamless loop */}
        <div className="flex gap-12 shrink-0">{children}</div>
        <div className="flex gap-12 shrink-0" aria-hidden>{children}</div>
      </motion.div>
    </div>
  );
}
