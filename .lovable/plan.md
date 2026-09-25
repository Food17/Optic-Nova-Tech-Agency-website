# Agency Website — Full Multi-Page Build

A complete, deployable agency website (not a landing page) with a modern, premium tech aesthetic, built on your brand identity.

## Brand system

- **Palette:** black & white base with your green gradient as the accent — deep forest `#267512` through `#2CB609` to neon `#31F600`
- **Typography:** Space Grotesk (headings/display), Instrument Serif (editorial accents), Inter (body text)
- **Logo:** text/wordmark placeholder now; swap in your logo file when you upload it
- **Feel:** dark, premium, tech-forward with smooth animations and page transitions throughout

## Pages (full suite)

1. **Home** — hero with animated headline, services overview, featured work, process strip, stats, testimonial, CTA
2. **Services** — overview page listing all offerings
3. **Individual service pages** — one dedicated page each for: Website Development & Design, Brand Identity & UI/UX, Graphic Design (flyers/posters/social/ads), SEO, Social Media Management, Email Marketing & Automation, AI Automation
4. **Portfolio / Work** — filterable grid of case studies, each with its own detail page (challenge, solution, results)
5. **About** — agency story, values, approach
6. **Contact** — project inquiry form + details

## Lead capture (recommended)

Contact form powered by **Lovable Cloud**: inquiries are saved to a database and you receive an email notification for each new lead. This is the best option — no leads lost, everything tracked, and it scales later (e.g. an admin view of inquiries). Requires enabling Lovable Cloud (free, one click, no external accounts).

## Portfolio content

You said you'll provide project details. I'll build the full portfolio structure with polished sample entries now; send me your real projects (name, client type, deliverables, results) and I'll swap them in.

## Technical details

- TanStack Start + React + Tailwind CSS v4, semantic design tokens in `src/styles.css` (no hardcoded colors)
- Fonts loaded via Google Fonts `<link>` tags; brand colors as oklch tokens
- Animations: scroll-reveal, hover states, page transitions (CSS + Motion-style, restrained and premium)
- Every page gets unique SEO metadata (title, description, og tags); sitemap-friendly separate routes
- Lovable Cloud: one `inquiries` table + email notification on form submit
- Fully responsive (mobile, tablet, desktop)

## Build order

1. Design tokens + fonts + shared layout (header, footer, page transitions)
2. Home page
3. Services overview + 7 service detail pages
4. Portfolio grid + case study pages
5. About + Contact
6. Lovable Cloud contact form + email alerts
7. SEO metadata pass + final polish
