import type { ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={clsx(
        "font-mono text-[12px] font-medium uppercase tracking-[0.18em]",
        tone === "dark" ? "text-amber" : "text-indigo"
      )}
    >
      {children}
    </p>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("py-16 sm:py-24 lg:py-28", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline-light" | "outline-dark";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-[8px] px-6 py-3 text-[16px] font-semibold transition-colors duration-200";
  const styles = {
    primary: "bg-amber text-ink hover:bg-amber-dark",
    secondary: "bg-indigo text-white hover:bg-indigo-dark",
    "outline-light":
      "border border-linen/40 text-linen hover:border-linen hover:bg-white/10",
    "outline-dark":
      "border border-indigo/30 text-indigo hover:border-indigo hover:bg-indigo/5",
  } as const;
  return (
    <Link href={href} className={clsx(base, styles[variant], className)}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "rounded-[12px] border border-line bg-white p-6 transition-colors duration-200 sm:p-7",
        className
      )}
    >
      {children}
    </div>
  );
}
