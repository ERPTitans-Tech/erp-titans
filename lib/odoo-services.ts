// Service-intent landing pages ("Odoo migration", "Odoo support", "fix failed Odoo
// implementation", ...). Each is written for a distinct search intent with its own
// scope, process and FAQs, so the pages are genuinely different from one another.

export type OdooService = {
  slug: string;
  name: string; // short name used in nav/links
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  checklist: string[];
  intro: string[];
  includes: { title: string; text: string }[];
  process: { title: string; text: string }[];
  forWho: string[];
  odooApps?: string[]; // icon file names in /odoo-icons/svg
  faqs: { q: string; a: string }[];
};

export const odooServices: OdooService[] = [
  /* ───────────── RESCUE ───────────── */
  {
    slug: "odoo-rescue",
    name: "Odoo Rescue & Recovery",
    title: "Fix a Failed Odoo Implementation | Odoo Rescue & Recovery",
    description:
      "Stalled, over-budget or failed Odoo implementation? ERP Titans audits, stabilizes and completes troubled Odoo projects for businesses in Calgary, across Canada and the USA. Switch partners without starting over.",
    h1: "Odoo Rescue: Fix a Failed or Stalled Implementation",
    subtitle:
      "ERP recovery is what we're known for. When an Odoo project has stalled, gone over budget or gone live without delivering, we find the root cause, stabilize the system and finish what was started.",
    checklist: ["ERP Recovery Specialists", "Switch Partners Safely", "No Start-Over Required"],
    intro: [
      "Most Odoo projects don't fail because of Odoo. They fail because of rushed discovery, too much customization, poor data migration or a partner who stopped responding. The result is a system people work around instead of in: spreadsheets creep back, inventory stops matching reality and month-end takes longer than before.",
      "Our ERP Rescue Program™ starts with a structured diagnostic of your database, customizations, configuration and processes. You get a clear, prioritized recovery plan, and we work through it in phases so your business keeps running while the system is fixed.",
    ],
    includes: [
      { title: "Root-cause diagnostic audit", text: "Configuration, custom modules, data quality, integrations and user adoption reviewed against how your business actually works." },
      { title: "Custom code clean-up", text: "Conflicting or unnecessary custom modules removed or rebuilt so the system is stable and upgradable again." },
      { title: "Data integrity restoration", text: "Inventory, accounting and master data reconciled so reports can be trusted." },
      { title: "Process realignment", text: "Workflows reconfigured around your real operations instead of workarounds." },
      { title: "Partner transition", text: "Code, credentials, documentation and hosting taken over cleanly from your previous partner." },
      { title: "User adoption training", text: "Role-based retraining so teams stop working around the system." },
    ],
    process: [
      { title: "Diagnose", text: "A fixed-scope audit with findings ranked by business impact and risk." },
      { title: "Stabilize", text: "Fix critical issues first: blocking bugs, broken integrations and data errors." },
      { title: "Realign", text: "Reconfigure processes, simplify customizations and clean up data." },
      { title: "Complete & optimize", text: "Deliver the scope that was originally promised, then optimize." },
    ],
    forWho: [
      "Odoo went live but teams still rely on spreadsheets",
      "Your implementation partner has stalled or disappeared",
      "The project is over budget with no clear end date",
      "Heavy customization is blocking upgrades",
    ],
    odooApps: ["quality_control", "stock", "accountant", "mrp"],
    faqs: [
      { q: "Can you take over an Odoo project from another partner?", a: "Yes. We regularly take over Odoo projects mid-stream. We start with an audit, secure access to your code, database and hosting, and plan a transition that doesn't interrupt operations." },
      { q: "Do we have to start the implementation over?", a: "Rarely. Most troubled implementations can be stabilized and completed. We only recommend rebuilding parts of the system when fixing them would cost more than replacing them." },
      { q: "How long does an Odoo rescue take?", a: "It depends on the size of the system and what's wrong. The diagnostic audit has a fixed, agreed scope, critical issues are stabilized first, and the rest of the recovery is delivered in phases you approve." },
      { q: "Do you rescue ERPs other than Odoo?", a: "Our core expertise is Odoo, but we also diagnose failing implementations on other ERP platforms and advise on whether to fix or migrate to Odoo." },
    ],
  },

  /* ───────────── IMPLEMENTATION ───────────── */
  {
    slug: "odoo-implementation",
    name: "Odoo Implementation",
    title: "Odoo Implementation Services | Official Odoo Ready Partner",
    description:
      "End-to-end Odoo ERP implementation by an official Odoo Ready Partner based in Calgary. Discovery, configuration, data migration, training and go-live for businesses across Canada and the USA.",
    h1: "Odoo Implementation Services",
    subtitle:
      "From first workshop to go-live and beyond, we implement Odoo around how your business actually runs, with sprint-based delivery, clean data and teams trained to use it.",
    checklist: ["Official Odoo Ready Partner", "Sprint-Based Delivery", "Calgary-Based Team"],
    intro: [
      "A successful Odoo implementation is decided long before the first module is configured. We start by mapping your real processes, from quote to cash, procure to pay and plan to produce, then design an Odoo solution that fits them with as little customization as possible.",
      "Delivery runs in short sprints, each ending with a live demo and your sign-off, so there are no surprises at go-live. We migrate your data, train every role and stay on through hypercare until the system is running smoothly.",
    ],
    includes: [
      { title: "Discovery & solution design", text: "Process workshops, gap analysis and a signed-off solution blueprint." },
      { title: "Configuration", text: "Odoo apps configured for your workflows, approvals, taxes and reporting." },
      { title: "Data migration", text: "Customers, vendors, products, open transactions and opening balances moved and validated." },
      { title: "Integrations", text: "Banks, carriers, e-commerce, payment and third-party systems connected." },
      { title: "Training & documentation", text: "Role-based training, user guides and a video library for your team." },
      { title: "Go-live & hypercare", text: "Controlled cutover and intensified support through the first close." },
    ],
    process: [
      { title: "Discover", text: "Workshops and process mapping with every department." },
      { title: "Design", text: "Solution blueprint, data plan and sprint roadmap." },
      { title: "Build in sprints", text: "Configure, demo and sign off in short cycles." },
      { title: "Test & train", text: "Integration testing, UAT and role-based training." },
      { title: "Go live", text: "Cutover, hypercare and handover to support." },
    ],
    forWho: [
      "Moving off QuickBooks, Sage or spreadsheets",
      "Replacing a legacy ERP that no longer fits",
      "Growing into multiple warehouses, entities or currencies",
      "Needing one system for sales, inventory, production and finance",
    ],
    odooApps: ["sale_management", "stock", "mrp", "accountant", "purchase", "crm"],
    faqs: [
      { q: "How long does an Odoo implementation take?", a: "A focused implementation covering a few core apps typically takes 8–12 weeks. Multi-department projects with manufacturing, integrations and data migration usually take four to six months." },
      { q: "Odoo Enterprise or Community?", a: "Most growing businesses benefit from Odoo Enterprise for its accounting, manufacturing, barcode and support features. We'll recommend the right edition and hosting (Odoo Online, Odoo.sh or on-premise) during discovery." },
      { q: "Do you work on site?", a: "Yes. We deliver on site in Calgary and area, and remotely across Canada and the USA, with on-site sessions for larger projects." },
      { q: "What does an Odoo implementation cost?", a: "Cost depends on the number of apps, users, integrations and the complexity of data migration. After a short discovery call we provide a scoped, phased proposal." },
    ],
  },

  /* ───────────── MIGRATION ───────────── */
  {
    slug: "odoo-migration",
    name: "Odoo Migration & Upgrades",
    title: "Odoo Migration & Upgrade Services | QuickBooks, NetSuite, Sage to Odoo",
    description:
      "Migrate to Odoo from QuickBooks, Sage, NetSuite or a legacy ERP, or upgrade an older Odoo version to the latest release. Clean data, tested cutover, minimal downtime. Canada and USA.",
    h1: "Odoo Migration & Version Upgrades",
    subtitle:
      "Whether you're moving to Odoo from another system or upgrading an older Odoo version, we migrate your data and customizations with a tested, low-risk cutover.",
    checklist: ["Data Validated Before Cutover", "Custom Modules Upgraded", "Minimal Downtime"],
    intro: [
      "Migration is where ERP projects are most likely to go wrong: duplicate customers, mismatched inventory, opening balances that don't tie out. We treat data as its own workstream, with mapping, cleansing, trial loads and reconciliation before anything goes live.",
      "For Odoo upgrades, we assess every custom module and third-party app, upgrade or replace them, and run the new version against a copy of your live database so issues surface in testing, not after cutover.",
    ],
    includes: [
      { title: "From QuickBooks & Sage", text: "Customers, vendors, items, open invoices and bills, and opening balances moved to Odoo." },
      { title: "From NetSuite & legacy ERPs", text: "Master data, transaction history where needed and process mapping to Odoo equivalents." },
      { title: "Odoo version upgrades", text: "Older Odoo versions upgraded to the current release, Community or Enterprise." },
      { title: "Custom module upgrades", text: "Custom code reviewed, upgraded, simplified or replaced by standard features." },
      { title: "Trial migrations", text: "Repeated test loads and reconciliations before the final cutover." },
      { title: "Community to Enterprise", text: "Move from Odoo Community to Enterprise and unlock Enterprise apps." },
    ],
    process: [
      { title: "Assess", text: "Inventory data sources, customizations and integrations." },
      { title: "Map & cleanse", text: "Field mapping, de-duplication and data clean-up." },
      { title: "Trial runs", text: "Test migrations reconciled against the source system." },
      { title: "Cutover", text: "Final load over a planned window with sign-off." },
    ],
    forWho: [
      "Outgrowing QuickBooks or Sage",
      "Running an Odoo version that's no longer supported",
      "Stuck on an old version because of custom code",
      "Consolidating several systems into one",
    ],
    odooApps: ["accountant", "stock", "sale_management", "purchase"],
    faqs: [
      { q: "Can you migrate us from QuickBooks to Odoo?", a: "Yes. We migrate customers, vendors, products, open invoices and bills, and opening balances, then reconcile them against QuickBooks before go-live." },
      { q: "How long does an Odoo version upgrade take?", a: "It depends mostly on custom modules. A lightly customized database can be upgraded in a few weeks; heavily customized systems need more time to rework and test custom code." },
      { q: "Will we lose historical data?", a: "No. We agree up front which history moves into Odoo and how the rest stays accessible, for example as archived records or reports." },
      { q: "How much downtime is involved?", a: "Cutovers are scheduled for low-activity windows, typically a weekend or month-end, after trial migrations have been signed off." },
    ],
  },

  /* ───────────── CUSTOMIZATION ───────────── */
  {
    slug: "odoo-customization",
    name: "Odoo Customization & Development",
    title: "Odoo Customization & Development | Custom Odoo Modules",
    description:
      "Custom Odoo modules, reports, workflows and Studio customizations built to stay upgradable. Senior Odoo developers in Calgary serving Canada and the USA.",
    h1: "Odoo Customization & Development",
    subtitle:
      "When standard Odoo isn't enough, we build custom modules, reports and workflows that fit your business and stay maintainable and upgradable.",
    checklist: ["Senior Odoo Developers", "Upgrade-Safe Code", "Standard-First Approach"],
    intro: [
      "Over-customization is one of the most common reasons Odoo projects become hard to support and impossible to upgrade. We take a standard-first approach: configure what Odoo already does well, then build only what genuinely sets your business apart.",
      "When we do develop, we write clean, documented, tested modules that follow Odoo's framework conventions, so your system can move to new Odoo versions without a rewrite.",
    ],
    includes: [
      { title: "Custom modules", text: "New business objects, workflows and automation built as proper Odoo modules." },
      { title: "Reports & documents", text: "Custom PDF reports, invoices, labels and compliance documents." },
      { title: "Dashboards", text: "Operational dashboards and KPIs inside Odoo, or Power BI when you need more." },
      { title: "Odoo Studio", text: "Low-code changes with Studio where they're the right tool." },
      { title: "Portal & website", text: "Customer and vendor portal extensions and website features." },
      { title: "Code review", text: "Review and refactoring of existing custom modules." },
    ],
    process: [
      { title: "Requirement", text: "Confirm the need can't be met with standard configuration." },
      { title: "Specification", text: "Functional and technical spec signed off before coding." },
      { title: "Build & test", text: "Development with automated tests and code review." },
      { title: "Deploy", text: "Staged release through test and production environments." },
    ],
    forWho: [
      "Industry-specific workflows standard Odoo doesn't cover",
      "Compliance documents and labels with strict formats",
      "Existing custom modules that break on upgrade",
      "Reports your team currently builds by hand",
    ],
    odooApps: ["project", "stock", "mrp", "website_sale"],
    faqs: [
      { q: "Will customizations prevent future Odoo upgrades?", a: "Not when they're built properly. We follow Odoo's framework conventions and keep customizations as separate modules, which keeps upgrades manageable." },
      { q: "Should we use Odoo Studio or custom code?", a: "Studio is great for fields, views and simple automation. Complex logic, integrations and performance-sensitive features are better built as custom modules." },
      { q: "Can you fix custom modules another developer built?", a: "Yes. We review, refactor or replace existing custom code as part of our ERP recovery work." },
      { q: "Who owns the custom code?", a: "You do. Code is delivered to your repository with documentation." },
    ],
  },

  /* ───────────── INTEGRATION ───────────── */
  {
    slug: "odoo-integration",
    name: "Odoo Integration",
    title: "Odoo Integration Services | Shopify, ShipStation, Power BI, APIs",
    description:
      "Connect Odoo to e-commerce, shipping, banking, payment, BI and third-party systems. Odoo API, webhook and connector integrations by an official Odoo partner in Calgary.",
    h1: "Odoo Integration Services",
    subtitle:
      "We connect Odoo to the systems you already rely on, so orders, inventory, shipments and financial data flow automatically instead of being re-keyed.",
    checklist: ["API & Webhook Integrations", "Proven Connectors", "Monitored & Supported"],
    intro: [
      "Most businesses run Odoo alongside other tools: online stores and marketplaces, shipping platforms, banks, payment processors, BI tools and industry systems. When those aren't connected, people spend their day copying data between screens, and errors creep in.",
      "We design integrations around your data flows, using Odoo's standard connectors where they exist and building robust API or webhook integrations where they don't, with logging and monitoring so failures are caught early.",
    ],
    includes: [
      { title: "E-commerce & marketplaces", text: "Shopify, WooCommerce, Amazon and Odoo eCommerce orders and stock in sync." },
      { title: "Shipping & 3PL", text: "ShipStation, carrier and 3PL integrations for labels, tracking and stock movements." },
      { title: "Banking & payments", text: "Bank feeds, reconciliation and payment provider integrations." },
      { title: "BI & analytics", text: "Power BI and data warehouse connections for decision-ready reporting." },
      { title: "APIs & webhooks", text: "Custom REST/JSON-RPC and webhook integrations for in-house and industry systems." },
      { title: "Email & CRM", text: "Gmail, Outlook and calendar sync for sales and CRM workflows." },
    ],
    process: [
      { title: "Map data flows", text: "Which system owns which data, and how often it moves." },
      { title: "Choose the method", text: "Standard connector, middleware or custom API." },
      { title: "Build & test", text: "Integration built with error handling and test cases." },
      { title: "Monitor", text: "Logging, alerts and ongoing support." },
    ],
    forWho: [
      "Selling online and re-keying orders into Odoo",
      "Shipping through 3PLs or multiple carriers",
      "Needing Power BI reporting on Odoo data",
      "Running industry systems that must talk to the ERP",
    ],
    odooApps: ["website_sale", "stock_barcode", "accountant", "sale_management"],
    faqs: [
      { q: "Can Odoo integrate with Shopify?", a: "Yes. Orders, customers, products and stock levels can be synchronized between Shopify and Odoo using a connector or a custom integration, depending on your volume and requirements." },
      { q: "Can you connect Odoo to Power BI?", a: "Yes. We connect Power BI to Odoo data, including Odoo.sh databases, and build reports for finance, operations and sales." },
      { q: "What happens when an integration fails?", a: "Our integrations log every transaction and alert on failures, so issues can be fixed and replayed without lost data." },
      { q: "Do you support existing integrations?", a: "Yes. We take over, stabilize and document integrations built by others as part of our support services." },
    ],
  },

  /* ───────────── SUPPORT ───────────── */
  {
    slug: "odoo-support",
    name: "Odoo Support & Managed Services",
    title: "Odoo Support & Managed Services | Canada & USA",
    description:
      "Ongoing Odoo support, maintenance and continuous improvement from a Calgary-based official Odoo partner. Help desk, bug fixes, upgrades, monitoring and user training for Canada and the USA.",
    h1: "Odoo Support & Managed Services",
    subtitle:
      "Keep Odoo stable, secure and improving after go-live, with a support team that knows your system and works your business hours.",
    checklist: ["Business-Hours Coverage", "Senior Consultants", "Continuous Improvement"],
    intro: [
      "Go-live is the start of an ERP's life, not the end. New users join, processes change, Odoo releases new versions and small issues pile up if nobody owns them. Without a support partner, systems slowly drift back toward spreadsheets.",
      "Our managed services give you a team that knows your configuration, answers on your time zone, fixes issues quickly and keeps improving the system as your business grows.",
    ],
    includes: [
      { title: "Help desk", text: "Ticket-based support for functional questions and issues." },
      { title: "Bug fixes", text: "Diagnosis and fixes for configuration and custom-module issues." },
      { title: "Version upgrades", text: "Planned upgrades to new Odoo releases, including custom code." },
      { title: "Monitoring", text: "Integration, performance and scheduled-action monitoring." },
      { title: "Continuous improvement", text: "A backlog of enhancements delivered in regular cycles." },
      { title: "Training", text: "Onboarding for new users and refresher sessions." },
    ],
    process: [
      { title: "Onboard", text: "Review your system, document it and set up access." },
      { title: "Support", text: "Ticketing with agreed response times." },
      { title: "Improve", text: "Monthly reviews and a prioritized enhancement backlog." },
      { title: "Evolve", text: "Upgrades and new apps as you grow." },
    ],
    forWho: [
      "Recently live on Odoo and needing a safety net",
      "Without in-house Odoo expertise",
      "Unhappy with your current support partner",
      "Planning continuous improvement, not one-off fixes",
    ],
    odooApps: ["project", "accountant", "stock", "crm"],
    faqs: [
      { q: "Do you support Odoo systems implemented by other partners?", a: "Yes. We onboard your system with a short review and documentation, then take over support." },
      { q: "What hours do you support?", a: "We support Canadian and US business hours, with our team based in Calgary on Mountain Time." },
      { q: "Do you handle Odoo upgrades as part of support?", a: "Yes. Upgrades can be planned within a support agreement, including review and upgrade of custom modules." },
      { q: "Can support include new features, not just fixes?", a: "Yes. Alongside issue resolution, we maintain a prioritized enhancement backlog and deliver improvements in regular cycles as your business changes." },
    ],
  },
];

export function getOdooService(slug: string): OdooService {
  const s = odooServices.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service: ${slug}`);
  return s;
}
