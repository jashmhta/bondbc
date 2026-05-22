"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  intensity?: number;
  priority?: boolean;
  sizes?: string;
}

export function ParallaxImage({
  src,
  alt,
  className,
  imageClassName,
  intensity = 8,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${intensity}%`, `${intensity}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div className="absolute inset-0 will-change-transform" style={{ y, scale: 1.1 }}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={80}
          sizes={sizes}
          className={`object-cover ${imageClassName ?? ""}`}
        />
      </motion.div>
    </div>
  );
}
