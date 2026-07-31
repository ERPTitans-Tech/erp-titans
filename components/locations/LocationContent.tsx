interface Industry {
  name: string;
  description: string;
  href: string;
}

interface LocationContentProps {
  intro: string[];
  industriesHeading: string;
  industries: Industry[];
  closing: string;
}

export default function LocationContent({ intro, industriesHeading, industries, closing }: LocationContentProps) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl space-y-5 text-[#475569] text-lg leading-relaxed mb-16">
          {intro.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-[#003D82] mb-8">
          {industriesHeading}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, idx) => (
            <a
              key={idx}
              href={industry.href}
              className="block bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 hover:border-[#003D82]/40 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-[#003D82] mb-2">{industry.name}</h3>
              <p className="text-sm text-[#64748B] leading-relaxed">{industry.description}</p>
            </a>
          ))}
        </div>

        <div className="max-w-3xl text-[#475569] text-lg leading-relaxed">
          <p>{closing}</p>
        </div>

      </div>
    </section>
  );
}

