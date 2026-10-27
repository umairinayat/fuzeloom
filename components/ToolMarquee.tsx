"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

type Tool = { name: string; logo: string };

export function ToolMarquee({ tools }: { tools: Tool[] }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="mt-5">
      <div className="tool-window">
        <div
          className={clsx("tool-track", paused && "is-paused")}
          style={{ animationDuration: `${tools.length * 3}s` }}
        >
          {[false, true].map((repeat) => (
            <ul
              key={String(repeat)}
              aria-hidden={repeat || undefined}
              className={clsx("flex shrink-0 gap-3 pr-3", repeat && "motion-reduce:hidden")}
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
      <div className="mt-5 text-center motion-reduce:hidden">
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? "Play tool list" : "Pause tool list"}
          className="inline-flex min-h-10 items-center rounded-full border border-line bg-white px-5 text-[13px] font-semibold text-indigo transition-colors hover:bg-blue-pale"
        >
          {paused ? "Play" : "Pause"}
        </button>
      </div>
    </div>
  );
}
