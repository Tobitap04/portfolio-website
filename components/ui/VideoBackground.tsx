"use client";

interface VideoBackgroundProps {
  variant?: "hero" | "cta";
}

export function VideoBackground({ variant = "hero" }: VideoBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover blur-[4px] opacity-80 scale-105 mix-blend-screen"
      >
        <source src="/videos/smoke-background.webm" type="video/webm" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/50 z-10" />

      {/* Edge vignette for depth */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(2,4,8,0.95) 100%)",
        }}
      />

      {/* Top cyan accent glow for hero version */}
      {variant === "hero" && (
        <div
          className="absolute top-0 left-0 right-0 h-[3px] z-20 opacity-50"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,0.5), transparent)",
          }}
        />
      )}
    </div>
  );
}
