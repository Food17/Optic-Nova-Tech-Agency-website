# Agency Website: Full Development Blueprint

A complete direction for turning the current site into a fully functional, sales-converting, SEO-strong agency website.

## 1. Technology stack (already in place)

- React 19 + TypeScript, TanStack Start (SSR, fast page loads, real URLs per page)
- Tailwind CSS v4 with your brand tokens (green gradient #267512 to #31F600 on black/white, Space Grotesk / Instrument Serif / Inter)
- Lovable Cloud (Supabase) for database, storage, and future auth
- Vite build, deployed to global edge hosting on publish

## 2. Site architecture (pages)

```text
/                     Home: positioning statement, services snapshot, selected work, proof, CTA
/services             All 7 services overview
/services/{slug}      Detail page per service (web dev, design/redesign, brand identity,
                      graphic design, UI/UX, SEO, social/email/AI automation)
/work                 Portfolio grid
/work/{slug}          Case study: problem, approach, outcome, visuals
/about                Story, values, process
/faq                  Expandable answers (done)
/contact              Inquiry form (done, saves to database)
```

Planned additions:

- /blog or /insights: articles targeting search keywords your clients use
- /pricing or pricing anchors on service pages: package tiers or starting-at prices
- /thank-you: post-form confirmation page for conversion tracking
- Legal: /privacy, /terms (needed for trust and ad platforms)

## 3. Database design (Lovable Cloud)

Existing:

- `inquiries` table: name, email, company, service, budget, message (public insert only)

Planned tables:

- `case_studies`: title, slug, client, services, summary, body, cover image, results, published flag. Replaces hardcoded samples so you can add projects without code changes.
- `posts`: blog articles with slug, title, excerpt, body, cover, published date, SEO fields.
- `testimonials`: client name, role, company, quote, linked case study.
- `newsletter_subscribers`: email capture for your email marketing service (double opt-in ready).
- Storage bucket `media`: portfolio images, blog covers, your logo.

All tables get row-level security: public can read published content and submit forms; only you (admin role) can edit.

## 4. Conversion features

- One clear call to action repeated per page: "Start a project" leading to /contact
- Contact form qualifies leads: service, budget range, message (already built)
- Thank-you page after submission so you can measure conversions
- Service pages end with a relevant CTA and a mini FAQ
- Case studies show outcomes first (numbers, before/after) to sell results, not process
- Sticky header CTA button on scroll
- WhatsApp or email quick-contact option for visitors who skip forms
- Newsletter signup in the footer feeding your email marketing

## 5. SEO foundation

- Per-page titles, descriptions, Open Graph tags (done for current pages; extend to every new page)
- JSON-LD structured data: Organization + WebSite sitewide, Article on blog posts, Service on service pages
- sitemap.xml and robots.txt once the site has its public URL
- Blog content strategy: articles answering questions your target clients search (e.g. "how much does a website redesign cost", "brand identity checklist for startups")
- Fast load times and mobile-first layout (already the default)
- Semrush keyword research to pick blog topics and service-page wording based on real search volume

## 6. Content you still need to supply

- Real agency name and logo (current placeholder: Studio®)
- Real portfolio projects with images and results
- Team or founder photo and short bio for About
- Any certifications, client logos, or numbers worth showing

## 7. Suggested build order

1. You supply name, logo, real projects; I swap out placeholders
2. Move case studies into the database with an admin-friendly structure
3. Add blog with first 3 SEO-targeted articles
4. Add testimonials, thank-you page, newsletter capture
5. SEO pass: structured data, sitemap, metadata on every page
6. Publish, connect your custom domain, submit to Google Search Console

## Technical notes

- Admin editing of case studies/posts can start as direct database edits via the backend panel; a full admin dashboard is a later phase if you want one.
- No em-dashes and no filler copy remain standing rules for all new content.
- Each phase above works independently; nothing blocks publishing the current site today.
