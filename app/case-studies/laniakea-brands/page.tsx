import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ShoppingCart,
  Boxes,
  Factory,
  Truck,
  Users,
  Landmark,
  BarChart3,
  Plug,
  ShieldCheck,
  Target,
} from "lucide-react";
import CTA from "@/components/home/CTA";

export const metadata = {
  title: "Case Study: Laniakea Brands (formerly Space Race Cannabis) Odoo ERP | ERP Titans",
  description:
    "How ERP Titans delivered a full-cycle Odoo ERP implementation for Laniakea Brands, a multi-province licensed cannabis producer, covering procurement, seed-to-sale traceability, manufacturing, sales, CRM, accounting, and Power BI analytics.",
  alternates: { canonical: "https://erptitans.com/case-studies/laniakea-brands" },
};

const facts = [
  { label: "Client", value: "Laniakea Brands (formerly Space Race Cannabis)" },
  { label: "Industry", value: "Licensed cannabis producer: dried flower & pre-rolls" },
  { label: "Headquarters", value: "Alberta, Canada" },
  { label: "Markets", value: "Multi-province distribution across Canada" },
  { label: "Platform", value: "Odoo on Odoo.sh + Power BI" },
  { label: "Engagement", value: "Full-cycle implementation, kickoff to hypercare" },
];

const stats = [
  { value: "6", label: "Core business areas unified" },
  { value: "11", label: "Agile delivery sprints" },
  { value: "13", label: "Power BI reports & dashboards" },
  { value: "~4.5", label: "Months, kickoff to go-live" },
];

const challenges = [
  {
    title: "Seed-to-sale traceability",
    text: "Every lot, tote, and blend had to be traceable from vendor receipt through production to the customer, with recall readiness and Health Canada reporting in mind.",
  },
  {
    title: "Multi-province complexity",
    text: "Each province brings its own SKUs, pricing, packaging, excise stamps, labeling, and fulfillment rules, from full shipments to staged and partial deliveries.",
  },
  {
    title: "Consignment & external inventory",
    text: "Stock sits in company warehouses, 3PL facilities, and provincial distribution centres under different ownership models, and all of it needs to be visible and correctly accounted for.",
  },
  {
    title: "Production discipline",
    text: "Blending, pre-roll manufacturing, and packaging needed controlled work-order sequencing, QC checkpoints, weight/loss tracking, and labor visibility per work center.",
  },
  {
    title: "Regulated finance",
    text: "Cannabis excise duty, multi-province taxation, inventory valuation, and audit-ready financial trails had to be built in, not bolted on.",
  },
  {
    title: "Decision-ready reporting",
    text: "Leadership needed reliable views of COGS, WIP, revenue recognition, efficiency, and sales by SKU, channel, and province, all drawn from one source of truth.",
  },
];

const solution = [
  {
    icon: ShoppingCart,
    title: "Procure-to-Pay",
    points: [
      "Vendor onboarding with licensing and regulatory document governance",
      "RFQ, purchase order, and multi-level approval workflows",
      "Certificate of Analysis (COA) capture, review, and traceability",
      "QC-gated receiving with lot capture, quarantine, and rejection routing",
      "Inventory-driven reordering and vendor price comparison",
    ],
  },
  {
    icon: Boxes,
    title: "Inventory & Traceability",
    points: [
      "Lot, batch, and tote tracking with parent-child blend genealogy",
      "Multi-location visibility across warehouses, 3PLs, and consignment",
      "Barcode scanning for movements between zones and work stations",
      "Compliance labels for master cases, totes, and units",
      "Cycle counts, waste & destruction logs, and quarantine/hold controls",
    ],
  },
  {
    icon: Factory,
    title: "Manufacturing",
    points: [
      "Multi-level BOMs with province-specific packaging and stamp handling",
      "Work centers, employee mapping, and controlled work-order sequencing",
      "Blend-lot production with full input-to-output traceability",
      "Stage-level QC, weight & loss tracking, WIP, and sample retention",
      "Labor and work center efficiency tracking, plus subcontracting readiness",
    ],
  },
  {
    icon: Truck,
    title: "Sales & Fulfillment",
    points: [
      "Order intake from provincial distributors and authorized channels",
      "Province-specific SKUs, pricing, and fulfillment rules",
      "Consignment and ownership-based sales with depletion reporting",
      "Allocation, partial shipments, and backorder management",
      "Lot-level traceability through the customer network for recalls",
    ],
  },
  {
    icon: Users,
    title: "CRM & Field Sales",
    points: [
      "Store visit planning, reminders, and standardized visit checklists",
      "Visit prioritization based on frequency and inactivity",
      "Store master data with licensing attributes and status",
      "Promotional / care-package tracking with photo evidence",
      "Rep performance dashboards with role-based security",
    ],
  },
  {
    icon: Landmark,
    title: "Accounting & Finance",
    points: [
      "Chart of accounts, fiscal structure, and automated operational postings",
      "Cannabis excise calculation, reconciliation, and submission readiness",
      "Multi-province tax frameworks and multi-currency handling",
      "Inventory valuation and costing aligned to physical flows",
      "Bank feeds and reconciliation, fixed assets, accruals, and a full audit trail",
    ],
  },
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
  "Machine & work center efficiency (UPH, utilization)",
  "Pre-roll format, case & vault movement productivity",
  "Manufacturing sample analytics",
  "Revenue recognition",
  "Cost of goods sold (COGS)",
  "Work-in-progress (WIP)",
  "Batch / lot traceability",
  "Destruction log & write-offs",
  "Sales by SKU, channel & province (retail)",
  "Sales by SKU, channel & province (distributor B2B)",
  "Procurement & biomass inventory views",
];

