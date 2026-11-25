"use client";

// "Where are you today?" — visitors pick their situation and see which service fits,
// what the first weeks look like and where to go next. Cycles gently until someone clicks.

import Link from "next/link";
import { m, AnimatePresence } from "framer-motion";
import { useCycle } from "@/lib/hooks/useCycle";
import CycleControls from "@/components/ui/CycleControls";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Tick from "@/components/ui/Tick";

type Situation = {
  key: string;
  label: string;
  quote: string;
  service: string;
  href: string;
  why: string;
  firstWeeks: string[];
  also?: { label: string; href: string };
};

const situations: Situation[] = [
  {
    key: "new",
    label: "We're outgrowing spreadsheets",
    quote: "QuickBooks and spreadsheets got us here, but they won't get us to the next stage.",
    service: "Odoo Implementation",
    href: "/odoo-implementation",
    why: "A structured implementation maps how you work today, then configures Odoo around it so the team adopts it from day one.",
    firstWeeks: ["Discovery workshops with each department", "Signed-off solution blueprint and data plan", "A first working prototype on your own data"],
    also: { label: "Need it connected to other tools?", href: "/odoo-integration" },
  },
  {
    key: "stuck",
    label: "Our Odoo project has stalled",
    quote: "We're live, but people still work around the system and month-end takes forever.",
    service: "Odoo Rescue & Recovery",
    href: "/odoo-rescue",
    why: "Recovery starts with a fixed-scope audit, so you know exactly what is wrong and what it takes to fix before committing further.",
    firstWeeks: ["Access secured from the previous partner", "Root-cause audit ranked by business impact", "Critical issues stabilized first"],
    also: { label: "Want ongoing help afterwards?", href: "/odoo-support" },
  },
  {
    key: "old",
    label: "We're on an old Odoo version",
    quote: "We're a few versions behind and every upgrade quote scares us.",
    service: "Odoo Migration & Upgrades",
    href: "/odoo-migration",
    why: "A tested migration moves your data and custom modules forward, with rehearsals before cut-over so nothing surprises you on the day.",
    firstWeeks: ["Version and custom-module assessment", "Test migration on a copy of your database", "Cut-over plan agreed with your team"],
  },
  {
    key: "custom",
    label: "Odoo doesn't quite fit how we work",
    quote: "Standard Odoo covers 80% of what we need. The last 20% is where we lose time.",
    service: "Odoo Customization & Development",
    href: "/odoo-customization",
    why: "We configure first and customize only where it adds real value, building modules that stay clean and upgradable.",
    firstWeeks: ["Gap analysis against standard Odoo", "Specification for each change, agreed up front", "First module delivered to a test environment"],
  },
  {
    key: "connect",
    label: "Our systems don't talk to each other",
    quote: "Orders, shipping and accounting live in different places and we re-key everything.",
    service: "Odoo Integration",
    href: "/odoo-integration",
    why: "Integrations remove the double entry: e-commerce, shipping, payments, banking and reporting tools connected to one source of truth.",
    firstWeeks: ["Map of every system and data flow", "Integration design with error handling", "First connection live in a test environment"],
  },
  {
    key: "support",
    label: "We need someone on call",
    quote: "Odoo runs our business. We need a team who knows it when something breaks.",
    service: "Odoo Support & Managed Services",
    href: "/odoo-support",
    why: "Ongoing support keeps the system stable, upgraded and improving, with one team that already knows your setup.",
    firstWeeks: ["Onboarding review of your database and modules", "Support channels and response times agreed", "A backlog of improvements, prioritized with you"],
  },
];

export default function ServiceFinder() {
  const c = useCycle(situations.length, 5200);
  const active = c.active;
  const s = situations[active];

  return (
    <section id="start" className="scroll-mt-24 border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={1}
          label="Start here"
          title="Where is your business today?"
          text="Pick the situation that sounds most like yours. We'll show you the service that fits, and what the first few weeks with us look like."
        />

        <div ref={c.ref} {...c.hoverProps} className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.35fr] lg:gap-8">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1" role="tablist" aria-label="Your situation">
            {situations.map((x, i) => {
              const on = i === active;
              return (
                <button
                  key={x.key}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => c.go(i)}
                  className={`relative overflow-hidden rounded-2xl px-5 py-4 text-left text-[15.5px] font-semibold transition-all ${
                    on
                      ? "bg-[#003D82] text-white shadow-[0_10px_24px_rgba(0,61,130,0.22)]"
                      : "bg-[#F8FAFC] text-[#334155] ring-1 ring-[#E2E8F0] hover:bg-white hover:ring-[#003D82]/25"
                  }`}
                >
                  {x.label}
                  {on && c.running && (
                    <m.span
                      key={c.cycleKey}
                      className="absolute bottom-0 left-0 h-[3px] bg-[#0EA5E9]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5.2, ease: "linear" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-[28px] bg-gradient-to-br from-[#EFF6FF] via-white to-[#F0FDF4] p-6 ring-1 ring-[#003D82]/10 sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748B]">Situation {active + 1} of {situations.length}</span>
              <CycleControls playing={c.playing} onToggle={c.toggle} onPrev={c.prev} onNext={c.next} label="service finder" />
            </div>
            <AnimatePresence mode="wait">
              <m.div
                key={s.key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-1 flex-col"
              >
                <p className="border-l-2 border-[#0EA5E9] pl-4 text-[17px] italic leading-relaxed text-[#334155]">&ldquo;{s.quote}&rdquo;</p>

                <div className="mt-6 flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-[#E2E8F0]">
                  <span className="h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-[#003D82] to-[#16A34A]" aria-hidden="true" />
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#16A34A]">The right fit</div>
                    <div className="text-lg font-extrabold text-[#003D82]">{s.service}</div>
                  </div>
                </div>

                <p className="mt-5 text-[15.5px] leading-relaxed text-[#475569]">{s.why}</p>

                <div className="mt-5">
                  <div className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748B]">Your first few weeks</div>
                  <ul className="space-y-2.5">
                    {s.firstWeeks.map((w) => (
                      <li key={w} className="flex items-start gap-2.5 text-[15px] font-medium text-[#0F172A]">
                        <Tick tone="green" className="mt-0.5" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-auto lg:pt-7">
                  <Link
                    href={s.href}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#003D82] px-6 py-3 text-sm font-semibold text-white transition-all hover:gap-3 hover:bg-[#002B5C]"
                  >
                    Explore {s.service} <ArrowRight size={16} />
                  </Link>
                  {s.also && (
                    <Link href={s.also.href} className="text-sm font-semibold text-[#003D82] hover:underline">
                      {s.also.label} →
                    </Link>
                  )}
                </div>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
