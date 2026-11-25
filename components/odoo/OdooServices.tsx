import { Ledger, LedgerItem } from "@/components/ui/Ledger";

export default function OdooServices() {
  const services = [
    {
      kicker: "Implement",
      title: "Odoo Implementation & Deployment",
      description: "From initial planning and configuration to seamless go-live, we manage every aspect of your Odoo implementation. Our structured approach minimizes disruption and ensures a smooth transition."
    },
    {
      kicker: "Extend",
      title: "Odoo Customization & Development",
      description: "We tailor Odoo to fit your unique business requirements, developing custom modules and features that align perfectly with your workflows and strategic goals. We ensure customizations are robust, scalable, and maintainable."
    },
    {
      kicker: "Connect",
      title: "Odoo Integration",
      description: "Connect Odoo with your existing systems (e.g., e-commerce platforms, payment gateways, specialized industry software) to create a unified and efficient operational ecosystem."
    },
    {
      kicker: "Support",
      title: "Odoo Support & Maintenance",
      description: "Our dedicated support team provides ongoing assistance, troubleshooting, and system maintenance to keep your Odoo environment running optimally. We offer proactive monitoring and rapid response to ensure business continuity."
    },
    {
      kicker: "Train",
      title: "Odoo Training & Adoption",
      description: "We provide comprehensive training programs for your team, ensuring high user adoption and proficiency across all Odoo modules. Empower your employees to leverage Odoo effectively."
    },
    {
      kicker: "Recover",
      title: "Odoo Recovery & Optimization",
      description: "Leveraging our core expertise, we specialize in recovering underperforming Odoo implementations. If your current Odoo system isn't delivering the promised value, we diagnose issues, fix broken processes, and optimize your setup for peak performance."
    }
  ];

  return (
    <section className="pt-10 lg:pt-14 pb-10 lg:pb-14 bg-white relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-x-16 gap-y-4 lg:grid-cols-2 lg:items-end">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003D82]">
            Our <span className="text-[#003D82]">Odoo Services</span>
          </h2>
          <p className="text-lg text-[#475569]">
            ERP Titans offers a full spectrum of Odoo services designed to ensure your business maximizes its investment in this powerful platform:
          </p>
        </div>

        <Ledger cols={3}>
          {services.map((service) => (
            <LedgerItem key={service.title} kicker={service.kicker} title={service.title}>
              {service.description}
            </LedgerItem>
          ))}
        </Ledger>
      </div>
    </section>
  );
}
