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
  apps: { name: string; icon: string }[];
};

export const caseStudies: CaseStudySummary[] = [
  {
    slug: "top-tier-cannabis-brand",
    client: "Top-Tier Cannabis Brand",
    industry: "Cannabis",
    location: "Alberta, Canada",
    engagement: "Full-Cycle Odoo Implementation",
    headline: "End-to-end Odoo ERP for a leader in 1 g and 0.4 g pre-rolls",
    summary:
      "A fully integrated Odoo ERP for a top-tier Canadian cannabis brand and its sister brands, covering procurement, seed-to-sale traceability, Certificate of Analysis management, manufacturing, consignment sales, field CRM, cannabis-compliant accounting and Health Canada CTLS reporting, with Power BI analytics on top.",
    tags: ["Odoo", "Cannabis", "COA Management", "CTLS Reporting", "Lot Traceability", "Power BI"],
    apps: [
      { name: "Purchase", icon: "purchase" },
      { name: "Quality", icon: "quality_control" },
      { name: "Inventory", icon: "stock" },
      { name: "Manufacturing", icon: "mrp" },
      { name: "Sales", icon: "sale_management" },
      { name: "Accounting", icon: "accountant" },
    ],
  },
];
