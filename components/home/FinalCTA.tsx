"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { profile } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function FinalCTA() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="bg-cream px-6 py-24 text-fg-cream md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
          06
        </span>

        <motion.h2
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-4 max-w-xl font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl"
        >
          Have something worth building?
        </motion.h2>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
          className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 font-display text-2xl italic"
          >
            Let&apos;s talk.
            <span className="inline-block transition-transform group-hover:translate-x-1.5">
              →
            </span>
          </Link>
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-cream-line pt-6 text-sm uppercase tracking-[0.08em] text-fg-cream-muted"
        >
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
        </motion.div>

        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.28, ease: EASE }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className="group flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-fg-cream hover:text-accent"
          >
            Send a message
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Minimal integrated footer */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream-line pt-6 sm:flex-row sm:items-center">
          <div>
            <span className="font-display text-base text-fg-cream">RM</span>
            <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-fg-cream-muted">
              {profile.name} © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
