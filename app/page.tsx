import Hero from "@/components/home/Hero";
import Challenges from "@/components/home/Challenges"; // Used for Symptoms section
import CostOfInaction from "@/components/home/CostOfInaction";
import RecoveryProcess from "@/components/home/RecoveryProcess";
import WhyERP from "@/components/home/WhyERP";
import Outcomes from "@/components/home/Outcomes";
import CTA from "@/components/home/CTA";

import { alternatesFor, getSite } from "@/lib/site";
export const metadata = {
  title: { absolute: "Odoo Partner in Calgary, Canada & USA | ERP Titans" },
  alternates: alternatesFor("/"),
};

export default async function Home() {
  const { isCA } = await getSite();
  return (
    <>
      <Hero isCA={isCA} />
      <Challenges />
      <CostOfInaction />
      <RecoveryProcess />
      <WhyERP />
      <Outcomes />
      <CTA />
    </>
  );
}
