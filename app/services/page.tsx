import type { Metadata } from "next";
import Link from "next/link";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { ServiceScene } from "@/components/graphics";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI and automation, software engineering, cloud and data, security and consulting — integrated into the systems you already run.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="hero-glow bg-linen py-16 sm:py-24 lg:py-28">
        <Container>
          <Eyebrow>Services</Eyebrow>
          <h1 className="h-display mt-5 max-w-[16ch] text-indigo">
            The right technology, <span className="font-serif font-normal italic text-blue">connected.</span>
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-slate">
            From AI and automation to software, cloud, and security, we build around the systems your team already runs.
          </p>
        </Container>
      </section>

      <Section className="bg-white">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <article key={service.slug} id={service.slug} className="flex scroll-mt-24 flex-col overflow-hidden rounded-[22px] border border-line bg-linen/50">
              <div className="flex h-52 items-center justify-center border-b border-line bg-blue-pale/45">
                <ServiceScene slug={service.slug} />
              </div>
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <span className="text-sm font-semibold text-blue">0{index + 1} / 04</span>
                <h2 className="heading-2 mt-4 text-indigo">{service.title}</h2>
                <p className="mt-4 max-w-[55ch] leading-relaxed text-slate">{service.description}</p>
                <h3 className="mt-7 border-t border-line pt-6 text-xs font-semibold uppercase tracking-[0.12em] text-indigo">What we build</h3>
                <ul className="mt-4 grid gap-x-6 gap-y-3 xl:grid-cols-2">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate">
                      <span aria-hidden="true" className="font-semibold text-blue">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-indigo py-20 text-center text-white sm:py-28">
        <Container>
          <h2 className="heading-1">Start with the system you have.</h2>
          <p className="mx-auto mt-4 max-w-[55ch] text-linen/75">Tell us which tools you use and where the work gets stuck. We&apos;ll map the opportunity before recommending a build.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <Button href="/contact">Talk about your workflow <span aria-hidden="true">↗</span></Button>
            <Link href="/work" className="text-sm font-semibold text-white underline-offset-4 hover:underline">View our work ↗</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
