export type Industry = {
  slug: string;
  name: string;
  problem: string;
  featuredSlug: string;
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    problem: "Patient access, clinical knowledge, and documents need to move through secure, usable workflows.",
    featuredSlug: "carelinx",
  },
  {
    slug: "saas",
    name: "SaaS",
    problem: "Support and sales teams need automation that stays connected to their products and customer data.",
    featuredSlug: "nexa-ai-voice-receptionist",
  },
  {
    slug: "finance",
    name: "Finance",
    problem: "Reporting becomes faster and more reliable when data flows and checks are built into the process.",
    featuredSlug: "automated-financial-reporting",
  },
  {
    slug: "agriculture",
    name: "Agriculture",
    problem: "Field observations and data can support earlier, clearer operational decisions.",
    featuredSlug: "charm-ai",
  },
  {
    slug: "real-estate",
    name: "Real estate",
    problem: "Search and inquiry experiences work better when they understand local context and client needs.",
    featuredSlug: "homii",
  },
  {
    slug: "education",
    name: "Education",
    problem: "Students need accurate answers and useful learning materials when staff are unavailable.",
    featuredSlug: "answerly",
  },
  {
    slug: "legal",
    name: "Legal",
    problem: "Dense contracts need faster review without losing context around risk and compliance.",
    featuredSlug: "legaledge",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    problem: "Threat monitoring improves when detection and classification connect to response workflows.",
    featuredSlug: "intrusion-detection-system",
  },
];
