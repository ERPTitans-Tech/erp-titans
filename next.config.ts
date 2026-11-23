import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Earlier URLs of the cannabis case study, kept working for old links and cached menus.
  async redirects() {
    return [
      // www.erptitans.com -> erptitans.com. erptitans.ca is a separate Canadian site (not redirected).
      { source: "/:path*", has: [{ type: "host", value: "www.erptitans.com" }], destination: "https://erptitans.com/:path*", permanent: true },
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
