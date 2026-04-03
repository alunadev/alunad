// Figma node: 1912:5355 + 2005:5093
// Two-column: left (signature + contact), right (social cards)

import { ExternalLink } from "lucide-react";
import { socialLinks } from "@/lib/portfolio-data";

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

// GitHub icon inline SVG (octocat)
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

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  x: <XIcon />,
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
};

export function FooterSection() {
  return (
    <footer className="w-full border-t border-[#f1f1f1] min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center px-[140px]">
        <div className="w-full max-w-[1060px] flex justify-between gap-8">
          {/* ── Left column ── */}
          <div
            className="flex flex-col justify-between self-stretch max-w-[360px]"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            <p className="font-medium text-[14px] text-[#9ca3af] tracking-[1.4px] uppercase">
              FIND ME
            </p>

            {/* Signature */}
            <div className="my-8">
              <img
                alt="Adrián Luna Díaz signature"
                src="https://www.figma.com/api/mcp/asset/dd0a5ecd-20ce-4ecf-8102-173c95ae5776"
                className="w-[265px] h-[88px] rounded-[24px] object-contain"
              />
            </div>

            {/* Footer text */}
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[0.75rem] font-normal text-[#6B7280] leading-4">
                lunadiazadrian@gmail.com
              </p>
              <p className="font-sans text-[0.75rem] font-normal text-[#6B7280] leading-4">
                Based in Madrid, Spain
              </p>
            </div>
          </div>

          {/* ── Right column: social cards ── */}
          <div className="flex flex-col gap-3 flex-1 max-w-[640px]">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-[#f1f1f1] rounded-[12px] p-[17px] hover:border-[#e2e8f0] transition-colors"
              >
                {/* Icon container */}
                <div className="size-12 bg-[#f9fafb] border border-[#f3f4f6] rounded-[8px] flex items-center justify-center shrink-0 p-[1px]">
                  {SOCIAL_ICONS[link.iconType]}
                </div>

                {/* Handle */}
                <span
                  className="text-[16px] text-black tracking-[0.16px] flex-1"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {link.handle}
                </span>

                {/* External link */}
                <ExternalLink className="size-6 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
