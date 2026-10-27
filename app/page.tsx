import Link from "next/link";
import type { Metadata } from "next";
import { Button, Card, Container, Eyebrow, Section } from "@/components/ui";
import { ThreadDiagram, ServiceIcon } from "@/components/graphics";
import { FaqList } from "@/components/Faq";
import { services } from "@/content/services";
import { process } from "@/content/process";
import { industries, industriesPlaceholderNote } from "@/content/industries";
import { work } from "@/content/work";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "FuzeLoom Technologies — AI, woven into how you work",
  description: site.positioning,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.domain,
  slogan: site.tagline,
  description: site.description,
  email: site.email,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero */}
      <div className="relative overflow-hidden bg-indigo text-linen">
        <div
          aria-hidden="true"
          className="woven-grid-dark pointer-events-none absolute inset-0"
        />
        <Container className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <Eyebrow tone="dark">AI · Software · Integration</Eyebrow>
            <h1 className="h-display mt-5 text-linen">
              AI, woven into how you work.
            </h1>
            <p className="mt-5 max-w-[52ch] text-[17px] leading-relaxed text-linen/85 sm:text-[18px]">
              {site.positioning}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Start a conversation
              </Button>
              <Button href="/services" variant="outline-light">
                See what we build
              </Button>
            </div>
            <dl className="mt-8 grid max-w-[52ch] grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                ["No fake counters", "No invented clients"],
                ["Docs + handover", "Your team can run it"],
                ["Audit first", "Map before build"],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-[8px] border border-white/15 px-3 py-2.5"
                >
                  <dt className="text-[13px] font-semibold text-amber">{t}</dt>
                  <dd className="mt-0.5 text-[13px] text-linen/70">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rise">
            <ThreadDiagram />
          </div>
        </Container>
      </div>

      {/* 2. Problem */}
      <Section>
        <div className="max-w-[72ch]">
          <Eyebrow>The problem we solve</Eyebrow>
          <h2 className="h-1 mt-4 text-indigo">
            Most businesses don&apos;t need another tool.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed">
            Teams already pay for software that holds their work. New AI fails
            when it sits beside those systems instead of inside them.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                t: "Disconnected pilots",
                d: "Demos that never touch your real data or daily workflow.",
              },
              {
                t: "Copy-paste work",
                d: "Staff bridging the gap between systems by hand.",
              },
              {
                t: "Unmaintainable builds",
                d: "No docs, no handover, no one sure how it runs.",
              },
            ].map((x) => (
              <Card key={x.t}>
                <h3 className="h-3 text-ink">{x.t}</h3>
                <p className="mt-2 text-[15px] text-slate">{x.d}</p>
              </Card>
            ))}
          </ul>
        </div>
      </Section>

      {/* 3. Services */}
      <Section className="border-t border-line bg-white/40">
        <Eyebrow>Services</Eyebrow>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="h-1 text-indigo">Four threads, one fabric</h2>
          <Link
            href="/services"
            className="text-[15px] font-semibold text-indigo underline-offset-4 hover:underline"
          >
            All services →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card
              key={s.slug}
              className="flex flex-col transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="text-indigo" aria-hidden="true">
                <ServiceIcon slug={s.slug} />
              </span>
              <h3 className="h-3 mt-4">{s.title}</h3>
              <p className="mt-2 flex-1 text-[15px] text-slate">{s.short}</p>
              <Link
                href={`/services#${s.slug}`}
                className="mt-4 text-[15px] font-semibold text-indigo"
              >
                What&apos;s included →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* 4. How we work */}
      <Section>
        <Eyebrow>How we work</Eyebrow>
        <h2 className="h-1 mt-4 text-indigo">
          Start from your systems, not a blank page
        </h2>
        <ol className="mt-10 grid gap-0 lg:grid-cols-5">
          {process.map((step, i) => (
            <li
              key={step.name}
              className="relative border-l-2 border-amber/70 py-2 pl-6 lg:border-l-0 lg:border-t-2 lg:py-0 lg:pl-0 lg:pr-6 lg:pt-6"
            >
              <span
                aria-hidden="true"
                className="absolute -left-[9px] top-3 h-4 w-4 rounded-full border-2 border-amber bg-linen lg:-top-[9px] lg:left-0 lg:top-auto"
              />
              <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-slate">
                Step {i + 1}
              </p>
              <h3 className="h-3 mt-1 text-indigo">{step.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate">
                {step.text}
              </p>
              <p className="mt-2 font-mono text-[12px] tracking-wide text-indigo/80">
                {step.delivers}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* 5. Industries */}
      <Section className="border-t border-line bg-white/40">
        <Eyebrow>Industries</Eyebrow>
        <h2 className="h-1 mt-4 text-indigo">Focused, not generic</h2>
        {industries.length === 0 ? (
          <div className="mt-6 max-w-[68ch] rounded-[12px] border border-dashed border-slate/40 bg-linen p-6">
            <p className="text-[16px] font-medium text-ink">
              [Placeholder] Focus industries to be confirmed
            </p>
            <p className="mt-2 text-[15px] text-slate">
              {industriesPlaceholderNote}
            </p>
            <Link
              href="/industries"
              className="mt-4 inline-block text-[15px] font-semibold text-indigo"
            >
              How we choose focus →
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {industries.map((ind) => (
              <Card key={ind.slug}>
                <h3 className="h-3">{ind.name}</h3>
                <p className="mt-2 text-[15px] text-slate">{ind.problem}</p>
              </Card>
            ))}
          </div>
        )}
      </Section>

      {/* 6. Work */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Work</Eyebrow>
            <h2 className="h-1 mt-4 text-indigo">Verifiable over impressive</h2>
          </div>
          <Link
            href="/work"
            className="text-[15px] font-semibold text-indigo underline-offset-4 hover:underline"
          >
            All work →
          </Link>
        </div>
        {work.length === 0 ? (
          <div className="mt-6 max-w-[68ch] rounded-[12px] border border-line bg-white p-7">
            <p className="text-[17px] font-medium">
              Case studies are being prepared.
            </p>
            <p className="mt-2 text-[15px] text-slate">
              We don&apos;t show invented clients or stock photos as proof. Ask
              us about relevant projects on a call — we&apos;ll walk through
              real work and what we learned.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="secondary">
                Ask about relevant work
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {work.slice(0, 4).map((c) => (
              <Card key={c.slug}>
                <h3 className="h-3">{c.title}</h3>
                <p className="mt-2 text-[15px] text-slate">{c.problem}</p>
              </Card>
            ))}
          </div>
        )}
      </Section>

      {/* 7. Why */}
      <Section className="border-t border-line bg-white/40">
        <Eyebrow>Why FuzeLoom</Eyebrow>
        <h2 className="h-1 mt-4 text-indigo">Built into your business</h2>
        <p className="mt-4 max-w-[68ch] text-[16px] text-slate">
          No “trusted by 100+” counters, no stock photos as clients. What you
          can check: direct email, plain scope, docs with every handover, and
          internal builds labeled as internal.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "Integration-first",
              d: "We start by mapping your CRM, data, and tools — then fit AI into that picture.",
            },
            {
              t: "Engineering-led",
              d: "Small increments, tested against your live systems, with docs your team can keep.",
            },
            {
              t: "Security-conscious",
              d: "Least access, clear data handling, and honest notes on what we wouldn't build.",
            },
            {
              t: "Transparent",
              d: "Plain scope, plain pricing, and direct contact. No invented logos or counters.",
            },
          ].map((x) => (
            <Card key={x.t}>
              <span
                aria-hidden="true"
                className="block h-[3px] w-10 bg-amber"
              />
              <h3 className="h-3 mt-4">{x.t}</h3>
              <p className="mt-2 text-[15px] text-slate">{x.d}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="h-1 mt-4 text-indigo">Straight answers</h2>
            <p className="mt-4 max-w-[52ch] text-[16px] text-slate">
              The questions every integration project gets. If yours is not
              here, bring it to the first call.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-block text-[15px] font-semibold text-indigo underline-offset-4 hover:underline"
            >
              Ask your question →
            </Link>
          </div>
          <FaqList compact />
        </div>
      </Section>

      {/* 9. CTA */}
      <div className="bg-indigo text-linen">
        <Container className="relative overflow-hidden py-16 sm:py-20">
          <div
            aria-hidden="true"
            className="woven-grid-dark pointer-events-none absolute inset-0"
          />
          <div className="relative max-w-[68ch]">
            <h2 className="h-1 text-linen">
              Have a system that should work smarter? Let&apos;s talk.
            </h2>
            <p className="mt-4 text-[17px] text-linen/85">
              Tell us what you&apos;re running today and what you want it to
              do. We&apos;ll suggest the right approach and next steps.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/contact" variant="primary">
                Start a conversation
              </Button>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center text-[15px] font-medium text-linen/90 hover:text-amber"
              >
                {site.email}
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
