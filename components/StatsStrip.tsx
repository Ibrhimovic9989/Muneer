const STATS = [
  { v: "15+", k: "Years", sub: "Domain expertise" },
  { v: "40+", k: "Companies", sub: "Advised as CFO" },
  { v: "₹25K+ Cr", k: "Audit Turnover", sub: "Combined statutory" },
  { v: "04", k: "Countries", sub: "Active practice" },
  { v: "03", k: "Jurisdictions", sub: "International tax" },
  { v: "01", k: "Gold Medal", sub: "Economics, academic" },
];

export default function StatsStrip() {
  return (
    <section className="relative bg-ivory border-y border-ink/[0.08]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-10 lg:py-12">
        <div className="flex items-baseline justify-between mb-6">
          <p className="text-[10px] uppercase tracking-[0.28em] text-smoke">
            ⌖ &nbsp;A career, in numbers
          </p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-smoke font-mono">
            §I
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-ink/10">
          {STATS.map((s, i) => (
            <div key={i} className="bg-ivory p-5 lg:p-6 group">
              <div className="font-mono text-[10px] text-amber-dark mb-3 tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-display text-[32px] lg:text-[40px] leading-[0.95] tracking-tightest font-medium num">
                {s.v}
              </div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ink/85">
                {s.k}
              </div>
              <div className="text-[10px] tracking-tight text-smoke mt-0.5">
                {s.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
