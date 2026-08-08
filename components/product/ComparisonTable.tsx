import { Check, X } from "lucide-react";
import type { Dictionary } from "@/lib/dictionaries";
import Reveal from "@/components/shared/Reveal";

export default function ComparisonTable({ comparison }: { comparison: Dictionary["product"]["comparison"] }) {
  return (
    <div className="bg-neutral-50 py-14 sm:py-16">
      <div className="container-content">
        <Reveal>
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">{comparison.heading}</h2>
        </Reveal>

        {/* Mobile: stacked cards, no horizontal scroll */}
        <Reveal delay={0.1} className="mt-8 space-y-2.5 sm:hidden">
          {comparison.rows.map((row) => (
            <div key={row} className="rounded-xl2 border border-black/5 bg-white p-4">
              <p className="text-sm text-ink">{row}</p>
              <div className="mt-3 flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-brand-dark">
                  <Check className="h-4 w-4 flex-shrink-0" strokeWidth={2.5} />
                  {comparison.ourColumn}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-neutral-400">
                  <X className="h-4 w-4 flex-shrink-0" strokeWidth={2.5} />
                  {comparison.othersColumn}
                </span>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Desktop: full table */}
        <Reveal delay={0.1} className="mt-8 hidden sm:block">
          <table className="w-full overflow-hidden rounded-xl2 border border-black/5 bg-white text-sm">
            <thead>
              <tr className="border-b border-black/5">
                <th className="w-1/2 p-4 text-left font-medium text-neutral-500 rtl:text-right"> </th>
                <th className="p-4 text-center font-semibold text-brand-dark">{comparison.ourColumn}</th>
                <th className="p-4 text-center font-medium text-neutral-500">{comparison.othersColumn}</th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, i) => (
                <tr key={row} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50/60"}>
                  <td className="p-4 text-ink">{row}</td>
                  <td className="p-4">
                    <Check className="mx-auto h-5 w-5 text-brand-dark" strokeWidth={2.5} />
                  </td>
                  <td className="p-4">
                    <X className="mx-auto h-5 w-5 text-neutral-300" strokeWidth={2.5} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </div>
  );
}
