"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const defaults: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function MotionSection({
  children,
  className,
  delay = 0,
  duration = 0.65,
  yOffset = 24,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount, margin: "-50px" }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger reveal — wrap multiple children, each appears with a small delay */
export function MotionStagger({
  children,
  className,
  delayChildren = 0.1,
  staggerChildren = 0.08,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
  yOffset = 20,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export { defaults as motionDefaults };
