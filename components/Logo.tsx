export function LogoLockup({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const accent = variant === "dark" ? "text-blue" : "text-blue-soft";
  return (
    <span className={variant === "dark"
      ? "inline-flex items-baseline font-display text-[25px] font-bold leading-none tracking-[-0.06em] text-indigo"
      : "inline-flex items-baseline font-display text-[25px] font-bold leading-none tracking-[-0.06em] text-linen"}>
      <span className="sr-only">FuzeLoom</span>
      <span aria-hidden="true">Fuze</span>
      <span aria-hidden="true" className={accent}>L</span>
      <svg aria-hidden="true" className={`mx-[-0.04em] h-[0.72em] w-[1.25em] self-center ${accent}`} viewBox="0 0 34 20" fill="none">
        <path d="M17 10C11.5 2.5 3 2.5 3 10S11.5 17.5 17 10C22.5 2.5 31 2.5 31 10S22.5 17.5 17 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span aria-hidden="true" className={accent}>m</span>
    </span>
  );
}
