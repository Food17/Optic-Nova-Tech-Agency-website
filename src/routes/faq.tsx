import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQs · Studio®" },
      { name: "description", content: "Answers to common questions about websites, branding, design, SEO, and starting a project with Studio®." },
      { property: "og:title", content: "FAQs · Studio®" },
      { property: "og:description", content: "Answers to common questions about our digital and brand services and how to start a project." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FAQPage,
});

const questions = [
  {
    question: "What kinds of projects do you take on?",
    answer: "We work on websites and SaaS products, UI/UX design, brand identities, graphic design, SEO, and digital marketing. We can also help with email and AI automation. Tell us what you need and we can discuss the right scope.",
  },
  {
    question: "Can you redesign an existing website or brand?",
    answer: "Yes. We can improve an existing website, refresh a brand identity, or create something new. Share what you have now and what you want to change when you get in touch.",
  },
  {
    question: "How do I start a project?",
    answer: "Send us an inquiry with a brief description of your business, goals, and the services you need. We will review it and discuss the scope and next steps with you.",
  },
  {
    question: "How much does a project cost?",
    answer: "Pricing depends on the work involved. Once we understand your goals and requirements, we can put together a proposal with a clear price and timeline.",
  },
  {
    question: "Do you work with new businesses?",
    answer: "Yes. We work with both new and established businesses, whether you are starting from scratch or looking to improve what you already have.",
  },
  {
    question: "Can I ask for more than one service?",
    answer: "Of course. A project can bring together website development, branding, design, SEO, or marketing. We can discuss which pieces make sense together for your goals.",
  },
];

function FAQPage() {
  return (
    <div className="bg-background">
      <section className="border-b border-border bg-grid">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
          <Reveal>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">FAQs</p>
            <h1 className="mt-4 font-display text-5xl font-bold text-foreground md:text-7xl">Frequently asked questions</h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="border-t border-border">
            {questions.map(({ question, answer }, index) => (
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
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}