import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { locations } from "@/lib/locations";
import { caseStudies } from "@/lib/case-studies";

// Generated at build time, so new pages and case studies are always included.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("", 1.0, "weekly"),
    page("/odoo", 0.95),
    page("/odoo-partner-calgary", 0.95),
    page("/services", 0.9),
    page("/locations", 0.8),
    ...locations.filter((l) => l.slug !== "odoo-partner-calgary").map((l) => page(`/${l.slug}`, l.kind === "Country" ? 0.85 : 0.8)),
    page("/case-studies", 0.8, "weekly"),
    ...caseStudies.map((c) => page(`/case-studies/${c.slug}`, 0.8)),
    page("/industries/manufacturing", 0.8),
    page("/industries/distribution", 0.8),
    page("/industries/cannabis", 0.8),
    page("/about", 0.7),
    page("/contact", 0.8),
    page("/privacy-policy", 0.3, "yearly"),
    page("/terms-of-service", 0.3, "yearly"),
  ];
}
