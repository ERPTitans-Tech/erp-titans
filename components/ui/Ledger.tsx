// "Ledger" panel: one surface divided by hairlines, each cell led by a short category label.
// An editorial alternative to grids of floating icon cards.

import type { ReactNode } from "react";

const COLS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
} as const;

export function Ledger({ cols = 2, className = "", children }: { cols?: 2 | 3; className?: string; children: ReactNode }) {
  return (
    <div
      className={`grid grid-cols-1 gap-px overflow-hidden rounded-[24px] bg-[#E2E8F0] shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0] ${COLS[cols]} ${className}`}
    >
      {children}
    </div>
  );
}

export function LedgerItem({
  kicker,
  title,
  children,
  tone = "navy",
  className = "",
}: {
  kicker?: string;
  title: string;
  children: ReactNode;
  tone?: "navy" | "red" | "sky";
  className?: string;
}) {
  const color = tone === "red" ? "text-[#DC2626]" : tone === "sky" ? "text-[#0284C7]" : "text-[#003D82]";
  const bar = tone === "red" ? "bg-[#DC2626]" : tone === "sky" ? "bg-[#0EA5E9]" : "bg-[#003D82]";
  return (
    <div className={`group relative bg-white p-7 transition-colors duration-300 hover:bg-[#F8FAFC] sm:p-8 ${className}`}>
      <span
        className={`absolute left-0 top-8 h-6 w-[3px] origin-top scale-y-0 rounded-r-full transition-transform duration-300 group-hover:scale-y-100 ${bar}`}
        aria-hidden="true"
      />
      {kicker && <div className={`mb-3 text-[11px] font-bold uppercase tracking-[0.16em] ${color}`}>{kicker}</div>}
      <h3 className="mb-2 text-lg font-bold leading-snug text-[#0F172A]">{title}</h3>
      <p className="text-[15px] leading-relaxed text-[#64748B]">{children}</p>
    </div>
  );
}
