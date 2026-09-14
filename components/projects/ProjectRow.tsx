"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { hexToRgba, mix } from "@/lib/color";

type Project = {
  id: string;
  name: string;
  short: string;
  tags: string[];
  year: string;
  github: string;
  liveDemo: string | null;
  color: string;
};

export default function ProjectRow({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const { color } = project;

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="row relative grid gap-5 border-t border-white/10 py-8 last:border-b lg:grid-cols-[56px_1.7fr_1fr_auto] lg:items-center"
    >
      <span className="accent-bar absolute -left-6 top-0 hidden h-full w-px opacity-30 transition-opacity duration-300 lg:block" />

      <span className="font-display text-lg text-fg-ink-muted">{project.id}</span>

      <div className="flex items-start gap-4">
        <div className="swatch mt-0.5 h-12 w-12 shrink-0 rounded-sm" />
        <div>
          <h3 className="proj-name font-display text-2xl leading-tight text-fg-ink transition-colors duration-300">
            {project.name}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-fg-ink-muted">
            {project.short}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 lg:justify-self-start">
        {project.tags.map((t) => (
          <span
            key={t}
            className="tag rounded-sm border px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-fg-ink-muted transition-colors duration-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5 text-xs uppercase tracking-[0.08em] text-fg-ink-muted lg:justify-self-end">
        <span>{project.year}</span>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-fg-ink"
        >
          <GithubIcon width={13} height={13} />
          Code
        </a>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="live-link group/link flex items-center gap-1.5 transition-colors duration-300"
          >
            Live demo
            <ArrowUpRight
              size={13}
              className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            />
          </a>
        )}
      </div>

      <style jsx>{`
        .swatch {
          background: linear-gradient(
            135deg,
            ${mix(color, "white", 0.28)} 0%,
            ${color} 55%,
            ${mix(color, "black", 0.4)} 100%
          );
        }
        .tag {
          border-color: ${hexToRgba(color, 0.28)};
        }
        .live-link {
          color: ${color};
        }
        .accent-bar {
          background-color: ${color};
        }
        .row:hover {
          background-color: ${hexToRgba(color, 0.045)};
        }
        .row:hover .accent-bar {
          opacity: 1;
        }
        .row:hover .proj-name {
          color: ${mix(color, "white", 0.35)};
        }
        .row:hover .tag {
          border-color: ${hexToRgba(color, 0.6)};
          color: ${mix(color, "white", 0.3)};
        }
        .row:hover .live-link {
          color: ${mix(color, "white", 0.25)};
        }
      `}</style>
    </motion.div>
  );
}
