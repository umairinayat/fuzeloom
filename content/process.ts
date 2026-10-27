export type ProcessStep = {
  name: string;
  text: string;
  delivers: string;
};

export const process: ProcessStep[] = [
  {
    name: "Audit",
    text: "We map the systems you already run — CRM, data, tools, and workflows — before suggesting anything new.",
    delivers: "Delivers: systems map + short recommendation.",
  },
  {
    name: "Design",
    text: "A focused plan that shows what will connect to what, and what success looks like.",
    delivers: "Delivers: scoped plan with acceptance checks.",
  },
  {
    name: "Build & Integrate",
    text: "We build in small increments, wired into your live systems from the start.",
    delivers: "Delivers: working increments + tests.",
  },
  {
    name: "Launch",
    text: "Careful rollout with your team, with docs and handover — not a handoff document alone.",
    delivers: "Delivers: rollout + docs + walkthrough.",
  },
  {
    name: "Support",
    text: "Ongoing help and improvements as your business changes.",
    delivers: "Delivers: fixes + small improvements.",
  },
];
