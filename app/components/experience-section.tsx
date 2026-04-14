"use client";

// Experience Section — Sticky card stacking mechanic (Tanuja Shastri style)
// This file owns ONLY the scroll/stacking animation logic.
// Card UI lives in ProjectCard (project-card.tsx).
// Figma node: 2074:5453

import { useEffect, useRef, type CSSProperties } from "react";
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
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const ctx = gsap.context(() => {
        // Stacking scale animation.
        // start: "top 70%" — starts later than before, leaving scroll room
        // for the crossfade to complete before Urbiotica begins to rise.
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
                start: "top 70%",
                end: "top top",
                scrub: true,
              },
            }
          );
        });

        // Mockup crossfade animation — only for cards with two frames.
        // trigger: card  →  fires based on the card's own natural scroll position.
        // start: "top top+=N"  →  fires exactly when the card reaches its sticky top (settled).
        // end: "+=20vh"  →  crossfade runs for 20vh of subsequent scroll.
        // Stacking starts at "top 70%" of nextCard, which fires after the crossfade window.
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const frame2 = card.querySelector<HTMLElement>("[data-mockup-frame='2']");
          if (!frame2) return;

          const stickyTop = BASE_TOP + i * STACK_GAP;

          gsap.fromTo(
            frame2,
            { opacity: 0 },
            {
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: `top top+=${stickyTop}`,
                end: "+=20vh",
                scrub: true,
              },
            }
          );
        });
      }, sectionRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const n = projects.length;

  return (
    <section ref={sectionRef} id="experience" className="w-full">
      <div className="flex justify-center px-6 pt-12 pb-16 md:px-10 md:pt-16 md:pb-20 lg:px-[8.75rem] lg:pt-20 lg:pb-[7.5rem]">
        <div className="w-full max-w-[1060px]">

          {/* EXPERIENCE label */}
          <p className="font-medium text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] text-muted tracking-[1.4px] uppercase mb-8 md:mb-10 lg:mb-12">
            Experience
          </p>

          {/* Stacking scroll container */}
          <div
            className="relative lg:[min-height:var(--scroll-h)]"
            style={{ "--scroll-h": `calc(${n - 1} * ${SCROLL_PER_CARD}vh)` } as CSSProperties}
          >
            {projects.map((project, i) => (
              <div
                key={project.slug}
                ref={(el) => { cardRefs.current[i] = el; }}
                className={`lg:sticky w-full rounded-[0.75rem] md:rounded-[1rem] lg:rounded-[1.25rem] overflow-hidden bg-white${i < projects.length - 1 ? " mb-10 md:mb-12 lg:mb-[4rem]" : ""}`}
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
