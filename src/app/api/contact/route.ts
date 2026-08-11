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

  try {
    const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `New Portfolio Message from ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const rawText = await formSubmitResponse.text();
    let resData: { success?: string | boolean; message?: string } = {};

    try {
      resData = JSON.parse(rawText);
    } catch {
      if (rawText.toLowerCase().includes("activation")) {
        return NextResponse.json(
          {
            error: `Activation email sent to ${targetEmail}. Please check your inbox/spam folder and click "Activate Form" once.`,
          },
          { status: 400 }
        );
      }
    }

    if (resData.success === "false" || resData.success === false) {
      if (resData.message && resData.message.toLowerCase().includes("activation")) {
        return NextResponse.json(
          {
            error: `Activation email sent to ${targetEmail}. Please check your inbox/spam folder and click "Activate Form" once.`,
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
