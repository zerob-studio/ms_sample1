const STATS = [
  { value: '30', suffix: '+', unit: 'Years', sub: 'Since 1995' },
  { value: '20', suffix: '+', unit: 'Studios', sub: 'Recording rooms' },
  { value: '200', suffix: '+', unit: 'Clients', sub: 'AAA & global' },
  { value: '2,000', suffix: '+', unit: 'Titles', sub: 'Shipped to date' },
];

export default function Stats() {
  return (
    <section id="numbers" className="relative bg-elev/40">
      <div className="chapter-strip">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 h-12 flex items-center justify-between font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase">
          <span className="text-ink flex items-center gap-2.5">
            <span className="text-mute">— Ch.02</span>
            <span>/</span>
            <span>Index</span>
          </span>
          <span className="hidden md:inline text-mute truncate">
            Three decades, in numbers
          </span>
          <span className="text-mute">FY 1995 — 2025</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {STATS.map((stat, idx) => (
            <div
              key={stat.unit}
              className="bg-bg p-4 sm:p-6 md:p-8 lg:p-10 min-w-0 overflow-hidden group hover:bg-elev/40 transition-colors duration-700"
            >
              <div className="flex items-baseline justify-between gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-mute mb-5 md:mb-8">
                <span>0{idx + 1}</span>
                <span className="truncate">{stat.unit}</span>
              </div>

              <div className="font-display leading-[0.92] tracking-[-0.04em] text-ink whitespace-nowrap">
                <span className="text-[clamp(1.9rem,7vw,5.6rem)]">
                  {stat.value}
                </span>
                <span className="text-[clamp(1.1rem,3vw,2.6rem)] text-ink-soft/80 align-top ml-1">
                  {stat.suffix}
                </span>
              </div>

              <div className="mt-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.14em] uppercase text-ink-soft min-w-0">
                <span className="h-px w-6 bg-line-2 group-hover:w-12 group-hover:bg-ink/60 transition-all duration-700 shrink-0" />
                <span className="truncate">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
