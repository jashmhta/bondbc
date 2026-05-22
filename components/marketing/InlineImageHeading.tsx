"use client";

import Image from "next/image";
import type { ReactNode } from "react";

/**
 * Embed a small image-pill INSIDE a massive heading. This is the
 * "Inline Typography Image" pattern from premium editorial sites —
 * tiny rounded photos sitting flush in the type rivulet for a
 * striking visual rhythm.
 */
interface InlinePillProps {
  src: string;
  alt: string;
  /** Aspect ratio class — defaults to wide pill (16/9-ish) */
  className?: string;
  /** Width relative to text — small/medium/large */
  size?: "sm" | "md" | "lg";
  /** Optional rotation in degrees, e.g. -3 for editorial tilt */
  tilt?: number;
}

export function InlinePill({
  src,
  alt,
  className,
  size = "md",
  tilt = 0,
}: InlinePillProps) {
  const dim = {
    sm: "h-[0.8em] w-[1.6em]",
    md: "h-[0.7em] w-[1.5em]",
    lg: "h-[0.7em] w-[1.7em]",
  }[size];

  return (
    <span
      className={`relative inline-block align-middle overflow-hidden rounded-[0.35em] mx-[0.12em] shadow-[var(--shadow-md)] ${dim} ${className ?? ""}`}
      style={{
        verticalAlign: "-0.06em",
        transform: tilt ? `rotate(${tilt}deg)` : undefined,
      }}
      aria-hidden
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="120px"
        className="object-cover"
      />
    </span>
  );
}

/**
 * InlineMarker — small decorative inline element (dot, line, arrow)
 * that sits inside a heading at type-baseline.
 */
interface InlineMarkerProps {
  variant?: "dot" | "arrow" | "line" | "ring";
  className?: string;
  children?: ReactNode;
}

export function InlineMarker({
  variant = "dot",
  className,
  children,
}: InlineMarkerProps) {
  if (variant === "dot") {
    return (
      <span
        className={`inline-block align-middle h-[0.18em] w-[0.18em] rounded-full bg-[var(--accent)] mx-[0.18em] ${className ?? ""}`}
        style={{ verticalAlign: "0.18em" }}
      />
    );
  }
  if (variant === "ring") {
    return (
      <span
        className={`inline-block align-middle h-[0.5em] w-[0.5em] rounded-full border-[0.06em] border-[var(--accent)] mx-[0.1em] ${className ?? ""}`}
        style={{ verticalAlign: "0" }}
      />
    );
  }
  if (variant === "line") {
    return (
      <span
        className={`inline-block align-middle h-[0.04em] w-[1em] bg-[var(--accent)] mx-[0.15em] ${className ?? ""}`}
        style={{ verticalAlign: "0.25em" }}
      />
    );
  }
  return (
    <span
      className={`inline-flex items-center justify-center align-middle h-[0.7em] w-[1em] rounded-full bg-[var(--accent)] text-[var(--accent-fg)] text-[0.4em] mx-[0.1em] ${className ?? ""}`}
      style={{ verticalAlign: "0" }}
    >
      {children ?? "→"}
    </span>
  );
}
