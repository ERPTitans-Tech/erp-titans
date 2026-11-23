import type { Metadata } from "next";
import OdooServicePage from "@/components/services/OdooServicePage";
import { getOdooService } from "@/lib/odoo-services";

import { alternatesFor } from "@/lib/site";
const s = getOdooService("odoo-rescue");

export const metadata: Metadata = {
  title: s.title,
  description: s.description,
  alternates: alternatesFor("/odoo-rescue"),
  openGraph: { title: s.title, description: s.description, url: "/odoo-rescue", images: ["/opengraph-image"] },
};

export default function OdooRescuePage() {
  return <OdooServicePage s={s} />;
}
