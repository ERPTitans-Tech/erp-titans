import type { MetadataRoute } from "next";
import { getSite } from "@/lib/site";

// Each domain points crawlers at its own sitemap.
export default async function robots(): Promise<MetadataRoute.Robots> {
  const { base } = await getSite();
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
