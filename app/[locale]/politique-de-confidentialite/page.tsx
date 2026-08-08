import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedHref, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import LegalLayout from "@/components/legal/LegalLayout";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);

  return {
    title: dict.pages.privacy.title,
    description: dict.pages.privacy.description,
    alternates: { canonical: localizedHref("/politique-de-confidentialite", params.locale) },
  };
}

export default function PrivacyPolicyPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  if (locale === "ar") {
    return (
      <LegalLayout title={dict.pages.privacy.title}>
        <p>
          تولي Bayti Pack أهمية كبيرة لحماية بياناتكم الشخصية. توضح هذه السياسة المعلومات التي نجمعها،
          ولماذا، وكيف يتم استخدامها عند زيارتكم لموقعنا أو تقديم طلب.
        </p>

        <h2>البيانات المجمعة</h2>
        <p>عند تقديم طلب أو التواصل معنا، نقوم بجمع المعلومات التالية فقط:</p>
        <ul>
          <li>اسمكم الكامل</li>
          <li>رقم هاتفكم</li>
          <li>عنوان التوصيل ومدينتكم</li>
          <li>بريدكم الإلكتروني (في حال تواصلكم معنا)</li>
        </ul>

        <h2>استخدام البيانات</h2>
        <p>
          تُستخدم هذه المعلومات حصرياً لمعالجة طلبكم وتنظيم التوصيل والتواصل معكم عند الحاجة. لا يتم
          بيعها أبداً لأطراف ثالثة.
        </p>

        <h2>الاحتفاظ بالبيانات</h2>
        <p>يتم الاحتفاظ ببياناتكم فقط للمدة اللازمة لمعالجة طلبكم وخدمة ما بعد البيع.</p>

        <h2>حقوقكم</h2>
        <p>
          يمكنكم في أي وقت طلب الوصول إلى بياناتكم الشخصية أو تصحيحها أو حذفها من خلال التواصل معنا
          عبر صفحة الاتصال.
        </p>

        <h2>ملفات تعريف الارتباط (Cookies)</h2>
        <p>
          قد يستخدم موقعنا ملفات تعريف ارتباط تقنية ضرورية لحسن سيره. لا يتم استخدام أي ملفات تعريف
          ارتباط إعلانية من أطراف ثالثة دون موافقتكم.
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title={dict.pages.privacy.title}>
      <p>
        Bayti Pack accorde une grande importance à la protection de vos données personnelles.
        Cette politique explique quelles informations nous collectons, pourquoi, et comment
        elles sont utilisées lorsque vous visitez notre site ou passez une commande.
      </p>

      <h2>Données collectées</h2>
      <p>Lors d&apos;une commande ou d&apos;une prise de contact, nous collectons uniquement :</p>
      <ul>
        <li>Votre nom complet</li>
        <li>Votre numéro de téléphone</li>
        <li>Votre adresse de livraison et votre ville</li>
        <li>Votre adresse email (si vous nous contactez)</li>
      </ul>

      <h2>Utilisation des données</h2>
      <p>
        Ces informations sont utilisées exclusivement pour traiter votre commande, organiser la
        livraison et vous contacter en cas de besoin. Elles ne sont jamais vendues à des tiers.
      </p>

      <h2>Conservation des données</h2>
      <p>
        Vos données sont conservées uniquement le temps nécessaire au traitement de votre
        commande et au service après-vente.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez à tout moment demander l&apos;accès, la correction ou la suppression de vos
        données personnelles en nous contactant via la page Contact.
      </p>

      <h2>Cookies</h2>
      <p>
        Notre site peut utiliser des cookies techniques nécessaires à son bon fonctionnement.
        Aucun cookie publicitaire tiers n&apos;est utilisé sans votre consentement.
      </p>
    </LegalLayout>
  );
}
