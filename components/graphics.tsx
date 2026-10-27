// Abstract weaving diagram: threads (CRM, Database, AI model, Your team)
// feeding into one strand. Pure SVG, no stock imagery.
// Colors come from CSS tokens so components never hardcode hex.
export function ThreadDiagram() {
  return (
    <svg
      viewBox="0 0 560 380"
      role="img"
      aria-label="Diagram showing threads labeled CRM, Database, AI model and Your team weaving into one strand"
      className="h-auto w-full"
    >
      <defs>
        <pattern id="weave" width="28" height="28" patternUnits="userSpaceOnUse">
          <path
            d="M28 0H0V28"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="560"
        height="380"
        rx="12"
        fill="var(--color-indigo-dark)"
      />
      <rect x="0" y="0" width="560" height="380" rx="12" fill="url(#weave)" />

      {[
        { y: 70, label: "CRM", amber: false },
        { y: 140, label: "Database", amber: false },
        { y: 210, label: "AI model", amber: true },
        { y: 280, label: "Your team", amber: false },
      ].map((t) => (
        <g key={t.label}>
          <text
            x="28"
            y={t.y - 12}
            fill={t.amber ? "var(--color-amber)" : "var(--color-linen)"}
            opacity="0.9"
            fontSize="13"
            fontFamily="IBM Plex Mono, monospace"
            letterSpacing="1.5"
          >
            {t.label.toUpperCase()}
          </text>
          <path
            d={`M24 ${t.y} C 160 ${t.y}, 220 ${190 - (t.y - 190) * 0.35}, 320 190 S 460 190, 520 190`}
            fill="none"
            stroke={t.amber ? "var(--color-amber)" : "var(--color-linen)"}
            strokeWidth={t.amber ? 3 : 2}
            strokeDasharray={t.amber ? "none" : "2 5"}
            strokeLinecap="round"
            opacity="0.95"
          />
          <circle
            cx="24"
            cy={t.y}
            r="5"
            fill={t.amber ? "var(--color-amber)" : "var(--color-linen)"}
          />
        </g>
      ))}

      {/* loom point */}
      <circle
        cx="320"
        cy="190"
        r="10"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="2.5"
      />
      <circle cx="320" cy="190" r="3.5" fill="var(--color-amber)" />
      <text
        x="336"
        y="196"
        fill="var(--color-linen)"
        fontSize="13"
        fontFamily="IBM Plex Mono, monospace"
        letterSpacing="1.2"
      >
        FUZELOOM
      </text>
      {/* single woven strand out */}
      <path
        d="M330 190 C 400 190, 450 190, 520 190"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text
        x="400"
        y="172"
        fill="var(--color-linen)"
        opacity="0.75"
        fontSize="12"
        fontFamily="IBM Plex Mono, monospace"
      >
        ONE WORKING SYSTEM
      </text>
    </svg>
  );
}

export function ServiceIcon({ slug }: { slug: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;
  const thread = "var(--color-amber-dark)";
  if (slug === "ai-automation")
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" {...common}>
        <path d="M4 17c3-1 4-5 6-8s4-5 6-4" />
        <path d="M4 12c3-1 5-4 8-5s5-2 8-1" stroke={thread} />
        <circle cx="19" cy="17" r="2.4" />
      </svg>
    );
  if (slug === "software-engineering")
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" {...common}>
        <path d="M8 6 3 12l5 6" />
        <path d="M16 6l5 6-5 6" />
        <path d="M13 4l-2 16" stroke={thread} />
      </svg>
    );
  if (slug === "cloud-data")
    return (
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" {...common}>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" stroke={thread} />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" {...common}>
      <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
      <path d="M9.5 12l2 2 3.5-4" stroke={thread} />
    </svg>
  );
}
