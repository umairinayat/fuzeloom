import type { Metadata } from "next";
import { Card, Eyebrow, Section, Button } from "@/components/ui";
import { industries, industriesPlaceholderNote } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "FuzeLoom focuses on a small number of industries where integration work matters — not a list of twenty.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <Section>
      <Eyebrow>Industries</Eyebrow>
      <h1 className="h-1 mt-4 text-indigo">A few, done well</h1>
      <p className="mt-4 max-w-[68ch] text-[17px]">
        We deliberately avoid a grid of twenty industries. We take on work
        where we understand the systems involved and can verify the result.
      </p>
      {industries.length === 0 ? (
        <div className="mt-8 max-w-[72ch] rounded-[12px] border border-dashed border-slate/40 bg-white p-7">
          <p className="text-[17px] font-semibold">
            [Placeholder] Focus industries to be confirmed
          </p>
          <p className="mt-2 text-[15px] text-slate">
            {industriesPlaceholderNote}
          </p>
          <p className="mt-4 text-[15px] text-slate">
            Owner action: choose 3–4 industries with real experience, each with
            one line on the integration problem you solve there.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary">
              Ask if we fit your industry
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {industries.map((i) => (
            <Card key={i.slug}>
              <h2 className="h-3">{i.name}</h2>
              <p className="mt-2 text-[15px] text-slate">{i.problem}</p>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
