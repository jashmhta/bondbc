"use client";

import { useEffect, useRef } from "react";

interface GoldParticlesProps {
  /** Density coefficient — higher = more particles. 0.6 ≈ 60 particles per 1M px² */
  density?: number;
  /** Particle color override; defaults to the brand accent gold */
  color?: string;
  /** Container class — defaults to absolute fill */
  className?: string;
  /** Connect nearby particles with hairlines — like an institutional graph */
  connect?: boolean;
}

/**
 * GoldParticles — a sparse, slowly-drifting field of gold dots that mimics
 * a high-frequency data desk. Uses Canvas2D for performance (not WebGL —
 * we don't need 3D, and 2D respects DPR cleanly).
 *
 * Particles drift, fade in/out, and lightly connect to neighbours when
 * `connect` is enabled — reads as a market microstructure graph at low fi.
 */
export function GoldParticles({
  density = 0.7,
  color,
  className,
  connect = true,
}: GoldParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Skip on reduced motion
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resolveColor = () => {
      if (color) return color;
      // Use brand accent gold; resolve from CSS var
      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue("--accent").trim();
      return accent || "#d9a05a";
    };
    const accentColor = resolveColor();

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number; // alpha
      ad: number; // alpha delta direction
    };

    let particles: Particle[] = [];

    const resize = () => {
      const { offsetWidth: w, offsetHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      const count = Math.max(
        16,
        Math.min(120, Math.round(((w * h) / 1_000_000) * density * 100)),
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 0.6 + Math.random() * 1.6,
        a: 0.1 + Math.random() * 0.5,
        ad: Math.random() > 0.5 ? 0.003 : -0.003,
      }));
    };

    const tick = () => {
      const { offsetWidth: w, offsetHeight: h } = canvas;
      ctx.clearRect(0, 0, w, h);

      // Draw particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.a += p.ad;
        if (p.a < 0.05 || p.a > 0.7) p.ad *= -1;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.globalAlpha = p.a;
        ctx.fill();
      }

      // Draw connecting hairlines
      if (connect) {
        ctx.globalAlpha = 1;
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 0.4;
        const maxDist = 110;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < maxDist) {
              ctx.globalAlpha = (1 - d / maxDist) * 0.18;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    rafRef.current = requestAnimationFrame(tick);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [density, color, connect]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none ${className ?? "absolute inset-0 w-full h-full"}`}
    />
  );
}
