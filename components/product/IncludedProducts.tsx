import Image from "next/image";
import type { Pack } from "@/types";
import { AppIcon } from "@/components/shared/icon-map";
import Reveal from "@/components/shared/Reveal";

export default function IncludedProducts({ pack, heading }: { pack: Pack; heading: string }) {
  return (
    <div className="container-content py-14 sm:py-16">
      <Reveal>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{heading}</h2>
      </Reveal>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pack.contents.map((item, i) => {
          const image = item.cardImage ?? item.image;
          return (
            <Reveal key={item.name} delay={i * 0.05}>
              <div className="overflow-hidden rounded-xl2 border border-black/5 bg-white shadow-soft">
                {image ? (
                  <div className="relative aspect-square w-full bg-brand-light">
                    <Image
                      src={image}
                      alt={item.imageAlt ?? `${item.name} — ${pack.name} — Bayti Pack`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-square w-full items-center justify-center bg-brand-light">
                    <AppIcon icon={item.icon} className="h-14 w-14 text-brand-dark" />
                  </div>
                )}
                <div className="p-5">
                  <p className="font-semibold text-ink">{item.name}</p>
                  {item.description && (
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">{item.description}</p>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
