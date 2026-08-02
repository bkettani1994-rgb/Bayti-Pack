"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
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
        <h3 className="mt-4 text-xl font-bold text-ink">Message envoyé !</h3>
        <p className="mt-2 text-sm text-neutral-600">Nous vous répondrons dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl2 border border-black/5 bg-white p-6 shadow-soft sm:p-8">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">Nom</label>
        <input id="name" name="name" required className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">Email</label>
        <input id="email" name="email" type="email" required className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">Message</label>
        <textarea id="message" name="message" rows={5} required className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
      </div>

      {status === "error" && <p className="text-sm text-red-600">Une erreur est survenue, veuillez réessayer.</p>}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-70">
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" /> Envoi...
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}
