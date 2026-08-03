"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { packs } from "@/data/packs";
import PackVisual from "@/components/shared/PackVisual";

const AUTOPLAY_DELAY = 4500;

const variants = {
  enter: (direction: number) => ({ opacity: 0, x: direction > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0 },
  exit: (direction: number) => ({ opacity: 0, x: direction > 0 ? -40 : 40 }),
};

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
      className="relative mx-auto w-full max-w-md sm:max-w-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden rounded-xl2 border border-black/5 bg-white p-4 shadow-lift sm:p-5">
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
              if (info.offset.x < -60) next();
              else if (info.offset.x > 60) prev();
            }}
          >
            <PackVisual pack={pack} />
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        aria-label="Pack précédent"
        onClick={prev}
        className="absolute left-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 p-2 shadow-card transition-colors hover:bg-brand hover:text-white"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        aria-label="Pack suivant"
        onClick={next}
        className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 p-2 shadow-card transition-colors hover:bg-brand hover:text-white"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      <div className="mt-4 flex items-center justify-center gap-2">
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
