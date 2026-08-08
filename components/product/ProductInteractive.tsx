"use client";

import { useRef, useState } from "react";
import type { Pack } from "@/types";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { computeBundleTiers } from "@/lib/pricing";
import { formatDH } from "@/lib/utils";
import Gallery from "@/components/product/Gallery";
import OrderForm from "@/components/product/OrderForm";

export default function ProductInteractive({ pack, locale, dict }: { pack: Pack; locale: Locale; dict: Dictionary }) {
  const [qty, setQty] = useState<1 | 2 | 3>(1);
  const tiers = computeBundleTiers(pack.price, locale);
  const selectedTier = tiers[qty - 1];
  const formRef = useRef<HTMLDivElement>(null);
  const discountPercent = Math.round((1 - pack.price / pack.compareAtPrice) * 100);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <Gallery pack={pack} overviewLabel={dict.product.overview} />

        <div>
          {pack.featured && (
            <span className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
              ⭐ {dict.product.bestSeller}
            </span>
          )}
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{pack.name}</h1>
          <p className="mt-2 text-neutral-500">{pack.tagline}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="text-3xl font-bold text-brand-dark">{formatDH(pack.price)}</span>
            <span className="text-lg text-neutral-400 line-through">{formatDH(pack.compareAtPrice)}</span>
            <span className="rounded-full bg-promo px-3 py-1 text-xs font-semibold text-white">
              -{discountPercent}%
            </span>
          </div>

          <p className="mt-5 leading-relaxed text-neutral-600">{pack.description}</p>

          <button onClick={scrollToForm} className="btn-primary mt-8 w-full text-lg">
            {dict.product.orderNowPrefix}{formatDH(selectedTier.total)}
          </button>
        </div>
      </div>

      <div ref={formRef} className="mx-auto mt-16 max-w-xl scroll-mt-24">
        <OrderForm pack={pack} locale={locale} dict={dict} qty={qty} setQty={setQty} />
      </div>
    </>
  );
}
