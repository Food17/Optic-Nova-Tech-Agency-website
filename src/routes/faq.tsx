import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { faqs } from "@/lib/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs · Online Optic Nova" },
      { name: "description", content: "Answers to common questions about websites, branding, design, SEO, and starting a project with Online Optic Nova." },
      { property: "og:title", content: "FAQs · Online Optic Nova" },
      { property: "og:description", content: "Answers to common questions about our digital and brand services and how to start a project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FAQPage,
});


function FAQPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-grid">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
          <Reveal>
            <h1 className=" font-display text-5xl font-bold text-foreground md:text-7xl">Frequently asked questions</h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`question-${index}`} className="border-border">
                <AccordionTrigger className="gap-5 py-6 text-left font-display text-lg font-medium text-foreground hover:text-primary hover:no-underline md:text-xl">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-6 text-base leading-relaxed text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-14 border-t border-border pt-10">
            <p className="font-display text-xl font-medium text-foreground">Have another question?</p>
            <Link to="/contact" className="group mt-4 inline-flex items-center gap-2 font-display font-medium text-primary">
              Get in touch
                          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}