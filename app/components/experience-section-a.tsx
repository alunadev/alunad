"use client";

// Option A — Sticky panel + collapsing list (Tanuja Shastri mechanic)
// Layout:
//  - Left (~42%): scrollable list of projects. Active item = expanded (title + desc + link card).
//    Inactive item = collapsed (title + period only, dimmed).
//  - Right (~54%): sticky panel fixed at top: 80px. Crossfades between project mockup cards.
// Scroll detection via GSAP ScrollTrigger onEnter/onLeave to set active project index.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { featuredProjects } from "@/lib/portfolio-data";

gsap.registerPlugin(ScrollTrigger);

const FIGMA_ICONS = {
  globe: "https://www.figma.com/api/mcp/asset/1f1087bf-f64e-470f-80ac-acb2ef56e6a0",
  externalLink: "https://www.figma.com/api/mcp/asset/a5562db2-0ea2-4c65-8d53-01fd1bea2a05",
  arrowRight: "https://www.figma.com/api/mcp/asset/b752e3d0-d889-423f-8732-8d5447d44d4e",
  smartphone: "https://www.figma.com/api/mcp/asset/5f46d665-176c-4272-96ae-c9b376fd572a",
};

function ProjectCard({ project }: { project: typeof featuredProjects[0] }) {
  return (
    <div
      className="bg-[#f6f6f6] rounded-[16px] px-[48px] py-[48px] w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-[12px] bg-white flex items-center justify-center overflow-hidden shrink-0">
            <img alt={project.company} src={project.logoSrc} className="size-8 object-contain" />
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
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#f9fafb] border border-[#f3f4f6] rounded-[8px] h-[48px] px-[17px]"
          style={{ fontFamily: "var(--font-sans)" }}
          onClick={(e) => e.stopPropagation()}
        >
          <img alt="" src={FIGMA_ICONS.globe} className="size-5" />
          <span className="text-[14px] text-black tracking-[0.14px]">{project.website}</span>
          <img alt="" src={FIGMA_ICONS.externalLink} className="size-4" />
        </a>
      </div>
      {/* Mockup */}
      <div
        className="w-full aspect-video rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center justify-center"
        style={{ backgroundColor: project.mockupBg }}
      >
        <img alt={project.company} src={project.logoSrc} className="h-16 object-contain opacity-40" />
      </div>
    </div>
  );
}

export function ExperienceSectionA() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Animate panel crossfade when active project changes
  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        opacity: i === activeIndex ? 1 : 0,
        duration: 0.5,
        ease: "power2.inOut",
        pointerEvents: i === activeIndex ? "auto" : "none",
      });
    });
  }, [activeIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ScrollTrigger per project item — detects which is the active one
      itemRefs.current.forEach((item, i) => {
        if (!item) return;

        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });

      // Section entrance: fade in the whole thing
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience-a" className="w-full">
      {/* Separator */}
      <div className="w-full h-[2px] bg-[#f6f6f6]" />

      <div className="flex justify-center px-2 py-[80px]">
        <div className="w-full max-w-[1060px] flex gap-8">

          {/* ── Left column: Work label + scrollable project list ── */}
          <div className="flex flex-col gap-0 w-[42%] shrink-0">
            <p
              className="font-medium text-[14px] text-[#9ca3af] tracking-[1.4px] uppercase mb-12"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Work
            </p>

            <div className="flex flex-col">
              {featuredProjects.map((project, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={project.slug}
                    ref={(el) => { itemRefs.current[i] = el; }}
                    className="flex gap-6 items-start border-t border-[#f1f1f1] py-10 cursor-default"
                    style={{
                      transition: "opacity 0.4s ease",
                      opacity: isActive ? 1 : 0.35,
                    }}
                  >
                    {/* Period */}
                    <p
                      className="font-medium text-[12px] text-[#9ca3af] tracking-[1.4px] uppercase w-[80px] shrink-0 text-right pt-[3px] whitespace-nowrap"
                      style={{ fontFamily: "var(--font-sans)" }}
                    >
                      {project.period}
                    </p>

                    {/* Text content */}
                    <div className="flex flex-col gap-3 flex-1 min-w-0">
                      {/* Company + role — always visible */}
                      <div>
                        <p
                          className="font-semibold text-[16px] text-black tracking-[0.16px] leading-snug"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {project.company}
                        </p>
                        <p
                          className="text-[13px] text-[#6b7280] tracking-[0.13px] mt-0.5"
                          style={{ fontFamily: "var(--font-sans)" }}
                        >
                          {project.role}
                        </p>
                      </div>

                      {/* Collapsible body — only visible when active */}
                      <div
                        style={{
                          display: "grid",
                          gridTemplateRows: isActive ? "1fr" : "0fr",
                          transition: "grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <div style={{ overflow: "hidden" }}>
                          <div
                            style={{
                              opacity: isActive ? 1 : 0,
                              transform: isActive ? "translateY(0)" : "translateY(8px)",
                              transition: "opacity 0.35s ease 0.1s, transform 0.35s ease 0.1s",
                            }}
                          >
                            {/* Link card */}
                            {project.linkCards.map((card) => (
                              <Link
                                key={card.slug}
                                href={`/case-study/${card.slug}`}
                                className="flex items-center gap-4 bg-white border border-[#f1f1f1] rounded-[12px] p-[16px] hover:border-[#e2e8f0] transition-colors mt-4"
                              >
                                <div className="size-10 bg-[#f9fafb] rounded-[10px] flex items-center justify-center shrink-0">
                                  <img alt="" src={FIGMA_ICONS.smartphone} className="size-5" />
                                </div>
                                <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                  <span
                                    className="font-bold text-[13px] text-[#111827] tracking-[0.13px] line-clamp-2"
                                    style={{ fontFamily: "var(--font-sans)" }}
                                  >
                                    {card.title}
                                  </span>
                                  <span
                                    className="text-[11px] text-[#6b7280] tracking-[0.11px]"
                                    style={{ fontFamily: "var(--font-sans)" }}
                                  >
                                    {card.subtitle}
                                  </span>
                                </div>
                                <img alt="" src={FIGMA_ICONS.arrowRight} className="size-5 shrink-0" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Right column: sticky project card ── */}
          <div className="flex-1 relative" style={{ minHeight: `${featuredProjects.length * 340}px` }}>
            <div
              ref={rightPanelRef}
              className="sticky"
              style={{ top: "80px" }}
            >
              {/* Stack all cards, only active one is opaque */}
              <div className="relative">
                {featuredProjects.map((project, i) => (
                  <div
                    key={project.slug}
                    ref={(el) => { cardRefs.current[i] = el; }}
                    style={{
                      position: i === 0 ? "relative" : "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      opacity: i === 0 ? 1 : 0,
                      pointerEvents: i === 0 ? "auto" : "none",
                    }}
                  >
                    <ProjectCard project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
