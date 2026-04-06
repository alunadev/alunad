// Figma node: 1912:5174
// Two-column layout: identity left, currently + expertise right

import { MapPin, Mail } from "lucide-react";
import { XIcon, LinkedInIcon, GitHubIcon } from "@/app/components/icons";

const EXPERTISE_PILLS = [
  "Product Management",
  "AI",
  "UX/UI",
  "Monetization",
  "Customer Obsession",
  "KPIS",
  "SAAS",
  "Product taste",
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative bg-white w-full min-h-screen flex items-center justify-center py-[5rem] px-6 lg:px-[8.75rem]"
    >
      <div className="flex flex-col lg:flex-row gap-2 items-start w-full max-w-[1060px]">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-[1.5rem] items-start px-2 w-full lg:w-[521px] shrink-0">
          {/* Avatar */}
          <div className="relative size-[120px] rounded-[79px] shadow-[0px_1.587px_6.35px_0px_rgba(0,0,0,0.1)] overflow-hidden shrink-0">
            <img
              alt="Adrián Luna Díaz"
              src="/images/Foto-adri-santan.jpg"
              className="absolute h-[150%] w-full left-0 top-[-11%] object-cover"
            />
          </div>

          {/* Name */}
          <h1 className="font-serif text-[4rem] text-black tracking-[0.04rem] leading-[4rem] w-full">
            Adrián
            <br />
            Luna Díaz
          </h1>

          {/* Bio */}
          <p className="text-black font-sans text-[1.25rem] font-normal leading-normal tracking-[0.0125rem] w-full">
            Industrial Engineer turned into Product Manager with 10 years of
            experience creating, launching, and scaling digital products.
          </p>

          {/* Contact row */}
          <div className="flex gap-16 items-center">
            {/* Location */}
            <div className="flex gap-2 items-center">
              <MapPin className="size-6 shrink-0" />
              <span className="text-black text-[1rem] tracking-[0.01rem] whitespace-nowrap">
                Madrid, Spain
              </span>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 items-center">
              <a
                href="mailto:lunadiazadrian@gmail.com"
                aria-label="Email"
                className="shrink-0"
              >
                <Mail className="size-6" />
              </a>
              <a
                href="https://linkedin.com/in/adrian-luna-diaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="shrink-0"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com/alunadev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="shrink-0"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://x.com/adrianlunadiaz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="shrink-0"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="flex flex-col gap-[1.5rem] items-start justify-end self-stretch w-full lg:w-[501px] shrink-0">
          {/* Currently label */}
          <p className="font-sans font-medium text-[0.875rem] text-muted leading-[1.25rem] tracking-[0.0875rem] uppercase w-full">
            CURRENTLY
          </p>

          {/* Role card */}
          <div className="flex flex-col gap-[1rem] items-start w-full">
            <div className="flex gap-2 items-center w-full">
              <img
                alt="LALIGA"
                src="/images/logo-laliga.png"
                className="size-6 shrink-0 object-contain"
              />
              <span className="font-sans text-black text-[1.25rem] font-bold leading-normal tracking-[0.0125rem] whitespace-nowrap">
                Senior Product Manager
              </span>
              <span className="font-sans text-black text-[1.25rem] font-normal leading-normal tracking-[0.0125rem] whitespace-nowrap">
                @ LALIGA
              </span>
            </div>
            <p className="font-sans text-black text-[1.25rem] font-normal leading-normal tracking-[0.0125rem] w-full">
              Leading the Official Products portfolio at LALIGA as Senior
              Product Manager, where I shape the product vision, align key
              stakeholders, and prioritize initiatives that enhance the
              experience of millions of fans.
            </p>
          </div>

          {/* Expertise label */}
          <p className="font-sans font-medium text-[0.875rem] text-muted leading-[1.25rem] tracking-[0.0875rem] uppercase w-full">
            EXPERTISE
          </p>

          {/* Pills */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 w-full">
            {EXPERTISE_PILLS.map((pill) => (
              <div
                key={pill}
                className="border border-black rounded-[52px] px-3 py-2 shrink-0"
              >
                <span className="text-black text-[0.75rem] tracking-[0.0075rem] whitespace-nowrap">
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
