import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

import { alternatesFor } from "@/lib/site";
const loc = getLocation("odoo-partner-florida");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: alternatesFor("/odoo-partner-florida"),
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-partner-florida", images: ["/opengraph-image"] },
};

export default function OdooPartnerFloridaPage() {
  return <LocationPage loc={loc} />;
}
