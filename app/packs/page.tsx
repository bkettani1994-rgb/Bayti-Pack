import type { Metadata } from "next";
import { visiblePacks } from "@/data/packs";
import PackCard from "@/components/shared/PackCard";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Catalogue des packs cuisine",
  description:
    "Découvrez le Pack Cuisine Essentielle : papier aluminium, film alimentaire, papier cuisson, papier absorbant et sacs de congélation. Dès 99 DH, livraison rapide.",
  alternates: { canonical: "/packs" },
};

export default function CataloguePage() {
  const isSingle = visiblePacks.length === 1;

  return (
    <section className="py-14 sm:py-20">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="section-title">Nos Packs</h1>
          <p className="section-subtitle">
            {isSingle
              ? "Le pack indispensable pour couvrir l'essentiel de votre cuisine."
              : "Des packs pensés pour couvrir tous les besoins essentiels de votre cuisine."}
          </p>
        </Reveal>

        <div className={isSingle ? "mx-auto mt-12 max-w-sm" : "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
          {visiblePacks.map((pack, i) => (
            <Reveal key={pack.slug} delay={i * 0.06}>
              <PackCard pack={pack} ctaLabel="Découvrir" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
