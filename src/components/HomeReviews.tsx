import { Reveal } from "@/components/Reveal";
import { reviews, sampleReviews } from "@/lib/brand";

export function HomeReviews() {
  const hasReal = reviews.length > 0;
  const items = hasReal ? reviews : sampleReviews;

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-xl font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Reviews
            </h2>
            {!hasReal && (
              <p className="text-sm text-muted-foreground">
                Illustrative examples. Not submitted by clients.
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <Reveal delay={80}>
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 md:p-10">
              <blockquote className="font-serif text-3xl italic leading-snug text-foreground md:text-4xl">
                "{items[0].quote}"
              </blockquote>
              <figcaption className="mt-8 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{items[0].name}</span>
                {", "}
                {items[0].company}
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid gap-4">
            {items.slice(1, 3).map((r, i) => (
              <Reveal key={r.name} delay={160 + i * 90}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8">
                  <blockquote className="font-serif text-xl italic leading-snug text-foreground md:text-2xl">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{r.name}</span>
                    {", "}
                    {r.company}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        {items.length > 3 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {items.slice(3, 5).map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8">
                  <blockquote className="font-serif text-xl italic leading-snug text-foreground md:text-2xl">
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{r.name}</span>
                    {", "}
                    {r.company}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
