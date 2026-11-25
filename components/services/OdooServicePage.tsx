import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import LocationHero from "@/components/locations/LocationHero";
import CTA from "@/components/home/CTA";
import JsonLd from "@/components/seo/JsonLd";
import SectionHeader from "@/components/ui/SectionHeader";
import { ORG_ID } from "@/lib/seo";
import { getSite } from "@/lib/site";
import { odooServices, type OdooService } from "@/lib/odoo-services";
import Tick from "@/components/ui/Tick";

export default async function OdooServicePage({ s }: { s: OdooService }) {
  const SITE_URL = (await getSite()).base;
  const url = `${SITE_URL}/${s.slug}`;
  const related = odooServices.filter((x) => x.slug !== s.slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: s.h1,
      serviceType: s.name,
      provider: { "@id": ORG_ID },
      areaServed: [
        { "@type": "City", name: "Calgary" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United States" },
      ],
      url,
      description: s.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: s.name, item: url },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={schema} />
      <LocationHero h1={s.h1} subtitle={s.subtitle} checklist={s.checklist} />

      {/* Intro + who it's for */}
      <section className="border-t border-[#E2E8F0] bg-white py-16 md:py-20">
        <div className="max-w-[85rem] mx-auto grid grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 xl:grid-cols-[1.2fr_1fr] lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center space-y-5 text-lg leading-relaxed text-[#475569]">
            {s.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
            {s.odooApps && (
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="mr-1 text-xs font-bold uppercase tracking-[0.14em] text-[#94A3B8]">Odoo apps</span>
                {s.odooApps.map((a) => (
                  <span key={a} className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F8FAFC] ring-1 ring-[#E2E8F0]">
                    <Image src={`/odoo-icons/svg/${a}.svg`} alt="" width={50} height={50} className="h-5 w-5" />
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center rounded-[24px] bg-[#F8FAFC] p-7 ring-1 ring-[#E2E8F0]">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">
              <span className="h-px w-6 bg-[#003D82]" aria-hidden="true" /> Right for you if
            </div>
            <ul className="space-y-3">
              {s.forWho.map((w) => (
                <li key={w} className="flex gap-3 text-[15px] font-medium text-[#334155]">
                  <Tick tone="green" className="mt-1" /> {w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-16 md:py-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader n={1} label="What's included" title={`${s.name}: scope of work`} />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {s.includes.map((i) => (
              <div key={i.title} className="rounded-[20px] bg-white p-6 ring-1 ring-[#E2E8F0]">
                <div className="mb-3 h-1 w-10 rounded-full bg-gradient-to-r from-[#003D82] to-[#0EA5E9]" />
                <h3 className="mb-1.5 text-lg font-bold text-[#003D82]">{i.title}</h3>
                <p className="text-[15px] leading-relaxed text-[#64748B]">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-[#E2E8F0] bg-white py-16 md:py-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader n={2} label="How it works" title="Our process" />
          <ol className={`grid grid-cols-1 gap-5 sm:grid-cols-2 ${s.process.length === 5 ?"lg:grid-cols-5" : "lg:grid-cols-4"}`}>
            {s.process.map((p, i) => (
              <li key={p.title} className="relative rounded-[20px] bg-[#F8FAFC] p-6 ring-1 ring-[#E2E8F0]">
                <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#003D82] text-sm font-bold text-white">{i + 1}</span>
                <h3 className="mb-1.5 font-bold text-[#0F172A]">{p.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-[#64748B]">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader n={3} label="FAQ" title={`${s.name}: frequently asked questions`} align="center" />
          <div className="space-y-3">
            {s.faqs.map((f) => (
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

      {/* Related */}
      <section className="border-t border-[#E2E8F0] bg-white py-12">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-lg font-bold text-[#0F172A]">More Odoo services</h2>
          <div className="mb-8 flex flex-wrap gap-3">
            {related.map((r) => (
              <Link key={r.slug} href={`/${r.slug}`} className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] px-4 py-2 text-sm font-semibold text-[#003D82] hover:border-[#003D82]/40 hover:bg-[#F8FAFC]">
                {r.name} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
          <h2 className="mb-4 text-lg font-bold text-[#0F172A]">Where we deliver</h2>
          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <Link href="/odoo-partner-calgary" className="text-[#003D82] hover:underline">Odoo partner in Calgary</Link>
            <Link href="/odoo-implementation-alberta" className="text-[#003D82] hover:underline">Alberta</Link>
            <Link href="/odoo-partner-canada" className="text-[#003D82] hover:underline">Canada</Link>
            <Link href="/odoo-partner-usa" className="text-[#003D82] hover:underline">USA</Link>
            <Link href="/locations" className="text-[#64748B] hover:text-[#003D82]">All locations</Link>
          </div>
        </div>
      </section>

      <CTA heading={`Talk to us about ${s.name.toLowerCase()}`} description="Book a free consultation with our Calgary-based team. We'll review where you are and map out the next steps." />
    </div>
  );
}
