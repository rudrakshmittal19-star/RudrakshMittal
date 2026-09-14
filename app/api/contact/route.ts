import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Small in-memory rate limiter, per server instance. Good enough to stop
// rapid-fire spam; not a substitute for a real service at serious scale.
const submissions = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (submissions.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > MAX_PER_WINDOW;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, message, company } = body as {
      name?: string;
      email?: string;
      message?: string;
      company?: string; // honeypot
    };

    if (company) {
      // Bots fill hidden fields, real users don't. Accept silently, do nothing.
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are all required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variable.");
      return NextResponse.json(
        { error: "Contact form isn't configured yet. Please email directly instead." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: toEmail,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try emailing directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
