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
            d={`M24 ${t.y} H130 C 205 ${t.y}, 250 190, 320 190`}
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
        x="320"
        y="228"
        textAnchor="middle"
        fill="var(--color-linen)"
        fontSize="13"
        fontFamily="IBM Plex Mono, monospace"
        letterSpacing="1.2"
      >
        FUZELOOM
      </text>
      {/* single woven strand out */}
      <path
        d="M330 190 H520"
        fill="none"
        stroke="var(--color-amber)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text
        x="390"
        y="165"
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

export function ServiceScene({ slug }: { slug: string }) {
  const line = "#B6C9F2";
  const blue = "#4B6DE8";

  if (slug === "ai-automation") return (
    <svg viewBox="0 0 320 170" className="h-full w-full" aria-hidden="true">
      <path d="M63 48 132 79M68 128l64-36m56-4 68-46m-68 50 68 37" fill="none" stroke={line} strokeWidth="2" strokeDasharray="4 5" />
      <rect x="116" y="58" width="88" height="64" rx="16" fill="white" stroke={line} />
      <text x="160" y="99" textAnchor="middle" fill={blue} fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" letterSpacing="-2">AI</text>
      <circle cx="63" cy="48" r="19" fill="white" stroke={line} /><path d="M55 48h16m-8-8v16" stroke={blue} strokeWidth="2" strokeLinecap="round" />
      <rect x="35" y="113" width="52" height="30" rx="8" fill="white" stroke={line} /><path d="M48 128h26" stroke={blue} strokeWidth="2" strokeLinecap="round" />
      <rect x="247" y="25" width="43" height="32" rx="8" fill="white" stroke={line} /><circle cx="268" cy="41" r="6" fill="#DDE8FF" stroke={blue} />
      <circle cx="267" cy="130" r="18" fill="white" stroke={line} /><path d="m259 130 6 6 11-13" fill="none" stroke={blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="160" cy="90" r="62" fill="none" stroke={line} opacity=".45" />
    </svg>
  );
  if (slug === "software-engineering") return (
    <svg viewBox="0 0 320 170" className="h-full w-full" aria-hidden="true">
      <rect x="52" y="31" width="195" height="111" rx="11" fill="white" stroke={line} />
      <path d="M52 56h195" stroke={line} /><circle cx="68" cy="44" r="3" fill={blue} /><circle cx="80" cy="44" r="3" fill={line} /><circle cx="92" cy="44" r="3" fill={line} />
      <path d="m90 81-10 10 10 10m38-20 10 10-10 10m-16-26-9 32" fill="none" stroke={blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M159 80h55m-55 15h38m-38 15h48" stroke={line} strokeWidth="5" strokeLinecap="round" />
      <rect x="218" y="72" width="58" height="75" rx="9" fill="#F6F9FF" stroke={line} /><path d="M233 91h28m-28 12h20m-20 12h28" stroke={blue} strokeWidth="3" strokeLinecap="round" opacity=".8" />
      <circle cx="60" cy="133" r="16" fill="#DDE8FF" /><path d="m54 133 4 4 8-9" fill="none" stroke={blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  if (slug === "cloud-data") return (
    <svg viewBox="0 0 320 170" className="h-full w-full" aria-hidden="true">
      <path d="M103 82h52m24 0h37" stroke={line} strokeWidth="2" strokeDasharray="4 5" /><path d="m207 76 9 6-9 6" fill="none" stroke={blue} strokeWidth="2" />
      <rect x="45" y="45" width="74" height="83" rx="12" fill="white" stroke={line} /><ellipse cx="82" cy="64" rx="23" ry="8" fill="#DDE8FF" stroke={blue} /><path d="M59 64v40c0 11 46 11 46 0V64M59 84c0 11 46 11 46 0" fill="none" stroke={blue} strokeWidth="2" />
      <rect x="215" y="47" width="68" height="77" rx="12" fill="white" stroke={line} /><path d="M231 88c-9 0-9-12 1-13 2-13 21-16 26-3 12-2 17 15 4 16z" fill="#DDE8FF" stroke={blue} strokeWidth="2" />
      <path d="M234 103h30m-30 8h20" stroke={line} strokeWidth="3" strokeLinecap="round" />
      <circle cx="166" cy="82" r="17" fill="white" stroke={line} /><path d="m160 82 5 5 9-11" fill="none" stroke={blue} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  return (
    <svg viewBox="0 0 320 170" className="h-full w-full" aria-hidden="true">
      <circle cx="160" cy="86" r="63" fill="none" stroke={line} strokeDasharray="3 5" /><circle cx="160" cy="86" r="46" fill="white" stroke={line} />
      <path d="m160 53 27 10v20c0 21-15 32-27 38-12-6-27-17-27-38V63z" fill="#DDE8FF" stroke={blue} strokeWidth="2.5" /><path d="m148 84 9 9 17-19" fill="none" stroke={blue} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="42" y="39" width="55" height="30" rx="8" fill="white" stroke={line} /><path d="M53 54h30" stroke={blue} strokeWidth="2" strokeLinecap="round" />
      <rect x="226" y="101" width="55" height="30" rx="8" fill="white" stroke={line} /><path d="m239 116 5 5 9-10m6 5h10" fill="none" stroke={blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m96 55 24 12m79 35 27 14" stroke={line} strokeWidth="2" strokeDasharray="4 5" />
    </svg>
  );
}

export function IndustryIcon({ slug }: { slug: string }) {
  const paths: Record<string, React.ReactNode> = {
    healthcare: <><path d="M12 21s-8-4.9-8-10.5A4.5 4.5 0 0 1 12 7.7a4.5 4.5 0 0 1 8 2.8C20 16.1 12 21 12 21Z" /><path d="M12 9v6m-3-3h6" /></>,
    saas: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13h8m-8 3h5" /></>,
    finance: <><path d="M4 20h16M6 16v-4m6 4V8m6 8V5" /><path d="m5 9 5-3 4 2 5-5" /></>,
    agriculture: <><path d="M12 21v-9M12 15C5 15 4 9 4 5c6 0 10 2 10 8M12 17c7 0 8-5 8-9-5 0-8 2-8 7" /></>,
    "real-estate": <><path d="M3 20h18M5 20V9l7-5 7 5v11M9 20v-6h6v6M8 10h.01M16 10h.01" /></>,
    education: <><path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1ZM12 5v15" /><path d="M6 8h3m6 0h3" /></>,
    legal: <><path d="M12 3v17M5 7h14M4 20h16M6 7l-3 7h6L6 7Zm12 0-3 7h6l-3-7Z" /></>,
    cybersecurity: <><path d="m12 2 8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  };
  return <svg viewBox="0 0 24 24" width="27" height="27" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[slug]}</svg>;
}
