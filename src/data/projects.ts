export interface Project {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  services: string[];
}

export const projects: Project[] = [
  {
    slug: "fintech-saas-redesign",
    title: "Fintech SaaS Platform Redesign",
    client: "Northpay",
    category: "Web Development",
    year: "2026",
    summary:
      "A complete redesign and rebuild of a B2B payments dashboard, faster, clearer, and built to convert trial users into paying customers.",
    challenge:
      "Northpay's dashboard was slow, dated, and confusing. Trial users dropped off before reaching their first transaction, and the marketing site wasn't communicating the product's value.",
    solution:
      "We rebuilt the marketing site and product interface from the ground up: a new design system, streamlined onboarding, and a performance-first architecture that cut load times dramatically.",
    results: [
      { metric: "+64%", label: "Trial-to-paid conversion" },
      { metric: "0.8s", label: "Average page load" },
      { metric: "-41%", label: "Onboarding drop-off" },
    ],
    services: ["Web Development", "UI/UX Design", "Brand Identity"],
  },
  {
    slug: "restaurant-brand-launch",
    title: "Restaurant Brand Launch",
    client: "Ember & Oak",
    category: "Brand Identity",
    year: "2026",
    summary:
      "Full brand identity for a new restaurant group, logo, menus, signage, social templates, and a launch website.",
    challenge:
      "A new restaurant entering a crowded market needed an identity distinctive enough to stand out and flexible enough to stretch across print, digital, and physical space.",
    solution:
      "We built a warm, editorial identity system with a custom wordmark, a print-ready collateral suite, and a launch site with reservations and menu storytelling.",
    results: [
      { metric: "3.2k", label: "Launch-week site visits" },
      { metric: "+180%", label: "Instagram growth in 60 days" },
      { metric: "Fully booked", label: "Opening month" },
    ],
    services: ["Brand Identity", "Graphic Design", "Web Development"],
  },
  {
    slug: "ecommerce-seo-growth",
    title: "E-commerce SEO Growth Engine",
    client: "Verde Home",
    category: "SEO",
    year: "2025",
    summary:
      "Technical SEO overhaul and content strategy that took a home goods store from page 4 to the top 3 for its core categories.",
    challenge:
      "Verde Home relied almost entirely on paid ads. Organic visibility was near zero, and rising ad costs were eating margins.",
    solution:
      "We fixed deep technical issues, restructured the site's category architecture, and shipped a content program targeting buying-intent searches in their niche.",
    results: [
      { metric: "+312%", label: "Organic traffic in 9 months" },
      { metric: "Top 3", label: "Rankings for 14 core keywords" },
      { metric: "-38%", label: "Paid ad spend" },
    ],
    services: ["SEO", "Content Strategy"],
  },
  {
    slug: "clinic-social-campaign",
    title: "Healthcare Social Campaign",
    client: "Brightpath Clinic",
    category: "Social Media",
    year: "2025",
    summary:
      "A six-month social media program, strategy, creative, and management, that turned a quiet clinic page into a patient acquisition channel.",
    challenge:
      "The clinic posted irregularly with no strategy, and appointment bookings from social were effectively zero.",
    solution:
      "We built a content system around patient education and trust, produced a monthly creative batch, and managed publishing and community engagement end to end.",
    results: [
      { metric: "+27k", label: "New followers" },
      { metric: "4.1%", label: "Average engagement rate" },
      { metric: "+96", label: "Monthly bookings from social" },
    ],
    services: ["Social Media Management", "Graphic Design"],
  },
  {
    slug: "saas-email-automation",
    title: "SaaS Lifecycle Email Automation",
    client: "Loopstack",
    category: "Email Marketing",
    year: "2026",
    summary:
      "A complete lifecycle email program, onboarding, activation, win-back, that recovered churned users and lifted expansion revenue.",
    challenge:
      "Loopstack had a single generic newsletter. Users signed up, never activated, and churned silently.",
    solution:
      "We designed behavior-triggered flows for every lifecycle stage, rewrote the email voice, and built dashboards to track revenue per flow.",
    results: [
      { metric: "+22%", label: "Activation rate" },
      { metric: "31%", label: "Win-back recovery" },
      { metric: "$48k", label: "Recovered MRR annually" },
    ],
    services: ["Email Marketing & Automation"],
  },
  {
    slug: "logistics-ai-automation",
    title: "Logistics AI Operations Automation",
    client: "Swiftlane",
    category: "AI Automation",
    year: "2026",
    summary:
      "AI-powered workflows that automated quote requests, lead qualification, and customer support triage for a growing logistics firm.",
    challenge:
      "Swiftlane's small team was drowning in manual quote requests and support emails, slowing response times and losing leads.",
    solution:
      "We built an AI intake and qualification pipeline connected to their CRM, plus a support triage assistant that drafts responses for human approval.",
    results: [
      { metric: "15h", label: "Saved weekly per team member" },
      { metric: "3 min", label: "Average lead response time" },
      { metric: "+35%", label: "Quote-to-booking rate" },
    ],
    services: ["AI Automation", "Web Development"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
