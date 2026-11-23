// TEMPORARY diagnostic: shows which domain the server sees for a request. Remove after use.
export const dynamic = "force-dynamic";

export function GET(req: Request) {
  const keys = ["host", "x-forwarded-host", "x-forwarded-proto", "x-original-host", "x-real-host", "cf-ray"];
  const out: Record<string, string | null> = { url: req.url };
  for (const k of keys) out[k] = req.headers.get(k);
  return Response.json(out, { headers: { "cache-control": "no-store" } });
}
