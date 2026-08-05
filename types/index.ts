export type IconKey =
  | "foil"
  | "wrap"
  | "parchment"
  | "paperTowel"
  | "freezerBag"
  | "zipBag"
  | "container"
  | "label"
  | "gloves"
  | "clip"
  | "sponge"
  | "savings"
  | "daily"
  | "truck"
  | "cashOnDelivery"
  | "shield"
  | "leaf"
  | "sparkles"
  | "package";

export type PackItem = {
  name: string;
  icon: IconKey;
};

export type Advantage = {
  title: string;
  description: string;
  icon: IconKey;
};

export type Pack = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  price: number;
  compareAtPrice: number;
  itemsCount: number;
  description: string;
  contents: PackItem[];
  advantages: Advantage[];
  featured?: boolean;
  heroImage?: string;
  thumbnail?: string;
};
