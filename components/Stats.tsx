const STATS = [
  { value: '30', suffix: '+', unit: 'Years', sub: 'Since 1995' },
  { value: '20', suffix: '+', unit: 'Studios', sub: 'Recording rooms' },
  { value: '200', suffix: '+', unit: 'Clients', sub: 'AAA & global' },
  { value: '2,000', suffix: '+', unit: 'Titles', sub: 'Shipped to date' },
];

export default function Stats() {
  return (
    <section className="relative border-t border-line">
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 py-20 lg:py-24">
        <div className="mb-12 lg:mb-16 grid grid-cols-12 gap-6 font-mono text-[10px] tracking-[0.18em] uppercase">
          <div className="col-span-6 lg:col-span-2 text-ink">— 02 / Index</div>
          <div className="hidden lg:block col-span-7 text-mute">
            Three decades, in numbers
          </div>
          <div className="col-span-6 lg:col-span-3 lg:text-right text-mute">
            FY 1995 — 2025
          </div>
        </div>

        <div className="hairline mb-0" />
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line border-b border-line">
          {STATS.map((stat, idx) => (
            <div key={stat.unit} className="px-2 lg:px-8 py-10 lg:py-14 first:pl-0 last:pr-0 group">
              <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-mute mb-8">
                <span>0{idx + 1} · {stat.unit}</span>
              </div>

              <div className="font-display leading-[0.92] tracking-[-0.04em] text-ink">
                <span className="text-[clamp(3rem,6.5vw,5.6rem)]">
                  {stat.value}
                </span>
                <span className="text-[clamp(1.6rem,3vw,2.6rem)] text-ink-soft/80 align-top ml-1">
                  {stat.suffix}
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.14em] uppercase text-ink-soft">
                <span className="h-px w-6 bg-line-2 group-hover:w-12 group-hover:bg-ink/60 transition-all duration-700" />
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="spectrogram-line mt-0" />
      </div>
    </section>
  );
}
