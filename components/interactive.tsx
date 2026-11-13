"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";

/** Mobile menu button + panel. Styling comes from each design's CSS (.menu-btn, .menu-panel). */
export function MobileMenu({ links, cta }: { links: { href: string; label: string }[]; cta?: ReactNode }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <button type="button" className={`menu-btn${open ? " is-open" : ""}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <div className={`menu-panel${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l) => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
        </nav>
        {cta}
      </div>
    </>
  );
}

/** Enquiry form (front-end only for the design sample). */
export function EnquiryForm({ className = "form", button = "Send enquiry" }: { className?: string; button?: string }) {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); setSent(true); };
  if (sent) {
    return <div className={`${className} form-done`} role="status"><strong>Thank you.</strong><p>Our team will get back to you within one working day.</p></div>;
  }
  return (
    <form className={className} onSubmit={submit}>
      <label><span>Name</span><input name="name" required autoComplete="name" placeholder="Your full name" /></label>
      <label><span>Company</span><input name="company" autoComplete="organization" placeholder="Company name" /></label>
      <label><span>Email</span><input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
      <label><span>Phone</span><input name="phone" type="tel" autoComplete="tel" placeholder="+91" /></label>
      <label className="full"><span>Requirement</span><textarea name="message" rows={4} required placeholder="Part, quantity, drawing reference…" /></label>
      <button type="submit">{button}</button>
    </form>
  );
}

/** Auto-rotating index for hero slideshows. */
export function useRotator(count: number, ms = 6000) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => setI((v) => (v + 1) % count), ms);
    return () => window.clearTimeout(t);
  }, [i, count, ms]);
  return [i, setI] as const;
}

/** Adds .is-in to [data-reveal] elements as they scroll into view. */
export function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    document.documentElement.classList.add("reveal-ready");
    return () => io.disconnect();
  }, []);
  return null;
}
