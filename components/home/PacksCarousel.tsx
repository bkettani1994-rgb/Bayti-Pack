"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { packs } from "@/data/packs";
import PackVisual from "@/components/shared/PackVisual";
import Reveal from "@/components/shared/Reveal";
import { formatDH } from "@/lib/utils";

const AUTOPLAY_DELAY = 5000;

const variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -60 : 60 }),
};

export default function PacksCarousel() {
  const [[index, direction], setSlide] = useState([0, 0]);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const pack = packs[index];

  const goTo = useCallback((newIndex: number, dir: number) => {
    const wrapped = (newIndex + packs.length) % packs.length;
    setSlide([wrapped, dir]);
  }, []);

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, AUTOPLAY_DELAY);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, paused]);

  const discountPercent = Math.round((1 - pack.price / pack.compareAtPrice) * 100);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Nos Packs</h2>
          <p className="section-subtitle">5 packs pensés pour simplifier votre quotidien.</p>
        </Reveal>

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-xl2 border border-black/5 bg-neutral-50 p-6 sm:p-10">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={pack.slug}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -80) next();
                  else if (info.offset.x > 80) prev();
                }}
                className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <PackVisual pack={pack} className="mx-auto max-w-sm" />

                <div>
                  {pack.featured && (
                    <span className="inline-block rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
                      ⭐ Best-seller
                    </span>
                  )}
                  <h3 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">{pack.name}</h3>
                  <p className="mt-2 text-neutral-500">{pack.tagline}</p>
                  <p className="mt-1 text-sm text-neutral-400">{pack.itemsCount} produits inclus</p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="text-3xl font-bold text-brand-dark">{formatDH(pack.price)}</span>
                    <span className="text-lg text-neutral-400 line-through">{formatDH(pack.compareAtPrice)}</span>
                    <span className="rounded-full bg-promo px-3 py-1 text-xs font-semibold text-white">
                      -{discountPercent}%
                    </span>
                  </div>

                  <Link href={`/packs/${pack.slug}`} className="btn-primary mt-6">
                    Voir le pack
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            aria-label="Pack précédent"
            onClick={prev}
            className="absolute left-0 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white p-3 shadow-card transition-colors hover:bg-brand hover:text-white sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label="Pack suivant"
            onClick={next}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-black/10 bg-white p-3 shadow-card transition-colors hover:bg-brand hover:text-white sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {packs.map((p, i) => (
            <button
              key={p.slug}
              aria-label={`Aller au pack ${p.name}`}
              onClick={() => goTo(i, i > index ? 1 : -1)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-brand" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/packs" className="btn-secondary">
            Voir tous les packs
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
