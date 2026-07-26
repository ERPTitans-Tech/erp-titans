import Image from "next/image";

export default function PowerOfOdoo() {
  const modules = [
    { name: "CRM", icon: "/odoo-icons/crm.png" },
    { name: "Sales", icon: "/odoo-icons/sale.png" },
    { name: "Inventory", icon: "/odoo-icons/inventory.png" },
    { name: "Manufacturing", icon: "/odoo-icons/manufacturing.png" },
    { name: "Accounting", icon: "/odoo-icons/accounting.png" },
    { name: "HR", icon: "/odoo-icons/hr.png" },
    { name: "Projects", icon: "/odoo-icons/projects.png" },
    { name: "POS", icon: "/odoo-icons/pos.png" },
    { name: "eCommerce", icon: "/odoo-icons/ecommerce.png" },
  ];

  return (
    <section className="pt-10 lg:pt-14 pb-20 lg:pb-28 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle Premium Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] rounded-full bg-[#003D82]/5 blur-[120px] translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[40%] rounded-full bg-[#003D82]/5 blur-[100px] -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#003D82] tracking-tight leading-[1.15] mb-6">
              The Power of <span className="text-[#003D82]">Odoo</span>
            </h2>
            
            <p className="text-lg text-[#475569] leading-relaxed mb-6 font-medium">
              Odoo is a comprehensive suite of open-source business applications that covers all your company&apos;s needs, from CRM and sales to manufacturing, accounting, and project management.
            </p>
            
            <p className="text-lg text-[#475569] leading-relaxed font-medium">
              Its modular design, scalability, and user-friendly interface make it an ideal solution for growing businesses seeking a fully integrated ERP system.
            </p>
          </div>
          
          {/* Right Grid of Modules */}
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {modules.map((mod, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-md hover:border-[#003D82]/20 transition-all duration-300 group flex flex-col items-center justify-center text-center hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#003D82]/5 text-[#003D82] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#003D82] group-hover:text-white transition-colors duration-300">
                    <Image src={mod.icon} alt={`${mod.name} Icon`} width={32} height={32} className="object-contain" />
                  </div>
                  <span className="font-semibold text-[#334155] text-sm group-hover:text-[#003D82] transition-colors">
                    {mod.name}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Glow Behind Grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-[#003D82]/10 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
