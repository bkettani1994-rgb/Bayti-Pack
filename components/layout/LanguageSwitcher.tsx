"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { localizedHref, stripLocaleFromPath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const pathname = usePathname();
  const cleanPath = stripLocaleFromPath(pathname);

  return (
    <div className={cn("flex items-center gap-0.5 rounded-full border border-black/10 p-0.5 text-xs font-semibold", className)}>
      <Link
        href={localizedHref(cleanPath, "fr")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          locale === "fr" ? "bg-brand text-white" : "text-neutral-500 hover:text-ink"
        )}
      >
        FR
      </Link>
      <Link
        href={localizedHref(cleanPath, "ar")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          locale === "ar" ? "bg-brand text-white" : "text-neutral-500 hover:text-ink"
        )}
      >
        AR
      </Link>
    </div>
  );
}
