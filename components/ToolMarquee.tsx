import Image from "next/image";

type Tool = { name: string; logo: string };

export function ToolMarquee({ tools }: { tools: Tool[] }) {
  return (
    <div className="mt-5">
      <div className="tool-window" role="region" aria-label="Technology logos; focus to pause scrolling" tabIndex={0}>
        <div
          className="tool-track"
          style={{ animationDuration: `${tools.length * 3}s` }}
        >
          {[false, true].map((repeat) => (
            <ul
              key={String(repeat)}
              aria-hidden={repeat || undefined}
              className={`flex shrink-0 gap-3 pr-3${repeat ? " motion-reduce:hidden" : ""}`}
            >
              {tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-linen py-2.5 pl-3 pr-5 font-display text-[15px] font-semibold text-indigo"
                >
                  <Image src={tool.logo} alt="" width={22} height={22} />
                  {tool.name}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
