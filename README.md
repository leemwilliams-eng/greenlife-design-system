# greenlife-design-system

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_kLQrt6AACmKZxayv1ODCaQtZuSa1)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

# Green Life Design System

> Be present. Have knowledge. Pay attention.

A minimalist design system inspired by intentional living. Every element serves a purpose. Every choice is deliberate.

---

## Introduction

This design system is the single source of truth for building Green Life interfaces. It covers color tokens, typography, iconography, components, and layout. Every decision here is intentional — built to support a product that helps people see the world more clearly.

> Every picture throws a spark. Every spark can start a fire. This system is built to help you see clearly, create intentionally, and build without pretense.

**Community:** Igniters — founding members who were here before the fire started.

---

## Foundations

### Colors & Tokens

An emerald-infused palette rooted in nature. Dark backgrounds with intentional green accents.

#### Semantic Colors

| Token | CSS Variable | Usage |
|-------|-------------|-------|
| Background | `--background` | Primary background color |
| Foreground | `--foreground` | Primary text color |
| Card | `--card` | Card background color |
| Card Foreground | `--card-foreground` | Card text color |
| Primary | `--primary` | Primary brand color |
| Primary Foreground | `--primary-foreground` | Text on primary |
| Secondary | `--secondary` | Secondary surfaces |
| Muted | `--muted` | Muted backgrounds |
| Muted Foreground | `--muted-foreground` | Muted text |
| Accent | `--accent` | Gold spark highlights |
| Spark | `--spark` | Igniter gold accent |
| Border | `--border` | Border color |
| Destructive | `--destructive` | Error states |

#### Brand Palette

| Name | Role |
|------|------|
| Primary — Emerald | Brand green |
| Spark — Gold | Igniter accent |
| Background — Forest | Dark base |

#### Chart Colors

Emerald · Teal · Lime · Cyan · Mint

#### Usage

```css
.element {
  background-color: var(--background);
  color: var(--foreground);
  border: 1px solid var(--border);
}
```

```tsx
/* Tailwind CSS */
<div className="bg-background text-foreground border-border" />
```

---

### Typography

Clean, purposeful typography. Built on **Plus Jakarta Sans**.

#### Typefaces

| Font | Role |
|------|------|
| Plus Jakarta Sans SemiBold | Brand name — "Green Life" only |
| Plus Jakarta Sans Light | Body, UI, and all other text |

#### Type Scale

| Level | Example | Class |
|-------|---------|-------|
| Display | Be present | `text-5xl font-light` |
| Heading 1 | Have knowledge | `text-4xl font-light` |
| Heading 2 | Pay attention | `text-3xl font-normal` |
| Heading 3 | Every spark matters | `text-2xl font-normal` |
| Heading 4 | Start the fire | `text-xl font-medium` |
| Body Large | Every choice is deliberate | `text-lg font-normal` |
| Body | Intentional design choices | `text-base font-normal` |
| Body Small | Small but purposeful | `text-sm font-normal` |
| Caption | Sparks thrown | `text-xs font-medium` |

#### Font Weights

| Name | Weight |
|------|--------|
| Light | 300 |
| Normal | 400 |
| Medium | 500 |
| Semibold | 600 |
| Bold | 700 |

#### Usage

```tsx
/* Tailwind CSS */
<h1 className="text-4xl font-semibold leading-tight">Heading</h1>
<p className="text-base font-normal leading-relaxed">Body text</p>
<code className="font-mono text-sm">Code snippet</code>

/* CSS Variables */
font-family: var(--font-sans);
font-family: var(--font-mono);
```

---

## Elements

### Icons

Thoughtfully selected icons from **Lucide React**. Each serves a purpose.

#### Icon Sizes

| Name | Size |
|------|------|
| xs | 12px |
| sm | 16px |
| md | 20px |
| lg | 24px |
| xl | 32px |

#### Usage

```tsx
import { Settings, Bell, Search, Leaf, Flame, Scan, Camera } from "lucide-react"

// Default size (24px)
<Leaf />

// Custom size
<Leaf className="w-4 h-4" />
<Leaf className="w-5 h-5" />
<Leaf className="w-6 h-6" />

// With color
<Leaf className="text-muted-foreground" />
<Leaf className="text-primary" />
```

