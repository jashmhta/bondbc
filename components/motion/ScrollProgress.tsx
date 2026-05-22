"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Top-of-page scroll progress bar — gold accent. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left bg-[var(--accent)]"
      style={{ scaleX }}
    />
  );
}
