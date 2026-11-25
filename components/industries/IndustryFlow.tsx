"use client";

// Auto-playing walkthrough of an industry's core flow in Odoo. Each step shows the app
// involved and a sample record, so visitors see what the system looks like at that moment.
// Loops while visible; hover pauses; steps, previous/next and play/pause are always available.

import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { useCycle } from "@/lib/hooks/useCycle";
import CycleControls from "@/components/ui/CycleControls";
import type { FlowStep } from "@/lib/industry-extras";

const toneCls = {
  green: "bg-[#DCFCE7] text-[#166534]",
  sky: "bg-[#E0F2FE] text-[#075985]",
  amber: "bg-[#FEF3C7] text-[#92400E]",
};

export default function IndustryFlow({ steps }: { steps: FlowStep[] }) {
  const c = useCycle(steps.length, 5200);
  const s = steps[c.active];

  return (
    <div ref={c.ref} {...c.hoverProps} className="overflow-hidden rounded-[28px] bg-white ring-1 ring-[#E2E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
      {/* step rail */}
      <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-4 sm:px-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748B]">
            Step {c.active + 1} of {steps.length}
          </span>
          <CycleControls playing={c.playing} onToggle={c.toggle} onPrev={c.prev} onNext={c.next} label="process walkthrough" />
        </div>
        <ol className="grid gap-2" style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }} role="tablist" aria-label="Process steps">
          {steps.map((st, i) => {
            const on = i === c.active;
            const done = i < c.active;
            return (
              <li key={st.title}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-label={st.title}
                  onClick={() => c.go(i)}
                  className={`group relative flex w-full flex-col items-center gap-2 overflow-hidden rounded-xl px-1 py-2.5 text-center transition-all sm:px-2 ${
                    on ? "bg-white shadow-[0_6px_18px_rgba(0,61,130,0.10)] ring-1 ring-[#003D82]/15" : "hover:bg-white/70"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ring-1 transition-colors sm:h-10 sm:w-10 ${
                      on ? "bg-white ring-[#003D82]/30" : done ? "bg-[#F0FDF4] ring-green-200" : "bg-white ring-[#E2E8F0]"
                    }`}
                  >
                    <Image src={`/odoo-icons/svg/${st.app}.svg`} alt="" width={50} height={50} className="h-6 w-6" />
                  </span>
                  <span className={`hidden text-[12.5px] font-bold leading-tight md:block ${on ? "text-[#003D82]" : "text-[#475569]"}`}>{st.title}</span>
                  <span className={`absolute bottom-0 left-0 h-[3px] w-full ${done ? "bg-[#16A34A]/40" : "bg-transparent"}`} />
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
              </li>
            );
          })}
        </ol>
      </div>

      {/* detail */}
      <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
        <AnimatePresence mode="wait">
          <m.div
            key={`t-${c.active}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col justify-center"
          >
            <span className="mb-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0EA5E9]">Odoo {s.appName}</span>
            <h3 className="text-2xl font-extrabold text-[#0F172A] md:text-[28px]">{s.title}</h3>
            <p className="mt-3 text-[16.5px] leading-relaxed text-[#475569]">{s.text}</p>
          </m.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <m.div
            key={`r-${c.active}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#F0FDF4] p-4 ring-1 ring-[#003D82]/10 sm:p-5"
          >
            <div className="rounded-xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-[#E2E8F0]">
              <div className="flex items-center justify-between gap-3 border-b border-[#F1F5F9] px-5 py-3.5">
                <div className="flex items-center gap-2.5">
                  <Image src={`/odoo-icons/svg/${s.app}.svg`} alt="" width={50} height={50} className="h-5 w-5" />
                  <span className="text-[15px] font-bold text-[#0F172A]">{s.record.ref}</span>
                </div>
                <span className={`rounded-full px-2.5 py-0.5 text-[11.5px] font-bold ${toneCls[s.record.tone]}`}>{s.record.status}</span>
              </div>
              <dl className="divide-y divide-[#F1F5F9] px-5">
                {s.record.rows.map(([k, v], i) => (
                  <m.div
                    key={k}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.1 }}
                    className="flex items-center justify-between gap-4 py-3 text-[14px]"
                  >
                    <dt className="text-[#64748B]">{k}</dt>
                    <dd className="text-right font-semibold text-[#0F172A]">{v}</dd>
                  </m.div>
                ))}
              </dl>
            </div>
            <p className="mt-3 text-center text-[12px] text-[#64748B]">Sample record</p>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
