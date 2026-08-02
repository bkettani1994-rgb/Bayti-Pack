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

export function computeBundleTiers(price: number): BundleTier[] {
  return [1, 2, 3].map((qty) => {
    const discount = DISCOUNTS[qty];
    const compareTotal = price * qty;
    const total = Math.round(compareTotal * (1 - discount));
    return {
      qty: qty as 1 | 2 | 3,
      label: qty === 1 ? "1 Pack" : `${qty} Packs`,
      badge: qty === 2 ? "Le plus populaire" : qty === 3 ? "Meilleure économie" : undefined,
      unitPrice: Math.round(total / qty),
      total,
      compareTotal,
      savings: compareTotal - total,
    };
  });
}
