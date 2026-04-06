# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

`alunadev` is Adrian Luna Díaz's personal portfolio site — a design-first, high-polish Next.js app. Design specs come from Figma nodes shared by Adrian each session (use `figma` MCP tools). Figma node IDs are embedded in JSX comments to trace each component back to its design origin.

---

## Commands

```bash
npm run dev     # Next.js + Turbopack dev server (localhost:3000)
npm run build   # Production build
npm run start   # Start production server
```

No lint or test scripts are configured.

---

## Stack

- **Next.js 16** (App Router, React 19, TypeScript strict)
- **Tailwind CSS v4** — CSS-first, no `tailwind.config.js`. All design tokens live in `app/globals.css` inside `@theme {}` blocks (`--color-navy`, `--color-accent`, `--font-serif`, etc.).
- **GSAP 3** — Complex sequential animations (loading screen only).
- **Lenis** — Smooth scroll.
- **Lucide React** — Generic UI icons only. Brand icons (X, LinkedIn, GitHub) are custom inline SVGs in `app/components/icons.tsx` (shared by hero and footer).
- **Agentation** — Claude Code in-viewport toolbar, mounted globally in `app/layout.tsx`.

---

## Architecture

### Content layer

All project content lives in `content/case-studies/*.mdx` — one file per project, sorted by numeric filename prefix. YAML frontmatter drives the homepage cards; the MDX body is reserved for future case study detail page narratives.

- **`lib/content.ts`** — `getAllProjects(): Project[]` (sorted by `order` field) and `getProjectBySlug()`. Server-side only — call from Server Components and pass data as props to client components.
- **`lib/portfolio-data.ts`** — now only holds `SocialLink` type and `socialLinks` array (used by the footer).

`Project` frontmatter fields: `slug`, `order`, `period`, `company`, `role`, `logoSrc`, `mockupSrc`, `mockupBg`, `description`, `achievements[]`, `website`, `websiteUrl`, `caseStudy`.

`caseStudy` values:
- `available` — blue Case Study button, links to `/case-study/[slug]`
- `not-ready` — dimmed button + "Coming soon" hover overlay
- `false` — no case study button

`CaseStudyDetail` extends `Project` with optional detail-page fields: `title`, `tags`, `pullQuote`, `problem`, `approach[]`, `impact[]`, `tools[]`.

### Component structure

`app/page.tsx` is a thin orchestrator: `HeroSection → DynamicIsland → ExperienceSection → FooterSection`. Each section is its own file under `app/components/`.

**Server components** (default): `hero-section.tsx`, `footer-section.tsx`, experience sections.
**Client components** (`"use client"`): `dynamic-island.tsx` (IntersectionObserver on `#hero`), `loading-screen.tsx` (GSAP refs).

`app/layout.tsx` mounts `LoadingScreen` and `AgentationToolbar` as global overlays, and injects three Google Font CSS variables (`--font-gelasio`, `--font-inter`, `--font-jetbrains-mono`).

### DynamicIsland

Single `fixed` element with two states. On mount: invisible at bottom. Fades in 3s after `aluna:loading-complete` event (dispatched by LoadingScreen onComplete). While in hero state, a scroll listener tracks position 1:1 with `window.scrollY` so the island appears anchored to the page. When `#hero > div` (main content block) fully exits the viewport (`bottom ≤ 0`), island snaps to `top: 53px` and content crossfades to nav variant. Reverse: when hero content re-enters viewport, reverts to hero state. LoadingScreen dispatches `aluna:loading-complete` to decouple timing.

### LoadingScreen

Two-phase GSAP timeline:
1. "A" and "D" slide outward (1.25s).
2. "L", "U", "N", "A" fade in with stagger (0.45s + stagger).
Progress bar fills in sync. Full exit at ~6s total.

### ExperienceSection

`experience-section.tsx` — sticky card stacking animation with GSAP ScrollTrigger. It is a `"use client"` component that receives `projects: Project[]` as a prop from `app/page.tsx` (which calls `getAllProjects()` server-side). Maps over all 8 projects from the MDX content layer.

### Path alias

`@/*` resolves to the project root (e.g., `@/lib/portfolio-data`, `@/app/components/hero-section`).

---

## Components

Every repeated UI element is a named component. Before writing any new UI, check if a component already exists.

| Component | File | Responsibility |
|---|---|---|
| `XIcon`, `LinkedInIcon`, `GitHubIcon` | `app/components/icons.tsx` | Brand SVG icons — single source of truth |
| `ProjectCard` | `app/components/project-card.tsx` | Single project card — layout, columns, buttons, mockup |
| `ExperienceSection` | `app/components/experience-section.tsx` | Scroll/stacking animation only. Never put card UI here |
| `HeroSection` | `app/components/hero-section.tsx` | Landing identity block |
| `DynamicIsland` | `app/components/dynamic-island.tsx` | Two-state floating island: hero (bottom, scroll cue) → nav (top-[53px], avatar + contacts). GSAP animates position; CSS crossfades content. |
| `FooterSection` | `app/components/footer-section.tsx` | Footer + social links |
| `LoadingScreen` | `app/components/loading-screen.tsx` | GSAP splash animation |

---

## Design Tokens

All tokens live in `app/globals.css` inside `@theme {}`. Never use hardcoded hex values in component files — always use the token class.

| Token | Value | Tailwind class |
|---|---|---|
| `--color-primary` | #111827 | `text-primary`, `bg-primary` |
| `--color-subtle` | #6b7280 | `text-subtle` |
| `--color-secondary` | #374151 | `text-secondary` |
| `--color-muted` | #9ca3af | `text-muted` |
| `--color-body` | #475569 | `text-body` |
| `--color-button-primary` | #315deb | `bg-[#315deb]` ← use literal hex in Tailwind arbitrary value |
| `--color-accent` | #3b82f6 | `bg-accent` |
| `--color-icon-bg` | #f9fafb | `bg-icon-bg` |
| `--color-card-bg` | #f6f6f6 | `bg-card-bg` |
| `--color-border` | #f1f1f1 | `border-border` |
| `--color-border-light` | #f3f4f6 | `border-border-light` |
| `--color-divider` | #e2e8f0 | `border-divider` |
| `--color-navy` | #143d69 | `bg-navy` |
| `--font-sans` | Inter | inherited from `html` — no inline `style` needed |
| `--font-serif` | Gelasio | `font-serif` |
| `--font-mono` | JetBrains Mono | `font-mono` |

**Font inheritance:** `html { font-family: var(--font-sans) }` is set globally in `globals.css`. Never add `style={{ fontFamily: "var(--font-sans)" }}` to individual components.

---

## Design conventions

- **Design source of truth**: Figma nodes shared by Adrian during each session — use the `figma` MCP tools (`get_design_context`, `get_screenshot`) to read them. Do not treat the `.pen` file as the design reference.
- **Figma node IDs** in JSX comments (e.g., `// Figma node: 1912:5174`) link components to their Figma origin.
- **No inline `style=` for static values** — use Tailwind utilities or CSS variables.
- **Brand icons** must be custom SVGs, not Lucide approximations (see Adrian's design principles in global CLAUDE.md).
- **Tokens cascade** — color/font changes belong in `app/globals.css @theme`, not scattered utility overrides.

### Figma frame reference

All Figma designs for this project are built on a **1440px frame**. The app's main content container is `max-w-[1060px]`. Always apply the responsive design principle from the global CLAUDE.md when translating Figma values to code.
