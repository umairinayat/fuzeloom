import { faqs } from "@/content/faq";

export function FaqList({ compact = false }: { compact?: boolean }) {
  const items = compact ? faqs.slice(0, 4) : faqs;
  return (
    <div className="grid gap-3">
      {items.map((f) => (
        <details
          key={f.q}
          className="group rounded-[16px] border border-line bg-white px-6 py-5 open:shadow-[0_1px_0_var(--color-line)]"
        >
          <summary className="cursor-pointer list-none text-[16px] font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {f.q}
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-blue transition-transform group-open:rotate-45"
              >
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-[68ch] text-[15px] leading-relaxed text-slate">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
