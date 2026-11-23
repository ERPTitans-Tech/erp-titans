import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import CTA from "@/components/home/CTA";
import { locations } from "@/lib/locations";

import { alternatesFor } from "@/lib/site";
export const metadata: Metadata = {
  title: "Odoo Partner Locations | Canada & USA",
  description:
    "ERP Titans is a Calgary-based official Odoo Ready Partner serving Calgary, Alberta, British Columbia and all of Canada, plus Texas, California, New York, Florida, Arizona, Montana and businesses across the USA.",
  alternates: alternatesFor("/locations"),
};

export default function LocationsPage() {
  const groups = [
    { title: "Canada", items: locations.filter((l) => l.country === "Canada") },
    { title: "United States", items: locations.filter((l) => l.country === "United States") },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 lg:pt-36 pb-12 bg-[#F8FAFC]">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-[#003D82] mb-6">Where we work</h1>
          <p className="text-lg text-[#475569] leading-relaxed max-w-3xl">
            ERP Titans is an official Odoo Ready Partner headquartered in Calgary, Alberta. We deliver Odoo
            implementation, migration, support and ERP recovery on site in Calgary and remotely across Canada and the
            United States.
          </p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {groups.map((g) => (
            <div key={g.title}>
              <h2 className="text-2xl font-extrabold text-[#003D82] mb-6">{g.title}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {g.items.map((l) => (
                  <Link
                    key={l.slug}
                    href={`/${l.slug}`}
                    className="group rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 hover:border-[#003D82]/40 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#64748B] mb-2">
                      <MapPin size={15} className="text-[#003D82]" /> {l.placeFull}
                    </div>
                    <h3 className="text-lg font-bold text-[#003D82] mb-2">{l.h1}</h3>
                    <p className="text-sm text-[#64748B] leading-relaxed mb-4">{l.description.split(". ")[0]}.</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#003D82] group-hover:gap-2.5 transition-all">
                      View page <ArrowRight size={15} />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </div>
  );
}
