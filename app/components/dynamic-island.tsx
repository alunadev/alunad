"use client";

// Figma node: 2016:6246
// Fixed position, appears when #hero exits the viewport

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";

const FIGMA_ICONS = {
  mail: "https://www.figma.com/api/mcp/asset/0833d33d-f653-4276-b4c9-ca7b1dda45e9",
};

export function DynamicIsland() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed top-[53px] left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-white border border-[#f1f1f1] rounded-[12px] p-[17px] w-[368px] flex items-center justify-between gap-3">
        {/* Avatar */}
        <div className="relative size-12 rounded-full shadow-[0px_1.587px_6.35px_0px_rgba(0,0,0,0.1)] overflow-hidden shrink-0">
          <img
            alt="Adrián Luna Díaz"
            src="/images/Foto-adri-santan.jpg"
            className="absolute h-[150%] w-full left-0 top-[-11%] object-cover"
          />
        </div>

        {/* Name */}
        <span
          className="font-sans text-black text-[1rem] font-normal leading-normal tracking-[0.01rem] flex-1"
        >
          Adrián Luna Díaz
        </span>

        {/* Action buttons */}
        <div className="flex gap-2 items-center shrink-0">
          {/* Mail */}
          <a
            href="mailto:lunadiazadrian@gmail.com"
            aria-label="Send email"
            className="size-12 flex items-center justify-center bg-[#f9fafb] border border-[#f3f4f6] rounded-[8px]"
          >
            <img alt="" src={FIGMA_ICONS.mail} className="size-6" />
          </a>

          {/* CV download */}
          <a
            href="/cv/adrian-luna-diaz.pdf"
            download
            aria-label="Download CV"
            className="size-12 flex items-center justify-center bg-[#f9fafb] border border-[#f3f4f6] rounded-[8px]"
          >
            <FileText className="size-6 text-black" />
          </a>
        </div>
      </div>
    </div>
  );
}
