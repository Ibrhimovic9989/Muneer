const VERTICALS = [
  {
    n: "I",
    t: "Statutory Auditing",
    d: "Comprehensive engagements covering risk assessment, internal control evaluation, substantive testing, and reporting per the Standards on Auditing issued by the ICAI. Across listed companies, private entities, trusts, and charitable organisations.",
  },
  {
    n: "II",
    t: "Taxation & Tax Planning",
    d: "End-to-end compliance and advisory across income tax, GST, TDS, transfer pricing, international tax, assessments and appeals — paired with advanced planning strategies that optimise corporate and individual tax positions.",
  },
  {
    n: "III",
    t: "Corporate Finance",
    d: "Valuations, financial due diligence, fundraising advisory, investor pitch preparation, financial modelling, and deal structuring for M&A, private equity transactions, and IPO readiness.",
  },
  {
    n: "IV",
    t: "Insolvency & Restructuring",
    d: "Advisory under IBC 2016: CIRP, debt restructuring, voluntary liquidation, and managed closures — with full compliance to NCLT and IBBI frameworks and creditor-debtor negotiations.",
  },
  {
    n: "V",
    t: "Financial Management",
    d: "Design and implementation of budgeting frameworks, cash flow models, MIS reporting, performance dashboards, and financial governance structures built for scalable organisations.",
  },
  {
    n: "VI",
    t: "ERP — Microsoft Dynamics AX",
    d: "Certified functional consulting: finance module design, chart of accounts structuring, workflow automation, reporting configuration, and end-user training for finance teams.",
  },
];

export default function Verticals() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
          <div className="lg:col-span-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-smoke mb-5">
              ⌖ &nbsp;§V &nbsp;/&nbsp; Service Verticals
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tightest font-medium">
              Six<br />
              <span className="italic font-light text-amber-dark">
                disciplines,
              </span>
              <br />
              built up over years.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 border border-ink/10">
          {VERTICALS.map((v, i) => (
            <article
              key={v.n}
              className="group relative bg-bone p-7 lg:p-10 transition-colors duration-500 hover:bg-ivory min-h-[260px] flex flex-col justify-between"
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-display text-[12px] tracking-[0.32em] text-amber-dark">
                  {v.n}
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-smoke font-mono">
                  Vertical {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h3 className="font-display text-[24px] lg:text-[30px] leading-[1.05] tracking-tightest font-medium mb-3">
                  {v.t}
                </h3>
                <p className="text-[13px] lg:text-[13.5px] leading-[1.6] text-ink/75 prose-j">
                  {v.d}
                </p>
              </div>

              <span className="absolute left-7 lg:left-10 right-7 lg:right-10 bottom-0 h-px bg-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
