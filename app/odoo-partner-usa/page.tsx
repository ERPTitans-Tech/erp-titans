import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

import { alternatesFor } from "@/lib/site";
const loc = getLocation("odoo-partner-usa");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: alternatesFor("/odoo-partner-usa"),
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-partner-usa", images: ["/opengraph-image"] },
};

export default function OdooPartnerUsaPage() {
  return <LocationPage loc={loc} />;
}
