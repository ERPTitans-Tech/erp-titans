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
  const centered = align === "center";
  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl mb-12 ${className}`}>
      <div className={centered ? "flex justify-center" : ""}>
        <SectionLabel n={n}>{label}</SectionLabel>
      </div>
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight tracking-tight mb-5">{title}</h2>
      {text && <p className="text-lg text-[#64748B] leading-relaxed">{text}</p>}
    </div>
  );
}
