# RedStar Huts — Luxury Real Estate & Consulting

> Trusted guidance in real estate — from acquisition to investment strategy. RedStar Huts brings clarity, discretion, and results to every engagement.

**Live Site:** [https://redstarhuts.com](https://redstarhuts.com)

---

## Table of Contents

- [About the Business](#about-the-business)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Sitemap Generation](#sitemap-generation)
- [Routing & Pages](#routing--pages)
- [Site Map (All Routes)](#site-map-all-routes)
- [Components](#components)
- [Data Layer](#data-layer)
- [SEO & Structured Data](#seo--structured-data)
- [Lead Capture & Email](#lead-capture--email)
- [Design System](#design-system)
- [Static Assets](#static-assets)
- [Deployment](#deployment)
- [Client Handover Notes](#client-handover-notes)

---

## About the Business

**RedStar Huts** is a client-first luxury real estate consulting firm based in **Mohali, Punjab, India**. The firm serves homebuyers, investors, and NRIs across the **Chandigarh Tri-City region** (Mohali, Zirakpur, Chandigarh) and emerging investment markets like **Dholera Smart City, Gujarat**.

### Core Services

| Service | Description |
|---|---|
| **Property Sales** | Strategic marketing and expert negotiation for premium property sellers |
| **Buyer Advisory** | Personalized guidance to identify, evaluate, and secure the right property |
| **Investment Consulting** | Data-driven insights and market intelligence for portfolio growth |
| **Market Analysis** | Comprehensive research and valuation reports for confident decision-making |

### Key Details

- **Founder:** Naveen Sood (Principal Advisor)
- **Office:** SCO 08, Jublee Junction, Sector 66, S.A.S Nagar Mohali, Punjab 160062
- **Phone:** +91 889 434 3056
- **Email:** redstarhuts9@gmail.com
- **Hours:** Monday - Saturday, 10:00 AM - 7:00 PM
- **Price Range:** INR 1 Cr - 3 Cr
- **Areas Served:** Mohali, Zirakpur, Chandigarh, Dholera, Punjab, Gujarat

### Social Media

- [Instagram](https://www.instagram.com/redstar__huts/)
- [Facebook](https://www.facebook.com/people/Redstar-Huts/61588365781493/)
- [YouTube](https://youtube.com/@redstarhuts?si=hEDmuk9rk61lh4Su)

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router) |
| **Language** | TypeScript 5 |
| **UI Library** | React 19 |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com) (via PostCSS) |
| **Animations** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Email** | [Nodemailer 8](https://nodemailer.com/) (Gmail SMTP) |
| **Fonts** | Playfair Display (headings) + Inter (body) via Google Fonts |
| **Linting** | ESLint 9 with `eslint-config-next` (Core Web Vitals + TypeScript) |
| **Package Manager** | npm |
| **Node Target** | ES2017 |

---

## Project Structure

```
redstar-huts/
├── public/                          # Static assets served at root
│   ├── properties/                  # Property images organized by code
│   │   ├── RSH-MOH-001/            #   3+1 BHK Premium Flat, Mohali
│   │   ├── RSH-MOH-002/            #   3+1 BHK Ultra Luxury Flat, Mohali
│   │   ├── RSH-MOH-003/            #   4+1 BHK Premium Flat, Mohali
│   │   ├── RSH-ZIR-001/            #   4+1 BHK Premium Flat, Zirakpur
│   │   ├── RSH-ZIR-002/            #   3 & 4+1 BHK IGBC Platinum, Zirakpur
│   │   ├── RSH-ZIR-003/            #   3 & 4+1 BHK Smart Home, Zirakpur
│   │   ├── RSH-DHO-001/            #   Residential Plots, Dholera
│   │   └── grand-mohali/           #   Additional project assets
│   ├── blog/                        # Blog post hero images
│   │   ├── tricity-metro/
│   │   └── mohali-link-road/
│   ├── team/                        # Team member photos
│   │   ├── naveen.jpg
│   │   ├── krish.jpg
│   │   ├── disha.jpg
│   │   └── shivek.jpg
│   ├── logo-circle.png              # Circular logo (favicon, header)
│   ├── logo-horizontal.svg          # Horizontal logo variant
│   ├── logo.svg                     # Primary logo
│   ├── og-image.png                 # Open Graph social share image
│   ├── apple-touch-icon.png         # iOS home screen icon
│   ├── favicon.ico                  # Browser favicon
│   ├── robots.txt                   # Crawler directives
│   ├── sitemap.xml                  # Sitemap index (auto-generated)
│   ├── sitemap-static.xml           # Static pages sitemap
│   ├── sitemap-properties.xml       # Property pages sitemap
│   ├── sitemap-blogs.xml            # Blog pages sitemap
│   └── sitemap-authors.xml          # Author pages sitemap
│
├── scripts/
│   └── generate-sitemaps.mjs        # Pre-build sitemap generation script
│
├── src/
│   ├── app/                         # Next.js App Router pages
│   │   ├── layout.tsx               # Root layout (Header, Footer, GTM, JSON-LD)
│   │   ├── page.tsx                 # Homepage (hero, services, properties, testimonials, FAQs)
│   │   ├── globals.css              # Global styles, Tailwind theme, fonts
│   │   ├── not-found.tsx            # Custom 404 page
│   │   ├── favicon.ico
│   │   │
│   │   ├── about/                   # About Us page
│   │   │   ├── page.tsx             #   Server component (metadata + JSON-LD)
│   │   │   └── AboutClient.tsx      #   Client component (UI + animations)
│   │   │
│   │   ├── services/                # Services listing + detail pages
│   │   │   ├── page.tsx
│   │   │   ├── ServicesClient.tsx
│   │   │   └── [slug]/
│   │   │       ├── page.tsx         #   Dynamic route with generateStaticParams
│   │   │       └── ServiceDetailClient.tsx
│   │   │
│   │   ├── properties/              # Property listing + detail pages
│   │   │   ├── page.tsx             #   Client-side search & filtering
│   │   │   └── [slug]/
│   │   │       ├── page.tsx         #   Dynamic route with generateStaticParams
│   │   │       └── PropertyDetailClient.tsx
│   │   │
│   │   ├── blog/                    # Blog listing + article pages
│   │   │   ├── page.tsx
│   │   │   ├── BlogClient.tsx
│   │   │   └── [slug]/
│   │   │       ├── page.tsx         #   Dynamic route with generateStaticParams
│   │   │       └── BlogDetailClient.tsx
│   │   │
│   │   ├── authors/                 # Authors listing + profile pages
│   │   │   ├── page.tsx
│   │   │   ├── AuthorsClient.tsx
│   │   │   └── [slug]/
│   │   │       ├── page.tsx
│   │   │       └── AuthorDetailClient.tsx
│   │   │
│   │   ├── contact/                 # Contact page with lead form
│   │   │   ├── page.tsx
│   │   │   └── ContactClient.tsx
│   │   │
│   │   ├── coming-soon/             # Coming Soon landing page
│   │   │   ├── layout.tsx           #   Standalone layout (no Header/Footer)
│   │   │   └── page.tsx
│   │   │
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts         # POST /api/contact — email lead handler
│   │   │
│   │   ├── privacy-policy/
│   │   │   └── page.tsx             # Privacy Policy page
│   │   ├── terms-of-service/
│   │   │   └── page.tsx             # Terms of Service page
│   │   └── legal-disclaimer/
│   │       └── page.tsx             # Legal Disclaimer page
│   │
│   ├── components/                  # Shared UI components
│   │   ├── Header.tsx               # Fixed navbar with scroll behavior & mobile menu
│   │   ├── Footer.tsx               # Site footer with links & social icons
│   │   ├── FloatingCTA.tsx          # Floating call + WhatsApp buttons
│   │   ├── LayoutShell.tsx          # Route guard (live pages vs coming-soon redirect)
│   │   ├── LeadCaptureForm.tsx      # Multi-variant lead capture form
│   │   ├── Breadcrumbs.tsx          # Breadcrumb navigation + JSON-LD schema
│   │   ├── SectionReveal.tsx        # Scroll-triggered fade-in animation wrapper
│   │   └── SectionHeading.tsx       # Reusable section heading component
│   │
│   ├── data/                        # Static data (acts as CMS)
│   │   ├── properties.ts            # Property listings, details, SEO meta, and types
│   │   ├── blogs.ts                 # Blog posts, categories, tags, and helper functions
│   │   └── authors.ts               # Team members / blog authors
│   │
│   └── lib/
│       └── email.ts                 # Nodemailer transporter & HTML email builder
│
├── .env.example                     # Environment variable template
├── .gitignore
├── eslint.config.mjs                # ESLint flat config
├── next.config.ts                   # Next.js config (remote image patterns)
├── package.json
├── package-lock.json
├── postcss.config.mjs               # PostCSS config (Tailwind CSS plugin)
├── tsconfig.json                    # TypeScript config
└── README.md                        # This file
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or later
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Shivek-cmd/redstar-huts.git
cd redstar-huts

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Pages auto-update as you edit files.

### Building for Production

```bash
npm run build
```

This command automatically runs sitemap generation before the Next.js build (`prebuild` script).

### Starting the Production Server

```bash
npm start
```

Starts the optimized production build on [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start Next.js development server with hot reload |
| `build` | `npm run build` | Generate sitemaps + build optimized production bundle |
| `start` | `npm start` | Serve the production build locally |
| `lint` | `npm run lint` | Run ESLint checks (Core Web Vitals + TypeScript rules) |
| `prebuild` | *(runs automatically)* | Generate all XML sitemaps before build |

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description | Example |
|---|---|---|
| `SMTP_USER` | Gmail address for sending lead notification emails | `redstarhuts9@gmail.com` |
| `SMTP_PASS` | Gmail App Password (NOT your regular password) | `xxxx xxxx xxxx xxxx` |
| `CONTACT_EMAIL` | Recipient email for lead notifications | `redstarhuts9@gmail.com` |

> **Note:** To generate a Gmail App Password, go to [Google Account > Security > App Passwords](https://myaccount.google.com/apppasswords). You need 2-Step Verification enabled.

---

## Sitemap Generation

Sitemaps are **auto-generated at build time** via `scripts/generate-sitemaps.mjs`. This script runs as the `prebuild` step before every `npm run build`.

### How It Works

1. The script reads slug data directly from the TypeScript source files in `src/data/` using regex extraction
2. It generates five XML sitemap files in the `public/` directory:

| File | Contents | Priority |
|---|---|---|
| `sitemap.xml` | **Sitemap index** — references all sub-sitemaps | — |
| `sitemap-static.xml` | Homepage, services, about, contact, blog, legal pages | 0.3 - 1.0 |
| `sitemap-properties.xml` | All property detail pages | 0.9 |
| `sitemap-blogs.xml` | All blog article pages | 0.7 |
| `sitemap-authors.xml` | All author profile pages | 0.6 |

3. The index sitemap (`sitemap.xml`) is referenced in `public/robots.txt`

### Regenerating Sitemaps Manually

```bash
node scripts/generate-sitemaps.mjs
```

### Adding New Content

When you add a new property, blog post, or author to the data files in `src/data/`, the sitemaps are automatically updated on the next build. No manual sitemap editing is needed.

---

## Routing & Pages

The site uses the **Next.js App Router** with a hybrid rendering strategy:

- **Static pages** use server components with exported `metadata` for SEO
- **Interactive pages** use the `"use client"` directive for client-side features
- **Dynamic routes** use `generateStaticParams()` for static generation at build time

### Page Architecture Pattern

Most pages follow a two-file pattern:
- `page.tsx` — Server component that exports metadata, JSON-LD structured data, and renders the client component
- `[Name]Client.tsx` — Client component with the actual UI, animations, and interactivity

This pattern enables both server-side SEO metadata and client-side Framer Motion animations.

### Route Guard

`LayoutShell.tsx` contains a configurable `LIVE_PAGES` array. Routes not in this list redirect to `/coming-soon`. Currently, all pages are live.

---

## Site Map (All Routes)

### Public Pages

| Route | Page | Description |
|---|---|---|
| `/` | Homepage | Hero slider, services, featured properties, testimonials, FAQs, partner logos |
| `/about` | About Us | Company story, mission, values, team section |
| `/services` | Services | Overview of all four service offerings |
| `/services/property-sales` | Property Sales | Service detail page |
| `/services/buyer-advisory` | Buyer Advisory | Service detail page |
| `/services/investment-consulting` | Investment Consulting | Service detail page |
| `/services/market-research` | Market Analysis | Service detail page |
| `/properties` | Properties | Filterable property listings (search, location, type) |
| `/properties/[slug]` | Property Detail | Full property page with gallery, features, FAQs, map, lead form |
| `/blog` | Journal | Blog listing with category filter and featured post |
| `/blog/[slug]` | Blog Article | Full article with related posts and author info |
| `/authors` | Authors | Team listing page |
| `/authors/[slug]` | Author Profile | Individual author page with their blog posts |
| `/contact` | Contact | Contact form, office address, map, phone, email |

### Legal Pages

| Route | Page |
|---|---|
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |
| `/legal-disclaimer` | Legal Disclaimer |

### Utility Pages

| Route | Page | Description |
|---|---|---|
| `/coming-soon` | Coming Soon | Standalone landing page (no header/footer) with email capture |
| `404` | Not Found | Custom 404 error page |

### API Routes

| Method | Route | Description |
|---|---|---|
| `POST` | `/api/contact` | Accepts lead form submissions and sends email notifications via Nodemailer |

---

## Components

### Layout Components

| Component | File | Description |
|---|---|---|
| `Header` | `Header.tsx` | Fixed navigation bar with transparent-to-solid scroll transition on homepage, dropdown for services, responsive hamburger menu |
| `Footer` | `Footer.tsx` | Company info, quick links, service links, social icons, legal links |
| `LayoutShell` | `LayoutShell.tsx` | Route guard component — controls which pages are live vs. coming-soon |
| `FloatingCTA` | `FloatingCTA.tsx` | Fixed bottom-right floating buttons for phone call and WhatsApp |

### UI Components

| Component | File | Description |
|---|---|---|
| `LeadCaptureForm` | `LeadCaptureForm.tsx` | Multi-variant form supporting 7 lead types (property inquiry, service inquiry, floor plan request, location request, intro call, analysis report, general). Adapts fields and labels per type. Supports dark and compact modes. |
| `Breadcrumbs` | `Breadcrumbs.tsx` | Visual breadcrumb navigation + `BreadcrumbSchema` component for JSON-LD structured data |
| `SectionReveal` | `SectionReveal.tsx` | Scroll-triggered fade-up animation wrapper using Framer Motion `useInView` |
| `SectionHeading` | `SectionHeading.tsx` | Reusable section header with optional label, title, and subtitle |

---

## Data Layer

All content is managed through TypeScript data files in `src/data/`, acting as a **file-based CMS**. No external database or headless CMS is required.

### Properties (`src/data/properties.ts`)

- **`allProperties`** — Array of 7 property listings with title, slug, code, location, price, image, beds, baths, sqft, type
- **`propertiesData`** — Detailed data for each property keyed by slug (description, features, highlights, images, gallery, nearby places, FAQs, video embeds, social links)
- **`propertyMeta`** — SEO metadata for each property (title, description, keywords, image)
- **Type exports:** `PropertyListItem`, `PropertyDetail`, `PropertySEO`, `PropertyImage`, `PropertyHighlight`, `PropertyFAQ`, `NearbyCategory`
- **Helper:** `parsePrice()` for budget filtering

### Blog Posts (`src/data/blogs.ts`)

- **`blogPosts`** — Array of 19 blog articles with title, slug, excerpt, image, category, tags, date, readTime, authorSlug, related properties
- **Helpers:** `getBlogBySlug()`, `getFeaturedBlog()`, `getAllCategories()`, `getAllTags()`, `getBlogsByCategory()`, `getRelatedBlogs()`

### Authors (`src/data/authors.ts`)

- **`authors`** — Array of 4 team members: Naveen (Founder), Krish (Co-Founder), Disha (Sales Consultant), Shivek (Strategy & Growth)
- Each author has: slug, name, role, bio, longBio, image, expertise areas, social links
- **Helpers:** `getAuthorBySlug()`, `getAllAuthorSlugs()`

### Adding New Content

1. **New Property:** Add entry to `allProperties` and `propertiesData` in `properties.ts`, add images to `public/properties/[CODE]/`
2. **New Blog Post:** Add entry to `blogPosts` in `blogs.ts`, add SEO metadata to `blogMeta` in `blog/[slug]/page.tsx`, add slug to `generateStaticParams()`, add hero image to `public/blog/[slug]/`
3. **New Author:** Add entry to `authors` in `authors.ts`, add photo to `public/team/`

After adding content, run `npm run build` to regenerate sitemaps and build the static pages.

---

## SEO & Structured Data

### Metadata

Every page exports Next.js `Metadata` objects with:
- Title (with template: `%s | RedStar Huts`)
- Description
- Keywords
- Canonical URL
- Open Graph tags (type, image, locale)
- Twitter Card tags
- Robots directives

### JSON-LD Structured Data

The site includes rich structured data for search engines:

| Page | Schema Type(s) |
|---|---|
| Root Layout | `RealEstateAgent`, `LocalBusiness` |
| Homepage | `FAQPage` |
| About | `AboutPage`, `BreadcrumbList` |
| Services | `Service` |
| Service Detail | `Service`, `BreadcrumbList` |
| Properties | `BreadcrumbList` |
| Property Detail | `RealEstateListing`, `Residence`, `BreadcrumbList` |
| Blog | `Blog` |
| Blog Article | `Article`, `BreadcrumbList` |
| Authors | `CollectionPage`, `Person` |
| Contact | `ContactPage`, `RealEstateAgent` |

### Additional SEO Features

- **Google Tag Manager** (GTM-M7TZBCRK) integrated in root layout
- **Google Site Verification** meta tag included
- **Hreflang tags** for `en-IN`, `en`, and `x-default`
- **Canonical URLs** on every page
- **`robots.txt`** allows all crawlers, disallows `/coming-soon`, references sitemap
- **Auto-generated XML sitemaps** with proper priorities and change frequencies
- **Remote images** from Unsplash configured in `next.config.ts`

---

## Lead Capture & Email

### Flow

1. User fills out a `LeadCaptureForm` on any page (contact, property detail, service detail, etc.)
2. Form submits `POST /api/contact` with lead data
3. API route validates the payload and calls `sendLeadEmail()` from `src/lib/email.ts`
4. Nodemailer sends a formatted HTML email to the configured `CONTACT_EMAIL` via Gmail SMTP
5. User sees a success confirmation in the form

### Supported Lead Types

| Lead Type | Trigger Context |
|---|---|
| `property-inquiry` | Property detail pages |
| `service-inquiry` | Service detail pages |
| `floor-plan-request` | Property detail pages |
| `location-request` | Property detail pages |
| `intro-call` | Service / contact pages |
| `analysis-report` | Service pages |
| `general` | Contact page |
| `notify-me` | Coming Soon page |

---

## Design System

### Color Palette

| Token | Hex | Usage |
|---|---|---|
| `background` | `#F6F5F3` | Primary page background |
| `background-secondary` | `#FBFAF8` | Cards, elevated surfaces |
| `background-depth` | `#EFEDE9` | Subtle depth / tertiary background |
| `foreground` | `#1F1F1F` | Primary text, dark sections |
| `body` | `#4B4B4B` | Body text |
| `muted` | `#7A7A7A` | Secondary / helper text |
| `border` | `#E2E0DC` | Borders and dividers |

### Typography

| Token | Font | Usage |
|---|---|---|
| `font-heading` | Playfair Display | Headings (h1-h6), property titles, section titles |
| `font-body` | Inter | Body text, buttons, labels, navigation |

### Design Principles

- Warm neutral color palette conveying luxury and trust
- Generous whitespace and clean layouts
- Smooth scroll-triggered animations via Framer Motion
- Responsive design with mobile-first approach
- Accessible: skip-to-content link, ARIA labels, semantic HTML, `role` attributes

---

## Static Assets

### Image Organization

| Directory | Contents |
|---|---|
| `public/properties/[CODE]/` | Property photos (living room, kitchen, bedroom, lobby, etc.) |
| `public/blog/[slug]/` | Blog post hero images |
| `public/team/` | Team member headshots |

### Remote Images

The site loads hero and placeholder images from **Unsplash** (configured in `next.config.ts`):
```typescript
images: {
  remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }]
}
```

---

## Deployment

The site is configured for deployment on **Vercel** (recommended) or any Node.js hosting platform.

### Vercel (Recommended)

1. Import the repository on [Vercel](https://vercel.com/new)
2. Set the environment variables (`SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`)
3. Deploy — Vercel auto-detects Next.js and handles build + serve

### Other Platforms

```bash
# Build the project
npm run build

# Start the production server
npm start
```

Ensure environment variables are set and Node.js 18+ is available.

### Domain

The production domain is **redstarhuts.com** — all canonical URLs, sitemaps, structured data, and Open Graph tags reference this domain.

---

## Client Handover Notes

### For Naveen Sood (Client / Founder)

This website is a fully self-contained Next.js application. Here is what you need to know:

1. **Content Updates:** All property listings, blog posts, and author profiles are managed through TypeScript files in `src/data/`. No external CMS is needed. To add or edit content, update the relevant data file and redeploy.

2. **Email Leads:** All contact forms send lead notifications to the email configured in the `CONTACT_EMAIL` environment variable. Make sure the Gmail App Password (`SMTP_PASS`) stays valid.

3. **SEO:** Sitemaps regenerate automatically on every build. Google Tag Manager and structured data are already in place. The Google Search Console verification tag is embedded.

4. **Images:** Property images go in `public/properties/[PROPERTY-CODE]/`, team photos in `public/team/`, blog images in `public/blog/[slug]/`.

5. **Coming Soon Gate:** The `LayoutShell.tsx` component can gate unreleased pages. To take a page offline, remove its path from the `LIVE_PAGES` array.

6. **Floating CTAs:** The phone number and WhatsApp link in `FloatingCTA.tsx` point to +91 889 434 3056. Update there if the number changes.

7. **Social Links:** Updated in `Footer.tsx` (site-wide) and in individual author entries in `src/data/authors.ts`.

---

**Built with care by the development team. For questions or support, reach out to the developer.**
