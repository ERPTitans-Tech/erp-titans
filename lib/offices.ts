// Office wording per region. The .ca site leads with Calgary; the .com site shows both offices.
export function officesFor(isCA: boolean) {
  return isCA
    ? { short: "Calgary, Alberta", footer: ["Calgary, Alberta, Canada"], serving: "Serving Canada & USA" }
    : { short: "Calgary, Alberta · Austin, Texas", footer: ["Calgary, Alberta, Canada", "Austin, Texas, USA"], serving: "Serving the USA & Canada" };
}
