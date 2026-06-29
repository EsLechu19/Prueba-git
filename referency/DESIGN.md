---
name: Kinetic Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c5c9ac'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8f9378'
  outline-variant: '#444932'
  surface-tint: '#b0d500'
  primary: '#ffffff'
  on-primary: '#2a3400'
  primary-container: '#caf300'
  on-primary-container: '#596c00'
  inverse-primary: '#536600'
  secondary: '#c8c6c5'
  on-secondary: '#303030'
  secondary-container: '#474746'
  on-secondary-container: '#b7b5b4'
  tertiary: '#ffffff'
  on-tertiary: '#303030'
  tertiary-container: '#e4e2e1'
  on-tertiary-container: '#656464'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#caf300'
  primary-fixed-dim: '#b0d500'
  on-primary-fixed: '#171e00'
  on-primary-fixed-variant: '#3e4c00'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-sm:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style

The design system is built for a high-intensity, premium fitness environment. It targets a demographic that values performance, momentum, and professional-grade tools. The brand personality is aggressive yet disciplined, designed to evoke an immediate psychological "get to work" response.

The visual style is **High-Contrast / Bold** with a focus on deep immersion. By utilizing a dark-first architecture, the UI recedes to let vibrant action-oriented accents and high-quality photography take center stage. The aesthetic leans into a "technical-athletic" look—combining the precision of high-end gym equipment with the energy of a digital performance tracker. Motion should be sharp and intentional, mirroring the explosive nature of physical training.

## Colors

The palette is anchored in **Electric Lime (#D4FF00)**, a color chosen for its high visibility and association with energy and physiological arousal. This is used exclusively for primary actions, progress indicators, and critical brand moments.

The background utilizes a layered dark strategy. The base surface is **Deep Charcoal (#121212)** to minimize eye strain in low-light gym environments and provide infinite depth. Elevated surfaces use **#1E1E1E** and **#2A2A2A** to create a clear visual hierarchy without relying on light-colored borders. Typography is strictly **Pure White (#FFFFFF)** for maximum legibility against the dark background, while secondary information is pushed back using a mid-tone gray to maintain focus on the primary content.

## Typography

This design system employs a dual-typeface strategy to balance impact with utility. 

**Montserrat** is used for all headlines and display text. Its geometric, wide-set characters feel grounded and powerful. We use Heavy (800) and Bold (700) weights to dominate the layout. Negative letter spacing is applied to larger sizes to create a "packed" and intense aesthetic.

**Inter** is used for all functional UI elements, body copy, and labels. It provides a technical, neutral contrast to the expressive headlines. Labels are often set in All Caps with slight letter spacing to mimic the industrial marking found on gym hardware. For mobile, headline sizes are aggressively scaled down to ensure that even long workout names remain visible on a single line.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a strict 8px rhythmic base. This ensures all components align to a mathematical "heartbeat." 

- **Mobile:** A 4-column grid with 20px side margins. Content is mostly stacked, utilizing vertical rhythm to separate workout blocks.
- **Desktop:** A 12-column grid with a maximum content width of 1440px. Large 64px margins provide "breathing room" that makes the bold typography feel intentional rather than crowded.

Spacing between related elements (e.g., a label and an input) stays tight (8px), while spacing between major sections is expansive (48px - 80px) to prevent visual fatigue and emphasize the "premium" nature of the product.

## Elevation & Depth

In this dark-themed design system, we avoid traditional drop shadows which can look muddy on near-black backgrounds. Instead, we use **Tonal Layering** and **Subtle Inner Glows**.

- **Level 0 (Base):** #121212. Used for the main canvas.
- **Level 1 (Cards/Containers):** #1E1E1E. Used for the primary content containers.
- **Level 2 (Overlays/Popovers):** #2A2A2A. Used for elements that temporarily float over the UI.

To emphasize depth, elevated elements may use a 1px solid stroke in a slightly lighter shade (e.g., #333333) rather than a shadow. For high-energy components like active workout cards, a very subtle backdrop blur (Glassmorphism) can be applied to create a sense of focus, allowing the background photography to peek through without distracting from the data.

## Shapes

The shape language is defined by **Large Rounded Radii**. While the typography is sharp and bold, the containers are smooth. This juxtaposition prevents the UI from feeling too "hostile" or "brutalist," making it more approachable for a diverse fitness community.

- **Standard Elements:** 0.5rem (8px) for buttons and inputs.
- **Large Elements:** 1rem (16px) for cards and modals.
- **Extra Large:** 1.5rem (24px) for featured hero sections and promotional banners.

This "rounded-modern" approach mimics the ergonomic design of modern high-end cardio machines and wearable tech.

## Components

### Buttons
- **Primary:** Background #D4FF00, Text #121212, Bold weight, All Caps. No border.
- **Secondary:** Background transparent, 2px stroke #D4FF00, Text #D4FF00.
- **Ghost:** White text, no background. Used for less critical actions.

### Cards
Cards should be the primary vessel for information. Use background #1E1E1E. When a card is "Active" (e.g., a current exercise), it gains a 2px left-side border in Electric Lime.

### Input Fields
Inputs use a dark fill (#2A2A2A) with a bottom-only 2px border that glows Electric Lime when focused. Labels sit above the field in "Label-Bold" style.

### Chips & Tags
Used for muscle groups or equipment. Small, pill-shaped, with a dark gray background and white text. Active states switch to Electric Lime background.

### Progress Indicators
Progress bars use #D4FF00 for the fill. The track is a low-opacity version of the primary color (e.g., 10% opacity) to show the path ahead clearly.

### Photography
Images should use a subtle dark gradient overlay (linear, top-to-bottom) to ensure white typography remains legible when placed directly over photographs. Apply a slight desaturation to images to let the Electric Lime UI elements pop.