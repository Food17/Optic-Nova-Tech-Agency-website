import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getService, services } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} · Online Optic Nova` },
          { name: "description", content: loaderData.service.description },
          { property: "og:title", content: `${loaderData.service.title} · Online Optic Nova` },
          { property: "og:description", content: loaderData.service.description },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [
          { title: "Service not found · Online Optic Nova" },
          { name: "robots", content: "noindex" },
        ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute -top-32 left-1/3 h-[400px] w-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--secondary), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-36 md:px-8 md:pt-44">
          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              All services
            </Link>
            <h1 className="mt-8 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-xl font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
              {service.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-foreground/90">{service.description}</p>

            <h2 className="mt-14 font-display text-2xl font-bold text-foreground">
              What you get
            </h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
                    <Check className="size-3 text-primary" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-xl font-bold text-foreground">Outcomes</h2>
              <ul className="mt-6 space-y-5">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <span className="mt-1.5 size-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="group mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-primary"
              >
                Discuss this service
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-24">
          <Reveal>
            <h2 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Explore more
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: other.slug }}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {other.shortTitle}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{other.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
