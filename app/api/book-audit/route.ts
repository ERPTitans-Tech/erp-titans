import { NextResponse } from "next/server";
import { sendAuditBookingEmail } from "@/services/emailService";
import { clean, isBot, isEmail } from "@/lib/form-guard";
import { sendInBackground } from "@/lib/send-later";

export async function POST(req: Request) {
  try {
    const raw = (await req.json().catch(() => ({}))) as Record<string, unknown>;
    if (isBot(raw)) {
      return NextResponse.json({ success: true, message: "Meeting scheduled successfully." }, { status: 200 });
    }
    const body = {
      fullName: clean(raw.fullName, 120),
      email: clean(raw.email, 254),
      phone: clean(raw.phone, 40),
      companyName: clean(raw.companyName, 160),
      selectedDate: clean(raw.selectedDate, 40),
      selectedTime: clean(raw.selectedTime, 20),
      joinWebUrl: "",
    };
    if (body.email && !isEmail(body.email)) {
      return NextResponse.json({ success: false, error: "Please enter a valid email address." }, { status: 400 });
    }

    // Basic Validation
    if (
      !body.fullName?.trim() ||
      !body.email?.trim() ||
      !body.phone?.trim() ||
      !body.companyName?.trim() ||
      !body.selectedDate?.trim() ||
      !body.selectedTime?.trim()
    ) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 1. Convert Date & Time to ISO format for Microsoft Graph API
    // body.selectedDate from frontend is typically a toDateString() like "Mon Jun 22 2026"
    const parsedBaseDate = new Date(body.selectedDate);
    if (isNaN(parsedBaseDate.getTime())) {
      return NextResponse.json(
        { success: false, error: "Invalid date format provided." },
        { status: 400 }
      );
    }

    const year = parsedBaseDate.getFullYear();
    const month = parsedBaseDate.getMonth();
    const date = parsedBaseDate.getDate();


    let hours = 0;
    let minutes = 0;
    const timeMatch = body.selectedTime.trim().match(/^(\d{1,2}):(\d{2})(?:\s*(AM|PM))?$/i);
    
    if (!timeMatch) {
      return NextResponse.json(
        { success: false, error: "Invalid time format provided." },
        { status: 400 }
      );
    }

    hours = parseInt(timeMatch[1], 10);
    minutes = parseInt(timeMatch[2], 10);
    const ampm = timeMatch[3] ? timeMatch[3].toUpperCase() : null;
    
    if (ampm === "PM" && hours < 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;


    const startDate = new Date(year, month, date, hours, minutes);
    if (isNaN(startDate.getTime())) {
      return NextResponse.json(
        { success: false, error: "Resulting start date is invalid." },
        { status: 400 }
      );
    }


    // 2. Create the Real Microsoft Teams Meeting
    // ------------------------------------------------------------------------------------------------
    // TODO: RE-ENABLE MICROSOFT GRAPH INTEGRATION ONCE "APPLICATION ACCESS POLICY" IS CONFIGURED
    // (lib/graphClient.ts was removed Nov 2026 to drop unused, vulnerable dependencies; restore it from git
    // history and install a current @azure/msal-node + @microsoft/microsoft-graph-client when needed.)
    // Once the Office 365 Administrator has granted the `OnlineMeetings.ReadWrite.All` policy to this 
    // App Registration using Teams PowerShell, uncomment the block below to restore dynamic Teams meeting generation.
    // ------------------------------------------------------------------------------------------------
    const joinWebUrl = process.env.TEAMS_MEETING_URL || "";
    
    if (!joinWebUrl) {
      console.warn("WARNING: TEAMS_MEETING_URL is missing from environment variables.");
    }
    
    /*
    const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // 1 hour
    const subject = `ERP Health Audit Consultation for ${body.companyName}`;
    try {
      joinWebUrl = await createTeamsMeeting(subject, startDate.toISOString(), endDate.toISOString());
      // (original call below)
      joinWebUrl = await createTeamsMeeting(subject, startDateTimeStr, endDateTimeStr);
    } catch (graphError: any) {
      console.error("Microsoft Graph Error, falling back...", graphError);
      throw new Error("Failed to generate Microsoft Teams meeting: " + (graphError.message || "Unknown error"));
    }
    */

    body.joinWebUrl = joinWebUrl;

    // 3. Send Emails via Outlook (Nodemailer) + iCalendar invites
    sendInBackground("Audit booking email", () => sendAuditBookingEmail(body));

    return NextResponse.json(
      { success: true, message: "Meeting scheduled successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Audit Booking API Error:", error);
    
    // Return detailed error in development mode
    if (process.env.NODE_ENV !== "production") {
      const message = error instanceof Error ? error.message : "An unknown error occurred during dispatch.";
      return NextResponse.json(
        { success: false, error: message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: "Unable to schedule meeting. Please try again." },
      { status: 500 }
    );
  }
}
