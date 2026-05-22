import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-medium leading-none caps",
  {
    variants: {
      variant: {
        default: "bg-[var(--bg-3)] text-[var(--ink-muted)]",
        outline: "border border-[var(--rule-strong)] text-[var(--ink-muted)]",
        accent: "bg-[var(--accent-muted)] text-[var(--accent)]",
        gain: "bg-[oklch(from_var(--gain)_l_c_h_/_0.12)] text-[var(--gain)]",
        loss: "bg-[oklch(from_var(--loss)_l_c_h_/_0.12)] text-[var(--loss)]",
        warn: "bg-[oklch(from_var(--warn)_l_c_h_/_0.12)] text-[var(--warn)]",
        info: "bg-[oklch(from_var(--info)_l_c_h_/_0.12)] text-[var(--info)]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}
