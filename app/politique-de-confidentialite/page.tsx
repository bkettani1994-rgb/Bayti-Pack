import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Bayti Pack : collecte, usage et protection de vos données personnelles.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <p>
        Bayti Pack accorde une grande importance à la protection de vos données personnelles.
        Cette politique explique quelles informations nous collectons, pourquoi, et comment
        elles sont utilisées lorsque vous visitez notre site ou passez une commande.
      </p>

      <h2>Données collectées</h2>
      <p>Lors d&apos;une commande ou d&apos;une prise de contact, nous collectons uniquement :</p>
      <ul>
        <li>Votre nom complet</li>
        <li>Votre numéro de téléphone</li>
        <li>Votre adresse de livraison et votre ville</li>
        <li>Votre adresse email (si vous nous contactez)</li>
      </ul>

      <h2>Utilisation des données</h2>
      <p>
        Ces informations sont utilisées exclusivement pour traiter votre commande, organiser la
        livraison et vous contacter en cas de besoin. Elles ne sont jamais vendues à des tiers.
      </p>

      <h2>Conservation des données</h2>
      <p>
        Vos données sont conservées uniquement le temps nécessaire au traitement de votre
        commande et au service après-vente.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez à tout moment demander l&apos;accès, la correction ou la suppression de vos
        données personnelles en nous contactant via la page Contact.
      </p>

      <h2>Cookies</h2>
      <p>
        Notre site peut utiliser des cookies techniques nécessaires à son bon fonctionnement.
        Aucun cookie publicitaire tiers n&apos;est utilisé sans votre consentement.
      </p>
    </LegalLayout>
  );
}
