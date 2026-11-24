import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import CTA from "@/components/home/CTA";
import { alternatesFor } from "@/lib/site";
import Tick from "@/components/ui/Tick";
import {
  HeroDataGraph,
  DataFlowStepper,
  CoaLiveCheck,
  CtlsWaterfall,
  ProductionMix,
  DashboardTabs,
} from "@/components/case-studies/CannabisInteractive";

export const metadata = {
  title: "Case Study: Odoo ERP for a Top-Tier Cannabis Brand",
  description:
    "How ERP Titans delivered a full-cycle Odoo ERP for a top-tier Canadian cannabis brand leading in 1 g and 0.4 g pre-rolls, covering seed-to-sale traceability, COA management, CTLS reporting, manufacturing, sales, accounting and Power BI.",
  alternates: alternatesFor("/case-studies/top-tier-cannabis-brand"),
};

const facts = [
  { label: "Client", value: "Top-tier cannabis brand (name confidential)" },
  { label: "Known for", value: "Leading 1 g and 0.4 g pre-rolls" },
  { label: "Structure", value: "Parent company with a portfolio of consumer brands" },
  { label: "Industry", value: "Licensed cannabis producer: pre-rolls & dried flower" },
  { label: "Headquarters", value: "Alberta, Canada" },
  { label: "Markets", value: "Multi-province distribution across Canada" },
  { label: "Platform", value: "Odoo on Odoo.sh + Power BI" },
  { label: "Go-live", value: "November 1, 2026" },
];

const stats = [
  { value: "6", label: "Core business areas unified" },
  { value: "11", label: "Agile delivery sprints" },
  { value: "13", label: "Power BI reports & dashboards" },
  { value: "Nov 1", label: "Live in production, 2026" },
];

const challenges = [
  {
    title: "Multiple brands, one operation",
    text: "The brands share facilities, people and compliance obligations, but each carries its own products, SKUs and market presence.",
  },
  {
    title: "Seed-to-sale traceability",
    text: "Every lot, tote and blend had to be traceable from vendor receipt through production to the customer, with recall readiness built in.",
  },
  {
    title: "Lab results that gate the business",
    text: "No lot moves to sale until its Certificate of Analysis is in and approved, so COA handling had to be a controlled workflow rather than a folder of PDFs.",
  },
  {
    title: "Monthly federal reporting",
    text: "Health Canada's CTLS report has to reconcile production, inventory, sales and destruction every month. Without a system of record, that means spreadsheets and late nights.",
  },
  {
    title: "Multi-province complexity",
    text: "Each province brings its own SKUs, pricing, packaging, excise stamps, labeling and fulfillment rules, plus consignment stock sitting at provincial distribution centres.",
  },
  {
    title: "Regulated finance",
    text: "Cannabis excise duty, multi-province taxation, inventory valuation and audit-ready financial trails had to be built in, not bolted on.",
  },
];

const coaPoints = [
  "A COA is linked to every received and produced lot, with results captured as structured data, not just an attached PDF",
  "Testing covers potency (THC, THCA, CBD, CBDA) and contaminants such as microbial, pesticides, heavy metals and mycotoxins",
  "Lots stay in quarantine until QC reviews and approves the COA, so nothing untested can be picked, blended or shipped",
  "Approved potency values carry through to compliance labels, and each COA is ready to accompany the lot to provincial distributors",
];

const ctlsPoints = [
  "Every inventory movement (receipts, production, sales, returns, destruction) is classified the way CTLS reports it",
  "Opening and closing inventory, additions, reductions and book value come straight from posted Odoo transactions",
  "Destruction logs, write-offs and sales to provincial distributors reconcile to the same numbers finance sees",
  "The monthly report is ready well ahead of the 15th-of-the-month deadline, formatted for CTLS upload",
];

