"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, PackageCheck } from "lucide-react";
import { packs } from "@/data/packs";
import { AppIcon } from "@/components/shared/icon-map";
import { cn } from "@/lib/utils";

const AUTOPLAY_DELAY = 4500;

const variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -60 : 60 }),
};

const chipPositions = [
  "left-6 top-6 sm:left-10 sm:top-10",
  "right-6 top-10 sm:right-10 sm:top-16",
  "left-10 bottom-8 sm:left-16 sm:bottom-12",
  "right-10 bottom-6 sm:right-16 sm:bottom-10",
];

export default function HeroPacksSlider() {
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

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-brand-light via-white to-neutral-50 sm:aspect-[16/9] lg:aspect-[21/9]">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

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
            className="absolute inset-0"
          >
            {pack.heroImage ? (
              <Image
                src={pack.heroImage}
                alt={pack.name}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-card sm:h-28 sm:w-28">
                    <PackageCheck className="h-10 w-10 text-brand sm:h-14 sm:w-14" strokeWidth={1.5} />
                  </div>
                </div>

                {pack.contents.slice(0, 4).map((item, i) => (
                  <div
                    key={item.name}
                    className={cn(
                      "absolute flex items-center gap-1.5 rounded-xl bg-white/95 px-2.5 py-1.5 shadow-soft",
                      chipPositions[i]
                    )}
                  >
                    <AppIcon icon={item.icon} className="h-4 w-4 text-brand-dark" />
                  </div>
                ))}
              </>
            )}

            {pack.featured && (
              <span className="absolute left-6 top-6 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white sm:left-10 sm:top-10">
                ⭐ Best-seller
              </span>
            )}
          </motion.div>
        </AnimatePresence>

        <button
          aria-label="Pack précédent"
          onClick={prev}
          className="absolute left-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 p-2 shadow-card transition-colors hover:bg-brand hover:text-white sm:left-6"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          aria-label="Pack suivant"
          onClick={next}
          className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 p-2 shadow-card transition-colors hover:bg-brand hover:text-white sm:right-6"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 py-5">
        {packs.map((p, i) => (
          <button
            key={p.slug}
            aria-label={`Aller au pack ${p.name}`}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-brand" : "w-2 bg-neutral-300 hover:bg-neutral-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
