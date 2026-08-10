import type { Pack } from "@/types";

export const packs: Pack[] = [
  {
    slug: "cuisine-essentielle",
    name: "Pack Cuisine Essentielle",
    shortName: "Cuisine Essentielle",
    tagline: "1 Pack = 6 mois d'utilisation",
    price: 179,
    compareAtPrice: 219,
    itemsCount: 5,
    thumbnail:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1786303583/ChatGPT_Image_9_ao%C3%BBt_2026_20_22_33_c8fvnj.png",
    mainImage:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1786303583/ChatGPT_Image_9_ao%C3%BBt_2026_20_22_33_c8fvnj.png",
    imageAlt:
      "Pack Cuisine Essentielle Bayti Pack complet avec papier aluminium, film alimentaire, papier cuisson, sacs étirables jetables et sacs poubelle bleus 30L",
    description:
      "Le pack indispensable pour équiper votre cuisine au quotidien. Papier aluminium, film alimentaire, papier cuisson, sacs étirables à couvercle jetable et sacs poubelle bleus 30L : tout ce qu'il faut pour cuisiner, conserver, emballer et jeter sans jamais tomber en rupture.",
    contents: [
      {
        name: "Papier Aluminium 60 mètres",
        icon: "foil",
        image:
          "https://res.cloudinary.com/diptsoc4h/image/upload/v1786178466/Design_sans_titre_92_zjjz83.png",
        imageAlt: "Rouleau de papier aluminium alimentaire 60 mètres Bayti Pack",
      },
      {
        name: "Film alimentaire 100 mètres",
        icon: "wrap",
        image:
          "https://res.cloudinary.com/diptsoc4h/image/upload/v1786178467/Gemini_Generated_Image_dx26ubdx26ubdx26_vh2zmr.png",
        imageAlt: "Rouleau de film alimentaire étirable 100 mètres Bayti Pack",
      },
      {
        name: "Papier cuisson 20 mètres",
        icon: "parchment",
        image:
          "https://res.cloudinary.com/diptsoc4h/image/upload/v1786178466/Design_sans_titre_91_vwiuap.png",
        imageAlt: "Rouleau de papier cuisson sulfurisé 20 mètres Bayti Pack",
      },
      {
        name: "Sac étirable couvercle jetable x100",
        icon: "wrap",
        image:
          "https://res.cloudinary.com/diptsoc4h/image/upload/v1786182518/Design_sans_titre_93_eugcei.png",
        imageAlt: "Sacs étirables à couvercle jetable x100 Bayti Pack",
      },
      {
        name: "Sacs poubelle bleus 30L x40",
        icon: "zipBag",
        image:
          "https://res.cloudinary.com/diptsoc4h/image/upload/v1786304320/ChatGPT_Image_9_ao%C3%BBt_2026_20_35_45_haeg3q.webp",
        imageAlt: "Sacs poubelle bleus 30 litres x40 Bayti Pack",
      },
    ],
    advantages: [
      {
        title: "Le plus complet",
        description: "5 produits essentiels réunis pour couvrir tous vos besoins de base en cuisine.",
        icon: "package",
      },
      {
        title: "Qualité durable",
        description: "Des matériaux résistants pensés pour un usage quotidien intensif.",
        icon: "shield",
      },
      {
        title: "Prix économique",
        description: "Moins cher que d'acheter chaque produit séparément.",
        icon: "savings",
      },
    ],
    featured: true,
    heroImage:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1785750810/ChatGPT_Image_3_ao%C3%BBt_2026_10_46_40_tsbjed.png",
  },
  {
    slug: "pack-rangement",
    hidden: true,
    name: "Pack Rangement",
    shortName: "Rangement",
    tagline: "Organisez votre cuisine sans effort",
    price: 119,
    compareAtPrice: 169,
    itemsCount: 5,
    thumbnail:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1785940797/ChatGPT_Image_5_ao%C3%BBt_2026_15_38_44_bjrppo.png",
    description:
      "Reprenez le contrôle de vos placards et de votre réfrigérateur. Film alimentaire, papier aluminium, sacs zip, boîtes réutilisables et étiquettes autocollantes pour une cuisine parfaitement organisée et des aliments conservés plus longtemps.",
    contents: [
      { name: "Film alimentaire", icon: "wrap" },
      { name: "Papier aluminium", icon: "foil" },
      { name: "Sacs Zip alimentaires", icon: "zipBag" },
      { name: "Boîtes alimentaires réutilisables", icon: "container" },
      { name: "Étiquettes autocollantes", icon: "label" },
    ],
    advantages: [
      {
        title: "Cuisine organisée",
        description: "Des boîtes réutilisables et des étiquettes pour tout retrouver en un coup d'œil.",
        icon: "package",
      },
      {
        title: "Zéro gaspillage",
        description: "Conservez vos aliments plus longtemps grâce à un rangement optimal.",
        icon: "leaf",
      },
      {
        title: "Réutilisable",
        description: "Des boîtes solides que vous utiliserez pendant des mois.",
        icon: "shield",
      },
    ],
    heroImage:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1785750810/ChatGPT_Image_3_ao%C3%BBt_2026_10_53_18_osbxpf.png",
  },
  {
    slug: "pack-bbq-cuisine",
    hidden: true,
    name: "Pack BBQ & Cuisine",
    shortName: "BBQ & Cuisine",
    tagline: "Parfait pour les grillades et la cuisson",
    price: 109,
    compareAtPrice: 159,
    itemsCount: 5,
    thumbnail:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1785940937/ChatGPT_Image_5_ao%C3%BBt_2026_15_41_50_ihplau.png",
    description:
      "Le compagnon idéal des barbecues et des sessions cuisine entre amis ou en famille. Papier aluminium renforcé, papier cuisson, film alimentaire, gants jetables et essuie-tout pour cuisiner et nettoyer sans prise de tête.",
    contents: [
      { name: "Papier aluminium renforcé", icon: "foil" },
      { name: "Papier cuisson", icon: "parchment" },
      { name: "Film alimentaire", icon: "wrap" },
      { name: "Gants jetables", icon: "gloves" },
      { name: "Rouleau essuie-tout", icon: "paperTowel" },
    ],
    advantages: [
      {
        title: "Résistant à la chaleur",
        description: "Aluminium renforcé conçu pour la cuisson et le barbecue.",
        icon: "shield",
      },
      {
        title: "Hygiène assurée",
        description: "Gants jetables inclus pour manipuler viandes et braises en toute sécurité.",
        icon: "sparkles",
      },
      {
        title: "Prêt à l'emploi",
        description: "Tout le nécessaire pour vos grillades dans un seul pack.",
        icon: "package",
      },
    ],
    heroImage:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1785752168/ChatGPT_Image_3_ao%C3%BBt_2026_10_54_41_enndjh.png",
  },
  {
    slug: "pack-congelation",
    hidden: true,
    name: "Pack Congélation",
    shortName: "Congélation",
    tagline: "Conservez plus, gaspillez moins",
    price: 89,
    compareAtPrice: 129,
    itemsCount: 5,
    thumbnail:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1785941112/ChatGPT_Image_5_ao%C3%BBt_2026_15_44_39_q03okz.png",
    description:
      "Congelez et organisez vos aliments comme un pro. Papier aluminium, film alimentaire, sacs de congélation, clips de fermeture et étiquettes alimentaires pour un congélateur toujours bien rangé.",
    contents: [
      { name: "Papier aluminium", icon: "foil" },
      { name: "Film alimentaire", icon: "wrap" },
      { name: "Sacs congélation", icon: "freezerBag" },
      { name: "Clips de fermeture", icon: "clip" },
      { name: "Étiquettes alimentaires", icon: "label" },
    ],
    advantages: [
      {
        title: "Conservation longue durée",
        description: "Gardez vos aliments frais plus longtemps au congélateur.",
        icon: "shield",
      },
      {
        title: "Prix le plus accessible",
        description: "Le pack le plus économique de la gamme Bayti Pack.",
        icon: "savings",
      },
      {
        title: "Facile à organiser",
        description: "Étiquettes et clips pour un congélateur toujours clair.",
        icon: "package",
      },
    ],
    heroImage:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1785762799/ChatGPT_Image_3_ao%C3%BBt_2026_14_13_03_fogtrb.png",
  },
  {
    slug: "pack-economie-maison",
    hidden: true,
    name: "Pack Économie Maison",
    shortName: "Économie Maison",
    tagline: "L'essentiel pour toute la maison",
    price: 99,
    compareAtPrice: 139,
    itemsCount: 5,
    thumbnail:
      "https://res.cloudinary.com/diptsoc4h/image/upload/v1785941297/ChatGPT_Image_5_ao%C3%BBt_2026_15_48_06_mb3nfb.png",
    description:
      "Un pack complet pour l'entretien et la cuisine du quotidien. Papier aluminium, film alimentaire, essuie-tout, papier cuisson et éponge double face : la maison bien tenue sans multiplier les achats.",
    contents: [
      { name: "Papier aluminium", icon: "foil" },
      { name: "Film alimentaire", icon: "wrap" },
      { name: "Rouleau essuie-tout", icon: "paperTowel" },
      { name: "Papier cuisson", icon: "parchment" },
      { name: "Éponge double face", icon: "sponge" },
    ],
    advantages: [
      {
        title: "Polyvalent",
        description: "Utile en cuisine comme pour l'entretien de toute la maison.",
        icon: "package",
      },
      {
        title: "Économique",
        description: "Un excellent rapport qualité-prix pour un usage quotidien.",
        icon: "savings",
      },
      {
        title: "Toujours utile",
        description: "Des produits que vous utilisez chaque semaine, jamais en trop.",
        icon: "leaf",
      },
    ],
  },
];

export const visiblePacks = packs.filter((p) => !p.hidden);

export function getPackBySlug(slug: string): Pack | undefined {
  return packs.find((p) => p.slug === slug);
}

export function getOtherPacks(slug: string): Pack[] {
  return visiblePacks.filter((p) => p.slug !== slug);
}
