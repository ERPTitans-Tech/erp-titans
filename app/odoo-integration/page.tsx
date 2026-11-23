import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

import { alternatesFor } from "@/lib/site";
const s = getOdooService("odoo-integration");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: alternatesFor("/odoo-integration"),
  openGraph: { title: s.title, description: s.description, url: "/odoo-integration", images: ["/opengraph-image"] },
};

export default function OdooIntegrationPage() {
  return <OdooServicePage s={s} />;
}
