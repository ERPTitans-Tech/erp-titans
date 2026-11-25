"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Tick from "@/components/ui/Tick";

interface LocationHeroProps {
  h1: string;
  subtitle: string;
  checklist: string[];
}

export default function LocationHero({ h1, subtitle, checklist }: LocationHeroProps) {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 bg-[#F8FAFC]">
      <div className="max-w-[85rem] mx-auto grid grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:px-8">
        <div className="text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#003D82] mb-8">
            {h1}
          </h1>

          <p className="mb-10 text-lg text-[#475569] leading-relaxed font-medium">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link href="/contact" className="bg-[#003D82] hover:bg-[#003D82]/90 text-white px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-md text-center">
              Book a Free Consultation <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="bg-white border-2 border-[#003D82]/20 hover:border-[#003D82] text-[#003D82] px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center text-center">
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Partner card: official Odoo Ready Partner artwork (unmodified) with the page's key commitments */}
        <div className="rounded-[24px] bg-white p-7 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0] sm:p-8">
          <div className="flex items-center justify-center rounded-2xl bg-[#F8FAFC] px-6 py-6 ring-1 ring-[#E2E8F0]">
            <Image src="/odoo-ready-partner-tight.svg" alt="Odoo Ready Partner" width={416} height={202} className="h-16 w-auto" />
          </div>
          <ul className="mt-6 space-y-3.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] font-semibold text-[#334155]">
                <Tick tone="green" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-[#E2E8F0] pt-5 text-sm text-[#64748B]">
            Headquartered in Calgary, Alberta · Serving Canada &amp; the USA
          </p>
        </div>
      </div>
    </section>
  );
}
