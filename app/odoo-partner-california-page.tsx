import LocationHero from "@/components/locations/LocationHero";
import LocationContent from "@/components/locations/LocationContent";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Official Odoo Partner in California | ERP Titans",
  description: "ERP Titans is an official Odoo Ready Partner serving California manufacturers, distributors, and cannabis operators with full-cycle Odoo implementation and ERP recovery services.",
};

export default function OdooPartnerCaliforniaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LocationHero
        h1="Official Odoo Partner in California"
        subtitle="California SMEs operate in one of the most competitive, fast-moving markets in the country, and that means their ERP systems can't afford to be an afterthought."
        checklist={["Official Odoo Partner", "Serving California SMEs", "ERP Recovery Specialists"]}
      />
      <LocationContent
        intro={[
          "From the manufacturing and logistics backbone of the Central Valley and Inland Empire to the country's largest legal cannabis market, California businesses run on complexity that generic ERP rollouts consistently underestimate. Multi-location inventory, strict compliance requirements, and rapid growth all demand a system that was actually built around the business, not bolted on after the fact.",
          "As an official Odoo Ready Partner, we help California SMEs implement Odoo properly from the start, or recover from a previous implementation that didn't deliver. Our process begins with understanding how your business actually runs, so the system reflects your operations rather than forcing your team to work around it.",
        ]}
        industriesHeading="Industries We Serve in California"
        industries={[
          {
            name: "Manufacturing",
            description: "Production planning, inventory, and quality management for California manufacturers.",
            href: "/industries/manufacturing",
          },
          {
            name: "Distribution & Logistics",
            description: "Warehouse, procurement, and supply chain workflows for California's distribution operators.",
            href: "/industries/distribution",
          },
          {
            name: "Cannabis",
            description: "Seed-to-sale compliance and manufacturing ERP for California's regulated cannabis industry.",
            href: "/industries/cannabis",
          },
        ]}
        closing="From the Bay Area to Los Angeles, San Diego, and the Central Valley, we bring the same business-first, vendor-aware approach to every Odoo implementation and ERP recovery project across California."
      />
      <CTA
        heading="Ready to Implement Odoo the Right Way in California?"
        description="Book a free consultation with our team and let's map out what a proper Odoo implementation looks like for your business."
      />
    </div>
  );
}
