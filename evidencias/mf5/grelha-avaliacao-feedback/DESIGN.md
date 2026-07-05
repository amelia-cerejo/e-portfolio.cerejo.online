---
name: Apiary Insight
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#534434'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#867461'
  outline-variant: '#d8c3ad'
  surface-tint: '#855300'
  primary: '#855300'
  on-primary: '#ffffff'
  primary-container: '#f59e0b'
  on-primary-container: '#613b00'
  inverse-primary: '#ffb95f'
  secondary: '#006c4a'
  on-secondary: '#ffffff'
  secondary-container: '#82f5c1'
  on-secondary-container: '#00714e'
  tertiary: '#0053db'
  on-tertiary: '#ffffff'
  tertiary-container: '#94aeff'
  on-tertiary-container: '#003ba1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffddb8'
  primary-fixed-dim: '#ffb95f'
  on-primary-fixed: '#2a1700'
  on-primary-fixed-variant: '#653e00'
  secondary-fixed: '#85f8c4'
  secondary-fixed-dim: '#68dba9'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#005137'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-desktop: 32px
  container-padding-mobile: 16px
  gutter: 24px
  card-gap: 24px
  section-margin: 48px
---

## Brand & Style

This design system embodies "Nature-Tech"—a synthesis of organic warmth and precision engineering. Designed for professional beekeepers and agricultural technologists, the visual narrative prioritizes reliability and biological health through a sophisticated Corporate Modern lens. 

The aesthetic is characterized by high-clarity data visualization set against a "warm-tech" backdrop. We balance the industrious, organic nature of the hive with the structured requirements of IoT monitoring. The interface should feel professional and expansive, using generous whitespace to prevent information fatigue in data-dense environments.

## Colors

The palette is rooted in the "Honey & Forest" spectrum. 

- **Primary (Honey Gold & Amber):** Used for primary actions, branding, and active states. It represents the product and value of the hive.
- **Secondary (Forest Green):** Reserved strictly for "Healthy" indicators, growth metrics, and stable environmental readings.
- **Tertiary (Royal Blue):** Utilized for technical monitoring, system alerts, and connectivity status.
- **Neutrals:** We use a range of warm greys (Zinc/Stone) to maintain a soft, organic feel. 
- **Surfaces:** Backgrounds utilize a soft cream (`#FFFBEB`) for the main workspace to reduce eye strain, while cards and containers use crisp white to pop against the subtle tint.

## Typography

Inter is chosen for its exceptional legibility in data-heavy applications. The typographic scale is optimized for information hierarchy. 

- **Display & Headlines:** Use tighter letter spacing and semi-bold weights to anchor dashboard sections.
- **Data Mono:** While Inter is sans-serif, we use specific weights for numerical data to ensure vertical alignment in tables and charts.
- **Label Caps:** Small, uppercase labels are used for metadata and table headers to distinguish them from actionable content.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

The layout philosophy is "Breathe First." Despite the density of beehive metrics (temperature, humidity, weight), each module is separated by a 24px gutter. 
- **Margins:** Use 32px safe areas on desktop to keep the focus central.
- **Density:** High-density tables are allowed within cards, but the cards themselves must have 24px internal padding.
- **Stacking:** On mobile, all 12-column spans reflow to a single column, with gutters reducing to 16px.

## Elevation & Depth

We use **Tonal Layers** combined with **Ambient Shadows** to create a structured hierarchy. 

1. **Floor (Level 0):** The warm cream background.
2. **Surface (Level 1):** White cards with a 1px border (`#E2E8F0`) and a very soft, diffused shadow (12% opacity, 15px blur, 4px Y-offset).
3. **Overlay (Level 2):** Modals and dropdowns use a more pronounced shadow (18% opacity) to indicate temporary interaction.

Avoid heavy black shadows; instead, use a tint of the neutral-grey for shadow colors to maintain the "Nature-Tech" softness.

## Shapes

The shape language is "Rounded." We avoid sharp edges to mirror the organic nature of honeycombs and biological forms.

- **Standard Elements:** 0.5rem (8px) for buttons and inputs.
- **Cards:** 1rem (16px) for larger dashboard modules.
- **Badges/Chips:** Full pill-shape for status indicators to make them instantly recognizable against rectangular data points.

## Components

- **Data Cards:** The core component. Must feature a `title-md` header, a `label-caps` subtitle, and a primary metric in `headline-lg`.
- **Status Badges:** Use the Forest Green for "Optimal," Honey Gold for "Active," and Royal Blue for "Syncing." Backgrounds for badges should be at 10% opacity of the stroke color.
- **Buttons:** Primary buttons use a gradient from Honey Gold to Amber. Secondary buttons are outlined with a 1px border in the neutral palette.
- **Input Fields:** Clean, white backgrounds with an 8px corner radius. On focus, the border shifts to Honey Gold with a 2px soft outer glow.
- **Hive Indicators:** Custom iconography should be used for weight, humidity, and queen presence, utilizing consistent 2px line weights.
- **Progress Bars:** Representing hive capacity or honey production, these should use a rounded track with the primary amber color.