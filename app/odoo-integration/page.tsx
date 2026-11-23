import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

const s = getOdooService("odoo-integration");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: { canonical: "/odoo-integration" },
  openGraph: { title: s.title, description: s.description, url: "/odoo-integration", images: ["/opengraph-image"] },
};

export default function OdooIntegrationPage() {
  return <OdooServicePage s={s} />;
}
