import { NextResponse } from "next/server";
import { getPackBySlug } from "@/data/packs";
import { computeBundleTiers } from "@/lib/pricing";
import { isLocale } from "@/lib/i18n";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, city, address, packSlug, quantity, locale } = body ?? {};

  if (!name || !phone || !city || !address || !packSlug || !quantity) {
    return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
  }

  const pack = getPackBySlug(packSlug);
  if (!pack) {
    return NextResponse.json({ error: "Pack introuvable." }, { status: 400 });
  }

  const qty = Number(quantity);
  if (![1, 2, 3].includes(qty)) {
    return NextResponse.json({ error: "Quantité invalide." }, { status: 400 });
  }

  const resolvedLocale = isLocale(locale) ? locale : "fr";
  const total = computeBundleTiers(pack.price, resolvedLocale)[qty - 1].total;

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          city,
          address,
          packName: pack.name,
          quantity: qty,
          total,
          locale: resolvedLocale,
        }),
      });
    } catch {
      return NextResponse.json({ error: "Échec de l'enregistrement de la commande." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
