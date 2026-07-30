"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OdooHero() {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 bg-[#F8FAFC]" id="home">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-left w-full">

          {/* Headline + partner logo lockup, left aligned, spanning full width */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 mb-10 w-full">
<h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] text-[#003D82]">
  Your Trusted{" "}
  <Image
    src="/odoo-icon.svg"
    alt="Odoo"
    width={100}
    height={54}
    className="inline-block h-12 md:h-14 w-auto align-middle mx-1"
  />{" "}
  Partner <br />
  <span className="text-[#003D82]">for Business Transformation</span>
</h1>
            <div className="flex items-center gap-4 md:gap-6 shrink-0">
              <Image
                src="/logo.png"
                alt="ERP Titans"
                width={160}
                height={80}
                className="h-14 md:h-20 w-auto"
              />
              <span className="text-5xl lg:text-6xl font-extrabold leading-none text-[#003D82]">+</span>
              <Image
                src="/odoo-ready-partner.svg"
                alt="Odoo Ready Partner"
                width={220}
                height={110}
                className="h-14 md:h-20 w-auto"
              />
            </div>
          </div>

          <div className="mb-10 text-xl text-[#475569] leading-relaxed w-full max-w-3xl space-y-4">
            <p>
              As an official Odoo Partner, ERP Titans brings its proven expertise in ERP recovery and optimization to the world&apos;s most comprehensive suite of business applications.
            </p>
            <p>
              We empower small and medium-sized enterprises (SMEs) to streamline their processes, enhance decision-making, and unlock unprecedented ROI.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-start mb-10">
            <Link href="/contact" className="bg-[#003D82] hover:bg-[#003D82]/90 text-white px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center gap-2 shadow-md text-center">
              Book Odoo Consultation <ArrowRight size={18} />
            </Link>
            <Link href="/#process" className="bg-white border-2 border-[#003D82]/20 hover:border-[#003D82] text-[#003D82] px-8 py-4 rounded-sm font-medium transition-colors flex items-center justify-center text-center">
              Learn About ERP Recovery
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 text-sm font-semibold text-[#475569]">
            <div className="flex items-center gap-2">
              <Check size={18} className="text-[#003D82]" strokeWidth={3} />
              <span>Official Odoo Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} className="text-[#003D82]" strokeWidth={3} />
              <span>ERP Recovery Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={18} className="text-[#003D82]" strokeWidth={3} />
              <span>Canadian Expertise</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
