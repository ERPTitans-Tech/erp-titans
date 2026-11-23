"use client";

import { LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

// Components use the lightweight `m` elements; the animation features load right after first paint.
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

export default function MotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
