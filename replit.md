# KoraNav - Supply Chain Intelligence Platform

## Overview
KoraNav is an ultramodern landing page for a digital supply chain and logistics innovation startup. The website showcases KoraNav's intelligent software systems that transform healthcare and enterprise supply chains, featuring their flagship product Severus-WMS.

## Project Status
**Current Phase:** ✅ Complete MVP - Fully functional landing page with working contact form

## Recent Changes
- **October 26, 2025**: Complete website implementation
  - Designed and implemented all website sections (Hero, About, Products, Features, Vision, Contact, Footer)
  - Configured dark mode design system with KoraNav brand colors (teal primary, navy secondary, orange accent)
  - Implemented smooth scroll-based animations using Framer Motion
  - Built fully functional contact form with backend API and in-memory storage
  - Added comprehensive SEO meta tags and Open Graph data
  - Full mobile-responsive design with smooth animations

## Architecture

### Frontend
- **Framework:** React with TypeScript
- **Routing:** Wouter for client-side navigation
- **Styling:** Tailwind CSS with custom color system for dark mode
- **Animations:** Framer Motion for scroll-based reveals and interactions
- **State Management:** TanStack Query for server state
- **UI Components:** Shadcn/ui component library
- **Icons:** Lucide React

### Backend
- **Server:** Express.js with TypeScript
- **Storage:** In-memory storage (MemStorage) for contact form submissions
- **API Routes:**
  - `POST /api/contact` - Submit contact form
  - `GET /api/contact/submissions` - Retrieve all submissions

### Design System
- **Color Palette:**
  - Primary (Teal): `186 78% 42%` - Brand color for CTAs and accents
  - Secondary (Navy): `220 30% 20%` - Depth and section backgrounds
  - Accent (Orange): `25 95% 58%` - Highlights and special CTAs
  - Background (Dark): `220 25% 6%` - Main dark mode background
  - Foreground: `0 0% 98%` - Primary text color
  
- **Typography:**
  - Primary Font: Plus Jakarta Sans (headings, UI)
  - Secondary Font: Inter (body text)
  - Monospace: Space Mono (code, technical elements)

- **Spacing:** Consistent 8px grid system
- **Animations:** 0.8s duration with staggered delays for scroll reveals

## Website Sections

1. **Hero Section**
   - KoraNav branding with tagline
   - Mission statement
   - Dual CTAs (Explore Severus-WMS, Contact Us)
   - Animated grid background pattern
   - Key metrics display (99.9% uptime, 50+ clients, 24/7 support)

2. **About Section**
   - Company story and founding vision
   - Severus-WMS origin narrative
   - Mission, vision, and values cards
   - Visual brand representation

3. **Products Section**
   - Three product cards:
     - **Severus-WMS** (Available Now) - Warehouse Management System
     - **KoraNav Analytics** (Coming Soon) - Predictive insights platform
     - **KoraNav Connect** (Coming Soon) - Collaboration hub
   - Feature highlights for each product
   - Status badges and CTAs

4. **Features Section**
   - Six key capability cards:
     - Real-time Inventory Tracking
     - AI-Driven Analytics
     - ERP Interoperability
     - Automated Workflows
     - Role-based Dashboards
     - Cloud Resilience & Security

5. **Vision Section**
   - Founder's quote on unified supply chains
   - Impact metrics (40% waste reduction, 3x efficiency, 99.5% accuracy, 25% cost savings)
   - Geometric dot pattern background

6. **Contact Section**
   - Fully functional contact form (name, email, company, message)
   - Contact information (email, phone, location)
   - Social media links
   - Partner collaboration callout

7. **Footer**
   - KoraNav branding
   - Product links
   - Company links
   - Social media icons
   - Copyright and legal links

## Key Features

### Smooth Animations
- Scroll-based reveal animations using Framer Motion's `useInView` hook
- Staggered entrance animations for list items
- Hover effects with smooth transitions
- Mobile menu slide-in animation

### Contact Form
- Real-time validation
- Loading states during submission
- Success/error toast notifications
- Form data persistence to backend
- Field clearing after successful submission

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Hamburger menu for mobile navigation
- Flexible grid layouts
- Touch-optimized interactions

### SEO Optimization
- Descriptive title tags
- Meta descriptions
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast page load performance

## User Preferences
- **Design Aesthetic:** Ultramodern, Apple + Tesla inspired enterprise design
- **Color Scheme:** Dark mode default with vibrant teal and orange accents
- **Animation Style:** Smooth, professional, not gimmicky (0.3-0.8s durations)
- **Target Audience:** Enterprise clients in healthcare logistics and supply chain management

## Development Notes

### Component Structure
All major sections are modular, reusable components:
- `Navigation.tsx` - Fixed header with smooth scroll navigation
- `HeroSection.tsx` - Full-screen hero with animated entrance
- `AboutSection.tsx` - Company story and mission cards
- `ProductsSection.tsx` - Product showcase with status badges
- `FeaturesSection.tsx` - Feature grid with icons
- `VisionSection.tsx` - Founder quote with metrics
- `ContactSection.tsx` - Form with backend integration
- `Footer.tsx` - Site footer with links

### Testing
- End-to-end test coverage for contact form submission flow
- Verified form validation, API integration, and UI feedback
- All interactive elements have `data-testid` attributes

## Future Enhancements
Potential next phases (not yet implemented):
- Individual product detail pages with comprehensive feature breakdowns
- Interactive product demo or walkthrough
- Case studies section showcasing healthcare logistics success stories
- Blog/resources section for thought leadership
- Email service integration (SendGrid/Mailgun) for contact form notifications
- Database persistence (PostgreSQL) instead of in-memory storage
- Analytics integration (Google Analytics)

## Running the Project
The project is configured to run via the "Start application" workflow:
```bash
npm run dev
```

Server runs on port 5000 with both frontend (Vite) and backend (Express) on the same port.

## Tech Stack Summary
- **Frontend:** React, TypeScript, Tailwind CSS, Framer Motion, TanStack Query, Wouter
- **Backend:** Express, TypeScript, In-memory storage
- **UI Library:** Shadcn/ui components
- **Icons:** Lucide React
- **Fonts:** Plus Jakarta Sans, Inter, Space Mono (Google Fonts)
