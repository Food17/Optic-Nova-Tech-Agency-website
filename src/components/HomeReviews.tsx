import { Reveal } from "@/components/Reveal";
import { reviews, sampleReviews } from "@/lib/brand";

type ReviewItem = { quote: string; name: string; company: string };

export function HomeReviews() {
  const hasReal = reviews.length > 0;
  const items: ReviewItem[] = hasReal ? reviews : sampleReviews;
  const featured = items[0];
  const rest = items.slice(1);
  const side = rest.slice(0, 2);
  const bottom = rest.slice(2);

  if (!featured) return null;

  const caption = (r: ReviewItem) => (
    <figcaption className="mt-6 text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{r.name}</span>
      {", "}
      {r.company}
    </figcaption>
  );

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
                "{featured.quote}"
              </blockquote>
              {caption(featured)}
            </figure>
          </Reveal>
          {side.length > 0 && (
            <div className="grid gap-4">
              {side.map((r, i) => (
                <Reveal key={r.name} delay={160 + i * 90}>
                  <figure className="h-full rounded-2xl border border-border bg-card p-8">
                    <blockquote className="font-serif text-xl italic leading-snug text-foreground md:text-2xl">
                      "{r.quote}"
                    </blockquote>
                    {caption(r)}
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        {bottom.length > 0 && (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {bottom.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8">
                  <blockquote className="font-serif text-xl italic leading-snug text-foreground md:text-2xl">
                    "{r.quote}"
                  </blockquote>
                  {caption(r)}
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
