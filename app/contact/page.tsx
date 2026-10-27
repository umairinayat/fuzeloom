import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { FaqList } from "@/components/Faq";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with FuzeLoom — tell us what systems you run today.",
  alternates: { canonical: "/contact" },
};

const prompts = [
  "The systems you run today",
  "One workflow that takes too much time",
  "Who uses it and what better would look like",
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-glow bg-linen py-16 sm:py-24 lg:py-28">
        <Container>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="h-display mt-5 max-w-[16ch] text-indigo">
            Let&apos;s make your systems <span className="font-serif font-normal italic text-blue">work better.</span>
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-slate">
            Tell us what you&apos;re running today and what you want it to do. We&apos;ll suggest the right approach and next steps.
          </p>
          <p className="mt-4 text-sm text-slate">Prefer email? <a href={`mailto:${site.email}`} className="font-semibold text-blue underline-offset-4 hover:underline">{site.email}</a></p>

          <div className="mt-12 grid items-start gap-6 md:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            <aside className="order-2 rounded-[22px] bg-indigo p-7 text-white md:order-1 lg:p-9">
              <p className="text-sm font-semibold text-blue-soft">A useful first note</p>
              <h2 className="heading-2 mt-4">What helps us reply faster</h2>
              <p className="mt-4 text-sm leading-relaxed text-linen/75">A rough description is enough. These details help us understand where to start.</p>
              <ol className="mt-8 space-y-0 border-t border-white/15">
                {prompts.map((prompt, index) => (
                  <li key={prompt} className="flex gap-4 border-b border-white/15 py-5">
                    <span className="font-display text-sm font-semibold text-blue-soft">0{index + 1}</span>
                    <span className="text-sm font-medium leading-relaxed">{prompt}</span>
                  </li>
                ))}
              </ol>
            </aside>

            <div className="order-1 rounded-[22px] border border-line bg-white p-6 shadow-lg shadow-indigo/5 md:order-2 sm:p-8 lg:p-10">
              <h2 className="heading-2 text-indigo">Tell us about your project</h2>
              <p className="mb-8 mt-3 text-sm text-slate">Share the problem in your own words. We&apos;ll follow up by email.</p>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <div className="text-center">
          <Eyebrow>Before you write</Eyebrow>
          <h2 className="heading-1 mt-4 text-indigo">Common questions</h2>
        </div>
        <div className="mx-auto mt-12 max-w-[820px]"><FaqList /></div>
      </Section>
    </>
  );
}
