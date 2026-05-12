const COLUMNS = [
  {
    title: "Large & Mid-Cap",
    sub: "Conglomerates and listed entities",
    items: [
      "Infrastructure conglomerate · ₹15,000 Cr — statutory audit, consolidation",
      "IT / SaaS export company · ₹3,000 Cr — audit, STPI, transfer pricing, FEMA",
      "Engineering manufacturer · ₹200 Cr — audit, bank financing",
      "Real estate developer · ₹60 Cr — Ind AS audit, RERA compliance",
    ],
  },
  {
    title: "SMEs & Growth-Stage",
    sub: "Established mid-market businesses",
    items: [
      "Healthcare diagnostics chain · ₹28 Cr — Virtual CFO, audit, MIS",
      "D2C consumer brand · ₹12 Cr — CFO, GST, marketplace reconciliation",
      "Educational trust · ₹8 Cr — trust audit, 80G/12A, FCRA, CSR",
      "Regional trading company · ₹100 Cr — tax planning, GST, ROC",
    ],
  },
  {
    title: "Start-ups & Early-Stage",
    sub: "Pre-revenue through Series A",
    items: [
      "Fintech lending platform — statutory audit, RBI compliance",
      "B2B SaaS (Series A, ₹4 Cr ARR) — CFO advisory, ESOP",
      "Agri-tech start-up — financial modelling, grant compliance",
      "Ed-tech platform — revenue recognition, audit, investor DD",
    ],
  },
  {
    title: "International & Cross-Border",
    sub: "US, KSA, UAE, NRI individuals",
    items: [
      "Saudi IT company — Zakat computation, DZIT filing, KSA audit",
      "US-resident NRI professionals — Form 1040, DTAA treaty planning",
      "Gulf-based HNIs — wealth structuring, repatriation planning",
      "Indian co. with US subsidiary — transfer pricing, cross-border advisory",
    ],
  },
];

export default function Clients() {
  return (
    <section className="relative bg-ink text-bone py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, rgb(var(--amber)) 0%, transparent 35%), radial-gradient(circle at 85% 75%, rgb(var(--amber)) 0%, transparent 35%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.28em] text-amber-soft mb-5">
              ⌖ &nbsp;§VI &nbsp;/&nbsp; Client Portfolio
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tightest font-medium">
              From the listed,<br />
              to the <span className="italic font-light text-amber-soft">pre-revenue.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[14px] leading-[1.6] text-bone/65 prose-j">
              A genuinely diverse roster — by size, sector, ownership structure
              and life stage. Each client occupies a different chair at the
              table.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/10 border border-bone/10">
          {COLUMNS.map((col, i) => (
            <div
              key={i}
              className="group relative bg-ink p-7 lg:p-9 min-h-[360px] hover:bg-ash transition-colors duration-500"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-mono text-[10px] text-amber-soft tracking-[0.22em]">
                  {String(i + 1).padStart(2, "0")} / 04
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-bone/35">
                  Tier
                </span>
              </div>
              <h3 className="font-display text-[22px] lg:text-[26px] tracking-tightest leading-[1.05] font-medium mb-2">
                {col.title}
              </h3>
              <p className="text-[10.5px] uppercase tracking-[0.2em] text-bone/45 mb-6">
                {col.sub}
              </p>
              <ul className="space-y-3">
                {col.items.map((it, j) => (
                  <li key={j} className="flex gap-2.5 text-[12px] leading-[1.55] text-bone/75">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-soft shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>

              <span className="absolute left-7 lg:left-9 right-7 lg:right-9 bottom-0 h-px bg-amber-soft scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
