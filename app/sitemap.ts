import type { MetadataRoute } from "next";
import { visiblePacks } from "@/data/packs";

const siteUrl = "https://www.baytipack.shop";

const staticPaths = [
  "",
  "/packs",
  "/contact",
  "/politique-de-confidentialite",
  "/conditions-generales",
  "/mentions-livraison",
];

function alternates(path: string) {
  return {
    languages: {
      fr: `${siteUrl}${path}`,
      ar: `${siteUrl}/ar${path}`,
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = staticPaths.flatMap((path) => [
    {
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: alternates(path),
    },
    {
      url: `${siteUrl}/ar${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: alternates(path),
    },
  ]);

  const productRoutes = visiblePacks.flatMap((pack) => {
    const path = `/packs/${pack.slug}`;
    return [
      {
        url: `${siteUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
        alternates: alternates(path),
      },
      {
        url: `${siteUrl}/ar${path}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
        alternates: alternates(path),
      },
    ];
  });

  return [...staticRoutes, ...productRoutes];
}
