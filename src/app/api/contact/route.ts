import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email);
  if (!isEmailValid) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({ success: true });
}
