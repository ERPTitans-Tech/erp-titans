"use client";

import Link from "next/link";
import { m } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";

// Taglines and icons matched to each pillar (the originals had drifted out of order).
const servicePillars = [
  { title: "ERP Strategy & Transformation", tagline: "Diagnose & Assess",
    description: "We help organizations design ERP strategies aligned with long-term business growth, operational maturity, and digital transformation goals." },
  { title: "Odoo Implementation", href: "/odoo-implementation", tagline: "Deploy & Adopt",
    description: "End-to-end Odoo ERP implementation services designed to align technology with operational workflows." },
  { title: "ERP Rescue & Recovery", href: "/odoo-rescue", tagline: "Stabilize & Recover",
    description: "Our flagship ERP Rescue Program™: we stabilize underperforming systems and finish what was started." },
  { title: "Development & Customization", href: "/odoo-customization", tagline: "Tailored Solutions",
    description: "We build scalable ERP customizations that enhance business functionality while preserving long-term system maintainability." },
  { title: "ERP Integration Services", href: "/odoo-integration", tagline: "Connect Your Stack",
    description: "Modern ERP environments depend on seamless system integration. We build robust integration ecosystems." },
  { title: "Data, BI & Analytics", tagline: "Real-Time Reporting",
    description: "ERP systems generate massive operational data. We transform that data into decision-ready intelligence." },
  { title: "AI-Driven Intelligence", tagline: "Predict & Automate",
    description: "We integrate AI models into ERP systems to enable predictive decision-making and operational optimization." },
  { title: "Managed Services (AMS)", href: "/odoo-support", tagline: "Ongoing Partnership",
    description: "We provide long-term ERP support that ensures systems remain stable, secure, and continuously improving." },
  { title: "Cloud & DevOps", tagline: "Speed & Scale",
    description: "Modern ERP systems require scalable cloud infrastructure. We design and manage ERP environments on leading cloud platforms." },
  { title: "Digital Commerce", tagline: "Order to Delivery",
    description: "We connect ERP operations directly with customer-facing systems to enable seamless order-to-delivery workflows." },
];

const stages = [
  {
    name: "Plan & build",
    note: "Getting the right system in, the right way",
    pillars: ["ERP Strategy & Transformation", "Odoo Implementation", "Development & Customization", "ERP Integration Services"],
  },
  {
    name: "Fix & improve",
    note: "Making an existing system deliver",
    pillars: ["ERP Rescue & Recovery", "Data, BI & Analytics", "AI-Driven Intelligence"],
  },
  {
    name: "Run & scale",
    note: "Keeping it stable as you grow",
    pillars: ["Managed Services (AMS)", "Cloud & DevOps", "Digital Commerce"],
  },
];

export default function ServicePillars() {
  return (
    <section id="pillars" className="scroll-mt-24 border-t border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24">
      <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={2}
          label="What we do"
          title="Ten services, one accountable team"
          text="Grouped by where you are in the life of your ERP. Most clients start with one and stay with us as the system grows."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {stages.map((st, si) => (
            <m.div
              key={st.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: si * 0.08 }}
              className="flex flex-col overflow-hidden rounded-[24px] bg-white ring-1 ring-[#E2E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="border-b border-[#E2E8F0] bg-gradient-to-r from-[#EFF6FF] to-white px-6 py-5">
                <div className="text-lg font-extrabold text-[#003D82]">{st.name}</div>
                <div className="text-sm text-[#64748B]">{st.note}</div>
              </div>
              <div className="flex flex-1 flex-col divide-y divide-[#F1F5F9]">
                {st.pillars.map((title) => {
                  const p = servicePillars.find((x) => x.title === title)!;
                  const body = (
                    <>
                      <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0EA5E9]">{p.tagline}</div>
                      <h3 className="mb-1.5 flex items-center justify-between gap-3 text-[17px] font-bold text-[#0F172A]">
                        {p.title}
                        {"href" in p && p.href && (
                          <ArrowRight size={17} className="shrink-0 text-[#003D82] transition-transform group-hover:translate-x-1" />
                        )}
                      </h3>
                      <p className="text-[14.5px] leading-relaxed text-[#64748B]">{p.description}</p>
                    </>
                  );
                  return "href" in p && p.href ? (
                    <Link key={title} href={p.href} className="group flex-1 px-6 py-5 transition-colors hover:bg-[#F8FAFC]">
                      {body}
                    </Link>
                  ) : (
                    <div key={title} className="flex-1 px-6 py-5">
                      {body}
                    </div>
                  );
                })}
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
