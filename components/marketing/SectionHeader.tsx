import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="eyebrow text-[var(--accent)] mb-4">{eyebrow}</p>
      )}
      <h2 className="text-[clamp(28px,4vw,48px)] tracking-[-0.025em] leading-[1.05] text-[var(--ink)]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-[17px] leading-[1.55] text-[var(--ink-muted)]">
          {description}
        </p>
      )}
    </header>
  );
}
