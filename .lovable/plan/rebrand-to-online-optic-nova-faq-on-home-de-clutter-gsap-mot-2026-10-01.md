# Rebrand to Online Optic Nova, FAQ on Home, de-clutter, GSAP motion

## 1. Agency name
- Replace every "Studio®" placeholder with **Online Optic Nova**: header wordmark, footer wordmark and copyright, and all page titles and share previews (Home, Services, each service, Work, each project, About, Contact, FAQ, Thank you).
- Header and footer use a clean text wordmark for now, built so the logo file can be dropped in later without layout changes.

## 2. Navigation and FAQ
- Remove "FAQs" from the header menu (desktop and mobile).
- Add an FAQ section near the bottom of the Home page, above the final call to action, using the same six questions.
- Keep the standalone FAQ page reachable through a small footer link only, so answers stay shareable and searchable. It is not in the main menu.
- Reserve a spot on Home for a Reviews section directly before the FAQ. It stays hidden until you send real client reviews. No placeholder or invented reviews.

## 3. Clean-up audit: what stays, what goes
Icons currently in use are all small arrows or checkmarks. Rule going forward:

Keep (they do a job):
- Menu open and close icon on mobile
- Arrow on primary action buttons only ("Start a project", form submit)
- Back arrow on project and service detail pages

Remove:
- Arrows on every card, list item and secondary link (Services, Work, About, Footer links)
- Checkmark bullets on service detail pages and the thank-you page (plain text lists instead)
- Small green uppercase labels above every heading on Home (e.g. the eyebrow lines over section titles). Keep a heading only where it orients the reader.
- Repeated "Studio" word block in the footer and any filler line that restates the heading
- Scrolling ticker of service names on Home, since the Services section already lists them

Copy rules applied in the same pass: no em-dashes, no invented numbers or claims, short sentences, no generic agency phrases.

## 4. GSAP animations
- Add GSAP with its ScrollTrigger plugin.
- Hero: headline lines reveal in sequence on load, light text split.
- Sections: fade and rise on scroll, with staggered cards for Services and Work.
- Work grid: subtle image parallax on scroll.
- Page changes: short fade between pages.
- Respect "reduce motion" settings: animations switch off for those visitors.
- Replace the current simple reveal wrapper with the GSAP version so motion feels consistent across the site.

## Technical details
- `bun add gsap`; register ScrollTrigger client-side only inside effects (SSR safe), clean up with `gsap.context().revert()`.
- New `src/components/motion/` helpers (`useGsapReveal`, `SplitHeadline`); `Reveal.tsx` reimplemented on GSAP with `prefers-reduced-motion` check.
- FAQ data moved to `src/lib/faq.ts`, shared by `index.tsx` and `faq.tsx`; FAQ JSON-LD added to Home.
- `src/lib/brand.ts` holds name and logo slot; Header/Footer read from it.
- Update head() titles on all routes; update AGENTS.md rule (FAQ shared data, Home section plus footer-only /faq) and save memory: FAQ and reviews live on Home, not in nav; icons only where functional.
