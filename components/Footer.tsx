export default function Footer() {
  return (
    <footer className="relative bg-ink text-bone border-t border-bone/10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-12 lg:pt-16">
        {/* Massive signature wordmark */}
        <div className="mb-10 lg:mb-14">
          <h2 className="font-display text-[18vw] lg:text-[14vw] leading-[0.85] tracking-ultra font-medium">
            Muneer
            <br />
            <span className="italic font-light text-amber-soft">Ahmed.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-t border-bone/10 pt-10">
          <div className="col-span-2 lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-bone/40 mb-3">
              The practitioner
            </p>
            <p className="text-[12.5px] leading-[1.6] text-bone/65 max-w-[420px] prose-j">
              CA Muneer Ahmed, FCA. Founder &amp; Managing Partner of Muneer
              &amp; Associates, Chartered Accountants — Hyderabad, India.
              Practising since 2012.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-7">
            <p className="text-[10px] uppercase tracking-[0.24em] text-bone/40 mb-3">
              Office
            </p>
            <p className="text-[12.5px] leading-[1.6] text-bone/75">
              No. 414, 4<sup>th</sup> Floor<br />
              Downtown Mall, Lakdi Ka Pul<br />
              Hyderabad — Telangana, IND
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.24em] text-bone/40 mb-3">
              Direct
            </p>
            <ul className="space-y-1.5 text-[12px] text-bone/75">
              <li>
                <a href="tel:+919985909898" className="hover:text-amber-soft transition-colors">
                  +91 99859 09898
                </a>
              </li>
              <li>
                <a href="mailto:muneer@muneerassociates.in" className="hover:text-amber-soft transition-colors">
                  muneer@muneerassociates.in
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/ca-muneer-ahmed"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-soft transition-colors"
                >
                  linkedin.com/in/ca-muneer-ahmed ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-bone/10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-bone/45">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
            <span>© {new Date().getFullYear()} CA Muneer Ahmed</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-bone/30" />
            <span>FCA — ICAI Reg.</span>
            <span className="hidden md:inline w-1 h-1 rounded-full bg-bone/30" />
            <span>Hyderabad, India</span>
          </div>
          <a
            href="#top"
            className="group inline-flex items-center gap-1 hover:text-amber-soft transition-colors"
          >
            Back to top
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              className="transition-transform group-hover:-translate-y-0.5"
            >
              <path
                d="M6 10V2M2 6l4-4 4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