const phases = [
  {
    when: "May 2026",
    title: "Solution Finalization",
    text: "Discovery, solution design walkthrough, and formal solution sign-off before any configuration began.",
  },
  {
    when: "Jun 2026",
    title: "Procurement & Inventory Foundation",
    text: "Product, vendor, and procurement master data; receiving, QC, and COA tracking; lot, tote, and biomass traceability.",
  },
  {
    when: "Jul – Aug 2026",
    title: "Manufacturing, Consignment & Sales",
    text: "Manufacturing architecture and BOM validation, consignment workflows, and sales ordering with pick-pack-ship execution.",
  },
  {
    when: "Sep 2026",
    title: "CRM, Accounting, Analytics & Testing",
    text: "CRM, labeling, ShipStation, core accounting and compliance logic, Power BI delivery, then system integration testing and UAT sign-off.",
  },
  {
    when: "Go-Live",
    title: "Cutover & Hypercare",
    text: "Open-transaction and GL balance migration, a controlled production go-live, and a dedicated hypercare period with extended accounting support.",
  },
];

const outcomes = [
  "One integrated system of record from vendor receipt to customer delivery",
  "End-to-end lot genealogy, making recall investigations a lookup instead of a manual hunt",
  "Province-specific products, packaging, and fulfillment handled natively",
  "Full visibility of company-owned, consignment, and 3PL inventory",
  "Excise, tax, and inventory valuation flowing automatically into the books",
  "Production efficiency, COGS, and WIP visible to leadership in Power BI",
  "Field sales activity and store coverage tracked in the same platform",
  "Role-based access and audit trails across every regulated workflow",
];

export default function LaniakeaBrandsCaseStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ───────── Hero ───────── */}
      <section className="relative pt-32 lg:pt-36 pb-16 lg:pb-20 bg-[#F8FAFC] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-green-100/50 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-blue-50/60 blur-[100px]" />
        </div>

        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm font-medium text-[#64748B] mb-8">
            <Link href="/case-studies" className="hover:text-[#003D82] transition-colors">
              Case Studies
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#0F172A]">Laniakea Brands</span>
          </nav>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-green-50 text-[#16A34A] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Cannabis
                </span>
                <span className="inline-flex items-center rounded-full bg-blue-50 text-[#003D82] px-3 py-1 text-xs font-bold uppercase tracking-wider">
                  Odoo Implementation
                </span>
              </div>
              <h1 className="text-[36px] md:text-[52px] font-[800] text-[#003D82] tracking-tight leading-[1.08] mb-6">
                One Odoo ERP for a Multi-Province Licensed Cannabis Producer
              </h1>
              <p className="text-lg md:text-xl text-[#475569] leading-relaxed font-medium max-w-2xl">
                Laniakea Brands (formerly Space Race Cannabis) partnered with ERP Titans to implement a fully
                integrated Odoo ERP spanning procurement, seed-to-sale traceability, manufacturing, consignment
                sales, field CRM, and cannabis-compliant accounting, with a Power BI analytics layer on top.
              </p>
            </div>

            <div className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 border-t-4 border-t-[#003D82]">
              <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[#64748B] mb-5">At a Glance</h2>
              <dl className="space-y-4">
                {facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[110px_1fr] gap-3 text-[15px]">
                    <dt className="font-semibold text-[#64748B]">{f.label}</dt>
                    <dd className="font-semibold text-[#0F172A]">{f.value}</dd>
                  </div>
                ))}
              </dl>
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
        </div>
      </section>

      {/* ───────── Challenge ───────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16A34A] mb-3">The Challenge</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              Regulated, multi-province, and operationally complex
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              As a licensed producer selling flower and pre-rolls into several provincial markets, the business
              needed a single platform that could carry strict regulatory traceability without slowing down day-to-day
              operations across purchasing, production, distribution, and finance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="rounded-[20px] bg-[#F8FAFC] border border-gray-100 p-7">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{c.title}</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Solution ───────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16A34A] mb-3">What We Built</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              Six business areas on one integrated platform
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Each area was configured and extended around how the business actually operates, with traceability
              and compliance designed into every workflow from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.map(({ icon: Icon, title, points }) => (
              <div
                key={title}
                className="bg-white rounded-[24px] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:-translate-y-0.5 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#003D82] flex items-center justify-center text-white mb-5">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#003D82] mb-4">{title}</h3>
                <ul className="space-y-3">
                  {points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[15px] text-[#475569] leading-snug">
                      <CheckCircle2 size={18} className="text-[#16A34A] shrink-0 mt-0.5" />
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
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Plug className="text-[#003D82]" size={26} />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#003D82]">Integrations</h2>
            </div>
            <p className="text-[#64748B] leading-relaxed mb-8">
              Odoo was connected to the logistics, banking, communication, and analytics tools the team already
              relied on, so data moves automatically instead of being re-keyed.
            </p>
            <div className="space-y-4">
              {integrations.map((i) => (
                <div key={i.name} className="flex gap-4 rounded-[16px] border border-gray-100 bg-[#F8FAFC] p-5">
                  <div className="font-bold text-[#003D82] min-w-[120px]">{i.name}</div>
                  <div className="text-[15px] text-[#475569] leading-relaxed">{i.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="text-[#003D82]" size={26} />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#003D82]">Power BI Analytics</h2>
            </div>
            <p className="text-[#64748B] leading-relaxed mb-8">
              A dedicated analytics layer connected directly to the Odoo.sh database gives leadership
              decision-ready reporting across manufacturing, finance, compliance, and sales.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {reports.map((r) => (
                <div
                  key={r}
                  className="flex items-start gap-2.5 rounded-[12px] border border-gray-100 bg-white px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                >
                  <CheckCircle2 size={16} className="text-[#16A34A] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#334155] leading-snug">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Delivery approach ───────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16A34A] mb-3">How We Delivered</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              Fast-track agile delivery in 11 sprints
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Every sprint ended with a live demo, business-user validation, and formal sign-off. Weekly governance
              calls, a maintained risk register, and a structured change-request process kept scope and timeline
              under control.
            </p>
          </div>

          <ol className="relative border-l-2 border-[#CBD5E1] ml-3 space-y-10">
            {phases.map((p) => (
              <li key={p.title} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[#003D82] ring-4 ring-[#F8FAFC]" />
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-[#16A34A] mb-1">{p.when}</div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{p.title}</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed max-w-3xl">{p.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { t: "Role-based training", d: "Hands-on workshops tailored to inventory, production, sales, and accounting users." },
              { t: "Documentation handover", d: "Role-specific user manuals, configuration guides, and a video library." },
              { t: "Hypercare", d: "Intensified post-go-live support, plus extended accounting SME coverage through the first close." },
            ].map((x) => (
              <div key={x.t} className="bg-white rounded-[20px] border border-gray-100 p-7">
                <h3 className="font-bold text-[#003D82] mb-2">{x.t}</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Compliance ───────── */}
      <section className="py-20 lg:py-24 bg-white border-t border-[#E2E8F0]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-[#16A34A]" size={28} />
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16A34A]">Compliance by Design</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              Built for Health Canada, provincial regulators, and the auditor
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Traceability, quality control, and financial controls are embedded in each transaction rather than
              rebuilt after the fact in spreadsheets, so the ERP stands as the source of truth when regulators ask.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Lot & blend genealogy",
              "Recall readiness",
              "COA & QC checkpoints",
              "Quarantine & hold",
              "Waste & destruction logs",
              "Excise & tax reporting",
              "Role-based access",
              "Full audit trail",
            ].map((c) => (
              <div
                key={c}
                className="bg-green-50/70 border-l-4 border-[#16A34A] rounded-r-[14px] px-5 py-4 text-[15px] font-bold text-[#0F172A]"
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Outcomes ───────── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <Target className="text-[#16A34A]" size={22} />
              <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#16A34A]">The Result</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003D82] leading-tight mb-5">
              Live on Odoo, with one source of truth
            </h2>
            <p className="text-lg text-[#64748B] leading-relaxed">
              Laniakea Brands now runs purchasing, production, distribution, field sales, and finance on a single
              integrated platform built to scale with new products, provinces, and channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
            {outcomes.map((o) => (
              <div key={o} className="flex gap-3 items-start">
                <CheckCircle2 size={22} className="text-[#003D82] shrink-0 mt-0.5" />
                <span className="text-[16px] font-medium text-[#334155] leading-relaxed">{o}</span>
              </div>
            ))}
          </div>

          {/*
            TESTIMONIAL: uncomment once the client approves a quote.
            <figure className="mt-14 bg-white rounded-[24px] p-8 md:p-10 border border-gray-100 border-l-4 border-l-[#16A34A] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <blockquote className="text-xl text-[#0F172A] font-medium leading-relaxed italic">
                &quot;QUOTE HERE&quot;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-[#64748B]">NAME, TITLE, Laniakea Brands</figcaption>
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
        description="Book a free consultation and see what an Odoo implementation built around your compliance and production realities would look like."
      />
    </div>
  );
}
