import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

const loc = getLocation("odoo-partner-calgary");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: { canonical: "/odoo-partner-calgary" },
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-partner-calgary", images: ["/opengraph-image"] },
};

export default function OdooPartnerCalgaryPage() {
  return <LocationPage loc={loc} />;
}
