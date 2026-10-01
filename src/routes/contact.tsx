import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";
import { supabase } from "@/integrations/supabase/client";
import { services } from "@/data/services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Studio®" },
      {
        name: "description",
        content:
          "Tell us about your project. We reply within 24 hours with a clear plan and next steps.",
      },
      { property: "og:title", content: "Contact · Studio®" },
      {
        property: "og:description",
        content: "Tell us about your project. We reply within 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  company: z.string().trim().max(100).optional(),
  service: z.string().trim().max(100).optional(),
  budget: z.string().trim().max(50).optional(),
  message: z.string().trim().min(10, "Tell us a little more about the project").max(2000),
});

const budgets = ["Under $1k", "$1k to $5k", "$5k to $15k", "$15k+", "Not sure yet"];

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60";

function ContactPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  const set = (key: keyof typeof form) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = inquirySchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { error } = await supabase.from("inquiries").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company || null,
      service: parsed.data.service || null,
      budget: parsed.data.budget || null,
      message: parsed.data.message,
    });
    if (error) {
      setStatus("error");
    } else {
      navigate({ to: "/thank-you" });
    }
  }

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden bg-grid">
        <div
          className="pointer-events-none absolute -top-32 left-1/3 h-[400px] w-[600px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(ellipse, var(--secondary), transparent 65%)" }}
        />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pt-44">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Contact
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl">
              Let's build something{" "}
              <span className="font-serif font-normal italic text-gradient">worth seeing</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Tell us about your project and goals. We reply within 24 hours with a clear plan
              and next steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            {status === "sent" ? (
              <div className="flex h-full flex-col items-start justify-center rounded-2xl border border-primary/30 bg-card p-10">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary/15">
                  <Check className="size-6 text-primary" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold text-foreground">
                  Inquiry received
                </h2>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">
                  Thanks for reaching out. We'll review your project and get back to you within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-7 md:p-9" noValidate>
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => set("name")(e.target.value)}
                      placeholder="Your name"
                      className={inputClass}
                    />
                    {errors["name"] && <p className="mt-1.5 text-xs text-destructive">{errors["name"]}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => set("email")(e.target.value)}
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                    {errors["email"] && <p className="mt-1.5 text-xs text-destructive">{errors["email"]}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                      Company <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={form.company}
                      onChange={(e) => set("company")(e.target.value)}
                      placeholder="Your business"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-foreground">
                      What do you need?
                    </label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => set("service")(e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.shortTitle}>
                          {s.shortTitle}
                        </option>
                      ))}
                      <option value="Something else">Something else</option>
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <span className="mb-2 block text-sm font-medium text-foreground">
                    Budget <span className="text-muted-foreground">(optional)</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => set("budget")(form.budget === b ? "" : b)}
                        className={
                          form.budget === b
                            ? "rounded-full border border-primary bg-primary px-4 py-2 text-xs font-medium text-primary-foreground"
                            : "rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                        }
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    About the project
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(e) => set("message")(e.target.value)}
                    placeholder="What are you building, who is it for, and what does success look like?"
                    className={inputClass}
                  />
                  {errors["message"] && (
                    <p className="mt-1.5 text-xs text-destructive">{errors["message"]}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="mt-4 text-sm text-destructive">
                    Something went wrong sending your inquiry. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-display text-sm font-semibold text-primary-foreground transition-all duration-300 hover:glow-primary disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send inquiry"}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-7">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  What happens next
                </h2>
                <ol className="mt-5 space-y-4">
                  {[
                    "We review your inquiry and reply within 24 hours.",
                    "A short call to understand your goals and scope.",
                    "You get a clear proposal with timeline and price.",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="font-display text-sm font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl border border-border bg-card p-7">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Prefer email?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Write to us directly and we'll take it from there.
                </p>
                <a
                  href="mailto:contact.onlineopticalnova@gmail.com"
                  className="story-link mt-4 inline-block font-display text-lg font-medium text-foreground"
                >
                  contact.onlineopticalnova@gmail.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
