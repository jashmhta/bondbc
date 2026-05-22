"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface HeroVideoProps {
  videoSrc: string;
  posterSrc: string;
  /** Optional light-mode poster — when set, swaps in via dark:hidden / dark:block */
  posterSrcLight?: string;
  posterAlt: string;
  className?: string;
  /** Tune how dark the bottom gradient gets. 0 = transparent, 1 = solid */
  bottomFade?: number;
  /** Enable the side gradient on desktop for type contrast on the left */
  sideFade?: boolean;
}

/**
 * HeroVideo — cinematic full-bleed visual layer.
 *
 * Image-first strategy: poster paints instantly at full opacity, video
 * gracefully overlays once loaded. Overlays are tuned LIGHT so the imagery
 * stays the dominant material — a heavy gradient stack was killing the
 * earlier hero.
 */
export function HeroVideo({
  videoSrc,
  posterSrc,
  posterSrcLight,
  posterAlt,
  className,
  bottomFade = 0.55,
  sideFade = true,
}: HeroVideoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <motion.div
      ref={ref}
      className={`absolute inset-0 -z-10 overflow-hidden ${className ?? ""}`}
      style={{ opacity }}
    >
      {/* Image plate — instant paint, no overlay over it directly */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        {/* Dark-theme poster (always present; hidden in light if a light variant is provided) */}
        <Image
          src={posterSrc}
          alt={posterAlt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className={`object-cover ${posterSrcLight ? "dark:block hidden" : ""}`}
        />
        {/* Light-theme alternative — only renders when explicitly provided */}
        {posterSrcLight && (
          <Image
            src={posterSrcLight}
            alt={posterAlt}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover dark:hidden"
          />
        )}
      </motion.div>

      {/* Video — fades in over poster */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover opacity-95"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={posterSrc}
        style={{ y, scale }}
      >
        <source src={videoSrc} type="video/mp4" />
      </motion.video>

      {/* Bottom gradient — strong in dark mode for type contrast, softer in light */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
        style={{
          background: `linear-gradient(to top, var(--bg) 0%, color-mix(in oklab, var(--bg), transparent ${(1 - bottomFade) * 100}%) 60%, transparent 100%)`,
        }}
      />

      {/* Light-mode parchment haze — adds warmth without obscuring the image */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none dark:hidden mix-blend-multiply"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--bg), transparent 70%) 0%, color-mix(in oklab, var(--bg), transparent 85%) 50%, var(--bg) 100%)",
        }}
      />

      {/* Optional left-side darken for headline contrast on desktop */}
      {sideFade && (
        <div
          className="absolute inset-y-0 left-0 right-1/2 hidden lg:block pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, color-mix(in oklab, var(--bg), transparent 55%) 0%, transparent 100%)",
          }}
        />
      )}

      {/* Vignette — only in dark mode, light mode wants clean edges */}
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse 110% 90% at 50% 30%, transparent 0%, transparent 60%, color-mix(in oklab, var(--bg), transparent 70%) 100%)",
        }}
      />

      {/* Faint film grain for warmth */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </motion.div>
  );
}
