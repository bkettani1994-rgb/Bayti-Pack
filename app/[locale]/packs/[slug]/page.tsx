import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { packs, getPackBySlug } from "@/data/packs";
import { isLocale, localizedHref, localizePack, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import ProductInteractive from "@/components/product/ProductInteractive";
import IncludedProducts from "@/components/product/IncludedProducts";
import Advantages from "@/components/product/Advantages";
import ComparisonTable from "@/components/product/ComparisonTable";
import ProductFAQ from "@/components/product/ProductFAQ";
import Upsell from "@/components/product/Upsell";

export function generateStaticParams() {
  return packs.map((pack) => ({ slug: pack.slug }));
}

export function generateMetadata({ params }: { params: { locale: string; slug: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale: Locale = params.locale;
  const basePack = getPackBySlug(params.slug);
  if (!basePack) return {};
  const pack = localizePack(basePack, locale);

  return {
    title: `${pack.name} — ${pack.price} DH`,
    description: pack.description,
    alternates: { canonical: localizedHref(`/packs/${pack.slug}`, locale) },
    openGraph: {
      title: `${pack.name} — ${pack.price} DH`,
      description: pack.description,
    },
  };
}

export default function ProductPage({ params }: { params: { locale: string; slug: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const basePack = getPackBySlug(params.slug);
  if (!basePack) notFound();
  const pack = localizePack(basePack, locale);
  const dict = getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: pack.name,
    description: pack.description,
    brand: { "@type": "Brand", name: "Bayti Pack" },
    offers: {
      "@type": "Offer",
      priceCurrency: "MAD",
      price: pack.price,
      availability: "https://schema.org/InStock",
      url: `https://www.baytipack.shop${localizedHref(`/packs/${pack.slug}`, locale)}`,
    },
  };

  return (
    <div className="pb-14 pt-10 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-content">
        <ProductInteractive pack={pack} locale={locale} dict={dict} />
      </div>

      <IncludedProducts pack={pack} heading={dict.product.includedHeading} />
      <Advantages pack={pack} heading={dict.product.whyChooseHeading} />
      <ComparisonTable comparison={dict.product.comparison} />
      <ProductFAQ faq={dict.product.faq} />
      <Upsell slug={pack.slug} locale={locale} dict={dict} />
    </div>
  );
}
