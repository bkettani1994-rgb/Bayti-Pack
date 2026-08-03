import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import WhyUs from "@/components/home/WhyUs";
import PacksCarousel from "@/components/home/PacksCarousel";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";

export const metadata: Metadata = {
  title: "Packs d'accessoires de cuisine indispensables au quotidien",
  description:
    "Tous les indispensables de votre cuisine réunis dans des packs économiques dès 89 DH. Livraison rapide partout au Maroc, paiement à la livraison.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyUs />
      <PacksCarousel />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </>
  );
}
