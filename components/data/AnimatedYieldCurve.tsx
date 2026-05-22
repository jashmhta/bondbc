"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

interface AnimatedYieldCurveProps {
  height?: number;
  className?: string;
}

/**
 * AnimatedYieldCurve — a stylised G-Sec curve that DRAWS itself as the user
 * scrolls past. Uses SVG stroke-dashoffset driven by scroll progress.
 *
 * Editorial flourish — visual analogue of the curve we trade against every
 * day. Not real-time data; the values are typical mid-yields illustrating
 * the institutional 3M→30Y curve shape.
 */
export function AnimatedYieldCurve({
  height = 240,
  className,
}: AnimatedYieldCurveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center center"],
  });

  // Smooth path through canonical G-Sec points
  const points = useMemo(
    () => [
      { x: 0, y: 220 }, // 3M ≈ 6.55%
      { x: 50, y: 215 }, // 6M
      { x: 100, y: 195 }, // 1Y
      { x: 160, y: 180 }, // 2Y
      { x: 220, y: 170 }, // 3Y
      { x: 320, y: 158 }, // 5Y
      { x: 420, y: 148 }, // 7Y
      { x: 540, y: 132 }, // 10Y
      { x: 660, y: 118 }, // 15Y
      { x: 760, y: 110 }, // 20Y
      { x: 880, y: 100 }, // 30Y
    ],
    [],
  );

  const path = useMemo(() => {
    if (!points.length) return "";
    const d: string[] = [`M ${points[0].x} ${points[0].y}`];
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const cp1x = prev.x + (curr.x - prev.x) * 0.4;
      const cp1y = prev.y;
      const cp2x = curr.x - (curr.x - prev.x) * 0.4;
      const cp2y = curr.y;
      d.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`);
    }
    return d.join(" ");
  }, [points]);

  // Approximate path length for stroke animation
  const pathLength = 1200; // rough; SVG handles 0–1 via pathLength attr
  const drawProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dashOffset = useTransform(drawProgress, [0, 1], [pathLength, 0]);
  const fillOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 0.18]);
  const dotsOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);

  const tenors = ["3M", "1Y", "5Y", "10Y", "20Y", "30Y"];
  const tenorPositions = [0, 100, 320, 540, 760, 880];

  return (
    <div ref={ref} className={`relative w-full ${className ?? ""}`} style={{ height }}>
      <svg
        viewBox="0 0 920 260"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        aria-label="Stylised G-Sec yield curve"
      >
        <defs>
          <linearGradient id="curveFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="curveStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        <g stroke="var(--rule)" strokeWidth="0.4" strokeDasharray="2 4" opacity="0.6">
          {[60, 100, 140, 180, 220].map((y) => (
            <line key={y} x1="0" y1={y} x2="920" y2={y} />
          ))}
        </g>

        {/* Filled area */}
        <motion.path
          d={`${path} L 880 240 L 0 240 Z`}
          fill="url(#curveFill)"
          style={{ opacity: fillOpacity }}
        />

        {/* Drawn curve */}
        <motion.path
          d={path}
          fill="none"
          stroke="url(#curveStroke)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={pathLength}
          strokeDasharray={pathLength}
          style={{ strokeDashoffset: dashOffset }}
        />

        {/* Dots at tenor points */}
        {points.filter((_, i) => [0, 2, 5, 7, 9, 10].includes(i)).map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill="var(--bg)"
            stroke="var(--accent)"
            strokeWidth="2"
            style={{ opacity: dotsOpacity }}
          />
        ))}

        {/* Tenor labels — only at scroll completion */}
        <g
          fontFamily="ui-monospace, monospace"
          fontSize="10"
          fill="var(--ink-dim)"
          letterSpacing="0.1em"
        >
          {tenors.map((t, i) => (
            <motion.text
              key={t}
              x={tenorPositions[i]}
              y="252"
              textAnchor={i === 0 ? "start" : i === tenors.length - 1 ? "end" : "middle"}
              style={{ opacity: dotsOpacity }}
            >
              {t}
            </motion.text>
          ))}
        </g>
      </svg>
    </div>
  );
}
