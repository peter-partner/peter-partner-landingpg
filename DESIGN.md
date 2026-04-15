# Peter Partner — Corporate Identity & Colour Design Guidelines

## 1. Brand Philosophy

Peter Partner sits at the intersection of **creative energy** and **operational precision**. The visual identity reflects this duality: a dark, premium foundation (credibility, seriousness) punctuated by vivid gradient accents (creativity, momentum, digital-native energy).

---

## 2. Core Colour Palette

### 2.1 Background Colours

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Base Black | `#08080f` | `bg-[#08080f]` | Primary page background |
| Layer Dark | `#0a0a13` | `bg-[#0a0a13]` | Alternating section background |
| Card Surface | `#10101a` | `bg-[#10101a]` | Card / panel background |
| Glass Card | `rgba(16,16,26,0.8)` | `.glass-card` | Frosted glass panels (with `backdrop-blur`) |

> **Rule:** Alternate between `#08080f` and `#0a0a13` across adjacent sections to create natural depth without sharp breaks.

---

### 2.2 Accent Colours — The Brand Triad

Peter Partner uses a **three-colour accent system**. Each colour carries semantic meaning and should be applied consistently.

#### Purple — Strategy & Technology
| Shade | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Purple 400 | `#a78bfa` | `text-purple-400` | Light text on dark surfaces |
| **Purple 500** | `#8b5cf6` | `purple-500` | **Primary brand accent** — CTAs, highlights, borders |
| Purple 600 | `#7c3aed` | `purple-600` | Button fills, active states |

**Semantic use:** Anything related to digital, technology, platform, strategy.

#### Pink / Magenta — Creativity & Content
| Shade | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Pink 400 | `#f472b6` | `text-pink-400` | Light text on dark surfaces |
| **Pink 500** | `#ec4899` | `pink-500` | **Creative accent** — content, campaigns, team |
| Pink 600 | `#db2777` | `pink-600` | Button gradients, hover states |

**Semantic use:** Anything related to creative content, TikTok, brand expression.

#### Amber / Gold — Value & Partnership
| Shade | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Amber 400 | `#fbbf24` | `text-amber-400` | Light text on dark surfaces |
| **Amber 500** | `#f59e0b` | `amber-500` | **Value accent** — revenue, product, partners |
| Amber 600 | `#d97706` | `amber-600` | Borders, secondary highlights |

**Semantic use:** Anything related to revenue, manufacturing, physical products, goals.

---

### 2.3 Text Colours

| Name | Hex | Tailwind | Usage |
|------|-----|----------|-------|
| Primary White | `#f0f0f8` | `text-white` | Headlines, key labels |
| Body | — | `text-gray-300` | Body copy, list items |
| Secondary | — | `text-gray-400` | Descriptions, supporting text |
| Muted | — | `text-gray-500` | Captions, footnotes, metadata |
| Disabled | — | `text-gray-700` | Dividers used as text separators |

---

### 2.4 Border Colours

Always use **20–30% opacity** on borders to avoid harshness:

| Context | Class Example |
|---------|--------------|
| Neutral section border | `border-gray-800/60` |
| Purple card border | `border-purple-500/20` — hover: `border-purple-500/50` |
| Pink card border | `border-pink-500/20` — hover: `border-pink-500/50` |
| Amber card border | `border-amber-500/20` — hover: `border-amber-500/50` |
| Navbar / footer | `border-purple-900/30` |

---

## 3. Gradient System

### 3.1 Brand Gradient (Primary)
Used for hero text, section titles, and key value callouts.

```css
background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f59e0b 100%);
```
**Class:** `.gradient-text`  
**Apply to:** Main headlines, stat numbers, key brand phrases.

### 3.2 Purple-Pink Gradient (Secondary)
```css
background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
```
**Class:** `.gradient-text-purple`  
**Apply to:** Supporting highlights, sub-headings.

### 3.3 CTA Button Gradient
```css
background: linear-gradient(to right, #7c3aed, #db2777);
```
**Tailwind:** `bg-gradient-to-r from-purple-600 to-pink-600`  
**Hover:** `hover:from-purple-500 hover:to-pink-500`  
**Apply to:** Primary action buttons only. Never use on secondary/ghost buttons.

### 3.4 Section Divider Gradient
```css
background: linear-gradient(to right, #f59e0b, #8b5cf6, #ec4899);
```
**Apply to:** Thin horizontal rules between major sections (1px height).

---

## 4. Background Glow / Orbs

Ambient glows reinforce section themes and add depth. Never use more than **3 orbs per section**.

| Colour | CSS | Typical Size | Blur |
|--------|-----|-------------|------|
| Purple glow | `bg-purple-700/10` | `500–600px` | `blur-[100–120px]` |
| Pink glow | `bg-pink-700/8` | `250–350px` | `blur-[80–100px]` |
| Amber glow | `bg-amber-600/8` | `250px` | `blur-[80–100px]` |

> **Rule:** Orbs must always use `pointer-events-none` and `absolute` positioning so they never block interaction.

---

## 5. Colour Assignment by Section

| Section | Primary Accent | Secondary | Badge Colour |
|---------|---------------|-----------|-------------|
| Hero | Purple + Pink + Amber (full triad) | — | Purple |
| Problem | Amber (producer) + Purple (digital) | Red (gap alert) | Amber |
| What We Do | Purple, Pink, Amber (rotating) | — | Purple |
| Vision / Mission / Goal | Purple, Pink, Amber (one each) | — | Pink |
| Market | Purple | Pink | Purple |
| Revenue | Purple, Pink, Amber (one per tier) | — | Amber |
| Team | Amber, Purple, Pink, Amber (rotating) | — | Pink |
| Contact / CTA | Purple + Pink | — | Purple |

---

## 6. Semantic Colour Rules

| Signal | Colour | Example |
|--------|--------|---------|
| Digital / Platform | Purple | TikTok features, tech services |
| Creative / Content | Pink | Campaigns, talent, content production |
| Product / Revenue | Amber | Manufacturing, GMV, margins |
| Warning / Gap | Red (`red-400`, `red-500/5` bg) | The Digital Bottleneck callout |
| Success / Growth | Purple-to-Pink gradient | Stats, positive metrics |

---

## 7. Do's and Don'ts

### Do
- Use the three-accent triad consistently — purple = digital, pink = creative, amber = product/value
- Pair glass cards with a matching accent border at 20% opacity
- Use gradient text **only** on key phrases — not entire paragraphs
- Keep background colours alternating (`#08080f` / `#0a0a13`) for section rhythm
- Apply hover border brightening (`/20` → `/50`) on interactive cards

### Don't
- Use white or light backgrounds — Peter Partner is dark-first
- Mix accent colours arbitrarily — each colour carries meaning
- Use full-opacity borders — always apply opacity (15–30%)
- Apply the primary CTA gradient to more than one button per view
- Use red except for warning/problem callouts

---

## 8. Colour Accessibility Notes

All primary text (`text-white`, `text-gray-300`) against the dark backgrounds (`#08080f`, `#0a0a13`) passes **WCAG AA** contrast requirements.

- Avoid using `text-gray-600` or dimmer on dark backgrounds for body copy
- Gradient text (used on large display type only) is decorative — pair with a fallback white headline for screen readers if needed
- Icon-only elements must always have `aria-label` attributes
