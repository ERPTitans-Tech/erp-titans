// Shared form building blocks for the contact page (message form and audit booking).

import type { ReactNode } from "react";

export const inputClass =
  "w-full rounded-xl border-0 bg-[#F8FAFC] px-4 text-[15px] text-[#0F172A] ring-1 ring-[#E2E8F0] outline-none transition-all placeholder:text-[#94A3B8] hover:ring-[#CBD5E1] focus:bg-white focus:ring-2 focus:ring-[#003D82]/50";

export function Field({
  label,
  htmlFor,
  required,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 flex items-baseline justify-between gap-3 text-sm font-semibold text-[#0F172A]">
        <span>
          {label}
          {required && <span className="ml-0.5 text-[#003D82]">*</span>}
        </span>
        {hint && <span className="text-xs font-medium text-[#64748B]">{hint}</span>}
      </label>
      {children}
    </div>
  );
}
