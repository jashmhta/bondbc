import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-1.5",
    "font-medium",
    "rounded-md",
    "transition-[background,color,opacity,box-shadow] duration-150",
    "disabled:opacity-50 disabled:pointer-events-none",
    "focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--ink)] text-[var(--ink-inverse)] hover:opacity-90",
        accent:
          "bg-[var(--accent)] text-[var(--accent-fg)] hover:bg-[var(--accent-strong)]",
        outline:
          "bg-transparent text-[var(--ink)] border border-[var(--rule-strong)] hover:bg-[var(--bg-2)] hover:border-[var(--ink-dim)]",
        ghost:
          "bg-transparent text-[var(--ink-muted)] hover:text-[var(--ink)] hover:bg-[var(--bg-2)]",
        link: "bg-transparent text-[var(--ink)] underline underline-offset-4 decoration-[var(--rule-strong)] hover:decoration-[var(--accent)] !rounded-none px-0",
      },
      size: {
        sm: "h-8 px-3 text-[13px]",
        md: "h-10 px-4 text-[14px]",
        lg: "h-12 px-6 text-[15px]",
        xl: "h-14 px-8 text-[16px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant, size, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

export { buttonVariants };
