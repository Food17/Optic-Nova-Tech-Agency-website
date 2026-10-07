import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ProjectGallery } from "@/components/ProjectGallery";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/data/projects";
import { reviews, sampleProjectReviews } from "@/lib/brand";

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
  const projectReviews = reviews.filter((review) => review.projectSlug === project.slug);
  const sampleReview = sampleProjectReviews[project.slug];

  return (
    <div className="bg-background">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-32 md:px-8 md:pb-14 md:pt-40">
        <Reveal>
          <Link to="/work" className="text-sm font-medium text-muted-foreground hover:text-primary">← All work</Link>
          <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h1 className="max-w-4xl break-words font-display text-4xl font-medium leading-[1.08] text-foreground md:text-6xl lg:text-7xl">{project.title}</h1>
              <p className="mt-6 text-sm text-primary">{project.category}</p>
            </div>
            <div>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{project.summary}</p>
              <Button asChild variant="outline" className="mt-6 h-auto whitespace-normal rounded-sm px-5 py-3 text-left">
                <a href={project.url} target="_blank" rel="noopener noreferrer">{project.linkLabel} ↗</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <Reveal>
          <ProjectGallery project={project} />
        </Reveal>
        <Reveal>
          <div className="mt-14 grid gap-6 border-t border-border pt-10 md:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="font-display text-2xl text-foreground">About the project</h2>
              <p className="mt-3 font-display text-lg text-foreground">{project.client}</p>
            </div>
            <div>
              <p className="max-w-2xl leading-relaxed text-muted-foreground">{project.scope}</p>
              {project.sourceNote && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">{project.sourceNote}</p>}
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block border-b border-primary pb-1 text-sm font-semibold text-foreground hover:text-primary">{project.linkLabel} ↗</a>
            </div>
          </div>
        </Reveal>
        {(projectReviews.length > 0 || sampleReview) && <Reveal>
          <div className="mt-16 border-t border-border pt-10 md:mt-24">
            <h2 className="font-display text-xl text-foreground">{projectReviews.length ? "Client feedback" : "Sample review"}</h2>
            {projectReviews.length ? projectReviews.map((review) => <figure key={review.name} className="mt-6 max-w-3xl border-l-2 border-primary pl-6">
              <blockquote className="font-serif text-2xl leading-relaxed text-foreground md:text-3xl">“{review.quote}”</blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground">{review.name}, {review.company}</figcaption>
            </figure>) : <figure className="mt-6 max-w-3xl border-l-2 border-border pl-6">
              <figcaption className="mb-4 text-sm font-medium text-muted-foreground">Illustrative only. Not submitted by a client.</figcaption>
              <blockquote className="font-serif text-2xl leading-relaxed text-muted-foreground md:text-3xl">“{sampleReview}”</blockquote>
            </figure>}
          </div>
        </Reveal>}
        <div className="mt-20 flex flex-wrap justify-between gap-8 border-t border-border pt-8">
          {next && <Link to="/work/$slug" params={{ slug: next.slug }} className="font-display text-lg text-foreground hover:text-primary">Next: {next.title} →</Link>}
          <Link to="/contact" className="font-display text-lg text-primary hover:text-foreground">Start a project →</Link>
        </div>
      </section>
    </div>
  );
}
