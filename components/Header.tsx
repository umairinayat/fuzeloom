"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LogoLockup } from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      const root = panelRef.current;
      if (!root) return;
      const items = Array.from(
        root.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
      ).filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    panelRef.current?.querySelector("a")?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open ]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-linen/95 backdrop-blur">
      <div className="mx-auto grid h-[76px] w-full max-w-[1280px] grid-cols-[1fr_auto] items-center px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <Link href="/" aria-label="FuzeLoom home" className="justify-self-start">
          <LogoLockup variant="dark" />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-line bg-white p-1.5 shadow-sm lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-[13px] font-medium text-slate transition-colors hover:bg-blue-pale hover:text-indigo"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden justify-self-end rounded-full bg-blue px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-[#2457d6] lg:inline-flex"
        >
          Let&apos;s collaborate <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-line bg-white text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="text-[22px] leading-none">
            {open ? "×" : "≡"}
          </span>
        </button>
      </div>
      {open && (
        <div
          id="mobile-menu"
          ref={panelRef}
          className="border-t border-line bg-linen px-5 pb-6 pt-3 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 text-[17px] font-medium text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-blue px-5 py-3 text-center text-[16px] font-semibold text-white hover:bg-[#2457d6]"
            >
              Start a conversation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
