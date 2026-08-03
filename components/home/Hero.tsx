"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, PackageCheck, Sparkles } from "lucide-react";
import HeroPacksSlider from "@/components/home/HeroPacksSlider";

export default function Hero() {
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

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroPacksSlider />
        </motion.div>
      </div>
    </section>
  );
}
