import LocationHero from "@/components/locations/LocationHero";
import LocationContent from "@/components/locations/LocationContent";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "ERP Consulting in British Columbia | ERP Titans",
  description: "Vendor-aware ERP consulting for British Columbia SMEs. We help Vancouver and BC-wide businesses recover from failed ERP rollouts and implement systems that actually fit their operations.",
};

export default function ErpConsultingBritishColumbiaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LocationHero
        h1="ERP Consulting in British Columbia"
        subtitle="From Vancouver's tech and distribution corridor to BC's manufacturing and agriculture base, we help growing businesses fix broken ERP systems and implement ones that actually work."
        checklist={["ERP Recovery Specialists", "Serving BC-Wide", "Official Odoo Partner"]}
      />
      <LocationContent
        intro={[
          "British Columbia's economy is unusually varied for its size, spanning the Port of Vancouver's distribution and logistics traffic, a dense tech and startup scene, forestry and agriculture, and a long-established cannabis sector. That variety means a lot of BC businesses inherit ERP systems that were implemented generically, without real attention to their specific industry's workflow.",
          "Our ERP consulting work in BC focuses on where that mismatch actually shows up: inventory that doesn't reflect reality, reporting that takes days instead of minutes, and processes people have quietly started working around instead of using the system. We fix what's broken and build what's missing, whether that means a full Odoo implementation or targeted recovery work on an existing system.",
        ]}
        industriesHeading="Industries We Serve in British Columbia"
        industries={[
          {
            name: "Distribution & Logistics",
            description: "Warehouse, procurement, and supply chain systems built for BC's port-driven distribution economy.",
            href: "/industries/distribution",
          },
          {
            name: "Manufacturing",
            description: "Production, inventory, and quality workflows for BC manufacturers of every size.",
            href: "/industries/manufacturing",
          },
          {
            name: "Cannabis",
            description: "Seed-to-sale compliance and manufacturing ERP for BC's regulated cannabis producers.",
            href: "/industries/cannabis",
          },
        ]}
        closing="Whether you're in Vancouver, Victoria, Kelowna, or anywhere in between, we bring the same vendor-aware, business-first approach to every ERP recovery or implementation project across BC."
      />
      <CTA
        heading="Ready to Fix or Build Your ERP System in BC?"
        description="Book a free consultation and get a clear-eyed assessment of what your ERP setup actually needs."
      />
    </div>
  );
}
