import LocationHero from "@/components/locations/LocationHero";
import LocationContent from "@/components/locations/LocationContent";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Official Odoo Partner in Texas | ERP Titans",
  description: "ERP Titans is an official Odoo Ready Partner serving Texas manufacturers, distributors, and growing SMEs with full-cycle Odoo implementation and ERP recovery services.",
};

export default function OdooPartnerTexasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LocationHero
        h1="Official Odoo Partner in Texas"
        subtitle="Texas is one of the fastest-growing manufacturing and logistics hubs in the country, and its SMEs deserve an ERP partner who treats implementation as a business problem first, not just a software rollout."
        checklist={["Official Odoo Partner", "Serving Texas SMEs", "ERP Recovery Specialists"]}
      />
      <LocationContent
        intro={[
          "Texas's economy is built on scale: heavy manufacturing, sprawling distribution networks, and a logistics infrastructure that connects the state to the rest of the country and beyond. That scale creates real ERP challenges — systems that worked at a smaller size start breaking down as multi-location inventory, complex supply chains, and growing headcount outpace what a generic implementation was ever designed to handle.",
          "As an official Odoo Ready Partner, we bring proven ERP recovery and implementation expertise to Texas businesses that need a system built around how they actually operate, not a one-size-fits-all template. Whether you're implementing Odoo for the first time or dealing with a rollout that never delivered what was promised, our approach starts with your actual processes, not the software's defaults.",
        ]}
        industriesHeading="Industries We Serve in Texas"
        industries={[
          {
            name: "Manufacturing",
            description: "Production planning, inventory, and quality management built for Texas manufacturers at scale.",
            href: "/industries/manufacturing",
          },
          {
            name: "Distribution & Logistics",
            description: "Warehouse, procurement, and supply chain workflows for Texas's distribution and logistics operators.",
            href: "/industries/distribution",
          },
          {
            name: "Equipment Rental & Professional Services",
            description: "Rental, field service, and asset lifecycle management tailored to Texas service businesses.",
            href: "/services",
          },
        ]}
        closing="From Houston to Dallas-Fort Worth to Austin and San Antonio, we bring the same disciplined, business-first approach to every Odoo implementation and ERP recovery project across Texas."
      />
      <CTA
        heading="Ready to Implement Odoo the Right Way in Texas?"
        description="Book a free consultation with our team and let's map out what a proper Odoo implementation looks like for your business."
      />
    </div>
  );
}
