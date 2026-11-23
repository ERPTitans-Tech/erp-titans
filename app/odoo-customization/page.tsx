import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

import { alternatesFor } from "@/lib/site";
const s = getOdooService("odoo-customization");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: alternatesFor("/odoo-customization"),
  openGraph: { title: s.title, description: s.description, url: "/odoo-customization", images: ["/opengraph-image"] },
};

export default function OdooCustomizationPage() {
  return <OdooServicePage s={s} />;
}
