import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions livraison",
  description: "Délais, zones de livraison et modalités de paiement à la livraison chez Bayti Pack.",
  alternates: { canonical: "/mentions-livraison" },
};

export default function ShippingPage() {
  return (
    <LegalLayout title="Mentions livraison">
      <p>
        Bayti Pack livre ses packs d&apos;accessoires de cuisine partout au Maroc. Retrouvez ici
        les délais et modalités de livraison.
      </p>

      <h2>Zones de livraison</h2>
      <p>Nous livrons dans toutes les grandes villes et régions du Maroc.</p>

      <h2>Délais de livraison</h2>
      <ul>
        <li>Grandes villes (Casablanca, Rabat, Marrakech...) : 2 à 3 jours ouvrables</li>
        <li>Autres villes et régions : 3 à 5 jours ouvrables</li>
      </ul>

      <h2>Frais de livraison</h2>
      <p>
        Les frais de livraison, s&apos;ils s&apos;appliquent, sont communiqués lors de la
        confirmation téléphonique de votre commande.
      </p>

      <h2>Paiement à la livraison</h2>
      <p>
        Le règlement se fait uniquement à la réception de votre colis, en espèces, directement
        auprès du livreur. Aucun paiement en ligne n&apos;est requis.
      </p>

      <h2>Suivi de commande</h2>
      <p>
        Après confirmation de votre commande, un conseiller vous contacte par téléphone pour
        organiser la livraison à l&apos;adresse indiquée.
      </p>
    </LegalLayout>
  );
}
