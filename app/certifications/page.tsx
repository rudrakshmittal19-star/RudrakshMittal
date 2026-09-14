import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import RowEntry from "@/components/RowEntry";
import { certifications } from "@/lib/data";

export const metadata = {
  title: "Certifications — Rudraksh Mittal",
};

const LEFT_WORDS = ["Learn", "Build", "Contribute", "Grow"];
const RIGHT_WORDS = ["Courses", "Credentials", "Practice"];

const mid = Math.ceil(certifications.length / 2);
const colA = certifications.slice(0, mid);
const colB = certifications.slice(mid);

export default function CertificationsPage() {
  return (
    <>
      <Nav />
      <main className="grain relative bg-cream px-6 pt-28 text-fg-cream md:px-12">
        <div className="mx-auto max-w-[1400px]">
          {/* Intro */}
          <section className="grid gap-10 pb-12 lg:grid-cols-[240px_1fr_160px]">
            <div>
              <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
                Certifications
              </span>

              <div className="mt-16 hidden flex-col gap-1.5 text-xs uppercase tracking-[0.1em] text-fg-cream-muted/70 lg:flex">
                {LEFT_WORDS.map((w) => (
                  <span key={w}>{w}</span>
                ))}
              </div>
            </div>

            <div>
              <h1 className="font-display text-5xl leading-[1.05] text-fg-cream sm:text-6xl md:text-7xl">
                Still learning,
                <br />
                <span className="text-accent-deep">on purpose.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-cream-muted">
                Courses and credentials I&apos;ve picked up outside the classroom,
                mostly the things I needed to know to finish a project.
              </p>
            </div>

            <div className="hidden flex-col items-end gap-1.5 text-right text-xs uppercase tracking-[0.1em] text-fg-cream-muted/70 lg:flex">
              {RIGHT_WORDS.map((w) => (
                <span key={w}>{w}</span>
              ))}
              <span className="mt-1 h-px w-6 bg-fg-cream/20" />
            </div>
          </section>

          {/* Two-column certification archive */}
          <section className="grid gap-x-16 border-t border-cream-line pb-8 lg:grid-cols-2">
            <div className="pt-10 lg:pr-8">
              {colA.map((c, i) => (
                <RowEntry key={i} year={c.year} title={c.name} org={c.org} detail={c.detail} theme="light" />
              ))}
            </div>
            <div className="border-t border-cream-line pt-10 lg:border-l lg:border-t-0 lg:pl-16">
              {colB.map((c, i) => (
                <RowEntry key={i} year={c.year} title={c.name} org={c.org} detail={c.detail} theme="light" />
              ))}
            </div>
          </section>

          {/* Closing */}
          <section className="border-t border-cream-line py-8">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p className="font-display text-2xl italic text-fg-cream">Always something new.</p>
              <Link
                href="/about"
                className="group flex items-center gap-3 text-xs uppercase tracking-[0.1em] text-fg-cream-muted hover:text-fg-cream"
              >
                Next: About
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
