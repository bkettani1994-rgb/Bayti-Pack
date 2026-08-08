import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionaries";

const LOGO_URL =
  "https://res.cloudinary.com/diptsoc4h/image/upload/v1786196300/bayti_pack_logo_white_1_jpce7z.png";

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="bg-brand text-white">
      <div className="container-content grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href={localizedHref("/", locale)} className="flex items-center gap-2 font-bold text-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} alt={dict.siteName} className="h-20 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/85">{dict.footer.tagline}</p>
          <Link
            href={localizedHref("/packs", locale)}
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-neutral-100"
          >
            {dict.nav.orderNow}
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{dict.footer.navigationHeading}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li><Link href={localizedHref("/", locale)} className="hover:text-white">{dict.nav.home}</Link></li>
            <li><Link href={localizedHref("/packs", locale)} className="hover:text-white">{dict.nav.packs}</Link></li>
            <li><Link href={localizedHref("/contact", locale)} className="hover:text-white">{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{dict.footer.informationsHeading}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li><Link href={localizedHref("/mentions-livraison", locale)} className="hover:text-white">{dict.footer.shippingLink}</Link></li>
            <li><Link href={localizedHref("/conditions-generales", locale)} className="hover:text-white">{dict.footer.termsLink}</Link></li>
            <li><Link href={localizedHref("/politique-de-confidentialite", locale)} className="hover:text-white">{dict.footer.privacyLink}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{dict.footer.contactHeading}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-white" /> +212 6 00 00 00 00</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-white" /> contact@baytipack.ma</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-white" /> {dict.contact.zoneValue}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 py-6">
        <p className="container-content text-center text-xs text-white/70">
          © {new Date().getFullYear()} {dict.siteName}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
