"use client";

// Interactive blocks for the Odoo service pages:
//  - ServiceShift: a real photo beside a before/after view that flips on its own until clicked
//  - ServiceJourney: an auto-playing process walkthrough showing what each step delivers
//    and what it needs from the client

import { useEffect, useRef, useState } from "react";
import { m, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import Photo from "@/components/ui/Photo";
import Tick from "@/components/ui/Tick";
import { SectionLabel } from "@/components/ui/SectionHeader";

export function ServiceShift({
  n,
  name,
  photo,
  shift,
}: {
  n: number;
  name: string;
  photo: { id: string; alt: string; caption: string };
  shift: { before: string; after: string }[];
}) {
  const [after, setAfter] = useState(true);
  const [auto, setAuto] = useState(true);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!auto || !inView || reduce) return;
    const t = setTimeout(() => setAfter((a) => !a), after ? 4200 : 2600);
    return () => clearTimeout(t);
  }, [after, auto, inView, reduce]);

  const pick = (v: boolean) => {
    setAfter(v);
    setAuto(false);
  };

  return (
    <section className="border-t border-[#E2E8F0] bg-white py-16 md:py-20">
      <div className="mx-auto grid max-w-[85rem] grid-cols-1 items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <figure className="relative min-h-[300px] overflow-hidden rounded-[28px] lg:min-h-full">
          <Photo id={photo.id} alt={photo.alt} className="absolute inset-0 h-full w-full object-cover" sizes="(min-width: 1024px) 640px, 100vw" />
          <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 px-5 py-4 text-[14px] leading-snug text-[#334155] shadow-lg backdrop-blur sm:right-auto sm:max-w-sm">
            {photo.caption}
          </figcaption>
        </figure>

        <div ref={ref} className="flex flex-col">
          <SectionLabel n={n}>What changes</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-[#003D82]">What {name.toLowerCase()} changes for your team</h2>

          <div className="mt-6 inline-flex self-start rounded-full bg-[#F1F5F9] p-1" role="tablist" aria-label="Before or after">
            {[
              { v: false, l: "Before" },
              { v: true, l: "With ERP Titans" },
            ].map((o) => (
              <button
                key={o.l}
                type="button"
                role="tab"
                aria-selected={after === o.v}
                onClick={() => pick(o.v)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  after === o.v ? (o.v ? "bg-[#16A34A] text-white" : "bg-[#0F172A] text-white") : "text-[#475569] hover:text-[#0F172A]"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>

          <ul className="mt-6 flex flex-1 flex-col justify-between gap-3">
            {shift.map((row, i) => (
              <li
                key={row.after}
                className={`relative overflow-hidden rounded-2xl px-5 py-4 ring-1 transition-colors duration-500 ${
                  after ? "bg-[#F0FDF4] ring-green-200" : "bg-[#F8FAFC] ring-[#E2E8F0]"
                }`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <m.div
                    key={after ? "a" : "b"}
                    initial={{ opacity: 0, x: after ? 12 : -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, delay: i * 0.06 }}
                    className="flex items-center gap-3"
                  >
                    {after ? (
                      <Tick tone="green" />
                    ) : (
                      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#FEE2E2] text-[11px] font-bold text-[#DC2626]" aria-hidden="true">
                        ×
                      </span>
                    )}
                    <span className={`text-[16px] font-semibold ${after ? "text-[#14532D]" : "text-[#64748B]"}`}>{after ? row.after : row.before}</span>
                  </m.div>
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function ServiceJourney({
  steps,
}: {
  steps: { title: string; text: string; get: string; you: string }[];
}) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const running = playing && !hover && inView && !reduce;
  const s = steps[active];

  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), 5000);
    return () => clearTimeout(t);
  }, [active, running, steps.length]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 overflow-hidden rounded-[28px] bg-white ring-1 ring-[#E2E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.04)] lg:grid-cols-[0.9fr_1.1fr]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="border-b border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5 lg:border-b-0 lg:border-r">
        <div className="mb-3 flex items-center justify-between px-2">
          <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#64748B]">Step {active + 1} of {steps.length}</span>
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#003D82] ring-1 ring-[#E2E8F0]"
            aria-label={playing ? "Pause walkthrough" : "Play walkthrough"}
          >
            {playing ? <Pause size={12} /> : <Play size={12} />} {playing ? "Pause" : "Play"}
          </button>
        </div>
        <ol className="space-y-1.5" role="tablist" aria-label="Process steps">
          {steps.map((st, i) => {
            const on = i === active;
            const done = i < active;
            return (
              <li key={st.title}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => {
                    setActive(i);
                    setPlaying(false);
                  }}
                  className={`relative flex w-full items-center gap-3 overflow-hidden rounded-xl px-3 py-3 text-left transition-all ${
                    on ? "bg-white shadow-[0_6px_18px_rgba(0,61,130,0.10)] ring-1 ring-[#003D82]/15" : "hover:bg-white/70"
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[13px] font-bold transition-colors ${
                      on ? "bg-[#003D82] text-white" : done ? "bg-[#DCFCE7] text-[#166534]" : "bg-white text-[#64748B] ring-1 ring-[#E2E8F0]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={`font-bold ${on ? "text-[#003D82]" : "text-[#334155]"}`}>{st.title}</span>
                  {on && running && (
                    <m.span
                      key={`p-${active}`}
                      className="absolute bottom-0 left-0 h-[2px] bg-[#0EA5E9]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="flex flex-col p-6 sm:p-8">
        <AnimatePresence mode="wait">
          <m.div
            key={s.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex h-full flex-col"
          >
            <h3 className="text-2xl font-extrabold text-[#0F172A]">{s.title}</h3>
            <p className="mt-3 text-[16px] leading-relaxed text-[#475569]">{s.text}</p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-auto">
              <div className="rounded-2xl bg-[#F0FDF4] p-5 ring-1 ring-green-200">
                <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#16A34A]">You get</div>
                <p className="text-[15px] font-semibold leading-snug text-[#14532D]">{s.get}</p>
              </div>
              <div className="rounded-2xl bg-[#EFF6FF] p-5 ring-1 ring-[#BFDBFE]">
                <div className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#0284C7]">From your team</div>
                <p className="text-[15px] font-semibold leading-snug text-[#0C4A6E]">{s.you}</p>
              </div>
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
