// Figma node: 1912:5174
// Two-column layout: identity left, currently + expertise right

import { MapPin, Mail } from "lucide-react";

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        fill="#0A66C2"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="text-[#1B1F23]"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

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
      className="bg-white w-full min-h-screen flex items-center justify-center py-[5rem] px-[8.75rem]"
    >
      <div className="flex gap-2 items-start w-full max-w-[1060px]">
        {/* ── Left column ── */}
        <div className="flex flex-col gap-[1.5rem] items-start px-2 w-[521px] shrink-0">
          {/* Avatar */}
          <div className="relative size-[120px] rounded-[79px] shadow-[0px_1.587px_6.35px_0px_rgba(0,0,0,0.1)] overflow-hidden shrink-0">
            <img
              alt="Adrián Luna Díaz"
              src="/images/Foto-adri-santan.jpg"
              className="absolute h-[150%] w-full left-0 top-[-11%] object-cover"
            />
          </div>

          {/* Name */}
          <h1
            className="font-serif text-[4rem] text-black tracking-[0.04rem] leading-[4rem] w-[490px]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Adrián
            <br />
            Luna Díaz
          </h1>

          {/* Bio */}
          <p
            className="text-black font-sans text-[1.25rem] font-normal leading-normal tracking-[0.0125rem] w-[474px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Industrial Engineer turned into Product Manager with 10 years of
            experience creating, launching, and scaling digital products.
          </p>

          {/* Contact row */}
          <div className="flex gap-16 items-center">
            {/* Location */}
            <div className="flex gap-2 items-center">
              <MapPin className="size-6 shrink-0" />
              <span
                className="text-black text-[1rem] tracking-[0.01rem] whitespace-nowrap"
                style={{ fontFamily: "var(--font-sans)" }}
              >
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
        <div
          className="flex flex-col gap-[1.5rem] items-start justify-end self-stretch w-[501px] shrink-0"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {/* Currently label */}
          <p className="font-sans font-medium text-[0.875rem] text-[#9CA3AF] leading-[1.25rem] tracking-[0.0875rem] uppercase w-full">
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
          <p className="font-sans font-medium text-[0.875rem] text-[#9CA3AF] leading-[1.25rem] tracking-[0.0875rem] uppercase w-full">
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
