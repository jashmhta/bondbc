interface TrustStripProps {
  className?: string;
}

const SIGNALS = [
  { label: "SEBI Registered" },
  { label: "ICCL Settled" },
  { label: "BSE Debt Member" },
  { label: "NSE Debt Member" },
  { label: "CDSL Depository" },
  { label: "Audited Annually" },
];

export function TrustStrip({ className }: TrustStripProps) {
  return (
    <div className={className}>
      <p className="eyebrow text-[var(--ink-dim)] text-center mb-5">Regulated. Settled. Audited.</p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {SIGNALS.map((s) => (
          <span
            key={s.label}
            className="text-[12px] tracking-[0.04em] uppercase text-[var(--ink-muted)]"
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
