"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { BookOpen, Shield, Sparkles, TrendingUp, Earth, Plus, MapPin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const values = [
  { title: "Trust Over Cost", description: "Relationships built on transparency, not just price.", icon: Shield },
  { title: "Specialization", description: "Deep focus on recovery, not being everything to everyone.", icon: Sparkles },
  { title: "Results First", description: "We measure success by real business outcomes.", icon: TrendingUp },
  { title: "Global Reach", description: "Canadian-based expertise with the infrastructure to serve you anywhere.", icon: Earth },
];

const story = [
  "ERP Titans was founded with a clear mission: to help SMEs recover from failed ERP implementations and unlock the true value of their systems.",
  "We've seen too many companies burnt by generic ERP implementers who promised the world but delivered systems that didn't match their business needs.",
  "We decided to do things differently. We focus exclusively on ERP recovery, fixing broken implementations and helping companies scale.",
];

export default function AboutIntro({ isCA = false }: { isCA?: boolean }) {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 lg:pt-36 pb-20 lg:pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full bg-sky-100/50 blur-[120px]" />
          <div className="absolute top-[30%] -right-[10%] h-[40%] w-[40%] rounded-full bg-blue-50/70 blur-[100px]" />
        </div>
        <div className="relative max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <m.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#003D82] shadow-sm ring-1 ring-[#003D82]/10">
                <span className="h-2 w-2 rounded-full bg-[#21B799]" />
                About ERP Titans
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.1] text-[#003D82]">
                We Are ERP Recovery <br className="hidden md:block" /> Specialists
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl leading-relaxed text-[#475569]">
                We bridge the gap between business reality and ERP capability. Our team of senior consultants, developers, and architects fix
                broken implementations and build scalable foundations for SME growth.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#475569]">
                <MapPin size={16} className="text-[#003D82]" /> {isCA ? "Based in Calgary, Alberta · Serving Canada, the USA and beyond" : "Offices in Calgary, Alberta and Austin, Texas · Serving the USA, Canada and beyond"}
              </p>
            </m.div>

            <m.div
              initial={false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hidden flex-col items-stretch rounded-[28px] bg-white px-10 py-8 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0] lg:flex"
            >
              <div className="flex h-24 items-center justify-center">
                <Image src="/logo.png" alt="ERP Titans" width={97} height={80} className="h-20 w-auto" />
              </div>
              <div className="my-4 flex items-center gap-4" aria-hidden="true">
                <span className="h-px flex-1 bg-[#E2E8F0]" />
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F8FAFC] text-[#003D82]">
                  <Plus size={20} strokeWidth={2.5} />
                </span>
                <span className="h-px flex-1 bg-[#E2E8F0]" />
              </div>
              <div className="flex h-24 items-center justify-center">
                <Image src="/odoo-ready-partner-tight.svg" alt="Odoo Ready Partner" width={416} height={202} className="h-16 w-auto" />
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ───────── Story + values ───────── */}
      <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader n={1} label="Who we are" title="Built to fix what others couldn't" />
          <div className="grid items-stretch gap-8 lg:grid-cols-[1fr_1.2fr]">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="flex flex-col rounded-[24px] bg-gradient-to-br from-[#003D82] to-[#0B5CAD] p-8 text-white sm:p-10"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                  <BookOpen size={22} />
                </span>
                <h3 className="text-2xl font-bold">Our Story</h3>
              </div>
              <div className="space-y-5 text-[16px] leading-relaxed text-blue-100">
                {story.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </div>
            </m.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <m.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="group rounded-[24px] bg-[#F8FAFC] p-7 ring-1 ring-[#E2E8F0] transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,61,130,0.08)]"
                  >
                    <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#003D82] ring-1 ring-[#E2E8F0] transition-colors group-hover:bg-[#003D82] group-hover:text-white">
                      <Icon size={22} />
                    </span>
                    <h3 className="mb-2 text-[17px] font-bold text-[#0F172A]">{v.title}</h3>
                    <p className="text-[15px] leading-relaxed text-[#64748B]">{v.description}</p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
