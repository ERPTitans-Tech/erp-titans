import AboutIntro from "@/components/about/AboutIntro";
import Comparison from "@/components/about/Comparison";
import WhoWeServe from "@/components/about/WhoWeServe";
import AboutCTA from "@/components/about/AboutCTA";

import { alternatesFor, getSite } from "@/lib/site";
export const metadata = {
  title: "About Us | Calgary-Based Odoo Partner & ERP Recovery Specialists",
  description:
    "ERP Titans is a Calgary-based official Odoo Ready Partner and ERP recovery specialist helping SMEs across Canada and the USA implement, fix and scale their ERP systems.",
  alternates: alternatesFor("/about"),
};

export default async function AboutPage() {
  const { isCA } = await getSite();
  return (
    <div className="flex flex-col min-h-screen">
      <AboutIntro isCA={isCA} />
      <Comparison />
      <WhoWeServe />
      <AboutCTA />
    </div>
  );
}
