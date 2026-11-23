import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

const s = getOdooService("odoo-migration");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: { canonical: "/odoo-migration" },
  openGraph: { title: s.title, description: s.description, url: "/odoo-migration", images: ["/opengraph-image"] },
};

export default function OdooMigrationPage() {
  return <OdooServicePage s={s} />;
}
