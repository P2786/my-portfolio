# STEP 2 – Design System & Style Guide

This document defines the **visual language, motion principles, and layout rules** for the portfolio. No code should be written before this is finalized.

---

## 1. Design Philosophy

**Tone:** Modern, confident, immersive, developer-centric  
**Keywords:** Cinematic, smooth, intentional, premium, minimal-noise  
**Inspiration Type:** High-end frontend portfolios (not corporate templates)

The design must feel:
- Crafted, not generated
- Animated with purpose, not decoration
- Calm when idle, expressive on interaction

---

## 2. Color System

### Base Theme
- **Background (Primary):** #0B0E14 (near-black, slightly blue-tinted)
- **Surface / Cards:** #111827 (dark slate)
- **Border / Dividers:** rgba(255,255,255,0.08)

### Accent Colors (Used Sparingly)
- **Primary Accent:** #6366F1 (Indigo / Electric Blue)
- **Secondary Accent:** #22D3EE (Cyan – for highlights)
- **Success / Positive:** #10B981

### Rules
- Accents only appear on:
  - Hover
  - Active states
  - Important call-to-actions
- Never more than **2 accent colors in one viewport**

---

## 3. Typography System

### Fonts
- **Headlines:** Space Grotesk / Inter Tight
- **Body:** Inter
- **Code / Meta:** JetBrains Mono

### Type Scale
- H1: 64–72px (desktop), animated
- H2: 40–48px
- H3: 28–32px
- Body: 16–18px
- Small/meta: 13–14px

### Typography Motion Rules
- Headlines animate on **entry only**
- Body text never animates letter-by-letter
- Use line or word-based reveals, not characters, except hero

---

## 4. Spacing & Layout Rules

### Grid
- 12-column grid (desktop)
- Max width: 1200–1280px
- Side padding: 24px (mobile), 48px (desktop)

### Vertical Rhythm
- Section padding: 120–160px
- Inner spacing: multiples of 8px

### Layout Principles
- One primary focus per screen
- Avoid dense stacking of elements
- White space is intentional, not empty

---

## 5. Motion Design Rules (CRITICAL)

### Easing
- Default: cubic-bezier(0.4, 0.0, 0.2, 1)
- Exit animations slightly faster than entry

### Duration
- Micro-interactions: 150–250ms
- Section reveals: 600–900ms
- Page transitions: 500–700ms

### Motion Intensity
- Subtle by default
- Strong motion only for:
  - Hero
  - Page transitions
  - 3D sections

### Forbidden
- No bounce easing
- No infinite flashy animations
- No autoplay-heavy motion

---

## 6. Light vs Dark Strategy

- **Dark mode only (default)**
- Light mode optional later

Reason:
- Dark enhances motion perception
- Feels premium and modern
- Reduces visual noise with animations

---

# STEP 3 – Tech Stack & Architecture Document

## 1. Core Stack

- **Framework:** Next.js (App Router)
- **Language:** JavaScript (optionally TypeScript later)
- **Styling:** Tailwind CSS + custom CSS

## 2. Animation Stack (Purpose-Based)

- **Framer Motion:**
  - Page transitions
  - UI interactions
  - Layout animations

- **GSAP + ScrollTrigger:**
  - Scroll storytelling
  - Parallax effects
  - Timeline-based sequences

- **CSS Animations:**
  - Simple hover states
  - Performance-critical micro effects

- **Three.js / React Three Fiber:**
  - 3D scenes
  - Interactive objects

## 3. UI & Component Libraries

- shadcn/ui – base components
- Aceternity UI – advanced animated sections
- Magic UI – loaders, reveals
- Uiverse – micro-interaction components

## 4. Project Structure (Planned)

- /app – routes
- /components – reusable UI
- /sections – page sections
- /animations – motion logic
- /styles – globals
- /public – assets
- /docs – documentation

## 5. Deployment

- GitHub (version control)
- Netlify (hosting)
- LinkedIn portfolio linking

---

# STEP 4 – Animation Inventory (What Animates & Why)

## 1. Global Animations

- Page enter/exit transitions
- Smooth scroll behavior

## 2. Hero Section

- Text reveal (GSAP timeline)
- Background ambient motion
- Cursor-based parallax

## 3. Section Reveals

- Fade + translate Y
- Triggered once per scroll

## 4. Hover & Micro-interactions

- Buttons: scale + glow
- Cards: tilt + shadow lift

## 5. Scroll Storytelling

- Text progression on scroll
- Parallax layers

## 6. 3D Interaction

- Subtle rotation on mouse move
- Camera easing, not snapping

## 7. Loaders & Feedback

- Animated loader on first load
- Success animations on actions

---

## Animation Rule Summary

Every animation must answer:
1. What user action triggers this?
2. What emotion does it create?
3. Does it improve understanding?

If not → remove it.

---

**Status:** Design, Tech Stack, and Animation System locked.  
**Next Step:** Project scaffolding and static layout build.

