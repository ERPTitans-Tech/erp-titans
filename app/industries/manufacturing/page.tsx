import ManufacturingHero from "@/components/industries/manufacturing/ManufacturingHero";
import Roadblocks from "@/components/industries/manufacturing/Roadblocks";
import RecoveryApproach from "@/components/industries/manufacturing/RecoveryApproach";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Manufacturing ERP | Odoo MRP Implementation for Manufacturers",
  description:
    "Odoo manufacturing ERP for SMEs: MRP, work orders, quality control, maintenance and costing, implemented and rescued by an official Odoo Ready Partner.",
  alternates: { canonical: "/industries/manufacturing" },
};

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ManufacturingHero />
      <Roadblocks />
      <RecoveryApproach />
      <CTA />
    </div>
  );
}
