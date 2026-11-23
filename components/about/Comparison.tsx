"use client";

import { m } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const genericPoints = [
  "We do ERP implementation",
  "We work for any industry",
  "We build custom solutions for everything",
  "Price is our only advantage",
];

const specialistPoints = [
  "We fix broken ERP implementations",
  "Specialized in Manufacturing, Distribution & Cannabis",
  "Match systems to business, not vice versa",
  "Expertise is our competitive edge",
];

export default function Comparison() {
  return (
    <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24">
      <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={2}
          label="How we're different"
          title="Specialists vs. Generic Implementers"
          text="There's a world of difference in the results."
          align="center"
        />

        <div className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col rounded-[24px] bg-white p-8 ring-1 ring-[#E2E8F0]"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
                <XCircle size={22} />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#94A3B8]">The usual approach</div>
                <h3 className="text-xl font-bold text-[#475569]">Generic Implementers</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {genericPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] text-[#64748B]">
                  <XCircle size={19} className="mt-0.5 shrink-0 text-slate-300" />
                  {p}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex flex-col overflow-hidden rounded-[24px] bg-white p-8 shadow-[0_20px_50px_rgba(0,61,130,0.12)] ring-2 ring-[#003D82]"
          >
            <span className="absolute right-6 top-6 rounded-full bg-[#003D82] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">ERP Titans</span>
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#003D82] text-white">
                <CheckCircle2 size={22} />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#0EA5E9]">Our approach</div>
                <h3 className="text-xl font-bold text-[#003D82]">ERP Specialists</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {specialistPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[16px] font-semibold text-[#0F172A]">
                  <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#16A34A]" />
                  {p}
                </li>
              ))}
            </ul>
          </m.div>
        </div>
      </div>
    </section>
  );
}
