"use client";

import { Check } from "lucide-react";
import type { BundleTier } from "@/lib/pricing";
import { formatDH, cn } from "@/lib/utils";

export default function BundleSelector({
  tiers,
  selected,
  onSelect,
}: {
  tiers: BundleTier[];
  selected: number;
  onSelect: (qty: 1 | 2 | 3) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {tiers.map((tier) => {
        const isSelected = tier.qty === selected;
        return (
          <button
            key={tier.qty}
            type="button"
            onClick={() => onSelect(tier.qty)}
            className={cn(
              "relative flex flex-col items-center rounded-xl2 border-2 p-4 text-center transition-all duration-200",
              isSelected
                ? "border-brand bg-brand text-white shadow-lift"
                : "border-black/10 bg-white text-ink hover:border-brand/50"
            )}
          >
            {tier.badge && (
              <span
                className={cn(
                  "absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold",
                  isSelected ? "bg-ink text-white" : "bg-promo text-white"
                )}
              >
                {tier.badge}
              </span>
            )}

            {isSelected && (
              <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-brand-dark">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
            )}

            <span className="mt-1 text-sm font-semibold">{tier.label}</span>
            <span className={cn("mt-2 text-lg font-bold", isSelected ? "text-white" : "text-brand-dark")}>
              {formatDH(tier.total)}
            </span>
            {tier.qty > 1 && (
              <span className={cn("mt-0.5 text-xs line-through", isSelected ? "text-white/70" : "text-neutral-400")}>
                {formatDH(tier.compareTotal)}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
