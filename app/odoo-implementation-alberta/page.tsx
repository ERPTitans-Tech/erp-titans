import LocationHero from "@/components/locations/LocationHero";
import LocationContent from "@/components/locations/LocationContent";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Odoo Implementation in Alberta | ERP Titans",
  description: "Official Odoo Partner delivering full-cycle Odoo implementation for Alberta businesses. From Calgary to Edmonton, we help SMEs deploy Odoo right the first time.",
};

export default function OdooImplementationAlbertaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LocationHero
        h1="Odoo Implementation in Alberta"
        subtitle="ERP Titans is an official Odoo Ready Partner helping Alberta businesses implement Odoo correctly the first time, from initial process mapping through go-live and beyond."
        checklist={["Official Odoo Partner", "Alberta-Based Delivery", "Full-Cycle Implementation"]}
      />
      <LocationContent
        intro={[
          "Alberta's economy runs on a diverse mix of energy, agriculture, manufacturing, and a fast-growing logistics and distribution sector connecting Calgary and Edmonton to markets across Canada and the US. Implementing an ERP system in this environment means accounting for real operational complexity: multi-location inventory, provincial and federal compliance, and processes that were often built up ad hoc as the business grew.",
          "We work directly with Alberta SMEs to implement Odoo the right way from day one, avoiding the rushed, generic rollouts that lead to costly rework down the line. Our team maps your actual business processes before a single module gets configured, so the system fits how you operate rather than forcing your operations to fit the software.",
        ]}
        industriesHeading="Industries We Serve in Alberta"
        industries={[
          {
            name: "Manufacturing",
            description: "Production planning, inventory control, and quality management built for Alberta manufacturers.",
            href: "/industries/manufacturing",
          },
          {
            name: "Distribution & Logistics",
            description: "Warehouse, procurement, and supply chain workflows for Alberta's distribution and logistics operators.",
            href: "/industries/distribution",
          },
          {
            name: "Cannabis",
            description: "Seed-to-sale tracking and compliance-ready ERP for Alberta's regulated cannabis industry.",
            href: "/industries/cannabis",
          },
        ]}
        closing="Whether you're implementing Odoo for the first time or replacing a system that never quite worked, our Alberta clients get the same disciplined, business-first approach we bring to every engagement."
      />
      <CTA
        heading="Ready to Implement Odoo in Alberta?"
        description="Book a free consultation with our team and let's map out what a proper Odoo implementation looks like for your business."
      />
    </div>
  );
}
