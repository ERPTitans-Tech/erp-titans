// FAQ block that uses the full content width: heading and a short prompt on the left
// (sticky on desktop), questions on the right. Avoids a narrow centred column with empty sides.

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionHeader";

export default function FaqSplit({
  n,
  label = "FAQ",
  title,
  intro,
  faqs,
}: {
  n?: string | number;
  label?: string;
  title: string;
  intro: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <SectionLabel n={n}>{label}</SectionLabel>
        <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-[#003D82]">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-[#64748B]">{intro}</p>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#003D82] ring-1 ring-[#CBD5E1] transition-colors hover:ring-[#94A3B8]"
        >
          Ask us directly <ArrowRight size={15} />
        </Link>
      </div>
      <div className="space-y-3">
        {faqs.map((f) => (
          <details key={f.q} className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 open:shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0F172A]">
              {f.q}
              <ChevronDown size={18} className="shrink-0 text-[#003D82] transition-transform group-open:rotate-180" />
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
