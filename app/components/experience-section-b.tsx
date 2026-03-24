"use client";

// Option B — Current layout + GSAP ScrollTrigger animations + Lenis smooth scroll
// Animations:
//  ① Separator line draws in (scaleX 0→1)
//  ② "Work" label parallax trail (y lags behind scroll)
//  ③ Project cards breathe in (opacity + y)
//  ④ Mockup panel float (y parallax inside the card)
//  ⑤ Link cards slide up with stagger

import { useEffect, useRef } from "react";
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

export function ExperienceSectionB() {
  const sectionRef = useRef<HTMLElement>(null);
  const separatorRef = useRef<HTMLDivElement>(null);
  const workLabelRef = useRef<HTMLParagraphElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mockupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const linkCardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ① Separator draws in
      if (separatorRef.current) {
        gsap.fromTo(
          separatorRef.current,
          { scaleX: 0, transformOrigin: "left" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: separatorRef.current,
              start: "top 90%",
            },
          }
        );
      }

      // ② "Work" label parallax trail
      if (workLabelRef.current) {
        gsap.to(workLabelRef.current, {
          y: -60,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5,
          },
        });
      }

      // ③ Project cards breathe in + ④ mockup float
      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        // Card breathes in
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );

        // Mockup panel floats (parallax inside card)
        const mockup = mockupRefs.current[i];
        if (mockup) {
          gsap.fromTo(
            mockup,
            { y: 14 },
            {
              y: -14,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        }
      });

      // ⑤ Link cards slide up with stagger
      linkCardRefs.current.forEach((linkCard) => {
        if (!linkCard) return;
        gsap.fromTo(
          linkCard,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: linkCard,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience-b" className="w-full">
      {/* Separator */}
      <div ref={separatorRef} className="w-full h-[2px] bg-[#f6f6f6]" />

      <div className="flex justify-center px-2 py-[80px]">
        <div className="w-full max-w-[1060px] flex gap-8">
          {/* ── Left column: label ── */}
          <div className="w-[260px] shrink-0 pt-1">
            <p
              ref={workLabelRef}
              className="font-medium text-[14px] text-[#9ca3af] tracking-[1.4px] uppercase"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Work
            </p>
          </div>

          {/* ── Right column: projects ── */}
          <div className="flex flex-col gap-16 flex-1">
            {featuredProjects.map((project, i) => (
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
                  <div
                    ref={(el) => { cardRefs.current[i] = el; }}
                    className="bg-[#f6f6f6] rounded-[16px] px-[48px] py-[48px]"
                  >
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-8">
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

                    {/* Mockup with parallax */}
                    <div
                      ref={(el) => { mockupRefs.current[i] = el; }}
                      className="w-full aspect-video rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] flex items-center justify-center overflow-hidden"
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
                      ref={(el) => {
                        const idx = featuredProjects.indexOf(project);
                        linkCardRefs.current[idx] = el;
                      }}
                      className="flex items-center gap-4 bg-white border border-[#f1f1f1] rounded-[12px] p-[21px] h-[90px] hover:border-[#e2e8f0] transition-colors"
                    >
                      <div className="size-12 bg-[#f9fafb] rounded-[12px] flex items-center justify-center shrink-0">
                        <img alt="" src={FIGMA_ICONS.smartphone} className="size-6" />
                      </div>
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
