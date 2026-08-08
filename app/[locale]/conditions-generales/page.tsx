import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, localizedHref, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import LegalLayout from "@/components/legal/LegalLayout";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);

  return {
    title: dict.pages.terms.title,
    description: dict.pages.terms.description,
    alternates: { canonical: localizedHref("/conditions-generales", params.locale) },
  };
}

export default function TermsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  if (locale === "ar") {
    return (
      <LegalLayout title={dict.pages.terms.title}>
        <p>
          تحكم هذه الشروط والأحكام العامة للبيع أي طلب يتم تقديمه عبر موقع Bayti Pack. بتقديمكم
          للطلب، فإنكم توافقون دون تحفظ على الشروط أدناه.
        </p>

        <h2>المنتجات</h2>
        <p>
          تقترح Bayti Pack باقات من مستلزمات المطبخ (ورق ألومنيوم، فيلم غذائي، أكياس تجميد، إلخ)
          معروضة مع تفاصيل مكوناتها في كل صفحة منتج.
        </p>

        <h2>الأسعار</h2>
        <p>
          الأسعار محددة بالدرهم المغربي (DH)، شاملة جميع الضرائب. تحتفظ Bayti Pack بحق تعديل
          أسعارها في أي وقت، دون أن يؤثر ذلك على الطلبات المؤكدة مسبقاً.
        </p>

        <h2>الطلب</h2>
        <p>
          يترتب على كل طلب يتم تقديمه عبر نموذج الموقع التزام بالشراء. قد يتصل بكم أحد مستشارينا
          هاتفياً لتأكيد طلبكم قبل الشحن.
        </p>

        <h2>الدفع</h2>
        <p>يتم الدفع حصرياً عند التوصيل (الدفع عند الاستلام)، نقداً، مباشرة لدى عامل التوصيل.</p>

        <h2>الإرجاع والشكاوى</h2>
        <p>
          في حال وجود منتج ناقص أو تالف عند التوصيل، تواصلوا معنا خلال 48 ساعة عبر صفحة الاتصال
          حتى نقترح عليكم حلاً بسرعة.
        </p>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title={dict.pages.terms.title}>
      <p>
        Les présentes conditions générales de vente régissent toute commande passée sur le site
        Bayti Pack. En passant commande, vous acceptez sans réserve les conditions ci-dessous.
      </p>

      <h2>Produits</h2>
      <p>
        Bayti Pack propose des packs d&apos;accessoires de cuisine (papier aluminium, film
        alimentaire, sacs de congélation, etc.) présentés avec leur composition détaillée sur
        chaque page produit.
      </p>

      <h2>Prix</h2>
      <p>
        Les prix sont indiqués en dirhams marocains (DH), toutes taxes comprises. Bayti Pack se
        réserve le droit de modifier ses prix à tout moment, les commandes déjà confirmées
        n&apos;étant pas affectées.
      </p>

      <h2>Commande</h2>
      <p>
        Toute commande passée via le formulaire du site implique un engagement d&apos;achat. Un
        conseiller peut vous contacter par téléphone pour confirmer votre commande avant expédition.
      </p>

      <h2>Paiement</h2>
      <p>
        Le paiement s&apos;effectue exclusivement à la livraison (paiement à la réception), en
        espèces, directement auprès du livreur.
      </p>

      <h2>Retours et réclamations</h2>
      <p>
        En cas de produit manquant ou endommagé à la livraison, contactez-nous sous 48h via la
        page Contact afin qu&apos;une solution vous soit proposée rapidement.
      </p>
    </LegalLayout>
  );
}
