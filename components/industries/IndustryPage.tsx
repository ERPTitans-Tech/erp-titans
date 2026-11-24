"use client";

import { Ledger, LedgerItem } from "@/components/ui/Ledger";
import Link from "next/link";
import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, ChevronRight, Quote } from "lucide-react";
import CTA from "@/components/home/CTA";
import SectionHeader from "@/components/ui/SectionHeader";
import { industries, type IndustryKey } from "@/lib/industries";
import Tick from "@/components/ui/Tick";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

export default function IndustryPage({ industry }: { industry: IndustryKey }) {
  const d = industries[industry];
  const others = (Object.keys(industries) as IndustryKey[]).filter((k) => k !== industry);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 lg:pt-36 pb-20 lg:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full bg-sky-100/50 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] h-[40%] w-[40%] rounded-full bg-blue-50/70 blur-[100px]" />
        </div>

        <div className="relative max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-1.5 text-sm font-medium text-[#64748B]">
            <Link href="/" className="hover:text-[#003D82]">Home</Link>
            <ChevronRight size={14} />
            <span>Industries</span>
            <ChevronRight size={14} />
            <span className="text-[#0F172A]">{d.name}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <m.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#003D82] shadow-sm ring-1 ring-[#003D82]/10">
                <span className="h-2 w-2 rounded-full bg-[#21B799]" />
                {d.name} ERP · Official Odoo Partner
              </span>
              <h1 className="text-[40px] md:text-[56px] font-extrabold tracking-tight leading-[1.05] text-[#003D82]">
                {d.h1[0]} <br className="hidden sm:block" />
                {d.h1[1]}
              </h1>
              <p className="mt-6 max-w-[540px] text-lg font-medium leading-relaxed text-[#475569]">{d.intro}</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#003D82] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_0_rgba(0,61,130,0.39)] transition-all hover:bg-[#003D82]/90"
                >
                  Schedule Your Audit <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact?schedule=true"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3.5 text-[15px] font-semibold text-[#003D82] shadow-sm transition-all hover:bg-gray-50"
                >
                  View Calendar
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#94A3B8]">Built on Odoo</span>
                <div className="flex -space-x-1.5">
                  {d.odooApps.slice(0, 5).map((a) => (
                    <span key={a.name} title={`Odoo ${a.name}`} className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[#E2E8F0]">
                      <Image src={a.icon} alt={`Odoo ${a.name} app icon`} width={50} height={50} className="h-5 w-5" />
                    </span>
                  ))}
                </div>
              </div>
            </m.div>

            <m.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative"
            >
              <div className="relative h-[380px] w-full overflow-hidden rounded-[32px] shadow-[0_20px_50px_-12px_rgba(0,61,130,0.25)] lg:h-[460px]">
                <Image src={d.image} alt={d.imageAlt} fill priority className="object-cover" sizes="(min-width: 1024px) 600px, 100vw" />
              </div>
              <m.div
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -bottom-6 left-6 flex items-center gap-4 rounded-[20px] bg-white px-6 py-4 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.2)]"
              >
                <span>
                  <span className="block text-[28px] font-extrabold leading-none text-[#003D82]">{d.stat.value}</span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">{d.stat.label}</span>
                </span>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ───────── Challenges ───────── */}
      <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader n={1} label="The challenge" title={d.challenges.heading} text={d.challenges.text} />
          <Ledger cols={3}>
            {d.challenges.items.map((c) => (
              <LedgerItem key={c.title} title={c.title}>
                {c.description}
              </LedgerItem>
            ))}
          </Ledger>
        </div>
      </section>

      {/* ───────── Solution ───────── */}
      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader n={2} label="How we fix it" title={d.solution.heading} text={d.solution.text} />

          {d.solution.cards && (
            <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${d.solution.cards.length === 4 ?"lg:grid-cols-4" : "lg:grid-cols-3"}`}>
              {d.solution.cards.map((c, i) => (
                <m.div
                  key={c.title}
                  {...fadeUp}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-[20px] bg-white p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0]"
                >
                  <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-[#003D82] to-[#0EA5E9]" />
                  <h3 className="mb-4 text-lg font-bold text-[#003D82]">{c.title}</h3>
                  <ul className="space-y-2.5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-[15px] font-medium text-[#334155]">
                        <Tick tone="green" /> {it}
                      </li>
                    ))}
                  </ul>
                </m.div>
              ))}
            </div>
          )}

          {(d.solution.pillars || d.solution.checklist) && (
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                {d.solution.pillars && (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {d.solution.pillars.map((p) => (
                      <div key={p} className="rounded-2xl bg-white px-4 py-4 text-center text-[15px] font-extrabold text-[#003D82] shadow-[0_4px_15px_rgba(0,0,0,0.03)] ring-1 ring-[#E2E8F0]">
                        {p}
                      </div>
                    ))}
                  </div>
                )}
                {d.solution.quote && (
                  <figure className="mt-6 flex gap-4 rounded-2xl bg-white p-6 ring-1 ring-[#E2E8F0]">
                    <Quote size={22} className="shrink-0 text-[#0EA5E9]" />
                    <blockquote className="text-[16px] font-medium italic leading-relaxed text-[#334155]">{d.solution.quote}</blockquote>
                  </figure>
                )}
              </div>
              {d.solution.checklist && (
                <ul className="space-y-4 rounded-[24px] bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0]">
                  {d.solution.checklist.map((it) => (
                    <li key={it} className="flex items-center gap-4 text-[17px] font-bold text-[#003D82]">
                      <Tick />
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {d.solution.highlights.length > 0 && (
            <div className="mt-10">
              {d.solution.highlightsHeading && <h3 className="mb-5 text-xl font-extrabold text-[#0F172A]">{d.solution.highlightsHeading}</h3>}
              <div className={`grid grid-cols-1 gap-6 ${d.solution.highlights.length > 1 ?"md:grid-cols-2" : ""}`}>
                {d.solution.highlights.map((h) => {
                  return (
                    <div key={h.title} className="group rounded-[20px] bg-gradient-to-r from-[#003D82] to-[#0B5CAD] p-7 text-white">
                      <span className="mb-4 block h-[3px] w-10 rounded-full bg-white/60" aria-hidden="true" />
                      <div>
                        <h4 className="mb-1.5 text-lg font-bold">{h.title}</h4>
                        <p className="text-[15px] leading-relaxed text-blue-100">{h.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ───────── Odoo apps ───────── */}
      <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            n={3}
            label="Built on Odoo"
            title={`The Odoo apps behind ${d.name.toLowerCase()} ERP`}
            text="As an official Odoo Ready Partner, we configure these apps around how your business actually runs, then extend them only where it adds real value."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.odooApps.map((a, i) => (
              <m.div
                key={a.name}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-center gap-4 rounded-[20px] bg-[#F8FAFC] p-5 ring-1 ring-[#E2E8F0] transition-all hover:bg-white hover:shadow-[0_10px_25px_rgba(0,61,130,0.07)]"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-[#E2E8F0]">
                  <Image src={a.icon} alt={`Odoo ${a.name} app icon`} width={50} height={50} className="h-9 w-9" />
                </span>
                <span>
                  <span className="block font-bold text-[#0F172A]">Odoo {a.name}</span>
                  <span className="text-[14px] text-[#64748B]">{a.use}</span>
                </span>
              </m.div>
            ))}
          </div>

          {d.proof && (
            <Link
              href={d.proof.href}
              className="group mt-12 flex flex-col gap-6 rounded-[24px] bg-gradient-to-r from-[#EFF6FF] to-[#F0FDF4] p-8 ring-1 ring-[#003D82]/10 transition-all hover:shadow-[0_16px_40px_rgba(0,61,130,0.10)] md:flex-row md:items-center md:justify-between"
            >
              <div className="max-w-2xl">
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#16A34A]">Proof in production</div>
                <h3 className="mb-2 text-xl font-extrabold text-[#003D82]">{d.proof.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#475569]">{d.proof.text}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#003D82] px-6 py-3 font-semibold text-white transition-all group-hover:gap-3">
                {d.proof.cta} <ArrowRight size={17} />
              </span>
            </Link>
          )}

          <div className="mt-12 flex flex-wrap items-center gap-3 text-sm">
            <span className="font-semibold text-[#64748B]">Other industries:</span>
            {others.map((k) => (
              <Link key={k} href={`/industries/${k}`} className="rounded-full bg-[#F8FAFC] px-4 py-2 font-semibold text-[#003D82] ring-1 ring-[#E2E8F0] hover:ring-[#003D82]/30">
                {industries[k].name}
              </Link>
            ))}
            <span className="ml-2 font-semibold text-[#64748B]">Delivered from Calgary:</span>
            <Link href="/odoo-partner-calgary" className="font-semibold text-[#003D82] hover:underline">Calgary</Link>
            <Link href="/odoo-partner-canada" className="font-semibold text-[#003D82] hover:underline">Canada</Link>
            <Link href="/odoo-partner-usa" className="font-semibold text-[#003D82] hover:underline">USA</Link>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
