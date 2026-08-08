import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import PacksSection from "@/components/home/PacksSection";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import { isLocale, localizedHref, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);

  return {
    title: dict.pages.home.title,
    description: dict.pages.home.description,
    alternates: { canonical: localizedHref("/", params.locale) },
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <>
      <Hero />
      <PacksSection locale={locale} dict={dict} />
      <WhyUs dict={dict} />
      <HowItWorks dict={dict} />
      <Testimonials locale={locale} dict={dict} />
      <FAQ dict={dict} />
    </>
  );
}
