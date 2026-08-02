import { getOtherPacks } from "@/data/packs";
import PackCard from "@/components/shared/PackCard";
import Reveal from "@/components/shared/Reveal";

export default function Upsell({ slug }: { slug: string }) {
  const others = getOtherPacks(slug);

  return (
    <div className="container-content py-14 sm:py-16">
      <Reveal>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">Vous pourriez aussi aimer</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((pack, i) => (
          <Reveal key={pack.slug} delay={i * 0.06}>
            <PackCard pack={pack} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
