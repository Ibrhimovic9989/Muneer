const STARTUP_BULLETS = [
  "Business entity structuring & incorporation advisory",
  "DPIIT Start-up India registration & tax exemptions",
  "Seed and Series A financial modelling",
  "Investor deck financial narrative preparation",
  "Cap table design & ESOP structuring",
  "GST & income tax compliance from Day 1",
  "Monthly CFO advisory retainers",
  "MIS design & investor reporting",
  "Due diligence preparation for funding rounds",
  "Regulatory filings — ROC, FEMA, RBI",
];

const CFO_CARDS = [
  {
    g: "α",
    t: "Financial Strategy & Planning",
    d: "Annual budgets, rolling 12–36 month forecasts, scenario planning, and long-range financial models aligned to board-approved strategies and investor return expectations.",
  },
  {
    g: "β",
    t: "Board-Level Reporting & MIS",
    d: "Monthly management packs with KPI dashboards, actuals-vs-budget variance, cash flow bridges, and executive narrative for boards, lenders and investors.",
  },
  {
    g: "γ",
    t: "Cash Flow & Working Capital",
    d: "Thirteen-week rolling cash flow forecasts, working-capital cycle optimisation, trade finance structuring, and banking relationships including overdraft and term loan negotiations.",
  },
  {
    g: "δ",
    t: "Fundraising & Investor Relations",
    d: "CIM preparation, financial modelling, investor Q&A support, due diligence co-ordination, term sheet financial review, and post-close governance and reporting.",
  },
  {
    g: "ε",
    t: "Risk, Compliance & Controls",
    d: "Internal control framework design, risk register maintenance, audit committee support, statutory filing calendar management, and regulatory change monitoring.",
  },
  {
    g: "ζ",
    t: "Business Architecture & SOPs",
    d: "Full-cycle deployment of financial policies, procedures, approval matrices, and organisational structures that create operationally efficient, audit-ready businesses.",
  },
];

export default function Advisory() {
  return (
    <section id="advisory" className="relative py-24 lg:py-32 grain">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.28em] text-smoke mb-5">
              ⌖ &nbsp;§VII &nbsp;/&nbsp; Strategic Advisory
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tightest font-medium">
              Senior counsel,<br />
              <span className="italic font-light text-amber-dark">
                from formation
              </span>{" "}
              to fundraise.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[14px] leading-[1.6] text-ink/75 prose-j">
              Acting Financial Consultant and Virtual CFO to more than forty
              companies — and counting more than fifteen start-ups guided from
              formation to funding.
            </p>
          </div>
        </div>

        {/* Two-part: Startup checklist (left) + headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 mb-20 lg:mb-24 items-start">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.24em] text-amber-dark mb-4 font-mono">
              A · Start-up & Growth-stage
            </p>
            <h3 className="font-display text-[26px] lg:text-[32px] leading-[1.05] tracking-tightest font-medium mb-6">
              From idea, through<br />
              incorporation, into round.
            </h3>
            <p className="text-[13.5px] leading-[1.6] text-ink/75 max-w-[460px] prose-j">
              Notable engagements include a B2B Manufacturing company (Pre-Series
              ₹1 Cr raise), a healthcare diagnostic with a three-city expansion
              under PE backing, and a fintech lending platform.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 border-t border-ink/15 pt-6">
              {STARTUP_BULLETS.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-2 text-[13px] leading-[1.5] text-ink/85 border-b border-ink/[0.07]"
                >
                  <span className="font-mono text-[10px] text-amber-dark mt-0.5 tracking-[0.18em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-balance">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CFO grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-amber-dark mb-4 font-mono">
              B · Virtual CFO
            </p>
            <h3 className="font-display text-[26px] lg:text-[32px] leading-[1.05] tracking-tightest font-medium mb-5">
              The C-suite seat,<br />
              on a retainer.
            </h3>
            <p className="text-[13px] leading-[1.6] text-ink/75 max-w-[360px]">
              Senior-level financial leadership that is commercially astute,
              technically sound, and tailored to each client&rsquo;s situation.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
            {CFO_CARDS.map((c, i) => (
              <div
                key={i}
                className="group relative bg-bone p-6 lg:p-7 hover:bg-ivory transition-colors duration-500 min-h-[200px]"
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span className="font-display text-[22px] italic font-light text-amber-dark leading-none">
                    {c.g}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-smoke">
                    {String(i + 1).padStart(2, "0")} / 06
                  </span>
                </div>
                <h4 className="font-display text-[16px] lg:text-[18px] tracking-tightest leading-[1.2] font-medium mb-2">
                  {c.t}
                </h4>
                <p className="text-[12px] leading-[1.55] text-ink/70 prose-j">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
