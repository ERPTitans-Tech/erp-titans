"use client";

// Interactive, illustrative data visuals for the cannabis case study, drawn in
// ERP Titans' own visual language: light panels, brand navy (#003D82), sky and
// green accents, Inter type and official Odoo app icons.
// Every figure is SAMPLE DATA. None of it is client data, and each visual
// is noted once on the page.

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { m, AnimatePresence, useInView } from "framer-motion";
import { CheckCircle2, FlaskConical, Lock, Unlock, Truck, FileSpreadsheet, GitMerge, Factory, PackageCheck, RotateCcw, BarChart3 } from "lucide-react";

const NAVY = "#003D82";
const SKY = "#0EA5E9";
const GREEN = "#16A34A";

/* ───────────────────────── shared bits ───────────────────────── */


function Eyebrow({ children, color = NAVY }: { children: string; color?: string }) {
  return (
    <div className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color }}>
      {children}
    </div>
  );
}

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

/* ───────────────────────── 1. Hero: Odoo orbit ───────────────────────── */

// Positions are percentages of a 400 x 340 canvas, so HTML cards and SVG lines line up.
const orbitNodes = [
  { id: "vendor", label: "Vendor lots", icon: "/odoo-icons/svg/purchase.svg", x: 20, y: 17 },
  { id: "lab", label: "Lab COA", icon: "/odoo-icons/svg/quality_control.svg", x: 80, y: 17 },
  { id: "floor", label: "Shop floor", icon: "/odoo-icons/svg/mrp.svg", x: 13, y: 52 },
  { id: "dist", label: "Distributors", icon: "/odoo-icons/svg/sale_management.svg", x: 87, y: 52 },
  { id: "fin", label: "Finance", icon: "/odoo-icons/svg/accountant.svg", x: 24, y: 86 },
  { id: "ctls", label: "CTLS report", icon: "", x: 76, y: 86 },
];
const HUB = { x: 50, y: 52 };

