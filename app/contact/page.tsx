import ContactForm from "@/components/contact/ContactForm";
import type { Metadata } from "next";
import { Suspense } from "react";

import { alternatesFor } from "@/lib/site";
export const metadata: Metadata = {
  title: "Contact Us | Book a Free Odoo Consultation",
  description:
    "Talk to ERP Titans, a Calgary-based official Odoo Ready Partner. Book a free Odoo consultation or ERP health audit for your business in Canada or the USA.",
  alternates: alternatesFor("/contact"),
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={null}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
