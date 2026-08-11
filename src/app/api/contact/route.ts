import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload = {};
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

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

  const targetEmail = process.env.CONTACT_TO_EMAIL ?? "lunazaven1727@gmail.com";
  const requestOrigin = request.headers.get("origin") ?? request.headers.get("referer") ?? "https://naveenmv.dev";

  try {
    const formData = new URLSearchParams();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);
    formData.append("_subject", `New Portfolio Message from ${name}`);
    formData.append("_template", "table");
    formData.append("_captcha", "false");

    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        UserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        Origin: requestOrigin,
        Referer: requestOrigin,
      },
      body: formData.toString(),
    });

    const rawText = await formSubmitResponse.text();
    let resData: { success?: string | boolean; message?: string } = {};

    try {
      resData = JSON.parse(rawText);
    } catch {
      // If FormSubmit returned HTML text instead of JSON
      if (rawText.toLowerCase().includes("activation")) {
        return NextResponse.json(
          {
            error: `Activation email sent to ${targetEmail}. Please check your inbox or spam folder and click "Activate Form" once to enable instant email delivery.`,
          },
          { status: 400 }
        );
      }
    }

    if (resData.success === "false" || resData.success === false) {
      if (resData.message && resData.message.toLowerCase().includes("activation")) {
        return NextResponse.json(
          {
            error: `Activation email sent to ${targetEmail}. Please check your inbox or spam folder and click "Activate Form" once to enable instant email delivery.`,
          },
          { status: 400 }
        );
      }
      throw new Error(resData.message ?? "FormSubmit service error.");
    }
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : `Unable to send message right now. Please email ${targetEmail} directly.`,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
