"use client";

import { formatDH } from "@/lib/utils";

export default function StickyAddToCart({ total, onOrder }: { total: number; onOrder: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/5 bg-white/95 p-3 shadow-lift backdrop-blur lg:hidden">
      <div className="container-content flex items-center justify-between gap-4">
        <span className="text-lg font-bold text-brand-dark">{formatDH(total)}</span>
        <button onClick={onOrder} className="btn-primary flex-1 py-3 text-sm">
          Commander maintenant
        </button>
      </div>
    </div>
  );
}
