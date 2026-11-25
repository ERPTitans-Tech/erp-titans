// Shared section heading used across Industries, Services, About and case studies,
// so every page shares the same rhythm: numbered label, headline, supporting text.

import type { ReactNode } from "react";

export function SectionLabel({ n, children }: { n?: string | number; children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      {n !== undefined && (
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#003D82] text-[12px] font-bold text-white">{n}</span>
      )}
      <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">{children}</span>
    </div>
  );
}

// With supporting text, the header spans the full width: label + headline on the left,
// text on the right, so no half of the row is left empty on wide screens.
export default function SectionHeader({
  n,
  label,
  title,
  text,
  align = "left",
  className = "",
}: {
  n?: string | number;
  label: string;
  title: ReactNode;
  text?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  if (text) {
    return (
      <div className={`mb-12 grid grid-cols-1 gap-x-16 gap-y-4 lg:grid-cols-2 lg:items-end ${className}`}>
        <div>
          <SectionLabel n={n}>{label}</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight tracking-tight">{title}</h2>
        </div>
        <p className="text-lg text-[#64748B] leading-relaxed">{text}</p>
      </div>
    );
  }
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} mb-12 ${className}`}>
      <div className={centered ? "flex justify-center" : ""}>
        <SectionLabel n={n}>{label}</SectionLabel>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight tracking-tight">{title}</h2>
    </div>
  );
}
