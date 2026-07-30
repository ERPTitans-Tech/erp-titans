"use client";

import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OdooHero() {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 bg-[#F8FAFC]" id="home">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16 items-center">

          <div className="text-left w-full">

            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] text-[#003D82] mb-10">
              Your Trusted{" "}
              <Image
                src="/odoo-icon.svg"
                alt="Odoo"
                width={100}
                height={54}
                className="inline-block h-10 md:h-12 w-auto align-middle mx-1"
              />{" "}
              Partner for Business Transformation
            </h1>

            <div className="mb-10 text-lg text-[#475569] leading-relaxed font-medium w-full max-w-3xl space-y-4">
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

          <div className="hidden lg:flex flex-col items-center justify-center gap-6 bg-white border border-[#E2E8F0] rounded-2xl shadow-lg p-10">
            <Image
              src="/odoo-ready-partner.svg"
              alt="Odoo Ready Partner"
              width={200}
              height={100}
              className="h-24 w-auto"
            />
            <span className="text-4xl font-extrabold text-[#003D82] leading-none">+</span>
            <Image
              src="/logo.png"
              alt="ERP Titans"
              width={200}
              height={100}
              className="h-20 w-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
