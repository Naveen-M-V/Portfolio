"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const defaultState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(defaultState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onChange = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Primary submit via Next.js API route
      let response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let textData = await response.text();
      let data: { error?: string; success?: boolean } = {};

      try {
        data = JSON.parse(textData);
      } catch {
        data = {};
      }

      // If server route failed, attempt direct browser submit to FormSubmit
      if (!response.ok) {
        if (data.error) {
          throw new Error(data.error);
        }

        const directRes = await fetch("https://formsubmit.co/ajax/lunazaven1727@gmail.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `New Portfolio Message from ${form.name}`,
            _template: "table",
            _captcha: "false",
          }),
        });

        const directText = await directRes.text();
        let directData: { success?: string | boolean; message?: string } = {};

        try {
          directData = JSON.parse(directText);
        } catch {
          if (directText.toLowerCase().includes("activation")) {
            throw new Error("Activation email sent to lunazaven1727@gmail.com! Please check your inbox/spam and click 'Activate Form' once.");
          }
        }

        if (directData.success === "false" || directData.success === false) {
          throw new Error(directData.message ?? "Unable to send message.");
        }
      }

      setStatus("success");
      setForm(defaultState);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Something went wrong. Please try emailing lunazaven1727@gmail.com directly.");
      }
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="hover-depth space-y-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)]/75 p-5 backdrop-blur-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-[var(--muted)]">Name</span>
          <input
            required
            value={form.name}
            onChange={(event) => onChange("name", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2 outline-none transition-colors placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)]"
            placeholder="Your name"
          />
        </label>

        <label className="space-y-2 text-sm">
          <span className="text-[var(--muted)]">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => onChange("email", event.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2 outline-none transition-colors placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)]"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="space-y-2 text-sm">
        <span className="text-[var(--muted)]">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => onChange("message", event.target.value)}
          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3 py-2 outline-none transition-colors placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)]"
          placeholder="Tell me about your product or system idea..."
        />
      </label>

      <div className="pt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "loading"}
          className="ripple-button hover-depth inline-flex items-center justify-center rounded-full border border-transparent bg-[var(--foreground)] px-6 py-2.5 text-sm font-semibold text-[var(--background)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" ? (
          <p className="text-sm text-emerald-400">Message sent successfully.</p>
        ) : null}
        {status === "error" ? (
          <p className="text-xs leading-relaxed text-amber-400 sm:text-sm">{errorMessage}</p>
        ) : null}
      </div>
    </form>
  );
}
