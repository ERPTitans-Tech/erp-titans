import * as ics from "ics";
import { sendEmail } from "@/lib/email";
import { bookingConfirmation, bookingInternal, contactConfirmation, contactInternal, type ContactData } from "@/lib/email-templates";

// Every enquiry and booking is delivered to the sales inbox.
const NOTIFICATION_EMAIL = "sales@erptitans.com";

interface AuditFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  selectedDate: string;
  selectedTime: string;
  joinWebUrl?: string;
}

// Helper to convert date strings (YYYY-MM-DD, HH:MM AM/PM) into ICS format
const generateIcsEvent = (data: AuditFormData) => {
  const parsedDate = new Date(data.selectedDate);
  if (isNaN(parsedDate.getTime())) return null;

  const year = parsedDate.getFullYear();
  const month = parsedDate.getMonth() + 1;
  const day = parsedDate.getDate();
  
  let hours = 0;
  let minutes = 0;
  const timeMatch = data.selectedTime.trim().match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
  if (timeMatch) {
    hours = parseInt(timeMatch[1], 10);
    minutes = parseInt(timeMatch[2], 10);
    const ampm = timeMatch[3] ? timeMatch[3].toUpperCase() : null;
    if (ampm === "PM" && hours < 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;
  }

  const start: ics.DateArray = [year, month, day, hours, minutes];

  const event: ics.EventAttributes = {
    start,
    duration: { hours: 1, minutes: 0 },
    title: 'ERP Health Audit Consultation',
    description: `ERP Health Audit for ${data.companyName}\nJoin Meeting: ${data.joinWebUrl || ''}`,
    location: data.joinWebUrl || 'Online Microsoft Teams Meeting',
    url: data.joinWebUrl,
    status: 'CONFIRMED',
    busyStatus: 'BUSY',
    organizer: { name: 'ERP Titans', email: NOTIFICATION_EMAIL },
    attendees: [
      { name: data.fullName, email: data.email, rsvp: true, partstat: 'NEEDS-ACTION', role: 'REQ-PARTICIPANT' }
    ]
  };

  const { error, value } = ics.createEvent(event);
  if (error || !value) {
    console.error("Error creating ICS event:", error);
    return null;
  }
  return value;
};


/** Sales copy must succeed; the visitor's confirmation is best-effort. Both go out in parallel. */
async function deliver(internal: Parameters<typeof sendEmail>[0], customer: Parameters<typeof sendEmail>[0]) {
  const [sales, visitor] = await Promise.allSettled([sendEmail(internal), sendEmail(customer)]);
  if (visitor.status === "rejected") console.error("Visitor confirmation failed:", visitor.reason);
  if (sales.status === "rejected") throw sales.reason;
}

export const sendContactEmail = async (data: ContactData) => {
  const urgent = /\burgent\b/i.test(data.message) ? "URGENT · " : "";
  await deliver(
    {
      to: NOTIFICATION_EMAIL,
      subject: `${urgent}New enquiry: ${data.companyName} (${data.fullName})`,
      html: contactInternal(data),
      replyTo: data.email,
    },
    {
      to: data.email,
      subject: "We've received your message | ERP Titans",
      html: contactConfirmation(data),
      replyTo: NOTIFICATION_EMAIL,
    },
  );
};

export const sendAuditBookingEmail = async (data: AuditFormData) => {
  const displayDate = new Date(data.selectedDate).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const booking = { ...data, displayDate };
  const icsContent = generateIcsEvent(data);
  const attachments = icsContent
    ? [{ name: "erp-health-audit.ics", contentType: "text/calendar; method=REQUEST", contentBytes: Buffer.from(icsContent).toString("base64") }]
    : [];

  await deliver(
    {
      to: NOTIFICATION_EMAIL,
      subject: `New ERP Health Audit booking: ${data.companyName}, ${displayDate} ${data.selectedTime} MT`,
      html: bookingInternal(booking),
      replyTo: data.email,
      attachments,
    },
    {
      to: data.email,
      subject: `Confirmed: your ERP Health Audit on ${displayDate}`,
      html: bookingConfirmation(booking),
      replyTo: NOTIFICATION_EMAIL,
      attachments,
    },
  );
};
