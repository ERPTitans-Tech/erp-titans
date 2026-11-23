// Central registry of published case studies.
// The /case-studies index page renders cards from this list, so adding a new
// case study = add an entry here + create app/case-studies/<slug>/page.tsx.

export type CaseStudySummary = {
  slug: string;
  client: string;
  brands?: string[];
  logo?: string;
  industry: string;
  location: string;
  engagement: string;
  headline: string;
  summary: string;
  tags: string[];
  stats: { value: string; label: string }[];
};

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "laniakea-brands",
    client: "Laniakea Brands",
    brands: ["Space Race Cannabis", "Beach Bum", "Violet Tourist", "Shoe String"],
    logo: "/case-studies/laniakea/logo-dark.png",
    industry: "Cannabis",
    location: "Alberta, Canada",
    engagement: "Full-Cycle Odoo Implementation",
    headline: "End-to-end Odoo ERP for a multi-brand, multi-province licensed cannabis producer",
    summary:
      "A fully integrated Odoo ERP for the parent company of four cannabis brands, covering procurement, seed-to-sale traceability, Certificate of Analysis management, manufacturing, consignment sales, field CRM, cannabis-compliant accounting and Health Canada CTLS reporting, with Power BI analytics on top. Live since November 1, 2026.",
    tags: ["Odoo", "Cannabis", "COA Management", "CTLS Reporting", "Lot Traceability", "Power BI"],
    stats: [
      { value: "6", label: "Core business areas" },
      { value: "11", label: "Agile sprints" },
      { value: "13", label: "Power BI reports" },
    ],
  },
];
