import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (name.length > 100 || message.length > 4000) {
    return NextResponse.json({ error: "Input is too long." }, { status: 400 });
  }

  const isEmailValid = emailRegex.test(email);
  if (!isEmailValid) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT ?? "587");
  const smtpSecure = process.env.SMTP_SECURE === "true";
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "mvnaveen18@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !fromEmail) {
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and CONTACT_FROM_EMAIL in environment variables.",
      },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Inter,Segoe UI,Arial,sans-serif;line-height:1.6;color:#111827;max-width:680px;margin:0 auto;">
          <h2 style="margin:0 0 16px;">New Contact Form Message</h2>
          <p style="margin:0 0 8px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin:0 0 16px;"><strong>Email:</strong> ${safeEmail}</p>
          <div style="padding:14px 16px;border:1px solid #e5e7eb;border-radius:12px;background:#f9fafb;">
            ${safeMessage}
          </div>
        </div>
      `,
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to send your message right now. Please try again shortly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
