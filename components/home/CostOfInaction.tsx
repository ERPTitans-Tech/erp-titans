"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { TrendingDown, Coins, EyeOff, ArrowDownRight, Info } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const costs = [
  {
    title: "Lost Productivity",
    description: "Employees spend hours finding workarounds, entering double data, and fighting the system instead of doing their jobs.",
    icon: TrendingDown,
  },
  {
    title: "Increased Operational Costs",
    description: "You're paying high licensing fees for a system that isn't delivering value, while operational efficiency plummets.",
    icon: Coins,
  },
  {
    title: "Poor Visibility",
    description: "Management cannot trust the reports. Financial closes take weeks instead of days, delaying critical decisions.",
    icon: EyeOff,
  },
  {
    title: "Missed Growth Opportunities",
    description: "Instead of scaling the business, your leadership team is bogged down trying to stabilize basic IT infrastructure.",
    icon: ArrowDownRight,
  },
];

const WORK_WEEKS = 48;
const FTE_HOURS = 1880;

function Slider({
  label,
  value,
  min,
  max,
  step = 1,
  format,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  format: (n: number) => string;
  onChange: (n: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <label className="block">
      <span className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-semibold text-[#475569]">{label}</span>
        <span className="text-base font-bold text-[#0F172A]">{format(value)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full accent-[#003D82]"
        style={{ background: `linear-gradient(to right, #003D82 ${pct}%, #E2E8F0 ${pct}%)` }}
      />
    </label>
  );
}

const money = (n: number) => "$" + Math.round(n).toLocaleString("en-US");

export default function CostOfInaction() {
  const [people, setPeople] = useState(25);
  const [hours, setHours] = useState(3);
  const [rate, setRate] = useState(55);

  const hoursYear = people * hours * WORK_WEEKS;
  const costYear = hoursYear * rate;
  const fte = hoursYear / FTE_HOURS;

  return (
    <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24" id="cost">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <SectionHeader
          n={2}
          label="Cost of inaction"
          title="The Cost of Doing Nothing"
          text="A broken ERP doesn't just stay broken; it drains your resources every single day you ignore it."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          {/* Calculator */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-[28px] bg-white p-7 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0] sm:p-8"
          >
            <div className="mb-7 flex flex-wrap items-start justify-between gap-3">
              <div>
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">Workaround cost estimator</span>
                <p className="mt-1 text-sm text-[#64748B]">Move the sliders to match your business.</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-dashed border-[#003D82]/30 bg-[#EFF6FF] px-2.5 py-1 text-[11px] font-semibold text-[#003D82]">
                <Info size={12} /> Illustrative estimate
              </span>
            </div>

            <div className="space-y-6">
              <Slider label="People using the ERP" value={people} min={5} max={250} step={5} format={(n) => `${n}`} onChange={setPeople} />
              <Slider label="Hours lost per person, per week" value={hours} min={1} max={10} format={(n) => `${n} h`} onChange={setHours} />
              <Slider label="Average loaded hourly cost" value={rate} min={30} max={120} step={5} format={(n) => `$${n}/h`} onChange={setRate} />
            </div>

            <div className="mt-8 grid grid-cols-3 divide-x divide-[#E2E8F0] rounded-2xl bg-[#F8FAFC] py-5 ring-1 ring-[#E2E8F0]">
              {[
                { label: "Hours lost / year", value: Math.round(hoursYear).toLocaleString("en-US") },
                { label: "Full-time roles", value: fte.toFixed(1) },
                { label: "Cost / year", value: money(costYear), strong: true },
              ].map((o) => (
                <div key={o.label} className="px-3 text-center">
                  <m.div
                    key={o.value}
                    initial={{ opacity: 0.4, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-xl font-extrabold tracking-tight sm:text-2xl ${o.strong ? "text-[#DC2626]" : "text-[#0F172A]"}`}
                  >
                    {o.value}
                  </m.div>
                  <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#64748B]">{o.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#64748B]">
              Based on {WORK_WEEKS} working weeks and {FTE_HOURS.toLocaleString("en-US")} hours per full-time role. Workaround time only;
              excludes licence, error and opportunity costs.
            </p>
          </m.div>

          {/* Cost cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {costs.map((c, i) => {
              const Icon = c.icon;
              return (
                <m.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="group flex flex-col rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0] transition-all duration-300 hover:-translate-y-1 hover:ring-[#DC2626]/30"
                >
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF2F2] text-[#DC2626] transition-colors group-hover:bg-[#DC2626] group-hover:text-white">
                    <Icon size={22} />
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-[#0F172A]">{c.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#64748B]">{c.description}</p>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
