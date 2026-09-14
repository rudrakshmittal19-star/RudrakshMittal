"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { gsap, useGSAP } from "@/lib/gsap";
import { timeline } from "@/lib/data";

export default function TimelineArchive() {
  const reduce = useReducedMotion();
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (reduce || !lineRef.current || !sectionRef.current) return;
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      }
    );
  }, [reduce]);

  return (
    <section ref={sectionRef} className="grain bg-ink px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_2fr_0.4fr]">
          <div>
            <span className="text-xs uppercase tracking-[0.14em] text-fg-ink-muted">
              05
            </span>
            <h2 className="mt-3 font-display text-3xl leading-[1.15] text-fg-ink sm:text-4xl">
              Experience
              <br />& Recognition
            </h2>
            <p className="mt-4 max-w-[14rem] text-xs uppercase leading-relaxed tracking-[0.08em] text-fg-ink-muted">
              A journey of learning, building, and contributing.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <Link
                href="/experience"
                className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-fg-ink-muted hover:text-fg-ink"
              >
                View full timeline
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/achievements"
                className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-fg-ink-muted hover:text-fg-ink"
              >
                Achievements &amp; leadership
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/certifications"
                className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-fg-ink-muted hover:text-fg-ink"
              >
                Certifications
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-3 h-px bg-ink-line" />
            <div
              ref={lineRef}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 right-0 top-3 h-px origin-left bg-accent"
            />

            <div className="grid gap-8 pt-10 sm:grid-cols-2 lg:grid-cols-4">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative border-t border-ink-line pt-5"
                >
                  <span className="absolute -top-[42px] left-0 h-2.5 w-2.5 rounded-full bg-accent" />
                  <span className="text-[10px] uppercase tracking-[0.08em] text-fg-ink-muted/70">
                    {item.type === "achievement" ? "Achievement" : "Experience"}
                  </span>
                  <div className="mt-2 font-display text-2xl text-fg-ink">{item.year}</div>
                  <div className="mt-1 text-sm text-fg-ink">{item.title}</div>
                  <div className="mt-0.5 text-[11px] uppercase tracking-[0.06em] text-fg-ink-muted">
                    {item.subtitle}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden flex-col items-end gap-1 text-right text-[11px] uppercase tracking-[0.1em] text-fg-ink-muted lg:flex">
            <span>People</span>
            <span>Projects</span>
            <span>Experiences</span>
            <span>A better me</span>
          </div>
        </div>
      </div>
    </section>
  );
}
