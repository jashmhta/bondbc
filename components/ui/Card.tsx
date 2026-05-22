import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Card({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "card-quiet p-6",
          className,
        )}
        {...props}
      />
    );
  },
);

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardHeader({ className, ...props }, ref) {
    return <div ref={ref} className={cn("space-y-1", className)} {...props} />;
  },
);

export const CardTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardTitle({ className, ...props }, ref) {
    return (
      <h3
        ref={ref as React.Ref<HTMLHeadingElement>}
        className={cn("text-[var(--text-lg)] font-medium text-[var(--ink)] tracking-tight", className)}
        {...props}
      />
    );
  },
);

export const CardEyebrow = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardEyebrow({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn("eyebrow", className)}
        {...props}
      />
    );
  },
);

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function CardContent({ className, ...props }, ref) {
    return <div ref={ref} className={cn("text-[15px] leading-[1.55] text-[var(--ink-muted)]", className)} {...props} />;
  },
);
