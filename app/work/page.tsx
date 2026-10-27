import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow, Section } from "@/components/ui";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore AI, software, data, and automation projects across FuzeLoom's work.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <Section>
      <Eyebrow>Selected projects</Eyebrow>
      <h1 className="heading-1 mt-5 max-w-[18ch] text-indigo">Work built for the real world.</h1>
      <p className="mt-5 max-w-[64ch] text-lg text-slate">
        Explore AI, software, data, and automation projects built around real workflows.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {work.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className="group overflow-hidden rounded-[20px] border border-line bg-white transition-shadow hover:shadow-xl hover:shadow-indigo/10">
            <div className="relative aspect-[16/10] overflow-hidden bg-blue-pale">
              <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
            </div>
            <div className="p-6">
              <p className="text-xs font-semibold text-blue">{project.industry === project.category ? project.category : `${project.industry} · ${project.category}`}</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.03em] text-indigo">{project.title}</h2>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate">{project.summary}</p>
              <span className="mt-6 inline-flex text-sm font-semibold text-blue">View project <span aria-hidden="true">↗</span></span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
