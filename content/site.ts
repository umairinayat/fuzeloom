export const site = {
  brandName: "FuzeLoom",
  legalName: "FuzeLoom Technologies",
  domain: "https://fuzeloom.tech",
  tagline: "AI, woven into how you work.",
  positioning:
    "FuzeLoom connects AI, automation, and software into the systems your business already runs, so new technology works with your team instead of beside it.",
  description:
    "FuzeLoom connects AI, automation, and software into the systems your business already runs — CRM, ERP, databases, and internal tools.",
  email: "contact@fuzeloom.tech",
  // TODO: fill location, timezone, working hours.
  location: "TODO: location + time zone",
  workingHours: "TODO: working hours + client overlap",
  responseTime: null as string | null, // TODO: only set if you can keep the promise
  socials: [] as { label: string; href: string }[], // TODO: add only verified links
  // TODO: company registration details for footer/legal
  registration: "TODO: company registration details",
} as const;

export type Site = typeof site;
