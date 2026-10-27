// Temporary placeholder logo — original F built from interlocking strands.
// TODO: replace with final designer logo. Must stay readable at 16px.
export function LogoMark({
  variant = "dark",
  size = 32,
}: {
  variant?: "dark" | "light";
  size?: number;
}) {
  const main = variant === "dark" ? "#1E2A5A" : "#FAF8F4";
  const thread = "#F2A33A";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      role="img"
      aria-label="FuzeLoom logo mark"
    >
      {/* vertical strand */}
      <path
        d="M9 4 C9 4 7 10 7 16 C7 22 9 28 9 28"
        fill="none"
        stroke={main}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* top horizontal strand */}
      <path
        d="M9 8 C14 8 20 7 25 7"
        fill="none"
        stroke={main}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* amber thread weaving through */}
      <path
        d="M5 16 C12 14 18 18 27 15"
        fill="none"
        stroke={thread}
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* middle bar */}
      <path
        d="M9 16 C13 16 17 16 21 16"
        fill="none"
        stroke={main}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.92"
      />
    </svg>
  );
}

export function LogoLockup({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark variant={variant} size={30} />
      <span
        className={
          variant === "dark"
            ? "font-display text-[22px] font-semibold text-indigo"
            : "font-display text-[22px] font-semibold text-linen"
        }
        style={{ fontFamily: "var(--font-display)" }}
      >
        FuzeLoom
      </span>
    </span>
  );
}
