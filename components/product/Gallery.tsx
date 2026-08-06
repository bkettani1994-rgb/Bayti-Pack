"use client";

import { useState } from "react";
import Image from "next/image";
import { PackageCheck } from "lucide-react";
import type { Pack } from "@/types";
import { AppIcon } from "@/components/shared/icon-map";
import { cn } from "@/lib/utils";

export default function Gallery({ pack }: { pack: Pack }) {
  const [active, setActive] = useState(0);
  const slides = [
    { label: "Vue d'ensemble", items: pack.contents },
    ...pack.contents.map((item) => ({ label: item.name, items: [item] })),
  ];
  const current = slides[active];

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-xl2 border border-black/5 bg-gradient-to-br from-brand-light via-white to-neutral-50">
        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand/15 blur-2xl" />
        <div className="absolute -bottom-14 -left-10 h-40 w-40 rounded-full bg-brand/10 blur-2xl" />

        {active === 0 && pack.mainImage ? (
          <Image
            src={pack.mainImage}
            alt={pack.name}
            fill
            priority
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover"
          />
        ) : active === 0 ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-white shadow-card sm:h-32 sm:w-32">
              <PackageCheck className="h-16 w-16 text-brand" strokeWidth={1.5} />
            </div>
            <div className="absolute inset-0">
              {pack.contents.slice(0, 4).map((item, i) => {
                const pos = [
                  "left-6 top-6",
                  "right-6 top-14",
                  "left-8 bottom-16",
                  "right-8 bottom-6",
                ][i];
                return (
                  <div
                    key={item.name}
                    className={cn("absolute flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 shadow-soft", pos)}
                  >
                    <AppIcon icon={item.icon} className="h-5 w-5 text-brand-dark" />
                  </div>
                );
              })}
            </div>
          </div>
        ) : current.items[0].image ? (
          <Image
            src={current.items[0].image}
            alt={current.label}
            fill
            sizes="(min-width: 1024px) 500px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white shadow-card">
              <AppIcon icon={current.items[0].icon} className="h-12 w-12 text-brand-dark" />
            </div>
            <p className="text-center text-sm font-medium text-neutral-600">{current.label}</p>
          </div>
        )}
      </div>

      <div className="mt-4 grid grid-cols-6 gap-2 sm:grid-cols-6">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            onClick={() => setActive(i)}
            className={cn(
              "relative flex aspect-square items-center justify-center overflow-hidden rounded-lg border bg-white transition-colors",
              active === i ? "border-brand ring-2 ring-brand/30" : "border-black/10 hover:border-brand/40"
            )}
            aria-label={slide.label}
          >
            {i === 0 && pack.mainImage ? (
              <Image src={pack.mainImage} alt={slide.label} fill sizes="60px" className="object-cover" />
            ) : i === 0 ? (
              <PackageCheck className="h-5 w-5 text-brand" />
            ) : slide.items[0].image ? (
              <Image src={slide.items[0].image} alt={slide.label} fill sizes="60px" className="object-cover" />
            ) : (
              <AppIcon icon={slide.items[0].icon} className="h-5 w-5 text-brand-dark" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
