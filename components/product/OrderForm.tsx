"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import type { Pack } from "@/types";
import { localizedHref, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import { computeBundleTiers } from "@/lib/pricing";
import { formatDH } from "@/lib/utils";
import BundleSelector from "@/components/product/BundleSelector";

export default function OrderForm({
  pack,
  locale,
  dict,
  qty,
  setQty,
}: {
  pack: Pack;
  locale: Locale;
  dict: Dictionary;
  qty: 1 | 2 | 3;
  setQty: (qty: 1 | 2 | 3) => void;
}) {
  const f = dict.product.orderForm;
  const tiers = computeBundleTiers(pack.price, locale);
  const total = tiers[qty - 1].total;
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const city = String(form.get("city") ?? "");
    const address = String(form.get("address") ?? "");

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          city,
          address,
          packSlug: pack.slug,
          quantity: qty,
          locale,
        }),
      });
      if (!res.ok) throw new Error("failed");

      const params = new URLSearchParams({
        packSlug: pack.slug,
        quantity: String(qty),
        total: String(total),
        name,
        phone,
        city,
        address,
      });
      router.push(`${localizedHref("/merci", locale)}?${params.toString()}`);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl2 border-2 border-promo bg-white p-6 shadow-soft sm:p-8">
      <div>
        <h3 className="text-center text-xl font-bold text-ink">{f.offerLabel}</h3>
        <p className="mb-4 mt-1.5 text-center text-sm text-neutral-500">{f.deliveryHint}</p>
        <BundleSelector
          tiers={tiers}
          selected={qty}
          onSelect={setQty}
          perPackLabel={dict.product.bundle.perPack}
          saveLabel={dict.product.bundle.save}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">{f.nameLabel}</label>
          <input id="name" name="name" required placeholder={f.namePlaceholder} className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">{f.phoneLabel}</label>
          <input id="phone" name="phone" type="tel" required placeholder={f.phonePlaceholder} className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>

        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-ink">{f.cityLabel}</label>
          <input id="city" name="city" required placeholder={f.cityPlaceholder} className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-ink">{f.addressLabel}</label>
          <input id="address" name="address" required placeholder={f.addressPlaceholder} className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">{f.errorMessage}</p>
      )}

      <div className="flex items-center justify-between rounded-lg bg-brand-light px-4 py-3 text-sm">
        <span className="text-ink">{f.freeDelivery.label}</span>
        <span className="font-semibold text-brand-dark">{f.freeDelivery.value}</span>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full text-sm animate-shake disabled:animate-none disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> {f.submitting}
          </>
        ) : (
          `${dict.product.confirmPrefix}${formatDH(total)}`
        )}
      </button>
    </form>
  );
}
