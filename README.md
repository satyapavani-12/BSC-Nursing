# Nursing Exam Prep

A fast, plain-language study site for **B.Sc. Nursing** (INC syllabus, 4 years / 8 semesters).
Every chapter follows the same 10-block template: simple explanation → labelled diagram → key table →
nursing use → 🔴 most important points → ⭐ important points → mnemonic → 60-second revision → MCQs.

Built with Astro (static HTML). No database, no login, no runtime framework.

## Run it

```bash
npm install     # first time only
npm run dev     # http://localhost:4321
npm run build   # creates dist/ — upload anywhere
npm run preview # serve the built site locally
```

`dist/` is a plain folder of HTML/CSS. It works on GitHub Pages, Netlify, Hostinger, or from a pen drive.

## Project map

```
src/
├─ data/subjects.ts          all semesters, subjects and chapter lists
├─ content/chapters/         one .mdx file per chapter
│  └─ sem-1/
│     ├─ applied-anatomy/
│     │  └─ respiratory-system.mdx
│     └─ nursing-foundation-i/
│        └─ vital-signs.mdx
├─ components/               Callout, ExamPoints, MCQ, Figure, GasExchange
├─ layouts/BaseLayout.astro  header, footer, meta tags
├─ pages/                    routes (year, semester, subject, chapter, search…)
└─ styles/global.css         the whole design system
```

## Add a new chapter (3 steps)

**1. Write the file** at the right path:

```
src/content/chapters/sem-2/applied-nutrition/vitamins.mdx
```

**2. Add front-matter** at the top:

```yaml
---
title: Vitamins
subject: applied-nutrition
semester: 2
chapterNo: 5
level: core                 # core = most important, support = good to know
summary: One line that appears in lists and search results.
tags: [nutrition, vitamins]
outcomes:
  - Classify vitamins
  - Name the deficiency disease of each vitamin
minutes: 8
updated: 2026-11-25
---
```

**3. Write the body.** Components are available from `src/components/mdx.ts`:

```mdx
import { Callout, Figure, ExamPoints, MCQ, GasExchange } from '../../../../components/mdx';

## In simple words
...

<Callout type="must" title="Exam point">...</Callout>

<Figure caption="What the diagram shows">...inline SVG...</Figure>

<ExamPoints level="core" items={['Point one', 'Point two']} />

<MCQ q="Question?" options={['A', 'B', 'C', 'D']} answer={2} explain="Why C is right." />
```

The chapter appears automatically in its subject list, search index, revision sheet and
“most important” page — no menu editing needed.

## Add a chapter that is not written yet

Chapters listed in `src/data/subjects.ts` but with no `.mdx` file show a **Soon** badge.
That is how the full 8-semester map is visible from day one.

## Rules for content

- Simple English: one idea per sentence, explain any medical word the first time.
- One diagram per chapter (inline SVG, no image downloads).
- Mark only genuinely high-yield points as 🔴; keep the list to 3–7 items.
- Always add 5 MCQs with an explanation.
- Never promise a treatment protocol — say “as prescribed” and “follow hospital policy”.

## Deploy

```bash
npm run build
# upload the dist/ folder
```

For GitHub Pages, set `site` and `base` in `astro.config.mjs` if the site lives in a sub-folder.

---

Study aid only. Always cross-check with your university syllabus, textbooks and hospital protocols.
