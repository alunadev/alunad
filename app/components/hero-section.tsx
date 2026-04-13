// Figma node: 1912:5174
// Two-column layout: identity left, currently + expertise right
// Mobile/tablet: stacked (left above, right below)
// Desktop (lg+): side by side, proportional flex widths

import { MapPin } from "lucide-react";
import { MailIcon, XIcon, LinkedInIcon, GitHubIcon } from "@/app/components/icons";

const EXPERTISE_PILLS = [
  "Product Strategy",
  "AI-First",
  "UX/UI",
  "Monetization",
  "Customer Obsession",
  "Data-driven",
  "SAAS",
  "Product taste",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-white w-full min-h-screen flex items-center justify-center py-20 px-6 md:px-10 lg:px-[8.75rem]"
    >
      <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-[2.375rem] items-start w-full max-w-[1060px]">

        {/* ── Left column ── */}
        <div className="flex flex-col gap-6 items-start w-full lg:flex-[0_0_49%] lg:shrink-0">

          {/* Avatar */}
          <div className="relative size-[6rem] md:size-[6.75rem] lg:size-[7.5rem] rounded-[79px] shadow-[0px_1.587px_6.35px_0px_rgba(0,0,0,0.1)] overflow-hidden shrink-0">
            <img
              alt="Adrián Luna Díaz"
              src="/images/Foto-adri-santan.jpg"
              className="absolute h-[150%] w-full left-0 top-[-11%] object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="font-serif text-[2.5rem] leading-[2.5rem] md:text-[3rem] md:leading-[3rem] lg:text-[4rem] lg:leading-[4rem] text-black tracking-[0.04rem] w-full">
            Adrián
            <br />
            Luna Díaz
          </h1>

          {/* Bio */}
          <p className="text-black font-sans text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] font-normal leading-normal tracking-[0.0125rem] w-full">
            Industrial Engineer turned into Product Manager with 10 years of
            experience creating, launching, and scaling digital products.
          </p>

          {/* Contact row */}
          <div className="flex gap-8 md:gap-10 lg:gap-16 items-center">
            {/* Location */}
            <div className="flex gap-2 items-center">
              <MapPin className="size-5 lg:size-6 shrink-0" />
              <span className="text-black text-[1rem] tracking-[0.01rem] whitespace-nowrap">
                Madrid, Spain
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 lg:gap-4 items-center">
              <a
                href="mailto:lunadiazadrian@gmail.com"
                aria-label="Email"
                className="shrink-0"
              >
                <span data-platform="email"><MailIcon className="size-5 lg:size-6" /></span>
              </a>
              <a
                href="https://linkedin.com/in/adrian-luna-diaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="shrink-0"
              >
                <span data-platform="linkedin"><LinkedInIcon /></span>
              </a>
              <a
                href="https://github.com/alunadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="shrink-0"
              >
                <span data-platform="github"><GitHubIcon /></span>
              </a>
              <a
                href="https://x.com/adrianlunadiaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="shrink-0"
              >
                <span data-platform="x"><XIcon /></span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-6 items-start w-full pt-6 lg:pt-0 lg:flex-1 lg:self-stretch lg:justify-end">

          {/* Currently label */}
          <p className="font-sans font-medium text-[0.6875rem] md:text-[0.75rem] lg:text-[0.875rem] text-muted leading-[1.25rem] tracking-[0.0875rem] uppercase w-full">
            CURRENTLY
          </p>

          {/* Role card */}
          <div className="flex flex-col gap-4 items-start w-full">
            <div className="flex gap-2 items-center w-full">
              <img
                alt="LALIGA"
                src="/images/logo-laliga.png"
                className="size-5 lg:size-6 shrink-0 object-contain"
              />
              <span className="font-sans text-black text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] font-bold leading-normal tracking-[0.0125rem] whitespace-nowrap">
                Senior Product Manager
              </span>
              <span className="font-sans text-black text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] font-normal leading-normal tracking-[0.0125rem] whitespace-nowrap">
                @ LALIGA
              </span>
            </div>
            <p className="font-sans text-black text-[1rem] md:text-[1.125rem] lg:text-[1.25rem] font-normal leading-normal tracking-[0.0125rem] w-full">
              Leading the Official Products portfolio at LALIGA as Senior
              Product Manager, where I shape the product vision, align key
              stakeholders, and prioritize initiatives that enhance the
              experience of millions of fans.
            </p>
          </div>

          {/* Expertise label */}
          <p className="font-sans font-medium text-[0.6875rem] md:text-[0.75rem] lg:text-[0.875rem] text-muted leading-[1.25rem] tracking-[0.0875rem] uppercase w-full">
            EXPERTISE
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-x-3 gap-y-2 lg:gap-x-4 w-full">
            {EXPERTISE_PILLS.map((pill) => (
              <div
                key={pill}
                className="border border-black rounded-[52px] px-3 py-2 shrink-0"
              >
                <span className="text-black text-[0.6875rem] md:text-[0.75rem] tracking-[0.0075rem] whitespace-nowrap">
                  {pill}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
