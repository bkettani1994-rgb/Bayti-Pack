import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { packs, getPackBySlug } from "@/data/packs";
import ProductInteractive from "@/components/product/ProductInteractive";
import IncludedProducts from "@/components/product/IncludedProducts";
import Advantages from "@/components/product/Advantages";
import Upsell from "@/components/product/Upsell";

export function generateStaticParams() {
  return packs.map((pack) => ({ slug: pack.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const pack = getPackBySlug(params.slug);
  if (!pack) return {};

  return {
    title: `${pack.name} — ${pack.price} DH`,
    description: pack.description,
    alternates: { canonical: `/packs/${pack.slug}` },
    openGraph: {
      title: `${pack.name} — ${pack.price} DH`,
      description: pack.description,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const pack = getPackBySlug(params.slug);
  if (!pack) notFound();

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
      url: `https://www.baytipack.ma/packs/${pack.slug}`,
    },
  };

  return (
    <div className="pb-24 pt-10 sm:pt-14 lg:pb-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-content">
        <ProductInteractive pack={pack} />
      </div>

      <IncludedProducts pack={pack} />
      <Advantages pack={pack} />
      <Upsell slug={pack.slug} />
    </div>
  );
}
