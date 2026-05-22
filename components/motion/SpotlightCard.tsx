"use client";

import { ReactNode, useRef, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * SpotlightCard — a subtle radial light follows the cursor inside the card.
 * Pure motion-value driven. No re-renders.
 */
export function SpotlightCard({
  children,
  className,
  size = 360,
  intensity = 0.16,
  color,
}: {
  children: ReactNode;
  className?: string;
  size?: number;
  intensity?: number;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const [hover, setHover] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const accent = color ?? "var(--accent)";
  const bg = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, ${accent} 0%, transparent 60%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={cn("group relative", className)}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-500"
        style={{
          background: bg,
          opacity: hover ? intensity : 0,
          mixBlendMode: "screen",
        }}
      />
      {children}
    </div>
  );
}
