import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

const loc = getLocation("odoo-implementation-alberta");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: { canonical: "/odoo-implementation-alberta" },
  openGraph: { title: loc.title, description: loc.description, url: "/odoo-implementation-alberta" },
};

export default function OdooImplementationAlbertaPage() {
  return <LocationPage loc={loc} />;
}
