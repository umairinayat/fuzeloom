import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Eyebrow, Section } from "@/components/ui";
import { work } from "@/content/work";

export async function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((project) => project.slug === slug);
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.summary,
    alternates: { canonical: `/work/${item.slug}` },
  };
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = work.find((project) => project.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Section className="pb-12 sm:pb-16">
        <Link href="/work" className="text-link">← All projects</Link>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <Eyebrow>{item.industry === item.category ? item.category : `${item.industry} · ${item.category}`}</Eyebrow>
            <h1 className="heading-1 mt-5 text-indigo">{item.title}</h1>
            <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-slate">{item.summary}</p>
          </div>
          {(item.client || item.timeline) && (
            <div className="border-t border-line pt-5 text-sm text-slate lg:border-l lg:border-t-0 lg:pl-8">
              {item.client && <p>Project: {item.client}</p>}
              {item.timeline && <p className={item.client ? "mt-2" : undefined}>Timeline: {item.timeline}</p>}
            </div>
          )}
        </div>
      </Section>

      <Container>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[24px] bg-blue-pale">
          <Image src={item.image} alt={`${item.title} project preview`} fill preload sizes="(max-width: 1280px) 100vw, 1200px" className="object-contain" />
        </div>
      </Container>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>The project</Eyebrow>
            <h2 className="heading-2 mt-4 text-indigo">The challenge and what we built.</h2>
            {item.metrics.length > 0 && (
              <div className="mt-8 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
                {item.metrics.map((metric) => (
                  <div key={metric.label}>
                    <p className="font-display text-3xl font-semibold text-blue">{metric.value}</p>
                    <p className="mt-1 text-sm text-slate">{metric.label}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-10">
            <div><h3 className="heading-3 text-indigo">Context</h3><p className="mt-3 leading-relaxed text-slate">{item.overview}</p></div>
            <div>
              <h3 className="heading-3 text-indigo">The problem</h3>
              {item.problemPoints ? <ul className="mt-4 list-disc space-y-2 pl-5 text-slate">{item.problemPoints.map((point) => <li key={point}>{point}</li>)}</ul> : <p className="mt-3 leading-relaxed text-slate">{item.problem}</p>}
            </div>
            <div>
              <h3 className="heading-3 text-indigo">Our approach</h3>
              {item.approachPoints ? <ul className="mt-4 list-disc space-y-2 pl-5 text-slate">{item.approachPoints.map((point) => <li key={point}>{point}</li>)}</ul> : <p className="mt-3 leading-relaxed text-slate">{item.approach}</p>}
            </div>
            <div><h3 className="heading-3 text-indigo">Outcome</h3><p className="mt-3 leading-relaxed text-slate">{item.outcome}</p></div>
            <div><h3 className="heading-3 text-indigo">Built with</h3><p className="mt-3 text-slate">{item.stack.join(" · ")}</p></div>
          </div>
        </div>
      </Section>

      {item.modules && item.modules.length > 0 && (
        <Section className="border-t border-line bg-white">
          <Eyebrow>Inside the project</Eyebrow>
          <h2 className="heading-1 mt-5 text-indigo">The work in detail.</h2>
          <div className="mt-12 space-y-16">
            {item.modules.map((module, index) => (
              <section key={module.title} className="grid gap-8 border-t border-line pt-10 lg:grid-cols-2 lg:gap-16">
                <div>
                  <p className="text-sm font-semibold text-blue">0{index + 1}</p>
                  <h3 className="heading-2 mt-3 text-indigo">{module.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate">{module.description}</p>
                  {module.bullets.length > 0 && <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate">{module.bullets.map((point) => <li key={point}>{point}</li>)}</ul>}
                </div>
                <div className="grid gap-4">
                  {module.images.map((image, imageIndex) => (
                    <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-blue-pale">
                      <Image src={image} alt={`${item.title}: ${module.title} preview ${imageIndex + 1}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Section>
      )}

      <section className="bg-blue py-20 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-8">
          <h2 className="heading-2 max-w-[20ch]">Have a project like this in mind?</h2>
          <Link href="/contact" className="rounded-full bg-white px-7 py-3 font-semibold text-indigo hover:bg-blue-pale">Let&apos;s talk ↗</Link>
        </Container>
      </section>
    </>
  );
}
