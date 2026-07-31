import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://erptitans.com";

  const routes = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/odoo", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/case-studies", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/industries/manufacturing", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries/distribution", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/industries/cannabis", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/odoo-implementation-alberta", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/erp-consulting-british-columbia", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/odoo-partner-texas", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/odoo-partner-california", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
