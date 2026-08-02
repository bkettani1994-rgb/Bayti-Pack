import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente de Bayti Pack : commandes, prix, paiement et retours.",
  alternates: { canonical: "/conditions-generales" },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Conditions générales de vente">
      <p>
        Les présentes conditions générales de vente régissent toute commande passée sur le site
        Bayti Pack. En passant commande, vous acceptez sans réserve les conditions ci-dessous.
      </p>

      <h2>Produits</h2>
      <p>
        Bayti Pack propose des packs d&apos;accessoires de cuisine (papier aluminium, film
        alimentaire, sacs de congélation, etc.) présentés avec leur composition détaillée sur
        chaque page produit.
      </p>

      <h2>Prix</h2>
      <p>
        Les prix sont indiqués en dirhams marocains (DH), toutes taxes comprises. Bayti Pack se
        réserve le droit de modifier ses prix à tout moment, les commandes déjà confirmées
        n&apos;étant pas affectées.
      </p>

      <h2>Commande</h2>
      <p>
        Toute commande passée via le formulaire du site implique un engagement d&apos;achat. Un
        conseiller peut vous contacter par téléphone pour confirmer votre commande avant expédition.
      </p>

      <h2>Paiement</h2>
      <p>
        Le paiement s&apos;effectue exclusivement à la livraison (paiement à la réception), en
        espèces, directement auprès du livreur.
      </p>

      <h2>Retours et réclamations</h2>
      <p>
        En cas de produit manquant ou endommagé à la livraison, contactez-nous sous 48h via la
        page Contact afin qu&apos;une solution vous soit proposée rapidement.
      </p>
    </LegalLayout>
  );
}
