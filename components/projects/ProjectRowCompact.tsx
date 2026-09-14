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

export default function ProjectRowCompact({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const { color } = project;

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="row border-t border-white/10 py-6 last:border-b"
    >
      <div className="flex items-start gap-3">
        <span className="mt-1 font-mono text-xs text-fg-ink-muted">{project.id}</span>
        <span className="swatch mt-1.5 h-2 w-2 shrink-0 rounded-full" />
        <div className="flex-1">
          <h3 className="proj-name font-display text-lg leading-tight text-fg-ink transition-colors duration-300">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-fg-ink-muted">
            {project.short}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 3).map((t) => (
              <span
                key={t}
                className="tag rounded-sm border px-2 py-0.5 text-[10px] uppercase tracking-[0.06em] text-fg-ink-muted transition-colors duration-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-3 flex items-center gap-4 text-xs uppercase tracking-[0.08em] text-fg-ink-muted">
            <span>{project.year}</span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-fg-ink"
            >
              <GithubIcon width={12} height={12} />
              Code
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="live-link group/link flex items-center gap-1.5 transition-colors duration-300"
              >
                Live
                <ArrowUpRight size={11} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .swatch {
          background-color: ${color};
        }
        .tag {
          border-color: ${hexToRgba(color, 0.28)};
        }
        .live-link {
          color: ${color};
        }
        .row:hover .proj-name {
          color: ${mix(color, "white", 0.35)};
        }
        .row:hover .tag {
          border-color: ${hexToRgba(color, 0.6)};
        }
      `}</style>
    </motion.div>
  );
}
