export default function Closer() {
  return (
    <section
      id="contact"
      className="relative bg-ink text-bone py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgb(var(--amber) / 0.18) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Closing pull quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 lg:mb-28">
          <div className="lg:col-span-2">
            <span className="font-display text-[60px] lg:text-[80px] leading-none text-amber-soft/60">
              &ldquo;
            </span>
          </div>
          <figure className="lg:col-span-9">
            <blockquote className="font-display text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.1] tracking-tightest font-light text-balance">
              The best financial advice is built on{" "}
              <span className="italic text-amber-soft">trust,</span>{" "}
              <span className="italic text-amber-soft">precision,</span> and a
              genuine understanding of what each business truly needs to grow.
              Compliance is the floor — strategy is the ceiling.
            </blockquote>
            <figcaption className="mt-8 lg:mt-10 flex items-center gap-3 text-[10.5px] uppercase tracking-[0.24em] text-bone/55">
              <span className="w-12 h-px bg-amber-soft" />
              CA Muneer Ahmed, FCA
              <span className="text-bone/30">/</span>
              Founder, Muneer &amp; Associates
            </figcaption>
          </figure>
        </div>

        {/* Engagement CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-12 lg:pt-16 border-t border-bone/10">
          <div className="lg:col-span-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-amber-soft mb-5">
              ⌖ &nbsp;§X &nbsp;/&nbsp; Engage
            </p>
            <h2 className="font-display text-[40px] sm:text-[56px] lg:text-[80px] leading-[0.92] tracking-ultra font-medium">
              Begin the<br />
              <span className="italic font-light text-amber-soft">
                conversation.
              </span>
            </h2>
            <p className="mt-6 text-[14.5px] leading-[1.6] text-bone/65 max-w-[480px] prose-j">
              For audit, taxation, advisory, Virtual CFO retainers, or
              cross-border engagements — write directly. A senior reply within
              one business day, usually sooner.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-8">
            <ContactRow
              num="01"
              label="Speak directly"
              value="+91 99859 09898"
              href="tel:+919985909898"
            />
            <ContactRow
              num="02"
              label="Write to"
              value="muneer@muneerassociates.in"
              href="mailto:muneer@muneerassociates.in"
            />
            <ContactRow
              num="03"
              label="LinkedIn"
              value="linkedin.com/in/ca-muneer-ahmed"
              href="https://linkedin.com/in/ca-muneer-ahmed"
              external
            />
            <ContactRow
              num="04"
              label="Office"
              value={`No. 414, 4th Fl, Downtown Mall · Lakdi Ka Pul, Hyderabad`}
            />

            <a
              href="mailto:muneer@muneerassociates.in"
              className="group mt-2 inline-flex items-center gap-3 self-start px-6 py-3 rounded-full bg-bone text-ink text-[12.5px] tracking-tight hover:bg-amber transition-all duration-500"
            >
              Send a brief
              <span className="w-4 h-4 rounded-full bg-ink/10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  num,
  label,
  value,
  href,
  external,
}: {
  num: string;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const inner = (
    <div className="group flex items-baseline justify-between gap-6 border-b border-bone/15 pb-3">
      <div className="flex items-baseline gap-3 min-w-0">
        <span className="font-mono text-[10px] text-amber-soft tracking-[0.2em]">
          {num}
        </span>
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.22em] text-bone/45 mb-1">
            {label}
          </p>
          <p className="text-[14px] lg:text-[16px] tracking-tight text-bone group-hover:text-amber-soft transition-colors duration-300 truncate">
            {value}
          </p>
        </div>
      </div>
      {href && (
        <span className="shrink-0 text-[12px] text-bone/40 group-hover:text-amber-soft transition-colors duration-300">
          {external ? "↗" : "→"}
        </span>
      )}
    </div>
  );
  return href ? (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      {inner}
    </a>
  ) : (
    inner
  );
}
