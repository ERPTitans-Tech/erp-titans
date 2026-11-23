import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

const s = getOdooService("odoo-support");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: { canonical: "/odoo-support" },
  openGraph: { title: s.title, description: s.description, url: "/odoo-support", images: ["/opengraph-image"] },
};

export default function OdooSupportPage() {
  return <OdooServicePage s={s} />;
}
