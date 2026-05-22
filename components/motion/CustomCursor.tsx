"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor — a small dot that follows the mouse, scales up over interactive
 * elements (a, button, [data-cursor-grow]). Disabled on touch devices.
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState<"default" | "grow" | "view">("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 380, damping: 32, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 380, damping: 32, mass: 0.5 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const down = () => setHover((h) => (h === "default" ? h : h));
    const overInteractive = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor='grow']",
      );
      const view = target.closest("[data-cursor='view']");
      setHover(view ? "view" : interactive ? "grow" : "default");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousemove", overInteractive);
    window.addEventListener("mousedown", down);

    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousemove", overInteractive);
      window.removeEventListener("mousedown", down);
      document.documentElement.style.cursor = "";
      document.body.style.cursor = "";
    };
  }, [x, y]);

  if (!enabled) return null;

  const scale = hover === "grow" ? 2.4 : hover === "view" ? 4.5 : 1;
  const ring = hover === "default" ? 0 : 1;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[80] mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/80"
          animate={{
            width: hover === "view" ? 96 : 30,
            height: hover === "view" ? 96 : 30,
            opacity: ring,
          }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[81] mix-blend-difference"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
          animate={{
            width: 6 * scale,
            height: 6 * scale,
            opacity: hover === "view" ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      </motion.div>

      {/* "View" label inside cursor */}
      {hover === "view" && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-[82] mix-blend-difference"
          style={{ x: sx, y: sy }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] tracking-[0.2em] uppercase text-white font-mono"
          >
            View
          </span>
        </motion.div>
      )}
    </>
  );
}
