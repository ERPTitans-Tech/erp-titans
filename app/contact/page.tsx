import ContactForm from "@/components/contact/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Metadata } from "next";
import { Suspense } from "react";
import { alternatesFor, getSite } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Odoo Consultation",
  description:
    "Talk to ERP Titans, a Calgary-based official Odoo Ready Partner. Book a free Odoo consultation or ERP health audit for your business in Canada or the USA.",
  alternates: alternatesFor("/contact"),
};

const FAQS = [
  {
    q: "Is the first consultation really free?",
    a: "Yes. The initial consultation and the ERP Health Audit call are free and carry no obligation. You leave with a clear view of what's working, what isn't and the next steps.",
  },
  {
    q: "What does the ERP Health Audit cover?",
    a: "We review how your ERP is set up against how your business actually runs: key workflows, data quality, reporting, customizations and user adoption, then agree on priorities.",
  },
  {
    q: "Do you work with businesses outside Calgary?",
    a: "Yes. We're based in Calgary, Alberta and work with companies across Canada and the United States, delivering remotely with on-site sessions where a project needs them.",
  },
  {
    q: "We're not on Odoo yet. Can you still help?",
    a: "Absolutely. We help teams moving off QuickBooks, Sage, spreadsheets or a legacy ERP, as well as companies that already run Odoo and need it fixed or extended.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default async function ContactPage() {
  const { isCA } = await getSite();
  return (
    <div className="flex min-h-screen flex-col">
      <JsonLd data={faqSchema} />
      <Suspense fallback={null}>
        <ContactForm isCA={isCA} />
      </Suspense>

      <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Before you reach out" title="Common Questions" text="Quick answers to what people usually ask before getting in touch. Still unsure? Send us a message above." />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {FAQS.map((f) => (
              <details
                key={f.q}
                className="group rounded-[20px] bg-[#F8FAFC] p-6 ring-1 ring-[#E2E8F0] transition-all open:bg-white open:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[17px] font-bold text-[#0F172A] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-lg leading-none text-[#003D82] ring-1 ring-[#E2E8F0] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-[#64748B]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
