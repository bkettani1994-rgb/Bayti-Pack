import { Wallet, Home, Truck, Banknote } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const items = [
  { icon: Wallet, title: "Économique", description: "Moins cher que d'acheter chaque produit séparément." },
  { icon: Home, title: "Produits du quotidien", description: "Des essentiels que chaque foyer utilise chaque semaine." },
  { icon: Truck, title: "Livraison rapide", description: "Recevez votre pack rapidement, partout au Maroc." },
  { icon: Banknote, title: "Paiement à la livraison", description: "Payez uniquement à la réception, en toute confiance." },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Pourquoi nos packs ?</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-xl2 border border-black/5 bg-neutral-50 p-8 text-center transition-shadow duration-300 hover:shadow-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-light">
                  <item.icon className="h-7 w-7 text-brand-dark" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-neutral-500">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
