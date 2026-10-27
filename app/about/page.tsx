import type { Metadata } from "next";
import { ThreadDiagram } from "@/components/graphics";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { process } from "@/content/process";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "FuzeLoom Technologies — engineering-led integration of AI into the systems you already run.",
  alternates: { canonical: "/about" },
};

const expectations = [
  "A clear map of your current systems and workflow.",
  "Small, testable steps with direct feedback from your team.",
  "Careful handling of data and access.",
  "Documentation and a practical handover.",
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-glow bg-linen py-16 sm:py-24 lg:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <Eyebrow>About FuzeLoom</Eyebrow>
            <h1 className="h-display mt-6 max-w-[14ch] text-indigo">
              Engineering that <span className="font-serif font-normal italic text-blue">connects.</span>
            </h1>
            <p className="mt-7 max-w-[57ch] text-lg leading-relaxed text-slate">{site.positioning}</p>
            <p className="mt-6 max-w-[57ch] border-l-2 border-blue pl-5 leading-relaxed text-indigo">
              We understand the people, map the systems, and build connections that hold up in day-to-day use.
            </p>
          </div>
          <div className="overflow-hidden rounded-[22px] border border-indigo/10 shadow-xl shadow-indigo/10">
            <ThreadDiagram />
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <div className="text-center">
          <Eyebrow>Our approach</Eyebrow>
          <h2 className="heading-1 mt-4 text-indigo">How we work</h2>
          <p className="mx-auto mt-4 max-w-[55ch] text-slate">A clear path from understanding your current workflow to a system your team can use.</p>
        </div>
        <ol className="mt-14 grid gap-x-8 gap-y-10 border-t border-line pt-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {process.map((step, index) => (
            <li key={step.name} className="flex flex-col">
              <span className="font-display text-4xl font-semibold tracking-[-0.05em] text-blue">0{index + 1}</span>
              <h3 className="mt-5 font-display text-lg font-semibold text-indigo">{step.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.text}</p>
              <p className="mt-5 border-t border-line pt-4 text-xs font-medium leading-relaxed text-indigo">{step.delivers}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-indigo text-white">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <Eyebrow tone="dark">Working with us</Eyebrow>
            <h2 className="heading-1 mt-4">What you can expect</h2>
            <p className="mt-5 max-w-[42ch] leading-relaxed text-linen/75">Useful technology starts with a shared understanding of the work it needs to support.</p>
            <div className="mt-8"><Button href="/contact">Start a conversation <span aria-hidden="true">↗</span></Button></div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {expectations.map((expectation, index) => (
              <li key={expectation} className="min-h-40 rounded-[18px] border border-white/15 bg-white/5 p-6">
                <span className="font-display text-sm font-semibold text-blue-soft">0{index + 1}</span>
                <p className="mt-7 font-display text-lg font-medium leading-snug text-white">{expectation}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
