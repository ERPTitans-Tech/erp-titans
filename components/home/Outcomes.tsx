"use client";

import { useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { CheckCircle2, ArrowRight, Info, FlaskConical, FileCheck2, BarChart3 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

// Illustrative before/after picture of a typical recovery. Not client data.
const metrics = [
  { label: "Month-end close", unit: "days", before: 15, after: 5, max: 20, lowerIsBetter: true },
  { label: "Report turnaround", unit: "hours", before: 72, after: 4, max: 80, lowerIsBetter: true },
  { label: "Inventory accuracy", unit: "%", before: 82, after: 98, max: 100, lowerIsBetter: false },
  { label: "Work done in spreadsheets", unit: "%", before: 60, after: 10, max: 100, lowerIsBetter: true },
  { label: "Active user adoption", unit: "%", before: 45, after: 92, max: 100, lowerIsBetter: false },
];

const fmt = (v: number, unit: string) => (unit === "%" ? `${v}%` : `${v} ${unit}`);

export default function Outcomes() {
  const [after, setAfter] = useState(true);

  return (
    <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24" id="outcomes">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={5}
          label="Outcomes"
          title="What A Successful Recovery Looks Like"
          text="We don't measure success by technical milestones or software installed. We measure it by the tangible business outcomes that drive your growth."
        />

        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          {/* Before / after chart */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] bg-white p-7 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0] sm:p-8"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">Recovery scorecard</span>
                <div className="mt-2">
                  <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-dashed border-[#003D82]/30 bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-semibold text-[#003D82]">
                    <Info size={12} /> Illustrative example · not client data
                  </span>
                </div>
              </div>
              <div className="inline-flex rounded-full bg-[#F1F5F9] p-1" role="tablist" aria-label="Before or after recovery">
                {[
                  { k: false, label: "Before" },
                  { k: true, label: "After recovery" },
                ].map((o) => (
                  <button
                    key={o.label}
                    role="tab"
                    aria-selected={after === o.k}
                    onClick={() => setAfter(o.k)}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                      after === o.k ? "text-white" : "text-[#475569] hover:text-[#0F172A]"
                    }`}
                  >
                    {after === o.k && (
                      <m.span
                        layoutId="outcomes-toggle"
                        className={`absolute inset-0 rounded-full ${o.k ? "bg-[#003D82]" : "bg-[#64748B]"}`}
                        transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      />
                    )}
                    <span className="relative">{o.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {metrics.map((row) => {
                const v = after ? row.after : row.before;
                const improved = row.lowerIsBetter ? row.after < row.before : row.after > row.before;
                const change = row.unit === "%" ? `${Math.abs(row.after - row.before)} pts` : `${Math.round((Math.abs(row.before - row.after) / row.before) * 100)}%`;
                return (
                  <div key={row.label}>
                    <div className="mb-2 flex items-baseline justify-between gap-3">
                      <span className="text-sm font-semibold text-[#475569]">
                        {row.label}
                        <span className="ml-1.5 text-xs font-medium text-[#64748B]">{row.lowerIsBetter ? "(lower is better)" : ""}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        {after && improved && (
                          <m.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="rounded-full bg-[#16A34A]/10 px-2 py-0.5 text-[11px] font-bold text-[#16A34A]"
                          >
                            {row.lowerIsBetter ? "−" : "+"}
                            {change}
                          </m.span>
                        )}
                        <span className="text-base font-bold text-[#0F172A]">{fmt(v, row.unit)}</span>
                      </span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-[#F1F5F9]">
                      <m.div
                        className="h-full rounded-full"
                        initial={false}
                        animate={{ width: `${(v / row.max) * 100}%`, backgroundColor: after ? "#003D82" : "#94A3B8" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </m.div>

          {/* Outcome focus + proof */}
          <div className="flex flex-col gap-6">
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="flex items-center gap-5 rounded-[24px] bg-[#F8FAFC] p-6 ring-1 ring-[#E2E8F0]"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#003D82] text-white">
                <CheckCircle2 size={26} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-[#0F172A]">100% Outcome Focused</h3>
                <p className="text-[15px] text-[#64748B]">Every fix is tied to a business goal.</p>
              </div>
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.12 }}
              className="flex flex-1 flex-col rounded-[24px] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0]"
            >
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#003D82] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">Case study</span>
                <span className="text-xs font-semibold text-[#64748B]">Cannabis · Western Canada · Live Nov 1, 2026</span>
              </div>
              <h3 className="text-xl font-extrabold leading-snug tracking-tight text-[#0F172A]">
                Full Odoo implementation for a top-tier cannabis brand
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#64748B]">
                One system of record across sister brands, from production to compliance reporting and leadership dashboards.
              </p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  { icon: FileCheck2, label: "COA tracking" },
                  { icon: FlaskConical, label: "CTLS reporting" },
                  { icon: BarChart3, label: "Power BI" },
                ].map((t) => {
                  const Icon = t.icon;
                  return (
                    <li key={t.label} className="flex items-center gap-2 rounded-xl bg-[#F8FAFC] px-3 py-2.5 text-sm font-semibold text-[#0F172A] ring-1 ring-[#E2E8F0]">
                      <Icon size={16} className="text-[#003D82]" />
                      {t.label}
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/case-studies/top-tier-cannabis-brand"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#003D82] hover:underline"
              >
                Read the case study <ArrowRight size={16} />
              </Link>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
