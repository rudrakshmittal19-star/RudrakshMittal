"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { skillStreams } from "@/lib/data";

function StreamRow({
  items,
  direction,
  offset,
  tilt,
}: {
  items: string[];
  direction: "left" | "right";
  offset: ReturnType<typeof useSpring>;
  tilt: number;
}) {
  const doubled = [...items, ...items];
  const animClass = direction === "left" ? "stream-left" : "stream-right";

  return (
    <div className="stream-row overflow-hidden py-2" style={{ transform: `translateY(${tilt}px)` }}>
      <motion.div style={{ x: offset }} className={`flex w-max items-center gap-8 ${animClass}`}>
        {doubled.map((word, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-2xl text-fg-cream/60 sm:text-3xl md:text-4xl"
          >
            {word}
            <span className="h-1.5 w-1.5 rounded-full bg-accent-warm" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechStreams() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const raw = useMotionValue(0);
  const offset = useSpring(raw, { stiffness: 60, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    raw.set(relX * 24);
  }

  function handleMouseLeave() {
    raw.set(0);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-cream px-6 py-24 text-fg-cream md:px-12"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-wrap items-start justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
              04
            </span>
            <h2 className="mt-2 font-display text-4xl leading-[1.05] md:text-5xl">
              What
              <br />I Work With
            </h2>
          </div>
          <p className="max-w-xs text-sm text-fg-cream-muted">
            A constantly evolving toolkit to build, learn, and ship better.
          </p>
          <p className="text-right text-[11px] uppercase tracking-[0.1em] text-fg-cream-muted">
            Tools change.
            <br />
            Curiosity stays.
          </p>
        </div>

        <div>
          <StreamRow items={skillStreams.row1} direction="left" offset={offset} tilt={-6} />
          <StreamRow items={skillStreams.row2} direction="right" offset={offset} tilt={6} />
        </div>
      </div>
    </section>
  );
}
