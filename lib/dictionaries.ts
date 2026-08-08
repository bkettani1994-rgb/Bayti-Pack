import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  announcement: string[];
  nav: {
    home: string;
    packs: string;
    contact: string;
    orderNow: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    tagline: string;
    navigationHeading: string;
    informationsHeading: string;
    contactHeading: string;
    shippingLink: string;
    termsLink: string;
    privacyLink: string;
    rights: string;
  };
  home: {
    whyUs: {
      heading: string;
      items: { title: string; description: string }[];
    };
    packsSection: {
      heading: string;
      subtitleSingle: string;
      subtitleMulti: string;
      viewAll: string;
    };
    howItWorks: {
      heading: string;
      steps: { title: string; description: string }[];
    };
    testimonials: { heading: string; subtitle: string };
    faq: {
      heading: string;
      items: { question: string; answer: string }[];
    };
  };
  catalogue: {
    heading: string;
    subtitleSingle: string;
    subtitleMulti: string;
    discover: string;
  };
  product: {
    bestSeller: string;
    orderNowPrefix: string;
    itemsIncludedSuffix: string;
    viewPack: string;
    discoverPack: string;
    overview: string;
    includedHeading: string;
    whyChooseHeading: string;
    upsellHeading: string;
    confirmPrefix: string;
    orderForm: {
      heading: string;
      subtitle: string;
      offerLabel: string;
      deliveryHint: string;
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      cityLabel: string;
      cityPlaceholder: string;
      addressLabel: string;
      addressPlaceholder: string;
      errorMessage: string;
      submitting: string;
      successHeading: string;
      successMessage: string;
    };
    bundle: { perPack: string; save: string };
  };
  contact: {
    heading: string;
    subtitle: string;
    phoneLabel: string;
    emailLabel: string;
    zoneLabel: string;
    zoneValue: string;
    availabilityLabel: string;
    availabilityValue: string;
    form: {
      nameLabel: string;
      emailLabel: string;
      messageLabel: string;
      submit: string;
      sending: string;
      error: string;
      successHeading: string;
      successMessage: string;
    };
  };
  notFound: { title: string; message: string; backHome: string };
  pages: {
    home: { title: string; description: string; ogDescription: string };
    catalogue: { title: string; description: string };
    contact: { title: string; description: string };
    privacy: { title: string; description: string };
    terms: { title: string; description: string };
    shipping: { title: string; description: string };
  };
  siteName: string;
  siteDefaultTitle: string;
  siteDefaultDescription: string;
};

import { fr } from "@/data/dictionaries/fr";
import { ar } from "@/data/dictionaries/ar";

const dictionaries: Record<Locale, Dictionary> = { fr, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
