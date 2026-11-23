"use client";

import { m } from "framer-motion";
import { Wallet, Settings2, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const audiences = [
  { icon: Wallet, title: "CFOs & Controllers", description: "Focused on ROI, financial controls, and reporting accuracy.", tag: "Finance Leadership" },
  { icon: Settings2, title: "COOs & Operations Heads", description: "Focused on efficiency, optimization, and scalable workflows.", tag: "Operations Leadership" },
  { icon: ShieldCheck, title: "ERP Managers", description: "Responsible for system performance and user adoption across the organization.", tag: "System Ownership" },
];

export default function WhoWeServe() {
  return (
    <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={3}
          label="Who we serve"
          title="Who We Serve Best"
          text="We work with SMEs globally that value precision and long-term stability."
          align="center"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <m.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col items-center rounded-[24px] bg-[#F8FAFC] p-8 text-center ring-1 ring-[#E2E8F0] transition-all hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,61,130,0.08)]"
              >
                <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#003D82] ring-1 ring-[#E2E8F0] transition-colors group-hover:bg-[#003D82] group-hover:text-white">
                  <Icon size={26} />
                </span>
                <span className="mb-3 rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#003D82]">{a.tag}</span>
                <h3 className="mb-2 text-xl font-bold text-[#0F172A]">{a.title}</h3>
                <p className="leading-relaxed text-[#64748B]">{a.description}</p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
