import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";

export async function POST(req: Request) {
  const form = await req.formData();
  const input = {
    name: String(form.get("name") ?? ""),
    email: String(form.get("email") ?? ""),
    company: String(form.get("company") ?? ""),
    message: String(form.get("message") ?? ""),
    website: String(form.get("website") ?? ""),
  };

  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Please check the form.";
    return NextResponse.json({ ok: false, error: first }, { status: 400 });
  }
  if (parsed.data.website) {
    // honeypot filled — pretend success
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Email sending is not configured yet. Please email us directly.",
      },
      { status: 503 }
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: "FuzeLoom website <onboarding@resend.dev>",
      to,
      replyTo: parsed.data.email,
      subject: `New enquiry from ${parsed.data.name}${
        parsed.data.company ? ` (${parsed.data.company})` : ""
      }`,
      text: `Name: ${parsed.data.name}\nEmail: ${parsed.data.email}\nCompany: ${parsed.data.company ?? "-"}\n\n${parsed.data.message}`,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not send just now. Please email us directly." },
      { status: 500 }
    );
  }
}
