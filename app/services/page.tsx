import ServicesHero from "@/components/services/ServicesHero";
import ServiceFinder from "@/components/services/ServiceFinder";
import ServicePillars from "@/components/services/ServicePillars";
import HowWeWork from "@/components/services/HowWeWork";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ErpRescueProgram from "@/components/services/ErpRescueProgram";
import FaqSplit from "@/components/ui/FaqSplit";
import JsonLd from "@/components/seo/JsonLd";
import CTA from "@/components/home/CTA";

import { alternatesFor } from "@/lib/site";
export const metadata = {
  title: "Odoo & ERP Services | Implementation, Rescue, Integration & Support",
  description:
    "End-to-end Odoo and ERP services: strategy, Odoo implementation, ERP rescue and recovery, customization, integrations, BI and analytics, AI, managed support, cloud and digital commerce.",
  alternates: alternatesFor("/services"),
};

const faqs = [
  {
    q: "Which service should we start with?",
    a: "Most clients start with a short discovery or audit. It tells you whether you need a new implementation, a recovery, a migration or just better support, and gives you a written scope before you commit to anything larger.",
  },
  {
    q: "Do you only work with Odoo?",
    a: "Odoo is our main platform and we are an official Odoo Ready Partner. Our strategy, recovery and integration work also covers the systems around your ERP, such as e-commerce, shipping, banking and reporting tools.",
  },
  {
    q: "How do you price a project?",
    a: "Fixed-scope work is quoted after discovery against a signed-off scope. Larger programs are priced phase by phase, and managed support is a monthly plan sized to your users and the cover you need.",
  },
  {
    q: "Can you take over from our current Odoo partner?",
    a: "Yes. We regularly take over projects mid-stream. We secure access to your code, database and hosting, audit what is there and plan a transition that keeps your business running.",
  },
  {
    q: "Do you work on site?",
    a: "We are based in Calgary, so workshops, training and go-live support can happen on site in Calgary and the surrounding area. Elsewhere in Canada and the United States we deliver remotely, with on-site visits when a phase calls for it.",
  },
  {
    q: "What happens after go-live?",
    a: "Every project includes a hypercare period after launch. After that, many clients move to a managed support plan so the same team keeps the system stable, upgraded and improving.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <JsonLd data={faqSchema} />
      <ServicesHero />
      <ServiceFinder />
      <ServicePillars />
      <HowWeWork />
      <WhyChooseUs />
      <ErpRescueProgram />
      <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <FaqSplit n={7} title="Questions we hear before every project" intro="Straight answers on where to start, how pricing works and what happens after launch." faqs={faqs} />
        </div>
      </section>
      <CTA />
    </div>
  );
}