export function HeroDataGraph() {
  const W = 400;
  const H = 340;
  const px = (p: number) => (p / 100) * W;
  const py = (p: number) => (p / 100) * H;

  return (
    <div className="relative overflow-hidden rounded-t-[24px] bg-gradient-to-b from-[#EFF6FF] via-white to-white">
      <div className="relative aspect-[400/340] w-full">
        <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
          {/* orbit rings */}
          {[70, 118, 166].map((r, i) => (
            <ellipse key={r} cx={px(HUB.x)} cy={py(HUB.y)} rx={r} ry={r * 0.78} fill="none" stroke={NAVY} strokeOpacity={0.08 + i * 0.02} strokeDasharray={i === 1 ? "4 6" : undefined} />
          ))}

          {orbitNodes.map((n) => {
            const out = n.id === "ctls";
            const d = out
              ? `M${px(HUB.x)},${py(HUB.y)} L${px(n.x)},${py(n.y)}`
              : `M${px(n.x)},${py(n.y)} L${px(HUB.x)},${py(HUB.y)}`;
            return (
              <g key={n.id}>
                <path d={d} stroke={out ? GREEN : NAVY} strokeOpacity="0.22" strokeWidth="1.5" />
                {[0, 1].map((k) => (
                  <circle key={k} r="3" fill={out ? GREEN : SKY}>
                    <animateMotion dur="2.6s" begin={`${k * 1.3}s`} repeatCount="indefinite" path={d} />
                  </circle>
                ))}
              </g>
            );
          })}

          <circle cx={px(HUB.x)} cy={py(HUB.y)} r="40" fill={SKY} fillOpacity="0.12">
            <animate attributeName="r" values="38;50;38" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" values=".18;0;.18" dur="3.2s" repeatCount="indefinite" />
          </circle>
        </svg>

        {/* hub */}
        <div className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center" style={{ left: `${HUB.x}%`, top: `${HUB.y}%` }}>
          <div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#003D82] text-[19px] font-extrabold text-white shadow-[0_10px_30px_rgba(0,61,130,0.35)] ring-4 ring-white">
            Odoo
          </div>
        </div>
        <div
          className="absolute -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-[11px] font-semibold text-[#003D82] sm:text-xs shadow-sm ring-1 ring-[#003D82]/10"
          style={{ left: `${HUB.x}%`, top: `calc(${HUB.y}% + 46px)` }}
        >
          One system of record
        </div>

        {/* department cards */}
        {orbitNodes.map((n) => (
          <div
            key={n.id}
            className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-xl bg-white px-2 py-1.5 text-[11px] font-semibold shadow-[0_6px_18px_rgba(15,23,42,0.08)] ring-1 ${
              n.id === "ctls" ? "text-[#166534] ring-green-200" : "text-[#0F172A] ring-[#E2E8F0]"
            }`}
            style={{ left: `${n.x}%`, top: `${n.y}%` }}
          >
            {n.icon ? (
              <Image src={n.icon} alt="" width={50} height={50} className="h-5 w-5" />
            ) : (
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-green-50">
                <FileSpreadsheet size={13} className="text-[#16A34A]" />
              </span>
            )}
            {n.label}
          </div>
        ))}
      </div>

    </div>
  );
}

/* ───────────────────────── 2. Data-flow stepper ───────────────────────── */

const steps = [
  {
    key: "receive",
    icon: FlaskConical,
    title: "Receive & hold for COA",
    text: "Biomass arrives, gets a lot number and goes straight into quarantine. Nothing moves until the lab's Certificate of Analysis is reviewed and approved.",
  },
  {
    key: "blend",
    icon: GitMerge,
    title: "Blend with full genealogy",
    text: "Approved lots are blended into new lots. Odoo records every parent-child link, so any blend can be traced back to its source lots in one lookup.",
  },
  {
    key: "produce",
    icon: Factory,
    title: "Produce 1 g & 0.4 g pre-rolls",
    text: "Work orders run by line and work center, with QC checkpoints, weights and losses captured at each stage, and labour and efficiency tracked as they happen.",
  },
  {
    key: "ship",
    icon: Truck,
    title: "Ship to provincial distributors",
    text: "Province-specific SKUs, excise stamps and labels, then lot-level delivery records for every distributor order, including consignment stock.",
  },
  {
    key: "report",
    icon: FileSpreadsheet,
    title: "Report to Health Canada",
    text: "At month-end, every movement above rolls up into the CTLS report automatically: opening and closing inventory, additions, reductions and book value.",
  },
];

const card = "rounded-2xl bg-white ring-1 ring-[#E2E8F0] shadow-[0_8px_24px_rgba(15,23,42,0.06)]";

function StepVisual({ step }: { step: string }) {
  if (step === "receive") {
    const tests = ["THC / THCA", "CBD / CBDA", "Microbial", "Pesticides", "Heavy metals", "Mycotoxins"];
    return (
      <div className={`w-full max-w-md p-5 ${card}`}>
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <Eyebrow color="#64748B">Incoming lot</Eyebrow>
            <div className="font-bold text-[#0F172A]">BIO-2611-04</div>
          </div>
          <m.span
            initial={{ backgroundColor: "#FEF3C7", color: "#B45309" }}
            animate={{ backgroundColor: "#DCFCE7", color: "#15803D" }}
            transition={{ delay: 2.6, duration: 0.4 }}
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-semibold"
          >
            <Lock size={12} /> Quarantine → Released
          </m.span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {tests.map((t, i) => (
            <m.div
              key={t}
              initial={{ opacity: 0.35 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.35 }}
              className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-3 py-2 text-[13px] font-medium text-[#334155]"
            >
              {t}
              <m.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 + i * 0.35, type: "spring" }}>
                <CheckCircle2 size={15} className="text-[#16A34A]" />
              </m.span>
            </m.div>
          ))}
        </div>
      </div>
    );
  }

  if (step === "blend") {
    const sources = [
      { y: 40, label: "Lot A-117" },
      { y: 110, label: "Lot A-121" },
      { y: 180, label: "Lot B-044" },
    ];
    return (
      <svg viewBox="0 0 420 220" className="w-full max-w-md" role="img" aria-label="Illustration of lots merging into a blend lot">
        {sources.map((s, i) => (
          <g key={s.label}>
            <m.path
              d={`M124,${s.y} C220,${s.y} 220,110 298,110`}
              fill="none"
              stroke={SKY}
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.2 + i * 0.25, duration: 0.9 }}
            />
            <rect x="12" y={s.y - 17} width="112" height="34" rx="17" fill="#fff" stroke="#E2E8F0" />
            <text x="68" y={s.y + 4.5} textAnchor="middle" fill="#0F172A" fontSize="12.5" fontWeight="600" fontFamily="Inter, sans-serif">{s.label}</text>
          </g>
        ))}
        <m.g initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} style={{ transformOrigin: "354px 110px" }}>
          <rect x="298" y="82" width="112" height="56" rx="16" fill={NAVY} />
          <text x="354" y="106" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">Blend 0187</text>
          <text x="354" y="124" textAnchor="middle" fill="#BAE6FD" fontSize="10.5" fontWeight="600" fontFamily="Inter, sans-serif">3 parent lots</text>
        </m.g>
      </svg>
    );
  }

  if (step === "produce") return <ProduceVisual />;

  if (step === "ship") {
    const provinces = [
      { code: "BC", x: 60, y: 56 },
      { code: "AB", x: 140, y: 140 },
      { code: "SK", x: 220, y: 56 },
      { code: "MB", x: 300, y: 140 },
      { code: "ON", x: 380, y: 56 },
    ];
    return (
      <svg viewBox="0 0 440 220" className="w-full max-w-md" role="img" aria-label="Illustration of shipments to provincial distributors">
        <rect x="165" y="174" width="110" height="38" rx="19" fill={NAVY} />
        <text x="220" y="197.5" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">Warehouse</text>
        {provinces.map((p, i) => (
          <g key={p.code}>
            <m.path
              d={`M220,174 Q${(220 + p.x) / 2},${Math.min(p.y, 174) - 30} ${p.x},${p.y + 18}`}
              fill="none"
              stroke={SKY}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="1 6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.15 * i, duration: 0.8 }}
            />
            <m.g initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + 0.15 * i }}>
              <circle cx={p.x} cy={p.y} r="20" fill="#fff" stroke="#E2E8F0" />
              <text x={p.x} y={p.y + 4.5} textAnchor="middle" fill={NAVY} fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">{p.code}</text>
            </m.g>
          </g>
        ))}
      </svg>
    );
  }

  // report
  const rows = ["Opening inventory", "Additions: production", "Reductions: sales", "Reductions: destruction", "Closing inventory", "Book value"];
  return (
    <div className={`w-full max-w-md p-5 ${card}`}>
      <div className="mb-4 flex items-center justify-between">
        <div>
          <Eyebrow color={GREEN}>Health Canada</Eyebrow>
          <div className="font-bold text-[#0F172A]">CTLS monthly report</div>
        </div>
        <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11.5px] font-semibold text-[#003D82]">Due by the 15th</span>
      </div>
      <div className="space-y-2.5">
        {rows.map((r, i) => (
          <div key={r} className="flex items-center gap-3">
            <span className="w-44 shrink-0 text-[13px] font-medium text-[#334155]">{r}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EEF2F7]">
              <m.div
                className="h-full rounded-full"
                style={{ background: `linear-gradient(90deg, ${NAVY}, ${SKY})` }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.2 + i * 0.25, duration: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>
      <m.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.9 }} className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#16A34A]">
        <PackageCheck size={16} /> Generated from posted transactions, ready to upload
      </m.div>
    </div>
  );
}

function ProduceVisual() {
  const a = useCountUp(1840, true, 2200);
  const b = useCountUp(2960, true, 2200);
  const lines = [
    { name: "1 g pre-roll line", value: a, pct: 74, color: NAVY },
    { name: "0.4 g pre-roll line", value: b, pct: 88, color: SKY },
  ];
  return (
    <div className="w-full max-w-md space-y-4">
      {lines.map((l) => (
        <div key={l.name} className={`p-5 ${card}`}>
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-sm font-semibold text-[#334155]">{l.name}</span>
            <span className="text-2xl font-extrabold tabular-nums text-[#0F172A]">
              {l.value.toLocaleString()} <span className="text-xs font-medium text-[#64748B]">units</span>
            </span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-[#EEF2F7]">
            <m.div className="h-full rounded-full" style={{ backgroundColor: l.color }} initial={{ width: 0 }} animate={{ width: `${l.pct}%` }} transition={{ duration: 2.2, ease: "easeOut" }} />
          </div>
          <div className="mt-2 flex justify-between text-[12px] font-medium text-[#64748B]">
            <span className="inline-flex items-center gap-1"><CheckCircle2 size={13} className="text-[#16A34A]" /> QC checkpoints</span>
            <span>{l.pct}% of shift target</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function DataFlowStepper() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });

  useEffect(() => {
    if (paused || !inView) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), 6000);
    return () => clearTimeout(t);
  }, [active, paused, inView]);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <ol className="space-y-2">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const on = i === active;
          return (
            <li key={s.key}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={on}
                className={`group w-full rounded-2xl px-4 py-3.5 text-left transition-all ${
                  on ? "bg-white shadow-[0_8px_24px_rgba(0,61,130,0.10)] ring-1 ring-[#003D82]/15" : "hover:bg-white/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${on ? "bg-[#003D82] text-white" : "bg-white text-[#64748B] ring-1 ring-[#E2E8F0]"}`}>
                    <Icon size={17} />
                  </span>
                  <span className={`text-[16.5px] font-bold ${on ? "text-[#003D82]" : "text-[#475569] group-hover:text-[#0F172A]"}`}>
                    <span className="mr-2 text-[#94A3B8]">{i + 1}.</span>
                    {s.title}
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {on && (
                    <m.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pl-12 pt-2 text-[15px] leading-relaxed text-[#475569]">{s.text}</p>
                      <div className="ml-12 mt-3 h-1 overflow-hidden rounded-full bg-[#E2E8F0]">
                        {!paused && inView && (
                          <m.div
                            key={`bar-${active}`}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(90deg, ${NAVY}, ${SKY})` }}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 6, ease: "linear" }}
                          />
                        )}
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="relative flex min-h-[360px] flex-col overflow-hidden rounded-[28px] bg-gradient-to-br from-[#DBEAFE] via-[#EFF6FF] to-[#F0FDF4] p-6 ring-1 ring-[#003D82]/10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/60 blur-2xl" />
        <div className="relative mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {steps.map((s, i) => (
              <span key={s.key} className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-[#003D82]" : "w-1.5 bg-[#003D82]/25"}`} />
            ))}
          </div>
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <AnimatePresence mode="wait">
            <m.div
              key={steps[active].key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex w-full justify-center"
            >
              <StepVisual step={steps[active].key} />
            </m.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 3. Live COA check ───────────────────────── */

const coaTests = [
  { test: "Potency: THC / THCA", result: "Within label tolerance" },
  { test: "Potency: CBD / CBDA", result: "Within label tolerance" },
  { test: "Microbial contaminants", result: "Pass" },
  { test: "Pesticide active ingredients", result: "Not detected" },
  { test: "Heavy metals", result: "Below limits" },
  { test: "Mycotoxins", result: "Below limits" },
  { test: "Foreign matter", result: "Pass" },
];

export function CoaLiveCheck() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [done, setDone] = useState(0);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!inView) return;
    setDone(0);
    const timers = coaTests.map((_, i) => setTimeout(() => setDone(i + 1), 450 * (i + 1)));
    return () => timers.forEach(clearTimeout);
  }, [inView, run]);

  const released = done === coaTests.length;

  return (
    <div ref={ref} className="overflow-hidden rounded-[24px] bg-white shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0]">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-[#003D82] to-[#0B5CAD] px-6 py-4 text-white">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
            <Image src="/odoo-icons/svg/quality_control.svg" alt="" width={50} height={50} className="h-6 w-6" />
          </span>
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sky-200">Certificate of Analysis</div>
            <div className="font-bold">Lot PR-0187 · Pre-roll 0.4 g</div>
          </div>
        </div>
      </div>

      <ul className="divide-y divide-[#F1F5F9]">
        {coaTests.map((t, i) => {
          const ok = i < done;
          const checking = i === done && !released;
          return (
            <li key={t.test} className="flex items-center justify-between px-6 py-3 text-[14px]">
              <span className="font-medium text-[#334155]">{t.test}</span>
              {ok ? (
                <m.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-1.5 font-semibold text-[#16A34A]">
                  <CheckCircle2 size={16} /> {t.result}
                </m.span>
              ) : (
                <span className={`text-[12.5px] font-medium ${checking ? "text-[#0EA5E9]" : "text-[#CBD5E1]"}`}>{checking ? "Checking…" : "Pending"}</span>
              )}
            </li>
          );
        })}
      </ul>

      <div className={`flex items-center justify-between px-6 py-4 transition-colors duration-500 ${released ? "bg-green-50" : "bg-[#F8FAFC]"}`}>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
          {released ? <Unlock size={15} className="text-[#16A34A]" /> : <Lock size={15} className="text-[#64748B]" />}
          {released ? "QC approved · lot released for production" : "Lot held in quarantine"}
        </span>
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#003D82] ring-1 ring-[#E2E8F0] hover:ring-[#003D82]/40"
        >
          <RotateCcw size={13} /> Replay
        </button>
      </div>
    </div>
  );
}

/* ───────────────────────── 4. CTLS waterfall ───────────────────────── */

const waterfall = [
  { label: "Opening", value: 11300, kind: "total" as const },
  { label: "Produced", value: 6900, kind: "add" as const },
  { label: "Returns", value: 240, kind: "add" as const },
  { label: "Sold", value: -7180, kind: "sub" as const },
  { label: "Destroyed", value: -270, kind: "sub" as const },
  { label: "Closing", value: 10990, kind: "total" as const },
];

export function CtlsWaterfall() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [hover, setHover] = useState<number | null>(null);

  const max = 18500;
  const H = 200;
  const scale = (v: number) => (v / max) * H;
  let running = 0;
  const bars = waterfall.map((w) => {
    let base: number;
    let top: number;
    if (w.kind === "total") {
      base = 0;
      top = w.value;
      running = w.value;
    } else {
      base = running;
      top = running + w.value;
      running = top;
    }
    return { ...w, lo: Math.min(base, top), hi: Math.max(base, top) };
  });
  const colors = { total: NAVY, add: SKY, sub: "#F97316" };

  return (
    <div ref={ref} className="rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0]">
      <div className="mb-1 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Eyebrow color={GREEN}>Health Canada · CTLS</Eyebrow>
          <div className="font-bold text-[#0F172A]">Monthly reconciliation: pre-rolls (units)</div>
        </div>
      </div>

      <div className="mt-2 h-6 text-sm font-medium text-[#334155]">
        {hover !== null ? (
          <span>
            {bars[hover].label}:{" "}
            <span className="font-bold tabular-nums text-[#003D82]">
              {bars[hover].kind === "sub" ? "−" : bars[hover].kind === "add" ? "+" : ""}
              {Math.abs(bars[hover].value).toLocaleString()}
            </span>
          </span>
        ) : (
          <span className="text-[#94A3B8]">Hover a bar to see the movement</span>
        )}
      </div>

      <svg viewBox={`0 0 ${waterfall.length * 70} ${H + 34}`} className="h-auto w-full" role="img" aria-label="Illustrative CTLS reconciliation waterfall">
        {[0.25, 0.5, 0.75, 1].map((g) => (
          <line key={g} x1="0" x2={waterfall.length * 70} y1={H - g * H} y2={H - g * H} stroke="#EEF2F7" />
        ))}
        {bars.map((b, i) => {
          const y = H - scale(b.hi);
          const h = Math.max(2, scale(b.hi - b.lo));
          return (
            <g key={b.label} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
              <rect x={i * 70 + 10} y="0" width="50" height={H} fill="transparent" />
              <m.rect
                x={i * 70 + 13}
                width="44"
                rx="10"
                fill={colors[b.kind]}
                opacity={hover === null || hover === i ? 1 : 0.3}
                initial={{ y: H, height: 0 }}
                animate={inView ? { y, height: h } : { y: H, height: 0 }}
                transition={{ delay: i * 0.18, duration: 0.6, ease: "easeOut" }}
              />
              <text x={i * 70 + 35} y={H + 20} textAnchor="middle" fontSize="11" fontWeight="600" fill="#64748B" fontFamily="Inter, sans-serif">
                {b.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 flex flex-wrap gap-4 text-[12px] font-medium text-[#64748B]">
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: NAVY }} /> Inventory</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: SKY }} /> Additions</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-[#F97316]" /> Reductions</span>
      </div>
    </div>
  );
}

/* ───────────────────────── 5. Production mix toggle ───────────────────────── */

const weeks = ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8"];
const mix = {
  "1 g": [42, 48, 45, 52, 58, 55, 61, 66],
  "0.4 g": [55, 60, 66, 63, 71, 78, 82, 88],
};
type MixKey = keyof typeof mix;

export function ProductionMix({ className = "" }: { className?: string }) {
  const [show, setShow] = useState<"both" | MixKey>("both");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const H = 150;
  const series: { key: MixKey; color: string }[] = [
    { key: "1 g", color: NAVY },
    { key: "0.4 g", color: SKY },
  ];

  return (
    <div ref={ref} className={`flex flex-col rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0] ${className}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image src="/odoo-icons/svg/mrp.svg" alt="" width={50} height={50} className="h-8 w-8" />
          <div>
            <Eyebrow>Production by format</Eyebrow>
            <div className="font-bold text-[#0F172A]">Pre-roll output trend (indexed)</div>
          </div>
        </div>
      </div>

      <div className="mb-3 inline-flex rounded-full bg-[#F1F5F9] p-1">
        {(["both", "1 g", "0.4 g"] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setShow(k)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${show === k ? "bg-[#003D82] text-white shadow-sm" : "text-[#64748B] hover:text-[#0F172A]"}`}
          >
            {k === "both" ? "Both formats" : `${k} pre-rolls`}
          </button>
        ))}
      </div>

      <div className="mb-2 flex gap-4 text-[12px] font-medium text-[#64748B]">
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: NAVY }} /> 1 g</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full" style={{ background: SKY }} /> 0.4 g</span>
      </div>

      <svg viewBox={`0 0 ${weeks.length * 52} ${H + 24}`} className="my-auto h-auto w-full" role="img" aria-label="Illustrative production trend by pre-roll format">
        {[0.33, 0.66, 1].map((g) => (
          <line key={g} x1="0" x2={weeks.length * 52} y1={H - g * H} y2={H - g * H} stroke="#EEF2F7" />
        ))}
        {weeks.map((w, i) => (
          <g key={w}>
            {series.map((s, j) => {
              const visible = show === "both" || show === s.key;
              const v = mix[s.key][i];
              const h = (v / 100) * H;
              const width = show === "both" ? 18 : 30;
              const x = show === "both" ? i * 52 + 7 + j * 20 : i * 52 + 11;
              return (
                <m.rect
                  key={s.key}
                  rx="6"
                  fill={s.color}
                  initial={false}
                  animate={{
                    x,
                    width: visible ? width : 0,
                    y: inView && visible ? H - h : H,
                    height: inView && visible ? h : 0,
                    opacity: visible ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, delay: inView ? i * 0.04 : 0 }}
                />
              );
            })}
            <text x={i * 52 + 26} y={H + 17} textAnchor="middle" fontSize="11" fontWeight="600" fill="#94A3B8" fontFamily="Inter, sans-serif">{w}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ───────────────────────── 6. Dashboard tabs ───────────────────────── */

const dashTabs = {
  OEE: { unit: "%", note: "Overall equipment effectiveness by week", data: [61, 64, 63, 68, 71, 70, 74, 77] },
  COGS: { unit: "$/unit", note: "Cost of goods sold per unit, trending down", data: [88, 85, 86, 81, 79, 77, 74, 72] },
  WIP: { unit: "units", note: "Work-in-progress across work centers", data: [40, 55, 48, 62, 58, 51, 46, 44] },
  Sales: { unit: "index", note: "Distributor sell-in across provinces", data: [50, 58, 62, 60, 70, 76, 81, 90] },
};
type DashKey = keyof typeof dashTabs;

export function DashboardTabs({ className = "" }: { className?: string }) {
  const [tab, setTab] = useState<DashKey>("OEE");
  const d = dashTabs[tab];
  const W = 360;
  const H = 130;
  const lo = Math.min(...d.data) - 8;
  const hi = Math.max(...d.data) + 8;
  const pts = d.data.map((v, i) => [i * (W / (d.data.length - 1)), H - ((v - lo) / (hi - lo)) * H] as const);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;

  return (
    <div className={`flex flex-col rounded-[24px] bg-white p-6 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0] ${className}`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#003D82] text-white">
            <BarChart3 size={17} />
          </span>
          <div>
            <Eyebrow>Power BI · Operations</Eyebrow>
            <div className="font-bold text-[#0F172A]">Leadership dashboard</div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="inline-flex rounded-full bg-[#F1F5F9] p-1">
          {(Object.keys(dashTabs) as DashKey[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-colors ${tab === k ? "bg-[#003D82] text-white" : "text-[#64748B] hover:text-[#0F172A]"}`}
            >
              {k}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-semibold text-[#0F172A]">{d.note}</span>
        <span className="text-[12px] font-medium text-[#94A3B8]">{d.unit}</span>
      </div>
      <svg viewBox={`-4 -6 ${W + 8} ${H + 12}`} className="my-auto h-auto w-full" role="img" aria-label={`Illustrative ${tab} trend`}>
        <defs>
          <linearGradient id="dashFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={SKY} stopOpacity="0.25" />
            <stop offset="100%" stopColor={SKY} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H - g * H} y2={H - g * H} stroke="#EEF2F7" />
        ))}
        <AnimatePresence mode="wait">
          <m.g key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <path d={area} fill="url(#dashFill)" />
            <m.path d={line} fill="none" stroke={NAVY} strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
            {pts.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i === pts.length - 1 ? 5 : 3} fill={i === pts.length - 1 ? SKY : "#fff"} stroke={NAVY} strokeWidth="2" />
            ))}
          </m.g>
        </AnimatePresence>
      </svg>
    </div>
  );
}
