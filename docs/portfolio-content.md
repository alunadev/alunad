# Portfolio Content — Adrián Luna Díaz

> ⚠️ **Legacy reference doc.** As of 2026-04-03, the source of truth for all project content
> is `content/case-studies/*.mdx`. Edit the MDX files directly — not this document.
> This file is preserved for Figma component mapping and copywriting reference only.

> Figma component map and copywriting reference for development handoff.
>
> **Figma file:** `rUD8M24pExW6M91e5AszUg` (Adri personal)
> **Language:** English
> **Narrative:** Builder who measures impact · AI-first mindset

---

## Narrative Arc (reference for all copywriting)

> Industrial engineer → worked across sectors (consulting at EY, engineering at Ferrovial, physical product design at Bullpadel & Starvie) → built Traveliè and discovered PM as a discipline → formal pivot → Urbiotica (first PM hire, no safety net) → LALIGA (enterprise consumer product, 200M fans, AI at scale). Always building on the side: Traveliè, Cuatro Jugadores de Padel, Padel Videogame, and more.

---

## Section: Hero

**Figma node:** `1912:5174`
**Layout:** Two-column. Left = identity. Right = current role + expertise pills.

### Left Column

| Component | Content |
|---|---|
| `ProfilePhoto` | File: `images/Foto adri santan, cerca.jpeg` — 120px circular, shadow |
| `NameHeading` | `Adrián Luna Díaz` |
| `BioParagraph` | `Industrial Engineer turned Product Manager with 10 years of experience creating, launching, and scaling digital products.` |
| `LocationChip` | `Madrid, Spain` — Map Pin icon |
| `EmailLink` | `lunadiazadrian@gmail.com` — Mail icon |
| `LinkedInLink` | `linkedin.com/in/adrian-luna-diaz` |
| `GitHubLink` | `github.com/alunadev` |
| `TwitterLink` | `@adrianlunadiaz` — x.com/adrianlunadiaz |

### Right Column

| Component | Content |
|---|---|
| `SectionLabel[currently]` | `CURRENTLY` |
| `CurrentRoleCard > CompanyLogo` | File: `images/Logo LL RGB_h_color 1.png` — 24px height |
| `CurrentRoleCard > RoleText` | `Senior Product Manager @ LALIGA` |
| `CurrentRoleCard > DateRange` | `NOV 2021 — Present` |
| `CurrentRoleCard > Description` | `Leading the Official Products portfolio at LALIGA as Senior Product Manager, where I shape the product vision, align key stakeholders, and prioritize initiatives that enhance the experience of millions of fans.` |
| `SectionLabel[expertise]` | `EXPERTISE` |
| `ExpertisePill[1]` | `Product Management` |
| `ExpertisePill[2]` | `AI-first` |
| `ExpertisePill[3]` | `UX/UI` |
| `ExpertisePill[4]` | `Monetization` |
| `ExpertisePill[5]` | `Customer Obsession` |
| `ExpertisePill[6]` | `KPIs` |
| `ExpertisePill[7]` | `SaaS` |
| `ExpertisePill[8]` | `Product taste` |

**Figma typography ref:**
- `NameHeading`: Gelasio Bold 64px, black
- `BioParagraph`: Inter Regular 20px, 474px max-width
- `SectionLabel`: Inter Medium 16px, uppercase, letter-spacing 0.16px
- `CurrentRoleCard > RoleText`: Inter Regular 20px
- `ExpertisePill`: Inter 12px, black border, border-radius 52px, white fill

---

## Section: Experience Cards

**Figma node:** `1977:4936`
**Layout:** Section heading → 2 featured project cards (alternating left/right) → Work grid below.

### Section Header

| Component | Content |
|---|---|
| `SectionHeading` | `Experience` |
| `Divider` | Horizontal line — color `#e2e8f0` |

**Figma typography ref:** Playfair Display Bold 36px, color `#1e293b`

---

### FeaturedCard[1] — LALIGA Official App
**Layout:** Image left · Content right

