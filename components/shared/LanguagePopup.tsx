"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { localizedHref, stripLocaleFromPath } from "@/lib/i18n";

const STORAGE_KEY = "bayti-language-chosen";

export default function LanguagePopup({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
    }
  }, []);

  function choose(target: Locale) {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
    if (target !== locale) {
      router.push(localizedHref(stripLocaleFromPath(pathname), target));
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-xl2 bg-white p-6 text-center shadow-lift sm:p-8">
        <p className="text-lg font-bold text-ink">Choisissez votre langue</p>
        <p dir="rtl" className="mt-1 font-arabic text-lg font-bold text-ink">
          اختاروا لغتكم
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={() => choose("fr")}
            className="btn-primary w-full justify-center"
          >
            Français
          </button>
          <button
            type="button"
            onClick={() => choose("ar")}
            className="btn-secondary w-full justify-center font-arabic"
          >
            العربية
          </button>
        </div>
      </div>
    </div>
  );
}
