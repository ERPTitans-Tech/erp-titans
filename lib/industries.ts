// Content for the three industry pages. Wording is carried over from the original
// pages; the "odooApps" and "proof" blocks are new.

import {
  AlertCircle, Search, Box, LineChart, ShieldAlert, Trash2,
  Globe, PackageOpen, Truck, Users, BarChart4, PieChart,
  Settings, Layers, Link2, ShieldCheck, Puzzle, Package, BarChart2, Zap, Activity,
  type LucideIcon,
} from "lucide-react";

export type IndustryKey = "cannabis" | "distribution" | "manufacturing";

export type Industry = {
  key: IndustryKey;
  name: string;
  h1: [string, string];
  intro: string;
  image: string;
  imageAlt: string;
  stat: { value: string; label: string; icon: LucideIcon };
  challenges: { heading: string; text: string; items: { icon: LucideIcon; title: string; description: string }[] };
  solution: {
    heading: string;
    text: string;
    cards?: { title: string; items: string[] }[];
    pillars?: string[];
    checklist?: string[];
    quote?: string;
    highlights: { icon: LucideIcon; title: string; text: string }[];
    highlightsHeading?: string;
  };
  odooApps: { name: string; icon: string; use: string }[];
  proof?: { title: string; text: string; href: string; cta: string };
};

