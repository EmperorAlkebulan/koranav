# KoraNav Design Guidelines

## Design Approach
**Reference-Based: Apple + Tesla Enterprise Fusion**
Taking inspiration from Apple's minimalist precision and Tesla's futuristic boldness, merged with enterprise SaaS sophistication (Linear, Stripe, Vercel). This approach emphasizes clean layouts, purposeful animations, and premium visual quality suitable for B2B enterprise software.

## Color Strategy
**Dark Mode Foundation** (default):
- Primary: Teal (from logo) - accent and interactive elements
- Secondary: Navy Blue (from logo) - depth and section backgrounds
- Accent: Orange (from logo) - CTAs and highlights
- Base: Deep charcoal/near-black backgrounds with subtle gradients
- Text: White/light gray hierarchy (white for headings, gray-300 for body)

**Implementation Note**: Use dark mode with high contrast ratios for accessibility. Teal for primary actions, orange sparingly for critical CTAs.

## Typography System
**Hierarchy**:
- Hero Heading: Bold, 4xl-6xl, tight tracking, white
- Section Headings: Semibold, 3xl-4xl, white
- Subheadings: Medium, xl-2xl, gray-300
- Body: Regular, base-lg, gray-400
- Labels/Captions: Medium, sm-base, gray-500

**Font Selection**: Modern sans-serif from Google Fonts (Inter, Plus Jakarta Sans, or Space Grotesk for technical feel)

## Layout System
**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 24
- Section padding: py-24 (desktop), py-16 (mobile)
- Component spacing: gap-8 to gap-12
- Container: max-w-7xl centered

**Grid Patterns**:
- Hero: Full-width with centered content, max-w-4xl for text
- Product Cards: 3-column grid (lg), 2-column (md), 1-column (mobile)
- Features: 3-column grid with icon-text-description cards

## Component Library

### Navigation
Fixed header with blur backdrop, KoraNav logo left, nav links center, "Contact Us" CTA right, smooth scroll behavior

### Hero Section
**Layout**: Full viewport height with gradient overlay
- Large hero heading + tagline
- Mission paragraph (max-w-2xl centered)
- Dual CTAs: "Explore Severus-WMS" (teal) + "Contact Us" (outline)
- Background: Animated geometric/fluid patterns suggesting data flow and connectivity (subtle, non-distracting)

### Cards (Product Showcase)
Glassmorphic cards with:
- Dark background with subtle border (teal/navy glow on hover)
- Icon/illustration at top
- Product name (xl font)
- Description (2-3 lines)
- "Learn More" link/button
- Slight elevation on hover

### Feature Icons
Icon library: Heroicons or Lucide
- Contained in rounded backgrounds (teal/navy gradients)
- Paired with bold feature titles and brief descriptions
- Grid layout with consistent spacing

### Vision Section
**Design Treatment**: Full-width with background pattern
- Large quote typography (2xl-3xl, italic)
- Attribution to founder
- Centered layout with generous padding
- Subtle background accent (navy with teal gradient overlay)

### Contact Form
**Layout**: 2-column on desktop (form left, info/social right)
- Form fields: Name, Email, Company, Message
- Dark inputs with teal focus states
- Submit button with orange accent
- Social icons with hover states
- Contact info block with email/links

### Footer
Multi-column layout:
- Logo + tagline (left)
- Quick links (center columns)
- Social icons (right)
- Copyright bar at bottom
- All in muted colors (gray-600/700)

## Background Patterns
Subtle geometric patterns symbolizing:
- Connected nodes (supply chain network)
- Flowing lines (data movement)
- Grid overlays (logistics precision)
Implemented as SVG or CSS gradients, opacity 10-20%, non-distracting

## Animation Strategy (Framer Motion)
**Scroll-Based Reveals**:
- Fade-up on scroll for sections (stagger children)
- Card hover: subtle lift + glow effect
- Button hover: scale 1.05 + brightness increase
- Hero elements: sequential entrance animation
Keep animations smooth (0.3-0.5s duration), professional, not gimmicky

## Images
**Hero Section**: Large background image or video loop showing warehouse/logistics technology in action, with dark overlay for text readability. Buttons use backdrop-blur for glass effect.

**Product Cards**: Icon illustrations or small product screenshots

**About Section**: Founder photo or team workspace image (optional based on availability)

All images should convey technology, precision, and modern enterprise environment.

## Responsive Breakpoints
- Mobile: Full-width stacked layouts, larger touch targets
- Tablet: 2-column grids where appropriate
- Desktop: Full multi-column layouts, max-w-7xl containers

## Accessibility
- WCAG AA contrast ratios (especially important in dark mode)
- Focus states with teal outline
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support