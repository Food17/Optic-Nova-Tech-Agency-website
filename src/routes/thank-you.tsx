import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank you · Studio®" },
      { name: "description", content: "Your inquiry has been received. We reply within 24 hours." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute -top-32 left-1/3 h-[400px] w-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--secondary), transparent 65%)" }}
        />
        <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-start justify-center px-5 pb-16 pt-36 md:px-8">
          <Reveal>
            <span className="flex size-14 items-center justify-center rounded-full bg-primary/15">
              <Check className="size-7 text-primary" />
            </span>
            <h1 className="mt-8 max-w-3xl font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Inquiry <span className="font-serif font-normal italic text-gradient">received</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Thanks for reaching out. We'll review your project and get back to you within
              24 hours with a clear plan and next steps.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-primary"
              >
                See our work
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 font-display text-sm font-semibold text-foreground transition-colors hover:border-primary/50"
              >
                Back home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
