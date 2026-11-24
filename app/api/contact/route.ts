import { NextResponse } from "next/server";
import { sendContactEmail } from "@/services/emailService";
import { clean, isBot, isEmail } from "@/lib/form-guard";
import { sendInBackground } from "@/lib/send-later";

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;

    // Silently accept bot submissions without sending anything.
    if (isBot(body)) {
      return NextResponse.json({ success: true, message: "Message sent successfully." }, { status: 200 });
    }

    const data = {
      fullName: clean(body.fullName, 120),
      email: clean(body.email, 254),
      phone: clean(body.phone, 40),
      companyName: clean(body.companyName, 160),
      industry: clean(body.industry, 60),
      erpSystem: clean(body.erpSystem, 120),
      topics: clean(body.topics, 300),
      message: clean(body.message, 3000, true),
    };

    if (!data.fullName || !data.email || !data.phone || !data.companyName || !data.industry || !data.message) {
      return NextResponse.json({ success: false, error: "Please fill in all required fields." }, { status: 400 });
    }
    if (!isEmail(data.email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    // Delivered to sales@erptitans.com (see services/emailService.ts), right after we respond.
    sendInBackground("Contact email", () => sendContactEmail(data));

    return NextResponse.json({ success: true, message: "Message sent successfully." }, { status: 200 });
  } catch (error: unknown) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { success: false, error: "We couldn't send your message right now. Please try again, or email sales@erptitans.com." },
      { status: 500 },
    );
  }
}
