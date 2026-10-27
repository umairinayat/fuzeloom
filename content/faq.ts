export type Faq = {
  q: string;
  a: string;
};

// Original FAQ — answers describe our approach honestly, no invented claims.
export const faqs: Faq[] = [
  {
    q: "Do you build standalone chatbots?",
    a: "Only if it connects to your real systems. A chatbot that cannot read your data or trigger your workflows usually becomes another tab nobody opens. We start by mapping your CRM, database, and tools, then decide where AI actually helps.",
  },
  {
    q: "What do you need from us to start?",
    a: "A list of the systems you run today, who uses them, and one workflow that costs time. Access is read-only at first. The audit step produces a short plan before any build work begins.",
  },
  {
    q: "How do you handle our data and access?",
    a: "Least access by default, documented data flows, and no training on your private data without written agreement. Reviews note what we looked at and what we recommend changing.",
  },
  {
    q: "How long does a typical integration take?",
    a: "It depends on your systems, not on us. Small automation wired into one tool is weeks; multi-system work is phased so each increment is usable. The design step gives you a scope you can hold us to.",
  },
  {
    q: "What do we get at handover?",
    a: "Running code, architecture notes, how to operate and roll back, and a walkthrough with your team. If only we can run it, we have not finished.",
  },
  {
    q: "When are you not a fit?",
    a: "If you want twenty industries covered, a fixed-price promise before we have seen your systems, or logos and counters as proof — we are not that agency. We would rather decline than invent.",
  },
];
