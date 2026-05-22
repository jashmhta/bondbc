"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/** Magnetic hover — element subtly follows the cursor inside its bounding box. */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
  innerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 240, damping: 18, mass: 0.6 });

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      <motion.div className={innerClassName} style={{ x: sx, y: sy }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
