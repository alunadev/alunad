"use client";

// Experience Section — Sticky card stacking mechanic (Tanuja Shastri style)
// One unified card per project. No separate peek strip. No divider.
// STACK_GAP is calibrated so the logo row is the dominant visual when buried.
// Figma left-column order: period → logo+company+role → description → buttons.
// Figma node: 2074:5453

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

const BASE_TOP = 80;          // px from viewport top when a card is pinned
const STACK_GAP = 20;         // minimal peek — nothing readable when buried
const SCROLL_PER_CARD = 100;  // vh of scroll before next card fully covers

type Props = {
  projects: Project[];
};

export function ExperienceSectionA({ projects }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        const nextCard = cardRefs.current[i + 1];
        if (!card || !nextCard) return;

        gsap.fromTo(
          card,
          { scale: 1 },
          {
            scale: 0.96,
            ease: "none",
            scrollTrigger: {
              trigger: nextCard,
              start: "top 90%",
              end: "top top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const n = projects.length;

  return (
    <section ref={sectionRef} id="experience" className="w-full">
      {/* Separator */}
      <div className="w-full h-[2px] bg-[#f6f6f6]" />

      <div className="flex justify-center px-2 pt-[80px] pb-[120px]">
        <div className="w-full max-w-[1060px]">

          {/* WORK label */}
          <p
            className="font-medium text-[24px] text-[#9ca3af] tracking-[1.4px] uppercase mb-12"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Work
          </p>

          {/* Stacking scroll container */}
          <div
            className="relative"
            style={{ minHeight: `calc(${n} * ${SCROLL_PER_CARD}vh)` }}
          >
            {projects.map((project, i) => (
              <div
                key={project.slug}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`sticky w-full bg-white rounded-[20px] overflow-hidden${i < projects.length - 1 ? " mb-[64px]" : ""}`}
                style={{
                  top: `${BASE_TOP + i * STACK_GAP}px`,
                  zIndex: i + 1,
                  boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)",
                  transformOrigin: "top center",
                }}
              >
                {/* ── Single unified content block (matches Figma 2074:5458) ── */}
                <div className="flex gap-8 px-[48px] pt-[32px] pb-[48px] items-start">

                  {/* Left column */}
                  <div className="w-[38%] shrink-0 flex flex-col gap-6">

                    {/* 1. Period */}
                    <p
                      className="font-medium text-[14px] text-[#9ca3af] tracking-[1.4px] uppercase"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {project.period}
                    </p>

                    {/* 2. Logo + Company + Role */}
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-[12px] bg-[#f9fafb] flex items-center justify-center overflow-hidden shrink-0">
                        {project.logoSrc && (
                          <img
                            alt={project.company}
                            src={project.logoSrc}
                            className="size-8 object-contain"
                          />
                        )}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span
                          className="font-bold text-[14px] text-[#111827] tracking-[0.14px]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {project.company}
                        </span>
                        <span
                          className="text-[12px] text-[#6b7280] tracking-[0.12px]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {project.role}
                        </span>
                      </div>
                    </div>

                    {/* 3. Description + Achievements */}
                    {(project.description || project.achievements.length > 0) && (
                      <div className="flex flex-col gap-4">
                        {project.description && (
                          <p
                            className="text-[20px] text-black tracking-[0.2px] leading-snug"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            {project.description}
                          </p>
                        )}
                        {project.achievements.length > 0 && (
                          <ul className="flex flex-col gap-1.5">
                            {project.achievements.map((achievement) => (
                              <li
                                key={achievement}
                                className="flex items-start gap-2 text-[14px] text-[#6b7280] tracking-[0.14px]"
                                style={{ fontFamily: "var(--font-sans)" }}
                              >
                                <span className="mt-[5px] size-1.5 rounded-full bg-[#d1d5db] shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}

                    {/* 4. CTA buttons */}
                    <div className="flex gap-4">
                      {/* Case Study button — 3 states */}
                      {project.caseStudy === "available" && (
                        <Link
                          href={`/case-study/${project.slug}`}
                          className="flex items-center justify-between gap-2 bg-[#315deb] text-white h-[48px] rounded-[8px] flex-1 px-[17px]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          <span className="font-medium text-[16px]">Case Study</span>
                          <ArrowUpRight className="size-6 shrink-0" />
                        </Link>
                      )}

                      {project.caseStudy === "not-ready" && (
                        <div className="relative group/cs flex-1">
                          <div
                            className="flex items-center justify-between gap-2 bg-[#315deb] text-white h-[48px] rounded-[8px] w-full px-[17px] opacity-40 cursor-not-allowed select-none"
                            style={{ fontFamily: "var(--font-sans)" }}
                          >
                            <span className="font-medium text-[16px]">Case Study</span>
                            <ArrowUpRight className="size-6 shrink-0" />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cs:opacity-100 transition-opacity duration-200 pointer-events-none">
                            <span className="bg-black/80 text-white text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
                              Coming soon
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Website link — only when a URL exists */}
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between gap-2 bg-[#f9fafb] border border-[#f3f4f6] text-[#374151] h-[48px] rounded-[8px] flex-1 px-[17px]"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          <Globe className="size-6 shrink-0" />
                          <span className="font-medium text-[16px]">{project.website}</span>
                          <ExternalLink className="size-5 shrink-0" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right column — Mockup */}
                  <div className="flex-1">
                    <div
                      className="w-full rounded-[16px] px-[80px] py-[48px] overflow-hidden flex items-center justify-center"
                      style={{ backgroundColor: "#f6f6f6" }}
                    >
                      {project.mockupSrc ? (
                        <img
                          alt={project.company}
                          src={project.mockupSrc}
                          className="w-full rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] object-cover"
                        />
                      ) : (
                        <div
                          className="w-full aspect-video rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center justify-center"
                          style={{ backgroundColor: project.mockupBg }}
                        >
                          {project.logoSrc && (
                            <img
                              alt={project.company}
                              src={project.logoSrc}
                              className="h-16 object-contain opacity-40"
                            />
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
