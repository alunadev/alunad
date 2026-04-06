# How to Edit Portfolio Content

All portfolio content lives in one place: **`content/case-studies/`**

One `.mdx` file per project. Everything — card data, case study detail, status — is controlled from these files. No TypeScript changes needed.

---

## File structure

```
content/case-studies/
├── 01-laliga-official-app.mdx
├── 02-laliga-fantasy.mdx
├── 03-laliga-plus.mdx
├── 04-laliga-id.mdx
├── 05-laliga-business.mdx
├── 06-laliga-women.mdx
├── 07-iberia-app.mdx
└── 08-travelie.mdx
```

The numeric prefix (`01-`, `02-`, etc.) controls the **display order** on the homepage. To reorder projects, rename the files.

---

## Editing a project card

Open the file and edit the YAML frontmatter between the `---` delimiters:

```yaml
---
period: "2021 — Now"           # Timeline label
company: LALIGA Official App   # Card heading
role: Senior Product Manager   # Role subtitle
description: "Your copy here"  # Paragraph below the role
achievements:
  - "D7 retention +20%"        # Each line = one bullet
  - "Sessions per user +70%"
mockupBg: "#143d69"            # Card background color
mockupSrc: ""                  # Mockup image path (e.g. /images/mockups/app.png)
logoSrc: /images/logo-laliga.png
website: laliga.com            # Link label
websiteUrl: https://laliga.com # Full URL
caseStudy: available           # Button state — see below
---
```

### Fields reference

| Field | What it does |
|-------|-------------|
| `period` | Timeline shown on the card (e.g. `"2021 — Now"`) |
| `company` | Main card heading |
| `role` | Role subtitle |
| `description` | Short paragraph below the role |
| `achievements` | List of impact bullets |
| `mockupBg` | Hex color used as card background |
| `mockupSrc` | Path to mockup image. Leave `""` to show only the color bg |
| `logoSrc` | Path to company logo (stored in `public/images/`) |
| `website` | Display label for the external link |
| `websiteUrl` | Full URL for the external link |
| `caseStudy` | Controls the case study button (see below) |

---

## Controlling the case study button

Change `caseStudy` in frontmatter:

| Value | What appears |
|-------|-------------|
| `available` | Blue "Case Study" button → links to `/case-study/[slug]` |
| `not-ready` | Dimmed button + "Coming soon" tooltip on hover |
| `false` | No case study button; website link takes the full row |

**To publish a case study:** change `not-ready` → `available`. The page auto-generates from the detail fields below.

---

## Editing a case study detail page

Add these fields to the same `.mdx` file, right below the card fields. They are only needed when `caseStudy: available`:

```yaml
title: "LALIGA Official App"
tags: [Consumer App, AI, Retention, Rebranding]
pullQuote: "The pull quote shown as the hero text on the detail page."
problem: "The problem statement paragraph."
approach:
  - "First thing you did"
  - "Second thing you did"
  - "Third thing you did"
impact:
  - metric: "D7 retention"
    result: "+20%"
  - metric: "Sessions per user"
    result: "+70%"
tools: [Amplitude, Jira, Figma, Maze]
```

### Detail fields reference

| Field | What it does |
|-------|-------------|
| `title` | Page title on the case study detail page |
| `tags` | Pill labels shown near the top of the detail page |
| `pullQuote` | Large hero quote on the detail page |
| `problem` | Problem statement paragraph |
| `approach` | List of approach bullets |
| `impact` | List of `{ metric, result }` pairs for the impact section |
| `tools` | Tools/methods list |

All detail fields are optional — only needed for `caseStudy: available` projects.

---

## Adding long-form narrative (future)

Below the closing `---` of the frontmatter is where you write the full case study narrative in Markdown. This area is reserved — currently unused, but the content layer is ready for it:

```mdx
---
slug: laliga-official-app
...detail fields...
---

## The challenge

Your long-form narrative goes here. Standard Markdown — headings, bold, lists, images.

## What we built

Keep writing...
```

---

## Adding a new project

1. Duplicate any existing `.mdx` file
2. Rename it with the next number prefix: `09-new-project.mdx`
3. Set `order: 9` in frontmatter (must match the file prefix)
4. Set a unique `slug: new-project`
5. Fill in all the card fields
6. Set `caseStudy: false` or `not-ready` to start

The project will appear automatically on the homepage — no code changes needed.

---

## Adding or updating images

All images live in `public/images/`:

```
public/images/
├── logo-laliga.png         # Company logos
├── logo-iberia.png
└── mockups/
    ├── laliga-app.png      # Mockup screenshots
    └── ...
```

After adding an image, reference it in frontmatter as `/images/logo-name.png` (path starts from `public/`).

---

## Quick cheat sheet

| I want to... | I do... |
|-------------|---------|
| Change card copy | Edit `description`, `achievements`, `role` in the `.mdx` file |
| Change card colors | Edit `mockupBg` (hex) and `mockupSrc` (image path) |
| Publish a case study | Change `caseStudy: not-ready` → `caseStudy: available` |
| Hide the case study button | Change `caseStudy` to `false` |
| Reorder cards on homepage | Rename files (e.g. swap `01-` and `02-` prefixes) |
| Add a new project | Duplicate a `.mdx` file, rename with next number, update all fields |
| Edit case study content | Update `title`, `tags`, `pullQuote`, `problem`, `approach`, `impact`, `tools` |
| Add a new logo or mockup | Drop the image in `public/images/`, reference it in frontmatter |
