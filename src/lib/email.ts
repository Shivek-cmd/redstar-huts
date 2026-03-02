import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const RECIPIENT = process.env.CONTACT_EMAIL || "redstarhuts9@gmail.com";

export type LeadType =
  | "property-inquiry"
  | "service-inquiry"
  | "floor-plan-request"
  | "location-request"
  | "intro-call"
  | "analysis-report"
  | "general"
  | "notify-me";

export interface LeadPayload {
  leadType: LeadType;
  name?: string;
  email: string;
  phone?: string;
  message?: string;
  interest?: string;
  preferredTime?: string;
  propertyName?: string;
  serviceName?: string;
}

const subjectMap: Record<LeadType, string> = {
  "property-inquiry": "New Property Inquiry",
  "service-inquiry": "New Service Inquiry",
  "floor-plan-request": "Floor Plan Request",
  "location-request": "Location Details Request",
  "intro-call": "Intro Call Request",
  "analysis-report": "Market Analysis Request",
  general: "New Website Inquiry",
  "notify-me": "New Coming Soon Subscriber",
};

function buildHtml(payload: LeadPayload): string {
  const rows: string[] = [];

  if (payload.name) rows.push(row("Name", payload.name));
  rows.push(row("Email", payload.email));
  if (payload.phone) rows.push(row("Phone", payload.phone));
  if (payload.interest) rows.push(row("Interest", payload.interest));
  if (payload.preferredTime) rows.push(row("Preferred Time", payload.preferredTime));
  if (payload.propertyName) rows.push(row("Property", payload.propertyName));
  if (payload.serviceName) rows.push(row("Service", payload.serviceName));
  if (payload.message) rows.push(row("Message", payload.message));

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#F6F5F3;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F6F5F3;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #EFEDE9;">
        <tr>
          <td style="padding:32px 40px;border-bottom:1px solid #EFEDE9;">
            <h1 style="margin:0;font-size:20px;color:#1F1F1F;font-weight:600;">RedStar Huts</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 40px;">
            <h2 style="margin:0 0 8px;font-size:18px;color:#1F1F1F;">${subjectMap[payload.leadType]}</h2>
            <p style="margin:0 0 24px;font-size:13px;color:#888;">Received from redstarhuts.com</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #EFEDE9;">
              ${rows.join("")}
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:24px 40px;border-top:1px solid #EFEDE9;">
            <p style="margin:0;font-size:12px;color:#999;">This is an automated message from your website contact forms.</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string): string {
  return `
<tr>
  <td style="padding:12px 16px;border-bottom:1px solid #EFEDE9;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px;width:140px;vertical-align:top;">${label}</td>
  <td style="padding:12px 16px;border-bottom:1px solid #EFEDE9;font-size:14px;color:#1F1F1F;">${value}</td>
</tr>`;
}

export async function sendLeadEmail(payload: LeadPayload): Promise<void> {
  const subject = `${subjectMap[payload.leadType]}${payload.propertyName ? ` — ${payload.propertyName}` : ""}${payload.serviceName ? ` — ${payload.serviceName}` : ""}`;

  await transporter.sendMail({
    from: `"RedStar Huts Website" <${process.env.SMTP_USER}>`,
    to: RECIPIENT,
    replyTo: payload.email,
    subject,
    html: buildHtml(payload),
  });
}
