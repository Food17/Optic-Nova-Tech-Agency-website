<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Animations use GSAP (+ScrollTrigger) loaded client-side inside effects, disabled for prefers-reduced-motion: SSR safe.
- FAQ data lives in src/lib/faq.ts, shown on Home and on the /faq page (footer link only, not in main nav): one source, shareable page.
- Portfolio entries use one typed data source shared by Home, Work, and project detail routes so sourced claims and links stay consistent.
- Nested content sections use an Outlet parent with an index route so list and detail pages render independently.