| Component | Content |
|---|---|
| `FeaturedLabel` | `FEATURED PROJECT` |
| `ProjectTitle` | `LALIGA Official App` |
| `ProjectDescription` | `Full redesign of LALIGA's official consumer app—AI-powered personalized highlight clips, rebuilt UX, and measurable retention gains at scale.` |
| `MetricsBadge[1]` | `+20% D7 retention` |
| `MetricsBadge[2]` | `+70% sessions/user` |
| `MetricsBadge[3]` | `260K+ AI clips/season` |
| `TechTag[1]` | `Amplitude` |
| `TechTag[2]` | `Figma` |
| `TechTag[3]` | `Jira` |
| `TechTag[4]` | `WSC Sports` |
| `ExternalLinkIcon` | Links to: `/case-study/laliga-official-app` |
| `ProjectImage` | Placeholder — dark blue bg `#143d69`, 480px height |

**Figma typography ref:**
- `FeaturedLabel`: JetBrains Mono Medium 12px, color `#3b82f6`
- `ProjectTitle`: Inter SemiBold 30px, color `#1e293b`
- `ProjectDescription`: white card bg, box-shadow, border-radius 8px
- `TechTag`: JetBrains Mono 12px, color `#64748b`

---

### FeaturedCard[2] — LALIGA Fantasy
**Layout:** Content left · Image right (mirrored)

| Component | Content |
|---|---|
| `FeaturedLabel` | `FEATURED PROJECT` |
| `ProjectTitle` | `LALIGA Fantasy` |
| `ProjectDescription` | `PLG-based freemium model with premium features and subscriptions—325% revenue growth in two seasons through contextualized conversion flows.` |
| `MetricsBadge[1]` | `+325% premium purchases` |
| `MetricsBadge[2]` | `ARPU ×2 YoY` |
| `MetricsBadge[3]` | `22% sales via in-app flows` |
| `TechTag[1]` | `Optimizely` |
| `TechTag[2]` | `Amplitude` |
| `TechTag[3]` | `Figma` |
| `TechTag[4]` | `Jira` |
| `ExternalLinkIcon` | Links to: `/case-study/laliga-fantasy` |
| `ProjectImage` | Placeholder — dark blue bg, 480px height |

---

### Work Grid
**Figma label component:** `WorkSectionLabel` → content: `WORK`
**Layout:** 12-column grid. Each card has: icon container · project name · role · external link arrow.

| `WorkCard` | `ProjectName` | `RoleText` | `LinkTarget` |
|---|---|---|---|
| `WorkCard[1]` | `Traveliè` | `Co-Founder & CPO` | `/case-study/travelie` |
| `WorkCard[2]` | `Cuatro Jugadores de Padel` | `Creator & Writer` | `/case-study/cuatro-jugadores` |
| `WorkCard[3]` | `Urbiotica` | `Product Manager` | `/case-study/urbiotica` |
| `WorkCard[4]` | `Nuclio Digital School` | `PM Mentor · 2023–Present` | — |
| `WorkCard[5]` | `Padel Videogame` | `Co-Founder & Head of Product` | — |
| `WorkCard[6]` | `EY Spain` | `Advisor · Technological Risk` | — |

**Figma ref:**
- `WorkSectionLabel`: Inter Medium 14px, uppercase, color `#9ca3af`
- `WorkCard > ProjectName`: Inter Bold 14px
- `WorkCard > RoleText`: Inter Regular 12px
- Card bg: `#f6f6f6`, border-radius 24px

---

## Section: Skills & Tools

**Figma node:** Not yet designed — layout TBD.
**Content defined here for future design handoff.**

### Soft Skills (by category)

| Category | Skills |
|---|---|
| Product Craft | Product Strategy & Vision · Discovery · Roadmapping · Prioritization · Product Ownership |
| Leadership | Stakeholder Management · Team Empowerment · Mentoring · Strategic Communication |
| Execution | Data-Driven Decisions · KPIs & Experimentation · Continuous Delivery · Agile/Scrum |
| Design | UX/UI Design · Prototyping · User Research · Information Architecture |
| AI-First | AI Agents & Automation · AI-powered Documentation · Prototyping with AI · AI content workflows |

