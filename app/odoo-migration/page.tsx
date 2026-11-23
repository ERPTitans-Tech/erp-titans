import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

import { alternatesFor } from "@/lib/site";
const s = getOdooService("odoo-migration");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: alternatesFor("/odoo-migration"),
  openGraph: { title: s.title, description: s.description, url: "/odoo-migration", images: ["/opengraph-image"] },
};

export default function OdooMigrationPage() {
  return <OdooServicePage s={s} />;
}
