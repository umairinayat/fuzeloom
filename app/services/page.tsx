import type { Metadata } from "next";
import Link from "next/link";
import { Card, Eyebrow, Section, Button } from "@/components/ui";
import { ServiceIcon } from "@/components/graphics";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI and automation, software engineering, cloud and data, security and consulting — integrated into the systems you already run.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <Section>
      <Eyebrow>Services</Eyebrow>
      <h1 className="h-1 mt-4 max-w-[22ch] text-indigo">
        Built into your business, not bolted on.
      </h1>
      <p className="mt-4 max-w-[68ch] text-[17px]">
        Four areas of work. Every engagement starts with an audit of what you
        already run, and ends with docs your team can keep.
      </p>
      <div className="mt-10 grid gap-6">
        {services.map((s) => (
          <Card key={s.slug} className="scroll-mt-24">
            <div id={s.slug} className="scroll-mt-24" />
            <div className="flex items-start gap-4">
              <span className="text-indigo" aria-hidden="true">
                <ServiceIcon slug={s.slug} />
              </span>
              <div>
                <h2 className="h-2 text-indigo">{s.title}</h2>
                <p className="mt-2 max-w-[68ch] text-[16px]">{s.description}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-[15px] text-slate">
                      <span aria-hidden="true" className="text-amber-dark">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 max-w-[72ch] rounded-[12px] border border-line bg-white p-6">
        <h2 className="h-3 text-indigo">When we are not a fit</h2>
        <p className="mt-2 text-[15px] text-slate">
          Fixed-price promises before we have seen your systems, twenty
          industries with no depth, or proof by logo wall. We decline those
          rather than invent.
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          <Button href="/contact" variant="secondary">
            Check fit on a call
          </Button>
          <Link
            href="/work"
            className="inline-flex items-center text-[15px] font-semibold text-indigo underline-offset-4 hover:underline"
          >
            How we show work →
          </Link>
        </div>
      </div>
    </Section>
  );
}
