"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Job = {
  id: string;
  org: string;
  logo: string;
  location: string;
  title: string;
  dates: string;
  summary: string;
  tags: string[];
};

const BORDER_CLASSES = [
  "border-warm-grey border-b lg:border-r", // top-left
  "border-warm-grey border-b", // top-right
  "border-warm-grey border-b lg:border-b-0 lg:border-r", // bottom-left
  "", // bottom-right
];

export default function ExperienceCell({ job, index }: { job: Job; index: number }) {
  const reduce = useReducedMotion();
  const year = job.dates.trim().split(" ").pop();

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className={`p-8 lg:p-10 ${BORDER_CLASSES[index] || ""}`}
    >
      <span className="font-display text-4xl leading-none text-charcoal">{year}</span>
      <div className="mt-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] text-charcoal-2">
        {job.id}
        <span className="h-px w-6 bg-warm-grey" />
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl leading-tight text-charcoal sm:text-[1.7rem]">
          {job.org}
        </h3>
        <div className="relative mt-0.5 h-9 w-32 shrink-0 sm:h-11 sm:w-40">
          <Image
            src={job.logo}
            alt={`${job.org} logo`}
            fill
            className="object-contain object-right"
          />
        </div>
      </div>

      <p className="mt-1 text-muted-blue">{job.title}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-charcoal-2">
        {job.location} · {job.dates}
      </p>

      <p className="mt-5 max-w-md text-sm leading-relaxed text-charcoal-2">
        {job.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {job.tags.map((t) => (
          <span
            key={t}
            className="rounded-sm border border-warm-grey px-2 py-0.5 text-[10px] uppercase tracking-[0.06em] text-charcoal-2"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
