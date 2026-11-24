"use client";

import { useState } from "react";
import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const symptoms = [
  { title: "Teams Still Using Excel", description: "Employees revert to manual spreadsheets because the ERP is too hard to use or lacks functionality." },
  { title: "Reporting Delays", description: "It takes days to assemble reports, meaning decisions are made on outdated or inaccurate data." },
  { title: "Poor User Adoption", description: "Staff avoid the system, leading to shadow IT, workarounds, and massive data silos." },
  { title: "Inventory Inaccuracies", description: "Physical stock doesn't match system records, causing stockouts or excess holding costs." },
  { title: "Process Bottlenecks", description: "Workflows are slower now than before the implementation, destroying operational efficiency." },
  { title: "Customization Issues", description: "Heavy customizations have made the system brittle, impossible to upgrade, and expensive to maintain." },
];

function verdict(n: number) {
  if (n === 0)
    return { label: "Select the signs you recognise", color: "#64748B", text: "Tap the signs you recognise. We'll show where your ERP stands and the right next step.", href: "", cta: "" };
  if (n <= 2)
    return {
      label: "Early warning",
      color: "#16A34A",
      text: "Usually fixable with a focused tune-up: targeted configuration, better reports and refresher training.",
      href: "/odoo-support",
      cta: "See support & optimization",
    };
  if (n <= 4)
    return {
      label: "Recovery recommended",
      color: "#F59E0B",
      text: "Several core processes are affected. An ERP Health Audit finds the root causes before they spread further.",
      href: "/odoo-rescue",
      cta: "See ERP recovery",
    };
  return {
    label: "Critical",
    color: "#DC2626",
    text: "The system is working against your team. A structured recovery plan keeps operations running while we fix it.",
    href: "/odoo-rescue",
    cta: "See ERP recovery",
  };
}

export default function Challenges() {
  const [picked, setPicked] = useState<number[]>([]);
  const toggle = (i: number) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  const v = verdict(picked.length);
  const pct = (picked.length / symptoms.length) * 100;

  return (
    <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24" id="challenges">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={1}
          label="ERP health check"
          title="Is Your ERP Showing These Signs?"
          text="Most ERP problems don't start with the software, they start with misaligned processes and poor implementation."
          align="center"
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px]">
          {/* Symptom cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {symptoms.map((s, i) => {
              const on = picked.includes(i);
              return (
                <m.button
                  key={s.title}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggle(i)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  className={`group relative flex flex-col items-start overflow-hidden rounded-[24px] p-6 text-left transition-all duration-300 ${
                    on
                      ? "bg-[#EFF6FF] shadow-[0_10px_30px_rgba(0,61,130,0.12)] ring-2 ring-[#003D82]"
                      : "bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0] hover:-translate-y-1 hover:ring-[#003D82]/30"
                  }`}
                >
                  <span
                    className={`absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full transition-colors ${
                      on ? "bg-[#003D82] text-white" : "bg-white ring-1 ring-[#CBD5E1]"
                    }`}
                  >
                    {on && <Check size={13} strokeWidth={3} />}
                  </span>
                  <span
                    className={`absolute inset-x-6 bottom-0 h-[3px] origin-left rounded-t-full bg-[#003D82] transition-transform duration-300 ${on ? "scale-x-100" : "scale-x-0"}`}
                    aria-hidden="true"
                  />
                  <h3 className="mb-2 pr-8 text-lg font-bold text-[#0F172A]">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#64748B]">{s.description}</p>
                </m.button>
              );
            })}
          </div>

          {/* Result panel */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[28px] bg-white p-7 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0]">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">Your result</span>
                <span className="text-xs font-semibold text-[#64748B]">Live score</span>
              </div>

              <div className="flex items-end gap-2">
                <span className="text-6xl font-extrabold tracking-tight text-[#0F172A]">{picked.length}</span>
                <span className="mb-2 text-lg font-semibold text-[#64748B]">/ {symptoms.length} signs</span>
              </div>

              {/* Segmented meter */}
              <div className="mt-5 grid grid-cols-6 gap-1.5">
                {symptoms.map((_, i) => (
                  <m.span
                    key={i}
                    className="h-2.5 rounded-full"
                    animate={{ backgroundColor: i < picked.length ? v.color : "#F1F5F9" }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
              <div className="mt-2 flex justify-between text-[11px] font-semibold uppercase tracking-wider text-[#64748B]">
                <span>Healthy</span>
                <span>Critical</span>
              </div>

              <AnimatePresence mode="wait">
                <m.div
                  key={v.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-7 border-t border-[#F1F5F9] pt-6"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: v.color }}>
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: v.color }} />
                    {v.label}
                  </span>
                  <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">{v.text}</p>
                  {v.href && (
                    <Link href={v.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#003D82] hover:underline">
                      {v.cta} <ArrowRight size={15} />
                    </Link>
                  )}
                </m.div>
              </AnimatePresence>

              <Link
                href="/contact"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#003D82] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_0_rgba(0,61,130,0.39)] transition-all hover:bg-[#003D82]/90"
              >
                Book an ERP Health Audit <ArrowRight size={16} />
              </Link>
              <p className="sr-only" aria-live="polite">
                {picked.length} of {symptoms.length} signs selected. {pct > 0 ? v.label : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
