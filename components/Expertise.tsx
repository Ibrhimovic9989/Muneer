const AREAS = [
  { t: "Statutory Audits & Compliance", d: "Companies Act 2013 · CARO 2020 · ICFR · ICAI standards" },
  { t: "Direct & Indirect Tax", d: "Income tax, GST, TDS, assessments, appeals, planning" },
  { t: "International Taxation — US", d: "IRS filings, Form 1040 / 1040NR, DTAA treaty planning" },
  { t: "Gulf Taxation", d: "KSA Zakat & DZIT filings, UAE VAT, cross-border structuring" },
  { t: "Corporate Finance & Valuations", d: "Due diligence, M&A and PE deals, IPO readiness, modelling" },
  { t: "Insolvency & Restructuring", d: "IBC 2016, CIRP, debt restructuring, NCLT/IBBI compliance" },
  { t: "Financial Reporting & IFRS", d: "Ind AS conversion, consolidation, technical accounting" },
  { t: "ERP — MS Dynamics AX", d: "Functional consulting, GL design, workflow, reporting" },
  { t: "Business Architecture & Controls", d: "SOPs, approval matrices, internal control frameworks" },
  { t: "Virtual CFO & Board Reporting", d: "KPI packs, MIS, cash flow, banker & investor relations" },
  { t: "HNI Wealth & Tax Planning", d: "Estate structuring, NRI repatriation, residency planning" },
  { t: "Payroll, ROC & Secretarial", d: "End-to-end statutory administration for growing entities" },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.28em] text-smoke mb-5">
              ⌖ &nbsp;§III &nbsp;/&nbsp; Practice areas
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tightest font-medium">
              Twelve<br />
              <span className="italic font-light text-amber-dark">
                competencies,
              </span>
              <br />
              one practitioner.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[15px] leading-[1.55] text-ink/75 prose-j">
              Audit, taxation and advisory remain the trunk of the practice — but
              thirteen years has grown branches into ERP architecture, Gulf
              jurisdictions, US tax, insolvency, and cross-border structuring.
            </p>
          </div>
        </div>

        {/* 12 area grid — 3 columns */}
        <div className="border-t border-ink/15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((a, i) => (
              <div
                key={i}
                className="group relative border-b border-ink/15 lg:[&:nth-child(3n+1)]:border-l-0 md:[&:nth-child(2n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:lg:border-l-0 border-l border-ink/15 px-6 lg:px-8 py-7 lg:py-8 hover:bg-ivory transition-colors duration-500"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-[10px] text-amber-dark tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-smoke">
                    Area
                  </span>
                </div>
                <h3 className="font-display text-[20px] lg:text-[22px] tracking-tightest leading-[1.15] font-medium mb-2">
                  {a.t}
                </h3>
                <p className="text-[12.5px] leading-[1.55] text-ink/65 prose-j">
                  {a.d}
                </p>
                <span className="absolute left-6 lg:left-8 right-6 lg:right-8 bottom-0 h-px bg-amber scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
