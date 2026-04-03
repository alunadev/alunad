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
- **Lucide React** — Generic UI icons only. Brand icons (X, LinkedIn, GitHub) are custom inline SVGs in `hero-section.tsx`.
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

Fixed-position sticky bar that becomes visible when `#hero` scrolls out of the viewport. Uses `IntersectionObserver` + CSS `opacity`/`translateY` transitions (300ms ease-out). Not a headless library — all logic is inline in the component.

### LoadingScreen

Two-phase GSAP timeline:
1. "A" and "D" slide outward (1.25s).
2. "L", "U", "N", "A" fade in with stagger (0.45s + stagger).
Progress bar fills in sync. Full exit at ~6s total.

### ExperienceSection

`experience-section-a.tsx` is the active component — sticky card stacking animation with GSAP ScrollTrigger. It is a `"use client"` component that receives `projects: Project[]` as a prop from `app/page.tsx` (which calls `getAllProjects()` server-side). Maps over all 8 projects from the MDX content layer.

### Path alias

`@/*` resolves to the project root (e.g., `@/lib/portfolio-data`, `@/app/components/hero-section`).

---

## Design conventions

- **Design source of truth**: Figma nodes shared by Adrian during each session — use the `figma` MCP tools (`get_design_context`, `get_screenshot`) to read them. Do not treat the `.pen` file as the design reference.
- **Figma node IDs** in JSX comments (e.g., `// Figma node: 1912:5174`) link components to their Figma origin.
- **No inline `style=` for static values** — use Tailwind utilities or CSS variables.
- **Brand icons** must be custom SVGs, not Lucide approximations (see Adrian's design principles in global CLAUDE.md).
- **Tokens cascade** — color/font changes belong in `app/globals.css @theme`, not scattered utility overrides.
