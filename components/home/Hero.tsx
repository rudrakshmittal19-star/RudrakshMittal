"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import LightSculpture from "./LightSculpture";
import { profile } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const sceneRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (reduce || !sceneRef.current) return;
    gsap.to(sceneRef.current, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: sceneRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [reduce]);

  return (
    <section className="grain relative flex min-h-screen flex-col bg-ink px-6 pb-6 pt-28 md:px-12">
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="flex flex-col gap-1 border-l border-white/15 pl-3 text-[11px] uppercase tracking-[0.18em] text-fg-ink-muted"
      >
        {profile.eyebrow.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </motion.div>

      <div className="relative mt-8 grid flex-1 gap-8 lg:grid-cols-[1.05fr_1fr]">
        {/* Left column: all identity content lives here, stacked */}
        <div className="relative z-10 flex flex-col justify-center lg:-mt-14">
          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="font-display text-2xl italic text-fg-ink-muted"
          >
            Hi, I&apos;m
          </motion.p>

          <h1 className="mt-1 font-display text-[15vw] leading-[0.95] sm:text-7xl md:text-8xl">
            <span className="block overflow-hidden">
              <motion.span
                initial={reduce ? { y: 0 } : { y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                className="block text-fg-ink"
              >
                {profile.firstName}
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                initial={reduce ? { y: 0 } : { y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.32, ease: EASE }}
                className="block text-accent"
              >
                {profile.lastName}
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
            className="mt-6 max-w-xs text-xs uppercase leading-relaxed tracking-[0.08em] text-fg-ink-muted"
          >
            {profile.heroStatement}
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
            className="mt-7"
          >
            <a
              href="#selected-work"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-fg-ink"
            >
              Explore my work
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="mt-4 text-[11px] uppercase tracking-[0.1em] text-fg-ink-muted/70">
              Based in {profile.location}
            </p>
          </motion.div>
        </div>

        {/* Right column: the scene, with fine annotations around it */}
        <div className="relative flex flex-col border-l border-white/10 pl-6 lg:pl-10">
          <div className="flex items-start justify-end pb-3 text-[10px] uppercase tracking-[0.14em] text-fg-ink-muted">
            <div className="flex flex-col items-center gap-1">
              <span>01</span>
              <span className="h-3 w-px bg-white/20" />
              <span>06</span>
            </div>
          </div>

          <div
            ref={sceneRef}
            className="relative h-[40vh] flex-1 overflow-hidden rounded-sm lg:h-auto"
          >
            <LightSculpture className="h-full w-full" />
          </div>

          <div className="mt-4 flex items-start justify-between gap-6">
            <motion.div
              initial={reduce ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-fg-ink-muted"
            >
              Scroll
              <motion.span
                animate={reduce ? {} : { y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-5 w-5 items-center justify-center rounded-full border border-white/25"
              >
                ⌄
              </motion.span>
            </motion.div>

            <p className="max-w-[10rem] text-right text-[10px] uppercase leading-relaxed tracking-[0.1em] text-fg-ink-muted">
              &ldquo;Built to be trusted, not just deployed.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
