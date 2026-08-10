import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { getPackBySlug } from "@/data/packs";
import { computeBundleTiers } from "@/lib/pricing";
import { isLocale } from "@/lib/i18n";
import { META_PIXEL_ID } from "@/lib/meta-pixel";

function normalizePhone(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("0")) return "212" + digits.slice(1);
  return digits;
}

function sha256(value: string): string {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

async function sendConversionEvent({
  phone,
  total,
  eventId,
  request,
}: {
  phone: string;
  total: number;
  eventId?: string;
  request: Request;
}) {
  const accessToken = process.env.META_CONVERSIONS_API_TOKEN;
  if (!accessToken) return;

  const clientIp = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const userAgent = request.headers.get("user-agent") ?? undefined;
  const sourceUrl = request.headers.get("referer") ?? "https://www.baytipack.ma";

  const payload = {
    data: [
      {
        event_name: "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        action_source: "website",
        event_source_url: sourceUrl,
        user_data: {
          ph: [sha256(normalizePhone(phone))],
          ...(clientIp ? { client_ip_address: clientIp } : {}),
          ...(userAgent ? { client_user_agent: userAgent } : {}),
        },
        custom_data: {
          value: total,
          currency: "MAD",
        },
      },
    ],
  };

  try {
    await fetch(`https://graph.facebook.com/v19.0/${META_PIXEL_ID}/events?access_token=${accessToken}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    // Best-effort: never fail the order because the conversion event couldn't be sent.
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, city, address, packSlug, quantity, locale, eventId } = body ?? {};

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

  await sendConversionEvent({ phone, total, eventId, request });

  return NextResponse.json({ ok: true });
}
