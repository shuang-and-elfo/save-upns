# University Parents Nursery School (UPNS) — Website Redesign

Welcome to the official static website repository for **University Parents Nursery School (UPNS)**, a warm, parent-participation cooperative preschool in Los Angeles serving UCLA students, staff, faculty, and non-UCLA community families.

This project is built using **Astro 4**, deployed to Vercel with **Redis Cloud persistence** for live petition signatures and stories, inspired by the warm, illustrated scrapbook character of UPNS while maintaining 100% factual accuracy.

---

## 📋 Table of Contents

1. [Project Architecture & Philosophy](#project-architecture--philosophy)
2. [How to Run Locally](#how-to-run-locally)
3. [How to Replace Images](#how-to-replace-images)
4. [How to Update Teachers](#how-to-update-teachers)
5. [How to Update Enrollment Information](#how-to-update-enrollment-information)
6. [How to Add a Tradition](#how-to-add-a-tradition)
7. [How to Build the Static Site](#how-to-build-the-static-site)
8. [How to Deploy](#how-to-deploy)
9. [Redirect Configuration](#redirect-configuration)
10. [Factual Verification & Zero Fabrication Policy](#factual-verification--zero-fabrication-policy)
11. [Final Design Test & Audit Checklist](#final-design-test--audit-checklist)

---

## 1. Project Architecture & Philosophy

### Core Aesthetic Direction
- **Warm & Handmade:** Inspired by Kootingal Preschool's scrapbook storytelling, featuring hand-drawn SVG line illustrations (简笔画), paper tape accents, organic blob borders, and candid storytelling.
- **Zero AI Aesthetics / Zero Corporate Jargon:** Free of generic purple gradients, SaaS navbar layouts, repeated "Why Choose Us" marketing modules, "Most Popular" tiers, and corporate buzzwords.
- **Accessible & Fast:** WCAG AA accessible color contrast, keyboard navigation, clear focus rings, and zero heavy frontend libraries (no React, Tailwind, or carousel dependencies).

### Directory Structure
```
├── src/
│   ├── components/       # Reusable UI & scrapbooking components
│   │   ├── ApplicationCTA.astro
│   │   ├── ClassroomPreview.astro
│   │   ├── CooperativeCallout.astro
│   │   ├── DailySchedule.astro
│   │   ├── DoodleIllustration.astro  # 18 original SVG ink/crayon line illustrations
│   │   ├── MobileNavigation.astro    # Accessible mobile menu drawer
│   │   ├── PhotoCutout.astro         # Scrapbook Polaroid & SVG placeholder framework
│   │   ├── PhotoGallery.astro        # Responsive scrapbook & mobile-swipeable gallery
│   │   ├── PolicyLink.astro
│   │   ├── PracticalDetails.astro
│   │   ├── SectionIntro.astro
│   │   ├── SiteFooter.astro
│   │   ├── SiteHeader.astro
│   │   └── TeacherProfile.astro
│   ├── content/          # Centralized, editable TypeScript data files
│   │   ├── classrooms.ts # Kitten, Kangaroo, and Dolphin rooms & daily schedules
│   │   ├── enrollment.ts # Eligibility, tuition schedule, 4-step process, FAQs
│   │   ├── index.ts      # Data module exports
│   │   ├── resources.ts  # Member Responsibilities, Health, Discipline, Bylaws
│   │   ├── site.ts       # Site-wide facts, history (1966), hours, navigation
│   │   ├── teachers.ts   # All 9 verified teachers + Director placeholder
│   │   └── traditions.ts # Carnival, Winter Fair, Camping, Underwood Farms
│   ├── layouts/
│   │   └── BaseLayout.astro # SEO metadata, OpenGraph, custom properties, skip-link
│   └── pages/            # 13 primary pages + individual classroom pages + 404
│       ├── 404.astro
│       ├── about.astro
│       ├── apply.astro
│       ├── classrooms/
│       │   ├── dolphin.astro
│       │   ├── index.astro
│       │   ├── kangaroo.astro
│       │   └── kitten.astro
│       ├── co-op-life.astro
│       ├── enrollment.astro
│       ├── index.astro
│       ├── resources.astro
│       ├── traditions.astro
│       └── visit.astro
├── public/               # Static assets, images, and favicon.svg
├── CONTENT-AUDIT.md      # Full 18-page content audit from upns.info
├── ASSET-CHECKLIST.md    # Exhaustive photography & illustration checklist
└── astro.config.mjs      # Static output, sitemap, and 11 legacy URL redirects
```

---

## 2. How to Run Locally

### Prerequisites
- Node.js `v18.17.0` or higher (`v20+` recommended)
- `npm`, `pnpm`, or `yarn`

### Installation & Development Server
1. Clone the repository and navigate into the project directory:
   ```bash
   cd upns-preschool-website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:4321/` to view the live site.

---

## 3. How to Replace Images

The site includes a custom **PhotoCutout & Placeholder Framework** (`src/components/PhotoCutout.astro`) that renders beautiful Kootingal-inspired scrapbook cards with handwritten labels and hand-drawn doodles whenever an image file is missing.

To add or replace real school photography:
1. Review the required dimensions and aspect ratios in `ASSET-CHECKLIST.md`.
2. Ensure every photograph of a child has explicit school approval and signed family consent.
3. Place your optimized JPG/PNG/WebP image files into the `public/images/` directory using the standard filenames (e.g., `hero-playground.jpg`, `teachers-all.jpg`, `kitten-classroom-01.jpg`).
4. To update a filename or alt text reference, edit the corresponding property in the `src/content/` data files (no layout code changes needed).
5. **Alt Text Rule:** Always describe the activity rather than a child's identity (e.g., *"Children building a block tower in the Kangaroo Room"*, never use student names).

---

## 4. How to Update Teachers

All teacher profiles and ordering are controlled by a single centralized file: `src/content/teachers.ts`.

### Editing an Existing Teacher
Open `src/content/teachers.ts` and modify any property in the `TEACHERS` array:
```typescript
{
  id: "veronica-martell",
  name: "Veronica Martell",
  role: "Kitten Room Teacher",
  classroom: "kitten",             // "kitten" | "kangaroo" | "dolphin" | "all"
  photo: "teacher-veronica-martell.jpg",
  shortBio: "Veronica creates a calm, nurturing first classroom experience...",
  displayOrder: 10,                // Controls sort order across pages
  active: true                     // Set false to hide without deleting record
}
```

### Adding a New Teacher
1. Add a new object entry to the `TEACHERS` array in `src/content/teachers.ts`.
2. Add their portrait photo to `public/images/` (e.g., `teacher-new-name.jpg`).
3. The new teacher will automatically appear on the Homepage, About page, and their assigned Classroom page.

---

## 5. How to Update Enrollment Information

All enrollment details, tuition rates, application steps, and FAQs are centralized in `src/content/enrollment.ts` and `src/content/site.ts`.

- **Tuition & Program Rates:** Edit the `tuitionSchedule` array in `src/content/enrollment.ts`. Items labeled `[CONFIRM CURRENT MONTHLY TUITION...]` should be replaced with verified dollar amounts once approved by the UPNS Board.
- **Application Fee & Methods:** Update `fees.applicationFee` and `fees.applicationFeeMethods` in `src/content/enrollment.ts`.
- **School Operating Hours:** Update `SITE_CONFIG.contact.hours` in `src/content/site.ts`.
- **Eligibility & Potty Training Rules:** Modify `ENROLLMENT_DATA.eligibility` in `src/content/enrollment.ts`.

---

## 6. How to Add a Tradition

The **Our Traditions** page (`/traditions/`) is designed like a school-year scrapbook and is 100% data-driven.

To add a new recurring tradition (e.g., an annual Earth Day garden gathering):
1. Open `src/content/traditions.ts`.
2. Append a new object to the `TRADITIONS` array:
   ```typescript
   {
     id: "earth-day-garden",
     title: "Annual Earth Day Garden Planting",
     slug: "earth-day-garden",
     season: "Spring",
     shortDescription: "Families gather to plant seasonal vegetables and flowers in our school yard.",
     longDescription: "Each spring, UPNS families bring seedlings and trowels...",
     coverPhoto: "tradition-earth-day.jpg",
     galleryPhotos: ["tradition-earth-day.jpg"],
     altText: "Children and parents planting flowers together in the school garden.",
     whatFamiliesEnjoy: "Children love digging in the soil with their classmates...",
     parentQuote: {
       quote: "Planting our sunflower seeds together is a tradition we look forward to every year!",
       author: "UPNS Kangaroo Room Parent"
     }
   }
   ```
3. Place the cover photo in `public/images/`. The new tradition will automatically render on both the `/traditions/` page and the Homepage scrapbook preview.

---

## 7. How to Build the Static Site

To generate production-ready static HTML, CSS, and minimal JavaScript:

```bash
npm run build
```

This command:
1. Runs `astro check` to execute TypeScript type checking across all files.
2. Compiles static HTML for all **13 primary pages** and **11 static redirect pages** into the `dist/` directory.
3. Generates standard SEO `sitemap-index.xml` and `sitemap-0.xml` files in `dist/`.

To test the built production site locally before deploying:
```bash
npm run preview
```

---

## 8. How to Deploy

Because UPNS is built in static-output mode (`output: 'static'` in `astro.config.mjs`), the contents of the `dist/` directory can be hosted on **any static web host**, including:
- **GitHub Pages:** Upload `dist/` or connect via GitHub Actions.
- **Netlify / Cloudflare Pages / Vercel:** Set Build Command to `npm run build` and Output Directory to `dist`.
- **Amazon S3 / CloudFront:** Sync the `dist/` directory to your S3 bucket.
- **Apache / Nginx / Traditional Web Hosting:** Upload all files inside `dist/` directly to your public web root (`/var/www/html` or `public_html`).

---

## 9. Redirect Configuration

To ensure zero search traffic loss and preserve existing bookmarks, `astro.config.mjs` is configured with static redirects for all legacy URLs from `http://www.upns.info/`. During `npm run build`, Astro generates clean static HTML files with meta-refresh tags and canonical headers for every mapped route:

| Old Legacy URL | New Redesign Route |
| :--- | :--- |
| `/general-information/about-upns/` | `/about/` |
| `/information/` | `/about/#hours` |
| `/requirements/` | `/co-op-life/` |
| `/information/enrollment/` | `/enrollment/` |
| `/staff-and-board-members/` | `/about/#team` |
| `/kitten-room/` | `/classrooms/kitten/` |
| `/kangaroo-room/` | `/classrooms/kangaroo/` |
| `/dolphin-room/` | `/classrooms/dolphin/` |
| `/contact-us/` | `/visit/` |
| `/health-nutrition-and-safety-policies-and-procedures/` | `/resources/` |
| `/discipline-policy/` | `/resources/` |

---

## 10. Factual Verification & Zero Fabrication Policy

In strict accordance with the project's **Zero Fabrication Policy**:
- No teacher names, schedules, tuition rates, statistics, testimonials, or policies have been invented.
- Unverified content from external redesigns (`upns.kids`) has been excluded.
- Where facts on `http://www.upns.info/` were missing or outdated, visible placeholders (e.g., `[CONFIRM CURRENT MONTHLY TUITION - AM HALF DAY]`, `[CONFIRM CURRENT SCHOOL YEAR]`, `[CONFIRM CURRENT DIRECTOR NAME]`) are embedded in `src/content/site.ts`, `src/content/enrollment.ts`, and `src/content/teachers.ts`.
- See `CONTENT-AUDIT.md` for the complete line-by-line verification report.

---

## 11. Final Design Test & Audit Checklist

Before launching, every page in this project was evaluated against the 10 core quality questions:

- [x] **1. Does this feel like a real neighborhood co-op preschool?**  
  Yes. It emphasizes parent workdays, community cleaning Saturdays, shared ownership, and authentic UCLA community history since 1966.
- [x] **2. Could this copy belong to any random preschool? If yes, make it more specific or use a placeholder.**  
  No generic phrases like *"Nurturing every child's potential"* or *"World-class early education"* are used. Copy speaks concretely about water tables, unit blocks, parent workday chores, and Sepulveda Blvd.
- [x] **3. Does the page rely too heavily on cards, icons, or marketing modules?**  
  No. Layouts use loose scrapbook arrangements, organic photo cutouts, and simple ink/crayon doodle accents rather than alternating SaaS feature grids.
- [x] **4. Are real teachers, classrooms, and traditions visually central?**  
  Yes. All 9 verified teachers are introduced by name and role; Kitten, Kangaroo, and Dolphin rooms feature dedicated pages and verified schedules; Carnival, Winter Fair, Camping, and Underwood Farms are celebrated in a memory-book format.
- [x] **5. Is parent participation explained honestly?**  
  Yes. The **Co-op Life** page directly details the 4-hour monthly classroom workday, sibling requirements, mandatory meetings, quarterly Saturday cleaning days, and fundraising obligations.
- [x] **6. Is practical enrollment information easy to find?**  
  Yes. A dedicated **Enrollment** page and an inviting **Apply** page provide transparent step-by-step instructions, fee breakdowns, and potty training rules.
- [x] **7. Does the design feel warm and handmade without becoming messy?**  
  Yes. Kootingal-inspired paper tape, organic blob borders, and hand-drawn SVG doodles are balanced by clean modern typography (Fraunces & DM Sans) and generous whitespace.
- [x] **8. Does it still feel clean and credible on mobile?**  
  Yes. Responsive layouts stack cleanly, galleries support native horizontal swipe, and an accessible hamburger drawer makes navigation effortless on small screens.
- [x] **9. Has any information been invented?**  
  No. Zero fabrication; all unverified facts use clearly labeled `[CONFIRM ...]` placeholders.
- [x] **10. Could a future parent volunteer update the site without rebuilding the entire design?**  
  Yes. All text, teachers, schedules, traditions, and enrollment facts are isolated in editable TypeScript data files in `src/content/`.
