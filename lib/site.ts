// Two regional sites from one codebase:
//   https://erptitans.ca  -> Canadian site (en-CA)
//   https://erptitans.com -> US / international site (en-US, x-default)
// Each domain is canonical to itself and lists the other as an hreflang alternate,
// so Google treats them as regional versions rather than duplicates.

import { headers } from "next/headers";

export const CA_URL = "https://erptitans.ca";
export const COM_URL = "https://erptitans.com";

export type Site = { base: string; isCA: boolean; lang: "en-CA" | "en-US"; ogLocale: "en_CA" | "en_US" };

export async function getSite(): Promise<Site> {
  const h = await headers();
  const host = (h.get("x-forwarded-host") || h.get("host") || "").toLowerCase();
  const isCA = host.endsWith("erptitans.ca");
  return isCA
    ? { base: CA_URL, isCA: true, lang: "en-CA", ogLocale: "en_CA" }
    : { base: COM_URL, isCA: false, lang: "en-US", ogLocale: "en_US" };
}

/** Per-page alternates: self-referencing canonical (resolved against the current domain) + hreflang pair. */
export function alternatesFor(path: string) {
  const p = path === "/" ? "" : path;
  return {
    canonical: path,
    languages: {
      "en-CA": `${CA_URL}${p}`,
      "en-US": `${COM_URL}${p}`,
      "x-default": `${COM_URL}${p}`,
    },
  };
}
