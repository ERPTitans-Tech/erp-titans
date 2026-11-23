import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

const loc = getLocation("odoo-partner-montana");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: { canonical: "/odoo-partner-montana" },
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-partner-montana", images: ["/opengraph-image"] },
};

export default function OdooPartnerMontanaPage() {
  return <LocationPage loc={loc} />;
}
