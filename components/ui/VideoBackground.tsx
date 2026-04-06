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
        className="absolute inset-0 w-full h-full object-cover opacity-80 blur-[4px] scale-105"
      >
        <source src="/videos/smoke-background.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/30 z-10" />

      {/* Edge vignette for depth */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Top blue accent glow for hero version */}
      {variant === "hero" && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-20 opacity-50"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
          }}
        />
      )}
    </div>
  );
}
