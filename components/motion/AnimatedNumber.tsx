"use client";

import { useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  /** Add Indian numbering (lakh/crore commas) */
  indianFormat?: boolean;
}

const inrFormatter = (decimals: number) =>
  new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

export function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
  indianFormat = false,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const [text, setText] = useState(`${prefix}0${decimals > 0 ? "." + "0".repeat(decimals) : ""}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const fmt = indianFormat ? inrFormatter(decimals) : null;
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        const display = fmt ? fmt.format(v) : v.toFixed(decimals);
        setText(`${prefix}${display}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [inView, value, duration, decimals, prefix, suffix, indianFormat, motionValue]);

  return <span ref={ref} className={className}>{text}</span>;
}
