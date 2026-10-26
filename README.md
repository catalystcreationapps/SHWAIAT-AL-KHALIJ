# Shwaiat Al-Khalij (Gulf Grill) | شواية الخليج
> Ultra-Premium, Cinematic, Bilingual (EN/AR), Animation-Rich Website Rebuild

A world-class, award-winning web application for **Shwaiat Al-Khalij** (Gulf Grill), the esteemed Saudi fire-grill restaurant chain specializing in authentic charcoal-grilled Shawaya and Faham chicken, fragrant spiced rice, and traditional stews.

Built with **React 18 + TypeScript**, **Tailwind CSS** (dark luxury theme tokens), **GSAP 3 with ScrollTrigger**, **Lenis** smooth scrolling, **React Router v7** crawlable bilingual routing, and **react-i18next** (English default, full Arabic RTL layout with mirrored animations).

---

## 🌟 Highlights & Key Features

### 1. Brand & Visual Aesthetics
- **Color Palette**: Charcoal black (`#0c0a09`), espresso brown (`#1c1512`), vibrant ember orange/copper (`#ea580c`, `#f97316`), saffron gold (`#eab308`), and warm royal cream (`#faf6ee`).
- **Texture & Motifs**: Low-opacity Najdi geometric watermark overlay, authentic film grain texture overlay, and thin gold hairline accents.
- **Typography**:
  - English: `Playfair Display` (editorial serif headings), `Plus Jakarta Sans` / `Inter` (body).
  - Arabic: `Amiri` (calligraphic headings), `Cairo` (body).
- **Interactive Cursor**: Smooth lerp follower ring expanding on interactive elements and showing context labels (`VIEW` / `عرض` on menu items).
- **Hero Canvas**: Lightweight 60fps ember sparks floating gently upward over the full-screen cinematic video background.

### 2. Complete Content & Functionality (100% Preserved & Elevated)
- **Cinematic Hero**: Full-screen video background (`https://shwaiatalkhalij.com/public/home_banner/1766865324_video.mp4`), staggered mask reveal headline, dual CTAs ("Our Branches" & "See Menu"), and live heritage value badges.
- **Our Story**: Polished bilingual story copy, gold hairline framing, parallax image reveal (`https://shwaiatalkhalij.com/public/aboutus_image1/1766866255_about_img_2.png`), and animated stats counters (+24 Branches, 8 Cities, 100% Fresh Local Halal Chicken, 35+ Years Heritage).
- **Browse Our Menu**: 5 animated categories (Meals, Side Dishes, Salads & Dips, Drinks, Desserts), live search filter, count-up calories and prices (SAR / ر.س), card tilt/lift, and direct order links out to `https://www.shwaiatalkhalij.sa/`.
- **Our Branches (Section & Page `/branches`)**: 24 real branches across 8 Saudi cities (Riyadh, Jeddah, Dammam, Al Khobar, Al-Ahsa, Al Kharj, Hafar Al Batin, Al Qassim). City filter chips, live search, Google Maps directions button, phone links, and toggle between Card View and Dark Map View.
- **Our Applications (Marquee)**: Infinite marquee pausing on hover with partner logos (ToYou, Mrsool, Jahez, Ninja, HungerStation, Keeta), with RTL direction mirroring.
- **Get the App**: Luxury card with floating phone mockup, glowing QR code (`https://shwaiatalkhalij.com/public/assets/img/QR-PM.jpeg`), and direct App Store / Google Play download badges.
- **SEO FAQ Accordion**: 6 comprehensive bilingual questions and answers with `FAQPage` schema markup.
- **Grand Footer**: Oversized scroll-linked brand wordmark (`SHWAIAT AL-KHALIJ` / `شواية الخليج`), quick links, contact info, operating hours, social media links, and copyright.

### 3. SEO & Structured Data Mastery
- **Semantic HTML5**: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, single `<h1>` per page.
- **Dynamic Meta Tags**: Unique `<title>` (<60 chars) and meta description (<160 chars) per page and language.
- **Hreflang & Canonical**: Alternates for `en`, `ar`, and `x-default`.
- **Rich Schemas (JSON-LD)**:
  - `Restaurant` (servesCuisine: "Saudi Arabian", priceRange: "$$", telephone: "+966920034443", openingHoursSpecification: 10:30-00:00).
  - `Organization` & `WebSite`.
  - `BreadcrumbList`.
  - `Menu`, `MenuSection`, `MenuItem` with prices, currency (`SAR`), and calories (`kcal`).
  - `LocalBusiness` / `Restaurant` entries per branch with geo-coordinates on `/branches`.
  - `FAQPage` with 6 detailed Q&As in English and Arabic.
- **Sitemap & Robots**: `public/sitemap.xml` with `xhtml:link` alternates, `public/robots.txt`, and `public/site.webmanifest`.

---

## 📁 Project Directory Tree

