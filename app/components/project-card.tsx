// ProjectCard — single project card UI
// Figma node: 2074:5458 (project frame)
// Used by ExperienceSection inside the sticky stacking scroll mechanic.
// All layout changes to the card belong here — not in the section file.
//
// Token usage:
//   text-primary       → --color-primary   (#111827)
//   text-subtle        → --color-subtle    (#6b7280)
//   text-secondary     → --color-secondary (#374151)
//   text-muted         → --color-muted     (#9ca3af)
//   bg-icon-bg         → --color-icon-bg   (#f9fafb)
//   bg-[#315deb]  → --color-button-primary (#315deb)
//   border-border-light → --color-border-light (#f3f4f6)
//
// Font: inherited from html { font-family: var(--font-sans) } in globals.css
// No inline style={{ fontFamily }} needed anywhere in this file.

import Link from "next/link";
import { Globe, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  return (
    /*
      Two-column layout — Figma 1440px frame, our container is max-w-[1060px].
      Proportional splits (not fixed px):
        Left:  flex-[0_0_38%]  (~38% of content width)
        Right: flex-1          (~62% of content width)
      At < lg the columns stack vertically.
    */
    <div className="flex flex-col lg:flex-row gap-6 px-6 pt-6 pb-8 lg:px-[48px] lg:pt-[32px] lg:pb-[48px] items-start">

      {/* ── Left column — Figma node 2074:5459 ── */}
      {/* justify-between pins project-info top, buttons bottom (desktop only) */}
      <div className="w-full lg:flex-[0_0_38%] lg:self-stretch flex flex-col lg:justify-between gap-6">

        {/* Top group: project-info */}
        <div className="flex flex-col gap-6">

          {/* 1. Period */}
          <p className="font-medium text-[14px] text-muted tracking-[1.4px] uppercase">
            {project.period}
          </p>

          {/* 2. Logo + Company + Role */}
          <div className="flex items-center gap-4">
            {project.logoSrc && (
              <div className="size-12 rounded-[12px] bg-icon-bg flex items-center justify-center overflow-hidden shrink-0">
                <img
                  alt={project.company}
                  src={project.logoSrc}
                  className="size-8 object-contain"
                />
              </div>
            )}
            <div className="flex flex-col gap-0.5">
              <span className="font-bold text-[14px] text-primary">
                {project.company}
              </span>
              <span className="text-[12px] text-subtle">
                {project.role}
              </span>
            </div>
          </div>

          {/* 3. Description */}
          {project.description && (
            <p className="text-[18px] lg:text-[20px] text-primary tracking-[0.2px] leading-snug">
              {project.description}
            </p>
          )}

          {/* 4. Achievements — list-disc, same size as description */}
          {project.achievements.length > 0 && (
            <ul className="list-disc ms-[30px] flex flex-col gap-1">
              {project.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="text-[18px] lg:text-[20px] text-primary tracking-[0.2px] leading-snug"
                >
                  {achievement}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Bottom group: CTA buttons — Figma node 2077:6263 */}
        <div className="flex gap-6 mt-6 lg:mt-0">

          {/* Case Study — available state */}
          {project.caseStudy === "available" && (
            <div className="flex flex-[1_0_0] items-center">
              <Link
                href={`/case-study/${project.slug}`}
                className="flex flex-[1_0_0] items-center justify-between h-[48px] min-w-[176px] px-[17px] py-px bg-[#315deb] border border-border-light rounded-[8px]"
              >
                <span className="font-medium text-[16px] text-white min-w-[110px] leading-[24px]">
                  CASE STUDY
                </span>
                <ArrowUpRight className="size-6 shrink-0 text-white" />
              </Link>
            </div>
          )}

          {/* Case Study — not-ready state */}
          {project.caseStudy === "not-ready" && (
            <div className="flex flex-[1_0_0] items-center">
              <div className="relative group/cs flex-[1_0_0]">
                <div className="flex flex-[1_0_0] items-center justify-between h-[48px] min-w-[176px] px-[17px] py-px bg-[#315deb] border border-border-light rounded-[8px] w-full opacity-40 cursor-not-allowed select-none">
                  <span className="font-medium text-[16px] text-white min-w-[110px] leading-[24px]">
                    CASE STUDY
                  </span>
                  <ArrowUpRight className="size-6 shrink-0 text-white" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cs:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <span className="bg-black/80 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                    Coming soon
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Website link */}
          {project.websiteUrl && (
            <div className="flex flex-[1_0_0] items-center">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-[1_0_0] items-center justify-between h-[48px] min-w-[176px] px-[17px] py-px bg-icon-bg border border-border-light rounded-[8px]"
              >
                <Globe className="size-6 shrink-0 text-secondary" />
                <span className="font-medium text-[16px] text-secondary whitespace-nowrap leading-[24px]">
                  {project.website}
                </span>
                <ExternalLink className="size-6 shrink-0 text-secondary" />
              </a>
            </div>
          )}

        </div>
      </div>

      {/* ── Right column — Figma node 2074:5461 ── */}
      {/* flex-1 ≈ 62% of card width (proportional to Figma's 760px / ~1260px content area) */}
      {/* self-stretch makes it match the left column's full height */}
      <div className="w-full lg:flex-1 lg:self-stretch flex flex-col items-center">

        {/* Mockup background card — Figma node 2074:5462 */}
        {/* h-full fills the stretched column; image stays centered via justify-center */}
        {/* Figma: px-120 py-64 → proportionally scaled: lg:px-[80px] lg:py-[48px] */}
        <div
          className="w-full flex-1 rounded-[16px] px-4 py-8 lg:px-[16px] lg:py-[48px] overflow-clip flex flex-col items-start justify-center gap-6 bg-card-bg isolate"
        >
          {/* Mockup image — Figma node 2074:5478 */}
          {/* 3 states:
              1. mockupSrc → show image in framed aspect-square with shadow
              2. mockupSrc empty + logoSrc → show logo centered in framed aspect-square
              3. both empty → no inner frame; background color fills the column cleanly */}
          {project.mockupSrc && (
            <img
              alt={project.company}
              src={project.mockupSrc}
              className="w-full h-auto object-contain mix-blend-multiply"
            />
          )}
          {!project.mockupSrc && project.logoSrc && (
            <div className="w-full flex items-center justify-center py-12">
              <img
                alt={project.company}
                src={project.logoSrc}
                className="h-16 object-contain opacity-40"
              />
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
