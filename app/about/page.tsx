import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import { about, education, experience } from "@/lib/data";

export const metadata = {
  title: "About — Rudraksh Mittal",
};

const PRINCIPLES = [
  {
    title: "Start with the mess.",
    body: "Most of what I build starts as something unstructured, a PDF, a settlement record, a symptom description. The interesting part is never the clean input, it's turning that mess into something a system can actually act on.",
  },
  {
    title: "Let rules do the easy work.",
    body: "On the Settlement Reconciliation Agent, deterministic rules handle most of the matching automatically. The reasoning layer only steps in for the genuinely ambiguous cases. I'd rather reserve judgment for where it's actually needed.",
  },
  {
    title: "Finish what deploys.",
    body: "A working prototype and a deployed system are different things. I try to get to the second one, auth, hosting, the boring parts, because that's usually where a project actually becomes useful to someone.",
  },
];

export default function AboutPage() {
  const mostRecentRole = experience[0];
  const graduatingYear = about.facts.find((f) => f.label === "Graduating")?.value ?? "soon";

  return (
    <>
      <Nav />
      <main className="text-fg-cream">
        {/* 01 — Introduction */}
        <section className="grain bg-stone-a px-6 pb-20 pt-32 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
              About
            </span>
            <h1 className="mt-4 font-display text-5xl leading-[1.05] text-fg-cream sm:text-6xl md:text-7xl">
              About me.
            </h1>
            <p className="mt-8 max-w-2xl font-display text-2xl leading-snug text-fg-cream sm:text-3xl">
              {about.statement}
            </p>
          </div>
        </section>

        {/* 02 — Who I am */}
        <section className="bg-cream px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[220px_1fr]">
            <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
              Who I am
            </span>
            <div>
              <p className="max-w-2xl text-lg leading-relaxed text-fg-cream">
                {about.body}
              </p>
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-cream-line pt-6">
                {about.facts.map((f) => (
                  <div key={f.label}>
                    <div className="text-xs uppercase tracking-[0.1em] text-fg-cream-muted">
                      {f.label}
                    </div>
                    <div className="mt-1 text-fg-cream">{f.value}</div>
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-xl text-sm text-fg-cream-muted">
                {education.university}, {education.degree} · {education.dates}
              </p>
            </div>
          </div>
        </section>

        {/* 03 — How I work */}
        <section className="bg-stone-c px-6 py-20 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
              How I work
            </span>
            <div className="mt-10 grid gap-12 lg:grid-cols-3">
              {PRINCIPLES.map((p) => (
                <div key={p.title}>
                  <h3 className="font-display text-2xl leading-snug text-fg-cream">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-fg-cream-muted">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — Beyond code */}
        <section className="bg-stone-d px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[220px_1fr]">
            <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
              Beyond code
            </span>
            <p className="max-w-2xl text-lg leading-relaxed text-fg-cream">
              I spend a fair amount of time outside a code editor too. I&apos;ve run
              media and coordination for university sports events as Sports
              Media Head, and worked my way from a volunteer to Program
              Coordinator at the Centre for Social Action, mostly outreach
              with schools and NGOs. I also play basketball and foosball
              competitively enough to have won a couple of the department
              tournaments, which matters less than the internships, but it&apos;s
              part of the same habit of showing up and trying to get better.
            </p>
          </div>
        </section>

        {/* 05 — Currently */}
        <section className="bg-cream px-6 py-20 md:px-12">
          <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[220px_1fr]">
            <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
              Currently
            </span>
            <p className="max-w-2xl text-lg leading-relaxed text-fg-cream">
              I&apos;m in my final year at {education.university.split(",")[0]},
              wrapping up an {mostRecentRole.title} at {mostRecentRole.org}{" "}
              and finishing a couple of side projects. I&apos;m graduating in{" "}
              {graduatingYear}, and open to software engineering, data
              engineering, or applied AI roles from there.
            </p>
          </div>
        </section>

        {/* 06 — Closing */}
        <section className="grain bg-stone-a px-6 py-20 md:px-12">
          <div className="mx-auto max-w-[1400px]">
            <p className="max-w-xl font-display text-2xl italic leading-snug text-fg-cream sm:text-3xl">
              The projects say it better than I can.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/projects"
                className="group flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-fg-cream hover:text-accent-deep"
              >
                See the work
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="group flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-fg-cream-muted hover:text-fg-cream"
              >
                Or just say hello
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
