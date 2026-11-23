import type { MetadataRoute } from "next";
import { getSite, CA_URL, COM_URL } from "@/lib/site";
import { locations } from "@/lib/locations";
import { caseStudies } from "@/lib/case-studies";
import { odooServices } from "@/lib/odoo-services";

// Generated per domain: erptitans.ca lists .ca URLs, erptitans.com lists .com URLs,
// each with the other domain as an hreflang alternate.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { base } = await getSite();
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly") => ({
    url: `${base}${path}`,
    lastModified: now,
    alternates: { languages: { "en-CA": `${CA_URL}${path}`, "en-US": `${COM_URL}${path}`, "x-default": `${COM_URL}${path}` } },
    changeFrequency,
    priority,
  });

  return [
    page("", 1.0, "weekly"),
    page("/odoo", 0.95),
    page("/odoo-partner-calgary", 0.95),
    page("/services", 0.9),
    ...odooServices.map((o) => page(`/${o.slug}`, 0.9)),
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