```
shwaiat-al-khalij/
├── index.html                     # Root HTML with Google Fonts, SEO meta, preconnects & JSON-LD
├── package.json                   # Dependencies & scripts
├── tsconfig.json                  # TypeScript compiler options
├── tsconfig.node.json             # TypeScript node options
├── vite.config.ts                 # Vite bundler configuration with manual code splitting
├── tailwind.config.js             # Luxury dark theme design tokens, Najdi animations & typography
├── postcss.config.js              # PostCSS configuration
├── public/
│   ├── robots.txt                 # Search engine crawler directives
│   ├── sitemap.xml                # Multilingual XML sitemap with xhtml:link alternates
│   └── site.webmanifest           # Progressive Web App manifest
├── src/
│   ├── main.tsx                   # React application mount
│   ├── App.tsx                    # Root component: Lenis smooth scroll, GSAP sync, Router
│   ├── styles/
│   │   └── index.css              # Design tokens, grain overlay, custom cursor & scrollbars
│   ├── i18n/
│   │   ├── i18n.ts                # i18next configuration, RTL document updater & persistence
│   │   └── locales/
│   │       ├── en.json            # English translations dictionary (Default)
│   │       └── ar.json            # Authentic Arabic translations dictionary (RTL)
│   ├── data/
│   │   ├── menu.ts                # All 33 menu items across 5 categories with prices, kcal & photos
│   │   ├── branches.ts            # All 24 branches across 8 Saudi cities with maps & coords
│   │   ├── deliveryApps.ts        # All 6 delivery partner apps & logos
│   │   └── faq.ts                 # Bilingual FAQs for SEO schema and accordion
│   ├── components/
│   │   ├── Navbar.tsx             # Morphing glass navbar, language switcher pill, mobile drawer
│   │   ├── Hero.tsx               # Full-screen video hero, ember canvas, split text reveal
│   │   ├── OurStory.tsx           # Storytelling section, parallax image, animated counters
│   │   ├── MenuSection.tsx        # 5 category tabs, sliding indicator, search, cards, SAR/kcal
│   │   ├── BranchesSection.tsx    # City chips, branch cards, Google Maps, dark map embed
│   │   ├── DeliveryAppsMarquee.tsx# Infinite partner logo marquee with hover pause & RTL mirror
│   │   ├── AppDownloadSection.tsx # App promo with floating mockup, QR code, store badges
│   │   ├── FAQSection.tsx         # Accessible accordion with JSON-LD schema
│   │   ├── Footer.tsx             # Oversized wordmark reveal, contact info, working hours, socials
│   │   ├── CustomCursor.tsx       # Smooth follower circle with contextual "VIEW" label
│   │   ├── Preloader.tsx          # Flame line animation & split curtain wipe
│   │   └── SEOHead.tsx            # Dynamic head tags & JSON-LD graph injector
│   └── pages/
│       ├── HomePage.tsx           # Main cinematic landing page
│       └── BranchesPage.tsx       # Dedicated branch finder page (/branches & /ar/branches)
└── README.md                      # Comprehensive documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (Node v24+ tested)
- **npm**: v9.0.0 or later

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, tree-shaken, code-split production bundle in the `dist/` directory.

### 5. Preview Production Build
```bash
npm run preview
```
Runs the production build locally at [http://localhost:4173/](http://localhost:4173/).

---

## 🍽️ How to Manage Content & Data

### 1. Updating Menu Items
Edit [`src/data/menu.ts`](file:///d:/Hustle/Shwaiatalkhali/src/data/menu.ts):
```typescript
{
  id: 'one-full-faham-rice',
  name: {
    en: 'One Full Faham with Rice',
    ar: 'حبة فحم مع الأرز',
  },
  description: {
    en: 'Marinated whole chicken slow-grilled over natural glowing charcoal...',
    ar: 'دجاجة كاملة متبلة ببهارات الخليج الخاصة ومشوية على جمر الفحم...',
  },
  price: 38,
  kcal: 6014,
  category: 'meals', // 'meals' | 'side-dishes' | 'salads' | 'drinks' | 'desserts'
  image: 'https://shwaiatalkhalij.com/public/assets/img/695b6e8943870.jpg',
  fallbackImage: '...',
  orderUrl: 'https://www.shwaiatalkhalij.sa/',
  popular: true,
}
```

### 2. Adding or Editing Branches
Edit [`src/data/branches.ts`](file:///d:/Hustle/Shwaiatalkhali/src/data/branches.ts):
```typescript
{
  id: 'bashayer-jeddah',
  title: { en: 'BASHAYER', ar: 'بشاير' },
  cityId: 'jeddah',
  cityName: { en: 'Jeddah', ar: 'جدة' },
  address: {
    en: 'Al Bashaer District, Jeddah 23782',
    ar: 'حي البشائر، جدة 23782',
  },
  timing: { en: '11:00 AM - 1:00 AM', ar: '11:00 صباحاً - 1:00 ليلاً' },
  googleMapUrl: 'https://maps.app.goo.gl/pwcucnQztANSchDR9',
  phone: '920034443',
  lat: 21.6542,
  lng: 39.1428,
}
```

### 3. Replacing Food Images with Local High-Resolution Photos
Drop your WebP/AVIF photographs into `public/images/menu/{item-id}.webp` and update the `image` field in `src/data/menu.ts` to `/images/menu/{item-id}.webp`.

---

## 🔍 SEO & Core Web Vitals Checklist

- [x] **Single H1**: Exactly one `<h1>` per page (Hero on home, Header on branches).
- [x] **Hreflang Tags**: `en`, `ar`, and `x-default` alternate links in `index.html` and `public/sitemap.xml`.
- [x] **Dynamic Metadata**: Title (<60 characters) and description (<160 characters) per page and language.
- [x] **Complete JSON-LD Graph**:
  - `Restaurant` (Saudi Arabian, Grill, Telephone, Hours, Price Range)
  - `WebSite` & `Organization`
  - `BreadcrumbList`
  - `Menu`, `MenuSection`, `MenuItem` with offers and calories
  - `LocalBusiness` per branch
  - `FAQPage` with 6 bilingual entries
- [x] **Core Web Vitals Optimizations**:
  - Preconnected to Google Fonts origins (`fonts.googleapis.com`, `fonts.gstatic.com`).
  - Font display strategy: `swap`.
  - Vendor code splitting: React, GSAP, i18n in separate chunks.
  - Reduced motion detection: Smoothly falls back when `prefers-reduced-motion` is active.
- [x] **WCAG AA Compliance**: Skip to content anchor, visible focus outlines, ARIA attributes on tabs, drawers, and accordions.
