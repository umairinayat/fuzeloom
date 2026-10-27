import type { Metadata } from "next";
import { Card, Eyebrow, Section } from "@/components/ui";
import { process } from "@/content/process";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "FuzeLoom Technologies — engineering-led integration of AI into the systems you already run.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <Section>
      <Eyebrow>About</Eyebrow>
      <h1 className="h-1 mt-4 max-w-[24ch] text-indigo">
        Engineering-led, integration-first
      </h1>
      <p className="mt-4 max-w-[68ch] text-[17px]">{site.positioning}</p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-slate">
            Founder
          </p>
          <p className="mt-3 text-[17px] font-semibold">
            [Placeholder] Founder name, role
          </p>
          <p className="mt-2 text-[15px] text-slate">
            [Placeholder] Short bio, photo, and verified LinkedIn link go here.
            No invented team members.
          </p>
        </Card>
        <Card>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-slate">
            Location & hours
          </p>
          <p className="mt-3 text-[16px]">{site.location}</p>
          <p className="mt-1 text-[16px]">{site.workingHours}</p>
          <p className="mt-3 text-[15px] text-slate">
            We state working hours in our clients&apos; time zones so overlap
            is clear before a first call.
          </p>
        </Card>
      </div>

      <h2 className="h-2 mt-12 text-indigo">How we work</h2>
      <ol className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
        {process.map((s, i) => (
          <li
            key={s.name}
            className="rounded-[12px] border border-line bg-white p-5"
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-slate">
              {i + 1}
            </p>
            <p className="mt-1 font-semibold">{s.name}</p>
            <p className="mt-2 text-[14px] text-slate">{s.text}</p>
            <p className="mt-2 font-mono text-[12px] text-indigo/80">
              {s.delivers}
            </p>
          </li>
        ))}
      </ol>

      <h2 className="h-2 mt-12 text-indigo">What we won&apos;t do</h2>
      <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 text-[16px]">
        <li>No invented clients, testimonials, or counters.</li>
        <li>No stock photos presented as clients or team.</li>
        <li>No twenty-industry grid without real experience.</li>
        <li>No hype language — outcomes described plainly.</li>
      </ul>
    </Section>
  );
}
