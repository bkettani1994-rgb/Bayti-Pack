"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, PackageCheck, Sparkles } from "lucide-react";
import { packs } from "@/data/packs";
import { formatDH } from "@/lib/utils";

export default function Hero() {
  const showcase = packs.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-light/60 to-white">
      <div className="container-content grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-brand-dark shadow-soft"
          >
            <Sparkles className="h-4 w-4" />
            Livraison partout au Maroc
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            Tous les indispensables de votre cuisine, réunis dans des packs économiques.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-neutral-500"
          >
            Gagnez du temps, économisez de l&apos;argent et recevez tout chez vous.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/packs" className="btn-secondary">
              Découvrir les packs
            </Link>
            <Link href="/packs" className="btn-primary">
              Commander maintenant
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-sm text-neutral-500"
          >
            <span className="flex items-center gap-2">
              <PackageCheck className="h-5 w-5 text-brand-dark" /> 5 packs disponibles
            </span>
            <span className="flex items-center gap-2">
              <ShoppingBag className="h-5 w-5 text-brand-dark" /> Paiement à la livraison
            </span>
          </motion.div>
        </div>

        <div className="relative mx-auto grid w-full max-w-md grid-cols-2 gap-4 sm:max-w-lg">
          {showcase.map((pack, i) => (
            <motion.div
              key={pack.slug}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={
                i === 2
                  ? "col-span-2 rounded-xl2 border border-black/5 bg-white p-4 shadow-lift"
                  : "rounded-xl2 border border-black/5 bg-white p-4 shadow-card"
              }
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-brand-light to-white p-4">
                <div className="flex h-full items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-soft">
                    <PackageCheck className="h-7 w-7 text-brand" strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              <p className="mt-3 truncate text-sm font-semibold text-ink">{pack.shortName}</p>
              <p className="text-sm font-bold text-brand-dark">{formatDH(pack.price)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
