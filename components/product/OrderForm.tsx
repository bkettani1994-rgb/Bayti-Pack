"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import type { Pack } from "@/types";
import { computeBundleTiers } from "@/lib/pricing";
import { formatDH } from "@/lib/utils";
import BundleSelector from "@/components/product/BundleSelector";

export default function OrderForm({
  pack,
  qty,
  setQty,
}: {
  pack: Pack;
  qty: 1 | 2 | 3;
  setQty: (qty: 1 | 2 | 3) => void;
}) {
  const tiers = computeBundleTiers(pack.price);
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
        <h3 className="mt-4 text-xl font-bold text-ink">Commande confirmée !</h3>
        <p className="mt-2 text-sm text-neutral-600">
          Merci ! Nous vous contactons très vite pour confirmer la livraison. Paiement à la réception.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl2 border border-black/5 bg-white p-6 shadow-soft sm:p-8">
      <div>
        <h3 className="text-xl font-bold text-ink">Passer ma commande</h3>
        <p className="mt-1 text-sm text-neutral-500">Paiement à la livraison. Aucune carte bancaire requise.</p>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-ink">Choisissez votre offre</p>
        <BundleSelector tiers={tiers} contents={pack.contents} selected={qty} onSelect={setQty} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">Nom complet</label>
          <input id="name" name="name" required placeholder="Votre nom" className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">Téléphone</label>
          <input id="phone" name="phone" type="tel" required placeholder="06 00 00 00 00" className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>

        <div>
          <label htmlFor="city" className="mb-1.5 block text-sm font-medium text-ink">Ville</label>
          <input id="city" name="city" required placeholder="Casablanca" className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-ink">Adresse</label>
          <input id="address" name="address" required placeholder="Rue, quartier, ville" className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600">Une erreur est survenue, veuillez réessayer.</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full text-lg disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Envoi...
          </>
        ) : (
          `Confirmer ma commande — ${formatDH(total)}`
        )}
      </button>
    </form>
  );
}
