import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import ExperienceList from "@/components/experience/ExperienceList";
import { experience } from "@/lib/data";

export const metadata = {
  title: "Experience — Rudraksh Mittal",
};

const LEFT_WORDS = ["Learn", "Build", "Contribute", "Grow"];
const RIGHT_WORDS = ["Real", "Work", "Real", "Learning"];

export default function ExperiencePage() {
  return (
    <>
      <Nav />
      <main className="grain relative bg-warm-ivory px-6 pt-28 text-charcoal md:px-12">
        <div className="mx-auto max-w-[1400px]">
          {/* Intro */}
          <section className="grid gap-10 pb-12 lg:grid-cols-[240px_1fr_160px]">
            <div>
              <span className="text-xs uppercase tracking-[0.14em] text-charcoal-2">
                Experience
              </span>

              <div className="mt-16 hidden flex-col gap-1.5 text-xs uppercase tracking-[0.1em] text-charcoal-2/70 lg:flex">
                {LEFT_WORDS.map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-display text-5xl leading-[1.05] text-charcoal sm:text-6xl md:text-7xl">
                Experience that
                <br />
                builds <span className="text-muted-blue">perspective.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal-2">
                Four internships and a good deal of trial and error, each one
                changing a little how I think about building software,
                working with AI, and understanding how a business actually
                grows.
              </p>
            </div>

            <div className="hidden flex-col items-end gap-1.5 text-right text-xs uppercase tracking-[0.1em] text-charcoal-2/70 lg:flex">
              {RIGHT_WORDS.map((w, i) => (
                <span key={i}>{w}</span>
              ))}
              <span className="mt-1 h-px w-6 bg-warm-grey" />
            </div>
          </section>

          {/* Grid */}
          <section className="pb-8">
            <ExperienceList jobs={experience} />
          </section>
        </div>

        {/* Closing — a distinct tonal bookend */}
        <section className="border-t border-warm-grey bg-stone px-6 py-8 md:px-12">
          <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="font-display text-2xl italic text-charcoal">
              The work continues.
            </p>
            <Link
              href="/achievements"
              className="group flex items-center gap-3 text-xs uppercase tracking-[0.1em] text-charcoal-2 hover:text-charcoal"
            >
              Next: Achievements
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
