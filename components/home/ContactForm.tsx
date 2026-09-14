"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-xl italic text-fg-cream"
      >
        Message sent. I&apos;ll get back to you.
      </motion.p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.12em] text-fg-cream-muted">
            Your name
          </span>
          <input
            name="name"
            type="text"
            required
            className="border-b border-cream-line bg-transparent py-2 text-fg-cream outline-none transition-colors focus:border-fg-cream"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.12em] text-fg-cream-muted">
            Your email
          </span>
          <input
            name="email"
            type="email"
            required
            className="border-b border-cream-line bg-transparent py-2 text-fg-cream outline-none transition-colors focus:border-fg-cream"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[11px] uppercase tracking-[0.12em] text-fg-cream-muted">
          Message
        </span>
        <textarea
          name="message"
          rows={3}
          required
          className="resize-none border-b border-cream-line bg-transparent py-2 text-fg-cream outline-none transition-colors focus:border-fg-cream"
        />
      </label>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group flex items-center gap-2 text-sm uppercase tracking-[0.1em] text-fg-cream disabled:opacity-50"
        >
          {status === "sending" ? "Sending" : "Send message"}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </button>

        {status === "error" && (
          <span className="text-xs text-red-500">
            {errorMsg || "Couldn't send. Try emailing directly."}
          </span>
        )}
      </div>
    </form>
  );
}
