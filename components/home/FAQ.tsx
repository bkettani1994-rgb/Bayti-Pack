"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import Reveal from "@/components/shared/Reveal";

export default function FAQ({ dict }: { dict: Dictionary }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = dict.home.faq.items;

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-content max-w-3xl">
        <Reveal className="text-center">
          <h2 className="section-title">{dict.home.faq.heading}</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-black/5 rounded-xl2 border border-black/5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-ink">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm leading-relaxed text-neutral-500">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
