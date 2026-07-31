"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

interface LocationHeroProps {
  h1: string;
  subtitle: string;
  checklist: string[];
}

export default function LocationHero({ h1, subtitle, checklist }: LocationHeroProps) {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 bg-[#F8FAFC]">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left w-full max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#003D82] mb-8">
            {h1}
          </h1>

          <p className="mb-10 text-lg text-[#475569] leading-relaxed font-medium w-full max-w-3xl">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-10">
            <Link href="/contact" className="bg-[#003D82] hover:bg-[#003D82]/90 text-white px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-md text-center">
              Book a Free Consultation <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="bg-white border-2 border-[#003D82]/20 hover:border-[#003D82] text-[#003D82] px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center text-center">
              Explore Our Services
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm font-semibold text-[#475569]">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <Check size={18} className="text-[#003D82]" strokeWidth={3} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

