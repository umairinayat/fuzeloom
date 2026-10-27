import { ImageResponse } from "next/og";

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
          justifyContent: "center",
          padding: "80px",
          background: "#1E2A5A",
          color: "#FAF8F4",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontSize: 22,
            letterSpacing: 4,
            color: "#F2A33A",
          }}
        >
          AI · SOFTWARE · INTEGRATION
        </div>
        <div style={{ fontSize: 72, fontWeight: 600, marginTop: 20 }}>
          FuzeLoom
        </div>
        <div style={{ fontSize: 34, marginTop: 12, opacity: 0.9 }}>
          AI, woven into how you work.
        </div>
      </div>
    ),
    { ...size }
  );
}
