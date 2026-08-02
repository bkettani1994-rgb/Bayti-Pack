import type { ReactNode } from "react";

export default function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-content max-w-3xl">
        <h1 className="section-title">{title}</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-neutral-600 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </section>
  );
}
