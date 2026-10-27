import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/ui";
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
      <h1 className="heading-1 mt-4 max-w-[24ch] text-indigo">
        Engineering-led, integration-first
      </h1>
      <p className="mt-4 max-w-[68ch] text-[17px]">{site.positioning}</p>

      <div className="mt-10 max-w-[72ch] border-l-2 border-blue pl-6 text-xl leading-relaxed text-slate">
        We work from the inside out: understand the people, map the systems, and build connections that hold up in day-to-day use.
      </div>

      <h2 className="heading-2 mt-12 text-indigo">How we work</h2>
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

      <h2 className="heading-2 mt-12 text-indigo">What you can expect</h2>
      <ul className="mt-4 max-w-[68ch] list-disc space-y-2 pl-5 text-[16px]">
        <li>A clear map of your current systems and workflow.</li>
        <li>Small, testable steps with direct feedback from your team.</li>
        <li>Careful handling of data and access.</li>
        <li>Documentation and a practical handover.</li>
      </ul>
    </Section>
  );
}
