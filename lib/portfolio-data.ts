export type LinkCard = {
  title: string;
  subtitle: string;
  slug: string;
};

export type FeaturedProject = {
  slug: string;
  period: string;
  company: string;
  role: string;
  website: string;
  websiteUrl: string;
  logoSrc: string;
  mockupBg: string;
  linkCards: LinkCard[];
};

export type ImpactRow = {
  metric: string;
  result: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  role: string;
  company: string;
  period: string;
  tags: string[];
  pullQuote?: string;
  problem: string;
  approach: string[];
  impact: ImpactRow[];
  tools: string[];
};

export type SocialLink = {
  platform: string;
  handle: string;
  url: string;
  iconType: "x" | "linkedin" | "github";
};

// ─── Featured projects (Experience section) ──────────────────────────────────

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "laliga-official-app",
    period: "2021 — Now",
    company: "LALIGA Official App",
    role: "Senior Product Manager",
    website: "laliga.com",
    websiteUrl: "https://laliga.com",
    logoSrc: "/images/logo-laliga.png",
    mockupBg: "#143d69",
    linkCards: [
      {
        title:
          "LALIGA Official App relaunch from scratch + LALIGA digital Ecosystem rebranding",
        subtitle: "Case Study",
        slug: "laliga-official-app",
      },
    ],
  },
  {
    slug: "laliga-fantasy",
    period: "2021 — Now",
    company: "LALIGA Fantasy",
    role: "Senior Product Manager",
    website: "laliga.com",
    websiteUrl: "https://laliga.com",
    logoSrc: "/images/logo-laliga.png",
    mockupBg: "#143d69",
    linkCards: [
      {
        title:
          "LALIGA Fantasy monetization: Subscription and premium features launch",
        subtitle: "Case Study",
        slug: "laliga-fantasy",
      },
    ],
  },
];

// ─── Case studies ────────────────────────────────────────────────────────────

