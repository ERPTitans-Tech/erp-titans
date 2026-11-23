import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Earlier URLs of the cannabis case study, kept working for old links and cached menus.
  async redirects() {
    return [
      // One canonical address: send www and the .ca domain to https://erptitans.com (301),
      // so Google consolidates all ranking signals on a single site.
      { source: "/:path*", has: [{ type: "host", value: "www.erptitans.com" }], destination: "https://erptitans.com/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "erptitans.ca" }], destination: "https://erptitans.com/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "www.erptitans.ca" }], destination: "https://erptitans.com/:path*", permanent: true },
      { source: "/case-studies/laniakea-brands", destination: "/case-studies/top-tier-cannabis-brand", permanent: true },
      { source: "/case-studies/multi-brand-cannabis-producer", destination: "/case-studies/top-tier-cannabis-brand", permanent: true },
    ];
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
