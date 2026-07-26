import { Settings, Code, Link2, Wrench, Users, RefreshCw } from "lucide-react";

export default function OdooServices() {
  const services = [
    {
      icon: Settings,
      title: "Odoo Implementation & Deployment",
      description: "From initial planning and configuration to seamless go-live, we manage every aspect of your Odoo implementation. Our structured approach minimizes disruption and ensures a smooth transition."
    },
    {
      icon: Code,
      title: "Odoo Customization & Development",
      description: "We tailor Odoo to fit your unique business requirements, developing custom modules and features that align perfectly with your workflows and strategic goals. We ensure customizations are robust, scalable, and maintainable."
    },
    {
      icon: Link2,
      title: "Odoo Integration",
      description: "Connect Odoo with your existing systems (e.g., e-commerce platforms, payment gateways, specialized industry software) to create a unified and efficient operational ecosystem."
    },
    {
      icon: Wrench,
      title: "Odoo Support & Maintenance",
      description: "Our dedicated support team provides ongoing assistance, troubleshooting, and system maintenance to keep your Odoo environment running optimally. We offer proactive monitoring and rapid response to ensure business continuity."
    },
    {
      icon: Users,
      title: "Odoo Training & Adoption",
      description: "We provide comprehensive training programs for your team, ensuring high user adoption and proficiency across all Odoo modules. Empower your employees to leverage Odoo effectively."
    },
    {
      icon: RefreshCw,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 gap-y-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 sm:px-8 sm:py-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,61,130,0.15)] transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle Background Accent */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#003D82]/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />

              <div className="w-12 h-12 bg-[#003D82]/5 text-[#003D82] rounded-2xl flex items-center justify-center mb-4 shadow-sm border border-[#003D82]/10 group-hover:bg-[#003D82] group-hover:text-white transition-colors duration-300">
                <service.icon size={24} strokeWidth={1.5} />
              </div>
              
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
