"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import CardIndex from "@/components/ui/CardIndex";

const rescueSteps = ["Root Cause Diagnostic Audit", "Data Integrity Restoration", "Process Realignment", "User Adoption Training"];

const differentiators = [
  { title: "Senior Lead Only", desc: "No junior consultants. You work with experts." },
  { title: "Global Delivery", desc: "Supporting clients across North America & Europe." },
  { title: "Platform Agnostic", desc: "Odoo experts, but we fix all major ERP ecosystems." },
  { title: "Outcome Focused", desc: "We measure success by your business performance." },
];

export default function ErpRescueProgram() {
  return (
    <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader n={3} label="Flagship program" title="When an ERP project needs rescuing" />

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Rescue program */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative flex flex-col overflow-hidden rounded-[28px] bg-gradient-to-br from-[#003D82] via-[#0A4A96] to-[#0B5CAD] p-8 text-white sm:p-10"
          >
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight">ERP Rescue Program™</h3>
            <p className="mb-8 max-w-lg text-[17px] leading-relaxed text-blue-100">
              Our specialized intervention for organizations with stalled, failed, or underperforming ERP implementations. We don&apos;t just
              patch symptoms; we fix the foundation.
            </p>
            <ul className="mb-10 space-y-4">
              {rescueSteps.map((s, i) => (
                <li key={s} className="flex items-center gap-4 font-semibold">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold">{i + 1}</span>
                  {s}
                  <Check size={16} strokeWidth={3} className="ml-auto text-sky-300" />
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-[#003D82] transition-all hover:bg-blue-50 sm:w-auto sm:self-start"
            >
              Request Recovery Audit <ArrowRight size={18} />
            </Link>
          </m.div>

          {/* Why ERP Titans */}
          <div className="flex flex-col rounded-[28px] bg-[#F8FAFC] p-8 ring-1 ring-[#E2E8F0] sm:p-10">
            <h3 className="mb-4 text-3xl font-extrabold tracking-tight text-[#003D82]">Why ERP Titans?</h3>
            <p className="mb-8 text-[17px] leading-relaxed text-[#475569]">
              Most ERP failures aren&apos;t software problems. They&apos;re execution problems. We combine deep technical knowledge of Odoo and
              other platforms with senior-level business process expertise.
            </p>
            <div className="grid grid-cols-1 flex-1 gap-4 sm:grid-cols-2">
              {differentiators.map((c, i) => {
                return (
                  <m.div
                    key={c.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="group rounded-2xl bg-white p-5 ring-1 ring-[#E2E8F0]"
                  >
                    <CardIndex n={i + 1} className="mb-3" />
                    <h4 className="mb-1 font-bold text-[#0F172A]">{c.title}</h4>
                    <p className="text-sm leading-relaxed text-[#64748B]">{c.desc}</p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
