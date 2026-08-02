import { NextResponse } from "next/server";
import { getPackBySlug } from "@/data/packs";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, city, address, packSlug, quantity } = body ?? {};

  if (!name || !phone || !city || !address || !packSlug || !quantity) {
    return NextResponse.json({ error: "Champs manquants." }, { status: 400 });
  }

  const pack = getPackBySlug(packSlug);
  if (!pack) {
    return NextResponse.json({ error: "Pack introuvable." }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
