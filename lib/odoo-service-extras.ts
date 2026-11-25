// Extra, page-specific content for the Odoo service pages: a real photograph, the before/after
// a client should expect, and what each process step hands over and asks of the client.
// Kept separate from odoo-services.ts so the SEO copy there stays easy to edit.

export type ServiceExtras = {
  photo: { id: string; alt: string; caption: string };
  shift: { before: string; after: string }[];
  steps: { get: string; you: string }[]; // aligned with odooServices[].process by index
  proof?: boolean; // show the cannabis case study callout
};

export const serviceExtras: Record<string, ServiceExtras> = {
  "odoo-rescue": {
    photo: {
      id: "1454165804606-c3d57bc86b40",
      alt: "Consultant reviewing printed findings next to a laptop",
      caption: "Recovery starts with evidence: what the system does today, and why.",
    },
    shift: [
      { before: "Spreadsheets running alongside Odoo", after: "One system the team actually trusts" },
      { before: "Inventory that never matches the shelf", after: "Stock counts that reconcile" },
      { before: "A partner who stopped answering", after: "A team with a plan and weekly updates" },
      { before: "Custom code blocking every upgrade", after: "A clean, upgradable codebase" },
    ],
    steps: [
      { get: "A written audit with issues ranked by impact and risk", you: "Access to the database, code and hosting" },
      { get: "Blocking bugs and broken integrations fixed first", you: "A key user per team to confirm fixes" },
      { get: "Processes reconfigured and data cleaned up", you: "Decisions on how work should flow" },
      { get: "The original scope delivered, then optimized", you: "Sign-off on each completed area" },
    ],
    proof: true,
  },
  "odoo-implementation": {
    photo: {
      id: "1598520106830-8c45c2035460",
      alt: "Consultant sketching a process diagram on a glass whiteboard",
      caption: "Every implementation starts with your process on a whiteboard, not with software settings.",
    },
    shift: [
      { before: "Data scattered across spreadsheets and apps", after: "One integrated system of record" },
      { before: "Month-end built by hand", after: "Accounting that posts as work happens" },
      { before: "Guesswork on stock and margins", after: "Live inventory and real costing" },
      { before: "Know-how stuck in a few people's heads", after: "Documented, repeatable processes" },
    ],
    steps: [
      { get: "Process maps for every department", you: "Time with the people who run each process" },
      { get: "A signed-off blueprint, data plan and roadmap", you: "Approval of scope and priorities" },
      { get: "Working Odoo, demoed and signed off sprint by sprint", you: "Feedback at each sprint demo" },
      { get: "Tested workflows and trained users", you: "User acceptance testing by your team" },
      { get: "A smooth cutover and hands-on hypercare", you: "A go-live date and a final data freeze" },
    ],
    proof: true,
  },
  "odoo-migration": {
    photo: {
      id: "1551434678-e076c223a692",
      alt: "Two colleagues comparing data across desktop monitors",
      caption: "Every trial migration is reconciled against the old system before anyone signs off.",
    },
    shift: [
      { before: "Several versions behind, upgrade quotes that scare you", after: "A current, supported Odoo version" },
      { before: "Messy, duplicated master data", after: "Clean customers, products and vendors" },
      { before: "Fear of what breaks on cut-over day", after: "A rehearsed, signed-off cut-over" },
      { before: "Old custom modules nobody understands", after: "Code rebuilt or retired on purpose" },
    ],
    steps: [
      { get: "An inventory of data, modules and integrations", you: "Access to the current system" },
      { get: "Field mapping and a clean-up plan", you: "Decisions on what data to keep" },
      { get: "Test migrations reconciled line by line", you: "Spot checks by key users" },
      { get: "Final load in a planned window, with sign-off", you: "A short freeze on data entry" },
    ],
  },
  "odoo-customization": {
    photo: {
      id: "1521737711867-e3b97375f902",
      alt: "Developers working side by side on laptops",
      caption: "We build only what standard Odoo can't do, and we build it to survive upgrades.",
    },
    shift: [
      { before: "Workarounds for the last 20% of your process", after: "Odoo that fits how you actually work" },
      { before: "Custom code that breaks on upgrade", after: "Clean modules built to Odoo standards" },
      { before: "Changes requested, never specified", after: "Every change specified and signed off" },
      { before: "Fixes pushed straight to production", after: "Staged releases through test first" },
    ],
    steps: [
      { get: "Confirmation of whether configuration can solve it first", you: "The business problem, in your words" },
      { get: "A functional and technical spec before any code", you: "Sign-off on the spec" },
      { get: "Code with automated tests and peer review", you: "Testing on a staging copy" },
      { get: "A staged release with rollback ready", you: "A release window that suits you" },
    ],
  },
  "odoo-integration": {
    photo: {
      id: "1579389083046-e3df9c2b3325",
      alt: "Two people working through a system integration on their laptops",
      caption: "Integration work starts with one question: which system owns which data?",
    },
    shift: [
      { before: "Orders re-keyed between systems", after: "Orders flowing in automatically" },
      { before: "Shipping and stock out of step", after: "Fulfillment and inventory in sync" },
      { before: "Bank reconciliation by hand", after: "Bank activity imported and matched" },
      { before: "Silent failures nobody notices", after: "Logging and alerts when something fails" },
    ],
    steps: [
      { get: "A map of every system and data flow", you: "A list of the tools you use today" },
      { get: "The right method for each connection", you: "API access or vendor contacts" },
      { get: "Integrations with error handling and test cases", you: "Test transactions from your team" },
      { get: "Monitoring, alerts and ongoing support", you: "A named contact for alerts" },
    ],
    proof: true,
  },
  "odoo-support": {
    photo: {
      id: "1572021335469-31706a17aaef",
      alt: "Colleagues gathered around a laptop working through an issue together",
      caption: "Support from people who already know your setup, not a ticket queue that starts from zero.",
    },
    shift: [
      { before: "Nobody to call when something breaks", after: "A team with agreed response times" },
      { before: "Upgrades postponed year after year", after: "Planned upgrades on a schedule" },
      { before: "Small fixes that never get prioritized", after: "A monthly improvement backlog" },
      { before: "One internal person holding all the knowledge", after: "Your system documented and shared" },
    ],
    steps: [
      { get: "Your system reviewed and documented", you: "Admin access and an internal contact" },
      { get: "Ticketing with agreed response times", you: "Requests logged through one channel" },
      { get: "Monthly reviews and a prioritized backlog", you: "30 minutes a month to set priorities" },
      { get: "Upgrades and new apps as you grow", you: "Notice of upcoming business changes" },
    ],
  },
};
