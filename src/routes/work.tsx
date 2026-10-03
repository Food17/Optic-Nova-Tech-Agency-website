import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work · Online Optic Nova" },
      {
        name: "description",
        content:
          "Case studies in web development, brand identity, SEO, social media, email automation, and AI, real projects, measurable results.",
      },
      { property: "og:title", content: "Work · Online Optic Nova" },
      {
        property: "og:description",
        content: "Case studies with measurable results across web, brand, SEO, and automation.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [category, setCategory] = useState("All");
  const filtered =
    category === "All" ? projects : projects.filter((p) => p.category === category);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute -top-32 right-1/4 h-[400px] w-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--secondary), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pt-44">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Our work
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Work that{" "}
              <span className="font-serif font-normal italic text-gradient">moves numbers</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Every project is measured against the metric that matters: your growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <Reveal>
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
                  category === cat
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.slug} delay={i * 60}>
              <Link
                to="/work/$slug"
                params={{ slug: project.slug }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="relative flex h-44 items-end overflow-hidden bg-gradient-to-br from-forest via-secondary/60 to-background p-6">
                  <span className="font-display text-6xl font-bold text-foreground/10 transition-transform duration-500 group-hover:scale-110">
                    {String(projects.indexOf(project) + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-5 top-5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                        {project.title}
                      </h2>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.client} · {project.year}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-6 border-t border-border pt-5">
                    {project.results.slice(0, 2).map((r) => (
                      <div key={r.label}>
                        <p className="font-display text-lg font-bold text-gradient">{r.metric}</p>
                        <p className="text-xs text-muted-foreground">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
