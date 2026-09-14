"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/achievements", label: "Achievements" },
  { href: "/certifications", label: "Certifications" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
          <Link href="/" className="font-display text-lg tracking-wide text-fg-ink">
            RM
          </Link>

          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-[11px] uppercase tracking-[0.14em] transition-colors ${
                      active
                        ? "rounded-full bg-white/10 px-3 py-1.5 text-fg-ink"
                        : "px-3 py-1.5 text-fg-ink-muted hover:text-fg-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-fg-ink-muted lg:flex">
            Ideas <span className="text-accent">→</span> Impact
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-fg-ink lg:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </header>

      {open && (
        <nav className="fixed inset-0 z-30 flex flex-col justify-center gap-5 bg-ink px-8 lg:hidden">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-display text-3xl ${
                pathname === l.href ? "text-accent" : "text-fg-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
