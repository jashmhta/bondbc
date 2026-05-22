"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * PageLoader — a brief brand reveal on first visit. Slides up and out.
 *
 * SSR-safe: starts hidden, only ever shows on the FIRST visit of a session
 * AND only on capable devices that aren't reduced-motion. Critically, the
 * initial render emits NOTHING — so if the JS bundle stalls on a slow phone,
 * the page is still fully visible behind it (no white-blank trap).
 */
export function PageLoader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("bb-loaded");
    if (reduced || seen) return;

    setShow(true);
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("bb-loaded", "1");
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.7, 0, 0.84, 0] }}
          className="fixed inset-0 z-[100] bg-[var(--bg)] flex items-center justify-center pointer-events-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(36px,7vw,120px)] tracking-[-0.04em] leading-none"
            style={{ fontFamily: "var(--font-fraunces)", fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1' }}
          >
            Binary{" "}
            <em
              className="text-[var(--accent)]"
              style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}
            >
              Bonds.
            </em>
          </motion.span>
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[16%] left-[10%] right-[10%] h-px origin-left bg-[var(--accent)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
