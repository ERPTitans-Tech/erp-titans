"use client";

import { ArrowRight, Check, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function OdooHero() {
  return (
    <section className="relative pt-24 pb-10 md:pt-28 md:pb-14 bg-[#F8FAFC]" id="home">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-left">
            <div className="mb-6">
  <Image
    src="/odoo-ready-partner.svg"
    alt="Odoo Ready Partner"
    width={160}
    height={80}
    className="h-16 w-auto"
  />
</div>

            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-8 text-[#003D82]">
              Your Trusted Odoo Partner <br />
              <span className="text-[#003D82]">for Business Transformation</span>
            </h1>

            <div className="mb-10 text-xl text-[#475569] leading-relaxed max-w-lg space-y-4">
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

          {/* Right Visual Graphic */}
          <div className="relative w-full hidden lg:block">
            {/* Soft background shadow/glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#003D82]/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative bg-white border border-[#E2E8F0] p-8 lg:p-10 rounded-xl shadow-2xl z-10 flex flex-col items-center justify-center min-h-[350px]">
              
              <div className="w-20 h-20 bg-[#003D82]/5 rounded-2xl flex items-center justify-center border border-[#003D82]/10 mb-6 shadow-inner">
                 <Zap size={40} className="text-[#003D82]" />
              </div>
              
              <h3 className="text-2xl font-bold text-[#003D82] mb-5 text-center">Driving Efficiency & Growth</h3>
              
              <div className="space-y-3 w-full max-w-sm mx-auto">
                {[
                  "Streamlined Business Processes",
                  "Enhanced Decision-Making",
                  "Unprecedented ROI",
                  "Scalable Operations"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-gray-50 py-3 px-4 rounded-xl border border-gray-100">
                    <CheckCircle2 size={18} className="text-[#003D82] shrink-0" />
                    <span className="font-semibold text-sm text-[#334155]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
