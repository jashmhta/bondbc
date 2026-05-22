"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

/**
 * BeamCard — animated rotating gold conic-gradient beam around a card border.
 * Pure CSS @property + GSAP rotation. No SVG. Smooth 60fps.
 *
 * Usage:
 *   <BeamCard><div className="p-8">…content</div></BeamCard>
 */
export function BeamCard({
  children,
  className,
  innerClassName,
  beamSpeed = 6,
  beamWidth = "1px",
  beamColor,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  beamSpeed?: number;
  beamWidth?: string;
  beamColor?: string;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        "--beam-angle": "360deg",
        duration: beamSpeed,
        repeat: -1,
        ease: "none",
      });
    },
    { scope: ref },
  );

  const accent = beamColor ?? "var(--accent)";

  return (
    <div
      ref={ref}
      className={cn("relative rounded-xl group", className)}
      style={
        {
          "--beam-angle": "0deg",
          padding: beamWidth,
          background: `conic-gradient(from var(--beam-angle), transparent 0%, ${accent} 12%, ${accent} 18%, transparent 30%)`,
        } as React.CSSProperties
      }
    >
      {glow && (
        <div
          aria-hidden
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[18px] -z-10"
          style={{
            background: `conic-gradient(from var(--beam-angle), transparent 0%, ${accent} 12%, ${accent} 18%, transparent 30%)`,
          }}
        />
      )}
      <div
        className={cn(
          "relative rounded-[calc(var(--radius-xl)-1px)] bg-[var(--surface)] h-full",
          innerClassName,
        )}
      >
        {children}
      </div>
    </div>
  );
}
