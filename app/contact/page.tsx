import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez l'équipe Bayti Pack pour toute question sur nos packs, vos commandes ou la livraison.",
  alternates: { canonical: "/contact" },
};

const infos = [
  { icon: Phone, label: "Téléphone", value: "+212 6 00 00 00 00" },
  { icon: Mail, label: "Email", value: "contact@baytipack.ma" },
  { icon: MapPin, label: "Zone de livraison", value: "Partout au Maroc" },
  { icon: Clock, label: "Disponibilité", value: "Lun - Sam, 9h - 19h" },
];

export default function ContactPage() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-content grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="section-title">Contact</h1>
            <p className="section-subtitle">
              Une question sur un pack ou votre commande ? Écrivez-nous, nous répondons rapidement.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {infos.map((info) => (
              <div key={info.label} className="flex items-center gap-4 rounded-xl2 border border-black/5 bg-neutral-50 p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-light">
                  <info.icon className="h-5 w-5 text-brand-dark" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">{info.label}</p>
                  <p className="font-medium text-ink">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
