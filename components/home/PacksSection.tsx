import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { packs } from "@/data/packs";
import PackCard from "@/components/shared/PackCard";
import Reveal from "@/components/shared/Reveal";

export default function PacksSection() {
  return (
    <section className="bg-neutral-50 py-16 sm:py-24">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Nos Packs</h2>
          <p className="section-subtitle">5 packs pensés pour simplifier votre quotidien.</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {packs.map((pack, i) => (
            <Reveal key={pack.slug} delay={i * 0.06}>
              <PackCard pack={pack} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/packs" className="btn-secondary">
            Voir tous les packs
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
