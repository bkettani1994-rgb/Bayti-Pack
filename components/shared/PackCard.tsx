"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Pack } from "@/types";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PackVisual from "@/components/shared/PackVisual";
import { formatDH } from "@/lib/utils";
import { localizedHref } from "@/lib/i18n";

export default function PackCard({
  pack,
  locale,
  dict,
  ctaLabel,
  showBadge = true,
}: {
  pack: Pack;
  locale: Locale;
  dict: Dictionary;
  ctaLabel?: string;
  showBadge?: boolean;
}) {
  const href = localizedHref(`/packs/${pack.slug}`, locale);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-black/5 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <Link href={href}>
        <PackVisual pack={pack} className="rounded-none border-0" showBadge={showBadge} bestSellerLabel={dict.product.bestSeller} />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-ink sm:text-lg">{pack.name}</h3>
        <p className="mt-1 text-xs text-neutral-500 sm:text-sm">
          {pack.itemsCount} {dict.product.itemsIncludedSuffix}
        </p>

        <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-base font-bold text-brand-dark sm:text-lg">{formatDH(pack.price)}</span>
          <span className="text-xs text-neutral-400 line-through">{formatDH(pack.compareAtPrice)}</span>
        </div>

        <Link
          href={href}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-brand"
        >
          {ctaLabel ?? dict.product.viewPack}
          <ArrowRight className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
