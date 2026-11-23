import AboutIntro from "@/components/about/AboutIntro";
import Comparison from "@/components/about/Comparison";
import WhoWeServe from "@/components/about/WhoWeServe";
import AboutCTA from "@/components/about/AboutCTA";

export const metadata = {
  title: "About Us | Calgary-Based Odoo Partner & ERP Recovery Specialists",
  description:
    "ERP Titans is a Calgary-based official Odoo Ready Partner and ERP recovery specialist helping SMEs across Canada and the USA implement, fix and scale their ERP systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutIntro />
      <Comparison />
      <WhoWeServe />
      <AboutCTA />
    </div>
  );
}
