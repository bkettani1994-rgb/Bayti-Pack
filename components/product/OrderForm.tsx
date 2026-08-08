"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { Pack } from "@/types";
import type { Locale } from "@/lib/i18n";
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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          city: form.get("city"),
          address: form.get("address"),
          packSlug: pack.slug,
          quantity: qty,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl2 border border-brand/30 bg-brand-light p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-brand-dark" />
        <h3 className="mt-4 text-xl font-bold text-ink">{f.successHeading}</h3>
        <p className="mt-2 text-sm text-neutral-600">{f.successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl2 border border-black/5 bg-white p-6 shadow-soft sm:p-8">
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

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full text-base animate-shake disabled:animate-none disabled:opacity-70"
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
