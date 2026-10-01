import { Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="font-display text-lg font-semibold tracking-tight text-foreground">
                Online Optic <span className="text-primary">Nova</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A tech agency helping brands grow with high-converting websites, memorable
              identities, and visibility that compounds.
            </p>
            <p className="mt-8 font-display text-sm font-semibold text-foreground">
              Get growth tips in your inbox
            </p>
            <NewsletterForm />
            <Link
              to="/contact"
              className="mt-6 inline-flex font-display text-lg font-medium text-foreground"
            >
              <span className="story-link">Let's build something</span>
            </Link>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 md:flex-row md:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Online Optic Nova. All rights reserved.
          </p>
          <p className="font-serif text-sm italic text-muted-foreground">
            Designed to convert. Built to last.
          </p>
        </div>
      </div>
    </footer>
  );
}
