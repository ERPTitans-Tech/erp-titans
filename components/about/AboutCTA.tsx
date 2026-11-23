import CTA from "@/components/home/CTA";

// Uses the site-wide CTA band so the About page closes the same way as every other page.
export default function AboutCTA() {
  return (
    <CTA
      heading="Ready to Fix Your ERP?"
      description="Whether your ERP project is stalled, underperforming, or needs modernization, our team is ready to help."
      primaryButtonText="Book Free Audit"
      primaryButtonLink="/contact"
      secondaryButtonText="Schedule Consultation"
      secondaryButtonLink="/contact?schedule=true"
    />
  );
}
