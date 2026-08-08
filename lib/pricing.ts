import type { Locale } from "@/lib/i18n";

export type BundleTier = {
  qty: 1 | 2 | 3;
  label: string;
  badge?: string;
  unitPrice: number;
  total: number;
  compareTotal: number;
  savings: number;
};

const DISCOUNTS: Record<number, number> = {
  1: 0,
  2: 0.08,
  3: 0.15,
};

const LABELS: Record<Locale, { pack: (qty: number) => string; badge2: string; badge3: string }> = {
  fr: {
    pack: (qty) => (qty === 1 ? "1 Pack" : `${qty} Packs`),
    badge2: "Le plus populaire",
    badge3: "Meilleure économie",
  },
  ar: {
    pack: (qty) => (qty === 1 ? "باقة واحدة" : `${qty} باقات`),
    badge2: "الأكثر طلباً",
    badge3: "أفضل توفير",
  },
};

export function computeBundleTiers(price: number, locale: Locale = "fr"): BundleTier[] {
  const t = LABELS[locale];
  return [1, 2, 3].map((qty) => {
    const discount = DISCOUNTS[qty];
    const compareTotal = price * qty;
    const total = Math.round(compareTotal * (1 - discount));
    return {
      qty: qty as 1 | 2 | 3,
      label: t.pack(qty),
      badge: qty === 2 ? t.badge2 : qty === 3 ? t.badge3 : undefined,
      unitPrice: Math.round(total / qty),
      total,
      compareTotal,
      savings: compareTotal - total,
    };
  });
}
