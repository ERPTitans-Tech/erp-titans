// Additional content for the industry pages: the core operational flow (shown as an
// auto-playing walkthrough with a sample Odoo record at each step), what changes after the
// project, the KPIs leadership can finally see, and industry FAQs.
// Record values are sample data for illustration only.

import type { IndustryKey } from "@/lib/industries";

export type FlowStep = {
  title: string;
  app: string; // icon file in /odoo-icons/svg
  appName: string;
  text: string;
  record: { ref: string; status: string; tone: "green" | "sky" | "amber"; rows: [string, string][] };
};

export type IndustryExtras = {
  flowTitle: string;
  flowText: string;
  flow: FlowStep[];
  photo: { id: string; alt: string; caption: string };
  shift: { before: string; after: string }[];
  kpis: string[];
  faqs: { q: string; a: string }[];
};

export const industryExtras: Record<IndustryKey, IndustryExtras> = {
  manufacturing: {
    flowTitle: "From customer order to costed finished goods",
    flowText: "One connected flow in Odoo: every step updates the next, so planning, the shop floor and finance work from the same numbers.",
    flow: [
      {
        title: "Demand comes in",
        app: "sale_management",
        appName: "Sales",
        text: "A confirmed sales order reserves stock or triggers production automatically, with a realistic promise date.",
        record: { ref: "S00412", status: "Confirmed", tone: "sky", rows: [["Customer", "Prairie Fabrication Ltd."], ["Product", "Steel bracket, 40 mm"], ["Quantity", "1,200 units"]] },
      },
      {
        title: "MRP plans it",
        app: "mrp",
        appName: "Manufacturing",
        text: "MRP checks the bill of materials, capacity and lead times, then proposes manufacturing and purchase orders.",
        record: { ref: "Replenishment", status: "Planned", tone: "sky", rows: [["Work orders", "Cut · Form · Weld · Finish"], ["Capacity", "Within plan"], ["Shortages", "2 components"]] },
      },
      {
        title: "Materials arrive",
        app: "purchase",
        appName: "Purchase",
        text: "Purchase orders go to approved vendors; receipts are scanned in with lot numbers and checked against the order.",
        record: { ref: "P00198", status: "Received", tone: "green", rows: [["Vendor", "Western Steel Supply"], ["Lot", "LOT-24-1187"], ["Matched to PO", "Yes"]] },
      },
      {
        title: "The shop floor builds",
        app: "mrp",
        appName: "Manufacturing",
        text: "Operators clock work orders on tablets. Material use, scrap and time are recorded as they happen, not at month-end.",
        record: { ref: "WH/MO/00877", status: "In progress", tone: "amber", rows: [["Work center", "Weld cell 2"], ["Completed", "780 / 1,200"], ["Scrap", "Logged by reason"]] },
      },
      {
        title: "Quality signs off",
        app: "quality_control",
        appName: "Quality",
        text: "Inspection checkpoints block release until a pass is recorded, and every result stays linked to the lot.",
        record: { ref: "QC-00341", status: "Passed", tone: "green", rows: [["Check", "Dimensional inspection"], ["Sample", "20 units"], ["Linked lot", "FG-24-0877"]] },
      },
      {
        title: "Costs land in finance",
        app: "accountant",
        appName: "Accounting",
        text: "Shipping the order posts revenue and cost of goods automatically, using actual material, labour and overhead.",
        record: { ref: "INV/2026/0412", status: "Posted", tone: "green", rows: [["Revenue", "Posted"], ["COGS", "Actual cost"], ["Margin", "Visible per order"]] },
      },
    ],
    photo: {
      id: "1581091212991-8891c7d4bd9b",
      alt: "Engineers working together on an automotive production line",
      caption: "The best ERP projects start on the shop floor, with the people who run it.",
    },
    shift: [
      { before: "Schedules kept in spreadsheets and whiteboards", after: "MRP that plans against real capacity" },
      { before: "WIP and scrap counted at month-end", after: "Material use recorded as work happens" },
      { before: "Costs estimated from old standards", after: "Actual cost on every order" },
      { before: "Quality records in binders", after: "Inspections linked to every lot" },
    ],
    kpis: ["On-time delivery", "Schedule adherence", "OEE by work center", "Scrap and rework", "Actual vs standard cost", "Inventory turns"],
    faqs: [
      { q: "Can Odoo handle multi-level bills of materials and routings?", a: "Yes. Odoo Manufacturing supports multi-level BOMs, routings with work centers, by-products and variants. We configure them around how your products are actually built." },
      { q: "We already run Odoo but MRP doesn't work. Can you fix it?", a: "That's one of our most common projects. We review lead times, reordering rules, BOMs and work center capacity, then reconfigure MRP so its suggestions can be trusted again." },
      { q: "Can operators use Odoo on the shop floor?", a: "Yes. Operators use the shop-floor interface on tablets or touch screens to start and finish work orders, record scrap and run quality checks." },
      { q: "How do you handle product costing?", a: "We set up costing to match your accounting policy, whether standard, average or FIFO, and make sure labour and overhead flow from work centers into the cost of each order." },
    ],
  },

  distribution: {
    flowTitle: "From order received to delivered and invoiced",
    flowText: "Orders, stock, picking, carriers and invoicing in one flow, so customers get accurate dates and your team stops re-keying.",
    flow: [
      {
        title: "An order arrives",
        app: "website_sale",
        appName: "eCommerce",
        text: "Orders from your portal, sales team or EDI land in Odoo with the right price list and credit checks applied.",
        record: { ref: "S01876", status: "Confirmed", tone: "sky", rows: [["Channel", "B2B portal"], ["Lines", "14 products"], ["Credit check", "Passed"]] },
      },
      {
        title: "Stock is allocated",
        app: "stock",
        appName: "Inventory",
        text: "Odoo picks the best warehouse for each line and creates transfers for anything that needs to move between sites.",
        record: { ref: "Availability", status: "Reserved", tone: "green", rows: [["Calgary DC", "12 lines"], ["Edmonton", "2 lines (transfer)"], ["Backorders", "None"]] },
      },
      {
        title: "Picked by scanner",
        app: "stock_barcode",
        appName: "Barcode",
        text: "Pickers follow an optimized route on a handheld scanner; wrong items and quantities are caught before they ship.",
        record: { ref: "CGY/PICK/03321", status: "Picking", tone: "amber", rows: [["Route", "Aisle 4 → 9 → 12"], ["Scanned", "11 / 14 lines"], ["Errors caught", "1 corrected"]] },
      },
      {
        title: "Packed and labelled",
        app: "stock",
        appName: "Inventory",
        text: "Packages are weighed, carrier rates compared and labels printed without leaving Odoo.",
        record: { ref: "CGY/OUT/02210", status: "Ready", tone: "green", rows: [["Packages", "3 cartons"], ["Carrier", "Best rate selected"], ["Tracking", "Sent to customer"]] },
      },
      {
        title: "Invoiced automatically",
        app: "accountant",
        appName: "Accounting",
        text: "Delivery triggers the invoice, including landed costs, so margin per order and per customer is always current.",
        record: { ref: "INV/2026/1876", status: "Posted", tone: "green", rows: [["Invoice", "Sent on delivery"], ["Landed cost", "Included"], ["Margin", "Per order and customer"]] },
      },
    ],
    photo: {
      id: "1622127739239-1905bbaa21b8",
      alt: "Warehouse manager working on a laptop at a packing station",
      caption: "We design warehouse flows with the people who walk the aisles every day.",
    },
    shift: [
      { before: "Stock levels nobody fully trusts", after: "Real-time stock across every warehouse" },
      { before: "Paper pick lists and mis-shipments", after: "Scanner-guided picking with checks" },
      { before: "Carrier sites open in five browser tabs", after: "Rates and labels inside Odoo" },
      { before: "Margins known weeks later", after: "Landed cost and margin per order" },
    ],
    kpis: ["Order fill rate", "Pick accuracy", "Orders shipped same day", "Stock accuracy by location", "Freight cost per order", "Gross margin by customer"],
    faqs: [
      { q: "Can Odoo manage several warehouses and 3PLs?", a: "Yes. Odoo handles multiple warehouses, locations and third-party logistics providers, with transfers, replenishment rules and real-time stock visibility across all of them." },
      { q: "Do we need special hardware for barcode scanning?", a: "Odoo Barcode works on most rugged Android scanners, and on phones or tablets with a camera for lighter use. We recommend hardware once we understand your volumes." },
      { q: "Can you connect our carriers and e-commerce store?", a: "Yes. We connect major carriers for rates, labels and tracking, plus e-commerce platforms and EDI, so orders and shipments flow without re-keying." },
      { q: "How do you handle landed costs?", a: "We configure landed costs so freight, duty and handling are added to inventory value, which keeps margins accurate on every order." },
    ],
  },

  cannabis: {
    flowTitle: "Seed-to-sale, one lot at a time",
    flowText: "Every movement carries its lot identity forward, from licensed vendor to provincial shelf and into your monthly federal report.",
    flow: [
      {
        title: "Receive into quarantine",
        app: "purchase",
        appName: "Purchase",
        text: "Incoming material from licensed vendors gets a lot number and goes straight into quarantine. Nothing moves until it's released.",
        record: { ref: "WH/IN/00651", status: "Quarantine", tone: "amber", rows: [["Vendor", "Licensed producer"], ["Lot", "BIO-26-0412"], ["Location", "Quarantine vault"]] },
      },
      {
        title: "Release on COA",
        app: "quality_control",
        appName: "Quality",
        text: "The lab's Certificate of Analysis is attached and reviewed against specification before the lot can be used.",
        record: { ref: "QC-COA-0412", status: "Released", tone: "green", rows: [["Potency", "Within tolerance"], ["Microbial", "Pass"], ["Heavy metals", "Pass"]] },
      },
      {
        title: "Produce with genealogy",
        app: "mrp",
        appName: "Manufacturing",
        text: "Blending and pre-roll production record every input lot, so each finished unit traces back to its sources.",
        record: { ref: "MO/PR/00233", status: "Done", tone: "green", rows: [["Inputs", "3 released lots"], ["Output lot", "FG-26-0233"], ["Weight loss", "Recorded by stage"]] },
      },
      {
        title: "Ship to provinces",
        app: "sale_management",
        appName: "Sales",
        text: "Province-specific SKUs, packaging and pricing are applied automatically on each distributor order.",
        record: { ref: "S00981", status: "Shipped", tone: "green", rows: [["Distributor", "Provincial board"], ["SKU", "Province-specific"], ["Lots shipped", "Recorded"]] },
      },
      {
        title: "Report to Health Canada",
        app: "accountant",
        appName: "Accounting",
        text: "Monthly federal reporting is built from the transactions themselves: additions, reductions and closing values.",
        record: { ref: "CTLS · Monthly", status: "Ready", tone: "green", rows: [["Additions", "From receipts and production"], ["Reductions", "Sales, destruction, loss"], ["Closing value", "Reconciled"]] },
      },
    ],
    photo: {
      id: "1617101815102-e5728e6685fc",
      alt: "Gloved hands handling a cannabis plant during cultivation",
      caption: "Compliance lives in the details: every gram, every lot, every movement.",
    },
    shift: [
      { before: "COAs filed as PDFs in shared folders", after: "COAs attached and gating every lot" },
      { before: "Monthly reports rebuilt in spreadsheets", after: "Federal reporting built from transactions" },
      { before: "Recalls that take days to trace", after: "Lot genealogy in a single lookup" },
      { before: "Excise and inventory value reconciled by hand", after: "Excise and valuation posting automatically" },
    ],
    kpis: ["Lots on hold vs released", "Yield and weight loss by stage", "Destruction and waste", "Excise duty by province", "Inventory value by stage", "Days to monthly report"],
    faqs: [
      { q: "Can Odoo handle Health Canada CTLS reporting?", a: "Yes, when it's configured for it. We classify every inventory movement the way the monthly report needs it, so the report is produced from real transactions rather than spreadsheets." },
      { q: "How do you manage Certificates of Analysis?", a: "COAs are attached to the lot and reviewed in a quality step. Lots stay on hold until they are released, so untested material can't be used or sold." },
      { q: "Can you handle multiple provinces and brands?", a: "Yes. We set up province-specific SKUs, packaging, pricing and fulfillment rules, and support several brands under one parent company." },
      { q: "Have you done this before?", a: "Yes. We delivered a full Odoo ERP for a top-tier Canadian pre-roll producer, covering traceability, COA workflows, manufacturing, sales, accounting and monthly federal reporting." },
    ],
  },
};
