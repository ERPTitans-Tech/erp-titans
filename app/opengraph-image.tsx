import { ImageResponse } from "next/og";

// Default social-share image (LinkedIn, Facebook, X, Slack, iMessage previews).
export const alt = "ERP Titans | Official Odoo Ready Partner in Calgary, Canada & USA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #003D82 0%, #0A4FA3 60%, #1D6FD1 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, letterSpacing: 1 }}>ERP TITANS</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05 }}>Official Odoo Partner</div>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 800, lineHeight: 1.05, color: "#BFDBFE" }}>Calgary · Canada · USA</div>
          <div style={{ display: "flex", fontSize: 30, marginTop: 28, color: "#DBEAFE" }}>
            Odoo ERP implementation, migration, support & ERP recovery
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#BFDBFE" }}>erptitans.com</div>
      </div>
    ),
    size
  );
}
