import { MousePointerClick, ClipboardCheck, Truck } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import Reveal from "@/components/shared/Reveal";

const icons = [MousePointerClick, ClipboardCheck, Truck];

export default function HowItWorks({ dict }: { dict: Dictionary }) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">{dict.home.howItWorks.heading}</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {dict.home.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={step.title} delay={i * 0.1} className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white shadow-soft">
                  {i + 1}
                </div>
                <div className="mt-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-light">
                  <Icon className="h-6 w-6 text-brand-dark" strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-neutral-500">{step.description}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
