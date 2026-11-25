import Link from "next/link";
import { MapPin, ChevronDown, ArrowRight } from "lucide-react";
import LocationHero from "@/components/locations/LocationHero";
import CTA from "@/components/home/CTA";
import JsonLd from "@/components/seo/JsonLd";
import { ORG_ID } from "@/lib/seo";
import { getSite } from "@/lib/site";
import { locations, type Location } from "@/lib/locations";
import { odooServices } from "@/lib/odoo-services";
import Tick from "@/components/ui/Tick";

export default async function LocationPage({ loc }: { loc: Location }) {
  const SITE_URL = (await getSite()).base;
  const url = `${SITE_URL}/${loc.slug}`;
  const related = locations.filter((l) => l.slug !== loc.slug && (l.country === loc.country || l.kind === "Country")).slice(0, 6);

  const areaType = loc.kind === "City" ? "City" : loc.kind === "Country" ? "Country" : "State";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: `Odoo ERP implementation in ${loc.placeFull}`,
      serviceType: "Odoo ERP implementation, migration, customization and support",
      provider: { "@id": ORG_ID },
      areaServed: { "@type": areaType, name: loc.placeFull },
      url,
      description: loc.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: loc.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Locations", item: `${SITE_URL}/locations` },
        { "@type": "ListItem", position: 3, name: loc.h1, item: url },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={schema} />
      <LocationHero h1={loc.h1} subtitle={loc.subtitle} checklist={loc.checklist} />

      {/* Intro + local context: paragraphs side by side, then an equal-height row of local points (no empty columns) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 text-[#475569] text-lg leading-relaxed lg:grid-cols-2 lg:gap-12">
            {loc.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div
            className={`mt-10 grid grid-cols-1 gap-4 ${
              loc.localPoints.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"
            }`}
          >
            {loc.localPoints.map((pt) => (
              <div key={pt.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
                <h2 className="text-lg font-bold text-[#003D82] mb-1.5">{pt.title}</h2>
                <p className="text-[15px] text-[#475569] leading-relaxed">{pt.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Odoo setup */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#003D82] mb-3">How we set up Odoo for {loc.place}</h2>
          <p className="text-lg text-[#64748B] mb-8 max-w-3xl">
            Every implementation starts with your processes, but these are the {loc.country === "Canada" ? "Canadian" : "US"} and local requirements we build in from day one.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {loc.odooSetup.map((s) => (
              <li key={s} className="flex gap-3 rounded-2xl bg-white border border-[#E2E8F0] p-5 text-[15px] text-[#334155] leading-relaxed">
                <Tick tone="green" className="mt-1" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Industries + cities */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#003D82] mb-8">Industries we serve in {loc.place}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {loc.industries.map((i) => (
              <Link
                key={i.name}
                href={i.href}
                className="block bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 hover:border-[#003D82]/40 hover:shadow-md transition-all"
              >
                <h3 className="font-bold text-[#003D82] mb-2">{i.name}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{i.description}</p>
              </Link>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-[#003D82] mb-4">
            {loc.kind === "Country" && loc.country === "United States" ? "States we work with" : `Areas we serve in and around ${loc.place}`}
          </h2>
          <div className="flex flex-wrap gap-2">
            {loc.cities.map((c) => (
              <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5 text-sm font-medium text-[#334155]">
                <MapPin size={14} className="text-[#003D82]" /> {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#003D82] mb-8 text-center">
            Odoo in {loc.place}: frequently asked questions
          </h2>
          <div className="space-y-3">
            {loc.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-[#E2E8F0] bg-white p-5 open:shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0F172A]">
                  {f.q}
                  <ChevronDown size={18} className="shrink-0 text-[#003D82] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related locations */}
      <section className="py-12 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg font-bold text-[#0F172A] mb-4">Odoo services in {loc.place}</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {odooServices.map((o) => (
              <Link
                key={o.slug}
                href={`/${o.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#F8FAFC] px-4 py-2 text-sm font-semibold text-[#003D82] ring-1 ring-[#E2E8F0] hover:ring-[#003D82]/40"
              >
                {o.name}
              </Link>
            ))}
          </div>
          <h2 className="text-lg font-bold text-[#0F172A] mb-4">We also work with businesses in</h2>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] px-4 py-2 text-sm font-semibold text-[#003D82] hover:border-[#003D82]/40 hover:bg-[#F8FAFC]"
              >
                Odoo partner in {r.placeFull} <ArrowRight size={14} />
              </Link>
            ))}
            <Link href="/locations" className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-[#64748B] hover:text-[#003D82]">
              All locations <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <CTA
        heading={`Ready to implement Odoo in ${loc.place}?`}
        description="Book a free consultation and we'll map out what a properly scoped Odoo implementation looks like for your business."
      />
    </div>
  );
}
