import CardIndex from "@/components/ui/CardIndex";

export default function OdooServices() {
  const services = [
    {
      title: "Odoo Implementation & Deployment",
      description: "From initial planning and configuration to seamless go-live, we manage every aspect of your Odoo implementation. Our structured approach minimizes disruption and ensures a smooth transition."
    },
    {
      title: "Odoo Customization & Development",
      description: "We tailor Odoo to fit your unique business requirements, developing custom modules and features that align perfectly with your workflows and strategic goals. We ensure customizations are robust, scalable, and maintainable."
    },
    {
      title: "Odoo Integration",
      description: "Connect Odoo with your existing systems (e.g., e-commerce platforms, payment gateways, specialized industry software) to create a unified and efficient operational ecosystem."
    },
    {
      title: "Odoo Support & Maintenance",
      description: "Our dedicated support team provides ongoing assistance, troubleshooting, and system maintenance to keep your Odoo environment running optimally. We offer proactive monitoring and rapid response to ensure business continuity."
    },
    {
      title: "Odoo Training & Adoption",
      description: "We provide comprehensive training programs for your team, ensuring high user adoption and proficiency across all Odoo modules. Empower your employees to leverage Odoo effectively."
    },
    {
      title: "Odoo Recovery & Optimization",
      description: "Leveraging our core expertise, we specialize in recovering underperforming Odoo implementations. If your current Odoo system isn't delivering the promised value, we diagnose issues, fix broken processes, and optimize your setup for peak performance."
    }
  ];

  return (
    <section className="pt-10 lg:pt-14 pb-10 lg:pb-14 bg-white relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-6">
            Our <span className="text-[#003D82]">Odoo Services</span>
          </h2>
          <p className="text-lg text-[#475569]">
            ERP Titans offers a full spectrum of Odoo services designed to ensure your business maximizes its investment in this powerful platform:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 gap-y-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 sm:px-8 sm:py-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,61,130,0.15)] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col h-full"
            >

              <CardIndex n={idx + 1} className="mb-4 relative z-10" />
              
              <h3 className="text-xl font-bold text-[#003D82] mb-2 group-hover:text-[#003D82] transition-colors relative z-10">
                {service.title}
              </h3>
              
              <p className="text-[#475569] text-sm leading-relaxed relative z-10 flex-grow">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
