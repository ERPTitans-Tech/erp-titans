"use client";

import { m } from "framer-motion";
import { CheckCircle, Sparkles, Workflow } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const reasons = [
  { title: "Proven Expertise", description: "Years of experience across industries and ERP platforms.", icon: CheckCircle, stat: "50+", statLabel: "ERP Projects" },
  { title: "Measurable Results", description: "Tangible business outcomes and ROI-focused delivery.", icon: Sparkles, stat: "Up to 4.8x", statLabel: "ROI" },
  { title: "Seamless Integration", description: "Services designed to work together harmoniously.", icon: Workflow, stat: "End-to-End", statLabel: "Support" },
];

export default function WhyChooseUs() {
  return (
    <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24">
      <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={2}
          label="Why ERP Titans"
          title="Why Clients Choose ERP Titans"
          text="Deep ERP expertise, measurable outcomes, and long-term business partnerships."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <m.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center rounded-[24px] bg-white p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0]"
              >
                <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#003D82]">
                  <Icon size={22} />
                </span>
                <div className="text-4xl font-extrabold tracking-tight text-[#003D82]">{r.stat}</div>
                <div className="mb-5 mt-1 text-xs font-bold uppercase tracking-[0.14em] text-[#64748B]">{r.statLabel}</div>
                <div className="mb-5 h-px w-12 bg-[#E2E8F0]" />
                <h3 className="mb-2 text-lg font-bold text-[#0F172A]">{r.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#64748B]">{r.description}</p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
