"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Search, Wrench, Zap, TrendingUp, Info } from "lucide-react";
import { officesFor } from "@/lib/offices";
import Flag from "@/components/ui/Flag";

const NAVY = "#003D82";
const SKY = "#0EA5E9";
const GREEN = "#16A34A";

// Illustrative ERP health journey across the four recovery stages.
const stages = [
  {
    key: "Diagnose",
    icon: Search,
    text: "Identify ERP bottlenecks and implementation failures.",
    score: 38,
    bars: { "Data accuracy": 46, "User adoption": 35, "Automation": 22 },
  },
  {
    key: "Recover",
    icon: Wrench,
    text: "Fix broken workflows and system inefficiencies.",
    score: 61,
    bars: { "Data accuracy": 72, "User adoption": 58, "Automation": 41 },
  },
  {
    key: "Optimize",
    icon: Zap,
    text: "Improve reporting, automation, and data integrity.",
    score: 82,
    bars: { "Data accuracy": 90, "User adoption": 78, "Automation": 74 },
  },
  {
    key: "Scale",
    icon: TrendingUp,
    text: "Build a stable foundation for future growth.",
    score: 94,
    bars: { "Data accuracy": 97, "User adoption": 92, "Automation": 90 },
  },
] as const;

const R = 54;
const C = 2 * Math.PI * R;

function scoreColor(score: number) {
  if (score >= 80) return GREEN;
  if (score >= 55) return SKY;
  return "#F59E0B";
}

