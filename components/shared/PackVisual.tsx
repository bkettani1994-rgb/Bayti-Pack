import Image from "next/image";
import type { Pack } from "@/types";
import { AppIcon } from "@/components/shared/icon-map";
import { PackageCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PackVisual({
  pack,
  className,
  compact = false,
}: {
  pack: Pack;
  className?: string;
  compact?: boolean;
}) {
  const chips = pack.contents.slice(0, 4);
  const positions = [
    "left-3 top-3 sm:left-5 sm:top-5",
    "right-3 top-8 sm:right-5 sm:top-12",
    "left-4 bottom-6 sm:left-6 sm:bottom-10",
    "right-4 bottom-3 sm:right-6 sm:bottom-5",
  ];
  const delays = ["", "[animation-delay:0.6s]", "[animation-delay:1.2s]", "[animation-delay:1.8s]"];

  return (
    <div
      className={cn(
        "relative aspect-square w-full overflow-hidden rounded-xl2 border border-black/5 bg-gradient-to-br from-brand-light via-white to-neutral-50",
        className
      )}
    >
      {pack.thumbnail ? (
        <Image
          src={pack.thumbnail}
          alt={pack.name}
          fill
          sizes="(min-width: 1024px) 400px, 50vw"
          className="object-cover"
        />
      ) : (
        <>
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/15 blur-2xl" />
          <div className="absolute -bottom-12 -left-8 h-36 w-36 rounded-full bg-brand/10 blur-2xl" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "flex items-center justify-center rounded-2xl bg-white shadow-card animate-float",
                compact ? "h-20 w-20" : "h-24 w-24 sm:h-28 sm:w-28"
              )}
            >
              <PackageCheck className={cn("text-brand", compact ? "h-10 w-10" : "h-12 w-12 sm:h-14 sm:w-14")} strokeWidth={1.5} />
            </div>
          </div>

          {!compact &&
            chips.map((item, i) => (
              <div
                key={item.name}
                className={cn(
                  "absolute flex items-center gap-1.5 rounded-xl bg-white/95 px-2.5 py-1.5 shadow-soft animate-float",
                  positions[i],
                  delays[i]
                )}
              >
                <AppIcon icon={item.icon} className="h-4 w-4 text-brand-dark" />
              </div>
            ))}
        </>
      )}

      {pack.featured && (
        <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
          ⭐ Best-seller
        </span>
      )}
    </div>
  );
}
