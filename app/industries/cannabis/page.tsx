import CannabisHero from "@/components/industries/cannabis/CannabisHero";
import CannabisChallenges from "@/components/industries/cannabis/CannabisChallenges";
import CannabisFoundation from "@/components/industries/cannabis/CannabisFoundation";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Cannabis ERP | Odoo for Licensed Producers, COA & CTLS Reporting",
  description:
    "Odoo ERP for licensed cannabis producers: seed-to-sale traceability, Certificate of Analysis management, Health Canada CTLS reporting, excise duty and inventory control.",
  alternates: { canonical: "/industries/cannabis" },
};

export default function CannabisPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <CannabisHero />
      <CannabisChallenges />
      <CannabisFoundation />
      <CTA />
    </div>
  );
}
