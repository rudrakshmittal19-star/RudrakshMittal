"use client";

import { motion, useReducedMotion } from "framer-motion";

type Theme = "dark" | "light";

const THEME_CLASSES: Record<Theme, { border: string; year: string; title: string; org: string; detail: string; dash: string }> = {
  dark: {
    border: "border-white/10",
    year: "text-fg-ink",
    title: "text-fg-ink",
    org: "text-accent",
    detail: "text-fg-ink-muted",
    dash: "bg-white/20",
  },
  light: {
    border: "border-cream-line",
    year: "text-fg-cream",
    title: "text-fg-cream",
    org: "text-accent-deep",
    detail: "text-fg-cream-muted",
    dash: "bg-fg-cream/20",
  },
};

export default function RowEntry({
  year,
  title,
  org,
  detail,
  theme = "dark",
}: {
  year: string;
  title: string;
  org: string;
  detail: string;
  theme?: Theme;
}) {
  const reduce = useReducedMotion();
  const c = THEME_CLASSES[theme];

  return (
    <motion.div
      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-[52px_1fr] gap-4 border-t ${c.border} py-4 first:border-t-0`}
    >
      <div>
        <span className={`font-display text-lg ${c.year}`}>{year}</span>
        <div className={`mt-1 h-px w-4 ${c.dash}`} />
      </div>
      <div>
        <h4 className={`text-[15px] ${c.title}`}>{title}</h4>
        <p className={`mt-0.5 ${c.org}`}>{org}</p>
        <p className={`mt-0.5 text-xs ${c.detail}`}>{detail}</p>
      </div>
    </motion.div>
  );
}
