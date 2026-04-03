export type SocialLink = {
  platform: string;
  handle: string;
  url: string;
  iconType: "x" | "linkedin" | "github";
};

// ─── Social links (footer) ───────────────────────────────────────────────────

export const socialLinks: SocialLink[] = [
  {
    platform: "X",
    handle: "@adrianlunadiaz",
    url: "https://x.com/adrianlunadiaz",
    iconType: "x",
  },
  {
    platform: "LinkedIn",
    handle: "Adrián Luna Díaz",
    url: "https://linkedin.com/in/adrian-luna-diaz",
    iconType: "linkedin",
  },
  {
    platform: "GitHub",
    handle: "alunadev",
    url: "https://github.com/alunadev",
    iconType: "github",
  },
];
