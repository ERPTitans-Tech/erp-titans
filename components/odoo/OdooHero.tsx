"use client";

import { ArrowRight, Check, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OdooHero() {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 bg-[#F8FAFC]" id="home">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">

          <div className="text-left w-full">

            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.0] text-[#003D82] mb-10">
              Your Trusted Odoo Partner for Business Transformation
            </h1>

            <div className="mb-10 text-lg text-[#475569] leading-relaxed font-medium w-full max-w-3xl space-y-4">
              <p>
                As an official Odoo Partner, ERP Titans brings its proven expertise in ERP recovery and optimization to the world&apos;s most comprehensive suite of business applications.
              </p>
              <p>
                We empower enterprises to streamline their processes, enhance decision-making, and unlock unprecedented ROI.
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
          {/* Partnership card: two equal-height logo slots with a centred "+" divider */}
          <div className="hidden lg:flex flex-col items-stretch bg-white border border-[#E2E8F0] rounded-2xl shadow-lg px-10 py-8">
            <div className="h-28 flex items-center justify-center">
              <Image
                src="/odoo-ready-partner-tight.svg"
                alt="Odoo Ready Partner"
                width={416}
                height={202}
                className="h-20 w-auto"
              />
            </div>

            <div className="flex items-center gap-4 my-5" aria-hidden="true">
              <span className="flex-1 h-px bg-[#E2E8F0]" />
              <span className="w-11 h-11 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center text-[#003D82]">
                <Plus size={22} strokeWidth={2.5} />
              </span>
              <span className="flex-1 h-px bg-[#E2E8F0]" />
            </div>

            <div className="h-28 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="ERP Titans"
                width={117}
                height={96}
                className="h-24 w-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