const solution = [
  {
    icon: "/odoo-icons/svg/purchase.svg",
    app: "Purchase",
    title: "Procure-to-Pay",
    points: [
      "Vendor onboarding with licensing and regulatory document governance",
      "RFQ, purchase order and multi-level approval workflows",
      "Certificate of Analysis capture, review and lot-level traceability",
      "QC-gated receiving with lot capture, quarantine and rejection routing",
      "Inventory-driven reordering and vendor price comparison",
    ],
  },
  {
    icon: "/odoo-icons/svg/stock.svg",
    app: "Inventory",
    title: "Inventory & Traceability",
    points: [
      "Lot, batch and tote tracking with parent-child blend genealogy",
      "Multi-location visibility across warehouses, 3PLs and consignment",
      "Barcode scanning for movements between zones and work stations",
      "Compliance labels for master cases, totes and units",
      "Cycle counts, waste & destruction logs and quarantine/hold controls",
    ],
  },
  {
    icon: "/odoo-icons/svg/mrp.svg",
    app: "Manufacturing",
    title: "Manufacturing",
    points: [
      "Multi-level BOMs with province-specific packaging and stamp handling",
      "Work centers, employee mapping and controlled work-order sequencing",
      "Blend-lot production with full input-to-output traceability",
      "Stage-level QC, weight & loss tracking, WIP and sample retention",
      "Labor and work center efficiency tracking",
    ],
  },
  {
    icon: "/odoo-icons/svg/sale_management.svg",
    app: "Sales",
    title: "Sales & Fulfillment",
    points: [
      "Order intake from provincial distributors and authorized channels",
      "Province-specific SKUs, pricing and fulfillment rules across every brand",
      "Consignment and ownership-based sales with depletion reporting",
      "Allocation, partial shipments and backorder management",
      "Lot-level traceability through the customer network for recalls",
    ],
  },
  {
    icon: "/odoo-icons/svg/crm.svg",
    app: "CRM",
    title: "CRM & Field Sales",
    points: [
      "Store visit planning, reminders and standardized visit checklists",
      "Visit prioritization based on frequency and inactivity",
      "Store master data with licensing attributes and status",
      "Promotional and care-package tracking with photo evidence",
      "Rep performance dashboards with role-based security",
    ],
  },
  {
    icon: "/odoo-icons/svg/accountant.svg",
    app: "Accounting",
    title: "Accounting & Finance",
    points: [
      "Chart of accounts, fiscal structure and automated operational postings",
      "Cannabis excise calculation, reconciliation and submission readiness",
      "Multi-province tax frameworks and multi-currency handling",
      "Inventory valuation and costing aligned to physical flows",
      "Bank feeds and reconciliation, fixed assets, accruals and a full audit trail",
    ],
  },
];

// Official Odoo app icons (odoo.com/page/brand-assets), used unmodified.
const odooApps = [
  { name: "Purchase", icon: "/odoo-icons/svg/purchase.svg" },
  { name: "Inventory", icon: "/odoo-icons/svg/stock.svg" },
  { name: "Barcode", icon: "/odoo-icons/svg/stock_barcode.svg" },
  { name: "Quality", icon: "/odoo-icons/svg/quality_control.svg" },
  { name: "Manufacturing", icon: "/odoo-icons/svg/mrp.svg" },
  { name: "Sales", icon: "/odoo-icons/svg/sale_management.svg" },
  { name: "CRM", icon: "/odoo-icons/svg/crm.svg" },
  { name: "Accounting", icon: "/odoo-icons/svg/accountant.svg" },
];

const integrations = [
  { name: "ShipStation", text: "Third-party logistics connectivity for synchronized shipment and inventory movement." },
  { name: "Bank Feeds", text: "Automated bank statement import and reconciliation." },
  { name: "Gmail", text: "Native email sync for CRM communication workflows." },
  { name: "PO Webhook API", text: "JSON-based webhook endpoint for inbound purchase order entries." },
  { name: "Power BI", text: "Direct Odoo.sh database integration powering the analytics layer." },
];

const reports = [
  "OEE, capacity, waste % & scheduled vs. actual",
  "Employee-level labor productivity",
  "Machine & work center efficiency",
  "Pre-roll format, case & vault movement",
  "Manufacturing sample analytics",
  "Revenue recognition",
  "Cost of goods sold (COGS)",
  "Work-in-progress (WIP)",
  "Batch / lot traceability",
  "Destruction log & write-offs",
  "Sales by SKU, channel & province (retail)",
  "Sales by SKU, channel & province (B2B)",
  "Procurement & biomass inventory",
];

const phases = [
  {
    when: "May 2026",
    title: "Solution Finalization",
    text: "Discovery, solution design walkthrough and formal solution sign-off before any configuration began.",
  },
  {
    when: "Jun 2026",
    title: "Procurement & Inventory Foundation",
    text: "Product, vendor and procurement master data; receiving, QC and COA workflows; lot, tote and biomass traceability.",
  },
  {
    when: "Jul – Aug 2026",
    title: "Manufacturing, Consignment & Sales",
    text: "Manufacturing architecture and BOM validation, consignment workflows, and sales ordering with pick-pack-ship execution.",
  },
  {
    when: "Sep – Oct 2026",
    title: "CRM, Accounting, Compliance Reporting & Testing",
    text: "CRM, labeling, ShipStation, accounting and excise logic, CTLS reporting and Power BI, followed by integration testing and a thorough UAT cycle. We extended this phase so every workflow was validated end to end before cutover.",
  },
  {
    when: "Nov 1, 2026",
    title: "Go-Live & Hypercare",
    text: "Open-transaction and GL balance migration, a controlled production go-live, and a dedicated hypercare period with extended accounting support through the first month-end close.",
  },
];

