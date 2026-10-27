import cases from "./work-data.json";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  summary: string;
  overview: string;
  problem: string;
  problemPoints?: string[];
  approach: string;
  approachPoints?: string[];
  outcome: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  image: string;
  client?: string;
  timeline?: string;
  modules?: {
    title: string;
    description: string;
    bullets: string[];
    images: string[];
  }[];
};

export const work: CaseStudy[] = cases;
