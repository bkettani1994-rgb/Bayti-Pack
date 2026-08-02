import { MousePointerClick, ClipboardCheck, Truck } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const steps = [
  { number: "1", icon: MousePointerClick, title: "Choisissez votre pack", description: "Parcourez nos 5 packs et sélectionnez celui qui correspond à vos besoins." },
  { number: "2", icon: ClipboardCheck, title: "Passez votre commande", description: "Remplissez le formulaire en 30 secondes, sans compte à créer." },
  { number: "3", icon: Truck, title: "Recevez votre colis", description: "Votre pack est livré chez vous, paiement à la réception." },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Comment ça marche ?</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.1} className="relative flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white shadow-soft">
                {step.number}
              </div>
              <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-light">
                <step.icon className="h-6 w-6 text-brand-dark" strokeWidth={1.75} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-neutral-500">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