### Tools (by category)

| Category | Tools |
|---|---|
| AI Stack | Claude Code · Cursor · Lovable · v0 · Gemini (AI Studio) · Rork |
| Product | Jira · Linear · Notion · Amplitude · Mixpanel · Optimizely |
| Design | Figma · Whimsical · Octopus |
| Analytics | Amplitude · Google Analytics · PowerBI · Google Optimize · Google Tag Manager |
| Automation | Make · n8n · Zapier · Airtable |
| Web | Framer · Webflow · Carrd · HTML & CSS · GitHub |
| Agile | Professional Scrum Master (PSM) · PSPO · Kanban |

---

## Section: Footer

**Figma node:** `1912:5355`
**Layout:** `FIND ME` label + 3 social cards in a horizontal row.

| Component | Content |
|---|---|
| `SectionLabel` | `FIND ME` |
| `SocialCard[1] > Icon` | X / Twitter logo |
| `SocialCard[1] > Handle` | `@AdrianLuna6` |
| `SocialCard[1] > Link` | `x.com/AdrianLuna6` |
| `SocialCard[2] > Icon` | LinkedIn logo |
| `SocialCard[2] > Handle` | `Adrián Luna Díaz` |
| `SocialCard[2] > Link` | `linkedin.com/in/adrian-luna-diaz` |
| `SocialCard[3] > Icon` | GitHub logo (Lucide, 24px) |
| `SocialCard[3] > Handle` | `alunadev` |
| `SocialCard[3] > Link` | `github.com/alunadev` |

**Figma ref:**
- `SectionLabel`: Inter Medium 14px, uppercase, color `#9ca3af`
- `SocialCard > Handle`: Inter Medium 16px, color `#374151`
- Card: white bg · border `#f1f1f1` · border-radius 12px · padding 17px · flex space-between
- Icon container: 48px, border-radius 8px, bg `#f9fafb`
- External link icon: 16px arrow

---

---

## Case Study: LALIGA Official App

**Route:** `/case-study/laliga-official-app`
**Detail page layout:** TBD (not yet designed in Figma)

### Header

| Field | Content |
|---|---|
| `CaseStudyTitle` | `LALIGA Official App` |
| `RoleLabel` | `Senior Product Manager` |
| `CompanyLabel` | `LALIGA` |
| `PeriodLabel` | `2022 — Present` |
| `TypeTag[1]` | `Consumer App` |
| `TypeTag[2]` | `AI` |
| `TypeTag[3]` | `Retention` |
| `TypeTag[4]` | `Rebranding` |

### Problem

> The LALIGA app had fragmented UX and generic, non-personalized content. Fan engagement peaked only on matchdays and dropped sharply. D7 retention was low and content consumption was passive—fans had no reason to return between games.

### Approach

- **Discovery:** User research + Amplitude funnel analysis to identify post-matchday drop-off points
- **Redesign:** Full UX overhaul with a personalization architecture at its core
- **AI integration:** WSC Sports API → automated personalized highlight clips delivered in a stories/moments format
- **Ecosystem rebranding:** Coordinated rollout across App, Web, and Fantasy for full brand coherence
- **Cross-functional leadership:** 2 dev squads (18 engineers) + 3 designers
- **Additional products led:** MILIGA loyalty area · LALIGA Live web-app (India & MENA pilot markets)

### Impact

| Metric | Result |
|---|---|
| D7 retention | +20% |
| D21 retention | +14% |
| Sessions per user | +70% |
| AI-generated highlight clips / season | 260,000+ |
| Digital rebranding scope | App · Web · Fantasy |

### Tools

`Amplitude` · `Jira` · `Figma` · `PowerBI` · `WSC Sports` · `Google Analytics` · `Optimizely` · `Mixpanel`

