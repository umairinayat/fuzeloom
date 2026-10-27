import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/ui";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy draft for FuzeLoom Technologies.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="max-w-[72ch]">
        <Eyebrow>Legal</Eyebrow>
        <h1 className="h-1 mt-4 text-indigo">Privacy policy</h1>
        <p className="mt-3 rounded-[8px] border border-amber/60 bg-amber/10 p-4 text-[15px] font-medium">
          DRAFT — for legal review. Do not treat as final advice.
        </p>
        <div className="mt-6 space-y-5 text-[16px] leading-relaxed">
          <p>
            {site.legalName} ({site.domain}) collects only what is needed to
            respond to enquiries: your name, email, company (optional), and
            message content.
          </p>
          <h2 className="h-3 text-indigo">What we collect</h2>
          <p>
            Contact-form submissions and emails you send to {site.email}.
            We do not sell personal data and do not use third-party trackers
            beyond what is required to operate the site.
          </p>
          <h2 className="h-3 text-indigo">How we use it</h2>
          <p>
            To reply to your enquiry and, if you become a client, to deliver
            the agreed work. We retain enquiries only as long as needed for
            that purpose.
          </p>
          <h2 className="h-3 text-indigo">Your rights</h2>
          <p>
            You may request access, correction, or deletion of your data by
            emailing {site.email}. [Placeholder: add data-controller address
            and registration details after legal review.]
          </p>
        </div>
      </div>
    </Section>
  );
}
