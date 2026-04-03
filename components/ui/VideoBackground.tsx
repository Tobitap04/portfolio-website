"use client";

import { motion } from "framer-motion";

interface VideoBackgroundProps {
  variant?: "hero" | "cta";
}

export function VideoBackground({ variant = "hero" }: VideoBackgroundProps) {
  const isHero = variant === "hero";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base dark overlay */}
      <div className="absolute inset-0 bg-background/80 z-10" />

      {/* Animated gradient orbs — smoky effect */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)",
          top: isHero ? "10%" : "20%",
          left: "20%",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -60, 40, 20, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.12) 0%, rgba(200,200,220,0.05) 50%, transparent 70%)",
          top: isHero ? "30%" : "10%",
          right: "10%",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, -70, 50, -30, 0],
          y: [0, 50, -30, 60, 0],
          scale: [1, 1.15, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
          bottom: isHero ? "0%" : "10%",
          left: "40%",
          filter: "blur(120px)",
        }}
        animate={{
          x: [0, 40, -60, 30, 0],
          y: [0, -80, 20, 60, 0],
          scale: [1, 1.2, 0.85, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle sweep light */}
      <motion.div
        className="absolute w-[300px] h-[800px] opacity-5"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          top: "0%",
          left: "-10%",
          transform: "rotate(15deg)",
          filter: "blur(40px)",
        }}
        animate={{
          x: ["-10%", "120%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
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
