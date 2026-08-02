import type { Metadata } from "next";
import { packs } from "@/data/packs";
import PackCard from "@/components/shared/PackCard";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Catalogue des packs cuisine",
  description:
    "Découvrez nos 5 packs d'accessoires de cuisine : Cuisine Essentielle, Rangement, BBQ & Cuisine, Congélation et Économie Maison. Dès 89 DH, livraison rapide.",
  alternates: { canonical: "/packs" },
};

export default function CataloguePage() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="section-title">Nos Packs</h1>
          <p className="section-subtitle">
            5 packs pensés pour couvrir tous les besoins essentiels de votre cuisine.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packs.map((pack, i) => (
            <Reveal key={pack.slug} delay={i * 0.06}>
              <PackCard pack={pack} ctaLabel="Découvrir" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
