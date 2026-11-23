"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Rocket, LifeBuoy, Code2, Plug, BarChart3, BrainCircuit, Headphones, Cloud, ShoppingCart } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

// Taglines and icons matched to each pillar (the originals had drifted out of order).
const servicePillars = [
  { title: "ERP Strategy & Transformation", tagline: "Diagnose & Assess", icon: Compass,
    description: "We help organizations design ERP strategies aligned with long-term business growth, operational maturity, and digital transformation goals." },
  { title: "Odoo Implementation", href: "/odoo-implementation", tagline: "Deploy & Adopt", icon: Rocket,
    description: "End-to-end Odoo ERP implementation services designed to align technology with operational workflows." },
  { title: "ERP Rescue & Recovery", href: "/odoo-rescue", tagline: "Stabilize & Recover", icon: LifeBuoy,
    description: "This pillar extends the flagship ERP Rescue Program™ and focuses on stabilizing underperforming ERP systems." },
  { title: "Development & Customization", href: "/odoo-customization", tagline: "Tailored Solutions", icon: Code2,
    description: "We build scalable ERP customizations that enhance business functionality while preserving long-term system maintainability." },
  { title: "ERP Integration Services", href: "/odoo-integration", tagline: "Connect Your Stack", icon: Plug,
    description: "Modern ERP environments depend on seamless system integration. We build robust integration ecosystems." },
  { title: "Data, BI & Analytics", tagline: "Real-Time Reporting", icon: BarChart3,
    description: "ERP systems generate massive operational data. We transform that data into decision-ready intelligence." },
  { title: "AI-Driven Intelligence", tagline: "Predict & Automate", icon: BrainCircuit,
    description: "We integrate AI models into ERP systems to enable predictive decision-making and operational optimization." },
  { title: "Managed Services (AMS)", href: "/odoo-support", tagline: "Ongoing Partnership", icon: Headphones,
    description: "We provide long-term ERP support that ensures systems remain stable, secure, and continuously improving." },
  { title: "Cloud & DevOps", tagline: "Speed & Scale", icon: Cloud,
    description: "Modern ERP systems require scalable cloud infrastructure. We design and manage ERP environments on leading cloud platforms." },
  { title: "Digital Commerce", tagline: "Order to Delivery", icon: ShoppingCart,
    description: "We connect ERP operations directly with customer-facing systems to enable seamless order-to-delivery workflows." },
];

export default function ServicePillars() {
  return (
    <section id="pillars" className="scroll-mt-24 border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
      <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={1}
          label="What we do"
          title="The 10 Core Service Pillars"
          text="Each pillar represents deep expertise and proven delivery excellence across every stage of your ERP evolution."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {servicePillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                className="group flex gap-5 rounded-[20px] bg-[#F8FAFC] p-6 ring-1 ring-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_12px_30px_rgba(0,61,130,0.08)]"
              >
                <div className="flex flex-col items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#003D82] ring-1 ring-[#E2E8F0] transition-colors group-hover:bg-[#003D82] group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <span className="text-sm font-bold text-[#CBD5E1]">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0EA5E9]">{p.tagline}</div>
                  <h3 className="mb-2 text-lg font-bold text-[#003D82]">{p.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#64748B]">{p.description}</p>
                  {"href" in p && p.href && (
                    <Link href={p.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#003D82] hover:underline">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
