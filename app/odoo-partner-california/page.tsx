import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

import { alternatesFor } from "@/lib/site";
const loc = getLocation("odoo-partner-california");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: alternatesFor("/odoo-partner-california"),
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-partner-california", images: ["/opengraph-image"] },
};

export default function OdooPartnerCaliforniaPage() {
  return <LocationPage loc={loc} />;
}
