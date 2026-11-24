// Editorial card marker: a two-digit index with a short rule that extends on hover.
// Used instead of icon tiles so card grids read as designed, not templated.
// The parent card needs the `group` class for the hover effect.

const TONES = {
  navy: { text: "text-[#003D82]", rule: "bg-[#003D82]/25 group-hover:bg-[#003D82]" },
  sky: { text: "text-[#0EA5E9]", rule: "bg-[#0EA5E9]/30 group-hover:bg-[#0EA5E9]" },
  red: { text: "text-[#DC2626]", rule: "bg-[#DC2626]/25 group-hover:bg-[#DC2626]" },
  light: { text: "text-white", rule: "bg-white/40 group-hover:bg-white" },
} as const;

export default function CardIndex({
  n,
  tone = "navy",
  className = "",
}: {
  n: number;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  const t = TONES[tone];
  return (
    <span className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className={`text-[13px] font-bold tabular-nums tracking-[0.12em] ${t.text}`}>{String(n).padStart(2, "0")}</span>
      <span className={`h-px w-8 transition-all duration-300 group-hover:w-14 ${t.rule}`} />
    </span>
  );
}
