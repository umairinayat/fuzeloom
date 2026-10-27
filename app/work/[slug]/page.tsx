import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Eyebrow, Section } from "@/components/ui";
import { work } from "@/content/work";

export async function generateStaticParams() {
  if (work.length === 0) return [{ slug: "__empty__" }];
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.problem,
    alternates: { canonical: `/work/${item.slug}` },
  };
}

export default async function WorkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) notFound();
  return (
    <Section>
      <Eyebrow>
        {item.industry} · {item.year}
        {item.isInternalProject ? " · Internal project" : ""}
      </Eyebrow>
      <h1 className="h-1 mt-4 max-w-[24ch] text-indigo">{item.title}</h1>
      <p className="mt-3 text-[15px] text-slate">Client: {item.client}</p>
      <div className="mt-8 grid max-w-[72ch] gap-7 text-[16px] leading-relaxed">
        <div>
          <h2 className="h-3 text-indigo">Problem</h2>
          <p className="mt-2">{item.problem}</p>
        </div>
        <div>
          <h2 className="h-3 text-indigo">Approach</h2>
          <p className="mt-2">{item.approach}</p>
        </div>
        <div>
          <h2 className="h-3 text-indigo">Stack</h2>
          <p className="mt-2 font-mono text-[14px]">{item.stack.join(" · ")}</p>
        </div>
        <div>
          <h2 className="h-3 text-indigo">Outcome</h2>
          <p className="mt-2">{item.outcome}</p>
        </div>
      </div>
    </Section>
  );
}
