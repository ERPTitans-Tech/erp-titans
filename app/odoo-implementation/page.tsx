import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

const s = getOdooService("odoo-implementation");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: { canonical: "/odoo-implementation" },
  openGraph: { title: s.title, description: s.description, url: "/odoo-implementation", images: ["/opengraph-image"] },
};

export default function OdooImplementationPage() {
  return <OdooServicePage s={s} />;
}
