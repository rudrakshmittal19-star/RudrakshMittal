import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="flex flex-col items-start justify-between gap-4 bg-cream px-6 py-8 text-xs uppercase tracking-[0.08em] text-fg-cream-muted sm:flex-row sm:items-center md:px-12">
      <Link href="/" className="font-display text-base normal-case tracking-normal text-fg-cream">
        RM
      </Link>
      <span>{profile.name} © {new Date().getFullYear()}</span>
    </footer>
  );
}
