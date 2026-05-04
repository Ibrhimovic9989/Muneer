"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Profile", href: "#profile" },
  { label: "Practice", href: "#expertise" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Advisory", href: "#advisory" },
  { label: "Standing", href: "#standing" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bone/80 backdrop-blur-xl border-b border-ink/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex items-center justify-between h-[64px]">
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative w-7 h-7 rounded-full border border-ink/30 flex items-center justify-center overflow-hidden">
              <span className="absolute inset-0 bg-ink translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              <span className="relative font-display text-[11px] tracking-tight text-ink group-hover:text-bone transition-colors duration-500">
                M
              </span>
            </span>
            <div className="flex flex-col leading-none">
              <span className="text-[12.5px] font-medium tracking-tight">CA Muneer Ahmed</span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-smoke mt-1">
                FCA &nbsp;·&nbsp; Founder, Muneer &amp; Associates
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-3.5 py-2 text-[12px] tracking-tight text-ink/70 hover:text-ink transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute left-3.5 right-3.5 bottom-1 h-px bg-ink scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex group items-center gap-2 px-4 py-2 rounded-full bg-ink text-bone text-[12px] tracking-tight hover:bg-amber hover:text-ink transition-all duration-500"
            >
              Engage
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-ink/15"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-4 h-px bg-ink transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`} />
                <span className={`block w-4 h-px bg-ink transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${open ? "max-h-[400px] border-t border-ink/[0.06]" : "max-h-0"}`}>
        <nav className="px-6 py-6 flex flex-col gap-1 bg-bone/95 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-3 text-[16px] tracking-tight border-b border-ink/[0.06]">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
