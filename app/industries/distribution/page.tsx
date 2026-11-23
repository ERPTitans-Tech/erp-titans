import DistributionHero from "@/components/industries/distribution/DistributionHero";
import DistributionChallenges from "@/components/industries/distribution/DistributionChallenges";
import DistributionSolutions from "@/components/industries/distribution/DistributionSolutions";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Distribution & Logistics ERP | Odoo Inventory & Warehouse",
  description:
    "Odoo ERP for distributors and logistics companies: multi-warehouse inventory, barcode, purchasing, landed costs and 3PL integration, delivered by an official Odoo partner.",
  alternates: { canonical: "/industries/distribution" },
};

export default function DistributionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <DistributionHero />
      <DistributionChallenges />
      <DistributionSolutions />
      <CTA />
    </div>
  );
}
