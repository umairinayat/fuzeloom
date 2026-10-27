import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eyebrow, Section } from "@/components/ui";
import { industries } from "@/content/industries";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Industries",
  description: "Explore the sectors and workflows represented in FuzeLoom's project work.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <Section>
      <Eyebrow>Industries</Eyebrow>
      <h1 className="heading-1 mt-5 max-w-[18ch] text-indigo">Different sectors. Connected thinking.</h1>
      <p className="mt-5 max-w-[65ch] text-lg text-slate">
        The workflow is different in every field. These examples show how we have approached real problems across sectors.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {industries.map((industry) => {
          const project = work.find((item) => item.slug === industry.featuredSlug);
          if (!project) return null;
          return (
            <Link key={industry.slug} id={industry.slug} href={`/work/${project.slug}`} className="group grid scroll-mt-24 overflow-hidden rounded-[20px] border border-line bg-white sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[220px] bg-blue-pale">
                <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, 35vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="flex flex-col p-7">
                <h2 className="heading-3 text-indigo">{industry.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate">{industry.problem}</p>
                <span className="mt-auto pt-6 text-sm font-semibold text-blue">See {project.title} ↗</span>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