---

## Case Study: LALIGA Fantasy

**Route:** `/case-study/laliga-fantasy`
**Detail page layout:** TBD

### Header

| Field | Content |
|---|---|
| `CaseStudyTitle` | `LALIGA Fantasy` |
| `RoleLabel` | `Senior Product Manager` |
| `CompanyLabel` | `LALIGA` |
| `PeriodLabel` | `2021 — Present` |
| `TypeTag[1]` | `Monetization` |
| `TypeTag[2]` | `PLG` |
| `TypeTag[3]` | `Growth` |
| `TypeTag[4]` | `Freemium` |

### Problem

> LALIGA Fantasy had no sustainable monetization model. The product was entirely free, with no pricing strategy, no premium tier, and no conversion funnel. Revenue was minimal and there was no clear path to monetize an engaged user base.

### Approach

- **Model design:** PLG-based freemium model — free core gameplay + premium features + monthly subscription options
- **Pricing & packaging:** Defined tiers, positioning, and pricing anchors from scratch
- **Conversion flows:** Built contextualized paywall triggers at key engagement moments within the app (not generic pop-ups)
- **Experimentation:** A/B tested paywall copy, pricing tiers, and placement using Optimizely
- **Cross-functional execution:** Design, Dev, Growth, and Marketing aligned on end-to-end implementation

### Impact

| Metric | Result |
|---|---|
| Premium purchases | +325% over two seasons |
| ARPU | Doubled YoY |
| Contextualized conversion flows | Drive 22% of total premium sales |
| Model sustainability | Confirmed via cohort analysis — long-term viability validated |

### Tools

`Optimizely` · `Amplitude` · `Figma` · `Jira` · `Google Optimize`

---

## Case Study: Traveliè

**Route:** `/case-study/travelie`
**Detail page layout:** TBD

### Header

| Field | Content |
|---|---|
| `CaseStudyTitle` | `Traveliè` |
| `RoleLabel` | `Co-Founder & CPO` |
| `CompanyLabel` | `Personal project` |
| `PeriodLabel` | `2020 — 2022` |
| `TypeTag[1]` | `0-to-1` |
| `TypeTag[2]` | `Consumer App` |
| `TypeTag[3]` | `Discovery` |
| `TypeTag[4]` | `Startup` |

### Origin (pull quote — use as hero intro on detail page)

> "Building Traveliè is how I became a Product Manager. As a traveler, I was frustrated missing the hidden gems only locals know. That frustration became a product. And the process of validating it from scratch—research, discovery, MVP, UX design—showed me where I truly wanted to be."

### Problem

> 86% of travelers feel they miss interesting places on trips. 68% feel they've missed nearby spots they would have loved. Travel apps surface popular, overrated destinations—not the places that make a trip unforgettable.

### Approach

- **Market validation:** Surveys + qualitative interviews — sized and confirmed the problem before building
- **Product strategy:** Roadmap from zero to functional prototype, balancing user needs with technical feasibility
- **UX/UI design:** Full design in Figma, no dedicated designer on the team
- **Business model:** Defined value proposition, revenue model, SWOT, competitive positioning map
- **Distribution testing:** SEMrush + Google Search Console for organic channel validation
- **Team:** CEO · CPO (Adrian) · CMO

### Impact

- Core problem validated with quantified research data (86% / 68% insight)
- Functional prototype shipped aligned with defined MVP scope
- KPI framework established from day one
- Career pivot: Traveliè led directly to formal transition into Product Management

### Tools

`Figma` · `Jira` · `Notion` · `SEMrush` · `Google Search Console`

---

## Case Study: Cuatro Jugadores de Padel

**Route:** `/case-study/cuatro-jugadores`
**Detail page layout:** TBD

### Header

