import { cn } from "@/lib/utils";

interface Stat {
  value: string;
  label: string;
  caveat?: string;
}

interface StatStripProps {
  stats: Stat[];
  className?: string;
}

export function StatStrip({ stats, className }: StatStripProps) {
  return (
    <dl
      className={cn(
        "grid grid-cols-2 sm:grid-cols-4 divide-x divide-[var(--rule)]",
        className,
      )}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className={cn(
            "px-4 py-5 sm:px-6 sm:py-6",
            i % 2 === 0 && "border-r-0 sm:border-r border-[var(--rule)]",
          )}
        >
          <dt className="eyebrow !text-[10px] !text-[var(--ink-dim)] mb-1.5">{s.label}</dt>
          <dd className="num-display text-[24px] sm:text-[28px] text-[var(--ink)] leading-none">
            {s.value}
          </dd>
          {s.caveat && (
            <p className="mt-1.5 text-[11px] text-[var(--ink-dim)] caps">{s.caveat}</p>
          )}
        </div>
      ))}
    </dl>
  );
}
