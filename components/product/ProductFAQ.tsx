"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import Reveal from "@/components/shared/Reveal";

export default function ProductFAQ({ faq }: { faq: Dictionary["product"]["faq"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="container-content py-14 sm:py-16">
      <Reveal>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{faq.heading}</h2>
      </Reveal>

      <div className="mt-8 divide-y divide-black/5 rounded-xl2 border border-black/5">
        {faq.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-ink">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-neutral-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-neutral-500">{item.answer}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
