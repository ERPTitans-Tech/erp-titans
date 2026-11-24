// Custom list tick: a single hand-tuned stroke, lighter than a stock check-circle icon.

export default function Tick({ tone = "green", className = "" }: { tone?: "green" | "navy"; className?: string }) {
  const color = tone === "navy" ? "#003D82" : "#16A34A";
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M2.75 8.75 6.1 11.9 13.25 4.25" fill="none" stroke={color} strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
