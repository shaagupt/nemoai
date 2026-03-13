---
name: design-system
description: Background knowledge about the Nemo AI design system — colors, components, patterns, spacing, and UI conventions. Use this whenever making any UI or styling changes.
user-invocable: false
---

# Nemo AI Design System

Always follow these patterns when creating or modifying UI. Do not deviate unless explicitly asked.

## Color Tokens (Tailwind)

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#020617` | Page background (near-black) |
| `foreground` | `#e2e8f0` | Default body text |
| `navy` | `#0a1628` | Secondary dark background |
| `deep-ocean` | `#050d1a` | Deeper background accents |
| `cyan-glow` | `#06b6d4` | Primary accent — CTAs, links, Agent A, headings, labels |
| `teal-glow` | `#14b8a6` | Secondary accent — finding associations |
| `blue-glow` | `#3b82f6` | Gradient midpoint, logo |
| `purple-glow` | `#8b5cf6` | Agent B accent, gradient endpoint |
| `magenta-glow` | `#d946ef` | Rare accent — orbs only |

Use these via Tailwind classes: `text-cyan-glow`, `bg-cyan-glow/10`, `ring-cyan-glow/30`, etc.

## Typography

- **Font:** Geist Sans (`--font-geist-sans`), Geist Mono for code/labels
- **Hero title:** `text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight`
- **Page titles:** `text-4xl sm:text-5xl font-bold tracking-tight`
- **Section headings:** `text-2xl font-semibold text-white`
- **Card titles:** `text-xl font-semibold text-white`
- **Body text:** `text-slate-300 leading-relaxed`
- **Muted text:** `text-slate-400`
- **Labels/metadata:** `text-xs font-medium uppercase tracking-wider text-cyan-glow`
- **Monospace labels:** `font-mono text-xs font-medium tracking-wider`

## Page Layout

Every page follows this structure:
```
<div className="relative min-h-screen overflow-hidden">
  <BioluminescentOrbs />
  <div className="relative z-10 mx-auto max-w-3xl px-6 py-32">
    {/* Back navigation */}
    {/* Content */}
  </div>
</div>
```

- Max width: `max-w-3xl` for content pages, `max-w-5xl` for grid/listing pages
- Padding: `px-6 py-32`
- Always include `<BioluminescentOrbs />` as background
- Always include `relative z-10` on content wrapper to sit above orbs

## Navigation

### Back links (top of page)
```
className="mb-8 inline-flex items-center text-sm text-slate-400 transition-colors hover:text-white"
```
Format: `← Back to [Section]`

### Inline nav links (bottom of page)
```
className="text-sm text-slate-400 transition-colors hover:text-white"
```

## Buttons & CTAs

### Primary CTA (rounded pill)
```
className="inline-flex items-center gap-2 rounded-full bg-cyan-glow/10 px-10 py-4 text-base font-medium text-cyan-glow ring-1 ring-cyan-glow/30 transition-all hover:bg-cyan-glow/20 hover:ring-cyan-glow/50"
```
Always centered: wrap in `<div className="mt-16 text-center">`

### Small pill links (e.g., trial links)
```
className="rounded-full bg-cyan-glow/10 px-4 py-2 text-xs font-medium text-cyan-glow ring-1 ring-cyan-glow/30 transition-all hover:bg-cyan-glow/20 hover:ring-cyan-glow/50"
```

### Tag/badge pills
```
className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400"
```

### Winner badges
- Agent A wins: `bg-cyan-glow/10 text-cyan-glow`
- Agent B wins: `bg-purple-glow/10 text-purple-glow`

## Cards

### Standard content card
```
className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8 backdrop-blur-sm"
```

### Interactive/clickable card (adds hover)
```
className="group rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:border-cyan-glow/30 hover:bg-slate-900/80"
```
Include a forward arrow that animates on hover:
```
<span className="mt-4 inline-flex items-center text-sm font-medium text-cyan-glow transition-transform group-hover:translate-x-1">
  Read More →
</span>
```

### Highlight card (call-to-action box)
```
className="rounded-2xl border border-cyan-glow/20 bg-cyan-glow/5 p-8 text-center backdrop-blur-sm"
```

### Methodology/info card (inside content cards)
```
className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm"
```
With numbered label: `text-xs font-medium uppercase tracking-wider text-cyan-glow`

## Chat / Conversation Display

### Terminal header
```
<div className="rounded-t-xl border border-b-0 border-slate-700 bg-slate-950 px-4 py-2">
  <div className="flex items-center gap-2">
    <div className="h-3 w-3 rounded-full bg-red-500/70" />
    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
    <div className="h-3 w-3 rounded-full bg-green-500/70" />
    <span className="ml-2 font-mono text-xs text-slate-500">...</span>
  </div>
</div>
```

### Message container
```
className="rounded-b-xl border border-slate-700 bg-slate-900/80 p-6"
```
Messages spaced with `space-y-6`.

### Chat bubbles
- **Agent A:** cyan label, left-aligned, `bg-slate-800/80`, `rounded-tl-sm`
- **Agent B:** purple label, right-aligned, `bg-slate-700/60`, `rounded-tr-sm`
- Both: `rounded-2xl px-5 py-4 text-sm leading-relaxed text-slate-200`
- Max width: `max-w-[80%]`

## Gradient Text
```
className="bg-gradient-to-r from-cyan-glow via-blue-glow to-purple-glow bg-clip-text text-transparent"
```
Used for hero title and logo.

## Spacing Conventions
- Between sections: `mt-12` or `mt-16`
- Card title to body: `mt-3` or `mt-4`
- CTA block from content: `mt-16`
- List items: `space-y-3`
- Card lists: `space-y-6` or `space-y-8`
- Bullet points: cyan dot `h-2 w-2 rounded-full bg-cyan-glow` with `gap-3`

## Responsive
- Mobile-first — all layouts work on mobile by default
- Grid listings: `grid gap-8 sm:grid-cols-1 md:grid-cols-2`
- Text scaling: hero uses `text-5xl sm:text-6xl md:text-7xl`, page titles use `text-4xl sm:text-5xl`

## Animation
- BioluminescentOrbs on every page (canvas-based, `fixed inset-0 z-0`)
- Hover transitions: `transition-all`, `transition-colors`, `transition-transform`
- Arrow slide: `group-hover:translate-x-1`
- No page transitions or scroll animations currently
