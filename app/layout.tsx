import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.baytipack.ma";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bayti Pack — Packs d'accessoires de cuisine indispensables",
    template: "%s | Bayti Pack",
  },
  description:
    "Tous les indispensables de votre cuisine réunis dans des packs économiques. Papier aluminium, film alimentaire, sacs congélation et plus. Livraison rapide, paiement à la livraison.",
  keywords: [
    "pack cuisine",
    "accessoires cuisine Maroc",
    "papier aluminium",
    "film alimentaire",
    "sacs congélation",
    "livraison Maroc",
  ],
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: siteUrl,
    siteName: "Bayti Pack",
    title: "Bayti Pack — Packs d'accessoires de cuisine indispensables",
    description:
      "Gagnez du temps, économisez de l'argent et recevez tout chez vous. Découvrez nos packs cuisine dès 89 DH.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayti Pack — Packs d'accessoires de cuisine indispensables",
    description:
      "Gagnez du temps, économisez de l'argent et recevez tout chez vous.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
