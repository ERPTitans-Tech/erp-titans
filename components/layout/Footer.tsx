import Link from "next/link";
import Image from "next/image";
import Flag from "@/components/ui/Flag";
import { locations } from "@/lib/locations";
import { odooServices } from "@/lib/odoo-services";

const company = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/odoo", label: "Odoo" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const industries = [
  { href: "/industries/manufacturing", label: "Manufacturing" },
  { href: "/industries/distribution", label: "Distribution & Logistics" },
  { href: "/industries/cannabis", label: "Cannabis" },
];

// Country pages lead each group; cities, provinces and states sit underneath.
const regions = [
  {
    country: "ca" as const,
    name: "Canada",
    href: "/odoo-partner-canada",
    places: locations.filter((l) => l.country === "Canada" && l.kind !== "Country"),
  },
  {
    country: "us" as const,
    name: "United States",
    href: "/odoo-partner-usa",
    places: locations.filter((l) => l.country === "United States" && l.kind !== "Country"),
  },
];

const linkClass = "text-[15px] text-[#475569] transition-colors hover:text-[#003D82]";
const headClass = "mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#0F172A]";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white" id="contact">
      <div className="mx-auto max-w-[1280px] px-4 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_0.95fr_1.25fr] lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 flex items-center gap-4">
              <Link href="/" aria-label="ERP Titans home">
                <Image src="/logo.png" alt="ERP Titans" width={85} height={70} className="h-14 w-auto" />
              </Link>
              <span className="h-10 w-px bg-[#E2E8F0]" aria-hidden="true" />
              <Image src="/odoo-ready-partner-tight.svg" alt="Official Odoo Ready Partner" width={416} height={202} className="h-11 w-auto" />
            </div>
            <p className="max-w-sm text-[15px] leading-relaxed text-[#64748B]">
              Odoo implementation and ERP recovery for growing businesses. We fix what isn&apos;t working and build systems teams actually use.
            </p>
            <a
              href="mailto:sales@erptitans.com"
              className="mt-6 inline-block text-[17px] font-semibold text-[#0F172A] underline decoration-[#003D82]/25 underline-offset-4 transition-colors hover:decoration-[#003D82]"
            >
              sales@erptitans.com
            </a>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#003D82] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#003D82]/90"
              >
                Book a free consultation <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Company */}
          <nav aria-label="Company">
            <h2 className={headClass}>Company</h2>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Odoo services */}
          <nav aria-label="Odoo services">
            <h2 className={headClass}>Odoo services</h2>
            <ul className="space-y-3">
              {odooServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className={linkClass}>
                    {s.name.replace(/^Odoo /, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Industries */}
          <nav aria-label="Industries">
            <h2 className={headClass}>Industries</h2>
            <ul className="space-y-3">
              {industries.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Where we work */}
          <nav aria-label="Odoo partner locations">
            <h2 className={headClass}>Where we work</h2>
            <div className="space-y-5">
              {regions.map((r) => (
                <div key={r.name}>
                  <Link href={r.href} className="mb-2 inline-flex items-center gap-2 text-[15px] font-semibold text-[#0F172A] hover:text-[#003D82]">
                    <Flag country={r.country} />
                    {r.name}
                  </Link>
                  <ul className="flex flex-wrap gap-x-1 text-[15px] text-[#475569]">
                    {r.places.map((l, i) => (
                      <li key={l.slug}>
                        <Link href={`/${l.slug}`} title={`Odoo partner in ${l.placeFull}`} className="transition-colors hover:text-[#003D82]">
                          {l.place}
                        </Link>
                        {i < r.places.length - 1 && <span className="text-[#CBD5E1]">,&nbsp;</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link href="/locations" className="inline-block text-sm font-semibold text-[#003D82] hover:underline">
                All locations →
              </Link>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[#E2E8F0] py-8 text-sm text-[#64748B] md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} ERP Titans. Calgary, Alberta · Serving Canada &amp; the USA.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-[#003D82]">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-[#003D82]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