---

### Components

Minimal, functional building blocks. Every component serves a purpose. Accessible by default.

#### Buttons

| Variant | Usage |
|---------|-------|
| Primary | Main actions — Scan, Submit, Ignite |
| Secondary | Supporting actions |
| Outline | Tertiary actions |
| Ghost | Inline / low-emphasis |
| Destructive | Dangerous or irreversible actions |

Sizes: Small · Default · Large

#### Inputs

| State | Notes |
|-------|-------|
| Default | Label + border |
| With Icon | Search bar, scan input |
| Disabled | Non-interactive state |

#### Toggle Groups

| Variant | Usage |
|---------|-------|
| Grid | Card/tile layout toggle |
| List | Row layout toggle |

#### Badges — Match Confidence

| Variant | Color | Usage |
|---------|-------|-------|
| Exact Match | Emerald / `#EDF6EE` | `exact_product` |
| Probable | Blue / `#EBF4FF` | `probable_product` |
| Estimate | Amber / `#FEF9EC` | `category_estimate` |
| Material | Muted / `#F2F4F7` | `material_estimate` |
| Destructive | Red | Error states |
| Success | Green | Confirmed actions |
| Warning | Amber | Caution states |

#### Cards

| Type | Behavior |
|------|----------|
| Basic Card | Static — padding and border |
| Interactive Card | Hover state — border highlight |

---

### Layout & Grid

Structure with intention. Consistent spacing, responsive breakpoints, and grids that breathe.

#### Grid System

8-column grid with responsive scaling.

#### Spacing Scale

| Token | Value |
|-------|-------|
| `space-0` | 0px |
| `space-0.5` | 2px |
| `space-1` | 4px |
| `space-2` | 8px |
| `space-3` | 12px |
| `space-4` | 16px |
| `space-5` | 20px |
| `space-6` | 24px |
| `space-8` | 32px |
| `space-10` | 40px |
| `space-12` | 48px |
| `space-16` | 64px |

#### Breakpoints

| Prefix | Min Width | Description |
|--------|-----------|-------------|
| `sm:` | 640px | Small devices, phones in landscape |
| `md:` | 768px | Medium devices, tablets |
| `lg:` | 1024px | Large devices, laptops |
| `xl:` | 1280px | Extra large devices, desktops |
| `2xl:` | 1536px | Wide screens |

#### Usage

```tsx
/* Grid Layout */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <Card />
  <Card />
  <Card />
</div>

/* Flex Layout */
<div className="flex items-center justify-between gap-4">
  <Logo />
  <Navigation />
</div>

/* Responsive Spacing */
<div className="p-4 md:p-6 lg:p-8">
  <Content />
</div>
```

---

## Brand Voice

> "If everyone knew the real impact of what they were doing, they would make different choices."
> — Lee Williams

Green Life is not an app. It is a way of seeing and a way of knowing.

**Manifesto:**
We are informed and talented people. We have gone to the moon and back. But the signs of what we are doing are everywhere. The straws. The packaging. The Styrofoam. The food on the plate that traveled 3,000 miles to get cold in front of you.

That changes now.

Point your phone at the world around you. We will tell you what you are looking at — honestly, clearly, and without pretending to know more than we do.

Every picture throws a spark. Every spark can start a fire.

*Be present. Have knowledge. Pay attention.*

---

## Confidence Transparency Principle

Green Life never overstates precision. When only an estimate exists, we say estimate. When data is exact, we say exact. Trust matters more than broad but weak coverage.

| Match Type | Label | When to Use |
|-----------|-------|-------------|
| `exact_product` | Exact Match | Product identified with certainty |
| `probable_product` | Probable | High confidence, not confirmed |
| `category_estimate` | Estimate | Category-level data only |
| `material_estimate` | Material | Material composition estimate only |

---

## Repository

- **Design System:** [v0-design-system-eta-jade.vercel.app](https://v0-design-system-eta-jade.vercel.app)
- **GitHub:** [github.com/leemwilliams-eng/greenlife-design-system](https://github.com/leemwilliams-eng/greenlife-design-system)

---

*Green Life Design System — v1.0 — March 2026*

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/leemwilliams-eng/greenlife-design-system" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
