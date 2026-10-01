import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Online Optic Nova" },
      {
        name: "description",
        content:
          "Web development & design, brand identity, UI/UX, graphic design, SEO, social media management, email marketing, and AI automation, everything your brand needs to grow.",
      },
      { property: "og:title", content: "Services · Online Optic Nova" },
      {
        property: "og:description",
        content:
          "Web development, brand identity, graphic design, SEO, social media, email marketing, and AI automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const primary = services.filter((s) => s.primary);
  const secondary = services.filter((s) => !s.primary);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-[400px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--secondary), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-44">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Services
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Capabilities that{" "}
              <span className="font-serif font-normal italic text-gradient">compound</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From your first logo to full AI-powered operations, one partner for every stage of
              your brand's growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <Reveal>
          <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Core services
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {primary.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div>
                  <span className="font-display text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{service.tagline}</p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium text-muted-foreground">
                    {service.deliverables.length} deliverables
                  </span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="mt-20 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Growth & automation
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {secondary.map((service, i) => (
            <Reveal key={service.slug} delay={i * 60}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
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
    </div>
  );
}
