import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Button } from "@/components/ui/button";
import { projects, projectCategories } from "@/data/projects";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work · Online Optic Nova" },
      { name: "description", content: "Explore real web development, graphic design, and brand identity projects presented by Online Optic Nova." },
      { property: "og:title", content: "Work · Online Optic Nova" },
      { property: "og:description", content: "Websites and visual design projects, with live previews and original galleries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const filtered = category === "All" ? projects : projects.filter((project) => project.category === category);

  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44">
        <Reveal>
          <h1 className="font-display text-5xl font-bold text-foreground md:text-7xl">Selected work<span className="text-primary">.</span></h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">Websites, graphic design, and brand identities.</p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2 border-b border-border pb-6">
          {projectCategories.map((item) => (
            <Button
              key={item}
              type="button"
              variant={category === item ? "default" : "outline"}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              className="rounded-sm"
            >
              {item}
            </Button>
          ))}
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {filtered.map((project, index) => (
            <Reveal key={project.slug} delay={index * 60}>
              <Link to="/work/$slug" params={{ slug: project.slug }} className="group block h-full rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <ProjectVisual project={project} className="aspect-[4/3] rounded-md border border-border transition-colors group-hover:border-primary/40" />
                <div className="pt-6">
                  <p className="text-xs font-medium text-primary">{project.category}</p>
                  <h2 className="mt-2 font-display text-2xl font-medium text-foreground transition-colors group-hover:text-primary md:text-3xl">{project.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
