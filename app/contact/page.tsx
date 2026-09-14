import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/Nav";
import ContactForm from "@/components/home/ContactForm";
import { profile } from "@/lib/data";

export const metadata = {
  title: "Contact — Rudraksh Mittal",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-cream px-6 pb-20 pt-32 text-fg-cream md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
            Contact
          </span>

          <h1 className="mt-4 max-w-xl font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
            Have something worth building?
          </h1>

          <div className="mt-8">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 font-display text-2xl italic"
            >
              Let&apos;s talk.
              <span className="inline-block transition-transform group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-cream-line pt-6 text-sm uppercase tracking-[0.08em] text-fg-cream-muted">
            <a href={`mailto:${profile.email}`} className="hover:text-fg-cream">
              Email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-fg-cream">
              LinkedIn <ArrowUpRight size={12} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-fg-cream">
              GitHub <ArrowUpRight size={12} />
            </a>
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-fg-cream">
              Resume
            </a>
          </div>

          <div className="mt-16 max-w-xl">
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
