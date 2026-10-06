import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Button } from "@/components/ui/button";
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
          { title: `${loaderData.project.title} · Online Optic Nova` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.title} · Online Optic Nova` },
          { property: "og:description", content: loaderData.project.summary },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [
          { title: "Project not found · Online Optic Nova" },
          { name: "description", content: "This project is no longer available. Browse the current work by Online Optic Nova." },
          { property: "og:title", content: "Project not found · Online Optic Nova" },
          { property: "og:description", content: "Browse the current work by Online Optic Nova." },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary" },
          { name: "robots", content: "noindex" },
        ],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const additionalImages = project.images?.slice(1) ?? [];

  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-36 md:px-8 md:pb-16 md:pt-44">
        <Reveal>
          <Link to="/work" className="text-sm font-medium text-muted-foreground hover:text-primary">← All work</Link>
          <p className="mt-10 text-xs font-semibold uppercase text-primary">{project.category}</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-bold text-foreground md:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-muted-foreground md:text-2xl">{project.summary}</p>
          <Button asChild className="mt-8 rounded-sm">
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.linkLabel} ↗</a>
          </Button>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <Reveal>
          <ProjectVisual project={project} eager className="max-h-[680px] aspect-[16/10] border border-border md:aspect-[21/10]" />
        </Reveal>
        {additionalImages.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {additionalImages.map((image) => (
              <Reveal key={image.src}>
                <div className="aspect-square overflow-hidden border border-border bg-muted">
                  <img src={image.src} alt={image.alt} loading="lazy" className="h-full w-full object-contain" />
                </div>
              </Reveal>
            ))}
          </div>
        )}
        <Reveal>
          <div className="mt-14 grid gap-6 border-t border-border pt-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-xs font-semibold uppercase text-primary">Project details</p>
              <p className="mt-3 font-display text-lg text-foreground">{project.client}</p>
            </div>
            <div>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">{project.scope}</p>
              {project.sourceNote && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{project.sourceNote}</p>}
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-b border-primary pb-1 text-sm font-semibold text-foreground hover:text-primary">{project.linkLabel} ↗</a>
            </div>
          </div>
        </Reveal>
        <div className="mt-20 flex flex-wrap justify-between gap-8 border-t border-border pt-8">
          {next && <Link to="/work/$slug" params={{ slug: next.slug }} className="font-display text-lg text-foreground hover:text-primary">Next: {next.title} →</Link>}
          <Link to="/contact" className="font-display text-lg text-primary hover:text-foreground">Start a project →</Link>
        </div>
      </section>
    </div>
  );
}
