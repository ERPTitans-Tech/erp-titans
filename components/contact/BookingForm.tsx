"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { Field, inputClass } from "./fields";

interface BookingFormProps {
  disabled: boolean;
  selectedDate: Date | null;
  selectedTime: string | null;
  onSuccess: () => void;
}

export default function BookingForm({ disabled, selectedDate, selectedTime, onSuccess }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error("Please pick a date and time first.");
      return;
    }
    const form = e.currentTarget;
    setIsSubmitting(true);
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
    data.selectedDate = selectedDate.toDateString();
    data.selectedTime = selectedTime;

    try {
      const res = await fetch("/api/book-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const responseData = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(responseData.error || "Failed to send booking");
      onSuccess();
      form.reset();
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again, or email sales@erptitans.com.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const when =
    selectedDate && selectedTime
      ? `${selectedDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} · ${selectedTime} MT`
      : null;

  return (
    <div className={`mt-6 transition-opacity duration-300 ${disabled ? "pointer-events-none opacity-40" : "opacity-100"}`} aria-disabled={disabled}>
      <form className="space-y-5" onSubmit={handleAuditSubmit}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <Field label="Full name" htmlFor="b-name" required>
            <input id="b-name" name="fullName" required autoComplete="name" placeholder="Jane Smith" className={`${inputClass} h-12`} />
          </Field>
          <Field label="Work email" htmlFor="b-email" required>
            <input id="b-email" name="email" type="email" required autoComplete="email" placeholder="jane@company.com" className={`${inputClass} h-12`} />
          </Field>
          <Field label="Phone" htmlFor="b-phone" required>
            <input id="b-phone" name="phone" type="tel" required autoComplete="tel" placeholder="+1 (555) 000-0000" className={`${inputClass} h-12`} />
          </Field>
          <Field label="Company" htmlFor="b-company" required>
            <input id="b-company" name="companyName" required autoComplete="organization" placeholder="Company name" className={`${inputClass} h-12`} />
          </Field>
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="b-website">Website</label>
          <input id="b-website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || disabled}
          className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-[#003D82] text-[15px] font-semibold text-white shadow-[0_4px_14px_0_rgba(0,61,130,0.39)] transition-all hover:bg-[#003D82]/90 disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              Booking <Loader2 size={18} className="animate-spin" />
            </>
          ) : (
            <>
              {when ? `Confirm audit · ${when}` : "Confirm ERP Health Audit"} <ArrowRight size={18} />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
