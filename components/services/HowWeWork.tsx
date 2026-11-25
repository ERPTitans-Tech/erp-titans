// Photo-led section on what working with ERP Titans is like, followed by the three ways
// clients engage us. No invented numbers: pricing is described by how it works, not by amount.

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Photo from "@/components/ui/Photo";
import SectionHeader from "@/components/ui/SectionHeader";
import Tick from "@/components/ui/Tick";

const principles = [
  { t: "Senior people in the room", d: "The consultants who run your workshops are the ones who configure your system." },
  { t: "Your processes first", d: "We map how work really flows before anyone opens Odoo settings." },
  { t: "Scope agreed before we start", d: "Every phase has a written scope, so there are no surprise invoices." },
  { t: "Plain-English progress", d: "A short weekly update: what's done, what's next, what we need from you." },
];

const models = [
  {
    name: "Fixed-scope project",
    best: "A defined goal: a new implementation, a migration or a specific integration.",
    pricing: "Quoted after discovery, against a signed-off scope.",
    includes: ["Discovery and solution blueprint", "Build, data migration and testing", "Training and go-live support"],
    href: "/odoo-implementation",
  },
  {
    name: "Phased program",
    best: "Larger or riskier change: ERP recovery, multi-company or multi-site rollouts.",
    pricing: "Each phase is scoped and approved on its own, so you can pause between phases.",
    includes: ["Audit and prioritized roadmap", "Stabilize first, then improve", "Checkpoint review at every phase"],
    href: "/odoo-rescue",
    featured: true,
  },
  {
    name: "Managed support",
    best: "A live system that needs a team on call and steady improvement.",
    pricing: "A monthly plan sized to your users and the level of cover you need.",
    includes: ["Helpdesk with agreed response times", "Upgrades, monitoring and fixes", "A prioritized improvement backlog"],
    href: "/odoo-support",
  },
];

export default function HowWeWork() {
  return (
    <>
      <section className="border-t border-[#E2E8F0] bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-stretch gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <figure className="relative min-h-[320px] overflow-hidden rounded-[28px] lg:min-h-full">
            <Photo
              id="1623652554515-91c833e3080e"
              alt="Process-mapping workshop with sticky notes laid out on a table"
              className="absolute inset-0 h-full w-full object-cover"
              sizes="(min-width: 1024px) 600px, 100vw"
            />
            <figcaption className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 px-5 py-4 text-[14px] leading-snug text-[#334155] shadow-lg backdrop-blur sm:right-auto sm:max-w-sm">
              <span className="font-bold text-[#003D82]">Every project starts on paper.</span> We map your real process with the people who run it,
              before a single setting changes.
            </figcaption>
          </figure>

          <div>
            <SectionHeader n={3} label="How we work" title="What working with us is actually like" className="mb-6!" />
            <p className="mb-8 text-lg leading-relaxed text-[#64748B]">
              ERP projects go wrong in the gaps between people, not in the software. So we keep the team small, senior and close to
              yours, and we make progress visible every week.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p.t} className="rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-[#E2E8F0]">
                  <div className="mb-1.5 flex items-center gap-2 font-bold text-[#0F172A]">
                    <Tick tone="green" /> {p.t}
                  </div>
                  <p className="text-[14.5px] leading-relaxed text-[#64748B]">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#E2E8F0] bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <SectionHeader
            n={4}
            label="Ways to engage"
            title="Three ways to work with us"
            text="Pick the shape that matches your risk and budget. You can start with one and move to another as your needs change."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {models.map((m) => (
              <div
                key={m.name}
                className={`relative flex flex-col rounded-[24px] p-7 sm:p-8 ${
                  m.featured
                    ? "bg-white shadow-[0_20px_50px_rgba(0,61,130,0.12)] ring-2 ring-[#003D82]"
                    : "bg-white ring-1 ring-[#E2E8F0]"
                }`}
              >
                {m.featured && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#003D82] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
                    Our specialty
                  </span>
                )}
                <h3 className="text-xl font-extrabold text-[#003D82]">{m.name}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#475569]">
                  <span className="font-semibold text-[#0F172A]">Best for: </span>
                  {m.best}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-[#F1F5F9] pt-5">
                  {m.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[15px] text-[#334155]">
                      <Tick tone="green" className="mt-0.5" /> {i}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-[#F8FAFC] px-4 py-3 text-[14px] leading-relaxed text-[#475569] ring-1 ring-[#E2E8F0]">
                  <span className="font-semibold text-[#003D82]">How it&apos;s priced: </span>
                  {m.pricing}
                </p>
                <Link
                  href={m.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#003D82] transition-all hover:gap-3 md:mt-auto md:pt-6"
                >
                  Learn more <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
