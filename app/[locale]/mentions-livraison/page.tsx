import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedHref, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import LegalLayout from "@/components/legal/LegalLayout";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);

  return {
    title: dict.pages.shipping.title,
    description: dict.pages.shipping.description,
    alternates: { canonical: localizedHref("/mentions-livraison", params.locale) },
  };
}

export default function ShippingPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  if (locale === "ar") {
    return (
      <LegalLayout title={dict.pages.shipping.title}>
        <p>
          توصل Bayti Pack باقات مستلزمات المطبخ إلى جميع أنحاء المغرب. تجدون هنا الآجال وطرق
          التوصيل.
        </p>

        <h2>مناطق التوصيل</h2>
        <p>نوصل إلى جميع المدن والجهات الكبرى في المغرب.</p>

        <h2>آجال التوصيل</h2>
        <ul>
          <li>المدن الكبرى (الدار البيضاء، الرباط، مراكش...): من 2 إلى 3 أيام عمل</li>
          <li>المدن والجهات الأخرى: من 3 إلى 5 أيام عمل</li>
        </ul>

        <h2>رسوم التوصيل</h2>
        <p>يتم إبلاغكم برسوم التوصيل، إن وجدت، عند تأكيد طلبكم هاتفياً.</p>

        <h2>الدفع عند التوصيل</h2>
        <p>
          يتم التسديد فقط عند استلام طردكم، نقداً، مباشرة لدى عامل التوصيل. لا حاجة لأي دفع
          إلكتروني.
        </p>

        <h2>تتبع الطلب</h2>
        <p>
          بعد تأكيد طلبكم، يتصل بكم أحد مستشارينا هاتفياً لتنظيم التوصيل إلى العنوان المحدد.
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title={dict.pages.shipping.title}>
      <p>
        Bayti Pack livre ses packs d&apos;accessoires de cuisine partout au Maroc. Retrouvez ici
        les délais et modalités de livraison.
      </p>

      <h2>Zones de livraison</h2>
      <p>Nous livrons dans toutes les grandes villes et régions du Maroc.</p>

      <h2>Délais de livraison</h2>
      <ul>
        <li>Grandes villes (Casablanca, Rabat, Marrakech...) : 2 à 3 jours ouvrables</li>
        <li>Autres villes et régions : 3 à 5 jours ouvrables</li>
      </ul>

      <h2>Frais de livraison</h2>
      <p>
        Les frais de livraison, s&apos;ils s&apos;appliquent, sont communiqués lors de la
        confirmation téléphonique de votre commande.
      </p>

      <h2>Paiement à la livraison</h2>
      <p>
        Le règlement se fait uniquement à la réception de votre colis, en espèces, directement
        auprès du livreur. Aucun paiement en ligne n&apos;est requis.
      </p>

      <h2>Suivi de commande</h2>
      <p>
        Après confirmation de votre commande, un conseiller vous contacte par téléphone pour
        organiser la livraison à l&apos;adresse indiquée.
      </p>
    </LegalLayout>
  );
}
