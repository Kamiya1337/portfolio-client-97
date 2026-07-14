---
name: Obsidian & Ivory
colors:
  surface: '#fcf9f3'
  surface-dim: '#dcdad4'
  surface-bright: '#fcf9f3'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ed'
  surface-container: '#f0eee8'
  surface-container-high: '#ebe8e2'
  surface-container-highest: '#e5e2dc'
  on-surface: '#1c1c18'
  on-surface-variant: '#494740'
  inverse-surface: '#31312d'
  inverse-on-surface: '#f3f0ea'
  outline: '#7a776f'
  outline-variant: '#cac6bd'
  surface-tint: '#605e5b'
  primary: '#0f0f0d'
  on-primary: '#ffffff'
  primary-container: '#252422'
  on-primary-container: '#8e8b88'
  inverse-primary: '#c9c6c2'
  secondary: '#665d4f'
  on-secondary: '#ffffff'
  secondary-container: '#ede1ce'
  on-secondary-container: '#6c6354'
  tertiary: '#100f10'
  on-tertiary: '#ffffff'
  tertiary-container: '#252425'
  on-tertiary-container: '#8d8b8c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e6e2de'
  primary-fixed-dim: '#c9c6c2'
  on-primary-fixed: '#1c1b1a'
  on-primary-fixed-variant: '#484644'
  secondary-fixed: '#ede1ce'
  secondary-fixed-dim: '#d1c5b3'
  on-secondary-fixed: '#211b0f'
  on-secondary-fixed-variant: '#4e4638'
  tertiary-fixed: '#e6e1e2'
  tertiary-fixed-dim: '#c9c5c6'
  on-tertiary-fixed: '#1c1b1c'
  on-tertiary-fixed-variant: '#484647'
  background: '#fcf9f3'
  on-background: '#1c1c18'
  surface-variant: '#e5e2dc'
  paper-warm: '#EDE8DF'
  surface-soft: '#CFC4B4'
  deep-black: '#080807'
  dark-surface: '#141412'
  text-muted: '#6F6A62'
  text-muted-dark: '#B8B2A8'
  border-light: rgba(37,36,34,0.16)
  border-dark: rgba(243,240,234,0.16)
typography:
  display-xl:
    fontFamily: Be Vietnam Pro
    fontSize: 80px
    fontWeight: '900'
    lineHeight: 88px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 64px
    fontWeight: '900'
    lineHeight: 72px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-caps:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  sidebar-width: 300px
  gutter: 2rem
  margin-desktop: 4rem
  margin-mobile: 1.5rem
  section-gap: 8rem
  rule-weight: 1px
---

## Brand & Style
The design system embodies "Quiet Luxury"—a philosophy of restraint, high-end editorial craftsmanship, and intentionality. It is inspired by the stark contrast of classical parchment and ink, translated into a modern digital interface. The target audience values exclusivity, high-quality content, and an interface that feels like a curated gallery rather than a tool.

The visual style is **Minimalist and Architectural**. It rejects the soft, bubbly trends of modern SaaS in favor of sharp corners, strong horizontal rules, and massive, confident typography. The aesthetic relies on the tension between generous "ivory" whitespace and deep "charcoal" surfaces to create a sense of rhythm and prestige.

## Colors
The palette is built on a "Paper and Ink" foundation. The primary background (Ivory) provides a warm, tactile base that is less harsh than pure white. Deep Black and Charcoal are used for high-impact typography and the primary navigation sidebar, creating a grounded, authoritative frame.

- **Primary:** Charcoal (#252422) for all primary text and structural elements.
- **Secondary:** Taupe (#D6CAB8) for subtle panels and accent surfaces.
- **Neutral:** Ivory (#F3F0EA) as the canvas.
- **Color Logic:** Use the "Deep Black" and "Dark Surface" exclusively for the navigation sidebar or high-contrast sections to denote a shift in context or importance.

## Typography
Typography is the primary vehicle for the brand’s voice. We use **Be Vietnam Pro** across all levels to maintain a contemporary, geometric edge. 

- **Display & Headlines:** Set in Black (900) or ExtraBold (800) weights. Use tight letter-spacing for large sizes to create a dense, "blocky" editorial feel. Headlines should be given immense breathing room above and below.
- **Body:** Set in Regular (400) with generous line-height to ensure readability and an airy, premium feel.
- **Labels:** Use the "label-caps" style for metadata, section headers, and small UI details to provide a sophisticated, structured contrast.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. A fixed-width dark sidebar (#080807) anchors the left side of the screen, while the main content area utilizes a sophisticated 12-column grid.

- **Horizontal Rules:** Use 1px rules (border-light) to separate sections. These rules should span the full width of the content container, emphasizing the horizontal rhythm.
- **Whitespace:** Embrace "wasteful" whitespace. Large gaps (section-gap) between content blocks signal luxury and prevent the UI from feeling cluttered.
- **Breakpoints:**
  - **Desktop (1280px+):** Sidebar is persistent. Content has 4rem margins.
  - **Tablet (768px - 1279px):** Sidebar collapses into a menu. Margins reduce to 2rem.
  - **Mobile (<767px):** Single column. Margins at 1.5rem. Headlines scale down significantly to ensure they do not wrap awkwardly.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering** and contrast rather than shadows. The UI is intentionally flat and architectural.

- **Layers:** Use "Ivory" as the base, "Warm Paper" for secondary content blocks, and "Taupe" or "Soft Beige" for interactive or highlighted surfaces.
- **Contrast:** High-elevation elements (like navigation) use "Deep Black" to sit visually "above" the light background content.
- **Borders:** Subtle, low-opacity borders are preferred over shadows to define container boundaries. Shadows should be avoided entirely to maintain the crisp, editorial aesthetic.

## Shapes
The shape language is strictly **Squared (Sharp)**. 

Every UI element—from buttons and input fields to large image containers and cards—must have 0px corner radii. This reinforces the "architectural" and "intentional" nature of the design, distancing it from the consumer-grade friendliness of rounded UI trends.

## Components
- **Buttons:** Primary buttons are solid Charcoal with Ivory text. Secondary buttons use a 1px Charcoal border with no fill. Both are perfectly rectangular with no rounding. Hover states involve a subtle background shift to Taupe.
- **Sidebar:** The primary navigation resides in a fixed "Deep Black" column. Links are set in "label-caps" with a "Dark Muted Text" color, shifting to Ivory on active/hover.
- **Horizontal Rules:** Essential for the editorial look. Use them to top-align section headlines, creating a consistent anchor point for the eye.
- **Cards:** Cards should not have shadows. Use the "Warm Paper" or "Soft Beige" background to differentiate them from the "Ivory" canvas. They are often delineated by 1px borders.
- **Input Fields:** Simple 1px bottom-border or full-border boxes in "Charcoal" with 0px radius. Use "Muted Text" for placeholders.
- **Chips/Labels:** Small, rectangular boxes with "Taupe" background and "Charcoal" text. No rounded corners.