| Field | Content |
|---|---|
| `CaseStudyTitle` | `Cuatro Jugadores de Padel` |
| `RoleLabel` | `Creator & Writer` |
| `CompanyLabel` | `Personal project` |
| `PeriodLabel` | `2021 — Present` |
| `TypeTag[1]` | `Content` |
| `TypeTag[2]` | `Newsletter` |
| `TypeTag[3]` | `No-Code` |
| `TypeTag[4]` | `Side Project` |
| `ExternalURL` | `cuatrojugadoresdepadel.com` |

### What it is

> A bi-weekly newsletter delivering four actionable padel improvement tips every Thursday. Built entirely with no-code tools and run solo since November 2021.

### Format & Distribution

- **Content format:** 4 improvement tips per issue — structured for quick, practical consumption
- **Newsletter:** Substack
- **Landing page:** Carrd
- **Planning & docs:** Notion
- **Cadence:** Every two weeks, no breaks

### Why it matters

> Shows product discipline applied to a personal project: audience discovery, content strategy, distribution architecture, and sustained solo execution across 3+ years.

### Stack

`Substack` · `Carrd` · `Notion`

---

## Case Study: Urbiotica

**Route:** `/case-study/urbiotica`
**Detail page layout:** TBD

### Header

| Field | Content |
|---|---|
| `CaseStudyTitle` | `Urbiotica` |
| `RoleLabel` | `Product Manager — First PM hire` |
| `CompanyLabel` | `Urbiotica` |
| `PeriodLabel` | `Feb 2021 — Oct 2021` |
| `TypeTag[1]` | `IoT SaaS` |
| `TypeTag[2]` | `B2B & B2C` |
| `TypeTag[3]` | `Discovery` |
| `TypeTag[4]` | `0-to-1` |

### Context

> Urbiotica is a smart city IoT company specializing in sensor-based urban parking management. Adrian joined as the first and only member of the product team, reporting directly to the CMO — no design team, no established process, no playbook.

### Problem

> Onboarding was slow and error-prone: connecting physical IoT parking sensors to the SaaS platform required manual, fragile steps that frustrated installation teams and generated client complaints.

### Approach

- **Fieldwork discovery:** Went on-site with installation teams to observe friction in real conditions — not from a desk
- **Onboarding redesign:** Rebuilt the sensor ↔ SaaS connectivity flow based on observed pain points
- **UI/UX design:** Took full design responsibility with no dedicated designer available
- **Dashboard improvement:** Enhanced admin data visualization based on direct client feedback
- **Product ops from scratch:** Implemented workflows in ClickUp, Airtable, Make, and n8n — team went from ad-hoc to structured
- **Stakeholder reporting:** Regular product performance updates to CMO and CEO
- **Sales support:** Tailored product demos for deal closures, acting as the bridge between commercial and technical teams

### Impact

| Metric | Result |
|---|---|
| Installation time | -14% (from fieldwork discovery → redesigned onboarding) |
| Admin dashboard | Rebuilt based on client feedback |
| Product ops | Built from zero — scalable workflows established for the whole team |

### Tools

`ClickUp` · `Figma` · `Airtable` · `Make` · `n8n`

---

## Asset Reference

| Asset | Path |
|---|---|
| Profile photo | `images/Foto adri santan, cerca.jpeg` |
| LALIGA logo | `images/Logo LL RGB_h_color 1.png` |
| Pencil design file | `alunadev-portfolio-design.pen` |
| Reference portfolios | `references/other portfolios/` |
| CV PDF | `docs/Adrián Luna Díaz CV_Senior PM_LALIGA.pdf` |
| Extended CV (Notion export) | `docs/cv-extended-notion-exported/` |

---

## Open Items (design decisions pending)

| Item | Status |
|---|---|
| Skills & Tools section layout | No Figma design yet — content ready above |
| Case study detail page layout | No Figma design yet — content ready above |
| `WorkCard` icon assets | TBD per project (Traveliè, Cuatro Jugadores, Urbiotica, etc.) |
| `ProjectImage` screenshots (featured cards) | Need actual screenshots or designed placeholders |
| Case study URLs / routing | Slugs defined above, implementation TBD |
