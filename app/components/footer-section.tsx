// Figma node: 1912:5355 + 2005:5093
// Two-column: left (signature + contact), right (social cards)

import { ExternalLink } from "lucide-react";
import { socialLinks } from "@/lib/portfolio-data";
import { XIcon, LinkedInIcon, GitHubIcon } from "@/app/components/icons";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  x: <XIcon />,
  linkedin: <LinkedInIcon />,
  github: <GitHubIcon />,
};

export function FooterSection() {
  return (
    <footer className="w-full border-t border-border min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center px-6 lg:px-[140px]">
        <div className="w-full max-w-[1060px] flex justify-between gap-8">
          {/* ── Left column ── */}
          <div className="flex flex-col justify-between self-stretch max-w-[360px]">
            <p className="font-medium text-[14px] text-muted tracking-[1.4px] uppercase">
              FIND ME
            </p>

            {/* Signature */}
            <div className="my-8">
              <img
                alt="Adrián Luna Díaz signature"
                src="/images/firma-adri.JPG"
                className="w-[265px] h-[88px] rounded-[24px] object-contain"
              />
            </div>

            {/* Footer text */}
            <div className="flex flex-col gap-4">
              <p className="font-sans text-[0.75rem] font-normal text-subtle leading-4">
                lunadiazadrian@gmail.com
              </p>
              <p className="font-sans text-[0.75rem] font-normal text-subtle leading-4">
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
                className="flex items-center gap-4 bg-white border border-border rounded-[12px] p-[17px] hover:border-divider transition-colors"
              >
                {/* Icon container */}
                <div className="size-12 bg-icon-bg border border-border-light rounded-[8px] flex items-center justify-center shrink-0 p-[1px]">
                  {SOCIAL_ICONS[link.iconType]}
                </div>

                {/* Handle */}
                <span className="text-[16px] text-black tracking-[0.16px] flex-1">
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
