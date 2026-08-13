import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MetaPixel from "@/components/shared/MetaPixel";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import LanguagePopup from "@/components/shared/LanguagePopup";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionaries";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

const siteUrl = "https://www.baytipack.shop";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);
  const localeUrl = locale === "fr" ? siteUrl : `${siteUrl}/ar`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.siteDefaultTitle,
      template: `%s | ${dict.siteName}`,
    },
    description: dict.siteDefaultDescription,
    alternates: {
      canonical: localeUrl,
      languages: {
        fr: siteUrl,
        ar: `${siteUrl}/ar`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_MA" : "ar_MA",
      url: localeUrl,
      siteName: dict.siteName,
      title: dict.siteDefaultTitle,
      description: dict.pages.home.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.siteDefaultTitle,
      description: dict.pages.home.ogDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      other: {
        "facebook-domain-verification": "ub1ho25pfs9pt4bjt9i5u894tydyv0",
      },
    },
    icons: {
      icon: "https://res.cloudinary.com/diptsoc4h/image/upload/v1786539879/bayti_pack_logo_white_wis5ud.png",
      apple: "https://res.cloudinary.com/diptsoc4h/image/upload/v1786539879/bayti_pack_logo_white_wis5ud.png",
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;
  const dict = getDictionary(locale);

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={cn(inter.variable, cairo.variable)}>
      <body className={cn("flex min-h-screen flex-col antialiased", locale === "ar" ? "font-arabic" : "font-sans")}>
        <MetaPixel />
        <LanguagePopup locale={locale} />
        <AnnouncementBar messages={dict.announcement} />
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
        <WhatsAppButton whatsappButton={dict.whatsappButton} />
      </body>
    </html>
  );
}
