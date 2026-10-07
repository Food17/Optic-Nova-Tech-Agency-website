export const brand = {
  name: "Online Optic Nova",
  // Set to an imported image once the logo is supplied.
  logo: null as string | null,
};

// Real client reviews only. Section on Home stays hidden while empty.
export const reviews: { quote: string; name: string; company: string; projectSlug?: string }[] = [];

// Illustrative previews, never represented as genuine client endorsements.
export const sampleProjectReviews: Record<string, string> = {
  "property-planet-designs": "The layout gives each property a clear focal point, while keeping the key information easy to find.",
  "mssn-gaposa-visuals": "The designs bring the message forward with a consistent visual style across the collection.",
  "sweetcrumbs-identity": "The identity feels considered across its applications, with a visual character that is easy to recognise.",
  "hair-hive-website": "The website makes the services easy to explore and keeps the path to a consultation clear.",
  "mustapha-adesanya-portfolio": "The portfolio lets the work speak, with a clear presentation and a straightforward way to get in touch.",
};
