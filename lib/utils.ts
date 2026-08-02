import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDH(amount: number) {
  return `${amount.toLocaleString("fr-FR")} DH`;
}
