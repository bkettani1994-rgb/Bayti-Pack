"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/dictionaries";

export default function NotFound() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/ar") ? "ar" : "fr";
  const dict = getDictionary(locale);
  const backHref = locale === "ar" ? "/ar" : "/";

  return (
    <section className="flex flex-col items-center justify-center px-5 py-32 text-center">
      <h1 className="text-4xl font-bold text-ink">{dict.notFound.title}</h1>
      <p className="mt-3 text-neutral-500">{dict.notFound.message}</p>
      <Link href={backHref} className="btn-primary mt-8">
        {dict.notFound.backHome}
      </Link>
    </section>
  );
}
