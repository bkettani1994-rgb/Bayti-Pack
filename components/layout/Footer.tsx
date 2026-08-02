import Link from "next/link";
import { ChefHat, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-neutral-50">
      <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
              <ChefHat className="h-5 w-5" />
            </span>
            <span className="text-lg">Bayti Pack</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-neutral-500">
            Les indispensables de votre cuisine, réunis dans des packs économiques.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Navigation</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-500">
            <li><Link href="/" className="hover:text-brand-dark">Accueil</Link></li>
            <li><Link href="/packs" className="hover:text-brand-dark">Nos Packs</Link></li>
            <li><Link href="/contact" className="hover:text-brand-dark">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Informations</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-500">
            <li><Link href="/mentions-livraison" className="hover:text-brand-dark">Mentions livraison</Link></li>
            <li><Link href="/conditions-generales" className="hover:text-brand-dark">Conditions générales</Link></li>
            <li><Link href="/politique-de-confidentialite" className="hover:text-brand-dark">Politique de confidentialité</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-500">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-dark" /> +212 6 00 00 00 00</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-dark" /> contact@baytipack.ma</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-dark" /> Maroc — Livraison partout</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5 py-6">
        <p className="container-content text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} Bayti Pack. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
