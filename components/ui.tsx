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
    <div className={clsx("mx-auto w-full max-w-[1180px] px-5 sm:px-8 lg:px-12", className)}>
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
        "text-[13px] font-semibold tracking-[0.02em]",
        tone === "dark" ? "text-blue-soft" : "text-blue"
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
    <section id={id} className={clsx("py-20 sm:py-28 lg:py-32", className)}>
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
    "inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-7 py-3 text-[15px] font-semibold transition-colors duration-200";
  const styles = {
    primary: "bg-blue text-white hover:bg-[#2457d6]",
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
        "rounded-[20px] border border-line bg-white p-6 transition-colors duration-200 sm:p-7",
        className
      )}
    >
      {children}
    </div>
  );
}
