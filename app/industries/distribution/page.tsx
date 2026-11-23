import IndustryPage from "@/components/industries/IndustryPage";

import { alternatesFor } from "@/lib/site";
export const metadata = {
  title: "Distribution & Logistics ERP | Odoo Inventory & Warehouse",
  description:
    "Odoo ERP for distributors and logistics companies: multi-warehouse inventory, barcode, purchasing, landed costs and 3PL integration, delivered by an official Odoo partner.",
  alternates: alternatesFor("/industries/distribution"),
};

export default function DistributionPage() {
  return <IndustryPage industry="distribution" />;
}
