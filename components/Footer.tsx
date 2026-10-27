import Link from "next/link";
import { LogoLockup } from "./Logo";
import { site } from "@/content/site";
import { services } from "@/content/services";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-indigo text-linen">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <LogoLockup variant="light" />
            <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-linen/80">
              {site.positioning}
            </p>
            <p className="mt-4 font-mono text-[13px] tracking-wide text-amber">
              AI · SOFTWARE · INTEGRATION
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-linen/60">
              Pages
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {[
                ["Services", "/services"],
                ["Industries", "/industries"],
                ["Work", "/work"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-linen/90 hover:text-amber">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Services footer">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-linen/60">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-linen/90 hover:text-amber"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-linen/60">
              Contact
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-[15px] font-medium text-linen hover:text-amber"
            >
              {site.email}
            </a>
            <p className="mt-3 text-[14px] text-linen/70">
              {site.location}
              <br />
              {site.workingHours}
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-[14px] text-linen/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}
          </p>
          <p className="flex gap-5">
            <Link href="/privacy" className="hover:text-amber">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-amber">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-amber">
              FAQ
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
