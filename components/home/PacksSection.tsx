import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { visiblePacks } from "@/data/packs";
import type { Locale } from "@/lib/i18n";
import { localizedHref, localizePack } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import PackCard from "@/components/shared/PackCard";
import Reveal from "@/components/shared/Reveal";

export default function PacksSection({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const isSingle = visiblePacks.length === 1;

  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">{dict.home.packsSection.heading}</h2>
          <p className="section-subtitle">
            {isSingle ? dict.home.packsSection.subtitleSingle : dict.home.packsSection.subtitleMulti}
          </p>
        </Reveal>

        <div
          className={
            isSingle
              ? "mx-auto mt-12 max-w-sm"
              : "mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3"
          }
        >
          {visiblePacks.map((pack, i) => (
            <Reveal key={pack.slug} delay={i * 0.06}>
              <PackCard pack={localizePack(pack, locale)} locale={locale} dict={dict} showBadge={false} />
            </Reveal>
          ))}
        </div>

        {!isSingle && (
          <div className="mt-10 text-center">
            <Link href={localizedHref("/packs", locale)} className="btn-secondary">
              {dict.home.packsSection.viewAll}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
