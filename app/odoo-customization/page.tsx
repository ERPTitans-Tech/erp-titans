import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

const s = getOdooService("odoo-customization");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: { canonical: "/odoo-customization" },
  openGraph: { title: s.title, description: s.description, url: "/odoo-customization", images: ["/opengraph-image"] },
};

export default function OdooCustomizationPage() {
  return <OdooServicePage s={s} />;
}
