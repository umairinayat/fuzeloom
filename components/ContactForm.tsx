"use client";

import { useState } from "react";
import { site } from "@/content/site";

type Status = { ok: boolean; msg: string } | null;

export function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setStatus(null);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (data.ok) {
        setStatus({
          ok: true,
          msg: "Thanks — your message was received. We'll reply by email.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({
          ok: false,
          msg: data.error ?? "Something went wrong. Please email us directly.",
        });
      }
    } catch {
      setStatus({
        ok: false,
        msg: "Could not send just now. Please email us directly.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-[15px] font-medium text-indigo">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-line bg-linen/40 px-4 py-3 text-[16px] text-indigo placeholder:text-slate/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/10"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-[15px] font-medium text-indigo">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-line bg-linen/40 px-4 py-3 text-[16px] text-indigo placeholder:text-slate/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/10"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label
            htmlFor="company"
            className="mb-1.5 block text-[15px] font-medium text-indigo"
          >
            Company <span className="font-normal text-slate">(optional)</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className="w-full rounded-xl border border-line bg-linen/40 px-4 py-3 text-[16px] text-indigo placeholder:text-slate/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/10"
            placeholder="Company name"
          />
        </div>
        {/* honeypot — hidden from humans */}
        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-[15px] font-medium text-indigo"
          >
            What are you running today, and what should it do?
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full rounded-xl border border-line bg-linen/40 px-4 py-3 text-[16px] text-indigo placeholder:text-slate/70 focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/10"
            placeholder="e.g. We use HubSpot + Sheets + an internal tool. We want…"
          />
        </div>
        <div>
          <button
            type="submit"
            disabled={pending}
            className="min-h-12 rounded-full bg-blue px-7 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#2457d6] disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send message"}
          </button>
        </div>
      </form>
      <div aria-live="polite" className="mt-4">
        {status && (
          <p
            className={
              status.ok
                ? "rounded-[8px] border border-indigo/20 bg-indigo/5 p-4 text-[15px] text-indigo"
                : "rounded-[8px] border border-line bg-white p-4 text-[15px]"
            }
          >
            {status.msg}{" "}
            {!status.ok && (
              <a
                href={`mailto:${site.email}`}
                className="font-semibold text-indigo underline"
              >
                Email {site.email}
              </a>
            )}
          </p>
        )}
      </div>
    </div>
  );
}
