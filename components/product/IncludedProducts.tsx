import Image from "next/image";
import type { Pack } from "@/types";
import { AppIcon } from "@/components/shared/icon-map";
import Reveal from "@/components/shared/Reveal";

export default function IncludedProducts({ pack }: { pack: Pack }) {
  return (
    <div className="container-content py-14 sm:py-16">
      <Reveal>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Ce que contient ce pack</h2>
      </Reveal>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pack.contents.map((item, i) => (
          <Reveal key={item.name} delay={i * 0.05}>
            <div className="flex items-center gap-4 rounded-xl2 border border-black/5 bg-white p-5 shadow-soft">
              {item.image ? (
                <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-brand-light">
                  <Image src={item.image} alt={item.name} fill sizes="48px" className="object-cover" />
                </div>
              ) : (
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-light">
                  <AppIcon icon={item.icon} className="h-6 w-6 text-brand-dark" />
                </div>
              )}
              <p className="font-medium text-ink">{item.name}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
