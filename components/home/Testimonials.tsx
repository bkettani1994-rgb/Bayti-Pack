import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import Reveal from "@/components/shared/Reveal";

const colors = ["bg-brand", "bg-ink", "bg-brand-dark", "bg-neutral-700"];

export default function Testimonials() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Avis clients</h2>
          <p className="section-subtitle">Ce que nos clients disent de Bayti Pack.</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col rounded-xl2 border border-black/5 bg-white p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white ${colors[i % colors.length]}`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-neutral-400">{t.city}</p>
                  </div>
                </div>
                <div className="mt-3 flex gap-0.5 text-brand">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{t.comment}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