export default function Hero({ isCA = false }: { isCA?: boolean }) {
  const offices = officesFor(isCA);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % stages.length), 3200);
    return () => clearInterval(id);
  }, [paused]);

  const stage = stages[active];
  const color = scoreColor(stage.score);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 pb-16 lg:pt-36 lg:pb-20" id="home">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full bg-sky-100/50 blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] h-[40%] w-[40%] rounded-full bg-blue-50/70 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Copy */}
          <m.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-5 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white px-4 py-1.5 text-xs font-semibold sm:text-sm text-[#003D82] shadow-sm ring-1 ring-[#003D82]/10">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#21B799]" />
              <span>Official Odoo Ready Partner</span>
              {offices.pill.map((o) => (
                <span key={o.label} className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span className="text-[#CBD5E1]">·</span>
                  <Flag country={o.country} />
                  {o.label}
                </span>
              ))}
              {offices.serving && (
                <span className="whitespace-nowrap">
                  <span className="mr-1.5 text-[#CBD5E1]">·</span>
                  {offices.serving}
                </span>
              )}
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#003D82] sm:text-5xl lg:text-[58px]">
              Fix Your Broken ERP. <br />
              Scale Your Business.
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#475569]">
              Your ERP implementation didn&apos;t go as planned. We help SMEs globally recover from failed systems, fix broken
              processes, and finally unlock the ROI you were promised.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#003D82] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_0_rgba(0,61,130,0.39)] transition-all hover:bg-[#003D82]/90"
              >
                Get ERP Health Audit <ArrowRight size={17} />
              </Link>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3.5 text-[15px] font-semibold text-[#0F172A] shadow-sm transition-all hover:bg-gray-50"
              >
                Learn Our Process
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-[#475569]">
              {["ERP Recovery Specialists", "Global Delivery", isCA ? "Canadian Based" : "Offices in Canada & the US"].map((f) => (
                <span key={f} className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#003D82]/10">
                    <Check size={12} strokeWidth={3} className="text-[#003D82]" />
                  </span>
                  {f}
                </span>
              ))}
            </div>
          </m.div>

          {/* Interactive recovery framework */}
          <m.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[28px] bg-white p-7 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0] sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">ERP Recovery Framework</span>
                <p className="mt-1 text-sm text-[#64748B]">Our proven methodology for system optimization</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-dashed border-[#003D82]/30 bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-semibold text-[#003D82]">
                <Info size={12} /> Illustrative
              </span>
            </div>

            {/* Stage tabs */}
            <div className="grid grid-cols-4 gap-2" role="tablist" aria-label="Recovery stages">
              {stages.map((s, i) => {
                const Icon = s.icon;
                const on = i === active;
                const done = i < active;
                return (
                  <button
                    key={s.key}
                    role="tab"
                    aria-selected={on}
                    onClick={() => {
                      setActive(i);
                      setPaused(true);
                    }}
                    className={`group flex flex-col items-center gap-2 rounded-2xl px-1 py-3 text-xs font-bold transition-all ${
                      on ? "bg-[#003D82] text-white shadow-md" : "bg-[#F8FAFC] text-[#475569] ring-1 ring-[#E2E8F0] hover:ring-[#003D82]/30"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                        on ? "bg-white/15" : done ? "bg-[#003D82]/10 text-[#003D82]" : "bg-white text-[#94A3B8] ring-1 ring-[#E2E8F0]"
                      }`}
                    >
                      <Icon size={17} />
                    </span>
                    {s.key}
                  </button>
                );
              })}
            </div>

            {/* Progress line */}
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-[#F1F5F9]">
              <m.div
                className="h-full rounded-full bg-gradient-to-r from-[#003D82] via-[#0EA5E9] to-[#16A34A]"
                animate={{ width: `${((active + 1) / stages.length) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>

            {/* Gauge + bars */}
            <div className="mt-7 grid items-center gap-7 sm:grid-cols-[150px_1fr]">
              <div className="relative mx-auto h-[150px] w-[150px]">
                <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
                  <circle cx="70" cy="70" r={R} fill="none" stroke="#F1F5F9" strokeWidth="12" />
                  <m.circle
                    cx="70"
                    cy="70"
                    r={R}
                    fill="none"
                    stroke={color}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeDasharray={C}
                    animate={{ strokeDashoffset: C * (1 - stage.score / 100), stroke: color }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <AnimatePresence mode="wait" initial={false}>
                    <m.span
                      key={stage.score}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="text-4xl font-extrabold tracking-tight text-[#0F172A]"
                    >
                      {stage.score}
                    </m.span>
                  </AnimatePresence>
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#94A3B8]">ERP health</span>
                </div>
              </div>

              <div className="space-y-4">
                {Object.entries(stage.bars).map(([label, v]) => (
                  <div key={label}>
                    <div className="mb-1.5 flex justify-between text-[13px] font-semibold">
                      <span className="text-[#475569]">{label}</span>
                      <span className="text-[#0F172A]">{v}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#F1F5F9]">
                      <m.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: NAVY }}
                        animate={{ width: `${v}%` }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={stage.key}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="mt-7 flex items-center gap-3 rounded-2xl bg-[#F8FAFC] p-4 ring-1 ring-[#E2E8F0]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003D82] text-xs font-bold text-white">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-[#475569]">
                  <span className="font-bold text-[#0F172A]">{stage.key}: </span>
                  {stage.text}
                </p>
              </m.div>
            </AnimatePresence>
          </m.div>
        </div>

        {/* Proof strip */}
        <m.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 grid items-center gap-6 rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0] lg:grid-cols-[auto_1fr_auto] lg:gap-10 md:px-8"
        >
          <Image src="/odoo-ready-partner-tight.svg" alt="Odoo Ready Partner" width={416} height={202} className="h-14 w-auto" />
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-[#475569] lg:border-l lg:border-[#E2E8F0] lg:pl-10">
            <span className="w-full text-xs font-bold uppercase tracking-[0.14em] text-[#94A3B8] sm:w-auto">Industries</span>
            {[
              ["Manufacturing", "/industries/manufacturing"],
              ["Distribution", "/industries/distribution"],
              ["Cannabis", "/industries/cannabis"],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="transition-colors hover:text-[#003D82]">
                {label}
              </Link>
            ))}
          </div>
          <Link
            href="/case-studies/top-tier-cannabis-brand"
            className="group inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-5 py-2.5 text-sm font-semibold text-[#003D82] transition-colors hover:bg-[#003D82] hover:text-white"
          >
            <span className="rounded-full bg-[#003D82] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white group-hover:bg-white group-hover:text-[#003D82]">
              New
            </span>
            Odoo go-live case study
            <ArrowRight size={15} />
          </Link>
        </m.div>
      </div>
    </section>
  );
}
