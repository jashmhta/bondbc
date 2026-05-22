import Image from "next/image";

interface PullQuoteProps {
  quote: React.ReactNode;
  attribution?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageCredit?: string;
  align?: "left" | "center";
}

export function PullQuote({
  quote,
  attribution,
  imageSrc,
  imageAlt,
  imageCredit,
  align = "left",
}: PullQuoteProps) {
  return (
    <section className="relative">
      {imageSrc && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={imageSrc}
            alt={imageAlt ?? ""}
            fill
            sizes="100vw"
            className="object-cover opacity-25 dark:opacity-30"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)]/60 via-[var(--bg)]/85 to-[var(--bg)]" />
        </div>
      )}
      <div className="container-wide py-32 sm:py-44 relative">
        <div
          className={`max-w-5xl ${align === "center" ? "mx-auto text-center" : ""}`}
        >
          <span
            aria-hidden
            className="inline-block text-[clamp(80px,12vw,180px)] leading-[0.6] text-[var(--accent)]/60 font-[family-name:var(--font-instrument-serif)]"
          >
            “
          </span>
          <blockquote
            className="relative -mt-8 sm:-mt-12 text-[clamp(28px,4.5vw,64px)] leading-[1.05] tracking-[-0.025em] text-[var(--ink)]"
            style={{ fontFamily: "var(--font-instrument-serif)" }}
          >
            {quote}
          </blockquote>
          {attribution && (
            <p
              className={`mt-10 text-[13px] tracking-[0.16em] uppercase text-[var(--ink-dim)] ${align === "center" ? "" : ""}`}
            >
              — {attribution}
            </p>
          )}
        </div>
        {imageCredit && (
          <p className="absolute bottom-3 right-4 text-[10px] text-[var(--ink-dim)] caps">
            {imageCredit}
          </p>
        )}
      </div>
    </section>
  );
}
