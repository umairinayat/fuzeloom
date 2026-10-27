export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  problem: string;
  approach: string;
  stack: string[];
  outcome: string;
  year: string;
  isInternalProject: boolean;
};

// TODO: add only real, verifiable projects. Internal/demo builds must keep
// isInternalProject: true so the UI labels them honestly.
// Empty on purpose — the site shows an honest empty state until filled.
export const work: CaseStudy[] = [];
