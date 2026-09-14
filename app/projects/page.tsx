import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import ProjectRow from "@/components/projects/ProjectRow";
import ProjectRowCompact from "@/components/projects/ProjectRowCompact";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects — Rudraksh Mittal",
};

const primary = projects.slice(0, 4);
const rest = projects.slice(4);
const mid = Math.ceil(rest.length / 2);
const colA = rest.slice(0, mid);
const colB = rest.slice(mid);

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="grain bg-ink pt-28 text-fg-ink">
        {/* Intro */}
        <section className="px-6 pb-16 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <div className="flex items-start justify-between">
              <span className="text-xs uppercase tracking-[0.14em] text-fg-ink-muted">
                Projects
              </span>
              <div className="text-right">
                <span className="font-display text-xl text-fg-ink">
                  {String(projects.length).padStart(2, "0")}
                </span>
                <div className="text-xs uppercase tracking-[0.1em] text-fg-ink-muted">
                  Projects
                </div>
              </div>
            </div>

            <div className="mt-4 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
              <h1 className="font-display text-5xl leading-[1.02] sm:text-6xl md:text-7xl">
                Things I&apos;ve
                <br />
                <span className="text-accent">built.</span>
              </h1>

              <div className="flex flex-col justify-end gap-4">
                <p className="max-w-sm text-base leading-relaxed text-fg-ink-muted">
                  A collection of projects at the intersection of AI, software,
                  and real world problems. Each one is a step toward building
                  systems that hold up.
                </p>
                <p className="text-xs uppercase leading-relaxed tracking-[0.1em] text-fg-ink-muted/70">
                  Real problems. Thoughtful systems. Tangible impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Primary archive: full-width rows, one consistent system */}
        <section className="px-6 md:px-12">
          <div className="mx-auto max-w-[1400px] lg:pl-6">
            {primary.map((p) => (
              <ProjectRow key={p.slug} project={p} />
            ))}
          </div>
        </section>

        {/* Secondary archive: compact 2-column editorial layout */}
        <section className="border-t border-white/10 px-6 py-12 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <span className="text-xs uppercase tracking-[0.14em] text-fg-ink-muted">
              More work
            </span>
            <div className="mt-6 grid gap-x-16 lg:grid-cols-2">
              <div>
                {colA.map((p) => (
                  <ProjectRowCompact key={p.slug} project={p} />
                ))}
              </div>
              <div>
                {colB.map((p) => (
                  <ProjectRowCompact key={p.slug} project={p} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="border-t border-white/10 px-6 py-12 md:px-12">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl italic text-fg-ink">More to come.</p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-fg-ink-muted">
                Same curiosity. Bigger problems.
              </p>
            </div>
            <Link
              href="/experience"
              className="group flex items-center gap-3 text-xs uppercase tracking-[0.1em] text-fg-ink-muted hover:text-fg-ink"
            >
              Next: Experience
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
