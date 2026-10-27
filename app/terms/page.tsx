import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service draft for FuzeLoom Technologies.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section>
      <div className="max-w-[72ch]">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="heading-1 mt-4 text-indigo">Terms of service</h1>
        <p className="mt-3 rounded-[8px] border border-amber/60 bg-amber/10 p-4 text-[15px] font-medium">
          DRAFT — for legal review. Do not treat as final advice.
        </p>
        <div className="mt-6 space-y-5 text-[16px] leading-relaxed">
          <p>
            This website describes the services of FuzeLoom Technologies.
            Engagements are governed by a separate written agreement.
          </p>
          <h2 className="heading-3 text-indigo">Content</h2>
          <p>
            Site content is provided for general information and may change.
            Case studies, when published, describe past work and do not promise
            specific results.
          </p>
          <h2 className="heading-3 text-indigo">Acceptable use</h2>
          <p>
            Do not misuse the contact form (spam, unlawful content). We may
            ignore or block abusive submissions.
          </p>
          <p>
            [Placeholder: add governing law, company registration, and contact
            address after legal review.]
          </p>
        </div>
      </div>
    </Section>
  );
}
