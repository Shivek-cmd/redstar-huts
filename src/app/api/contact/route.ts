import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email";
import type { LeadType } from "@/lib/email";

const VALID_LEAD_TYPES: LeadType[] = [
  "property-inquiry",
  "service-inquiry",
  "floor-plan-request",
  "location-request",
  "intro-call",
  "analysis-report",
  "general",
  "notify-me",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { leadType, name, email, phone, message, interest, preferredTime, propertyName, serviceName } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!leadType || !VALID_LEAD_TYPES.includes(leadType)) {
      return NextResponse.json({ error: "Invalid lead type" }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("SMTP credentials not configured");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    await sendLeadEmail({
      leadType,
      name,
      email,
      phone,
      message,
      interest,
      preferredTime,
      propertyName,
      serviceName,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
