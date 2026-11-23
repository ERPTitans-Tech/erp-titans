import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

const loc = getLocation("odoo-partner-new-york");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: { canonical: "/odoo-partner-new-york" },
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-partner-new-york" },
};

export default function OdooPartnerNewYorkPage() {
  return <LocationPage loc={loc} />;
}
