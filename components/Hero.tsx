"use client";

import Image from "next/image";

const COUNTRIES = [
  { code: "IND", name: "India" },
  { code: "USA", name: "United States" },
  { code: "ARE", name: "United Arab Emirates" },
  { code: "KSA", name: "Saudi Arabia" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col pt-[88px] pb-6 lg:pt-[100px] lg:pb-8 overflow-hidden grain"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8.33%] top-0 bottom-0 vline opacity-50" />
        <div className="absolute right-[8.33%] top-0 bottom-0 vline opacity-50" />
      </div>

      <div className="relative mx-auto max-w-[1440px] w-full px-6 lg:px-12 flex-1 flex flex-col">
        {/* Top strip */}
        <div className="flex items-start justify-between gap-6 mb-6 lg:mb-8">
          <div className="flex items-center gap-3 pt-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-smoke">
              FCA &nbsp;·&nbsp; Gold Medallist in Economics &nbsp;·&nbsp; ERP Consultant
            </span>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1.5 text-right text-[10px] uppercase tracking-[0.24em] text-smoke">
            <span>A Profile / 2026 Edition</span>
            <span className="flex items-center gap-2">
              <span className="w-6 h-px bg-ink/25" />
              No. 01
            </span>
          </div>
        </div>

        {/* Headline + portrait — the centerpiece */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Name */}
          <div className="lg:col-span-8">
            <h1 className="font-display tracking-ultra leading-[0.85]">
              <span className="block text-[16vw] sm:text-[13vw] lg:text-[10.5vw] xl:text-[10vw] font-medium">
                Muneer
              </span>
              <span className="block text-[16vw] sm:text-[13vw] lg:text-[10.5vw] xl:text-[10vw] font-medium">
                <span className="italic font-light">Ahmed</span>
                <sup className="text-[0.18em] font-medium not-italic align-super ml-1 text-amber-dark tracking-[0.15em]">
                  FCA
                </sup>
                <span className="text-amber">.</span>
              </span>
            </h1>

            {/* Subtitle row */}
            <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-6">
              <p className="text-[14px] lg:text-[16px] tracking-tight text-ink/85 max-w-[560px] text-balance">
                Chartered Accountant. Founder &amp; Managing Partner of{" "}
                <span className="text-ink">Muneer &amp; Associates</span>,
                Hyderabad. Fifteen years and twenty-five thousand crore in audited
                turnover.
              </p>
            </div>
          </div>

          {/* Portrait card */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="relative max-w-[320px] mx-auto lg:ml-auto">
              <div className="relative aspect-[4/5] bg-ivory border border-ink/10 overflow-hidden group">
                <Image
                  src="/portrait.jpg"
                  alt="CA Muneer Ahmed — Chartered Accountant, Founder of Muneer & Associates"
                  fill
                  sizes="(min-width: 1024px) 320px, 80vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  priority
                />
                <div
                  className="absolute inset-0 mix-blend-multiply opacity-30 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(184,133,58,0.10) 0%, rgba(14,14,16,0.45) 100%)",
                  }}
                />
                <div className="absolute top-3 left-3 right-3 flex items-start justify-between text-[9px] uppercase tracking-[0.24em] text-bone/85">
                  <span>Hyderabad / IND</span>
                  <span>Plate I</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-[9px] uppercase tracking-[0.24em] text-bone/85">
                  <span>FCA · ICAI</span>
                  <span>Est. 2010</span>
                </div>
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-smoke text-right">
                — A photographic record
              </p>
            </div>
          </div>
        </div>

        {/* Bottom rail — countries + contact */}
        <div className="mt-10 lg:mt-12 pt-6 border-t border-ink/10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.24em] text-smoke mb-3">
              ⌖ &nbsp;Active jurisdictions
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {COUNTRIES.map((c, i) => (
                <span key={c.code} className="inline-flex items-center gap-2.5">
                  <span className="font-mono text-[10px] text-amber-dark tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px] tracking-tight font-medium">{c.name}</span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-smoke">
                    {c.code}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col items-start lg:items-end gap-3">
            <p className="text-[10px] uppercase tracking-[0.24em] text-smoke">
              ⌖ &nbsp;Direct
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+919985909898"
                className="group inline-flex items-center gap-2 text-[13px] tracking-tight text-ink hover:text-amber-dark transition-colors duration-300"
              >
                <span className="font-mono text-[10px] text-smoke group-hover:text-amber-dark">→</span>
                +91 99859 09898
              </a>
              <span className="hidden sm:inline w-px h-4 bg-ink/15" />
              <a
                href="mailto:muneer@muneerassociates.in"
                className="group inline-flex items-center gap-2 text-[13px] tracking-tight text-ink hover:text-amber-dark transition-colors duration-300 border-b border-ink/30 hover:border-amber-dark pb-0.5"
              >
                muneer@muneerassociates.in
              </a>
              <span className="hidden sm:inline w-px h-4 bg-ink/15" />
              <a
                href="https://linkedin.com/in/ca-muneer-ahmed"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-[13px] tracking-tight text-ink hover:text-amber-dark transition-colors duration-300"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
