import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/Faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with FuzeLoom — tell us what systems you run today.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="heading-1 mt-4 text-indigo">
              Have a system that should work smarter?
            </h1>
            <p className="mt-4 max-w-[52ch] text-[17px]">
              Tell us what you&apos;re running today and what you want it to
              do. We&apos;ll suggest the right approach and next steps.
            </p>
            <div className="mt-6 rounded-[12px] border border-line bg-white p-5 text-[15px]">
              <p className="font-medium">What helps us reply faster</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-slate">
                <li>Systems you run (CRM, ERP, database, tools)</li>
                <li>One workflow that costs time today</li>
                <li>Who uses it and what “better” looks like</li>
              </ul>
            </div>
            <div className="mt-4 rounded-[12px] border border-line bg-white p-5 text-[15px]">
              <p className="font-medium">Direct email</p>
              <a
                href={`mailto:${site.email}`}
                className="text-indigo underline-offset-2 hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>
          <div className="rounded-[12px] border border-line bg-white p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Section>
      <Section className="border-t border-line bg-white/40">
        <Eyebrow>Before you write</Eyebrow>
        <h2 className="heading-2 mt-4 text-indigo">Common questions</h2>
        <div className="mt-6 max-w-[80ch]">
          <FaqList />
        </div>
      </Section>
    </>
  );
}
