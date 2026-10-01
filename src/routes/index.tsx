import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SplitHeadline, Line } from "@/components/SplitHeadline";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { faqs, faqJsonLd } from "@/lib/faq";
import { reviews } from "@/lib/brand";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Online Optic Nova · Web, Brand & Growth Agency" },
      {
        name: "description",
        content:
          "Online Optic Nova builds high-converting websites, brand identities, and growth systems for new and established businesses.",
      },
      { property: "og:title", content: "Online Optic Nova · Web, Brand & Growth Agency" },
      {
        property: "og:description",
        content: "Websites, brand identities, and visibility for businesses ready to grow.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqJsonLd) }],
  }),
  component: HomePage,
});

const process = [
  { step: "01", title: "Discover", text: "We learn your business, audience, and goals." },
  { step: "02", title: "Design", text: "Strategy becomes identity, interface, and message." },
  { step: "03", title: "Build", text: "Fast, careful builds with motion that feels considered." },
  { step: "04", title: "Grow", text: "SEO, campaigns, and automation after launch." },
];

function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--secondary), transparent 65%)" }}
        />
        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-24 pt-32 md:px-8">
          <SplitHeadline className="max-w-5xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-8xl">
            <Line>
              Brands that <span className="font-serif font-normal italic text-gradient">convert.</span>
            </Line>
            <Line>
              Websites that <span className="font-serif font-normal italic text-gradient">perform.</span>
            </Line>
          </SplitHeadline>
          <Reveal delay={400}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Websites, brand identities, and visibility for businesses ready to reach a wider market.
            </p>
          </Reveal>
          <Reveal delay={550}>
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
                className="inline-flex items-center rounded-full border border-border px-7 py-3.5 font-display text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                See our work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              What we do
            </h2>
            <Link to="/services" className="story-link text-sm font-semibold text-muted-foreground hover:text-primary">
              All services
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <Reveal key={service.slug} delay={i * 70}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <h3 className="font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                  {service.shortTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.tagline}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="max-w-xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Selected work
              </h2>
              <Link to="/work" className="story-link text-sm font-semibold text-muted-foreground hover:text-primary">
                All projects
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 space-y-4">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <Link
                  to="/work/$slug"
                  params={{ slug: project.slug }}
                  className="group grid items-center gap-6 rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:border-primary/40 md:grid-cols-[1fr_auto] md:p-9"
                >
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
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <h2 className="max-w-xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            How we work
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => (
            <Reveal key={item.step} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-4xl font-bold text-gradient">{item.step}</span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {reviews.length > 0 && (
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
            <Reveal>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Reviews
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {reviews.map((r, i) => (
                <Reveal key={r.name} delay={i * 90}>
                  <figure className="h-full rounded-2xl border border-border bg-card p-8">
                    <blockquote className="font-serif text-2xl italic leading-snug text-foreground">
                      "{r.quote}"
                    </blockquote>
                    <figcaption className="mt-6 text-sm text-muted-foreground">
                      {r.name}, {r.company}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Questions
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map(({ question, answer }, index) => (
                <AccordionItem key={question} value={`q-${index}`} className="border-border">
                  <AccordionTrigger className="gap-5 py-6 text-left font-display text-lg font-medium text-foreground hover:text-primary hover:no-underline">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[400px] opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse at bottom, var(--secondary), transparent 70%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 py-28 text-center md:px-8 md:py-40">
          <Reveal>
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Ready to reach a{" "}
              <span className="font-serif font-normal italic text-gradient">larger market</span>?
            </h2>
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
