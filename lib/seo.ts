// Site-wide SEO constants and the organisation schema used in the root layout.

export const SITE_URL = "https://erptitans.com";
export const ORG_ID = `${SITE_URL}/#organization`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "ERP Titans",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/opengraph-image`,
  email: "sales@erptitans.com",
  description:
    "ERP Titans is an official Odoo Ready Partner based in Calgary, Alberta, providing Odoo ERP implementation, migration, customization, support and ERP recovery for businesses across Canada and the United States.",
  slogan: "Fix your broken ERP. Scale your business.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Calgary" },
    { "@type": "City", name: "Edmonton" },
    { "@type": "State", name: "Alberta" },
    { "@type": "State", name: "British Columbia" },
    { "@type": "Country", name: "Canada" },
    { "@type": "State", name: "Texas" },
    { "@type": "State", name: "California" },
    { "@type": "State", name: "Montana" },
    { "@type": "State", name: "New York" },
    { "@type": "State", name: "Florida" },
    { "@type": "State", name: "Arizona" },
    { "@type": "Country", name: "United States" },
  ],
  knowsAbout: [
    "Odoo",
    "Odoo ERP implementation",
    "Odoo migration",
    "Odoo customization",
    "Odoo support",
    "ERP recovery",
    "ERP implementation",
    "Manufacturing ERP",
    "Distribution ERP",
    "Cannabis ERP",
    "Seed-to-sale traceability",
    "Health Canada CTLS reporting",
  ],
};

// The .com (US) site words the description for US visitors; the address stays Calgary.
export function organizationSchemaFor(isCA: boolean) {
  if (isCA) return organizationSchema;
  return {
    ...organizationSchema,
    description:
      "ERP Titans is an official Odoo Ready Partner based in Calgary, Alberta, serving businesses across the United States and Canada with Odoo ERP implementation, migration, customization, support and ERP recovery.",
  };
}

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "ERP Titans",
  url: SITE_URL,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};