const outcomes = [
  "One integrated system of record for every brand, from vendor receipt to customer delivery",
  "Every lot tied to its Certificate of Analysis, with nothing released before QC approval",
  "CTLS monthly reporting generated from real transactions instead of spreadsheets",
  "End-to-end lot genealogy, so a recall investigation is a lookup instead of a manual hunt",
  "Province-specific products, packaging and fulfillment handled natively",
  "Full visibility of company-owned, consignment and 3PL inventory",
  "Excise, tax and inventory valuation flowing automatically into the books",
  "Production efficiency, COGS and WIP visible to leadership in Power BI",
];

function SectionLabel({ n, children }: { n: string; children: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#003D82] text-[12px] font-bold text-white">{n}</span>
      <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">{children}</span>
    </div>
  );
}

export default function TopTierCannabisCaseStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ───────── Hero ───────── */}
      <section className="relative pt-32 lg:pt-36 pb-16 lg:pb-20 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-sky-100/50 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/60 blur-[100px]" />
        </div>

        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm font-medium text-[#64748B] mb-8">
            <Link href="/case-studies" className="hover:text-[#003D82] transition-colors">
              Case Studies
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#0F172A]">Top-Tier Cannabis Brand</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-14 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-green-50 text-[#16A34A] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Cannabis
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-50 text-[#003D82] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Odoo Implementation
                </span>
                <span className="inline-flex items-center rounded-full bg-amber-50 text-amber-700 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Live since Nov 2026
                </span>
              </div>
              <h1 className="text-[36px] md:text-[52px] font-[800] text-[#003D82] tracking-tight leading-[1.08] mb-6">
                One Odoo ERP for a Top-Tier Cannabis Brand
              </h1>
              <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-medium max-w-2xl mb-6">
                Our client is a top-tier Canadian cannabis brand, a leader in 1 g and 0.4 g pre-rolls, operating
                alongside sister brands under one parent company. The project began as an Odoo implementation for one of those brands and grew into the
                operational backbone for the whole group once the brands came together under one parent company.
              </p>
              <p className="text-[17px] text-[#64748B] leading-relaxed max-w-2xl">
                It covers procurement, seed-to-sale traceability, Certificate of Analysis management, manufacturing,
                consignment sales, field CRM, cannabis-compliant accounting and Health Canada CTLS reporting, with a
                Power BI analytics layer on top.
              </p>

            </div>

            {/* Client card */}
            <div className="rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.22)] border border-gray-100 bg-white">
              <HeroDataGraph />
              <div className="bg-white p-7">
                <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#64748B] mb-5">At a Glance</h2>
                <dl className="space-y-3.5">
                  {facts.map((f) => (
                    <div key={f.label} className="grid grid-cols-[105px_1fr] gap-3 text-[14.5px]">
                      <dt className="font-semibold text-[#64748B]">{f.label}</dt>
                      <dd className="font-semibold text-[#0F172A]">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>

          {/* Stat strip */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-[16px] border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.03)] px-6 py-6 text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-[#003D82] leading-none">{s.value}</div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#64748B] mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 border-l-2 border-[#003D82]/30 pl-4 text-sm leading-relaxed text-[#64748B]">
            Charts, dashboards and sample records on this page are illustrations of how the system works, using sample values rather than client data.
          </p>
        </div>
      </section>

      {/* ───────── Challenge ───────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionLabel n="1">The challenge</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              Regulated, multi-brand and multi-province
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              As a licensed producer selling flower and pre-rolls under several brands into multiple provincial markets,
              the business needed one platform that could carry strict regulatory traceability and reporting without
              slowing down purchasing, production, distribution or finance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="rounded-[20px] bg-[#F8FAFC] border border-gray-100 p-7">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{c.title}</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Compliance spotlight: COA ───────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <SectionLabel n="2">Compliance, built in</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              Where cannabis ERP projects are won or lost
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Configuring modules is the easy part. What makes an ERP work for a licensed producer is whether lab
              results and federal reporting live inside the system or around it. Here, both were designed into the
              workflows from the first sprint rather than left for spreadsheets after go-live.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div>
              <div className="mb-4">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[#0EA5E9]">Health Canada · Lot release</span>
                <h3 className="text-2xl md:text-[28px] font-extrabold text-[#0F172A]">Certificate of Analysis (COA)</h3>
              </div>
              <p className="text-[16px] text-[#64748B] leading-relaxed mb-6">
                Under the Cannabis Regulations, every lot or batch must be tested by a licensed lab before it is sold,
                and the COA is the proof. It records potency and contaminant results against a specific lot number.
                Provincial distributors such as AGLC rely on it to confirm a product meets its specification.
              </p>
              <ul className="space-y-3.5">
                {coaPoints.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] text-[#334155] leading-relaxed">
                    <Tick tone="green" className="mt-1" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CoaLiveCheck />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="lg:order-2">
              <div className="mb-4">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[#0EA5E9]">Health Canada · Monthly</span>
                <h3 className="text-2xl md:text-[28px] font-extrabold text-[#0F172A]">CTLS Monthly Reporting</h3>
              </div>
              <p className="text-[16px] text-[#64748B] leading-relaxed mb-6">
                Federal licence holders must report to Health Canada through the Cannabis Tracking and Licensing System
                by the 15th of every month. The report covers inventory additions and reductions, along with the book
                value of closing inventory and of sales to provincial distributors. If the ERP can&apos;t produce it,
                someone rebuilds it by hand every month.
              </p>
              <ul className="space-y-3.5">
                {ctlsPoints.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] text-[#334155] leading-relaxed">
                    <Tick tone="green" className="mt-1" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:order-1">
              <CtlsWaterfall />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Data flow (interactive) ───────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-[#EFF6FF] py-20 lg:py-24 border-t border-[#E2E8F0]">
        <div className="relative max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <SectionLabel n="3">Seed-to-sale, step by step</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              From vendor lot to CTLS report
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Every movement carries its lot identity forward, so the full genealogy of any pre-roll on a provincial
              shelf is one lookup away, and month-end reporting writes itself. Click a step, or let it play.
            </p>
          </div>
          <DataFlowStepper />
        </div>
      </section>

      {/* ───────── Solution ───────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionLabel n="4">What we built</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              Six business areas on one integrated platform
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Each area was configured and extended around how the business actually operates, with traceability and
              compliance designed into every workflow from day one.
            </p>
          </div>

          <div className="mb-12 rounded-[24px] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-6 py-6 md:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="lg:w-56 shrink-0">
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#94A3B8] mb-1">Built on</div>
                <div className="text-lg font-extrabold text-[#0F172A]">Odoo apps in this implementation</div>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 flex-1">
                {odooApps.map((a) => (
                  <div key={a.name} className="flex flex-col items-center gap-2 text-center">
                    <span className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-gray-100 flex items-center justify-center hover:-translate-y-0.5 transition-transform">
                      <Image src={a.icon} alt={`Odoo ${a.name} app icon`} width={50} height={50} className="w-9 h-9" />
                    </span>
                    <span className="text-[12px] font-semibold text-[#475569]">{a.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.map(({ icon, app, title, points }) => (
              <div
                key={title}
                className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-0.5 transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-14 h-14 rounded-2xl bg-[#F8FAFC] border border-gray-100 flex items-center justify-center shrink-0">
                    <Image src={icon} alt={`Odoo ${app} app icon`} width={50} height={50} className="w-9 h-9" />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#003D82] leading-tight">{title}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">Odoo {app}</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[15px] text-[#475569] leading-snug">
                      <Tick tone="green" className="mt-1" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Integrations + Analytics ───────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel n="5">Integrations &amp; analytics</SectionLabel>

          {/* Row 1: integrations | Power BI + reports delivered */}
          <div className="mt-6 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-col rounded-[24px] bg-[#F8FAFC] p-7 ring-1 ring-[#E2E8F0] sm:p-8">
              <div className="mb-3">
                <h2 className="text-2xl md:text-[28px] font-extrabold text-[#003D82]">Integrations</h2>
              </div>
              <p className="mb-6 text-[#64748B] leading-relaxed">
                Odoo was connected to the logistics, banking, communication and analytics tools the team already relied
                on, so data moves automatically instead of being re-keyed.
              </p>
              <div className="flex flex-1 flex-col justify-between gap-3">
                {integrations.map((i) => (
                  <div key={i.name} className="flex items-center gap-4 rounded-[16px] bg-white p-4 ring-1 ring-[#E2E8F0]">
                    <div className="min-w-[120px] font-bold text-[#003D82]">{i.name}</div>
                    <div className="text-[14.5px] leading-snug text-[#475569]">{i.text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col rounded-[24px] bg-[#F8FAFC] p-7 ring-1 ring-[#E2E8F0] sm:p-8">
              <div className="mb-3">
                <h2 className="text-2xl md:text-[28px] font-extrabold text-[#003D82]">Power BI Analytics</h2>
              </div>
              <p className="mb-6 text-[#64748B] leading-relaxed">
                A dedicated analytics layer connected directly to the Odoo.sh database gives leadership decision-ready
                reporting across manufacturing, finance, compliance and sales.
              </p>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#003D82]">Reports &amp; dashboards delivered</span>
                <span className="rounded-full bg-white px-2.5 py-0.5 text-[12px] font-bold text-[#003D82] ring-1 ring-[#E2E8F0]">{reports.length}</span>
              </div>
              <div className="grid grid-cols-1 flex-1 content-between gap-2.5 sm:grid-cols-2">
                {reports.map((r) => (
                  <div key={r} className="flex items-start gap-2.5 rounded-[12px] bg-white px-3.5 py-2.5 ring-1 ring-[#E2E8F0]">
                    <Tick tone="green" className="mt-1" />
                    <span className="text-[13.5px] font-medium leading-snug text-[#334155]">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2: the two interactive charts side by side */}
          <div className="mt-8 grid grid-cols-1 items-stretch gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-10">
            <DashboardTabs className="h-full" />
            <ProductionMix className="h-full" />
          </div>
        </div>
      </section>

      {/* ───────── Delivery approach ───────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <SectionLabel n="6">How we delivered</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              11 agile sprints, live on November 1
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Every sprint ended with a live demo, business-user validation and formal sign-off. Weekly governance
              calls, a maintained risk register and a structured change-request process kept scope under control,
              and we gave final testing the time it needed rather than rushing cutover.
            </p>
          </div>

          <ol className="relative border-l-2 border-[#CBD5E1] ml-3 space-y-10">
            {phases.map((p, i) => (
              <li key={p.title} className="pl-8 relative">
                <span
                  className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full ring-4 ring-[#F8FAFC] ${
                    i === phases.length - 1 ? "bg-[#16A34A]" : "bg-[#003D82]"
                  }`}
                />
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#16A34A] mb-1">{p.when}</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{p.title}</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed max-w-3xl">{p.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Role-based training", d: "Hands-on workshops tailored to inventory, production, sales and accounting users." },
              { t: "Documentation handover", d: "Role-specific user manuals, configuration guides and a video library." },
              { t: "Hypercare", d: "Intensified post-go-live support, plus extended accounting coverage through the first close." },
            ].map((x) => (
              <div key={x.t} className="bg-white rounded-[20px] border border-gray-100 p-7">
                <h3 className="font-bold text-[#003D82] mb-2">{x.t}</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Outcomes ───────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
            <div>
              <SectionLabel n="7">The result</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
                Every brand, one source of truth
              </h2>
              <p className="text-lg text-[#64748B] leading-relaxed">
                Since November 1, 2026, the client has run purchasing, production, distribution, field sales,
                finance and compliance reporting for every brand on a single integrated platform built to scale
                with new products, provinces and channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outcomes.map((o) => (
                <div key={o} className="flex gap-3 items-start rounded-[16px] bg-[#F8FAFC] border border-gray-100 p-5">
                  <Tick tone="navy" className="mt-1" />
                  <span className="text-[15px] font-medium text-[#334155] leading-relaxed">{o}</span>
                </div>
              ))}
            </div>
          </div>

          {/*
            TESTIMONIAL: uncomment once the client approves a quote.
            <figure className="mt-14 bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 border-l-4 border-l-[#16A34A] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <blockquote className="text-xl text-[#0F172A] font-medium leading-relaxed italic">
                &quot;QUOTE HERE&quot;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-[#64748B]">NAME, TITLE</figcaption>
            </figure>
          */}

          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Link
              href="/industries/cannabis"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-[#CBD5E1] bg-white px-7 py-3.5 font-medium text-[#0F172A] hover:border-[#94A3B8] transition-colors"
            >
              Explore our cannabis ERP expertise <ArrowRight size={18} />
            </Link>
            <Link
              href="/odoo"
              className="inline-flex items-center justify-center gap-2 rounded-sm border-2 border-[#CBD5E1] bg-white px-7 py-3.5 font-medium text-[#0F172A] hover:border-[#94A3B8] transition-colors"
            >
              Our Odoo services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTA
        heading="Planning an ERP for a Regulated Operation?"
        description="Book a free consultation and see what an Odoo implementation built around your compliance, COA and reporting realities would look like."
      />
    </div>
  );
}
