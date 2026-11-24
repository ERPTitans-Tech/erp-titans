// Shared checks for the public contact and booking endpoints.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Trim, collapse line breaks (single-line fields end up in email subjects) and cap length. */
export function clean(v: unknown, max = 200, multiline = false): string {
  const s = typeof v === "string" ? v : "";
  const t = multiline ? s.replace(/\r\n/g, "\n") : s.replace(/[\r\n\t]+/g, " ");
  return t.trim().slice(0, max);
}

export function isEmail(v: string) {
  return v.length <= 254 && EMAIL_RE.test(v);
}

/** Bots fill the hidden "website" field; people never see it. */
export function isBot(body: Record<string, unknown>) {
  return typeof body.website === "string" && body.website.trim() !== "";
}
