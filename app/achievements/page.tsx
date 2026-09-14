import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import RowEntry from "@/components/RowEntry";
import { achievements, leadership } from "@/lib/data";

export const metadata = {
  title: "Achievements — Rudraksh Mittal",
};

const LEFT_WORDS = ["Learn", "Build", "Contribute", "Grow"];
const RIGHT_WORDS = ["Discipline", "Curiosity", "Impact", "Always", "Learning"];

export default function AchievementsPage() {
  return (
    <>
      <Nav />
      <main className="grain relative bg-warm-ivory px-6 pt-28 text-charcoal md:px-12">
        <div className="mx-auto max-w-[1400px]">
          {/* Intro */}
          <section className="grid gap-10 pb-12 lg:grid-cols-[240px_1fr_160px]">
            <div>
              <span className="text-xs uppercase tracking-[0.14em] text-charcoal-2">
                Achievements
              </span>

              <div className="mt-16 hidden flex-col gap-1.5 text-xs uppercase tracking-[0.1em] text-charcoal-2/70 lg:flex">
                {LEFT_WORDS.map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-display text-5xl leading-[1.05] text-charcoal sm:text-6xl md:text-7xl">
                Progress
                <br />
                in different <span className="text-muted-blue">forms.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal-2">
                Competitions, recognition, and the work I&apos;ve done beyond
                academics, the things that have shaped how I show up.
              </p>
            </div>

            <div className="hidden flex-col items-end gap-1.5 text-right text-xs uppercase tracking-[0.1em] text-charcoal-2/70 lg:flex">
              {RIGHT_WORDS.map((w) => (
                <span key={w}>{w}</span>
              ))}
              <span className="mt-1 h-px w-6 bg-warm-grey" />
            </div>
          </section>

          {/* Left / Right: Achievements + Leadership */}
          <section className="grid gap-x-16 border-t border-warm-grey pb-8 lg:grid-cols-2">
            <div className="pt-10 lg:pr-8">
              <h2 className="font-display text-2xl text-charcoal">Achievements</h2>
              <div className="mt-6">
                {achievements.map((a, i) => (
                  <RowEntry key={i} year={a.year} title={a.title} org={a.org} detail={a.detail} theme="light" />
                ))}
              </div>
            </div>

            <div className="border-t border-warm-grey pt-10 lg:border-l lg:border-t-0 lg:pl-16">
              <h2 className="font-display text-2xl text-charcoal">Leadership</h2>
              <div className="mt-6">
                {leadership.map((l, i) => (
                  <RowEntry key={i} year={l.year} title={l.title} org={l.org} detail={l.detail} theme="light" />
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Closing — distinct tonal bookend */}
        <section className="border-t border-warm-grey bg-stone px-6 py-8 md:px-12">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="font-display text-2xl italic text-charcoal">More to come.</p>
            <Link
              href="/certifications"
              className="group flex items-center gap-3 text-xs uppercase tracking-[0.1em] text-charcoal-2 hover:text-charcoal"
            >
              Next: Certifications
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
