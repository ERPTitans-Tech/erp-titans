"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";
import { Send, Loader2, CheckCircle2, Check, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";
import Flag from "@/components/ui/Flag";
import { officesFor } from "@/lib/offices";
import BookingCalendar from "./BookingCalendar";
import TimeSlotPicker from "./TimeSlotPicker";
import BookingForm from "./BookingForm";
import { Field, inputClass } from "./fields";

const TOPICS = [
  "Odoo implementation",
  "ERP rescue / recovery",
  "Migration",
  "Customization",
  "Integrations",
  "Support",
];

const NEXT_STEPS = [
  { title: "We review your note", text: "A specialist reads your message and replies within 24 hours." },
  { title: "Free consultation", text: "A call with a senior ERP specialist to understand your goals and pain points." },
  { title: "Clear next steps", text: "A transparent recovery roadmap or proposal. No obligation." },
];

const BENEFITS = [
  "Free initial consultation",
  "Direct access to ERP specialists",
  "Transparent recovery roadmap",
  "No-obligation ERP health audit",
];

type Tab = "message" | "meeting";

export default function ContactForm({ isCA = false }: { isCA?: boolean }) {
  const offices = officesFor(isCA);
  const [tab, setTab] = useState<Tab>("message");
  const [topics, setTopics] = useState<string[]>([]);
  const [messageLen, setMessageLen] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sentTo, setSentTo] = useState<{ name: string; email: string } | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const searchParams = useSearchParams();
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchParams.get("schedule") === "true") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTab("meeting");
      setTimeout(() => cardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 300);
    }
  }, [searchParams]);

  const toggleTopic = (t: string) => setTopics((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    data.topics = topics.join(", ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(responseData.error || "Failed to send");
      setSentTo({ name: (data.fullName || "").split(" ")[0], email: data.email || "" });
      form.reset();
      setTopics([]);
      setMessageLen(0);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again, or email sales@erptitans.com.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 pb-20 lg:pt-36 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[20%] -left-[10%] h-[50%] w-[50%] rounded-full bg-sky-100/50 blur-[120px]" />
        <div className="absolute top-[30%] -right-[10%] h-[40%] w-[40%] rounded-full bg-blue-50/70 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#003D82] shadow-sm ring-1 ring-[#003D82]/10 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#21B799]" />
            Contact · Free consultation<span className="hidden sm:inline"> · Official Odoo Ready Partner</span>
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#003D82] sm:text-5xl lg:text-[54px]">
            How Can We Help?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[#475569] sm:text-xl">
            Whether you have a quick question or need a deep-dive audit of your ERP system, our specialists are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-8">
          {/* Form card (first on mobile) */}
          <div ref={cardRef} className="scroll-mt-28 lg:order-2">
            <div className="rounded-[28px] bg-white p-6 shadow-[0_20px_50px_rgba(0,61,130,0.10)] ring-1 ring-[#E2E8F0] sm:p-8 lg:p-10">
              {/* Tabs */}
              <div className="mb-8 grid grid-cols-2 rounded-full bg-[#F1F5F9] p-1" role="tablist" aria-label="Contact options">
                {(
                  [
                    { key: "message", label: "Send a message", short: "Message" },
                    { key: "meeting", label: "Book an ERP Health Audit", short: "Book an audit" },
                  ] as const
                ).map((t) => {
                  const on = tab === t.key;
                  return (
                    <button
                      key={t.key}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setTab(t.key)}
                      className={`relative flex items-center justify-center gap-2 rounded-full px-3 py-3 text-sm font-semibold transition-colors ${
                        on ? "text-white" : "text-[#475569] hover:text-[#0F172A]"
                      }`}
                    >
                      {on && (
                        <m.span
                          layoutId="contact-tab"
                          className="absolute inset-0 rounded-full bg-[#003D82] shadow-[0_4px_14px_0_rgba(0,61,130,0.30)]"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                      <span className="relative hidden sm:inline">{t.label}</span>
                      <span className="relative sm:hidden">{t.short}</span>
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait" initial={false}>
                {tab === "message" ? (
                  <m.div
                    key="message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {sentTo ? (
                      <SuccessState
                        title="Message sent"
                        text={
                          <>
                            Thanks{sentTo.name ? `, ${sentTo.name}` : ""}. Our team will reply within 24 hours
                            {sentTo.email ? (
                              <>
                                {" "}
                                at <strong className="text-[#0F172A]">{sentTo.email}</strong>
                              </>
                            ) : null}
                            . A copy of your enquiry is on its way to your inbox.
                          </>
                        }
                        action={{ label: "Send another message", onClick: () => setSentTo(null) }}
                      />
                    ) : (
                      <form className="space-y-6" onSubmit={handleContactSubmit} noValidate={false}>
                        <div>
                          <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A]">Send us a message</h2>
                          <p className="mt-1 text-[15px] text-[#64748B]">Goes straight to our team at sales@erptitans.com.</p>
                        </div>

                        {/* Topic chips */}
                        <fieldset>
                          <legend className="mb-3 text-sm font-semibold text-[#0F172A]">
                            What do you need help with? <span className="font-medium text-[#64748B]">(optional)</span>
                          </legend>
                          <div className="flex flex-wrap gap-2">
                            {TOPICS.map((t) => {
                              const on = topics.includes(t);
                              return (
                                <button
                                  key={t}
                                  type="button"
                                  aria-pressed={on}
                                  onClick={() => toggleTopic(t)}
                                  className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                                    on
                                      ? "bg-[#003D82] text-white shadow-[0_4px_14px_0_rgba(0,61,130,0.25)]"
                                      : "bg-[#F8FAFC] text-[#334155] ring-1 ring-[#E2E8F0] hover:ring-[#003D82]/40"
                                  }`}
                                >
                                  {on && <Check size={14} strokeWidth={3} />}
                                  {t}
                                </button>
                              );
                            })}
                          </div>
                        </fieldset>

                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                          <Field label="Full name" htmlFor="c-name" required>
                            <input id="c-name" name="fullName" required autoComplete="name" placeholder="Jane Smith" className={`${inputClass} h-12`} />
                          </Field>
                          <Field label="Work email" htmlFor="c-email" required>
                            <input id="c-email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={`${inputClass} h-12`} />
                          </Field>
                          <Field label="Phone" htmlFor="c-phone" required>
                            <input id="c-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+1 (555) 000-0000" className={`${inputClass} h-12`} />
                          </Field>
                          <Field label="Company" htmlFor="c-company" required>
                            <input id="c-company" name="companyName" required autoComplete="organization" placeholder="Company name" className={`${inputClass} h-12`} />
                          </Field>
                          <Field label="Industry" htmlFor="c-industry" required>
                            <div className="relative">
                              <select id="c-industry" name="industry" required defaultValue="" className={`${inputClass} h-12 appearance-none pr-10`}>
                                <option value="" disabled>
                                  Select industry
                                </option>
                                <option value="Manufacturing">Manufacturing</option>
                                <option value="Distribution">Distribution</option>
                                <option value="Cannabis">Cannabis</option>
                                <option value="Retail">Retail</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Construction">Construction</option>
                                <option value="Other">Other</option>
                              </select>
                              <ChevronDown size={18} className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#64748B]" />
                            </div>
                          </Field>
                          <Field label="Current ERP" htmlFor="c-erp">
                            <input id="c-erp" name="erpSystem" placeholder="e.g. Odoo, QuickBooks, SAP, NetSuite" className={`${inputClass} h-12`} />
                          </Field>
                        </div>

                        <Field label="How can we help?" htmlFor="c-message" required hint={`${messageLen}/3000`}>
                          <textarea
                            id="c-message"
                            name="message"
                            required
                            rows={5}
                            maxLength={3000}
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessageLen(e.target.value.length)}
                            placeholder="Tell us about your current ERP challenges, timeline and goals. Add URGENT for a stalled or failing system."
                            className={`${inputClass} resize-none py-3 leading-relaxed`}
                          />
                        </Field>

                        {/* Honeypot: hidden from people, catches bots */}
                        <div className="hidden" aria-hidden="true">
                          <label htmlFor="c-website">Website</label>
                          <input id="c-website" name="website" tabIndex={-1} autoComplete="off" />
                        </div>

                        <div className="flex flex-col-reverse gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                          <p className="flex items-start gap-2 text-xs leading-relaxed text-[#64748B] sm:max-w-xs">
                            <span>
                              We only use your details to reply to this enquiry. See our{" "}
                              <Link href="/privacy-policy" className="font-semibold text-[#003D82] hover:underline">
                                privacy policy
                              </Link>
                              .
                            </span>
                          </p>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#003D82] px-8 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_0_rgba(0,61,130,0.39)] transition-all hover:bg-[#003D82]/90 disabled:opacity-70"
                          >
                            {isSubmitting ? (
                              <>
                                Sending <Loader2 size={17} className="animate-spin" />
                              </>
                            ) : (
                              <>
                                Send message <Send size={17} />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </m.div>
                ) : (
                  <m.div
                    key="meeting"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {isBookingSuccess ? (
                      <SuccessState
                        title="Your ERP Health Audit is booked"
                        text="Check your inbox for the confirmation and meeting details. Need to change the time? Just reply to that email."
                        action={{
                          label: "Book another time",
                          onClick: () => {
                            setIsBookingSuccess(false);
                            setSelectedDate(null);
                            setSelectedTime(null);
                          },
                        }}
                      />
                    ) : (
                      <>
                        <div className="mb-7">
                          <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A]">Book your ERP Health Audit</h2>
                          <p className="mt-1 text-[15px] text-[#64748B]">Free and no-obligation · 1 hour on Microsoft Teams · Mountain Time</p>
                        </div>

                        <ol className="mb-6 grid grid-cols-3 gap-2 text-center text-xs font-bold uppercase tracking-wider">
                          {["Pick a date", "Pick a time", "Your details"].map((s, i) => {
                            const done = (i === 0 && !!selectedDate) || (i === 1 && !!selectedTime);
                            const active = (i === 0 && !selectedDate) || (i === 1 && !!selectedDate && !selectedTime) || (i === 2 && !!selectedTime);
                            return (
                              <li
                                key={s}
                                className={`flex items-center justify-center gap-1.5 rounded-full px-2 py-2 transition-colors ${
                                  active ? "bg-[#003D82] text-white" : done ? "bg-[#EFF6FF] text-[#003D82]" : "bg-[#F8FAFC] text-[#64748B] ring-1 ring-[#E2E8F0]"
                                }`}
                              >
                                {done ? <Check size={12} strokeWidth={3} /> : <span>{i + 1}</span>}
                                <span className="truncate">{s}</span>
                              </li>
                            );
                          })}
                        </ol>

                        <div className="grid grid-cols-1 gap-8 rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-[#E2E8F0] sm:p-6 md:grid-cols-2">
                          <BookingCalendar selectedDate={selectedDate} onSelectDate={setSelectedDate} />
                          <TimeSlotPicker selectedTime={selectedTime} onSelectTime={setSelectedTime} disabled={!selectedDate} />
                        </div>

                        <BookingForm
                          disabled={!selectedTime}
                          selectedDate={selectedDate}
                          selectedTime={selectedTime}
                          onSuccess={() => setIsBookingSuccess(true)}
                        />
                      </>
                    )}
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Info column */}
          <aside className="flex flex-col gap-6 lg:order-1">
            <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0] sm:p-7">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">Talk to a specialist</span>
              <dl className="mt-5 divide-y divide-[#F1F5F9]">
                <div className="pb-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Email</dt>
                  <dd className="mt-1">
                    <a href="mailto:sales@erptitans.com" className="text-[17px] font-semibold text-[#0F172A] underline decoration-[#003D82]/25 underline-offset-4 hover:decoration-[#003D82]">
                      sales@erptitans.com
                    </a>
                  </dd>
                </div>
                <div className="py-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    {offices.footer.length > 1 ? "Where we work" : "Based in"}
                  </dt>
                  <dd className="mt-1 space-y-1">
                    {offices.footer.map((o) => (
                      <span key={o.label} className="flex items-center gap-2 text-[15px] font-semibold text-[#0F172A]">
                        <Flag country={o.country} />
                        {o.label}
                      </span>
                    ))}
                    {offices.serving && <span className="block text-sm text-[#64748B]">{offices.serving}</span>}
                  </dd>
                </div>
                <div className="pt-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Response time</dt>
                  <dd className="mt-1 text-[15px] font-semibold text-[#0F172A]">
                    Within 24 hours <span className="font-normal text-[#64748B]">· business days, Mountain Time</span>
                  </dd>
                </div>
              </dl>
              <div className="mt-6 border-l-2 border-[#DC2626] bg-[#FEF2F2] py-3 pl-4 pr-3 text-sm leading-relaxed text-[#7F1D1D]">
                <span>
                  ERP down or a go-live in trouble? Put <strong>URGENT</strong> in your message and we&apos;ll prioritise it.
                </span>
              </div>
            </div>

            <div className="rounded-[24px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ring-1 ring-[#E2E8F0] sm:p-7">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#003D82]">What happens next</span>
              <ol className="mt-5 space-y-5">
                {NEXT_STEPS.map((s, i) => (
                  <li key={s.title} className="relative flex gap-4">
                    {i < NEXT_STEPS.length - 1 && (
                      <span
                        className="absolute left-[15px] top-8 -bottom-5 w-[2px] bg-gradient-to-b from-[#003D82] to-[#0EA5E9]"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#003D82] text-xs font-bold text-white ring-4 ring-white">
                      {i + 1}
                    </span>
                    <span>
                      <span className="block font-bold text-[#0F172A]">{s.title}</span>
                      <span className="text-sm leading-relaxed text-[#64748B]">{s.text}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-6 border-t border-[#F1F5F9] pt-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#64748B]">Why partner with us</span>
                <ul className="mt-3 grid grid-cols-1 gap-2.5">
                  {BENEFITS.map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm font-medium text-[#334155]">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16A34A]/10">
                        <Check size={12} strokeWidth={3} className="text-[#16A34A]" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function SuccessState({
  title,
  text,
  action,
}: {
  title: string;
  text: React.ReactNode;
  action: { label: string; onClick: () => void };
}) {
  return (
    <div className="flex flex-col items-center py-14 text-center sm:py-20" role="status" aria-live="polite">
      <m.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#16A34A]/10"
      >
        <CheckCircle2 size={40} strokeWidth={2.25} className="text-[#16A34A]" />
      </m.span>
      <h2 className="text-2xl font-extrabold tracking-tight text-[#003D82] sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[#64748B]">{text}</p>
      <button
        type="button"
        onClick={action.onClick}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-sm transition-all hover:bg-gray-50"
      >
        {action.label}
      </button>
    </div>
  );
}
