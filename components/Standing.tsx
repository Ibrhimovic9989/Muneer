const LEADERSHIP = [
  {
    badge: "TiE",
    t: "TiE.ORG — The IndUS Entrepreneurs",
    d: "Active member of the world's largest global entrepreneurs forum, sixty-plus countries and thirteen-thousand-plus members. Mentoring sessions, investment forums, and knowledge-sharing across financial planning and start-up readiness.",
  },
  {
    badge: "HMA",
    t: "Hyderabad Management Association",
    d: "Member of one of India's most respected professional management bodies — executive development programmes, panel discussions, and thought-leadership roundtables on finance, governance and business strategy.",
  },
  {
    badge: "EAB",
    t: "Executive Advisory Boards",
    d: "Serving on the Executive Advisory Boards of multiple Trusts and Societies across Hyderabad — strategic financial oversight, governance frameworks, FCRA compliance guidance, and audit committee advisory to non-profit and civil society organisations.",
  },
  {
    badge: "120+",
    t: "Speaking & Training",
    d: "Regular keynote speaker and workshop trainer on direct and indirect taxation, financial planning, ERP adoption, US and Gulf taxation frameworks, and entrepreneurial finance. Faculty at CA study circles, MBA programmes and industry conferences. Over one-hundred-twenty professionals trained across India, the USA and the Gulf.",
  },
];

const QUALS = [
  "Fellow Chartered Accountant (FCA) — ICAI, India",
  "AI Tools · Accounting — data analytics & automation",
  "State 3rd in Economics — highest marks, state board",
  "MS Dynamics AX Functional Consultant",
  "Diploma in Information Systems Audit (DISA) — ICAI",
];

const TECH = [
  "Microsoft Dynamics AX / 365 Finance & Operations",
  "Tally ERP 9 / TallyPrime",
  "QuickBooks Online & Desktop (USA)",
  "Zoho Books, SAP (exposure)",
  "MS Excel — advanced financial modelling",
];

const MEMBERSHIPS = [
  "ICAI — Institute of Chartered Accountants of India (Fellow)",
  "TiE.ORG — The IndUS Entrepreneurs (Global)",
  "HMA — Hyderabad Management Association",
  "Executive Advisory Board — Multiple Trusts & Societies",
  "ICAI Hyderabad Branch — Active member",
];

const LANGUAGES = [
  { lang: "English", level: "Professional fluency" },
  { lang: "Urdu", level: "Native proficiency" },
  { lang: "Hindi", level: "Full professional" },
  { lang: "Telugu", level: "Conversational" },
];

export default function Standing() {
  return (
    <section id="standing" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 lg:mb-20">
          <div className="lg:col-span-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-smoke mb-5">
              ⌖ &nbsp;§VIII &nbsp;/&nbsp; Standing & Community
            </p>
            <h2 className="font-display text-[40px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tightest font-medium">
              Beyond<br />
              <span className="italic font-light text-amber-dark">
                the engagement,
              </span>
              <br />
              into the field.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[14.5px] leading-[1.6] text-ink/75 prose-j">
              Memberships, advisory seats, faculty roles — the long, slower work
              of staying in the conversation that defines a profession.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 border border-ink/10 mb-24 lg:mb-32">
          {LEADERSHIP.map((l, i) => (
            <div
              key={i}
              className="group bg-bone p-6 lg:p-8 hover:bg-ivory transition-colors duration-500 min-h-[280px] flex flex-col"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-[16px] tracking-tight font-medium text-amber-dark">
                  {l.badge}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-smoke">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-[18px] lg:text-[20px] tracking-tightest leading-[1.2] font-medium mb-3">
                {l.t}
              </h3>
              <p className="text-[12px] leading-[1.6] text-ink/70 prose-j">
                {l.d}
              </p>
            </div>
          ))}
        </div>

        {/* Credentials triple-column */}
        <div>
          <div className="flex items-baseline justify-between mb-8 lg:mb-10">
            <h3 className="font-display text-[26px] lg:text-[36px] tracking-tightest font-medium">
              Qualifications &amp;{" "}
              <span className="italic font-light text-amber-dark">
                technical literacy.
              </span>
            </h3>
            <span className="text-[10px] uppercase tracking-[0.28em] text-smoke font-mono">
              §IX
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-ink/15 border-y border-ink/15">
            <Column title="Academic & Professional" items={QUALS} />
            <Column title="Technical Skills & Platforms" items={TECH} />
            <Column title="Memberships & Affiliations" items={MEMBERSHIPS} />
          </div>

          {/* Languages */}
          <div className="mt-12 lg:mt-16">
            <p className="text-[10px] uppercase tracking-[0.24em] text-smoke mb-5">
              ⌖ &nbsp;Languages
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-ink/15 border-y border-ink/15">
              {LANGUAGES.map((l, i) => (
                <div key={l.lang} className="bg-bone p-5 lg:p-6">
                  <div className="font-mono text-[10px] text-amber-dark tracking-[0.2em] mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display text-[20px] lg:text-[22px] tracking-tightest font-medium leading-none">
                    {l.lang}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-smoke mt-2">
                    {l.level}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Column({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-bone p-6 lg:p-7">
      <p className="text-[10px] uppercase tracking-[0.24em] text-smoke mb-5">
        ⌖ &nbsp;{title}
      </p>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-[12.5px] leading-[1.55] text-ink/85">
            <span className="font-mono text-[10px] text-amber-dark mt-1 tracking-[0.18em] shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-pretty">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
