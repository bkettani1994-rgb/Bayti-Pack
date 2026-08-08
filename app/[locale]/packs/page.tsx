import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { visiblePacks } from "@/data/packs";
import { isLocale, localizedHref, localizePack, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import PackCard from "@/components/shared/PackCard";
import Reveal from "@/components/shared/Reveal";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);

  return {
    title: dict.pages.catalogue.title,
    description: dict.pages.catalogue.description,
    alternates: { canonical: localizedHref("/packs", params.locale) },
  };
}

export default function CataloguePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const isSingle = visiblePacks.length === 1;

  return (
    <section className="py-14 sm:py-20">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="section-title">{dict.catalogue.heading}</h1>
          <p className="section-subtitle">
            {isSingle ? dict.catalogue.subtitleSingle : dict.catalogue.subtitleMulti}
          </p>
        </Reveal>

        <div className={isSingle ? "mx-auto mt-12 max-w-sm" : "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"}>
          {visiblePacks.map((pack, i) => (
            <Reveal key={pack.slug} delay={i * 0.06}>
              <PackCard
                pack={localizePack(pack, locale)}
                locale={locale}
                dict={dict}
                ctaLabel={dict.catalogue.discover}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
