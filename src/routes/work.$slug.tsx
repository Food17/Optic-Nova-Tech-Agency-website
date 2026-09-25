import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getProject, projects } from "@/data/projects";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Studio®` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.title} — Studio®` },
          { property: "og:description", content: loaderData.project.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [
          { title: "Project not found — Studio®" },
          { name: "robots", content: "noindex" },
        ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute -top-32 left-1/4 h-[400px] w-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--secondary), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pt-44">
          <Reveal>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" />
              All work
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              <span className="rounded-full border border-border px-3 py-1">{project.category}</span>
              <span>{project.client}</span>
              <span>·</span>
              <span>{project.year}</span>
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {project.results.map((r, i) => (
            <Reveal key={r.label} delay={i * 60}>
              <div className="rounded-2xl border border-border bg-card p-8 text-center">
                <p className="font-display text-4xl font-bold text-gradient md:text-5xl">
                  {r.metric}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-foreground">The challenge</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{project.challenge}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display text-2xl font-bold text-foreground">What we did</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{project.solution}</p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-wrap gap-2">
            {project.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-24 grid gap-4 md:grid-cols-2">
            <Link
              to="/work/$slug"
              params={{ slug: next.slug }}
              className="group flex items-center justify-between rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40"
            >
              <div>
                <p className="text-sm text-muted-foreground">Next project</p>
                <p className="mt-2 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {next.title}
                </p>
              </div>
              <ArrowRight className="size-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
            <Link
              to="/contact"
              className="group flex items-center justify-between rounded-2xl bg-primary p-8 transition-all duration-300 hover:glow-primary"
            >
              <div>
                <p className="text-sm text-primary-foreground/70">Want results like these?</p>
                <p className="mt-2 font-display text-xl font-semibold text-primary-foreground">
                  Start your project
                </p>
              </div>
              <ArrowUpRight className="size-5 text-primary-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
