"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const SESSION_KEY = "site-intro-shown";

export default function SiteIntro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect -- reading sessionStorage
     is a genuine external-system sync per React's own effect guidelines */
  useEffect(() => {
    if (reduce) {
      setChecked(true);
      return;
    }
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown) {
      setChecked(true);
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "1");
    setShow(true);
    setChecked(true);
    const timer = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(timer);
  }, [reduce]);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (!checked || reduce) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
        >
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl text-fg-ink sm:text-5xl"
          >
            RM
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-xs uppercase tracking-[0.2em] text-fg-ink-muted"
          >
            Rudraksh Mittal
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
