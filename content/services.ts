export type ServicePillar = {
  slug: string;
  title: string;
  short: string;
  description: string;
  includes: string[];
};

export const services: ServicePillar[] = [
  {
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Agents and automation that work inside your current tools.",
    description:
      "AI agents, retrieval-based assistants, and process automation designed around your data and your workflows — not as a separate chatbot window.",
    includes: [
      "AI agents for internal operations",
      "RAG systems over your own documents",
      "LLM features inside existing products",
      "Business process automation",
    ],
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    short: "Custom software that fits how your team already works.",
    description:
      "Custom software, web and mobile apps, and SaaS builds scoped to a clear problem, integrated with the systems you already pay for.",
    includes: [
      "Custom internal tools",
      "Web and mobile applications",
      "SaaS product development",
      "API design and system integration",
    ],
  },
  {
    slug: "cloud-data",
    title: "Cloud & Data",
    short: "Infrastructure and data you can understand and maintain.",
    description:
      "Cloud setup, DevOps basics, and data pipelines that keep your systems reliable and your reporting honest — documented so your team can run them.",
    includes: [
      "Cloud infrastructure and DevOps",
      "Data engineering and pipelines",
      "Analytics and reporting setup",
      "Migration and clean-up of existing systems",
    ],
  },
  {
    slug: "security-consulting",
    title: "Security & Consulting",
    short: "Careful reviews and plain advice before you commit.",
    description:
      "Security-conscious development, reviews of what you already have, and practical guidance on what to build, buy, or leave alone.",
    includes: [
      "Security-conscious development",
      "Code and architecture reviews",
      "IT consulting",
      "Digital transformation planning",
    ],
  },
];
