import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6, #10b981)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            fontWeight: 700,
            color: "white",
          }}
        >
          W
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <p
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              margin: 0,
            }}
          >
            Wira
          </p>
          <p
            style={{
              fontSize: 28,
              color: "#a5b4fc",
              margin: 0,
            }}
          >
            Full Stack Developer
          </p>
        </div>
        <p
          style={{
            fontSize: 20,
            color: "#71717a",
            margin: 0,
            maxWidth: 500,
            textAlign: "center",
          }}
        >
          Personal portfolio showcasing skills, projects, and experience.
        </p>
      </div>
    </div>,
    {
      ...size,
    }
  );
}
