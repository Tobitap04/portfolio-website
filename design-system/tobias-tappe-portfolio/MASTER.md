# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Tobias Tappe Portfolio
**Updated:** 2026-04-11
**Aesthetic:** Terminal Precision — OLED dark, electric cyan, monospace detail font

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable |
|------|-----|--------------|
| Background | `#020408` | `--color-background` |
| Surface | `#080C12` | `--color-surface` |
| Surface Elevated | `#0D1420` | `--color-surface-elevated` |
| Border | `#1A2332` | `--color-border` |
| Text Primary | `#E8EDF5` | `--color-text-primary` |
| Text Secondary | `#7A8FA8` | `--color-text-secondary` |
| Text Muted | `#4A5D74` | `--color-text-muted` |
| Accent / CTA | `#22D3EE` | `--color-accent` / `--color-cta` |
| Accent Hover | `#67E8F9` | `--color-accent-hover` |
| Accent Glow | `rgba(34,211,238,0.12)` | `--color-accent-glow` |

**No orange. Ever.** Orange has been removed from the palette entirely.

### Typography

- **Heading Font:** Syne (400–800) — geometric, confident, distinct
- **Body / Mono Font:** DM Mono (300–500) — terminal feel, precise, readable
- **Mood:** AI research interface, high-precision, premium dark

**Google Fonts:**
```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` | Tight gaps |
| `--space-sm` | `8px` | Icon gaps, inline spacing |
| `--space-md` | `16px` | Standard padding |
| `--space-lg` | `24px` | Section padding |
| `--space-xl` | `32px` | Large gaps |
| `--space-2xl` | `48px` | Section margins |
| `--space-3xl` | `64px` | Hero padding |

---

## Style Guidelines

**Style:** Terminal Precision / OLED Dark

**Keywords:** Deep black, electric cyan, monospace, AI interface, precision, terminal, high-contrast, high-readability

**Key Effects:**
- Cyan glow on interactive elements: `box-shadow: 0 0 20px rgba(34,211,238,0.15)`
- Subtle scanline texture overlay via CSS `repeating-linear-gradient`
- Cyan accent line at top of hero section
- Glassmorphism with cyan-tinted borders

### Page Pattern

**Pattern Name:** Portfolio Grid

- **Section Order:** 1. Hero (Name/Role), 2. Projects (Grid), 3. About/Skills/Experience, 4. Resume, 5. Contact
- **CTA Placement:** Hero buttons + Contact section email

---

## Anti-Patterns (Do NOT Use)

- ❌ **Orange in any form** — completely removed from palette
- ❌ **Purple gradients on white** — cliché AI aesthetic
- ❌ **Inter / Roboto / Arial** — too generic
- ❌ **Light mode default**
- ❌ **Emojis as icons** — Use SVG icons (Lucide)
- ❌ **Missing cursor:pointer** — All clickable elements must have it
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — 4.5:1 minimum

---

## Pre-Delivery Checklist

- [ ] No orange anywhere
- [ ] All icons from Lucide (consistent)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150ms)
- [ ] Text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
