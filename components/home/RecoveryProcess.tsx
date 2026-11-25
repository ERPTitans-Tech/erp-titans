"use client";

import { useCycle } from "@/lib/hooks/useCycle";
import { m, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, Pause, Play } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    title: "ERP Health Audit",
    description: "A comprehensive diagnostic of your current system, processes, and alignment gaps. Low risk, high value.",
    deliverables: ["System and process diagnostic", "Prioritised list of issues", "Risks and quick wins summary"],
  },
  {
    title: "Root Cause Analysis",
    description: "We don't just patch symptoms. We dig deep to identify exactly why the implementation failed.",
    deliverables: ["Root cause behind each issue", "Data quality review", "Configuration and customization review"],
  },
  {
    title: "Recovery Roadmap",
    description: "A pragmatic, phased action plan to stabilize operations and recover lost value without massive disruption.",
    deliverables: ["Phased recovery plan", "Priority and effort per phase", "Plan to keep operations running"],
  },
  {
    title: "Optimization & Scale",
    description: "Once stabilized, we optimize workflows, reporting, and adoption to finally achieve the promised ROI.",
    deliverables: ["Workflow and automation fixes", "Reporting your team trusts", "Training and adoption support"],
  },
];

export default function RecoveryProcess() {
  const c = useCycle(steps.length, 4500);
  const active = c.active;
  const step = steps[active];

  return (
    <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24" id="process">
      <div ref={c.ref} {...c.hoverProps} className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={3}
          label="Our process"
          title="The Path to Recovery"
          text="We use a structured, predictable framework to turn failing systems into growth engines."
          align="center"
        />

        {/* Stepper */}
        <div className="relative">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-[3px] rounded-full bg-[#E2E8F0] md:block" aria-hidden="true">
            <m.div
              className="h-full rounded-full bg-gradient-to-r from-[#003D82] via-[#0EA5E9] to-[#16A34A]"
              animate={{ width: `${(active / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>
          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4" role="tablist" aria-label="Recovery steps">
            {steps.map((s, i) => {
              const on = i === active;
              const done = i < active;
              return (
                <button
                  key={s.title}
                  role="tab"
                  aria-selected={on}
                  onClick={() => c.go(i)}
                  className="group flex flex-col items-center text-center"
                >
                  <span
                    className={`relative flex h-16 w-16 items-center justify-center rounded-full text-xl font-extrabold tabular-nums ring-4 ring-white transition-all duration-300 ${
                      on
                        ? "scale-110 bg-[#003D82] text-white shadow-[0_10px_25px_rgba(0,61,130,0.35)]"
                        : done
                        ? "bg-[#EFF6FF] text-[#003D82]"
                        : "bg-[#F8FAFC] text-[#94A3B8] ring-[#F8FAFC] group-hover:text-[#003D82]"
                    }`}
                  >
                    {done ? <Check size={22} strokeWidth={3} /> : String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`mt-4 text-[15px] font-bold transition-colors ${on ? "text-[#003D82]" : "text-[#0F172A]"}`}>{s.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail panel */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <m.div
              key={step.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8 rounded-[28px] bg-[#F8FAFC] p-7 ring-1 ring-[#E2E8F0] sm:p-10 md:grid-cols-2"
            >
              <div className="flex flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#003D82]" aria-hidden="true" />
                  <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">
                    Step {String(active + 1).padStart(2, "0")} of {String(steps.length).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-3xl">{step.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-[#475569]">{step.description}</p>
                <div className="mt-7 flex gap-3 md:mt-auto md:pt-7">
                  <button
                    onClick={c.prev}
                    aria-label="Previous step"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#003D82] ring-1 ring-[#E2E8F0] transition-all hover:ring-[#003D82]/40 disabled:opacity-40"
                  >
                    <ArrowLeft size={18} />
                  </button>
                  <button
                    onClick={c.next}
                    className="inline-flex items-center gap-2 rounded-full bg-[#003D82] px-6 text-sm font-semibold text-white transition-all hover:bg-[#003D82]/90 disabled:opacity-40"
                  >
                    Next step <ArrowRight size={16} />
                  </button>
                  <button
                    onClick={c.toggle}
                    aria-label={c.playing ? "Pause the recovery steps" : "Play the recovery steps"}
                    className="inline-flex h-11 items-center gap-1.5 rounded-full bg-white px-4 text-sm font-semibold text-[#003D82] ring-1 ring-[#E2E8F0] transition-all hover:ring-[#003D82]/40"
                  >
                    {c.playing ? <Pause size={14} /> : <Play size={14} />} {c.playing ? "Pause" : "Play"}
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 ring-1 ring-[#E2E8F0]">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#64748B]">What you get</span>
                <ul className="mt-4 space-y-3">
                  {step.deliverables.map((d, i) => (
                    <m.li
                      key={d}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-3 text-[15px] font-medium text-[#0F172A]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16A34A]/10">
                        <Check size={12} strokeWidth={3} className="text-[#16A34A]" />
                      </span>
                      {d}
                    </m.li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-[#F1F5F9] pt-5">
                  <div className="mb-2 flex justify-between text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    <span>Recovery progress</span>
                    <span className="text-[#003D82]">{((active + 1) / steps.length) * 100}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#F1F5F9]">
                    <m.div
                      className="h-full rounded-full bg-[#003D82]"
                      initial={false}
                      animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
