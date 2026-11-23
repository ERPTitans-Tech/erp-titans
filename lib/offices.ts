// Location wording per region. Calgary (Canada) leads everywhere; the .com site also signals US presence
// by country only. Never name a US city or "office" here.
export type OfficePlace = { country: "ca" | "us"; label: string };

export function officesFor(isCA: boolean) {
  return isCA
    ? {
        pill: [{ country: "ca", label: "Calgary, Alberta" }] as OfficePlace[],
        footer: [{ country: "ca", label: "Calgary, Alberta, Canada" }] as OfficePlace[],
        serving: "Serving Canada & USA" as string | null,
      }
    : {
        pill: [
          { country: "ca", label: "Calgary, Canada" },
          { country: "us", label: "United States" },
        ] as OfficePlace[],
        footer: [
          { country: "ca", label: "Calgary, Alberta, Canada" },
          { country: "us", label: "United States" },
        ] as OfficePlace[],
        serving: null as string | null,
      };
}
