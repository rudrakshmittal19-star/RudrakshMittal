"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AbstractPanel from "./AbstractPanel";
import { about } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function QuickIntro() {
  const reduce = useReducedMotion();

  return (
    <section className="relative bg-cream px-6 py-24 text-fg-cream md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <span className="text-xs uppercase tracking-[0.14em] text-fg-cream-muted">
          02
          <br />
          About me
        </span>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.6fr]">
          <motion.h2
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="font-display text-4xl leading-[1.1] sm:text-5xl"
          >
            {about.statement}
          </motion.h2>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="flex flex-col justify-between"
          >
            <p className="max-w-sm text-base leading-relaxed text-fg-cream-muted">
              {about.body}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-cream-line pt-5">
              {about.facts.map((f) => (
                <div key={f.label}>
                  <div className="text-fg-cream">{f.value}</div>
                  <div className="text-xs uppercase tracking-[0.1em] text-fg-cream-muted">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group mt-8 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.1em] text-fg-cream-muted hover:text-fg-cream"
            >
              More about me
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="relative hidden aspect-[3/4] overflow-hidden rounded-sm lg:block"
          >
            <AbstractPanel />
            <span className="absolute right-3 top-3 font-script text-lg text-white/80">
              good ideas,
              <br />
              real impact
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
