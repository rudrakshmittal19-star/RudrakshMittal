"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  slug: string;
  name: string;
  short: string;
  tags: string[];
  liveDemo: string | null;
  github: string;
  color: string;
};

export default function ProjectPanel({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const href = project.liveDemo || project.github;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group block border-t border-white/10 pt-5"
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-sm text-fg-ink-muted">{project.id}</span>
        <span
          className="h-1.5 w-1.5 rounded-full transition-transform duration-300 group-hover:scale-125"
          style={{ backgroundColor: project.color }}
        />
      </div>

      <h3 className="mt-3 font-display text-xl leading-snug text-fg-ink transition-colors duration-300 group-hover:text-white">
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-fg-ink-muted">
        {project.short}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-sm border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.06em] text-fg-ink-muted"
          >
            {t}
          </span>
        ))}
      </div>

      {project.liveDemo && (
        <span className="mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.08em] text-fg-ink-muted transition-colors group-hover:text-fg-ink">
          Live demo
          <ArrowUpRight size={11} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      )}
    </motion.a>
  );
}
