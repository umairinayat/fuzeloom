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
          background: "#081730",
          color: "#F7F9FD",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: 22,
            letterSpacing: 4,
            color: "#9FC5FF",
          }}
        >
          AI engineering for the way you work
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, marginTop: 20, letterSpacing: -4 }}>
          Fuze<span style={{ color: "#9FC5FF" }}>Loom</span>
        </div>
        <div style={{ fontSize: 34, marginTop: 12, opacity: 0.9 }}>
          Make your systems work together.
        </div>
      </div>
    ),
    { ...size }
  );
}
