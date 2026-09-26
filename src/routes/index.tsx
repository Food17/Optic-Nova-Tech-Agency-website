import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio® · Web, Brand & Growth Agency" },
      {
        name: "description",
        content:
          "We build high-converting websites, memorable brand identities, and growth engines for ambitious businesses. Web development, UI/UX, graphic design, SEO, and AI automation.",
      },
      { property: "og:title", content: "Studio® · Web, Brand & Growth Agency" },
      {
        property: "og:description",
        content:
          "High-converting websites, memorable brand identities, and visibility that compounds.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const marqueeItems = [
  "Web Development",
  "Brand Identity",
  "UI/UX Design",
  "Graphic Design",
  "SEO",
  "Social Media",
  "Email Marketing",
  "AI Automation",
];

const process = [
  {
    step: "01",
    title: "Discover",
    text: "We dig into your business, audience, and goals to find the sharpest angle for growth.",
  },
  {
    step: "02",
    title: "Design",
    text: "Strategy becomes identity, interface, and message, all designed around conversion.",
  },
  {
    step: "03",
    title: "Build",
    text: "We ship fast, performance-obsessed builds with motion that feels premium.",
  },
  {
    step: "04",
    title: "Grow",
    text: "SEO, campaigns, and automation keep the momentum compounding after launch.",
  },
];

function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--secondary), transparent 65%)" }}
        />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-24 pt-32 md:px-8">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary" />
              Web · Brand · Growth
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
              We build brands that{" "}
              <span className="font-serif font-normal italic text-gradient">convert</span> and
              websites that{" "}
              <span className="font-serif font-normal italic text-gradient">perform</span>.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A tech agency for ambitious businesses. High-converting websites, memorable brand
              identities, and the visibility engines that put you in front of a wider market.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-primary"
              >
                Start a project
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 font-display text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                See our work
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <div className="relative border-y border-border bg-card/60 py-5 backdrop-blur-sm">
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <span
                  key={i}
                  className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-medium uppercase tracking-widest text-muted-foreground"
                >
                  {item}
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                What we do
              </p>
              <h2 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Everything your brand needs to grow
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              All services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div>
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {service.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.tagline}
                  </p>
                </div>
                <ArrowUpRight className="mt-6 size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                  Selected work
                </p>
                <h2 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  Results we're proud of
                </h2>
              </div>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
              >
                All projects
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 space-y-4">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 80}>
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="group grid items-center gap-6 rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-primary/40 md:grid-cols-[auto_1fr_auto_auto] md:p-9"
                >
                  <span className="font-display text-sm font-semibold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground transition-colors group-hover:text-primary md:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {project.client} · {project.category} · {project.year}
                    </p>
                  </div>
                  <span className="hidden font-display text-2xl font-bold text-gradient md:block">
                    {project.results[0]?.metric}
                  </span>
                  <ArrowUpRight className="hidden size-6 text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary md:block" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
            How we work
          </p>
          <h2 className="mt-4 max-w-xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            A process built for momentum
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-4xl font-bold text-gradient">{item.step}</span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-border">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse at bottom, var(--secondary), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-28 text-center md:px-8 md:py-40">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Ready to put your brand in a{" "}
              <span className="font-serif font-normal italic text-gradient">larger market</span>?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Tell us where you want to go. We'll show you the fastest route there.
            </p>
            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-primary"
            >
              Start a project
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
