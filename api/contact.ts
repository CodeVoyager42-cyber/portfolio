import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot
};

const toNonEmptyString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      ok: false,
      error: "Missing RESEND_API_KEY environment variable",
    });
  }

  let parsedBody: unknown = req.body;
  if (typeof parsedBody === "string") {
    try {
      parsedBody = JSON.parse(parsedBody);
    } catch {
      return res.status(400).json({ ok: false, error: "Invalid JSON" });
    }
  }

  const body = (parsedBody ?? {}) as Partial<ContactPayload>;

  const name = toNonEmptyString(body.name);
  const email = toNonEmptyString(body.email);
  const subject = toNonEmptyString(body.subject);
  const message = toNonEmptyString(body.message);
  const company = toNonEmptyString(body.company);

  // Basic bot protection: if honeypot filled, pretend success.
  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  const resend = new Resend(apiKey);

  const from = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>";
  const to = process.env.CONTACT_TO || "mouadev8@gmail.com";

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send";
    return res.status(500).json({ ok: false, error: message });
  }
}
