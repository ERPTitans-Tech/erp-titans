import IndustryPage from "@/components/industries/IndustryPage";

import { alternatesFor } from "@/lib/site";
export const metadata = {
  title: "Manufacturing ERP | Odoo MRP Implementation for Manufacturers",
  description:
    "Odoo manufacturing ERP for SMEs: MRP, work orders, quality control, maintenance and costing, implemented and rescued by an official Odoo Ready Partner.",
  alternates: alternatesFor("/industries/manufacturing"),
};

export default function ManufacturingPage() {
  return <IndustryPage industry="manufacturing" />;
}
