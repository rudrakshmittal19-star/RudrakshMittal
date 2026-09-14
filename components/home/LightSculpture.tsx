"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * A large abstract folded-form sculpture, built entirely from layered SVG
 * fills, blur and gradients. No strokes, no lines, no network/orbital motifs,
 * intentionally sized to bleed past the right edge of its container (SVG
 * clips to its viewBox by default, so shapes drawn past x=640 crop naturally).
 */
export default function LightSculpture({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 40, damping: 18 });
  const y = useSpring(rawY, { stiffness: 40, damping: 18 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(relX * 14);
    rawY.set(relY * 10);
  }

  function handleMouseLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        style={{ x, y }}
        className={reduce ? "" : "animate-[sculpture-float_10s_ease-in-out_infinite]"}
      >
        <svg
          viewBox="0 0 640 900"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="facetA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#EFEDE7" stopOpacity="0.92" />
              <stop offset="55%" stopColor="#9CA6AE" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#3A3D42" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="facetB" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4A5158" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#1C1E21" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#0A0A0B" stopOpacity="0.95" />
            </linearGradient>
            <radialGradient id="glow" cx="35%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#A9BEDD" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#A9BEDD" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="highlight" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="reflFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>
            <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="26" />
            </filter>
            <filter id="mediumBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="10" />
            </filter>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="34" />
            </filter>
            <mask id="reflMask">
              <rect x="0" y="0" width="640" height="900" fill="url(#reflFade)" />
            </mask>
          </defs>

          {/* Floor shadow */}
          <ellipse cx="360" cy="770" rx="220" ry="46" fill="#000000" opacity="0.55" filter="url(#softShadow)" />

          {/* Floor reflection: flipped, faded, blurred */}
          <g opacity="0.5" mask="url(#reflMask)" filter="url(#mediumBlur)">
            <g transform="translate(0, 1480) scale(1, -1)">
              <path
                d="M300,40 C420,60 560,140 560,260 C560,380 440,480 340,520 C220,560 80,480 80,300 C80,140 180,40 300,40 Z"
                fill="url(#facetA)"
              />
              <path
                d="M380,260 C540,280 700,400 680,560 C660,720 500,820 340,800 C210,782 120,660 160,520 C200,380 280,240 380,260 Z"
                fill="url(#facetB)"
              />
            </g>
          </g>

          {/* Ambient rim glow, sits behind the form */}
          <ellipse cx="330" cy="380" rx="300" ry="320" fill="url(#glow)" filter="url(#softBlur)" />

          {/* Back facet (darker, larger, cropped off the right edge) */}
          <path
            d="M380,260 C540,280 700,400 680,560 C660,720 500,820 340,800 C210,782 120,660 160,520 C200,380 280,240 380,260 Z"
            fill="url(#facetB)"
          />

          {/* Front facet (lighter, catches the light) */}
          <path
            d="M300,40 C420,60 560,140 560,260 C560,380 440,480 340,520 C220,560 80,480 80,300 C80,140 180,40 300,40 Z"
            fill="url(#facetA)"
          />

          {/* Specular highlight along the fold seam */}
          <path
            d="M220,260 C300,300 380,340 460,420 L 500,470 C 400,410 300,360 200,320 Z"
            fill="url(#highlight)"
            filter="url(#mediumBlur)"
          />
        </svg>
      </motion.div>
    </div>
  );
}
