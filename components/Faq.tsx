import { faqs } from "@/content/faq";

export function FaqList({ compact = false }: { compact?: boolean }) {
  const items = compact ? faqs.slice(0, 4) : faqs;
  return (
    <div className="grid gap-3">
      {items.map((f) => (
        <details
          key={f.q}
          className="group rounded-[12px] border border-line bg-white px-5 py-4 open:shadow-[0_1px_0_var(--color-line)]"
        >
          <summary className="cursor-pointer list-none text-[16px] font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="flex items-start justify-between gap-4">
              {f.q}
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] border border-line text-slate transition-transform group-open:rotate-45 group-open:text-indigo"
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
