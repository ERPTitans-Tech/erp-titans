// Small inline flags (SVG, so they render the same on Windows, where flag emoji don't).

const LEAF =
  "M12 1.8 13 3.6 14.2 3.1 13.8 5.4 15.6 4.6 15.2 5.8 16.2 6.2 14.2 7.6 14.5 8.4 12.3 8 12.3 10.2 11.7 10.2 11.7 8 9.5 8.4 9.8 7.6 7.8 6.2 8.8 5.8 8.4 4.6 10.2 5.4 9.8 3.1 11 3.6Z";

export default function Flag({ country, className = "" }: { country: "ca" | "us"; className?: string }) {
  const label = country === "ca" ? "Canada" : "United States";
  return (
    <svg
      viewBox="0 0 24 12"
      role="img"
      aria-label={label}
      className={`inline-block h-[11px] w-[22px] shrink-0 overflow-hidden rounded-[2px] ring-1 ring-black/10 ${className}`}
      preserveAspectRatio="none"
    >
      {country === "ca" ? (
        <>
          <rect width="24" height="12" fill="#fff" />
          <rect width="6" height="12" fill="#D52B1E" />
          <rect x="18" width="6" height="12" fill="#D52B1E" />
          <path d={LEAF} fill="#D52B1E" />
        </>
      ) : (
        <>
          <rect width="24" height="12" fill="#fff" />
          {Array.from({ length: 7 }, (_, i) => (
            <rect key={i} y={(i * 2 * 12) / 13} width="24" height={12 / 13} fill="#B22234" />
          ))}
          <rect width="9.6" height={(7 * 12) / 13} fill="#3C3B6E" />
          {[1.6, 4.8, 8].map((x) =>
            [1.4, 3.3, 5.2].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.45" fill="#fff" />),
          )}
        </>
      )}
    </svg>
  );
}
