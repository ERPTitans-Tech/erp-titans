import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

import { alternatesFor } from "@/lib/site";
const loc = getLocation("odoo-partner-canada");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: alternatesFor("/odoo-partner-canada"),
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-partner-canada", images: ["/opengraph-image"] },
};

export default function OdooPartnerCanadaPage() {
  return <LocationPage loc={loc} />;
}
