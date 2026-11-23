"use client";

// Interactive, illustrative data visuals for the cannabis case study.
// Every figure here is SAMPLE DATA drawn in code. None of it is client data,
// and each visual carries an <IllustrativeBadge /> saying so.

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { CheckCircle2, FlaskConical, Lock, Unlock, Truck, FileSpreadsheet, GitMerge, Factory, PackageCheck, RotateCcw } from "lucide-react";

/* ───────────────────────── shared bits ───────────────────────── */

export function IllustrativeBadge({ dark = false, className = "" }: { dark?: boolean; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-mono text-[10.5px] font-semibold uppercase tracking-[0.12em] ${
        dark
          ? "bg-amber-400/15 text-amber-300 ring-1 ring-amber-300/30"
          : "bg-amber-50 text-amber-700 ring-1 ring-amber-200"
      } ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-amber-300" : "bg-amber-500"}`} />
      Illustration · not client data
    </span>
  );
}

// Deterministic pseudo-random so server and client render the same dots.
function seeded(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
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

/* ───────────────────────── 1. Hero data graph ───────────────────────── */

const graphNodes = [
  { id: "vendor", label: "Vendor lots", sub: "biomass receipts", x: 70, y: 62 },
  { id: "lab", label: "Lab COA", sub: "potency · contaminants", x: 330, y: 62 },
  { id: "floor", label: "Shop floor", sub: "1 g · 0.4 g lines", x: 40, y: 178 },
  { id: "dist", label: "Distributors", sub: "provincial orders", x: 360, y: 178 },
  { id: "fin", label: "Finance", sub: "excise · valuation", x: 110, y: 282 },
  { id: "ctls", label: "Health Canada", sub: "CTLS monthly", x: 290, y: 282 },
];
const CX = 200;
const CY = 172;

export function HeroDataGraph() {
  const rand = seeded(42);
  const clouds = graphNodes.flatMap((n, i) =>
    Array.from({ length: 26 }, (_, k) => {
      const a = rand() * Math.PI * 2;
      const r = 4 + rand() * 20;
      return { key: `${i}-${k}`, x: n.x + Math.cos(a) * r, y: n.y + Math.sin(a) * r * 0.7, o: 0.25 + rand() * 0.5 };
    })
  );

  return (
    <div className="relative overflow-hidden rounded-t-[24px] bg-[#0B1220]">
      {/* blueprint grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.35) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(22,163,74,0.20),transparent_60%)]" />

      <div className="relative flex items-center justify-between px-5 pt-4">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate-400">
          <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#22C55E] align-middle" />
          Operations graph
        </span>
        <IllustrativeBadge dark />
      </div>

      <svg viewBox="0 0 400 330" className="relative block w-full h-auto" role="img" aria-label="Illustration of data sources flowing into Odoo">
        {graphNodes.map((n) => (
          <path key={`l-${n.id}`} id={`p-${n.id}`} d={`M${n.x},${n.y} L${CX},${CY}`} stroke="rgba(148,163,184,.25)" strokeWidth="1" strokeDasharray="2 4" />
        ))}

        {clouds.map((c) => (
          <circle key={c.key} cx={c.x} cy={c.y} r="1" fill="#CBD5E1" opacity={c.o} />
        ))}

        {/* flowing particles: towards Odoo, except CTLS which flows outward */}
        {graphNodes.map((n, i) =>
          [0, 1, 2].map((k) => (
            <circle key={`m-${n.id}-${k}`} r="2.2" fill={n.id === "ctls" ? "#FBBF24" : "#4ADE80"}>
              <animateMotion
                dur={`${2.4 + (i % 3) * 0.5}s`}
                begin={`${k * 0.9 + i * 0.2}s`}
                repeatCount="indefinite"
                path={n.id === "ctls" ? `M${CX},${CY} L${n.x},${n.y}` : `M${n.x},${n.y} L${CX},${CY}`}
              />
            </circle>
          ))
        )}

        {/* centre node */}
        <circle cx={CX} cy={CY} r="30" fill="none" stroke="#22C55E" strokeOpacity=".35">
          <animate attributeName="r" values="26;38;26" dur="3s" repeatCount="indefinite" />
          <animate attributeName="stroke-opacity" values=".45;0;.45" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx={CX} cy={CY} r="24" fill="#003D82" stroke="#4ADE80" strokeWidth="1.5" />
        <text x={CX} y={CY - 2} textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800" fontFamily="Inter, sans-serif">Odoo</text>
        <text x={CX} y={CY + 10} textAnchor="middle" fill="#93C5FD" fontSize="6.5" fontFamily="ui-monospace, monospace">SYSTEM OF RECORD</text>

        {graphNodes.map((n) => (
          <g key={`n-${n.id}`}>
            <circle cx={n.x} cy={n.y} r="3.5" fill={n.id === "ctls" ? "#FBBF24" : "#E2E8F0"} />
            <text x={n.x} y={n.y - 30} textAnchor="middle" fill="#F8FAFC" fontSize="10" fontWeight="700" fontFamily="Inter, sans-serif">{n.label}</text>
            <text x={n.x} y={n.y - 19} textAnchor="middle" fill="#94A3B8" fontSize="7.5" fontFamily="ui-monospace, monospace">{n.sub}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

/* ───────────────────────── 2. Data-flow stepper (dark) ───────────────────────── */

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

function StepVisual({ step }: { step: string }) {
  if (step === "receive") {
    const tests = ["THC / THCA", "CBD / CBDA", "Microbial", "Pesticides", "Heavy metals", "Mycotoxins"];
    return (
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs text-slate-400">LOT · BIO-2611-04</span>
            <motion.span
              initial={{ backgroundColor: "rgba(251,191,36,.15)", color: "#FBBF24" }}
              animate={{ backgroundColor: "rgba(34,197,94,.15)", color: "#4ADE80" }}
              transition={{ delay: 2.6, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold"
            >
              <Lock size={12} /> QUARANTINE → RELEASED
            </motion.span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {tests.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0.35 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.35 }}
                className="flex items-center justify-between rounded-lg bg-white/[0.04] px-3 py-2 text-[13px] text-slate-200"
              >
                {t}
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 + i * 0.35, type: "spring" }}>
                  <CheckCircle2 size={15} className="text-[#4ADE80]" />
                </motion.span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === "blend") {
    const sources = [
      { y: 40, label: "LOT A-117" },
      { y: 110, label: "LOT A-121" },
      { y: 180, label: "LOT B-044" },
    ];
    return (
      <svg viewBox="0 0 420 220" className="w-full max-w-md" role="img" aria-label="Illustration of lots merging into a blend lot">
        {sources.map((s, i) => (
          <g key={s.label}>
            <motion.path
              d={`M120,${s.y} C220,${s.y} 220,110 300,110`}
              fill="none"
              stroke="#4ADE80"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.2 + i * 0.25, duration: 0.9 }}
            />
            <rect x="12" y={s.y - 16} width="108" height="32" rx="8" fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.15)" />
            <text x="66" y={s.y + 4} textAnchor="middle" fill="#E2E8F0" fontSize="12" fontFamily="ui-monospace, monospace">{s.label}</text>
          </g>
        ))}
        <motion.g initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }} style={{ transformOrigin: "355px 110px" }}>
          <rect x="300" y="84" width="110" height="52" rx="10" fill="#003D82" stroke="#4ADE80" />
          <text x="355" y="106" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700" fontFamily="Inter, sans-serif">BLEND-0187</text>
          <text x="355" y="123" textAnchor="middle" fill="#93C5FD" fontSize="9" fontFamily="ui-monospace, monospace">3 parent lots</text>
        </motion.g>
      </svg>
    );
  }

  if (step === "produce") return <ProduceVisual />;

  if (step === "ship") {
    const provinces = [
      { code: "BC", x: 60, y: 60 },
      { code: "AB", x: 140, y: 150 },
      { code: "SK", x: 220, y: 60 },
      { code: "MB", x: 300, y: 150 },
      { code: "ON", x: 380, y: 60 },
    ];
    return (
      <svg viewBox="0 0 440 220" className="w-full max-w-md" role="img" aria-label="Illustration of shipments to provincial distributors">
        <rect x="170" y="176" width="100" height="34" rx="8" fill="#003D82" stroke="#4ADE80" />
        <text x="220" y="197" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">Warehouse</text>
        {provinces.map((p, i) => (
          <g key={p.code}>
            <motion.path
              d={`M220,176 Q${(220 + p.x) / 2},${Math.min(p.y, 176) - 30} ${p.x},${p.y + 16}`}
              fill="none"
              stroke="rgba(74,222,128,.6)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 0.15 * i, duration: 0.8 }}
            />
            <motion.g initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + 0.15 * i }}>
              <rect x={p.x - 24} y={p.y - 16} width="48" height="32" rx="8" fill="rgba(255,255,255,.07)" stroke="rgba(255,255,255,.2)" />
              <text x={p.x} y={p.y + 5} textAnchor="middle" fill="#F8FAFC" fontSize="13" fontWeight="800" fontFamily="Inter, sans-serif">{p.code}</text>
            </motion.g>
          </g>
        ))}
      </svg>
    );
  }

  // report
  const rows = ["Opening inventory", "Additions: production", "Reductions: sales", "Reductions: destruction", "Closing inventory", "Book value"];
  return (
    <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-mono text-xs text-slate-400">CTLS · MONTHLY REPORT</span>
        <span className="font-mono text-[11px] text-amber-300">DUE BY THE 15TH</span>
      </div>
      <div className="space-y-2">
        {rows.map((r, i) => (
          <div key={r} className="flex items-center gap-3">
            <span className="w-44 shrink-0 text-[13px] text-slate-300">{r}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-[#4ADE80]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.2 + i * 0.25, duration: 0.5 }}
              />
            </div>
          </div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9 }}
        className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#4ADE80]"
      >
        <PackageCheck size={16} /> Generated from posted transactions, ready to upload
      </motion.div>
    </div>
  );
}

function ProduceVisual() {
  const a = useCountUp(1840, true, 2200);
  const b = useCountUp(2960, true, 2200);
  const lines = [
    { name: "1 g pre-roll line", value: a, pct: 74, color: "#4ADE80" },
    { name: "0.4 g pre-roll line", value: b, pct: 88, color: "#60A5FA" },
  ];
  return (
    <div className="w-full max-w-md space-y-4">
      {lines.map((l) => (
        <div key={l.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="text-sm font-semibold text-slate-200">{l.name}</span>
            <span className="font-mono text-2xl font-bold text-white tabular-nums">
              {l.value.toLocaleString()} <span className="text-xs text-slate-400">units</span>
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div className="h-full rounded-full" style={{ backgroundColor: l.color }} initial={{ width: 0 }} animate={{ width: `${l.pct}%` }} transition={{ duration: 2.2, ease: "easeOut" }} />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[11px] text-slate-400">
            <span>QC checkpoints ✓</span>
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
    <div ref={ref} className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <ol className="space-y-1">
        {steps.map((s, i) => {
          const Icon = s.icon;
          const on = i === active;
          return (
            <li key={s.key}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`group w-full rounded-2xl px-4 py-3.5 text-left transition-colors ${on ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"}`}
                aria-pressed={on}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-mono text-[11px] ${on ? "text-[#4ADE80]" : "text-slate-500"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${on ? "bg-[#4ADE80] text-[#0B1220]" : "bg-white/5 text-slate-400"}`}>
                    <Icon size={16} />
                  </span>
                  <span className={`text-[17px] font-bold ${on ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>{s.title}</span>
                </div>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pl-[76px] pt-2 text-[15px] leading-relaxed text-slate-300">{s.text}</p>
                      <div className="ml-[76px] mt-3 h-[2px] overflow-hidden rounded bg-white/10">
                        {!paused && inView && (
                          <motion.div key={`bar-${active}`} className="h-full bg-[#4ADE80]" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 6, ease: "linear" }} />
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="relative flex min-h-[340px] flex-col rounded-[24px] border border-white/10 bg-[#0F172A]/60 p-6">
        <div
          className="pointer-events-none absolute inset-0 rounded-[24px] opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,.4) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mb-4 flex items-center justify-between">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
            Step {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
          </span>
          <IllustrativeBadge dark />
        </div>
        <div className="relative flex flex-1 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[active].key}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="flex w-full justify-center"
            >
              <StepVisual step={steps[active].key} />
            </motion.div>
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
    <div ref={ref}>
      <div className="overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-[0_20px_50px_rgba(0,61,130,0.10)]">
        <div className="flex items-center justify-between bg-[#0B1220] px-6 py-4 text-white">
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-slate-400">Certificate of Analysis</div>
            <div className="font-bold">LOT PR-0187 · Pre-roll 0.4 g</div>
          </div>
          <IllustrativeBadge dark />
        </div>

        <ul className="divide-y divide-gray-100">
          {coaTests.map((t, i) => {
            const ok = i < done;
            const checking = i === done && !released;
            return (
              <li key={t.test} className="flex items-center justify-between px-6 py-3 text-[14px]">
                <span className="font-medium text-[#334155]">{t.test}</span>
                {ok ? (
                  <motion.span initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-1.5 font-semibold text-[#16A34A]">
                    <CheckCircle2 size={16} /> {t.result}
                  </motion.span>
                ) : (
                  <span className={`font-mono text-[12px] ${checking ? "text-amber-600" : "text-slate-300"}`}>{checking ? "checking…" : "pending"}</span>
                )}
              </li>
            );
          })}
        </ul>

        <div className={`flex items-center justify-between px-6 py-4 transition-colors duration-500 ${released ? "bg-green-50" : "bg-amber-50"}`}>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
            {released ? <Unlock size={15} className="text-[#16A34A]" /> : <Lock size={15} className="text-amber-600" />}
            {released ? "QC approved · lot released for production" : "Lot held in quarantine"}
          </span>
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#003D82] hover:border-[#003D82]/40"
          >
            <RotateCcw size={13} /> Replay
          </button>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── 4. CTLS waterfall ───────────────────────── */

const waterfall = [
  { label: "Opening", value: 11300, kind: "total" as const },
  { label: "Produced", value: 6900, kind: "add" as const },
  { label: "Returns", value: 240, kind: "add" as const },
  { label: "Sold to distributors", value: -7180, kind: "sub" as const },
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
  const colors = { total: "#003D82", add: "#16A34A", sub: "#D97706" };

  return (
    <div ref={ref} className="rounded-[20px] border border-gray-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,61,130,0.10)]">
      <div className="mb-1 flex items-center justify-between gap-3">
        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#16A34A]">Health Canada · CTLS</div>
          <div className="font-bold text-[#0F172A]">Monthly reconciliation: pre-rolls (units)</div>
        </div>
        <IllustrativeBadge />
      </div>

      <div className="mt-2 h-6 text-sm font-medium text-[#334155]">
        {hover !== null ? (
          <span>
            {bars[hover].label}:{" "}
            <span className="font-mono font-bold tabular-nums">
              {bars[hover].kind === "sub" ? "−" : bars[hover].kind === "add" ? "+" : ""}
              {Math.abs(bars[hover].value).toLocaleString()}
            </span>
          </span>
        ) : (
          <span className="text-[#94A3B8]">Hover a bar to see the movement</span>
        )}
      </div>

      <svg viewBox={`0 0 ${waterfall.length * 70} ${H + 40}`} className="h-auto w-full" role="img" aria-label="Illustrative CTLS reconciliation waterfall">
        {[0.25, 0.5, 0.75, 1].map((g) => (
          <line key={g} x1="0" x2={waterfall.length * 70} y1={H - g * H} y2={H - g * H} stroke="#E2E8F0" strokeDasharray="3 4" />
        ))}
        {bars.map((b, i) => {
          const y = H - scale(b.hi);
          const h = Math.max(2, scale(b.hi - b.lo));
          return (
            <g key={b.label} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
              <rect x={i * 70 + 10} y="0" width="50" height={H} fill="transparent" />
              <motion.rect
                x={i * 70 + 14}
                width="42"
                rx="5"
                fill={colors[b.kind]}
                opacity={hover === null || hover === i ? 1 : 0.35}
                initial={{ y: H, height: 0 }}
                animate={inView ? { y, height: h } : { y: H, height: 0 }}
                transition={{ delay: i * 0.18, duration: 0.6, ease: "easeOut" }}
              />
              <text x={i * 70 + 35} y={H + 16} textAnchor="middle" fontSize="9.5" fill="#64748B" fontFamily="Inter, sans-serif">
                {b.label.split(" ")[0]}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-3 flex flex-wrap gap-4 font-mono text-[11px] text-[#64748B]">
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-[#003D82]" /> Inventory</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-[#16A34A]" /> Additions</span>
        <span className="inline-flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-[#D97706]" /> Reductions</span>
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

export function ProductionMix() {
  const [show, setShow] = useState<"both" | MixKey>("both");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const H = 150;
  const series: { key: MixKey; color: string }[] = [
    { key: "1 g", color: "#003D82" },
    { key: "0.4 g", color: "#16A34A" },
  ];

  return (
    <div ref={ref} className="rounded-[20px] border border-gray-100 bg-white p-6 shadow-[0_20px_50px_rgba(0,61,130,0.10)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#16A34A]">Production · by format</div>
          <div className="font-bold text-[#0F172A]">Pre-roll output trend (indexed)</div>
        </div>
        <IllustrativeBadge />
      </div>

      <div className="mb-4 inline-flex rounded-xl bg-[#F1F5F9] p-1">
        {(["both", "1 g", "0.4 g"] as const).map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setShow(k)}
            className={`rounded-lg px-3.5 py-1.5 text-sm font-semibold transition-colors ${show === k ? "bg-white text-[#003D82] shadow-sm" : "text-[#64748B] hover:text-[#0F172A]"}`}
          >
            {k === "both" ? "Both formats" : `${k} pre-rolls`}
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${weeks.length * 52} ${H + 24}`} className="h-auto w-full" role="img" aria-label="Illustrative production trend by pre-roll format">
        {[0.33, 0.66, 1].map((g) => (
          <line key={g} x1="0" x2={weeks.length * 52} y1={H - g * H} y2={H - g * H} stroke="#E2E8F0" strokeDasharray="3 4" />
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
                <motion.rect
                  key={s.key}
                  rx="4"
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
            <text x={i * 52 + 26} y={H + 16} textAnchor="middle" fontSize="10" fill="#94A3B8" fontFamily="ui-monospace, monospace">{w}</text>
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

export function DashboardTabs() {
  const [tab, setTab] = useState<DashKey>("OEE");
  const d = dashTabs[tab];
  const W = 360;
  const H = 130;
  const pts = d.data.map((v, i) => [i * (W / (d.data.length - 1)), H - (v / 100) * H] as const);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;

  return (
    <div className="rounded-[20px] border border-gray-100 bg-white p-5 shadow-[0_20px_50px_rgba(0,61,130,0.10)]">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-xl bg-[#F1F5F9] p-1">
          {(Object.keys(dashTabs) as DashKey[]).map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setTab(k)}
              className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${tab === k ? "bg-[#003D82] text-white" : "text-[#64748B] hover:text-[#0F172A]"}`}
            >
              {k}
            </button>
          ))}
        </div>
        <IllustrativeBadge />
      </div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-sm font-semibold text-[#0F172A]">{d.note}</span>
        <span className="font-mono text-[11px] text-[#94A3B8]">{d.unit}</span>
      </div>
      <svg viewBox={`-4 -6 ${W + 8} ${H + 12}`} className="h-auto w-full" role="img" aria-label={`Illustrative ${tab} trend`}>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H - g * H} y2={H - g * H} stroke="#E2E8F0" strokeDasharray="3 4" />
        ))}
        <AnimatePresence mode="wait">
          <motion.g key={tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            <path d={area} fill="url(#dashFill)" />
            <motion.path d={line} fill="none" stroke="#003D82" strokeWidth="2.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.8 }} />
            {pts.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={i === pts.length - 1 ? 4.5 : 2.5} fill={i === pts.length - 1 ? "#16A34A" : "#003D82"} />
            ))}
          </motion.g>
        </AnimatePresence>
        <defs>
          <linearGradient id="dashFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#003D82" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#003D82" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
