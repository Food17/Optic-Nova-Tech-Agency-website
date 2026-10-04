import propertyOne from "@/assets/work/property-planet-1.asset.json";
import propertyTwo from "@/assets/work/property-planet-2.asset.json";
import mssnOne from "@/assets/work/mssn-gaposa-1.asset.json";
import mssnTwo from "@/assets/work/mssn-gaposa-2.asset.json";
import sweetOne from "@/assets/work/sweetcrumbs-1.asset.json";
import sweetTwo from "@/assets/work/sweetcrumbs-2.asset.json";
import hairPreview from "@/assets/work/hair-hive.asset.json";
import portfolioPreview from "@/assets/work/designer-portfolio.asset.json";

export type ProjectCategory = "Graphic Design" | "Web Development" | "Brand Identity";

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  summary: string;
  scope: string;
  images: { src: string; alt: string }[];
  url: string;
  linkLabel: string;
  sourceNote?: string;
}

export const projectCategories = ["All", "Graphic Design", "Web Development", "Brand Identity"] as const;

export const projects: Project[] = [
  {
    slug: "property-planet-designs",
    title: "Property Planet",
    client: "Property Planet",
    category: "Graphic Design",
    summary: "Property-focused promotional designs for a real estate audience.",
    scope: "Poster designs published in Mustapha Adesanya's Behance gallery. The original flyer gallery link supplied for this project is unavailable, so the verified poster gallery is linked here instead.",
    images: [
      { src: propertyOne.url, alt: "Property Planet real estate promotional poster design" },
      { src: propertyTwo.url, alt: "Second Property Planet real estate poster design" },
    ],
    url: "https://www.behance.net/gallery/256253935/Poster-Designs-(Poperty-Planet)",
    linkLabel: "View posters on Behance",
    sourceNote: "The supplied flyer gallery could not be opened. These visuals are from the same designer's accessible Property Planet poster gallery.",
  },
  {
    slug: "mssn-gaposa-visuals",
    title: "MSSN GAPOSA",
    client: "MSSN GAPOSA",
    category: "Graphic Design",
    summary: "A collection of visual designs for MSSN GAPOSA.",
    scope: "Visual designs published in Mustapha Adesanya's Behance gallery. View the gallery for the full collection.",
    images: [
      { src: mssnOne.url, alt: "MSSN GAPOSA visual design from the published gallery" },
      { src: mssnTwo.url, alt: "Additional MSSN GAPOSA visual design" },
    ],
    url: "https://www.behance.net/gallery/256249153/Visual-Designs-(MSSN-GAPOSA)",
    linkLabel: "View gallery on Behance",
  },
  {
    slug: "hair-hive-website",
    title: "Hair Hive",
    client: "Hair Hive",
    category: "Web Development",
    summary: "A hair-care brand website designed to help people discover its services and take the next step.",
    scope: "The live website introduces Hair Hive's hair-health services and directs visitors toward booking a consultation. The project brief includes automations for new and returning customers; their behavior is not independently verifiable from the public site.",
    images: [{ src: hairPreview.url, alt: "Screenshot of the live Hair Hive website" }],
    url: "https://hair-care-website-psi.vercel.app/",
    linkLabel: "Visit live website",
  },
  {
    slug: "mustapha-adesanya-portfolio",
    title: "Mustapha Adesanya Portfolio",
    client: "Mustapha Adesanya",
    category: "Web Development",
    summary: "A portfolio presenting a graphic and brand identity designer's work and ways to get in touch.",
    scope: "The live portfolio introduces Mustapha, showcases selected design work, and provides a path for visitors to contact him. It is intended to position his practice for prospective clients.",
    images: [{ src: portfolioPreview.url, alt: "Screenshot of Mustapha Adesanya's live designer portfolio" }],
    url: "https://portfolio-showcase-studio-three.vercel.app/",
    linkLabel: "Visit live website",
  },
  {
    slug: "sweetcrumbs-identity",
    title: "Sweetcrumbs Creation",
    client: "Sweetcrumbs Creation",
    category: "Brand Identity",
    summary: "A visual identity explored through brand applications and presentation mockups.",
    scope: "Brand identity visuals published in Mustapha Adesanya's Behance gallery. View the gallery for the complete presentation.",
    images: [
      { src: sweetOne.url, alt: "Sweetcrumbs Creation brand identity design" },
      { src: sweetTwo.url, alt: "Sweetcrumbs Creation visual identity application" },
    ],
    url: "https://www.behance.net/gallery/256250709/Brand-Identity-Design-(Sweetcrumbs-Creation)",
    linkLabel: "View identity on Behance",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
