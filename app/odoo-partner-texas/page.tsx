import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

const loc = getLocation("odoo-partner-texas");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: { canonical: "/odoo-partner-texas" },
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-partner-texas", images: ["/opengraph-image"] },
};

export default function OdooPartnerTexasPage() {
  return <LocationPage loc={loc} />;
}
