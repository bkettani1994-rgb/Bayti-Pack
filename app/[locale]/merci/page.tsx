import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { getPackBySlug } from "@/data/packs";
import { isLocale, localizedHref, localizePack, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { formatDH } from "@/lib/utils";
import Reveal from "@/components/shared/Reveal";
import PurchaseEvent from "@/components/shared/PurchaseEvent";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);

  return {
    title: dict.pages.thankYou.title,
    description: dict.pages.thankYou.description,
    alternates: { canonical: localizedHref("/merci", params.locale) },
    robots: { index: false, follow: true },
  };
}

export default function ThankYouPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams: Record<string, string | string[] | undefined>;
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const t = dict.thankYou;

  const get = (key: string) => {
    const value = searchParams[key];
    return typeof value === "string" ? value : undefined;
  };

  const packSlug = get("packSlug");
  const basePack = packSlug ? getPackBySlug(packSlug) : undefined;
  const pack = basePack ? localizePack(basePack, locale) : undefined;

  const quantity = get("quantity");
  const total = get("total");
  const name = get("name");
  const phone = get("phone");
  const city = get("city");
  const address = get("address");
  const eventId = get("eventId");

  const recapRows = [
    pack && { label: t.packLabel, value: pack.name },
    quantity && { label: t.quantityLabel, value: quantity },
    total && { label: t.totalLabel, value: formatDH(Number(total)) },
    name && { label: t.nameLabel, value: name },
    phone && { label: t.phoneLabel, value: phone },
    city && { label: t.cityLabel, value: city },
    address && { label: t.addressLabel, value: address },
  ].filter((row): row is { label: string; value: string } => Boolean(row));

  return (
    <div className="container-content py-16 sm:py-24">
      {total && <PurchaseEvent value={Number(total)} eventId={eventId} />}

      <div className="mx-auto max-w-lg text-center">
        <Reveal>
          <CheckCircle2 className="mx-auto h-16 w-16 text-brand-dark" />
          <h1 className="mt-6 text-2xl font-bold text-ink sm:text-3xl">{t.heading}</h1>
          <p className="mt-3 text-neutral-500">{t.message}</p>
        </Reveal>

        {recapRows.length > 0 && (
          <Reveal delay={0.1} className="mt-8 rounded-xl2 border border-black/5 bg-neutral-50 p-6 text-left rtl:text-right">
            <h2 className="text-sm font-semibold text-ink">{t.recapHeading}</h2>
            <dl className="mt-4 space-y-3">
              {recapRows.map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-4 text-sm">
                  <dt className="text-neutral-500">{row.label}</dt>
                  <dd className="font-medium text-ink">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <Link href={localizedHref("/", locale)} className="btn-primary mt-8">
            {t.backHome}
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
