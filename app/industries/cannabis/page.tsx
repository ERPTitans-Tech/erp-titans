import IndustryPage from "@/components/industries/IndustryPage";

export const metadata = {
  title: "Cannabis ERP | Odoo for Licensed Producers, COA & CTLS Reporting",
  description:
    "Odoo ERP for licensed cannabis producers: seed-to-sale traceability, Certificate of Analysis management, Health Canada CTLS reporting, excise duty and inventory control.",
  alternates: { canonical: "/industries/cannabis" },
};

export default function CannabisPage() {
  return <IndustryPage industry="cannabis" />;
}
