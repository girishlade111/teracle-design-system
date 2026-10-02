> **Maintained by [Girish Lade](https://ladestack.in)** — token-driven, WCAG 2.2 AA accessible design system for developer documentation. Built by Girish Lade — [ladestack.in](https://ladestack.in)

---

# Teracle — Implementation-ready Design System

> A token-driven, accessible design system and documentation site for developer-facing products.
> Explicit component states, semantic tokens, keyboard-first interactions, **WCAG 2.2 AA** as a build target.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma&logoColor=white)
![WCAG](https://img.shields.io/badge/WCAG-2.2%20AA-blue)

---

## Table of contents

- [Overview](#overview)
- [Highlights](#highlights)
- [Tech stack](#tech-stack)
- [Design foundations](#design-foundations)
- [Component families](#component-families)
- [UI primitives](#ui-primitives)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Available scripts](#available-scripts)
- [Database (Prisma + SQLite)](#database-prisma--sqlite)
- [Accessibility](#accessibility)
- [Build, output and deployment](#build-output-and-deployment)
- [Examples](#examples)
- [What is git-ignored](#what-is-git-ignored)
- [Roadmap](#roadmap)

---

## Overview

Teracle is a single-page design-system reference (Next.js App Router) that documents a complete
visual language — colour, type, spacing, shape and motion tokens — alongside a live catalogue of
12 component families with their full variant × state matrix.

It is not a component library you install; it is the **spec + implementation reference** for one.
Every token, state and accessibility criterion shown on the page is backed by real code in
`src/`, so what you read is what ships.

The landing page is composed of these sections (see `src/app/page.tsx`):

| Section | Source | Purpose |
| --- | --- | --- |
| Announcement bar + Hero | `src/components/teracle/hero.tsx` | Positioning, headline stats (42 tokens / 12 families / AA / 7 states) |
| Foundations | `src/components/teracle/foundations.tsx` | Colour, typography, spacing, shape and motion token tables |
| Component cards | `src/components/teracle/component-cards.tsx` | The 12 component families with states and variant counts |
| Button lab | `src/components/teracle/button-lab.tsx` | 4 variants × 7 states density matrix |
| Accessibility | `src/components/teracle/accessibility.tsx` | Testable WCAG 2.2 acceptance criteria |
| Usage | `src/components/teracle/usage.tsx` | Adoption / integration guidance |
| Resources + CTA | `src/components/teracle/resources.tsx` | 31 curated links in four columns |
| Header / footer / theme toggle | `site-header.tsx`, `site-footer.tsx`, `theme-toggle.tsx` | Sticky nav, command palette (⌘K), mobile sheet, light/dark toggle |

## Highlights

- **42 design tokens** surfaced as data (`src/components/teracle/data.ts`) — colour, type scale,
  spacing, radius and motion — so the docs and the implementation can never drift apart.
- **12 component families**, each documented with its explicit state list
  (`default`, `hover`, `focus-visible`, `active`, `disabled`, `loading`, `error`, …) and variant count.
- **Button lab**: a full Primary / Secondary / Outline / Ghost × 7-state matrix rendered live.
- **WCAG 2.2 AA** criteria written as testable checks (contrast, focus visibility, keyboard,
  no keyboard trap, target size, name/role/value, non-text contrast, labels).
- **48 shadcn/ui primitives** pre-wired (`new-york` style, Radix UI, Lucide icons, CSS variables).
- **Command palette** search, mobile navigation sheet, dark/light theme toggle.
- **Token-driven styling** — sections read from typed data files instead of hardcoded JSX copy.
- **Standalone production build** (`.next/standalone`) behind a Caddy reverse proxy.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, `output: "standalone"`) |
| UI | React 19, TypeScript 5, shadcn/ui (new-york) + Radix UI primitives |
| Styling | Tailwind CSS 4 (`@tailwindcss/postcss`), `tailwindcss-animate`, `tw-animate-css` |
| Tokens / utils | `clsx`, `tailwind-merge`, `class-variance-authority` |
| Icons | `lucide-react` |
| Motion | `framer-motion`, `embla-carousel-react` |
| Data / tables / charts | TanStack Query, TanStack Table, `recharts` |
| Forms / validation | `react-hook-form`, `@hookform/resolvers`, `zod` |
| Drag & drop | `@dnd-kit/*` |
| Rich text | `@mdxeditor/editor`, `react-markdown`, `react-syntax-highlighter` |
| Data layer | Prisma 6 + SQLite (`src/lib/db.ts`) |
| Auth / i18n (available) | `next-auth`, `next-intl` |
| State | `zustand`, `next-themes` |
| Runtime / package manager | Bun (`bun.lock`) |
| Lint | ESLint 9 + `eslint-config-next` |

## Design foundations

### Colour tokens

| Token | Value | Role |
| --- | --- | --- |
| `color.text.primary` | `#ffffff` | Primary text on base surface |
| `color.text.secondary` | `#0a0a0a` | Primary text on muted surface |
| `color.text.tertiary` | `#0000ee` | Links & accent actions |
| `color.text.inverse` | `#6c6c6c` | Muted / inverse labels |
| `color.surface.base` | `#000000` | App background (default mode) |
| `color.surface.muted` | `#fef9f3` | Cards, panels, inverted-mode background |

### Typography scale

Fonts: **Chakra Petch** (display/UI) and **Geist Mono** (code), loaded via `next/font/google`
in `src/app/layout.tsx` as `--font-chakra-petch` and `--font-geist-mono`.

| Style | Token | Size | Weight | Line height | Usage |
| --- | --- | --- | --- | --- | --- |
| Display 2XL | `font.size.2xl` | 200px | 700 | 0.90 | Wordmark / hero moment |
| Display XL | `font.size.xl` | 150px | 700 | 0.92 | Section headlines |
| Display LG | `font.size.lg` | 40px | 700 | 1.05 | Sub-headlines, card titles |
| Display MD | `font.size.md` | 24px | 700 | 1.15 | Lead paragraphs |
| Display SM | `font.size.sm` | 18px | 700 | 1.20 | UI labels, nav |
| Base | `font.size.base` | 16px | 700 | 1.00 | Body, controls |

### Spacing, shape and motion

| Token | Value | Usage |
| --- | --- | --- |
| `space.1` | 32px | Inline / stack gap |
| `space.2` | 40px | Section padding |
| `space.3` | 60px | Block separation |
| `radius.sm` | 0px | Inputs, chips |
| `radius.md` | 2px | Cards, popovers |
| `radius.lg` | 4px | Large surfaces |
| `motion.fast` | 120ms ease | Hover, focus feedback |
| `motion.base` | 200ms ease | Toggle, expand |
| `motion.slow` | 320ms cubic-bezier(.2,.8,.2,1) | Dialog, page transitions |

## Component families

Defined in `src/components/teracle/data.ts` (`componentFamilies`).

| # | Family | Variants | States |
| --- | --- | --- | --- |
| 1 | Button | 4 | default, hover, focus-visible, active, disabled, loading, error |
| 2 | Link | 3 | default, hover, focus-visible, active, visited, disabled |
| 3 | Card | 3 | default, hover, focus-within, active, loading, error |
| 4 | Input | 4 | default, focus-visible, filled, disabled, error, loading |
| 5 | Dialog | 2 | default, open, loading, error, disabled |
| 6 | Tabs | 2 | default, hover, focus-visible, active, disabled, loading |
| 7 | Switch | 2 | default, hover, focus-visible, active, disabled, loading, error |
| 8 | Badge | 5 | default, hover, active, disabled |
| 9 | Accordion | 2 | default, hover, focus-visible, active, disabled, loading |
| 10 | Select | 2 | default, hover, focus-visible, active, disabled, loading, error |
| 11 | Radio Group | 2 | default, hover, focus-visible, active, disabled, error |
| 12 | Toast | 4 | default, enter, leave, loading, error, disabled |

Button variants: **Primary · Secondary · Outline · Ghost**, each across all 7 states.

## UI primitives

`src/components/ui/` ships 48 shadcn/ui components, including:
accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, calendar, card,
carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, form,
hover-card, input, input-otp, label, menubar, navigation-menu, pagination, popover, progress,
radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner,
switch, table, tabs, textarea, toast, toaster, toggle, toggle-group, tooltip.

Configuration lives in `components.json` (style `new-york`, base colour `neutral`, CSS variables
enabled, Lucide icons, path aliases `@/components`, `@/lib`, `@/hooks`).

Add more with the shadcn CLI, e.g. `npx shadcn@latest add chart`.

## Project structure

```
.
├── .zscripts/            # dev / build / start / mini-services shell scripts
├── db/
│   └── custom.db         # SQLite database file
├── download/
│   └── README.md         # notes for downloaded assets
├── examples/
│   └── websocket/        # standalone WebSocket example (server.ts, frontend.tsx)
├── mini-services/        # placeholder for auxiliary services
├── prisma/
│   └── schema.prisma     # User + Post models (SQLite)
├── public/               # static assets (logo.svg, robots.txt)
├── src/
│   ├── app/
│   │   ├── api/route.ts  # sample GET /api → { message: "Hello, world!" }
│   │   ├── globals.css   # Tailwind entry + theme variables
│   │   ├── layout.tsx    # fonts, metadata, Toaster
│   │   └── page.tsx      # the design-system landing page
│   ├── components/
│   │   ├── teracle/      # site sections (hero, foundations, button-lab, a11y, …)
│   │   └── ui/           # 48 shadcn/ui primitives
│   ├── hooks/            # use-mobile, use-toast
│   └── lib/              # db.ts (Prisma client), utils.ts (cn helper)
├── Caddyfile             # reverse proxy :81 → localhost:3000
├── components.json       # shadcn/ui config
├── next.config.ts        # standalone output, strict mode off
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Getting started

### Prerequisites

- **Bun** ≥ 1.x (recommended — `bun.lock` is the lockfile), or Node.js 20+
- Git

### 1. Clone

```bash
git clone https://github.com/girishlade111/teracle-design-system.git
cd teracle-design-system
```

### 2. Install dependencies

```bash
bun install
# or: npm install / pnpm install / yarn
```

> `node_modules/` is git-ignored — you must install locally after cloning.

### 3. Configure the environment

Copy the environment file and point `DATABASE_URL` at your SQLite file:

```bash
# .env
DATABASE_URL=file:./db/custom.db
```

`.env*` files are git-ignored; never commit secrets.

### 4. Prepare the database

```bash
bun run db:generate   # generate the Prisma client
bun run db:push       # create/update tables in db/custom.db
# optional: bun run db:migrate  ·  bun run db:reset
```

### 5. Run the dev server

```bash
bun run dev           # http://localhost:3000
```

## Available scripts

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `next dev -p 3000 2>&1 \| tee dev.log` | Dev server on port 3000, logs to `dev.log` |
| `build` | `next build` + copy static/public into standalone | Production build (standalone output) |
| `start` | `bun .next/standalone/server.js` | Run the standalone production server |
| `lint` | `eslint .` | ESLint over the whole project |
| `db:push` | `prisma db push` | Push Prisma schema to SQLite |
| `db:generate` | `prisma generate` | Generate Prisma client |
| `db:migrate` | `prisma migrate dev` | Create/apply a dev migration |
| `db:reset` | `prisma migrate reset` | Reset the database |

> The `dev`, `build` and `start` scripts use shell features (`tee`, `cp -r`) — run them from
> Git Bash, WSL or macOS/Linux. Windows PowerShell users can run `npx next dev -p 3000` directly.

## Database (Prisma + SQLite)

`prisma/schema.prisma` defines two models on SQLite:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  published Boolean  @default(false)
  authorId  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

The shared client is exported from `src/lib/db.ts` (singleton pattern, query logging in
development):

```ts
import { db } from "@/lib/db";
const users = await db.user.findMany();
```

## Accessibility

Teracle treats accessibility as acceptance criteria, not an afterthought
(`accessibilityCriteria` in `src/components/teracle/data.ts`):

| SC | Title | Level | Check |
| --- | --- | --- | --- |
| 1.4.3 | Contrast (Minimum) | AA | Text ≥ 4.5:1, large text ≥ 3:1 against its surface token |
| 2.4.7 | Focus Visible | AA | Every interactive element shows a 2px focus ring on keyboard focus |
| 2.1.1 | Keyboard | A | All actions reachable with Tab, Arrow, Enter, Space, Escape |
| 2.1.2 | No Keyboard Trap | A | Focus can leave any component with Tab/Shift+Tab or Escape |
| 2.5.8 | Target Size (Minimum) | AA | Touch targets ≥ 24×24 CSS px, 44×44 recommended on mobile |
| 4.1.2 | Name, Role, Value | A | Every control exposes semantic role, accessible name and current state |
| 1.4.11 | Non-text Contrast | AA | Borders, icons and focus indicators ≥ 3:1 against adjacent colours |
| 3.3.2 | Labels or Instructions | A | Inputs have persistent visible labels, never placeholder-only |

Supporting practices in the codebase:

- Semantic landmarks (`header`, `main`, `footer`, `nav`) and heading order in `page.tsx`.
- Radix primitives provide focus traps, roving tabindex, `aria-*` wiring and scroll locks.
- Theme toggle ships both icon and text alternatives; `suppressHydrationWarning` avoids
  flash-of-wrong-theme during hydration.
- Every button variant renders a visible `focus-visible` ring independent of pointer input.

## Build, output and deployment

```bash
bun run build   # next build → .next/standalone (+ static & public copied in)
bun run start   # NODE_ENV=production bun .next/standalone/server.js
```

`next.config.ts` uses `output: "standalone"` so the build produces a self-contained server —
deploy the `.next/standalone` folder plus `.next/static` and `public/` to any Node host or
container.

**Caddy**: `Caddyfile` listens on **:81** and reverse-proxies to `localhost:3000`, with an
optional `?XTransformPort=<port>` escape hatch for routing to another local port.

```bash
caddy run --config Caddyfile
```

> `typescript.ignoreBuildErrors` is currently `true` in `next.config.ts` — run
> `npx tsc --noEmit` in CI if you want type errors to fail the build.

## Examples

`examples/websocket/` contains a self-contained WebSocket demo:

- `server.ts` — Node WebSocket server
- `frontend.tsx` — React client for the demo

These files are intentionally outside the Next.js app directory and are not part of the bundle.

## What is git-ignored

`.gitignore` keeps local-only and generated files out of the repository, notably:

- **`node_modules`** — dependencies (always reinstall with `bun install` after cloning)
- `.env*` — environment variables / secrets
- `/.next/`, `/out/`, `/build` — build output
- `/coverage`, `*.tsbuildinfo`, `next-env.d.ts` — test/build artifacts
- logs (`*.log`, `npm-debug.log*`, `dev.log`, `server.log`)
- `.DS_Store`, `*.pem`, `.claude`, `/skills/`, `local-*`

## Roadmap

- [ ] Export the token set as machine-readable JSON (`tokens.json`) generated from `data.ts`
- [ ] Figma variable library mapped 1:1 to the token table
- [ ] Per-component docs pages with live playgrounds
- [ ] Visual regression + axe-core checks in CI
- [ ] Colour-contrast linter wired into the build

---

Built with Next.js, Tailwind CSS and shadcn/ui. Issues and PRs are welcome.
