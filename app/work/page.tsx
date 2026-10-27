import Link from "next/link";
import type { Metadata } from "next";
import { Button, Card, Eyebrow, Section } from "@/components/ui";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Real project write-ups from FuzeLoom — or an honest empty state until they are ready. No invented clients.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <Section>
      <Eyebrow>Work</Eyebrow>
      <h1 className="h-1 mt-4 text-indigo">Verifiable over impressive</h1>
      <p className="mt-4 max-w-[68ch] text-[17px]">
        Every project here is real. Internal builds are labeled as internal —
        never presented as client work. No stock photos as clients.
      </p>
      {work.length === 0 ? (
        <div className="mt-8 max-w-[72ch] rounded-[12px] border border-line bg-white p-7">
          <p className="text-[17px] font-semibold">
            Case studies are being prepared.
          </p>
          <p className="mt-2 text-[15px] text-slate">
            We won&apos;t invent logos, numbers, or testimonials to fill this
            page. If you want to see relevant experience, bring your systems to
            a call and we&apos;ll walk through comparable work honestly.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="secondary">
              Start a conversation
            </Button>
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {work.map((c) => (
            <Card key={c.slug}>
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-slate">
                {c.industry} · {c.year}
                {c.isInternalProject ? " · Internal project" : ""}
              </p>
              <h2 className="h-3 mt-2">
                <Link href={`/work/${c.slug}`} className="hover:underline">
                  {c.title}
                </Link>
              </h2>
              <p className="mt-2 text-[15px] text-slate">{c.problem}</p>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
