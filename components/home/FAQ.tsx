"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const faqs = [
  {
    question: "Comment passer une commande ?",
    answer: "Choisissez votre pack, sélectionnez la quantité souhaitée puis remplissez le formulaire de commande avec vos coordonnées. Aucun compte n'est nécessaire.",
  },
  {
    question: "Comment se fait le paiement ?",
    answer: "Le paiement se fait à la livraison (cash à la réception de votre colis), partout au Maroc.",
  },
  {
    question: "Quel est le délai de livraison ?",
    answer: "Vos packs sont généralement livrés sous 2 à 5 jours ouvrables selon votre ville.",
  },
  {
    question: "Puis-je commander plusieurs packs à la fois ?",
    answer: "Oui, choisissez directement l'offre x2 ou x3 sur le formulaire de commande pour bénéficier d'un tarif dégressif.",
  },
  {
    question: "Les produits sont-ils de qualité ?",
    answer: "Tous nos produits sont sélectionnés pour leur résistance et leur usage quotidien intensif, avec un excellent rapport qualité-prix.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-content max-w-3xl">
        <Reveal className="text-center">
          <h2 className="section-title">Questions fréquentes</h2>
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
