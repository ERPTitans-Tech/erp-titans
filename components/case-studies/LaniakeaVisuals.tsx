// Illustrative, code-drawn mock-ups for the Laniakea Brands case study.
// They show the *shape* of what was built. All values are sample data,
// not client data, and each figure is captioned accordingly.

import type { ReactNode } from "react";
import { CheckCircle2, FileCheck2, Lock, Download, CalendarClock, ArrowRight, ArrowDown } from "lucide-react";

function Caption({ children }: { children: ReactNode }) {
  return (
    <figcaption className="mt-3 text-xs font-medium text-[#94A3B8] text-center">{children}</figcaption>
  );
}

/* ───────────────────────── Certificate of Analysis ───────────────────────── */

const coaTests = [
  { test: "Potency: THC / THCA", result: "Within label tolerance" },
  { test: "Potency: CBD / CBDA", result: "Within label tolerance" },
  { test: "Microbial contaminants", result: "Pass" },
  { test: "Pesticide active ingredients", result: "Not detected" },
  { test: "Heavy metals", result: "Below limits" },
  { test: "Mycotoxins", result: "Below limits" },
  { test: "Foreign matter", result: "Pass" },
];

export function CoaMockup() {
  return (
    <figure>
      <div className="rounded-[20px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,61,130,0.10)] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-[#003D82] text-white">
          <div className="flex items-center gap-2.5">
            <FileCheck2 size={20} />
            <span className="font-bold tracking-tight">Certificate of Analysis</span>
          </div>
          <span className="text-xs font-semibold bg-white/15 rounded-full px-3 py-1">Lot LOT-0187-PR</span>
        </div>

        <div className="grid grid-cols-3 gap-px bg-gray-100 text-[13px]">
          {[
            ["Product", "Pre-roll 1 g"],
            ["Lab", "Licensed testing lab"],
            ["Linked to", "Lot & blend genealogy"],
          ].map(([k, v]) => (
            <div key={k} className="bg-[#F8FAFC] px-4 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#94A3B8]">{k}</div>
              <div className="font-semibold text-[#0F172A]">{v}</div>
            </div>
          ))}
        </div>

        <ul className="divide-y divide-gray-100">
          {coaTests.map((t) => (
            <li key={t.test} className="flex items-center justify-between px-6 py-3 text-[14px]">
              <span className="text-[#334155] font-medium">{t.test}</span>
              <span className="inline-flex items-center gap-1.5 text-[#16A34A] font-semibold">
                <CheckCircle2 size={16} /> {t.result}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between px-6 py-4 bg-green-50/70 border-t border-green-100">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
            <Lock size={15} className="text-[#64748B]" /> Quarantine → QC approved
          </span>
          <span className="rounded-full bg-[#16A34A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
            Released
          </span>
        </div>
      </div>
      <Caption>Illustrative mock-up with sample values, not client data</Caption>
    </figure>
  );
}

/* ───────────────────────── CTLS monthly report ───────────────────────── */

const ctlsRows = [
  { cat: "Dried cannabis", open: "4,820", add: "+2,140", red: "−2,615", close: "4,345" },
  { cat: "Pre-rolls", open: "11,300", add: "+6,900", red: "−7,450", close: "10,750" },
  { cat: "Bulk (kg)", open: "212.4", add: "+96.0", red: "−104.8", close: "203.6" },
];

export function CtlsMockup() {
  return (
    <figure>
      <div className="rounded-[20px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,61,130,0.10)] overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#16A34A]">Health Canada</div>
            <div className="font-bold text-[#0F172A]">CTLS Monthly Tracking Report</div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1">
            <CalendarClock size={14} /> Due by the 15th
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-[12.5px]">
            <thead>
              <tr className="bg-[#F8FAFC] text-[11px] uppercase tracking-wider text-[#64748B]">
                <th className="text-left font-semibold pl-5 pr-2 py-3">Category</th>
                <th className="text-right font-semibold px-2 py-3">Open</th>
                <th className="text-right font-semibold px-2 py-3">Add</th>
                <th className="text-right font-semibold px-2 py-3">Reduce</th>
                <th className="text-right font-semibold pl-2 pr-5 py-3">Close</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {ctlsRows.map((r) => (
                <tr key={r.cat}>
                  <td className="pl-5 pr-2 py-3 font-semibold text-[#0F172A]">{r.cat}</td>
                  <td className="px-2 py-3 text-right text-[#475569] tabular-nums whitespace-nowrap">{r.open}</td>
                  <td className="px-2 py-3 text-right text-[#16A34A] font-medium tabular-nums whitespace-nowrap">{r.add}</td>
                  <td className="px-2 py-3 text-right text-[#B45309] font-medium tabular-nums whitespace-nowrap">{r.red}</td>
                  <td className="pl-2 pr-5 py-3 text-right font-bold text-[#003D82] tabular-nums whitespace-nowrap">{r.close}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-px bg-gray-100 border-t border-gray-100 text-[12px]">
          {["Sold to provincial distributors", "Destroyed (with destruction log)", "Closing book value"].map((l) => (
            <div key={l} className="bg-white px-4 py-3 flex items-center gap-1.5 text-[#475569] font-medium">
              <CheckCircle2 size={14} className="text-[#16A34A] shrink-0" /> {l}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 px-6 py-4 bg-[#F8FAFC]">
          <span className="text-[13px] font-medium text-[#64748B]">Generated from posted Odoo transactions</span>
          <span className="inline-flex items-center gap-2 rounded-lg bg-[#003D82] text-white text-xs font-semibold px-3.5 py-2 whitespace-nowrap shrink-0">
            <Download size={14} /> Export CTLS CSV
          </span>
        </div>
      </div>
      <Caption>Illustrative mock-up with sample values, not client data</Caption>
    </figure>
  );
}

/* ───────────────────────── Lot genealogy flow ───────────────────────── */

const genealogy = [
  { stage: "Receive", title: "Vendor biomass lot", detail: "COA captured · QC hold" },
  { stage: "Blend", title: "Blend lot", detail: "Parent-child genealogy" },
  { stage: "Produce", title: "Pre-roll / flower run", detail: "Weights, loss & QC by stage" },
  { stage: "Package", title: "Province-specific SKU", detail: "Excise stamp & label" },
  { stage: "Ship", title: "Provincial distributor", detail: "Lot-level delivery record" },
];

export function GenealogyFlow() {
  return (
    <figure>
      <div className="rounded-[24px] bg-gradient-to-br from-[#003D82] to-[#0F2A52] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,61,130,0.18)]">
        <div className="flex flex-col lg:flex-row items-stretch gap-3">
          {genealogy.map((g, i) => (
            <div key={g.stage} className="flex flex-col lg:flex-row items-center gap-3 flex-1">
              <div className="w-full flex-1 rounded-2xl bg-white/[0.07] border border-white/15 px-5 py-4 backdrop-blur">
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#86EFAC] mb-1">
                  {String(i + 1).padStart(2, "0")} · {g.stage}
                </div>
                <div className="font-bold text-white leading-snug">{g.title}</div>
                <div className="text-[13px] text-white/70 mt-1">{g.detail}</div>
              </div>
              {i < genealogy.length - 1 && (
                <>
                  <ArrowRight size={18} className="hidden lg:block text-white/50 shrink-0" />
                  <ArrowDown size={18} className="lg:hidden text-white/50 shrink-0" />
                </>
              )}
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm font-medium text-white/80">
          Trace any finished unit back to its source lots, or forward to every customer it reached, in one lookup.
        </p>
      </div>
    </figure>
  );
}

/* ───────────────────────── Power BI dashboard ───────────────────────── */

const bars = [62, 74, 58, 81, 69, 88, 77, 92, 84, 95, 89, 98];

export function DashboardMockup() {
  return (
    <figure>
      <div className="rounded-[20px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,61,130,0.10)] p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-[#0F172A]">Production Efficiency</span>
          <div className="flex gap-1.5">
            {["OEE", "COGS", "WIP", "Sales"].map((t, i) => (
              <span
                key={t}
                className={`text-[11px] font-semibold rounded-md px-2 py-1 ${
                  i === 0 ? "bg-[#003D82] text-white" : "bg-[#F1F5F9] text-[#64748B]"
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            ["Units / hour", "▲"],
            ["Waste %", "▼"],
            ["Sched. vs actual", "●"],
          ].map(([l, m]) => (
            <div key={l} className="rounded-xl bg-[#F8FAFC] border border-gray-100 px-3 py-2.5">
              <div className="text-[11px] font-semibold text-[#64748B]">{l}</div>
              <div className="h-2 mt-2 rounded-full bg-[#E2E8F0] overflow-hidden">
                <div className="h-full w-2/3 rounded-full bg-[#003D82]" />
              </div>
              <div className="sr-only">{m}</div>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 360 120" className="w-full h-auto" role="img" aria-label="Sample bar chart">
          {[30, 60, 90].map((y) => (
            <line key={y} x1="0" x2="360" y1={y} y2={y} stroke="#E2E8F0" strokeDasharray="3 4" />
          ))}
          {bars.map((v, i) => (
            <rect
              key={i}
              x={i * 30 + 6}
              y={120 - v}
              width="18"
              height={v}
              rx="4"
              fill={i === bars.length - 1 ? "#16A34A" : "#003D82"}
              opacity={0.35 + (i / bars.length) * 0.65}
            />
          ))}
        </svg>
      </div>
      <Caption>Illustrative mock-up with sample values, not client data</Caption>
    </figure>
  );
}
