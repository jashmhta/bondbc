import Image from "next/image";
import { cn } from "@/lib/utils";

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: React.ReactNode;
  credit?: string;
  aspectRatio?: "16/9" | "4/5" | "1/1" | "3/4" | "21/9" | "5/4";
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const RATIO_TW: Record<NonNullable<EditorialImageProps["aspectRatio"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
  "5/4": "aspect-[5/4]",
};

export function EditorialImage({
  src,
  alt,
  caption,
  credit,
  aspectRatio = "4/5",
  className,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: EditorialImageProps) {
  return (
    <figure className={cn("group", className)}>
      <div className={cn("relative overflow-hidden rounded-lg bg-[var(--bg-3)]", RATIO_TW[aspectRatio])}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          quality={82}
          sizes={sizes}
          className="object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.04]"
        />
        {credit && (
          <span className="absolute bottom-2 right-2 text-[10px] text-white/70 caps tracking-wide bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded">
            {credit}
          </span>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 text-[12px] text-[var(--ink-muted)] leading-[1.5]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
