// Office wording per region. Calgary leads everywhere; the .com (US) site also shows Austin.
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
          { country: "us", label: "Austin, Texas" },
        ] as OfficePlace[],
        footer: [
          { country: "ca", label: "Calgary, Alberta, Canada" },
          { country: "us", label: "Austin, Texas, USA" },
        ] as OfficePlace[],
        serving: null as string | null,
      };
}
