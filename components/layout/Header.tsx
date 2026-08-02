"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChefHat } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/packs", label: "Nos Packs" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="container-content flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
            <ChefHat className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="text-lg">Bayti Pack</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

        <div className="hidden md:block">
          <Link href="/packs" className="btn-primary px-6 py-2.5 text-sm">
            Commander maintenant
          </Link>
        </div>

        <button
          aria-label="Ouvrir le menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
            <Link
              href="/packs"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              Commander maintenant
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