export const caseStudies: Record<string, CaseStudy> = {
  "laliga-official-app": {
    slug: "laliga-official-app",
    title: "LALIGA Official App",
    role: "Senior Product Manager",
    company: "LALIGA",
    period: "2022 — Present",
    tags: ["Consumer App", "AI", "Retention", "Rebranding"],
    problem:
      "The LALIGA app had fragmented UX and generic, non-personalized content. Fan engagement peaked only on matchdays and dropped sharply — D7 retention was low and content consumption was passive. Fans had no reason to return between games.",
    approach: [
      "Discovery: user research + Amplitude funnel analysis to identify post-matchday drop-off points",
      "Full UX redesign with a personalization architecture at its core",
      "AI integration: WSC Sports API → automated personalized highlight clips in a stories/moments format",
      "Led digital ecosystem rebranding (App + Web + Fantasy) for full brand coherence",
      "Coordinated 2 dev squads (18 engineers) + 3 designers",
      "Led MILIGA loyalty area and LALIGA Live web-app (India & MENA pilot markets)",
    ],
    impact: [
      { metric: "D7 retention", result: "+20%" },
      { metric: "D21 retention", result: "+14%" },
      { metric: "Sessions per user", result: "+70%" },
      { metric: "AI-generated clips / season", result: "260,000+" },
      { metric: "Rebranding scope", result: "App · Web · Fantasy" },
    ],
    tools: [
      "Amplitude",
      "Jira",
      "Figma",
      "PowerBI",
      "WSC Sports",
      "Google Analytics",
      "Optimizely",
      "Mixpanel",
    ],
  },

  "laliga-fantasy": {
    slug: "laliga-fantasy",
    title: "LALIGA Fantasy",
    role: "Senior Product Manager",
    company: "LALIGA",
    period: "2021 — Present",
    tags: ["Monetization", "PLG", "Growth", "Freemium"],
    problem:
      "LALIGA Fantasy had no sustainable monetization model. The product was entirely free, with no pricing strategy, no premium tier, and no conversion funnel. Revenue was minimal and there was no clear path to monetize an engaged user base.",
    approach: [
      "Designed PLG-based freemium model: free core gameplay + premium features + monthly subscription",
      "Defined pricing, packaging, and positioning from scratch",
      "Built contextualized conversion flows triggered at key engagement moments within the app",
      "Ran iterative A/B tests on paywall copy, pricing tiers, and placement (Optimizely)",
      "Collaborated with Design, Dev, Growth, and Marketing teams on end-to-end implementation",
    ],
    impact: [
      { metric: "Premium purchases", result: "+325% over two seasons" },
      { metric: "ARPU", result: "Doubled YoY" },
      { metric: "Contextualized conversion flows", result: "22% of total premium sales" },
      { metric: "Model sustainability", result: "Confirmed via cohort analysis" },
    ],
    tools: ["Optimizely", "Amplitude", "Figma", "Jira", "Google Optimize"],
  },

  travelie: {
    slug: "travelie",
    title: "Traveliè",
    role: "Co-Founder & CPO",
    company: "Personal project",
    period: "2020 — 2022",
    tags: ["0-to-1", "Consumer App", "Discovery", "Startup"],
    pullQuote:
      "Building Traveliè is how I became a Product Manager. As a traveler, I was frustrated missing the hidden gems only locals know. That frustration became a product. And the process of validating it from scratch — research, discovery, MVP, UX design — showed me where I truly wanted to be.",
    problem:
      "86% of travelers feel they miss interesting places on trips. 68% feel they've missed nearby spots they would have loved. Travel apps surface popular, overrated destinations — not the places that make a trip unforgettable.",
    approach: [
      "Market validation: surveys + qualitative interviews to size and confirm the problem",
      "Product strategy and roadmap from zero to functional prototype",
      "Full UX/UI design in Figma — no dedicated designer on the team",
      "Business model, SWOT analysis, competitive positioning map",
      "Social channel testing: SEMrush + Google Search Console",
    ],
    impact: [
      { metric: "Core problem", result: "Validated with research (86% / 68% insight)" },
      { metric: "Prototype", result: "Shipped aligned with MVP scope" },
      { metric: "Career impact", result: "Led directly to formal PM transition" },
    ],
    tools: ["Figma", "Jira", "Notion", "SEMrush", "Google Search Console"],
  },

  "cuatro-jugadores": {
    slug: "cuatro-jugadores",
    title: "Cuatro Jugadores de Padel",
    role: "Creator & Writer",
    company: "Personal project",
    period: "2021 — Present",
    tags: ["Content", "Newsletter", "No-Code", "Side Project"],
    problem:
      "A bi-weekly newsletter delivering four actionable padel improvement tips every Thursday. Built entirely with no-code tools and run solo since November 2021.",
    approach: [
      "Content format: 4 tips per issue, structured for quick, practical consumption",
      "Distribution: Substack (newsletter delivery)",
      "Landing page: Carrd",
      "Planning & docs: Notion",
      "Consistent publishing cadence — every two weeks, no breaks since 2021",
    ],
    impact: [
      { metric: "Active since", result: "November 2021" },
      { metric: "Frequency", result: "Every 2 weeks" },
      { metric: "Built with", result: "Zero code, 100% no-code tools" },
    ],
    tools: ["Substack", "Carrd", "Notion"],
  },

  urbiotica: {
    slug: "urbiotica",
    title: "Urbiotica",
    role: "Product Manager — First PM hire",
    company: "Urbiotica",
    period: "Feb 2021 — Oct 2021",
    tags: ["IoT SaaS", "B2B & B2C", "Discovery", "0-to-1"],
    problem:
      "Onboarding was slow and error-prone: connecting physical IoT parking sensors to the SaaS platform required manual, fragile steps that frustrated installation teams and generated client complaints.",
    approach: [
      "Fieldwork discovery: went on-site with installation teams to observe friction in real conditions",
      "Rebuilt the sensor ↔ SaaS connectivity flow based on observed pain points",
      "Took full UI/UX design responsibility with no dedicated designer available",
      "Enhanced admin data visualization based on direct client feedback",
      "Implemented product ops from scratch: ClickUp, Airtable, Make, n8n",
      "Regular product performance updates to CMO and CEO",
      "Tailored product demos for deal closures as bridge between commercial and technical teams",
    ],
    impact: [
      { metric: "Installation time", result: "-14% from fieldwork discovery" },
      { metric: "Admin dashboard", result: "Rebuilt based on client feedback" },
      { metric: "Product ops", result: "Built from zero — scalable workflows established" },
    ],
    tools: ["ClickUp", "Figma", "Airtable", "Make", "n8n"],
  },
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
