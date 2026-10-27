export type Industry = {
  slug: string;
  name: string;
  problem: string;
};

// TODO: owner must choose 3–4 focus industries with real experience.
// Intentionally left as placeholder entries — the UI renders an honest
// "to be confirmed" state until this is filled in.
export const industries: Industry[] = [];

export const industriesPlaceholderNote =
  "Focus industries are being confirmed. We work with startups, SMEs, and growing companies — tell us what systems you run today.";
