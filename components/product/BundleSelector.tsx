"use client";

import { Check } from "lucide-react";
import type { BundleTier } from "@/lib/pricing";
import { formatDH, cn } from "@/lib/utils";

export default function BundleSelector({
  tiers,
  selected,
  onSelect,
  perPackLabel,
  saveLabel,
}: {
  tiers: BundleTier[];
  selected: number;
  onSelect: (qty: 1 | 2 | 3) => void;
  perPackLabel: string;
  saveLabel: string;
}) {
  return (
    <div className="space-y-3">
      {tiers.map((tier) => {
        const isSelected = tier.qty === selected;
        return (
          <button
            key={tier.qty}
            type="button"
            onClick={() => onSelect(tier.qty)}
            className={cn(
              "flex w-full items-center justify-between gap-4 rounded-xl2 border-2 p-4 text-left transition-all duration-200",
              isSelected
                ? "border-brand bg-brand text-white shadow-lift"
                : "border-black/10 bg-white text-ink hover:border-brand/50"
            )}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border-2",
                  isSelected ? "border-white bg-white text-brand-dark" : "border-neutral-300"
                )}
              >
                {isSelected && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold">{tier.label}</span>
                  {tier.badge && (
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[10px] font-semibold",
                        isSelected ? "bg-ink text-white" : "bg-promo text-white"
                      )}
                    >
                      {tier.badge}
                    </span>
                  )}
                </div>
                <p className={cn("mt-0.5 text-xs", isSelected ? "text-white/80" : "text-neutral-500")}>
                  {formatDH(tier.unitPrice)} {perPackLabel}
                  {tier.savings > 0 && ` · ${saveLabel} ${formatDH(tier.savings)}`}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 text-right">
              <span className="block text-lg font-bold">{formatDH(tier.total)}</span>
              {tier.qty > 1 && (
                <span className={cn("text-xs line-through", isSelected ? "text-white/70" : "text-neutral-400")}>
                  {formatDH(tier.compareTotal)}
                </span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
