import type { Pack } from "@/types";
import { AppIcon } from "@/components/shared/icon-map";
import Reveal from "@/components/shared/Reveal";

export default function Advantages({ pack }: { pack: Pack }) {
  return (
    <div className="bg-neutral-50 py-14 sm:py-16">
      <div className="container-content">
        <Reveal>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Pourquoi choisir ce pack</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {pack.advantages.map((adv, i) => (
            <Reveal key={adv.title} delay={i * 0.08}>
              <div className="h-full rounded-xl2 border border-black/5 bg-white p-6 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light">
                  <AppIcon icon={adv.icon} className="h-6 w-6 text-brand-dark" />
                </div>
                <h3 className="mt-4 font-semibold text-ink">{adv.title}</h3>
                <p className="mt-2 text-sm text-neutral-500">{adv.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
