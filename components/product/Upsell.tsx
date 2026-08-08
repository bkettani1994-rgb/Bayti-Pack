import { getOtherPacks } from "@/data/packs";
import type { Locale } from "@/lib/i18n";
import { localizePack } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PackCard from "@/components/shared/PackCard";
import Reveal from "@/components/shared/Reveal";

export default function Upsell({ slug, locale, dict }: { slug: string; locale: Locale; dict: Dictionary }) {
  const others = getOtherPacks(slug);
  if (others.length === 0) return null;

  return (
    <div className="container-content py-14 sm:py-16">
      <Reveal>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{dict.product.upsellHeading}</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((pack, i) => (
          <Reveal key={pack.slug} delay={i * 0.06}>
            <PackCard pack={localizePack(pack, locale)} locale={locale} dict={dict} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
