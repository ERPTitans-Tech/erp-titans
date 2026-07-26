import { HeartPulse, GitMerge, Globe2, Target, Factory, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WhyChooseOdoo() {
  const reasons = [
    {
      icon: HeartPulse,
      title: "ERP Recovery Specialists",
      description: "Unlike general implementers, we excel at diagnosing and rectifying complex ERP challenges. Our experience in recovering failed ERP projects translates into robust, future-proof Odoo solutions."
    },
    {
      icon: GitMerge,
      title: "Holistic Business Process Alignment",
      description: "We don't just configure software; we align Odoo with your specific business processes to ensure maximum efficiency and strategic advantage. We focus on optimizing workflows and data integrity."
    },
    {
      icon: Globe2,
      title: "Canadian Expertise, Global Reach",
      description: "Headquartered in Canada, we combine local understanding with a global delivery capability, serving SMEs across North America and beyond."
    },
    {
      icon: Target,
      title: "Outcome-Focused Approach",
      description: "Our success is measured by your business outcomes. We prioritize solutions that drive efficiency, reduce costs, and accelerate growth, ensuring a clear return on your Odoo investment."
    },
    {
      icon: Factory,
      title: "Industry-Specific Solutions",
      description: "We understand that every industry has unique needs. Our team has experience delivering tailored Odoo solutions across diverse sectors.",
      tags: [
        "Manufacturing",
        "Wholesale & Distribution",
        "Cannabis",
        "IT/Communication",
        "Construction & Renovation"
      ]
    }
  ];

  return (
    <section className="pt-10 lg:pt-14 pb-10 lg:pb-14 bg-[#F8FAFC] relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Introduction */}
          <div className="lg:col-span-4 sticky top-32 pb-10 lg:pb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003D82] mb-6 leading-tight">
              Why Choose ERP Titans as Your <br className="hidden lg:block" />
              <span className="text-[#003D82]">Odoo Partner?</span>
            </h2>
            <p className="text-lg text-[#475569] mb-8 font-medium">
              Choosing the right Odoo partner is crucial for your success. ERP Titans stands out through its unique blend of expertise, client-centric approach, and commitment to tangible outcomes.
            </p>
            
            <div className="space-y-3 mb-10">
              {[
                "Official Odoo Partner",
                "ERP Recovery Specialists",
                "Canadian Expertise",
                "End-to-End Odoo Services"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#003D82]" />
                  <span className="font-semibold text-[#334155]">{item}</span>
                </div>
              ))}
            </div>

            {/* Compact Statistics Block */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-5 bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#003D82]">50+</div>
                <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mt-1">Projects</div>
              </div>
              <div className="text-center border-l border-r border-gray-100">
                <div className="text-2xl font-bold text-[#003D82]">10+</div>
                <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mt-1">Years</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#003D82]">99%</div>
                <div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mt-1">Satisfaction</div>
              </div>
            </div>

            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#003D82] font-semibold border border-[#003D82]/20 hover:bg-[#003D82]/5 transition-colors shadow-sm">
              Book a Free Odoo Consultation <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right Column: Grid of Feature Cards */}
          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, idx) => (
                <div 
                  key={idx}
                  className={`bg-white rounded-3xl p-6 sm:p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,61,130,0.1)] transition-all duration-300 group hover:-translate-y-1 hover:border-[#003D82]/20 flex flex-col h-full relative overflow-hidden ${idx === 4 ? 'sm:col-span-2' : ''}`}
                >
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#003D82]/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110" />

                  <div className="w-12 h-12 bg-[#003D82]/5 text-[#003D82] rounded-2xl flex items-center justify-center mb-5 shrink-0 group-hover:bg-[#003D82] group-hover:text-white transition-colors duration-300 relative z-10">
                    <reason.icon size={24} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#003D82] mb-3 group-hover:text-[#003D82] transition-colors relative z-10">
                    {reason.title}
                  </h3>
                  
                  <p className="text-[#475569] text-sm leading-relaxed flex-grow relative z-10">
                    {reason.description}
                  </p>
                  
                  {reason.tags && (
                    <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                      {reason.tags.map((tag, tagIdx) => (
                        <span 
                          key={tagIdx} 
                          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[#003D82]/5 text-[#003D82] border border-[#003D82]/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
