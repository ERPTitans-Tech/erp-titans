"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { ShieldCheck, Activity, Globe, Settings2, X, Check } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const features = [
  { title: "Trust-Based Approach", description: "We build relationships with SMEs who value expertise, accountability, and long-term results.", icon: ShieldCheck },
  { title: "Proven Recovery Track Record", description: "Specialized in fixing broken ERP implementations and recovering lost value.", icon: Activity },
  { title: "Canadian Expertise, Global Reach", description: "Headquartered in Canada, with the infrastructure to serve clients anywhere.", icon: Globe },
  { title: "Recovery Focused", description: "We specialize in fixing underperforming ERP systems.", icon: Settings2 },
];

const compare = [
  { topic: "Focus", us: "ERP Recovery Specialists", them: "Focus on Software Installation" },
  { topic: "Approach", us: "Business Process Alignment", them: "Generalist Industry Knowledge" },
  { topic: "Method", us: "Optimization Focused", them: "One-Size-Fits-All Approach" },
  { topic: "Success measure", us: "Long-Term Business Outcomes", them: "Project Completion Focused" },
];

export default function WhyERP() {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24" id="why-us">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={4}
          label="Why ERP Titans"
          title="Why ERP Titans?"
          text="We're specialists, not generic implementers. We understand the nuances of ERP recovery on a global scale."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <m.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:ring-[#003D82]/30"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#003D82] transition-colors group-hover:bg-[#003D82] group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-[#0F172A]">{f.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#64748B]">{f.description}</p>
                </m.div>
              );
            })}
          </div>

          {/* Comparison */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] bg-white p-7 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0] sm:p-8"
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">Why we&apos;re different</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pb-3 text-center text-xs font-bold uppercase tracking-[0.12em]">
              <span className="rounded-full bg-[#F1F5F9] py-2 text-[#64748B]">Generic ERP consultants</span>
              <span className="rounded-full bg-[#003D82] py-2 text-white">ERP Titans</span>
            </div>

            <div className="space-y-3">
              {compare.map((row, i) => {
                const on = hover === i;
                return (
                  <div
                    key={row.topic}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    className={`rounded-2xl p-1.5 transition-colors ${on ? "bg-[#EFF6FF]" : ""}`}
                  >
                    <div className="mb-1.5 px-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#64748B]">{row.topic}</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2.5 rounded-xl bg-[#F8FAFC] px-4 py-3.5 ring-1 ring-[#E2E8F0]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FEF2F2]">
                          <X size={11} strokeWidth={3} className="text-[#DC2626]" />
                        </span>
                        <span className="text-sm font-medium text-[#64748B]">{row.them}</span>
                      </div>
                      <m.div
                        animate={{ scale: on ? 1.03 : 1 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-2.5 rounded-xl bg-[#003D82]/[0.06] px-4 py-3.5 ring-1 ring-[#003D82]/20"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#003D82]">
                          <Check size={11} strokeWidth={3} className="text-white" />
                        </span>
                        <span className="text-sm font-semibold text-[#0F172A]">{row.us}</span>
                      </m.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
