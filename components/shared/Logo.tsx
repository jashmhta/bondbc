import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Real Binary Bonds logo — sourced from binarybonds.in/logo.png
 * The image already includes the wordmark; we just size it.
 */
export function Logo({
  size = "md",
  href = "/",
  className,
}: {
  size?: "sm" | "md" | "lg";
  href?: string | null;
  className?: string;
}) {
  const dim = size === "sm" ? 32 : size === "lg" ? 56 : 40;

  const img = (
    <Image
      src="/brand/logo.png"
      alt="Binary Bonds"
      width={dim}
      height={dim}
      priority
      className="block"
    />
  );

  const wordmark = (
    <span
      className="font-[family-name:var(--font-fraunces)] text-[18px] tracking-[-0.01em] leading-none text-[var(--ink)] hidden sm:inline"
      style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1' }}
    >
      Binary Bonds
    </span>
  );

  const inner = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {img}
      {wordmark}
    </span>
  );

  if (!href) return inner;
  return (
    <Link href={href} className="inline-flex items-center" aria-label="Binary Bonds — Home">
      {inner}
    </Link>
  );
}
