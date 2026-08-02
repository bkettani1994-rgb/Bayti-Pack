import type { MetadataRoute } from "next";
import { packs } from "@/data/packs";

const siteUrl = "https://www.baytipack.ma";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/packs",
    "/contact",
    "/politique-de-confidentialite",
    "/conditions-generales",
    "/mentions-livraison",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = packs.map((pack) => ({
    url: `${siteUrl}/packs/${pack.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...productRoutes];
}
