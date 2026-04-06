"use client";

interface VideoBackgroundProps {
  variant?: "hero" | "cta";
}

export function VideoBackground({ variant = "hero" }: VideoBackgroundProps) {
  const isHero = variant === "hero";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ contain: "strict" }}>
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-background/80 z-10" />

      {/* GPU-accelerated gradient orbs using pure CSS animations */}
      <div
        className="absolute rounded-full animate-float-slow"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.03) 40%, transparent 70%)",
          top: isHero ? "10%" : "20%",
          left: "20%",
          filter: "blur(40px)",
          opacity: 0.2,
          willChange: "transform",
        }}
      />

      <div
        className="absolute rounded-full animate-float-medium"
        style={{
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(200,200,220,0.03) 50%, transparent 70%)",
          top: isHero ? "30%" : "10%",
          right: "10%",
          filter: "blur(50px)",
          opacity: 0.15,
          willChange: "transform",
        }}
      />

      <div
        className="absolute rounded-full animate-float-fast"
        style={{
          width: 550,
          height: 550,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.03) 40%, transparent 70%)",
          bottom: isHero ? "0%" : "10%",
          left: "40%",
          filter: "blur(50px)",
          opacity: 0.1,
          willChange: "transform",
        }}
      />

      {/* Edge vignette for depth */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(9,9,11,0.8) 100%)",
        }}
      />

      {/* Top blue accent glow */}
      {isHero && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px] z-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)",
          }}
        />
      )}
    </div>
  );
}
