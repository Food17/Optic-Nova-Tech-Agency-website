export const faqs = [
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

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};
