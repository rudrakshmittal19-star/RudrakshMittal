"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectPanel from "./ProjectPanel";
import { projects } from "@/lib/data";

const featured = projects.slice(0, 3);

export default function SelectedWork() {
  const reduce = useReducedMotion();

  return (
    <section id="selected-work" className="grain bg-ink px-6 py-24 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_2fr_0.4fr]">
          {/* Left: label + heading + CTA */}
          <div>
            <span className="text-xs uppercase tracking-[0.14em] text-fg-ink-muted">
              03
              <br />
              Selected work
            </span>
            <motion.h2
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 font-display text-3xl leading-[1.15] sm:text-4xl"
            >
              <span className="text-accent">Projects</span>
              <br />
              <span className="text-fg-ink">I&apos;m proud of.</span>
            </motion.h2>
            <Link
              href="/projects"
              className="group mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-fg-ink-muted hover:text-fg-ink"
            >
              View all projects
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Middle: row of three project panels */}
          <div className="grid gap-6 sm:grid-cols-3">
            {featured.map((p) => (
              <ProjectPanel key={p.slug} project={p} />
            ))}
          </div>

          {/* Right: small vertical tagline */}
          <div className="flex items-start justify-between gap-3 lg:flex-col lg:items-end lg:justify-start lg:text-right">
            <ArrowRight size={16} className="text-fg-ink-muted" />
            <p className="max-w-[8rem] text-[11px] uppercase leading-relaxed tracking-[0.1em] text-fg-ink-muted">
              Solving problems one build at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
