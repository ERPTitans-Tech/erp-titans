// Central registry of published case studies.
// The /case-studies index page renders cards from this list, so adding a new
// case study = add an entry here + create app/case-studies/<slug>/page.tsx.

export type CaseStudySummary = {
  slug: string;
  client: string;
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
    slug: "multi-brand-cannabis-producer",
    client: "Multi-Brand Licensed Cannabis Producer",
    industry: "Cannabis",
    location: "Alberta, Canada",
    engagement: "Full-Cycle Odoo Implementation",
    headline: "End-to-end Odoo ERP for a multi-brand, multi-province licensed cannabis producer",
    summary:
      "A fully integrated Odoo ERP for the parent company of a portfolio of cannabis brands, covering procurement, seed-to-sale traceability, Certificate of Analysis management, manufacturing, consignment sales, field CRM, cannabis-compliant accounting and Health Canada CTLS reporting, with Power BI analytics on top. Live since November 1, 2026.",
    tags: ["Odoo", "Cannabis", "COA Management", "CTLS Reporting", "Lot Traceability", "Power BI"],
    stats: [
      { value: "6", label: "Core business areas" },
      { value: "11", label: "Agile sprints" },
      { value: "13", label: "Power BI reports" },
    ],
  },
];
