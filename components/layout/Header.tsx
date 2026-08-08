"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const LOGO_URL =
  "https://res.cloudinary.com/diptsoc4h/image/upload/v1786179108/ChatGPT_Image_8_ao%C3%BBt_2026_09_51_07_bkntfg.png";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: localizedHref("/", locale), label: dict.nav.home },
    { href: localizedHref("/packs", locale), label: dict.nav.packs },
    { href: localizedHref("/contact", locale), label: dict.nav.contact },
  ];
  const homeHref = localizedHref("/", locale);
  const packsHref = localizedHref("/packs", locale);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      {/* Mobile: menu left / logo centered / language switcher right */}
      <div className="container-content grid h-16 grid-cols-3 items-center md:hidden">
        <button
          aria-label={open ? dict.nav.closeMenu : dict.nav.openMenu}
          className="flex h-10 w-10 items-center justify-self-start rounded-full text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link href={homeHref} className="justify-self-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_URL} alt="Bayti Pack" className="h-9 w-auto" />
        </Link>

        <div className="justify-self-end">
          <LanguageSwitcher locale={locale} />
        </div>
      </div>

      {/* Desktop */}
      <div className="container-content hidden h-16 items-center justify-between md:flex">
        <Link href={homeHref} className="flex items-center gap-2 font-bold text-ink">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO_URL} alt="Bayti Pack" className="h-9 w-auto" />
        </Link>

        <nav className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-brand-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} />
          <Link href={packsHref} className="btn-primary px-6 py-2.5 text-sm">
            {dict.nav.orderNow}
          </Link>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="container-content flex flex-col gap-1 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-neutral-700 hover:bg-brand-light"
              >
                {link.label}
              </Link>
            ))}
            <Link href={packsHref} onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              {dict.nav.orderNow}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
