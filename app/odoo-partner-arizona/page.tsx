import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

import { alternatesFor } from "@/lib/site";
const loc = getLocation("odoo-partner-arizona");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: alternatesFor("/odoo-partner-arizona"),
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-partner-arizona", images: ["/opengraph-image"] },
};

export default function OdooPartnerArizonaPage() {
  return <LocationPage loc={loc} />;
}
