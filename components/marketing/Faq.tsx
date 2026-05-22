"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItem {
  q: string;
  a: React.ReactNode;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <ul className="rule-t">
      {items.map((item, i) => {
        const open = openIdx === i;
        return (
          <li key={i} className="rule-b">
            <button
              type="button"
              onClick={() => setOpenIdx(open ? null : i)}
              aria-expanded={open}
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
            >
              <span className="text-[clamp(17px,1.6vw,21px)] tracking-[-0.01em] text-[var(--ink)] leading-[1.3] flex-1">
                {item.q}
              </span>
              <span className="mt-1 h-7 w-7 inline-flex items-center justify-center rounded-full bg-[var(--bg-3)] text-[var(--ink-muted)] group-hover:bg-[var(--accent-muted)] group-hover:text-[var(--accent)] transition-colors flex-shrink-0">
                {open ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-[var(--ease-out-expo)]",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-7 pr-12 text-[15px] leading-[1.65] text-[var(--ink-muted)] prose-column space-y-3">
                  {item.a}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
