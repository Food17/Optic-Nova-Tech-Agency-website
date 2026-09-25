import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Studio®" },
      {
        name: "description",
        content:
          "A tech agency on a mission: give growing brands the conversion, visibility, and strategic positioning to reach a larger market.",
      },
      { property: "og:title", content: "About — Studio®" },
      {
        property: "og:description",
        content:
          "We help brands grow with high-converting websites, memorable identities, and visibility that compounds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Conversion first",
    text: "Beautiful is table stakes. Every design decision is measured against whether it moves your customers to act.",
  },
  {
    title: "Systems, not one-offs",
    text: "We build brand and design systems that scale — so every future asset, page, and campaign starts ahead.",
  },
  {
    title: "Momentum over perfection",
    text: "We ship fast, measure honestly, and iterate. Growth compounds when you keep moving.",
  },
  {
    title: "Partners, not vendors",
    text: "Your goals become our roadmap. We win when your numbers move.",
  },
];

function AboutPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute -top-32 right-1/3 h-[400px] w-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--secondary), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-44">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              About us
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Small team.{" "}
              <span className="font-serif font-normal italic text-gradient">Outsized</span>{" "}
              results.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
              Why we exist
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Too many great businesses stay invisible — buried under dated websites, inconsistent
              branding, and marketing that doesn't convert. We started this agency to change that.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We give growing brands the high conversion and visibility they need for consistent
              growth — and position them strategically to reach a wider audience and compete in a
              larger market.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl font-bold text-foreground">What we believe</h3>
              <ul className="mt-6 space-y-6">
                {values.map((v) => (
                  <li key={v.title}>
                    <p className="font-display font-semibold text-foreground">
                      <span className="mr-2 text-primary">→</span>
                      {v.title}
                    </p>
                    <p className="mt-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {v.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-24 rounded-2xl border border-border bg-card p-10 text-center md:p-16">
            <p className="font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
              "Your brand deserves to compete in a larger market. We build the bridge."
            </p>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-primary"
            >
              Work with us
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
