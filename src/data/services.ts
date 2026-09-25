export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  deliverables: string[];
  outcomes: string[];
  primary: boolean;
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Website Development & Design",
    shortTitle: "Web Development",
    tagline: "Websites engineered to convert, not just to exist.",
    description:
      "We design and build fast, modern websites and SaaS interfaces that turn visitors into customers. From marketing sites to full product redesigns, every build is performance-obsessed, responsive, and designed around your conversion goals.",
    deliverables: [
      "Custom website design & development",
      "Website redesign & modernization",
      "SaaS product interfaces",
      "Landing pages & funnels",
      "Performance & Core Web Vitals optimization",
      "CMS setup so you can edit content yourself",
    ],
    outcomes: [
      "Higher conversion rates from day one",
      "Sub-second load times that keep visitors engaged",
      "A site that scales with your business",
    ],
    primary: true,
  },
  {
    slug: "brand-identity",
    title: "Brand Identity & UI/UX Design",
    shortTitle: "Brand Identity & UI/UX",
    tagline: "Identities people remember. Interfaces people love.",
    description:
      "We craft complete brand identities — logo, color, typography, voice — and translate them into intuitive UI/UX that feels effortless. Your brand becomes a system, not a one-off logo file.",
    deliverables: [
      "Logo & visual identity systems",
      "Brand guidelines & style guides",
      "UI/UX design for web & mobile",
      "Design systems & component libraries",
      "Prototyping & user testing",
    ],
    outcomes: [
      "A consistent brand across every touchpoint",
      "Interfaces that reduce friction and support tickets",
      "A design system your team can build on",
    ],
    primary: true,
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    shortTitle: "Graphic Design",
    tagline: "Design that stops the scroll and starts conversations.",
    description:
      "Flyers, posters, social media creatives, and ad designs built on your brand system. Every asset is designed to grab attention and drive action — in feeds, in print, and in campaigns.",
    deliverables: [
      "Social media creatives & templates",
      "Ad designs for Meta, Google & more",
      "Flyers, posters & print collateral",
      "Campaign visual systems",
      "Pitch decks & presentations",
    ],
    outcomes: [
      "Scroll-stopping creative that lifts engagement",
      "On-brand assets delivered fast",
      "Campaign visuals that convert",
    ],
    primary: true,
  },
  {
    slug: "seo",
    title: "SEO",
    shortTitle: "SEO",
    tagline: "Get found by the people already looking for you.",
    description:
      "Technical SEO, content strategy, and authority building that compound over time. We put your business on the first page for the searches that matter — and keep you there.",
    deliverables: [
      "Technical SEO audits & fixes",
      "Keyword research & content strategy",
      "On-page & off-page optimization",
      "Local SEO for your market",
      "Monthly reporting & rank tracking",
    ],
    outcomes: [
      "Sustainable organic traffic growth",
      "Higher rankings for buying-intent keywords",
      "Visibility that compounds month over month",
    ],
    primary: true,
  },
  {
    slug: "social-media",
    title: "Social Media Management",
    shortTitle: "Social Media",
    tagline: "A presence that works while you sleep.",
    description:
      "Strategy, content calendars, creation, and community management across the platforms your audience lives on. Consistent, on-brand, and measured against real business goals.",
    deliverables: [
      "Social strategy & content calendars",
      "Content creation & scheduling",
      "Community management",
      "Analytics & growth reporting",
    ],
    outcomes: [
      "A consistent, professional presence",
      "Growing, engaged audience",
      "More time back for running your business",
    ],
    primary: false,
  },
  {
    slug: "email-marketing",
    title: "Email Marketing & Automation",
    shortTitle: "Email & Automation",
    tagline: "The highest-ROI channel, finally working for you.",
    description:
      "From welcome sequences to full lifecycle automation, we build email systems that nurture leads and bring customers back — automatically.",
    deliverables: [
      "Email strategy & campaign design",
      "Automated flows (welcome, abandoned cart, re-engagement)",
      "Newsletter design & management",
      "List segmentation & deliverability",
    ],
    outcomes: [
      "Revenue on autopilot from automated flows",
      "Higher open and click rates",
      "Customers who come back",
    ],
    primary: false,
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    shortTitle: "AI Automation",
    tagline: "Automate the busywork. Amplify the work that matters.",
    description:
      "We design AI-powered workflows that handle repetitive tasks — lead qualification, support, content ops, internal tooling — so your team focuses on growth.",
    deliverables: [
      "AI workflow & process automation",
      "Chatbots & AI assistants",
      "CRM & tool integrations",
      "Custom internal AI tooling",
    ],
    outcomes: [
      "Hours saved every week on manual work",
      "Faster response times for leads and customers",
      "Operations that scale without headcount",
    ],
    primary: false,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
