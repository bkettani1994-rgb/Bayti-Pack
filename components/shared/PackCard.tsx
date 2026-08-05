"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Pack } from "@/types";
import PackVisual from "@/components/shared/PackVisual";
import { formatDH } from "@/lib/utils";

export default function PackCard({ pack, ctaLabel = "Voir le pack" }: { pack: Pack; ctaLabel?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group flex flex-col overflow-hidden rounded-xl2 border border-black/5 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
    >
      <Link href={`/packs/${pack.slug}`} className="p-4 pb-0">
        <PackVisual pack={pack} />
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-ink">{pack.name}</h3>
        <p className="mt-1 text-sm text-neutral-500">{pack.itemsCount} produits inclus</p>

        <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
          <span className="text-xl font-bold text-brand-dark sm:text-2xl">{formatDH(pack.price)}</span>
          <span className="text-xs text-neutral-400 line-through sm:text-sm">{formatDH(pack.compareAtPrice)}</span>
        </div>

        <Link
          href={`/packs/${pack.slug}`}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 group-hover:bg-brand"
        >
          {ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
