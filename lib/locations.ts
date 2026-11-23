// Location landing pages. Each entry is written to be genuinely local
// (tax setup, time zone, regulators, industries, FAQs), not a city-name swap,
// so the pages are useful to readers and stay clear of Google's doorway-page policy.

export type LocationKind = "City" | "State" | "Country";

export type Location = {
  slug: string;
  kind: LocationKind;
  place: string; // e.g. "Calgary"
  placeFull: string; // e.g. "Calgary, Alberta"
  parent?: string; // e.g. "Alberta" or "United States"
  country: "Canada" | "United States";
  title: string; // <title> (brand suffix added by layout template)
  description: string;
  h1: string;
  subtitle: string;
  checklist: string[];
  intro: string[];
  localPoints: { title: string; text: string }[];
  odooSetup: string[];
  industries: { name: string; description: string; href: string }[];
  cities: string[];
  faqs: { q: string; a: string }[];
};

const IND = {
  manufacturing: "/industries/manufacturing",
  distribution: "/industries/distribution",
  cannabis: "/industries/cannabis",
  services: "/services",
};

export const locations: Location[] = [
  /* ───────────────────────── CALGARY ───────────────────────── */
  {
    slug: "odoo-partner-calgary",
    kind: "City",
    place: "Calgary",
    placeFull: "Calgary, Alberta",
    parent: "Alberta",
    country: "Canada",
    title: "Odoo Partner in Calgary | Odoo Implementation & Support",
    description:
      "Calgary-based official Odoo Ready Partner. Odoo ERP implementation, migration, customization and support for Calgary manufacturers, distributors, cannabis producers and SMEs. Book a free consultation.",
    h1: "Odoo Partner in Calgary",
    subtitle:
      "ERP Titans is a Calgary-based, official Odoo Ready Partner. We implement, rescue and support Odoo for Calgary businesses, with a team that works your hours and understands Alberta's regulatory and tax landscape.",
    checklist: ["Official Odoo Ready Partner", "Calgary-Based Team", "On-Site & Remote Delivery"],
    intro: [
      "Calgary's economy has moved well beyond energy. Manufacturing, food processing, logistics along the CANAMEX corridor, technology and a mature cannabis sector all run here, and many of those companies outgrew spreadsheets, QuickBooks or a legacy ERP years ago. They need a system that ties inventory, production, sales and accounting together without a decade-long project.",
      "As a Calgary-based Odoo partner we can sit in your warehouse, walk your production floor and run workshops with your team in person, then support you remotely on Mountain Time. We map your real processes first, configure Odoo around them, migrate your data cleanly and stay on after go-live.",
    ],
    localPoints: [
      {
        title: "Local, in-person delivery",
        text: "Discovery workshops, user training and go-live support can happen on site anywhere in Calgary and area, from the Beltline to Foothills Industrial Park and Balzac.",
      },
      {
        title: "Same time zone, same week",
        text: "Our team works Mountain Time, so questions get answered during your business day instead of overnight from an offshore desk.",
      },
      {
        title: "Alberta-specific know-how",
        text: "GST-only sales tax, AGLC requirements for cannabis and liquor, and the cross-border trade many Calgary firms do with Montana and the wider US are all configured in from the start.",
      },
      {
        title: "Regulated-industry depth",
        text: "We've delivered Odoo for a licensed cannabis producer with Certificate of Analysis workflows and Health Canada CTLS reporting built in, the kind of compliance work generic implementers leave to spreadsheets.",
      },
    ],
    odooSetup: [
      "Canadian chart of accounts and GST configuration for Alberta, with fiscal positions for sales into HST and PST provinces",
      "CAD and USD multi-currency for cross-border customers and suppliers, with bank feeds for Canadian banks",
      "Payroll-ready employee and timesheet data, plus Canadian address, phone and postal-code formats",
      "Cannabis-specific setup for licensed producers: lot traceability, COA management and Health Canada CTLS reporting",
    ],
    industries: [
      { name: "Manufacturing", description: "MRP, work orders, quality control and costing for Calgary manufacturers and food processors.", href: IND.manufacturing },
      { name: "Distribution & Logistics", description: "Multi-warehouse inventory, barcode and 3PL workflows for the Calgary–Edmonton and CANAMEX supply chain.", href: IND.distribution },
      { name: "Cannabis", description: "Seed-to-sale traceability, COA control and CTLS reporting for Alberta licensed producers.", href: IND.cannabis },
    ],
    cities: ["Calgary", "Airdrie", "Cochrane", "Okotoks", "Chestermere", "Balzac", "Strathmore", "High River", "Canmore", "Red Deer"],
    faqs: [
      {
        q: "Is ERP Titans an official Odoo partner in Calgary?",
        a: "Yes. ERP Titans is an official Odoo Ready Partner with a team based in Calgary, Alberta, delivering Odoo implementation, migration, customization and support locally and remotely.",
      },
      {
        q: "Can you work on site at our Calgary office or warehouse?",
        a: "Yes. Discovery workshops, process mapping, user training and go-live support can all be done in person anywhere in Calgary and the surrounding area, with day-to-day support delivered remotely on Mountain Time.",
      },
      {
        q: "How long does an Odoo implementation take for a Calgary SME?",
        a: "A focused implementation (for example sales, inventory and accounting) typically takes 8–12 weeks. Multi-module projects with manufacturing, integrations and data migration usually run 4–6 months, delivered in sprints with sign-off at each stage.",
      },
      {
        q: "Can you fix an Odoo implementation another partner started?",
        a: "Yes. ERP recovery is our specialty. We audit the existing setup, stabilize what's broken, clean up data and customizations, and get the system delivering the results it was bought for.",
      },
      {
        q: "What should we look for in a Calgary Odoo partner?",
        a: "Look for an official Odoo partner with proof of delivery in your industry, senior consultants on your project rather than juniors, a standard-first approach that limits custom code, a clear plan for data migration, and support on your time zone after go-live. We're happy to walk you through how we handle each of these.",
      },
      {
        q: "Do you provide Odoo support in Calgary after go-live?",
        a: "Yes. We offer ongoing Odoo support and managed services from Calgary, covering help desk, fixes, upgrades, monitoring and continuous improvement.",
      },
      {
        q: "Should we choose Odoo Enterprise or Community?",
        a: "Most growing Calgary businesses benefit from Odoo Enterprise for its accounting, manufacturing, barcode and quality apps and official support. We'll recommend the right edition and hosting during discovery based on your needs.",
      },
    ],
  },

  /* ───────────────────────── ALBERTA ───────────────────────── */
  {
    slug: "odoo-implementation-alberta",
    kind: "State",
    place: "Alberta",
    placeFull: "Alberta, Canada",
    parent: "Canada",
    country: "Canada",
    title: "Odoo Implementation in Alberta | Calgary & Edmonton Odoo Partner",
    description:
      "Official Odoo Partner delivering full-cycle Odoo implementation for Alberta businesses. From Calgary to Edmonton, Red Deer and Lethbridge, we help SMEs deploy Odoo right the first time.",
    h1: "Odoo Implementation in Alberta",
    subtitle:
      "ERP Titans is an official Odoo Ready Partner helping Alberta businesses implement Odoo correctly the first time, from initial process mapping through go-live and beyond.",
    checklist: ["Official Odoo Partner", "Alberta-Based Delivery", "Full-Cycle Implementation"],
    intro: [
      "Alberta's economy runs on a diverse mix of energy, agriculture, manufacturing, and a fast-growing logistics and distribution sector connecting Calgary and Edmonton to markets across Canada and the US. Implementing an ERP system in this environment means accounting for real operational complexity: multi-location inventory, provincial and federal compliance, and processes that were often built up ad hoc as the business grew.",
      "We work directly with Alberta SMEs to implement Odoo the right way from day one, avoiding the rushed, generic rollouts that lead to costly rework down the line. Our team maps your actual business processes before a single module gets configured, so the system fits how you operate rather than forcing your operations to fit the software.",
    ],
    localPoints: [
      { title: "Province-wide coverage", text: "Based in Calgary, we deliver on site across the Calgary–Edmonton corridor and remotely to Lethbridge, Medicine Hat, Grande Prairie and Fort McMurray." },
      { title: "Built for Alberta's sectors", text: "Energy services, agri-food, manufacturing and regulated cannabis each bring their own inventory, costing and compliance needs." },
      { title: "Simple tax, complex trade", text: "Alberta charges GST only, but most Alberta firms sell into HST and PST provinces and the US, so tax rules need to be right for every destination." },
    ],
    odooSetup: [
      "GST setup for Alberta, with fiscal positions that apply the right HST, PST or QST when you sell into other provinces",
      "Multi-company and multi-warehouse structures for businesses operating in both Calgary and Edmonton",
      "Job costing and field service for energy services and equipment rental operations",
      "AGLC-ready traceability and Health Canada CTLS reporting for licensed cannabis producers",
    ],
    industries: [
      { name: "Manufacturing", description: "Production planning, inventory control and quality management built for Alberta manufacturers.", href: IND.manufacturing },
      { name: "Distribution & Logistics", description: "Warehouse, procurement and supply chain workflows for Alberta's distribution and logistics operators.", href: IND.distribution },
      { name: "Cannabis", description: "Seed-to-sale tracking and compliance-ready ERP for Alberta's regulated cannabis industry.", href: IND.cannabis },
    ],
    cities: ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "Medicine Hat", "Grande Prairie", "Airdrie", "Fort McMurray", "Spruce Grove", "Leduc"],
    faqs: [
      { q: "Do you implement Odoo in Edmonton as well as Calgary?", a: "Yes. We're based in Calgary and work with clients across Alberta, including Edmonton, Red Deer and Lethbridge, with on-site workshops where they add value and remote delivery for the rest." },
      { q: "How is sales tax handled in Odoo for an Alberta business?", a: "Alberta businesses charge 5% GST locally. We configure Odoo's fiscal positions so the correct HST, PST or QST applies automatically when you invoice customers in other provinces, and US sales are handled separately." },
      { q: "Is Odoo a good fit for Alberta cannabis producers?", a: "Yes, when it is configured properly. We set up lot and batch traceability, Certificate of Analysis workflows and Health Canada CTLS reporting so compliance lives inside the ERP rather than in spreadsheets." },
      { q: "Which Odoo version do you implement?", a: "We implement the current Odoo release, Enterprise or Community depending on your needs, and can migrate older Odoo versions or other ERPs to it." },
    ],
  },

  /* ───────────────────────── BRITISH COLUMBIA ───────────────────────── */
  {
    slug: "erp-consulting-british-columbia",
    kind: "State",
    place: "British Columbia",
    placeFull: "British Columbia, Canada",
    parent: "Canada",
    country: "Canada",
    title: "Odoo Partner & ERP Consulting in British Columbia | Vancouver",
    description:
      "Official Odoo partner and ERP consultants for British Columbia. We help Vancouver and BC-wide businesses implement Odoo and recover from failed ERP rollouts.",
    h1: "Odoo Partner & ERP Consulting in British Columbia",
    subtitle:
      "From Vancouver's tech and distribution corridor to BC's manufacturing and agriculture base, we help growing businesses fix broken ERP systems and implement Odoo properly.",
    checklist: ["ERP Recovery Specialists", "Serving BC-Wide", "Official Odoo Partner"],
    intro: [
      "British Columbia's economy is unusually varied for its size, spanning the Port of Vancouver's distribution and logistics traffic, a dense tech and startup scene, forestry and agriculture, and a long-established cannabis sector. That variety means a lot of BC businesses inherit ERP systems that were implemented generically, without real attention to their specific industry's workflow.",
      "Our ERP consulting work in BC focuses on where that mismatch actually shows up: inventory that doesn't reflect reality, reporting that takes days instead of minutes, and processes people have quietly started working around instead of using the system. We fix what's broken and build what's missing, whether that means a full Odoo implementation or targeted recovery work on an existing system.",
    ],
    localPoints: [
      { title: "Port-driven supply chains", text: "Import-heavy distributors around the Port of Vancouver need landed costs, container receiving and multi-warehouse visibility that generic setups miss." },
      { title: "GST plus PST", text: "BC charges PST separately from GST, with its own exemptions, so invoices and purchase taxes have to be configured carefully." },
      { title: "Pacific Time support", text: "We schedule workshops and support windows around Pacific business hours." },
    ],
    odooSetup: [
      "Separate GST and BC PST tax rules, including PST exemptions and self-assessment on purchases",
      "Landed-cost allocation for imported goods (freight, duty and brokerage) across multi-warehouse inventory",
      "CAD/USD multi-currency for cross-border trade with Washington State and the wider US",
      "Traceability and CTLS reporting for BC licensed cannabis producers",
    ],
    industries: [
      { name: "Distribution & Logistics", description: "Warehouse, procurement and supply chain systems built for BC's port-driven distribution economy.", href: IND.distribution },
      { name: "Manufacturing", description: "Production, inventory and quality workflows for BC manufacturers of every size.", href: IND.manufacturing },
      { name: "Cannabis", description: "Seed-to-sale compliance and manufacturing ERP for BC's regulated cannabis producers.", href: IND.cannabis },
    ],
    cities: ["Vancouver", "Surrey", "Burnaby", "Richmond", "Victoria", "Kelowna", "Abbotsford", "Langley", "Kamloops", "Nanaimo"],
    faqs: [
      { q: "Do you work with businesses in Vancouver and the Lower Mainland?", a: "Yes. We deliver Odoo implementation and ERP recovery across BC, including Vancouver, Surrey, Burnaby, Richmond, Victoria and Kelowna, mostly remotely with on-site sessions as needed." },
      { q: "Can Odoo handle BC PST correctly?", a: "Yes. We configure GST and BC PST as separate taxes, including exemptions and PST self-assessment on purchases, so invoices and returns are accurate." },
      { q: "Our current ERP is failing. Do we have to start over?", a: "Not necessarily. We start with an ERP health audit, then recommend whether to stabilize and fix the current system or migrate to Odoo, based on cost and risk." },
      { q: "Can you handle landed costs for imported goods?", a: "Yes. Odoo can allocate freight, duty and brokerage to received inventory so margins reflect true cost, which matters for import-heavy BC distributors." },
    ],
  },

  /* ───────────────────────── CANADA ───────────────────────── */
  {
    slug: "odoo-partner-canada",
    kind: "Country",
    place: "Canada",
    placeFull: "Canada",
    country: "Canada",
    title: "Odoo Partner in Canada | Odoo ERP Implementation Across Canada",
    description:
      "Canadian official Odoo Ready Partner based in Calgary. Odoo ERP implementation, migration, support and ERP recovery for businesses in every province, with GST/HST/PST/QST configured correctly.",
    h1: "Odoo Partner in Canada",
    subtitle:
      "A Canadian Odoo partner for Canadian businesses. ERP Titans implements and supports Odoo coast to coast, from our base in Calgary, with Canadian tax, currency and compliance built in.",
    checklist: ["Official Odoo Ready Partner", "Canadian Company", "Coast-to-Coast Delivery"],
    intro: [
      "Canadian businesses have needs that generic, US-centric ERP rollouts often get wrong: GST, HST, PST and QST that change by province, bilingual documents for Quebec customers, CAD/USD cross-border trade, and industry regulators from Health Canada to provincial liquor and cannabis boards.",
      "ERP Titans is a Canadian company and an official Odoo Ready Partner. We implement Odoo for SMEs in every province, rescue projects that have stalled, and provide ongoing support from a team that keeps Canadian business hours across time zones.",
    ],
    localPoints: [
      { title: "Every province's tax rules", text: "GST, HST, PST and QST are configured so the right tax applies automatically based on where you ship and invoice." },
      { title: "Bilingual when you need it", text: "Odoo supports English and French interfaces and documents, so Quebec customers and staff can work in French." },
      { title: "Canadian data and banking", text: "Canadian bank feeds and CAD as your base currency, with USD handled cleanly for cross-border sales and purchases." },
    ],
    odooSetup: [
      "Canadian chart of accounts with GST/HST/PST/QST fiscal positions by province",
      "English and French customer documents (quotes, invoices, delivery slips) where required",
      "CAD/USD multi-currency with automatic exchange-rate updates",
      "Industry compliance, including Health Canada CTLS reporting for licensed cannabis producers",
    ],
    industries: [
      { name: "Manufacturing", description: "MRP, quality and costing for Canadian manufacturers selling domestically and into the US.", href: IND.manufacturing },
      { name: "Distribution & Logistics", description: "Multi-warehouse inventory and landed costs for Canadian importers and distributors.", href: IND.distribution },
      { name: "Cannabis", description: "Seed-to-sale, COA and CTLS compliance for Canadian licensed producers.", href: IND.cannabis },
    ],
    cities: ["Calgary", "Edmonton", "Vancouver", "Toronto", "Mississauga", "Ottawa", "Montreal", "Winnipeg", "Saskatoon", "Regina", "Halifax", "Kelowna"],
    faqs: [
      { q: "Do you serve clients outside Alberta?", a: "Yes. We're based in Calgary and work with businesses in every Canadian province, delivering most work remotely with on-site sessions when they add value." },
      { q: "Can Odoo handle Canadian sales taxes across provinces?", a: "Yes. We set up GST, HST, PST and QST with fiscal positions so the correct tax is applied automatically depending on the customer's province." },
      { q: "Does Odoo work in French for Quebec?", a: "Yes. Odoo's interface and documents are available in French, and customer-facing documents can follow each customer's language." },
      { q: "Are you an official Odoo partner?", a: "Yes. ERP Titans is an official Odoo Ready Partner." },
    ],
  },

  /* ───────────────────────── USA ───────────────────────── */
  {
    slug: "odoo-partner-usa",
    kind: "Country",
    place: "the USA",
    placeFull: "United States",
    country: "United States",
    title: "Odoo Partner USA | Odoo ERP Implementation for US Businesses",
    description:
      "Official Odoo Ready Partner serving US businesses. Odoo ERP implementation, migration and recovery for manufacturers, distributors and regulated industries in Texas, California, New York, Florida, Arizona, Montana and nationwide.",
    h1: "Odoo Partner for US Businesses",
    subtitle:
      "ERP Titans implements, rescues and supports Odoo for US manufacturers, distributors and growing SMEs, with state sales-tax rules, US payroll data and multi-state operations handled properly.",
    checklist: ["Official Odoo Ready Partner", "Serving All 50 States", "ERP Recovery Specialists"],
    intro: [
      "US businesses face a sales-tax landscape with thousands of state and local jurisdictions, economic-nexus rules that can create obligations in states where you have no office, and operations that often span several warehouses and time zones. An ERP that isn't set up for that turns month-end into a manual reconciliation exercise.",
      "We deliver Odoo for US companies remotely across every time zone, with on-site sessions for larger projects. Whether it's a first implementation, a migration from QuickBooks, NetSuite or an older Odoo version, or a recovery of a stalled project, we start from your processes and build Odoo around them.",
    ],
    localPoints: [
      { title: "Sales tax done right", text: "State and local sales tax configured in Odoo, or automated through Odoo's AvaTax integration when you sell into many jurisdictions." },
      { title: "Multi-state operations", text: "Multi-company, multi-warehouse and inter-company setups for businesses operating across several states." },
      { title: "Cross-border with Canada", text: "Being based in Calgary, we're well placed to support US companies that buy from or sell into Canada, including CAD/USD handling." },
    ],
    odooSetup: [
      "US GAAP-style chart of accounts, 1099 vendor tracking and US bank feeds",
      "State and local sales-tax setup, or AvaTax integration for automated rates and filing support",
      "Multi-warehouse inventory with carrier integrations such as UPS, FedEx and USPS",
      "Migrations from QuickBooks, NetSuite, Sage and earlier Odoo versions",
    ],
    industries: [
      { name: "Manufacturing", description: "MRP, quality, maintenance and costing for US manufacturers.", href: IND.manufacturing },
      { name: "Distribution & Logistics", description: "Multi-warehouse, barcode and carrier integration for US distributors and 3PLs.", href: IND.distribution },
      { name: "Cannabis", description: "Traceability and compliance-ready ERP for state-licensed cannabis operators.", href: IND.cannabis },
    ],
    cities: ["Texas", "California", "New York", "Florida", "Arizona", "Montana", "Washington", "Colorado", "Illinois", "Georgia"],
    faqs: [
      { q: "Do you work with US companies even though you're based in Canada?", a: "Yes. We deliver Odoo projects for US businesses remotely across all US time zones, with on-site sessions for larger implementations." },
      { q: "Can Odoo handle US sales tax across multiple states?", a: "Yes. Odoo can be configured with state and local tax rules, and for businesses with nexus in many states we recommend Odoo's AvaTax integration for automated rate calculation." },
      { q: "Can you migrate us from QuickBooks or NetSuite to Odoo?", a: "Yes. We migrate customers, vendors, products, open transactions and opening balances, and run the old and new systems side by side where needed before cutover." },
      { q: "Are you an official Odoo partner?", a: "Yes. ERP Titans is an official Odoo Ready Partner." },
    ],
  },

  /* ───────────────────────── TEXAS ───────────────────────── */
  {
    slug: "odoo-partner-texas",
    kind: "State",
    place: "Texas",
    placeFull: "Texas, USA",
    parent: "United States",
    country: "United States",
    title: "Odoo Partner in Texas | Houston, Dallas, Austin Odoo Implementation",
    description:
      "Official Odoo Ready Partner serving Texas manufacturers, distributors and growing SMEs in Houston, Dallas–Fort Worth, Austin and San Antonio with full-cycle Odoo implementation and ERP recovery.",
    h1: "Official Odoo Partner in Texas",
    subtitle:
      "Texas is one of the fastest-growing manufacturing and logistics hubs in the country, and its SMEs deserve an ERP partner who treats implementation as a business problem first, not just a software rollout.",
    checklist: ["Official Odoo Partner", "Serving Texas SMEs", "ERP Recovery Specialists"],
    intro: [
      "Texas's economy is built on scale: heavy manufacturing, sprawling distribution networks, and a logistics infrastructure that connects the state to the rest of the country and beyond. That scale creates real ERP challenges — systems that worked at a smaller size start breaking down as multi-location inventory, complex supply chains, and growing headcount outpace what a generic implementation was ever designed to handle.",
      "As an official Odoo Ready Partner, we bring proven ERP recovery and implementation expertise to Texas businesses that need a system built around how they actually operate, not a one-size-fits-all template. Whether you're implementing Odoo for the first time or dealing with a rollout that never delivered what was promised, our approach starts with your actual processes, not the software's defaults.",
    ],
    localPoints: [
      { title: "Local sales tax layers", text: "Texas's 6.25% state sales tax is layered with city, county and special-district taxes, so rates differ by delivery address." },
      { title: "Cross-border trade", text: "Many Texas manufacturers and distributors buy from or sell to Mexico, which means USD/MXN pricing, customs paperwork and landed costs." },
      { title: "Central Time delivery", text: "Workshops and support are scheduled around Central Time business hours." },
    ],
    odooSetup: [
      "Texas state and local sales-tax rules by delivery address, or AvaTax for automated rates",
      "USD/MXN multi-currency and landed costs for cross-border supply chains",
      "Multi-warehouse inventory across Houston, DFW, Austin and San Antonio locations",
      "Field service, rental and maintenance for equipment-heavy Texas businesses",
    ],
    industries: [
      { name: "Manufacturing", description: "Production planning, inventory and quality management built for Texas manufacturers at scale.", href: IND.manufacturing },
      { name: "Distribution & Logistics", description: "Warehouse, procurement and supply chain workflows for Texas's distribution and logistics operators.", href: IND.distribution },
      { name: "Equipment Rental & Professional Services", description: "Rental, field service and asset lifecycle management tailored to Texas service businesses.", href: IND.services },
    ],
    cities: ["Houston", "Dallas", "Fort Worth", "Austin", "San Antonio", "El Paso", "Plano", "Arlington", "Corpus Christi", "Laredo"],
    faqs: [
      { q: "Do you implement Odoo for businesses in Houston and Dallas?", a: "Yes. We work with Texas businesses statewide, including Houston, Dallas–Fort Worth, Austin and San Antonio, delivering remotely on Central Time with on-site sessions for larger projects." },
      { q: "How does Odoo handle Texas local sales tax?", a: "We configure Texas's state rate together with local city, county and special-district rates based on delivery address, or connect Odoo's AvaTax integration for automated rate lookup." },
      { q: "Can Odoo support cross-border trade with Mexico?", a: "Yes. Odoo supports USD and MXN pricing, landed-cost allocation for duties and freight, and multi-warehouse flows for cross-border supply chains." },
      { q: "Can you rescue a failing ERP implementation?", a: "Yes. ERP recovery is our core specialty. We audit, stabilize and complete stalled or underperforming implementations." },
    ],
  },

  /* ───────────────────────── CALIFORNIA ───────────────────────── */
  {
    slug: "odoo-partner-california",
    kind: "State",
    place: "California",
    placeFull: "California, USA",
    parent: "United States",
    country: "United States",
    title: "Odoo Partner in California | Los Angeles, Bay Area Odoo Implementation",
    description:
      "Official Odoo Ready Partner serving California manufacturers, distributors and cannabis operators in Los Angeles, the Bay Area, San Diego and the Central Valley with full-cycle Odoo implementation and ERP recovery.",
    h1: "Official Odoo Partner in California",
    subtitle:
      "California SMEs operate in one of the most competitive, fast-moving markets in the country, and that means their ERP systems can't afford to be an afterthought.",
    checklist: ["Official Odoo Partner", "Serving California SMEs", "ERP Recovery Specialists"],
    intro: [
      "From the manufacturing and logistics backbone of the Central Valley and Inland Empire to the country's largest legal cannabis market, California businesses run on complexity that generic ERP rollouts consistently underestimate. Multi-location inventory, strict compliance requirements, and rapid growth all demand a system that was actually built around the business, not bolted on after the fact.",
      "As an official Odoo Ready Partner, we help California SMEs implement Odoo properly from the start, or recover from a previous implementation that didn't deliver. Our process begins with understanding how your business actually runs, so the system reflects your operations rather than forcing your team to work around it.",
    ],
    localPoints: [
      { title: "District taxes", text: "California's 7.25% base sales tax rate is increased by local district taxes, so the correct rate depends on where goods are delivered." },
      { title: "Regulated cannabis", text: "Licensed cannabis businesses must report to the state's track-and-trace system, so lot data in the ERP has to match it." },
      { title: "Pacific Time support", text: "Workshops and support are scheduled around Pacific business hours." },
    ],
    odooSetup: [
      "California base and district sales-tax rates by delivery address, or AvaTax for automated rates",
      "Lot and package traceability for cannabis operators, aligned with state track-and-trace reporting",
      "Import landed costs for goods arriving through the Ports of Los Angeles and Long Beach",
      "Multi-warehouse inventory across Southern and Northern California locations",
    ],
    industries: [
      { name: "Manufacturing", description: "Production planning, inventory and quality management for California manufacturers.", href: IND.manufacturing },
      { name: "Distribution & Logistics", description: "Warehouse, procurement and supply chain workflows for California's distribution operators.", href: IND.distribution },
      { name: "Cannabis", description: "Seed-to-sale compliance and manufacturing ERP for California's regulated cannabis industry.", href: IND.cannabis },
    ],
    cities: ["Los Angeles", "San Francisco", "San Jose", "San Diego", "Sacramento", "Oakland", "Fresno", "Irvine", "Long Beach", "Riverside"],
    faqs: [
      { q: "Do you serve businesses in Los Angeles and the Bay Area?", a: "Yes. We work with California businesses statewide, including Los Angeles, the Bay Area, San Diego, Sacramento and the Central Valley, on Pacific Time." },
      { q: "Can Odoo handle California district sales taxes?", a: "Yes. We configure the state base rate plus district taxes by delivery address, or connect Odoo's AvaTax integration for automated rates." },
      { q: "Can Odoo support California cannabis compliance?", a: "Yes. We set up lot and package traceability, COA management and reporting so ERP data stays consistent with state track-and-trace records." },
      { q: "Do you handle import landed costs?", a: "Yes. Freight, duty and brokerage can be allocated to received inventory so product margins reflect true landed cost." },
    ],
  },

  /* ───────────────────────── MONTANA ───────────────────────── */
  {
    slug: "odoo-partner-montana",
    kind: "State",
    place: "Montana",
    placeFull: "Montana, USA",
    parent: "United States",
    country: "United States",
    title: "Odoo Partner in Montana | Billings, Missoula, Bozeman Odoo ERP",
    description:
      "Official Odoo Ready Partner just across the border in Calgary, serving Montana businesses in Billings, Missoula, Bozeman and Great Falls with Odoo ERP implementation, support and ERP recovery on Mountain Time.",
    h1: "Odoo Partner in Montana",
    subtitle:
      "Our Calgary team is a short drive from the Montana border and works the same Mountain Time hours, which makes us a natural Odoo partner for Montana manufacturers, distributors and agri-businesses.",
    checklist: ["Official Odoo Ready Partner", "Same Mountain Time Zone", "On-Site Visits Available"],
    intro: [
      "Montana businesses often get overlooked by ERP partners clustered in large coastal cities. Agriculture and food processing, outdoor and recreation brands, construction suppliers, energy services and a licensed cannabis market all need the same integrated inventory, production and accounting that bigger markets take for granted.",
      "From Calgary we're closer to most of Montana than many US-based partners, and we work the same hours. That means practical on-site visits for workshops and go-live, plus responsive remote support for the rest of the project.",
    ],
    localPoints: [
      { title: "No general sales tax", text: "Montana has no statewide general sales tax, but if you sell into other states you may still have collection obligations there, so Odoo needs to handle both." },
      { title: "Cross-border with Alberta", text: "Many Montana companies trade with Canada through the Sweet Grass–Coutts crossing, which means CAD/USD and customs paperwork." },
      { title: "Seasonal operations", text: "Agriculture, tourism and recreation businesses need inventory and staffing planning that flexes with the seasons." },
    ],
    odooSetup: [
      "Tax setup for no in-state sales tax, plus out-of-state collection where you have nexus",
      "CAD/USD multi-currency and landed costs for cross-border trade with Canada",
      "Lot tracking and expiry dates for agri-food and food processing",
      "Traceability and compliance-ready setup for Montana licensed cannabis operators",
    ],
    industries: [
      { name: "Agri-Food & Manufacturing", description: "Lot tracking, recipes, production and costing for Montana food processors and manufacturers.", href: IND.manufacturing },
      { name: "Distribution & Wholesale", description: "Multi-warehouse inventory and purchasing for Montana distributors and suppliers.", href: IND.distribution },
      { name: "Cannabis", description: "Seed-to-sale traceability and compliance-ready ERP for Montana's licensed cannabis market.", href: IND.cannabis },
    ],
    cities: ["Billings", "Missoula", "Bozeman", "Great Falls", "Helena", "Kalispell", "Butte", "Whitefish"],
    faqs: [
      { q: "Why work with a Calgary-based Odoo partner in Montana?", a: "We're in the same Mountain Time Zone and closer to much of Montana than many US-based partners, so on-site visits are practical and support happens during your business day." },
      { q: "Montana has no sales tax. Do we still need tax setup in Odoo?", a: "Usually yes. If you sell into other states you may have collection obligations there, and you still need correct handling of purchases, use tax and any local resort taxes that apply." },
      { q: "Can Odoo handle trade with Canadian customers and suppliers?", a: "Yes. We configure CAD/USD pricing, exchange rates and landed costs so cross-border transactions are accurate." },
      { q: "Do you support Montana cannabis businesses?", a: "Yes. We set up lot traceability, COA workflows and reporting so ERP data stays consistent with state compliance systems." },
    ],
  },

  /* ───────────────────────── NEW YORK ───────────────────────── */
  {
    slug: "odoo-partner-new-york",
    kind: "State",
    place: "New York",
    placeFull: "New York, USA",
    parent: "United States",
    country: "United States",
    title: "Odoo Partner in New York | NYC & New York State Odoo Implementation",
    description:
      "Official Odoo Ready Partner serving New York City and New York State businesses with Odoo ERP implementation, migration, integrations and ERP recovery for distributors, manufacturers, wholesalers and e-commerce brands.",
    h1: "Odoo Partner in New York",
    subtitle:
      "From Manhattan wholesalers and Brooklyn brands to manufacturers upstate, we implement and rescue Odoo for New York businesses that need one system for sales, inventory and finance.",
    checklist: ["Official Odoo Ready Partner", "NYC & Statewide", "Eastern Time Support"],
    intro: [
      "New York businesses move fast and run lean: wholesalers and importers juggling thousands of SKUs, direct-to-consumer brands selling across channels, and upstate manufacturers serving national markets. Many still run on a patchwork of accounting software, spreadsheets and e-commerce plugins that don't talk to each other.",
      "We replace that patchwork with a properly implemented Odoo system: sales, purchasing, inventory, e-commerce and accounting in one place, integrated with the marketplaces and carriers you already use.",
    ],
    localPoints: [
      { title: "Layered sales tax", text: "New York's 4% state sales tax is combined with county and city taxes, including New York City's own rate, so the correct rate depends on delivery address." },
      { title: "Omnichannel selling", text: "NYC brands often sell wholesale, retail and online at once, which needs pricing, inventory and fulfilment kept in one system." },
      { title: "Eastern Time support", text: "Workshops and support are scheduled around Eastern business hours." },
    ],
    odooSetup: [
      "New York state, county and city sales-tax rates by delivery address, or AvaTax for automated rates",
      "Odoo eCommerce, POS and marketplace integrations for omnichannel brands",
      "Wholesale price lists, customer-specific pricing and EDI-ready order flows",
      "Import landed costs and multi-warehouse inventory across NYC and New Jersey 3PLs",
    ],
    industries: [
      { name: "Wholesale & Distribution", description: "Price lists, purchasing and multi-warehouse inventory for New York wholesalers and importers.", href: IND.distribution },
      { name: "Manufacturing", description: "Production, quality and costing for upstate New York manufacturers.", href: IND.manufacturing },
      { name: "E-commerce & Retail", description: "Online store, POS and marketplace channels connected to one inventory and accounting system.", href: IND.services },
    ],
    cities: ["New York City", "Brooklyn", "Queens", "Long Island", "Buffalo", "Rochester", "Albany", "Syracuse", "Westchester", "Yonkers"],
    faqs: [
      { q: "Do you work with businesses in New York City?", a: "Yes. We serve NYC and businesses across New York State, delivering remotely on Eastern Time with on-site sessions for larger implementations." },
      { q: "How does Odoo handle New York sales tax?", a: "We configure the state rate together with county and city rates, including New York City's, based on delivery address, or connect Odoo's AvaTax integration for automated rates." },
      { q: "Can Odoo connect our online store and marketplaces?", a: "Yes. Odoo's eCommerce and POS, along with marketplace integrations, keep orders, inventory and accounting in one system." },
      { q: "Can you migrate us off QuickBooks?", a: "Yes. We migrate master data, open transactions and opening balances, and plan a cutover that minimizes disruption." },
    ],
  },

  /* ───────────────────────── FLORIDA ───────────────────────── */
  {
    slug: "odoo-partner-florida",
    kind: "State",
    place: "Florida",
    placeFull: "Florida, USA",
    parent: "United States",
    country: "United States",
    title: "Odoo Partner in Florida | Miami, Tampa, Orlando Odoo Implementation",
    description:
      "Official Odoo Ready Partner serving Florida businesses in Miami, Tampa, Orlando and Jacksonville with Odoo ERP implementation and ERP recovery for distributors, importers, manufacturers and service companies.",
    h1: "Odoo Partner in Florida",
    subtitle:
      "Florida's import, distribution and services economy runs on fast-moving inventory and multi-currency trade. We implement Odoo so Florida businesses can run all of it from one system.",
    checklist: ["Official Odoo Ready Partner", "Statewide Coverage", "Eastern Time Support"],
    intro: [
      "Florida is a gateway to Latin America and the Caribbean, with major ports in Miami, Port Everglades, Tampa and Jacksonville. Distributors and importers here manage container-level purchasing, landed costs and customers paying in more than one currency, while service, construction and marine businesses need field service and project tracking.",
      "We implement Odoo for Florida companies end to end: purchasing and landed costs, multi-warehouse inventory, sales and accounting, plus field service and projects where you need them.",
    ],
    localPoints: [
      { title: "County surtax", text: "Florida's 6% state sales tax is combined with county discretionary surtaxes, so rates vary by county of delivery." },
      { title: "Import & export trade", text: "Trade with Latin America and the Caribbean means multi-currency pricing, export documentation and landed costs." },
      { title: "Eastern Time support", text: "Support windows follow Eastern business hours (with Central Time covered for the Panhandle)." },
    ],
    odooSetup: [
      "Florida state sales tax plus county surtax by delivery address, or AvaTax for automated rates",
      "Multi-currency pricing and landed costs for import and export trade",
      "Field service, projects and timesheets for construction, marine and service companies",
      "Multi-warehouse inventory across South, Central and North Florida",
    ],
    industries: [
      { name: "Import & Distribution", description: "Container purchasing, landed costs and multi-warehouse inventory for Florida importers.", href: IND.distribution },
      { name: "Manufacturing", description: "Production, quality and costing for Florida manufacturers.", href: IND.manufacturing },
      { name: "Field & Professional Services", description: "Field service, projects and billing for construction, marine and service businesses.", href: IND.services },
    ],
    cities: ["Miami", "Tampa", "Orlando", "Jacksonville", "Fort Lauderdale", "St. Petersburg", "Doral", "Boca Raton", "Tallahassee", "Naples"],
    faqs: [
      { q: "Do you work with businesses in Miami, Tampa and Orlando?", a: "Yes. We serve businesses across Florida, delivering remotely on Eastern Time with on-site sessions for larger projects." },
      { q: "How does Odoo handle Florida's county surtax?", a: "We configure the state rate plus each county's discretionary surtax based on delivery address, or connect Odoo's AvaTax integration for automated rates." },
      { q: "Can Odoo handle import costs and foreign currencies?", a: "Yes. Odoo supports multi-currency sales and purchasing and can allocate freight, duty and brokerage to inventory as landed costs." },
      { q: "Can Odoo manage field service and projects?", a: "Yes. Odoo Field Service, Project and Timesheets let service businesses schedule work, track time and invoice from the same system." },
    ],
  },

  /* ───────────────────────── ARIZONA ───────────────────────── */
  {
    slug: "odoo-partner-arizona",
    kind: "State",
    place: "Arizona",
    placeFull: "Arizona, USA",
    parent: "United States",
    country: "United States",
    title: "Odoo Partner in Arizona | Phoenix, Tucson, Scottsdale Odoo ERP",
    description:
      "Official Odoo Ready Partner serving Arizona businesses in Phoenix, Tucson, Scottsdale and Mesa with Odoo ERP implementation, TPT-ready tax setup and ERP recovery for manufacturers, distributors and cannabis operators.",
    h1: "Odoo Partner in Arizona",
    subtitle:
      "Arizona's fast-growing manufacturing, distribution and cannabis sectors need ERP systems that keep up. We implement Odoo for Arizona businesses with tax, inventory and compliance set up properly.",
    checklist: ["Official Odoo Ready Partner", "Phoenix & Statewide", "Mountain Time Support"],
    intro: [
      "Greater Phoenix has become one of the country's busiest manufacturing and logistics regions, with semiconductor and electronics supply chains, distribution centres along the I-10 corridor and a mature licensed cannabis market. Growing companies here quickly outgrow entry-level accounting tools.",
      "We implement Odoo for Arizona businesses end to end, and because Arizona doesn't observe daylight saving time, our Calgary team shares your working hours for much of the year.",
    ],
    localPoints: [
      { title: "Transaction Privilege Tax", text: "Arizona levies a Transaction Privilege Tax (TPT) on the seller rather than a traditional sales tax, with state, county and city components that vary by business activity and location." },
      { title: "Manufacturing growth", text: "Electronics, aerospace and advanced manufacturing suppliers need tight inventory, quality and costing control." },
      { title: "Mountain Time alignment", text: "Arizona stays on Mountain Standard Time all year, so it aligns with our Calgary hours for much of the year." },
    ],
    odooSetup: [
      "TPT-ready tax setup with state, county and city rates by location and business activity, or AvaTax for automation",
      "Quality control, lot and serial tracking for manufacturing and electronics supply chains",
      "Multi-warehouse inventory and carrier integrations for I-10 corridor distribution",
      "Traceability and compliance-ready setup for Arizona licensed cannabis operators",
    ],
    industries: [
      { name: "Manufacturing", description: "Production, quality, maintenance and costing for Arizona manufacturers.", href: IND.manufacturing },
      { name: "Distribution & Logistics", description: "Multi-warehouse inventory and fulfilment for Arizona distributors.", href: IND.distribution },
      { name: "Cannabis", description: "Seed-to-sale traceability and compliance-ready ERP for Arizona's licensed cannabis market.", href: IND.cannabis },
    ],
    cities: ["Phoenix", "Tucson", "Scottsdale", "Mesa", "Chandler", "Tempe", "Gilbert", "Glendale", "Peoria", "Flagstaff"],
    faqs: [
      { q: "Do you serve businesses in Phoenix and Tucson?", a: "Yes. We work with Arizona businesses statewide, including Phoenix, Scottsdale, Mesa, Chandler, Tempe and Tucson." },
      { q: "Can Odoo handle Arizona's Transaction Privilege Tax?", a: "Yes. We configure TPT with state, county and city components by location and business activity, or connect Odoo's AvaTax integration for automated rates." },
      { q: "Do you support Arizona cannabis operators?", a: "Yes. We set up lot traceability, COA workflows and reporting so ERP data stays consistent with state compliance requirements." },
      { q: "What hours do you support Arizona clients?", a: "Arizona stays on Mountain Standard Time all year, which lines up with our Calgary office for much of the year, and we schedule support around your business day." },
    ],
  },
];

export function getLocation(slug: string): Location {
  const l = locations.find((x) => x.slug === slug);
  if (!l) throw new Error(`Unknown location: ${slug}`);
  return l;
}
