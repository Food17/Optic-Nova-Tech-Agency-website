import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.string().trim().email("Please enter a valid email").max(255);

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    setStatus("sending");
    const { error: dbError } = await supabase
      .from("newsletter_subscribers")
      .insert({ email: parsed.data });
    if (dbError && dbError.code !== "23505") {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
      return;
    }
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="mt-5 flex items-center gap-2 text-sm text-primary">
        <Check className="size-4" />
        You're on the list. Talk soon.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-5" noValidate>
      <div className="flex max-w-sm items-center gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className="w-full rounded-full border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-primary/60"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          aria-label="Subscribe"
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:glow-primary disabled:opacity-60"
        >
          <ArrowUpRight className="size-4" />
        </button>
      </div>
      {error && <p className="mt-2 text-xs text-destructive">{error}</p>}
    </form>
  );
}
