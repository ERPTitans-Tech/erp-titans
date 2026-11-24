// Email templates for enquiries and audit bookings.
// Built with tables and inline styles so they render the same in Outlook, Gmail and Apple Mail.

const NAVY = "#003D82";
const INK = "#0F172A";
const BODY = "#334155";
const MUTED = "#64748B";
const LINE = "#E2E8F0";
const SOFT = "#F8FAFC";
const SITE = "https://erptitans.com";
const SALES = "sales@erptitans.com";
const FONT = "'Segoe UI', -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif";

/** Escape visitor input before it goes into HTML. */
export const esc = (v: string | undefined | null) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const nl2br = (v: string) => esc(v).replace(/\n/g, "<br>");

function layout({ preheader, eyebrow, title, body }: { preheader: string; eyebrow: string; title: string; body: string }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>${esc(title)}</title>
</head>
<body style="margin:0;padding:0;background:${SOFT};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${SOFT};">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${SOFT};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;">
        <tr>
          <td style="padding:0 4px 20px 4px;font-family:${FONT};">
            <a href="${SITE}" style="text-decoration:none;color:${NAVY};font-size:18px;font-weight:800;letter-spacing:-0.2px;">ERP Titans</a>
            <span style="color:${MUTED};font-size:12px;">&nbsp;&nbsp;|&nbsp;&nbsp;Official Odoo Ready Partner</span>
          </td>
        </tr>
        <tr>
          <td style="background:#FFFFFF;border:1px solid ${LINE};border-radius:12px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr><td style="height:4px;line-height:4px;font-size:0;background:${NAVY};border-radius:12px 12px 0 0;">&nbsp;</td></tr>
              <tr>
                <td style="padding:32px 36px 8px 36px;font-family:${FONT};">
                  <div style="font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:${NAVY};">${esc(eyebrow)}</div>
                  <h1 style="margin:10px 0 0 0;font-size:24px;line-height:1.3;font-weight:800;color:${INK};">${esc(title)}</h1>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 36px 36px 36px;font-family:${FONT};font-size:15px;line-height:1.65;color:${BODY};">
                  ${body}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 4px 0 4px;font-family:${FONT};font-size:12px;line-height:1.6;color:${MUTED};">
            ERP Titans &middot; Calgary, Alberta &middot; Serving Canada &amp; the USA<br>
            <a href="mailto:${SALES}" style="color:${MUTED};">${SALES}</a> &middot; <a href="${SITE}" style="color:${MUTED};">erptitans.com</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

/** Two-column detail rows (label / value). Values are escaped here. */
function details(rows: [string, string | undefined][]) {
  const tr = rows
    .filter(([, v]) => v && v.trim())
    .map(
      ([k, v], i) => `<tr>
  <td style="padding:10px 0;${i ? `border-top:1px solid ${LINE};` : ""}width:38%;vertical-align:top;font-family:${FONT};font-size:13px;color:${MUTED};">${esc(k)}</td>
  <td style="padding:10px 0;${i ? `border-top:1px solid ${LINE};` : ""}vertical-align:top;font-family:${FONT};font-size:14px;font-weight:600;color:${INK};">${esc(v)}</td>
</tr>`,
    )
    .join("");
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 0 0;">${tr}</table>`;
}

function quote(text: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 0 0;">
  <tr><td style="font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${MUTED};padding-bottom:8px;">Message</td></tr>
  <tr><td style="background:${SOFT};border-left:3px solid ${NAVY};padding:16px 18px;font-family:${FONT};font-size:15px;line-height:1.65;color:${INK};">${nl2br(text)}</td></tr>
</table>`;
}

function button(href: string, label: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:24px 0 0 0;">
  <tr><td style="background:${NAVY};border-radius:999px;">
    <a href="${esc(href)}" style="display:inline-block;padding:12px 26px;font-family:${FONT};font-size:14px;font-weight:700;color:#FFFFFF;text-decoration:none;">${esc(label)}</a>
  </td></tr>
</table>`;
}

function steps(items: string[]) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:8px 0 0 0;">${items
    .map(
      (t, i) => `<tr>
  <td style="width:34px;padding:8px 0;vertical-align:top;font-family:${FONT};font-size:13px;font-weight:800;color:${NAVY};">0${i + 1}</td>
  <td style="padding:8px 0;vertical-align:top;font-family:${FONT};font-size:14px;line-height:1.6;color:${BODY};">${t}</td>
</tr>`,
    )
    .join("")}</table>`;
}

const h2 = (t: string) =>
  `<div style="margin:28px 0 4px 0;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${MUTED};">${esc(t)}</div>`;

/* ---------------- Contact form ---------------- */

export type ContactData = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  erpSystem?: string;
  topics?: string;
  message: string;
};

export function contactInternal(d: ContactData) {
  return layout({
    preheader: `${d.fullName} at ${d.companyName}: ${d.message.slice(0, 90)}`,
    eyebrow: "New website enquiry",
    title: `${d.companyName} wants to talk`,
    body: `
      <p style="margin:0 0 8px 0;">Reply to this email to answer ${esc(d.fullName.split(" ")[0])} directly.</p>
      ${details([
        ["Name", d.fullName],
        ["Email", d.email],
        ["Phone", d.phone],
        ["Company", d.companyName],
        ["Industry", d.industry],
        ["Current ERP", d.erpSystem || "Not specified"],
        ["Interested in", d.topics || "Not specified"],
      ])}
      ${quote(d.message)}
      ${button(`mailto:${d.email}?subject=${encodeURIComponent("Re: your enquiry to ERP Titans")}`, `Reply to ${d.fullName.split(" ")[0]}`)}`,
  });
}

export function contactConfirmation(d: ContactData) {
  const first = d.fullName.split(" ")[0];
  return layout({
    preheader: "We've received your message and will reply within 24 hours.",
    eyebrow: "Message received",
    title: `Thanks, ${first}. We're on it.`,
    body: `
      <p style="margin:0;">Your message has reached our team. A specialist will review it and get back to you within <strong>24 hours</strong> on business days.</p>
      ${h2("What happens next")}
      ${steps([
        "We review your note and your current setup.",
        "We set up a free consultation with a senior ERP specialist.",
        "You get clear next steps: a recovery roadmap or proposal, with no obligation.",
      ])}
      ${h2("Your enquiry")}
      ${details([
        ["Company", d.companyName],
        ["Industry", d.industry],
        ["Interested in", d.topics],
      ])}
      ${quote(d.message)}
      <p style="margin:24px 0 0 0;">Something urgent? Reply to this email with <strong>URGENT</strong> in the subject and we'll prioritise it.</p>
      <p style="margin:20px 0 0 0;">The ERP Titans team</p>`,
  });
}

