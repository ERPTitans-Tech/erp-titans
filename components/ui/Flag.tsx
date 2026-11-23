// National flags (official artwork from the open-source flag-icons set, see public/flags/LICENSE.txt).
// Plain <img> of a tiny static SVG: renders identically on every OS, unlike flag emoji.

export default function Flag({ country, className = "" }: { country: "ca" | "us"; className?: string }) {
  const label = country === "ca" ? "Canada" : "United States";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/flags/${country}.svg`}
      alt={`${label} flag`}
      width={20}
      height={15}
      className={`inline-block h-[15px] w-5 shrink-0 rounded-[2px] object-cover shadow-[0_0_0_1px_rgba(0,0,0,0.08)] ${className}`}
    />
  );
}
