import ServicesHero from "@/components/services/ServicesHero";
import ServicePillars from "@/components/services/ServicePillars";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import ErpRescueProgram from "@/components/services/ErpRescueProgram";
import CTA from "@/components/home/CTA";

import { alternatesFor } from "@/lib/site";
export const metadata = {
  title: "Odoo & ERP Services | Implementation, Rescue, Integration & Support",
  description:
    "End-to-end Odoo and ERP services: strategy, Odoo implementation, ERP rescue and recovery, customization, integrations, BI and analytics, AI, managed support, cloud and digital commerce.",
  alternates: alternatesFor("/services"),
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ServicesHero />
      <ServicePillars />
      <WhyChooseUs />
      <ErpRescueProgram />
      <CTA />
    </div>
  );
}
