"use client";

// Experience Section — Sticky card stacking mechanic (Tanuja Shastri style)
// This file owns ONLY the scroll/stacking animation logic.
// Card UI lives in ProjectCard (project-card.tsx).
// Figma node: 2074:5453

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/lib/content";
import { ProjectCard } from "@/app/components/project-card";

gsap.registerPlugin(ScrollTrigger);

const BASE_TOP = 80;         // px from viewport top when a card is pinned
const STACK_GAP = 20;        // peek offset between stacked cards
const SCROLL_PER_CARD = 100; // vh of scroll before next card fully covers

type Props = {
  projects: Project[];
};

export function ExperienceSection({ projects }: Props) {
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

          {/* EXPERIENCE label */}
          <p className="font-medium text-[24px] text-muted tracking-[1.4px] uppercase mb-12">
            Experience
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
                className={`sticky w-full rounded-[20px] overflow-hidden bg-white${i < projects.length - 1 ? " mb-[64px]" : ""}`}
                style={{
                  top: `${BASE_TOP + i * STACK_GAP}px`,
                  zIndex: i + 1,
                  boxShadow: "0 4px 32px 0 rgba(0,0,0,0.08)",
                  transformOrigin: "top center",
                }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
