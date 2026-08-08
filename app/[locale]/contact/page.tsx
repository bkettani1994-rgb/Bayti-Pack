import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { isLocale, localizedHref, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import ContactForm from "@/components/contact/ContactForm";
import Reveal from "@/components/shared/Reveal";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);

  return {
    title: dict.pages.contact.title,
    description: dict.pages.contact.description,
    alternates: { canonical: localizedHref("/contact", params.locale) },
  };
}

export default function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  const infos = [
    { icon: Phone, label: dict.contact.phoneLabel, value: "+212 6 00 00 00 00" },
    { icon: Mail, label: dict.contact.emailLabel, value: "contact@baytipack.ma" },
    { icon: MapPin, label: dict.contact.zoneLabel, value: dict.contact.zoneValue },
    { icon: Clock, label: dict.contact.availabilityLabel, value: dict.contact.availabilityValue },
  ];

  return (
    <section className="py-14 sm:py-20">
      <div className="container-content grid gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <h1 className="section-title">{dict.contact.heading}</h1>
            <p className="section-subtitle">{dict.contact.subtitle}</p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {infos.map((info) => (
              <div key={info.label} className="flex items-center gap-4 rounded-xl2 border border-black/5 bg-neutral-50 p-4">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-light">
                  <info.icon className="h-5 w-5 text-brand-dark" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">{info.label}</p>
                  <p className="font-medium text-ink">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <ContactForm dict={dict} />
        </Reveal>
      </div>
    </section>
  );
}
