import {
  Cylinder,
  Layers,
  FileText,
  Package,
  ShoppingBag,
  Box,
  Tag,
  Hand,
  Paperclip,
  Droplet,
  Wallet,
  Home,
  Truck,
  Banknote,
  ShieldCheck,
  Leaf,
  Sparkles,
  PackageCheck,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/types";

export const iconMap: Record<IconKey, LucideIcon> = {
  foil: Cylinder,
  wrap: Layers,
  parchment: FileText,
  paperTowel: Cylinder,
  freezerBag: Package,
  zipBag: ShoppingBag,
  container: Box,
  label: Tag,
  gloves: Hand,
  clip: Paperclip,
  sponge: Droplet,
  savings: Wallet,
  daily: Home,
  truck: Truck,
  cashOnDelivery: Banknote,
  shield: ShieldCheck,
  leaf: Leaf,
  sparkles: Sparkles,
  package: PackageCheck,
};

export function AppIcon({
  icon,
  className,
}: {
  icon: IconKey;
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} strokeWidth={1.75} />;
}
