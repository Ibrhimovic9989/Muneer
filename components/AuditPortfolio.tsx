"use client";

import { useState } from "react";

type Row = {
  type: string;
  turnover: string;
  sector: string;
  scope: string;
  badge: string;
};

const ROWS: Row[] = [
  {
    type: "Listed Conglomerate",
    turnover: "₹15,000 Cr+",
    sector: "Infrastructure / Manufacturing / Real Estate",
    scope: "Statutory audit under Companies Act 2013; consolidated statements; CARO 2020; ICFR assessment",
    badge: "LC",
  },
  {
    type: "IT Services (Export-Oriented)",
    turnover: "₹3,000 Cr",
    sector: "Information Technology & SaaS",
    scope: "Statutory audit; STPI compliance; Section 10AA verification; transfer pricing; FEMA / RBI reporting",
    badge: "IT",
  },
  {
    type: "Regional Manufacturing",
    turnover: "₹200 Cr",
    sector: "Engineering & Industrial Components",
    scope: "Statutory audit; inventory valuation; deferred tax; fixed asset verification; loan covenant reporting",
    badge: "MF",
  },
  {
    type: "Real Estate Developer",
    turnover: "₹60 Cr",
    sector: "Real Estate & Construction",
    scope: "Statutory audit under Ind AS; revenue recognition (Ind AS 115); project cost audit; RERA compliance",
    badge: "RE",
  },
  {
    type: "Healthcare Diagnostics Chain",
    turnover: "₹28 Cr",
    sector: "Healthcare & Diagnostics",
    scope: "Statutory & internal audit; branch-level audit across ten cities; revenue assurance; insurance billing",
    badge: "HC",
  },
  {
    type: "D2C Consumer Brand",
    turnover: "₹12 Cr",
    sector: "Retail, D2C & E-Commerce",
    scope: "Statutory audit; marketplace reconciliation; GST e-commerce compliance; inventory cost review",
    badge: "DC",
  },
  {
    type: "Educational Trust & Institutions",
    turnover: "₹8 Cr",
    sector: "Education & Non-Profit",
    scope: "Trust audit; FCRA compliance; 80G / 12A / CSR fund utilisation reporting; fee reconciliation",
    badge: "ET",
  },
  {
    type: "Technology Start-up (Series A)",
    turnover: "₹1.5 Cr ARR",
    sector: "Fintech / B2B SaaS",
    scope: "Statutory audit; ESOP valuation; revenue recognition under Ind AS 115; investor-ready financials; Big-4 DD support",
    badge: "TS",
  },
];

export default function AuditPortfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="portfolio" className="relative bg-ivory border-y border-ink/[0.08] py-24 lg:py-32 grain">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
          <div className="lg:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.28em] text-smoke mb-5">
              ⌖ &nbsp;§IV &nbsp;/&nbsp; Statutory Audit Portfolio
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tightest font-medium">
              The ledger,<br />
              <span className="italic font-light text-amber-dark">
                in eight movements.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-[14px] leading-[1.6] text-ink/75 prose-j">
              A representative cross-section of statutory audit engagements led
              over the last five years — ₹18,000 Cr+ in aggregate — from a
              fifteen-thousand-crore conglomerate to a Series A start-up. Each
              row, a separate trust.
            </p>
          </div>
        </div>

        {/* Editorial table */}
        <div className="border-t-2 border-ink">
          {/* Header row */}
          <div className="hidden lg:grid grid-cols-12 gap-4 py-4 px-2 text-[10px] uppercase tracking-[0.22em] text-smoke border-b border-ink/20">
            <div className="col-span-1 font-mono">№</div>
            <div className="col-span-3">Entity Type</div>
            <div className="col-span-2">Turnover</div>
            <div className="col-span-3">Industry Sector</div>
            <div className="col-span-3">Scope of Audit</div>
          </div>

          {ROWS.map((r, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative grid grid-cols-12 gap-4 py-6 lg:py-7 px-2 border-b border-ink/15 transition-colors duration-500 hover:bg-bone"
            >
              {/* Number + badge */}
              <div className="col-span-2 lg:col-span-1 flex items-center gap-3">
                <span className="font-mono text-[11px] text-amber-dark tracking-[0.18em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Entity */}
              <div className="col-span-10 lg:col-span-3 flex items-center gap-3">
                <span
                  className={`hidden lg:inline-flex w-9 h-9 rounded-full border items-center justify-center font-mono text-[10px] tracking-[0.1em] transition-colors duration-500 ${
                    hovered === i
                      ? "bg-ink text-bone border-ink"
                      : "border-ink/25 text-ink/70"
                  }`}
                >
                  {r.badge}
                </span>
                <span className="font-display text-[16px] lg:text-[18px] tracking-tightest leading-[1.2] font-medium text-balance">
                  {r.type}
                </span>
              </div>

              {/* Turnover */}
              <div className="col-span-5 lg:col-span-2 flex items-center">
                <span className="font-display text-[18px] lg:text-[22px] font-medium tracking-tight num">
                  {r.turnover}
                </span>
              </div>

              {/* Sector */}
              <div className="col-span-7 lg:col-span-3 flex items-center">
                <span className="text-[12.5px] leading-[1.45] text-ink/75 tracking-tight">
                  {r.sector}
                </span>
              </div>

              {/* Scope */}
              <div className="col-span-12 lg:col-span-3 flex items-center">
                <span className="text-[12px] leading-[1.5] text-ink/65 text-pretty">
                  {r.scope}
                </span>
              </div>

              {/* hover rail */}
              <span
                className={`absolute left-2 right-2 bottom-0 h-px bg-amber origin-left transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  hovered === i ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 text-[12px] text-ink/65">
          <div className="lg:col-span-1 font-mono text-[10px] tracking-[0.2em] text-smoke pt-1">
            ☞
          </div>
          <p className="lg:col-span-11 leading-[1.6] prose-j max-w-[860px]">
            In addition, more than eighty tax audits under §44AB, bank audits,
            internal audits, and concurrent audits across NBFC, cooperative, and
            government-aided organisations.
          </p>
        </div>
      </div>
    </section>
  );
}
