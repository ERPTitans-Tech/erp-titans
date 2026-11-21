// Central registry of published case studies.
// The /case-studies index page renders cards from this list, so adding a new
// case study = add an entry here + create app/case-studies/<slug>/page.tsx.

export type CaseStudySummary = {
  slug: string;
  client: string;
  formerName?: string;
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
    formerName: "Space Race Cannabis",
    industry: "Cannabis",
    location: "Alberta, Canada",
    engagement: "Full-Cycle Odoo Implementation",
    headline: "End-to-end Odoo ERP for a multi-province licensed cannabis producer",
    summary:
      "We designed and delivered a fully integrated Odoo ERP covering procurement, seed-to-sale inventory traceability, manufacturing, consignment sales, field CRM, and cannabis-compliant accounting, backed by a Power BI analytics layer, from kickoff to go-live in about four and a half months.",
    tags: ["Odoo", "Cannabis", "Manufacturing", "Lot Traceability", "Power BI", "ShipStation"],
    stats: [
      { value: "6", label: "Core business areas" },
      { value: "11", label: "Agile sprints" },
      { value: "13", label: "Power BI reports" },
    ],
  },
];
