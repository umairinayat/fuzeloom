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
      <h1 className="heading-1 mt-4 max-w-[22ch] text-indigo">
        The right technology, connected to your business.
      </h1>
      <p className="mt-4 max-w-[68ch] text-[17px]">
        From AI and automation to software, cloud, and security, we build around the systems your team already runs.
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
                <h2 className="heading-2 text-indigo">{s.title}</h2>
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

      <div className="mt-10 max-w-[72ch] rounded-[20px] border border-line bg-blue-pale p-7">
        <h2 className="heading-3 text-indigo">Start with the system you have</h2>
        <p className="mt-2 text-[15px] text-slate">
          Tell us which tools you use and where the work gets stuck. We&apos;ll map the opportunity before recommending a build.
        </p>
        <div className="mt-5 flex flex-wrap gap-4">
          <Button href="/contact" variant="secondary">
            Talk about your workflow
          </Button>
          <Link
            href="/work"
            className="inline-flex items-center text-[15px] font-semibold text-indigo underline-offset-4 hover:underline"
          >
            View our work →
          </Link>
        </div>
      </div>
    </Section>
  );
}
