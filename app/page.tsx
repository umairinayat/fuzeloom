import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Button, Container, Section } from "@/components/ui";
import { FaqList } from "@/components/Faq";
import { ToolMarquee } from "@/components/ToolMarquee";
import { IndustryIcon, ServiceScene } from "@/components/graphics";
import { industries } from "@/content/industries";
import { process } from "@/content/process";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { work } from "@/content/work";

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

const featured = work.filter((project) =>
  ["answerly", "sehat-guftagu", "legaledge"].includes(project.slug)
);

const tools = [
  { name: "Python", logo: "/brand/tools/python.svg" },
  { name: "PyTorch", logo: "/brand/tools/pytorch.svg" },
  { name: "TensorFlow", logo: "/brand/tools/tensorflow.svg" },
  { name: "scikit-learn", logo: "/brand/tools/scikit-learn.svg" },
  { name: "OpenCV", logo: "/brand/tools/opencv.svg" },
  { name: "YOLOv8", logo: "/brand/tools/yolov8.svg" },
  { name: "BoT-SORT", logo: "/brand/tools/bot-sort.svg" },
  { name: "Optuna", logo: "/brand/tools/optuna.svg" },
  { name: "Pandas", logo: "/brand/tools/pandas.svg" },
  { name: "LangChain", logo: "/brand/tools/langchain.svg" },
  { name: "LangGraph", logo: "/brand/tools/langgraph.svg" },
  { name: "CrewAI", logo: "/brand/tools/crewai.svg" },
  { name: "OpenAI", logo: "/brand/tools/openai.svg" },
  { name: "GPT-4", logo: "/brand/tools/openai.svg" },
  { name: "Gemini", logo: "/brand/tools/gemini.svg" },
  { name: "Groq", logo: "/brand/tools/groq.svg" },
  { name: "Ollama", logo: "/brand/tools/ollama.svg" },
  { name: "Hugging Face", logo: "/brand/tools/hugging-face.svg" },
  { name: "FAISS", logo: "/brand/tools/faiss.svg" },
  { name: "Pinecone", logo: "/brand/tools/pinecone.svg" },
  { name: "ChromaDB", logo: "/brand/tools/chromadb.svg" },
  { name: "Qdrant", logo: "/brand/tools/qdrant.svg" },
  { name: "Streamlit", logo: "/brand/tools/streamlit.svg" },
  { name: "Gradio", logo: "/brand/tools/gradio.svg" },
  { name: "ElevenLabs", logo: "/brand/tools/elevenlabs.svg" },
  { name: "Vapi.ai", logo: "/brand/tools/vapi.svg" },
  { name: "AWS Textract", logo: "/brand/tools/aws-textract.svg" },
];

