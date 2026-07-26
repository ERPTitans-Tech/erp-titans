import OdooHero from "@/components/odoo/OdooHero";
import OdooServices from "@/components/odoo/OdooServices";
import WhyChooseOdoo from "@/components/odoo/WhyChooseOdoo";
import PowerOfOdoo from "@/components/odoo/PowerOfOdoo";
import OdooCTA from "@/components/odoo/OdooCTA";
export const metadata = {
  title: "Official Odoo Partner | ERP Titans",
  description: "Unlock the full potential of Odoo with ERP Titans. We provide Odoo implementation, customization, support, and recovery services for SMEs globally.",
};

export default function OdooPartnerPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <OdooHero />
      <OdooServices />
      <WhyChooseOdoo />
      <PowerOfOdoo />
      <OdooCTA 
        heading={
          <>
            Ready to Transform Your Business <br className="hidden sm:block" />
            <span>with Odoo?</span>
          </>
        }
        description="Whether you're looking to implement Odoo for the first time, optimize an existing setup, or recover a struggling project, ERP Titans is your dedicated partner. Contact us today for a free consultation and discover how we can help you achieve your business objectives with Odoo."
        primaryButtonText="Book a Free Odoo Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More About Our ERP Recovery Framework"
        secondaryButtonLink="/#process"
      />
    </main>
  );
}
