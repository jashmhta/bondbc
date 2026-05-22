"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface Frame {
  image: string;
  imageAlt: string;
  eyebrow: string;
  headline: string;
  body: string;
}

interface ImmersiveChapterProps {
  frames: Frame[];
  /** Section header */
  chapter: string;
  /** Section title to anchor the experience */
  title: string;
}

/**
 * ImmersiveChapter — a cinematic narrative chapter where the imagery
 * morphs as the viewer scrolls through. Built on Framer Motion's scroll
 * progress (no GSAP-pin needed because Lenis gives us silky scroll
 * already).
 *
 * Each frame becomes the active card based on scroll progress through
 * the section. The active frame's image takes the full visual stage
 * while text columns track on the side.
 */
export function ImmersiveChapter({ frames, chapter, title }: ImmersiveChapterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      className="relative bg-[var(--bg)]"
      style={{ height: `${Math.max(180, frames.length * 90)}vh` }}
    >
      {/* Sticky stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Header rail */}
        <div className="absolute top-8 sm:top-12 left-6 sm:left-12 z-30 flex items-center gap-3">
          <span className="h-px w-8 bg-[var(--accent)]" />
          <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--accent)]">
            {chapter}
          </span>
        </div>

        {/* Title vertical at the right edge */}
        <div className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-6 z-30 hidden md:flex">
          <span
            className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--ink-dim)] [writing-mode:vertical-rl]"
          >
            {title}
          </span>
        </div>

        {/* Frames stack — each one fades in as its segment becomes active */}
        {frames.map((f, i) => {
          const start = i / frames.length;
          const end = (i + 1) / frames.length;
          const mid = (start + end) / 2;
          // Use frames stack — each frame takes a slice of progress
          return (
            <Frame
              key={i}
              frame={f}
              index={i}
              total={frames.length}
              progress={scrollYProgress}
              start={start}
              mid={mid}
              end={end}
            />
          );
        })}

        {/* Frame index indicator — bottom-center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
          {frames.map((_, i) => (
            <FrameTick
              key={i}
              progress={scrollYProgress}
              start={i / frames.length}
              end={(i + 1) / frames.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Frame({
  frame,
  index,
  total,
  progress,
  start,
  mid,
  end,
}: {
  frame: Frame;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  mid: number;
  end: number;
}) {
  const opacity = useTransform(
    progress,
    [start - 0.04, start, end, end + 0.04],
    [0, 1, 1, 0],
  );
  const scale = useTransform(progress, [start, mid, end], [1.08, 1, 1.04]);

  return (
    <motion.div
      className="absolute inset-0 will-change-[opacity,transform]"
      style={{ opacity }}
    >
      {/* Image stage */}
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={frame.image}
          alt={frame.imageAlt}
          fill
          sizes="100vw"
          quality={90}
          priority={index === 0}
          className="object-cover"
        />
      </motion.div>

      {/* Bottom-left readable surface */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 sm:px-12 pb-16 sm:pb-24">
        <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-white/70 mb-3">
          {frame.eyebrow} · {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
        <h3
          className="text-white max-w-3xl text-[clamp(36px,6vw,80px)] leading-[1.0] tracking-[-0.025em] mb-5"
          style={{
            fontFamily: "var(--font-fraunces)",
            fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
          }}
        >
          {frame.headline}
        </h3>
        <p className="text-white/85 max-w-xl text-[15px] sm:text-[17px] leading-[1.55]">
          {frame.body}
        </p>
      </div>
    </motion.div>
  );
}

function FrameTick({
  progress,
  start,
  end,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const width = useTransform(progress, [start, end], ["0%", "100%"]);
  return (
    <span className="relative h-px w-10 sm:w-14 bg-white/25 overflow-hidden">
      <motion.span
        className="absolute inset-y-0 left-0 bg-[var(--accent)]"
        style={{ width }}
      />
    </span>
  );
}
