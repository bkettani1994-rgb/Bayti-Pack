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

        <Reveal delay={0.1} className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[480px] overflow-hidden rounded-xl2 border border-black/5 bg-white text-sm">
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
