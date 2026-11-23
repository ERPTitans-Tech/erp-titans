import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

import { alternatesFor } from "@/lib/site";
const s = getOdooService("odoo-implementation");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: alternatesFor("/odoo-implementation"),
  openGraph: { title: s.title, description: s.description, url: "/odoo-implementation", images: ["/opengraph-image"] },
};

export default function OdooImplementationPage() {
  return <OdooServicePage s={s} />;
}
