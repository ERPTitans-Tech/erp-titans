import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_URL, organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Odoo Partner in Calgary, Canada & USA | ERP Titans",
    template: "%s | ERP Titans",
  },
  description:
    "ERP Titans is an official Odoo Ready Partner based in Calgary, Alberta. Odoo ERP implementation, migration, customization, support and ERP recovery for manufacturers, distributors and SMEs across Canada and the USA.",
  applicationName: "ERP Titans",
  keywords: [
    "Odoo partner",
    "Odoo partner Calgary",
    "Odoo partner Canada",
    "Odoo partner USA",
    "Odoo implementation partner",
    "Odoo ERP implementation",
    "Odoo consultant",
    "Odoo integrator",
    "Odoo migration",
    "Odoo support",
    "ERP recovery",
    "ERP implementation Calgary",
    "ERP Titans",
  ],
  openGraph: {
    type: "website",
    siteName: "ERP Titans",
    locale: "en_CA",
    title: "Odoo Partner in Calgary, Canada & USA | ERP Titans",
    description:
      "Official Odoo Ready Partner in Calgary, Alberta. Odoo implementation, migration, support and ERP recovery across Canada and the USA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Odoo Partner in Calgary, Canada & USA | ERP Titans",
    description: "Official Odoo Ready Partner. Odoo implementation, migration, support and ERP recovery.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  category: "technology",
};

import { Toaster } from 'react-hot-toast';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${inter.variable} scroll-smooth antialiased overflow-x-hidden`}>
      <body className="min-h-screen bg-brand-bg text-brand-text font-sans flex flex-col overflow-x-hidden w-full relative">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <Toaster position="bottom-right" />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