/* ---------------- Audit booking ---------------- */

export type BookingData = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  displayDate: string;
  selectedTime: string;
  joinWebUrl?: string;
};

export function bookingInternal(d: BookingData) {
  return layout({
    preheader: `${d.companyName} booked ${d.displayDate}, ${d.selectedTime} MT`,
    eyebrow: "New ERP Health Audit booking",
    title: `${d.companyName}: ${d.displayDate}, ${d.selectedTime} MT`,
    body: `
      <p style="margin:0 0 8px 0;">A calendar invite is attached. Reply to this email to reach ${esc(d.fullName.split(" ")[0])} directly.</p>
      ${details([
        ["Date", d.displayDate],
        ["Time", `${d.selectedTime} Mountain Time`],
        ["Name", d.fullName],
        ["Email", d.email],
        ["Phone", d.phone],
        ["Company", d.companyName],
      ])}
      ${d.joinWebUrl ? button(d.joinWebUrl, "Open Teams meeting") : ""}`,
  });
}

export function bookingConfirmation(d: BookingData) {
  const first = d.fullName.split(" ")[0];
  return layout({
    preheader: `Your ERP Health Audit is booked for ${d.displayDate}, ${d.selectedTime} MT.`,
    eyebrow: "ERP Health Audit confirmed",
    title: `You're booked, ${first}.`,
    body: `
      <p style="margin:0;">Thanks for booking a free ERP Health Audit with ERP Titans. Here are your details.</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:20px 0 0 0;">
        <tr><td style="background:${SOFT};border:1px solid ${LINE};border-radius:10px;padding:20px 22px;font-family:${FONT};">
          <div style="font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:${MUTED};">When</div>
          <div style="margin-top:6px;font-size:20px;font-weight:800;color:${INK};">${esc(d.displayDate)}</div>
          <div style="margin-top:2px;font-size:15px;color:${BODY};">${esc(d.selectedTime)} Mountain Time (Calgary) &middot; 1 hour &middot; Microsoft Teams</div>
        </td></tr>
      </table>
      ${d.joinWebUrl ? button(d.joinWebUrl, "Join the Teams meeting") : `<p style="margin:16px 0 0 0;color:${MUTED};font-size:14px;">We'll send the meeting link before the call.</p>`}
      ${h2("To get the most from the call")}
      ${steps([
        "Note where your current system falls short.",
        "List the processes that matter most: sales, inventory, production, finance.",
        "Invite the people who use the system every day.",
      ])}
      <p style="margin:24px 0 0 0;">Need a different time? Just reply to this email.</p>
      <p style="margin:20px 0 0 0;">The ERP Titans team</p>`,
  });
}
