"use client";

// Shared auto-play behaviour for every stepper/tab infographic on the site:
//  - loops forever while the graphic is on screen
//  - pauses while the pointer is over it, resumes when it leaves
//  - clicking a step, "previous" or "next" jumps there and the loop carries on from that point
//  - the play/pause button is the only thing that stops it (and reduced-motion users start paused)

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function useCycle(count: number, intervalMs = 5000, opts: { amount?: number } = {}) {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hover, setHover] = useState(false);
  const [tick, setTick] = useState(0); // restarts the timer after manual navigation
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: opts.amount ?? 0.35 });
  const reduce = useReducedMotion();
  const running = playing && !hover && inView && !reduce;

  useEffect(() => {
    if (!running || count < 2) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % count), intervalMs);
    return () => clearTimeout(t);
  }, [active, running, count, intervalMs, tick]);

  const go = useCallback(
    (i: number) => {
      setActive(((i % count) + count) % count);
      setTick((t) => t + 1);
    },
    [count],
  );
  const next = useCallback(() => go(active + 1), [go, active]);
  const prev = useCallback(() => go(active - 1), [go, active]);

  return {
    active,
    go,
    next,
    prev,
    playing,
    toggle: () => setPlaying((p) => !p),
    running,
    ref,
    /** progress-bar key: changes whenever the timer restarts */
    cycleKey: `${active}-${tick}`,
    hoverProps: { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) },
  };
}
