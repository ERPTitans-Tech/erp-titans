import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

import { alternatesFor } from "@/lib/site";
const loc = getLocation("odoo-implementation-alberta");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: alternatesFor("/odoo-implementation-alberta"),
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-implementation-alberta", images: ["/opengraph-image"] },
};

export default function OdooImplementationAlbertaPage() {
  return <LocationPage loc={loc} />;
}
