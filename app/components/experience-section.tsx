// Figma node: 2005:5022
// Two-column grid: left label (25%), right project frames (75%)

import Link from "next/link";
import { featuredProjects } from "@/lib/portfolio-data";

const FIGMA_ICONS = {
  globe: "https://www.figma.com/api/mcp/asset/1f1087bf-f64e-470f-80ac-acb2ef56e6a0",
  externalLink: "https://www.figma.com/api/mcp/asset/a5562db2-0ea2-4c65-8d53-01fd1bea2a05",
  arrowRight: "https://www.figma.com/api/mcp/asset/b752e3d0-d889-423f-8732-8d5447d44d4e",
  smartphone: "https://www.figma.com/api/mcp/asset/5f46d665-176c-4272-96ae-c9b376fd572a",
};

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full">
      {/* Separator */}
      <div className="w-full h-[2px] bg-[#f6f6f6]" />

      <div className="flex justify-center px-2 py-[80px]">
        <div className="w-full max-w-[1060px] flex gap-8">
          {/* ── Left column: label ── */}
          <div className="w-[260px] shrink-0 pt-1">
            <p
              className="font-medium text-[14px] text-[#9ca3af] tracking-[1.4px] uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Work
            </p>
          </div>

          {/* ── Right column: projects ── */}
          <div className="flex flex-col gap-16 flex-1">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="flex gap-6 items-start">
                {/* Period */}
                <p
                  className="font-medium text-[14px] text-[#9ca3af] tracking-[1.4px] uppercase w-[100px] shrink-0 text-right pt-1 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {project.period}
                </p>

                {/* Project content */}
                <div className="flex flex-col gap-6 flex-1">
                  {/* Project card */}
                  <div className="bg-[#f6f6f6] rounded-[16px] px-[48px] py-[48px]">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-8">
                      {/* Company info */}
                      <div className="flex items-center gap-3">
                        <div className="size-12 rounded-[12px] bg-white flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            alt={project.company}
                            src={project.logoSrc}
                            className="size-8 object-contain"
                          />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span
                            className="font-semibold text-[16px] text-black tracking-[0.16px]"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {project.company}
                          </span>
                          <span
                            className="text-[14px] text-[#6b7280] tracking-[0.14px]"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {project.role}
                          </span>
                        </div>
                      </div>

                      {/* Website link */}
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#f9fafb] border border-[#f3f4f6] rounded-[8px] h-[48px] px-[17px]"
                        style={{ fontFamily: "var(--font-sans)" }}
                      >
                        <img alt="" src={FIGMA_ICONS.globe} className="size-5" />
                        <span className="text-[14px] text-black tracking-[0.14px]">
                          {project.website}
                        </span>
                        <img alt="" src={FIGMA_ICONS.externalLink} className="size-4" />
                      </a>
                    </div>

                    {/* Mockup placeholder */}
                    <div
                      className="w-full aspect-video rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center justify-center"
                      style={{ backgroundColor: project.mockupBg }}
                    >
                      <img
                        alt={project.company}
                        src={project.logoSrc}
                        className="h-16 object-contain opacity-40"
                      />
                    </div>
                  </div>

                  {/* Link cards */}
                  {project.linkCards.map((card) => (
                    <Link
                      key={card.slug}
                      href={`/case-study/${card.slug}`}
                      className="flex items-center gap-4 bg-white border border-[#f1f1f1] rounded-[12px] p-[21px] h-[90px] hover:border-[#e2e8f0] transition-colors"
                    >
                      {/* Icon container */}
                      <div className="size-12 bg-[#f9fafb] rounded-[12px] flex items-center justify-center shrink-0">
                        <img alt="" src={FIGMA_ICONS.smartphone} className="size-6" />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                        <span
                          className="font-bold text-[14px] text-[#111827] tracking-[0.14px] line-clamp-1"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {card.title}
                        </span>
                        <span
                          className="text-[12px] text-[#6b7280] tracking-[0.12px]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {card.subtitle}
                        </span>
                      </div>

                      {/* Arrow */}
                      <img alt="" src={FIGMA_ICONS.arrowRight} className="size-6 shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
