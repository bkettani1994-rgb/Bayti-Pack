import type { Pack } from "@/types";
import type { Testimonial } from "@/data/testimonials";
import { arPackContent } from "@/data/packs.ar";
import { testimonials } from "@/data/testimonials";
import { testimonialsAr } from "@/data/testimonials.ar";

export type Locale = "fr" | "ar";

export const locales: Locale[] = ["fr", "ar"];
export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePack(pack: Pack, locale: Locale): Pack {
  if (locale === "fr") return pack;

  const t = arPackContent[pack.slug];
  if (!t) return pack;

  return {
    ...pack,
    name: t.name,
    shortName: t.shortName,
    tagline: t.tagline,
    description: t.description,
    imageAlt: t.imageAlt ?? pack.imageAlt,
    contents: pack.contents.map((item, i) => ({
      ...item,
      name: t.contents[i]?.name ?? item.name,
      imageAlt: t.contents[i]?.imageAlt ?? item.imageAlt,
      description: t.contents[i]?.description ?? item.description,
    })),
    advantages: pack.advantages.map((adv, i) => ({
      ...adv,
      title: t.advantages[i]?.title ?? adv.title,
      description: t.advantages[i]?.description ?? adv.description,
    })),
  };
}

/**
 * Builds the href for the same page in the other locale, given the current
 * (locale-stripped) pathname — e.g. "/packs/cuisine-essentielle".
 */
export function localizedHref(path: string, locale: Locale): string {
  const clean = path === "/" ? "" : path;
  return locale === "fr" ? clean || "/" : `/ar${clean}`;
}

export function getTestimonials(locale: Locale): Testimonial[] {
  return locale === "ar" ? testimonialsAr : testimonials;
}

/**
 * Strips a leading "/ar" or "/fr" segment, returning the locale-agnostic
 * path. The "/fr" case matters because after a middleware rewrite,
 * usePathname() reflects the rewritten (internal) URL rather than the
 * pretty one shown in the address bar.
 */
export function stripLocaleFromPath(pathname: string): string {
  if (pathname === "/ar" || pathname === "/fr") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3);
  if (pathname.startsWith("/fr/")) return pathname.slice(3);
  return pathname;
}