export const industries: Record<IndustryKey, Industry> = {
  cannabis: {
    key: "cannabis",
    name: "Cannabis",
    h1: ["Seed-to-Sale", "Redefined."],
    intro:
      "Specialized ERP recovery for cannabis producers struggling with regulatory compliance, seed-to-sale tracking, and inventory controls.",
    image: "/cannabis.webp",
    imageAlt: "Cannabis ERP Solutions",
    stat: { value: "100%", label: "Audit Ready", icon: ShieldCheck },
    challenges: {
      heading: "Regulatory Roadblocks",
      text: "We solve the compliance and operational issues that risk your license and stall growth.",
      items: [
        { icon: AlertCircle, title: "Compliance Reporting Errors", description: "Struggling with Health Canada & CRA reporting. Inaccurate data leads to audit risks." },
        { icon: Search, title: "Traceability Gaps", description: "Inability to track strains and batches accurately. Manual tracking is prone to errors." },
        { icon: Box, title: "Inventory Issues", description: "Lack of integrated tracking across cultivation, processing, and retail stages." },
        { icon: LineChart, title: "Financial Transparency", description: "Multi-location accounting and taxation complexities make P&L transparency difficult." },
        { icon: ShieldAlert, title: "Quality Control Hurdles", description: "QC and COA documentation are not integrated into production workflows." },
        { icon: Trash2, title: "Waste Tracking", description: "Difficulty in documenting waste and by-product reuse as required by mandates." },
      ],
    },
    solution: {
      heading: "Seed-to-Sale Traceability",
      text: "Complete product lifecycle tracking isn't optional. It's a regulatory mandate. We build the foundation for your compliance.",
      pillars: ["Transparency", "Traceability", "Visibility", "Auditability", "Accountability", "Compliance"],
      checklist: ["Lot & Serial Tracking", "Batch Genealogy", "Recall Readiness", "Automated Reporting"],
      quote: "Any gaps in traceability expose you to audit risk. We ensure your ERP is the absolute source of truth for Health Canada.",
      highlights: [],
    },
    odooApps: [
      { name: "Inventory", icon: "/odoo-icons/svg/stock.svg", use: "Lot, batch and tote traceability" },
      { name: "Quality", icon: "/odoo-icons/svg/quality_control.svg", use: "COA review and QC holds" },
      { name: "Manufacturing", icon: "/odoo-icons/svg/mrp.svg", use: "Blending and pre-roll production" },
      { name: "Purchase", icon: "/odoo-icons/svg/purchase.svg", use: "Licensed vendors and biomass" },
      { name: "Sales", icon: "/odoo-icons/svg/sale_management.svg", use: "Provincial distributor orders" },
      { name: "Accounting", icon: "/odoo-icons/svg/accountant.svg", use: "Excise duty and valuation" },
    ],
    proof: {
      title: "Case study: Odoo ERP for a top-tier cannabis brand",
      text: "See how we delivered seed-to-sale traceability, Certificate of Analysis workflows and Health Canada CTLS reporting for a leading Canadian pre-roll producer.",
      href: "/case-studies/top-tier-cannabis-brand",
      cta: "Read the case study",
    },
  },

  distribution: {
    key: "distribution",
    name: "Distribution & Logistics",
    h1: ["Streamline Your", "Supply Chain."],
    intro:
      "Specialized ERP recovery for distributors struggling with multi-warehouse operations, order fulfillment, and logistics coordination.",
    image: "/distribution.webp",
    imageAlt: "Distribution ERP Solutions",
    stat: { value: "99.9%", label: "Stock Accuracy", icon: Package },
    challenges: {
      heading: "Distribution Bottlenecks",
      text: "We fix the operational gaps that slow down your fulfillment and hurt customer satisfaction.",
      items: [
        { icon: Globe, title: "Multi-Warehouse Chaos", description: "Inventory visibility across locations is a nightmare. Stock levels are inaccurate, and transfers are manual." },
        { icon: PackageOpen, title: "Order Fulfillment Delays", description: "Orders aren't automatically routed. Manual picking and packing processes cause constant errors." },
        { icon: Truck, title: "Logistics Disconnects", description: "Shipping, tracking, and carrier management aren't integrated. Manual processes create delays." },
        { icon: Users, title: "Customer Order Visibility", description: "Customers can't track orders in real-time. Your team can't provide accurate status updates." },
        { icon: BarChart4, title: "Inventory Imbalances", description: "Slow-moving inventory piles up while fast-moving items are out of stock elsewhere." },
        { icon: PieChart, title: "Reporting Gaps", description: "No visibility into warehouse performance or logistics costs. Decisions are based on guesswork." },
      ],
    },
    solution: {
      heading: "Optimized Supply Chain Solutions",
      text: "We integrate your ERP with carrier systems, customer portals, and warehouse management systems for a seamless operation.",
      cards: [
        { title: "Multi-Warehouse Management", items: ["Real-time Sync", "Auto Reorder Points", "Internal Transfers"] },
        { title: "Fulfillment Optimization", items: ["Smart Routing", "Split Shipments", "Status Tracking"] },
        { title: "Logistics Integration", items: ["Carrier API Sync", "Rate Shopping", "Returns Management"] },
      ],
      highlightsHeading: "Why Distributors Choose Us",
      highlights: [
        { icon: Truck, title: "Operational Focus", text: "We optimize for what matters most: fast fulfillment and accurate inventory." },
        { icon: Zap, title: "Seamless Integration", text: "Direct carrier system and customer portal integration for real-time updates." },
      ],
    },
    odooApps: [
      { name: "Inventory", icon: "/odoo-icons/svg/stock.svg", use: "Multi-warehouse stock and transfers" },
      { name: "Barcode", icon: "/odoo-icons/svg/stock_barcode.svg", use: "Scan-based picking and receiving" },
      { name: "Purchase", icon: "/odoo-icons/svg/purchase.svg", use: "Reorder rules and vendor bills" },
      { name: "Sales", icon: "/odoo-icons/svg/sale_management.svg", use: "Quotes, orders and price lists" },
      { name: "eCommerce", icon: "/odoo-icons/svg/website_sale.svg", use: "Customer portal and online orders" },
      { name: "Accounting", icon: "/odoo-icons/svg/accountant.svg", use: "Landed costs and margins" },
    ],
  },

  manufacturing: {
    key: "manufacturing",
    name: "Manufacturing",
    h1: ["Precision ERP for", "Modern Factories."],
    intro:
      "Specialized ERP recovery for manufacturers struggling with production planning, inventory management, and supply chain visibility. We fix what others couldn't.",
    image: "/manufacturing.webp",
    imageAlt: "Manufacturing ERP Solutions",
    stat: { value: "35%", label: "Efficiency Boost", icon: BarChart2 },
    challenges: {
      heading: "Common Manufacturing Roadblocks",
      text: "We solve the complex problems that drain your ROI and stall production.",
      items: [
        { icon: Settings, title: "Production Planning Chaos", description: "Your MRP/MPS isn't working, leading to missed deadlines and excess inventory. Teams rely on manual scheduling." },
        { icon: Layers, title: "Inventory Visibility Gaps", description: "Can't track raw materials, WIP, or finished goods accurately. Constant discrepancies and write-offs." },
        { icon: Link2, title: "Supply Chain Disconnects", description: "Supplier orders, receiving, and quality checks aren't integrated. Manual processes create delays." },
        { icon: ShieldCheck, title: "Quality & Compliance", description: "Traceability and quality control workflows aren't properly configured. Regulatory compliance is a nightmare." },
        { icon: BarChart4, title: "Reporting Blindness", description: "No real-time visibility into production metrics, costs, or performance. Decision-making is reactive." },
        { icon: Puzzle, title: "Customization Overload", description: "Previous implementation added too many custom modules that conflict with core Odoo functionality." },
      ],
    },
    solution: {
      heading: "How We Fix Your Manufacturing ERP",
      text: "Our approach is rooted in deep manufacturing expertise. We don't just fix software; we optimize your entire production workflow.",
      cards: [
        { title: "MRP Optimization", items: ["Capacity Planning", "Demand Forecasting", "Auto PO Generation"] },
        { title: "Traceability", items: ["Lot/Serial Tracking", "Multi-warehouse", "Real-time Visibility"] },
        { title: "Quality Control", items: ["Workflow Checkpoints", "Inspection Logs", "Audit Trails"] },
        { title: "Supply Chain", items: ["Supplier Portal", "JIT Inventory", "Automated Receiving"] },
      ],
      highlights: [
        { icon: Activity, title: "Zero Downtime Recovery", text: "We implement fixes in phases, ensuring your production lines keep moving while we optimize the system." },
      ],
    },
    odooApps: [
      { name: "Manufacturing", icon: "/odoo-icons/svg/mrp.svg", use: "BOMs, work orders and MRP" },
      { name: "Quality", icon: "/odoo-icons/svg/quality_control.svg", use: "Checkpoints and inspections" },
      { name: "Inventory", icon: "/odoo-icons/svg/stock.svg", use: "Raw materials, WIP and finished goods" },
      { name: "Purchase", icon: "/odoo-icons/svg/purchase.svg", use: "Automated replenishment" },
      { name: "Barcode", icon: "/odoo-icons/svg/stock_barcode.svg", use: "Shop-floor scanning" },
      { name: "Accounting", icon: "/odoo-icons/svg/accountant.svg", use: "Product costing and valuation" },
    ],
  },
};
