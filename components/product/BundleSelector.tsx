"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import type { BundleTier } from "@/lib/pricing";
import type { PackItem } from "@/types";
import { AppIcon } from "@/components/shared/icon-map";
import { formatDH, cn } from "@/lib/utils";

export default function BundleSelector({
  tiers,
  contents,
  selected,
  onSelect,
}: {
  tiers: BundleTier[];
  contents: PackItem[];
  selected: number;
  onSelect: (qty: 1 | 2 | 3) => void;
}) {
  return (
    <div className="space-y-3">
      {tiers.map((tier) => {
        const isSelected = tier.qty === selected;
        return (
          <div
            key={tier.qty}
            className={cn(
              "overflow-hidden rounded-xl2 border-2 transition-colors duration-200",
              isSelected ? "border-brand" : "border-black/10"
            )}
          >
            <button
              type="button"
              onClick={() => onSelect(tier.qty)}
              className={cn(
                "flex w-full items-center justify-between gap-4 p-4 text-left transition-colors duration-200",
                isSelected ? "bg-brand text-white" : "bg-white text-ink hover:border-brand/50"
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
                    {formatDH(tier.unitPrice)} / pack
                    {tier.savings > 0 && ` · Économisez ${formatDH(tier.savings)}`}
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

            <AnimatePresence initial={false}>
              {isSelected && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden bg-brand-light/50"
                >
                  <div className="p-4 pt-3">
                    <p className="text-xs font-semibold text-ink">
                      Ce que contient {tier.qty > 1 ? `chaque pack (x${tier.qty})` : "ce pack"}
                    </p>
                    <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                      {contents.map((item) => (
                        <li key={item.name} className="flex items-center gap-2 text-xs text-neutral-600">
                          <AppIcon icon={item.icon} className="h-3.5 w-3.5 flex-shrink-0 text-brand-dark" />
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
