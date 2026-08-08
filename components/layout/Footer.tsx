import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const LOGO_URL =
  "https://res.cloudinary.com/diptsoc4h/image/upload/v1786179108/ChatGPT_Image_8_ao%C3%BBt_2026_09_51_07_bkntfg.png";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-black/5 bg-neutral-50">
      <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href={localizedHref("/", locale)} className="flex items-center gap-2 font-bold text-ink">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} alt={dict.siteName} className="h-9 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-neutral-500">{dict.footer.tagline}</p>
          <Link href={localizedHref("/packs", locale)} className="btn-primary mt-5 px-6 py-2.5 text-sm">
            {dict.nav.orderNow}
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{dict.footer.navigationHeading}</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-500">
            <li><Link href={localizedHref("/", locale)} className="hover:text-brand-dark">{dict.nav.home}</Link></li>
            <li><Link href={localizedHref("/packs", locale)} className="hover:text-brand-dark">{dict.nav.packs}</Link></li>
            <li><Link href={localizedHref("/contact", locale)} className="hover:text-brand-dark">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{dict.footer.informationsHeading}</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-500">
            <li><Link href={localizedHref("/mentions-livraison", locale)} className="hover:text-brand-dark">{dict.footer.shippingLink}</Link></li>
            <li><Link href={localizedHref("/conditions-generales", locale)} className="hover:text-brand-dark">{dict.footer.termsLink}</Link></li>
            <li><Link href={localizedHref("/politique-de-confidentialite", locale)} className="hover:text-brand-dark">{dict.footer.privacyLink}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-ink">{dict.footer.contactHeading}</h3>
          <ul className="mt-4 space-y-3 text-sm text-neutral-500">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand-dark" /> +212 6 00 00 00 00</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand-dark" /> contact@baytipack.ma</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-dark" /> {dict.contact.zoneValue}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/5 py-6">
        <p className="container-content text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} {dict.siteName}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
