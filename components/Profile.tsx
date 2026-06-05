export default function Profile() {
  return (
    <section id="profile" className="relative py-24 lg:py-32 grain">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Marginalia (left) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 self-start">
            <p className="text-[10px] uppercase tracking-[0.28em] text-smoke mb-4">
              ⌖ &nbsp;§II &nbsp;/&nbsp; Profile
            </p>
            <div className="space-y-4 text-[10.5px] uppercase tracking-[0.24em] text-smoke leading-[1.6]">
              <div>
                <span className="text-amber-dark">a.</span> Founder, Muneer &amp;
                Associates
              </div>
              <div>
                <span className="text-amber-dark">b.</span> Hyderabad, India
              </div>
              <div>
                <span className="text-amber-dark">c.</span> Practising since 2012
              </div>
              <div>
                <span className="text-amber-dark">d.</span> Fellow of the ICAI
              </div>
              <div>
                <span className="text-amber-dark">e.</span> Member, TiE.ORG
              </div>
              <div>
                <span className="text-amber-dark">f.</span> Member, HMA
              </div>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-9">
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tightest font-medium mb-12">
              A practitioner of<br />
              <span className="italic font-light text-amber-dark">
                technical depth
              </span>
              <br />
              and quiet judgement.
            </h2>

            <div className="space-y-5 text-[15.5px] lg:text-[16.5px] leading-[1.65] text-ink/85 prose-j max-w-[680px]">
              <p>
                CA Muneer Ahmed is a Fellow Chartered Accountant and the founder
                of Muneer &amp; Associates, a financial consulting practice
                headquartered in Hyderabad. Across thirteen years of intensive
                domain experience, he has led statutory audits of organisations
                with aggregate combined turnover exceeding twenty-five thousand
                crore — a portfolio that runs from early-stage technology
                start-ups and family-owned SMEs through to listed conglomerates
                operating across multiple industry verticals.
              </p>
              <p>
                As a Virtual CFO, cross-border tax authority, and strategic
                business advisor, he brings a rare combination of technical
                precision, commercial judgement, and international exposure to
                each engagement. He holds the third state rank in Economics and
                a functional consulting certification for Microsoft Dynamics AX
                — an unusual pairing that gives him the ability to align
                financial strategy with the operational systems that carry it.
              </p>
              <p>
                The practice is built on three pillars: exceptional technical
                depth, genuine commercial partnership, and an unwavering
                commitment to client outcomes. He has advised businesses from
                inception to IPO readiness, restructured organisations in
                financial distress, represented clients before the IRS and
                Indian revenue authorities, and trained over one-hundred-twenty
                finance professionals across India, the United States, and the
                Gulf. He sits on the Executive Advisory Boards of several
                Trusts and Societies.
              </p>
            </div>

            {/* Pull quote */}
            <figure className="mt-16 lg:mt-20 max-w-[820px]">
              <div className="flex items-start gap-4 lg:gap-6">
                <span className="font-display text-[60px] leading-none text-amber-dark/60 -mt-2">
                  &ldquo;
                </span>
                <blockquote className="font-display text-[22px] lg:text-[28px] leading-[1.3] tracking-tightest italic font-light text-balance">
                  Bridging the gap between financial compliance and strategic
                  growth — internationally benchmarked advice that helps
                  businesses start strong, scale efficiently, and resolve
                  challenges with precision and integrity.
                </blockquote>
              </div>
              <figcaption className="mt-6 ml-10 lg:ml-12 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-smoke">
                <span className="w-10 h-px bg-ink/30" />
                CA Muneer Ahmed, FCA
                <span className="text-ink/30">/</span>
                Founder, Muneer &amp; Associates
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
