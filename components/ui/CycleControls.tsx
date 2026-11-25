"use client";

// Previous / play-pause / next buttons shared by every auto-playing infographic.

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export default function CycleControls({
  playing,
  onToggle,
  onPrev,
  onNext,
  label = "walkthrough",
  className = "",
  tone = "light",
}: {
  playing: boolean;
  onToggle: () => void;
  onPrev: () => void;
  onNext: () => void;
  label?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const btn =
    tone === "dark"
      ? "bg-white/10 text-white ring-white/20 hover:bg-white/20"
      : "bg-white text-[#003D82] ring-[#E2E8F0] hover:ring-[#003D82]/40";
  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <button type="button" onClick={onPrev} aria-label={`Previous step of the ${label}`} className={`flex h-8 w-8 items-center justify-center rounded-full ring-1 transition ${btn}`}>
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        onClick={onToggle}
        aria-label={playing ? `Pause the ${label}` : `Play the ${label}`}
        className={`inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-semibold ring-1 transition ${btn}`}
      >
        {playing ? <Pause size={12} /> : <Play size={12} />}
        {playing ? "Pause" : "Play"}
      </button>
      <button type="button" onClick={onNext} aria-label={`Next step of the ${label}`} className={`flex h-8 w-8 items-center justify-center rounded-full ring-1 transition ${btn}`}>
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
