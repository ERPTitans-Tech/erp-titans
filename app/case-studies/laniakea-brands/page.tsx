import Link from "next/link";
import { ArrowRight, MapPin, Briefcase } from "lucide-react";
import CTA from "@/components/home/CTA";
import { caseStudies } from "@/lib/case-studies";

export const metadata = {
  title: "Case Studies | ERP Titans",
  description:
    "Real Odoo implementation and ERP recovery projects delivered by ERP Titans. See the scope, approach, and capabilities behind our client engagements.",
  alternates: { canonical: "https://erptitans.com/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 lg:pt-36 pb-12 lg:pb-16 bg-[#F8FAFC]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16A34A] mb-4">
            Client Success Stories
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#003D82] tracking-tight leading-tight mb-6">
            Case Studies
          </h1>
          <p className="text-lg md:text-xl text-[#64748B] leading-relaxed max-w-3xl mx-auto">
            A look at the systems we&apos;ve designed and delivered: what the business needed, what we built,
            and how we got it live.
          </p>
        </div>
      </section>

      {/* Case study cards */}
      <section className="pb-20 lg:pb-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block bg-white rounded-[24px] border border-gray-100 border-l-4 border-l-[#003D82] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 p-8 md:p-10"
              >
                <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-[#64748B] mb-4">
                      <span className="inline-flex items-center rounded-full bg-green-50 text-[#16A34A] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                        {cs.industry}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={15} /> {cs.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase size={15} /> {cs.engagement}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#003D82] leading-tight mb-1">
                      {cs.client}
                    </h2>
                    {cs.formerName && (
                      <p className="text-sm font-medium text-[#94A3B8] mb-4">Formerly {cs.formerName}</p>
                    )}
                    <p className="text-lg font-semibold text-[#0F172A] mb-3">{cs.headline}</p>
                    <p className="text-[#64748B] leading-relaxed mb-6 max-w-3xl">{cs.summary}</p>

                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1 text-xs font-semibold text-[#475569]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex lg:flex-col gap-6 lg:gap-5 lg:pl-10 lg:border-l lg:border-gray-100">
                    {cs.stats.map((s) => (
                      <div key={s.label} className="min-w-[90px]">
                        <div className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-none">
                          {s.value}
                        </div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mt-1">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#003D82] group-hover:gap-3 transition-all">
                  Read the case study <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA
        heading="Want Results Like These?"
        description="Book a free consultation and we'll map out what a properly scoped Odoo implementation looks like for your business."
      />
    </div>
  );
}
