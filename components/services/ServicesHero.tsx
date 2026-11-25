"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const lifecycle = [
  { label: "Strategy", desc: "Blueprint & Planning" },
  { label: "Implementation", desc: "Deployment & Training" },
  { label: "Recovery", desc: "Rescue & Optimization" },
  { label: "Scale", desc: "Growth & Automation" },
];

const focus = ["ERP Recovery", "Odoo Implementation", "Managed Services", "Digital Transformation"];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 lg:pt-36 pb-20 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full bg-sky-100/50 blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] h-[40%] w-[40%] rounded-full bg-blue-50/70 blur-[100px]" />
      </div>

      <div className="relative max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <m.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#003D82] shadow-sm ring-1 ring-[#003D82]/10">
              <span className="h-2 w-2 rounded-full bg-[#21B799]" />
              Odoo &amp; ERP Services · Official Odoo Ready Partner
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-[#003D82]">
              Odoo &amp; ERP services, <br className="hidden sm:block" />
              from first plan to long-term support
            </h1>
            <p className="mt-6 text-xl font-medium leading-relaxed text-[#475569]">
              Whether you are choosing an ERP, fixing one that went wrong or scaling one that works, one senior team stays accountable from strategy through recovery to growth.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#start"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#003D82] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_0_rgba(0,61,130,0.39)] transition-all hover:bg-[#003D82]/90"
              >
                Find the right service
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3.5 text-[15px] font-semibold text-[#0F172A] shadow-sm transition-all hover:bg-gray-50"
              >
                Book ERP Audit <ArrowRight size={17} className="text-[#003D82]" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#475569]">
              {focus.map((f) => (
                <span key={f} className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#003D82]/10">
                    <Check size={12} strokeWidth={3} className="text-[#003D82]" />
                  </span>
                  {f}
                </span>
              ))}
            </div>
          </m.div>

          {/* Lifecycle journey */}
          <m.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[28px] bg-white p-8 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0]"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">The ERP lifecycle</span>
              <span className="text-xs font-semibold text-[#94A3B8]">We cover every stage</span>
            </div>
            <ol className="relative space-y-4">
              <span className="absolute left-[34px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#003D82] via-[#0EA5E9] to-[#16A34A]" aria-hidden="true" />
              {lifecycle.map((s, i) => {
                return (
                  <m.li
                    key={s.label}
                    initial={false}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.12 }}
                    className="relative flex items-center gap-5 rounded-2xl bg-[#F8FAFC] p-4 ring-1 ring-[#E2E8F0]"
                  >
                    <span className="relative z-10 flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#003D82] text-sm font-bold tabular-nums text-white ring-4 ring-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span className="block font-bold text-[#0F172A]">{s.label}</span>
                      <span className="text-sm text-[#64748B]">{s.desc}</span>
                    </span>
                  </m.li>
                );
              })}
            </ol>
          </m.div>
        </div>
      </div>
    </section>
  );
}