const testimonials = [
  {
    quote: "MediBot AI drastically reduces hallucination risks and empowers our doctors to make faster, evidence-based decisions.",
    name: "MediBot AI Team",
    context: "Healthcare AI",
  },
  {
    quote: "This solution demonstrates the power of combining AI, automation, and integrations to streamline business operations.",
    name: "Smart Business Automation",
    context: "Customer support AI",
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="hero-glow relative overflow-hidden bg-linen">
        <Container className="relative flex flex-col items-center pb-20 pt-28 text-center sm:pb-28 sm:pt-36 lg:pt-40">
          <p className="rounded-full border border-blue/15 bg-white/80 px-4 py-2 text-sm font-medium text-blue shadow-sm">
            AI engineering & software integration
          </p>
          <h1 className="h-display mt-8 max-w-[15ch] text-indigo">
            Make your systems <span className="block font-serif font-normal italic tracking-[-0.06em] text-blue">work together.</span>
          </h1>
          <p className="mt-7 max-w-[60ch] text-lg leading-relaxed text-slate">
            We build AI, automation, and software that fit the tools your team already uses, from the first workflow map to a working system.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">Let&apos;s build together <span aria-hidden="true">↗</span></Button>
            <Link href="/work" className="text-link inline-flex px-3 py-3">Explore our work <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="mt-10 text-sm text-slate">{work.length} published project stories across AI, software, and automation</p>
        </Container>
      </section>

      <div className="border-y border-line bg-white py-8">
        <Container>
          <p className="text-center text-sm text-slate">Tools used across our published projects</p>
        </Container>
        <ToolMarquee tools={tools} />
      </div>

      <Section className="bg-linen">
        <div className="text-center">
          <h2 className="heading-1 text-indigo">Services</h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-slate">Four disciplines, connected around the work your business needs to do.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Link key={service.slug} href={`/services#${service.slug}`} className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-white transition-[border-color,box-shadow] duration-200 hover:border-blue/30 hover:shadow-lg hover:shadow-indigo/8">
              <div className="h-40 overflow-hidden border-b border-line bg-blue-pale/45 text-blue">
                <ServiceScene slug={service.slug} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em] text-indigo">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{service.short}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-blue">Explore service <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="border-y border-line bg-white">
        <div className="text-center">
          <h2 className="heading-1 text-indigo">Industries we serve</h2>
          <p className="mx-auto mt-4 max-w-[58ch] text-slate">Real projects across different sectors, each shaped around the people and systems involved.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries#${industry.slug}`} className="group flex min-h-28 items-center gap-4 rounded-[16px] border border-line bg-linen p-5 transition-[background-color,border-color,box-shadow] hover:border-blue/30 hover:bg-white hover:shadow-md hover:shadow-indigo/5">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl border border-blue/10 bg-white text-blue shadow-sm" aria-hidden="true"><IndustryIcon slug={industry.slug} /></span>
              <span className="min-w-0 flex-1 font-display text-base font-semibold text-indigo">{industry.name}</span>
              <span className="text-lg text-blue transition-transform group-hover:translate-x-0.5" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/industries" className="text-link inline-flex">Explore industries <span aria-hidden="true">↗</span></Link></div>
      </Section>

      <Section className="bg-linen">
        <h2 className="heading-1 text-center text-indigo">How we work</h2>
        <ol className="mt-14 grid gap-8 border-t border-line pt-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {process.map((step, index) => (
            <li key={step.name}>
              <span className="font-display text-4xl font-semibold tracking-[-0.05em] text-blue">0{index + 1}</span>
              <h3 className="mt-5 font-display text-lg font-semibold text-indigo">{step.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-y border-line bg-white">
        <h2 className="heading-1 text-center text-indigo">Case studies</h2>
        <p className="mx-auto mt-4 max-w-[60ch] text-center text-slate">A closer look at the problems, systems, and outcomes behind our work.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className="group overflow-hidden rounded-[18px] border border-line bg-linen transition-shadow hover:shadow-xl hover:shadow-indigo/10">
              <div className="relative aspect-[16/10] overflow-hidden bg-blue-pale">
                <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-blue">{project.category}</p>
                <h3 className="mt-2 font-display text-xl font-semibold text-indigo">{project.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">{project.summary}</p>
                <span className="mt-5 inline-flex text-sm font-semibold text-blue">Read case study <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/work" className="text-link inline-flex">View all {work.length} case studies <span aria-hidden="true">↗</span></Link></div>
      </Section>

      <Section className="bg-linen">
        <h2 className="heading-1 text-center text-indigo">From the people behind the projects</h2>
        <p className="mx-auto mt-4 max-w-[58ch] text-center text-slate">Feedback from teams behind our published projects.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="flex flex-col rounded-[18px] border border-line bg-white p-7">
              <p className="text-base leading-relaxed text-ink">“{item.quote}”</p>
              <footer className="mt-auto pt-7 text-sm">
                <p className="font-semibold text-indigo">{item.name}</p>
                <p className="mt-1 text-slate">{item.context}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line bg-white">
        <h2 className="heading-1 text-center text-indigo">Frequently asked questions</h2>
        <p className="mx-auto mt-4 max-w-[55ch] text-center text-slate">Clear answers before you start a project.</p>
        <div className="mx-auto mt-12 max-w-[820px]"><FaqList /></div>
      </Section>

      <section className="bg-indigo py-20 text-center text-white sm:py-28">
        <Container>
          <h2 className="heading-1">Ready to build?</h2>
          <p className="mx-auto mt-4 max-w-[48ch] text-linen/75">Let&apos;s turn your scattered systems into one useful workflow.</p>
          <div className="mt-8"><Button href="/contact">Start a conversation <span aria-hidden="true">↗</span></Button></div>
        </Container>
      </section>
    </>
  );
}
