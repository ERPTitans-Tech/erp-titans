import type { Metadata } from "next";
import LocationPage from "@/components/locations/LocationPage";
import { getLocation } from "@/lib/locations";

const loc = getLocation("erp-consulting-british-columbia");

export const metadata: Metadata = {
  title: loc.title,
  description: loc.description,
  alternates: { canonical: "/erp-consulting-british-columbia" },
  openGraph: { title: loc.title, description: loc.description, url: "/erp-consulting-british-columbia" },
};

export default function ErpConsultingBritishColumbiaPage() {
  return <LocationPage loc={loc} />;
}
