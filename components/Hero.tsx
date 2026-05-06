const EQ_BARS = Array.from({ length: 48 }, (_, i) => i);

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden grain pt-16">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0a0a0b 0%, #0c0c0d 60%, #0a0a0b 100%)',
        }}
      />

      {/* Top metadata strip — visible on mobile too, but fewer items */}
      <div className="absolute top-16 left-0 right-0 border-b border-line-2 bg-bg/60 backdrop-blur-sm">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 h-10 flex items-center justify-between font-mono text-[10px] tracking-[0.16em] uppercase text-mute gap-4">
          <span className="text-ink flex items-center gap-2 shrink-0">
            <span className="rec-dot" />
            REC · Studio A
          </span>
          <span className="hidden sm:inline truncate">Seoul · Berlin</span>
          <span className="hidden lg:inline truncate">192 kHz · 24 bit</span>
          <span className="hidden md:inline truncate">Dolby Atmos / 5.1.4</span>
          <span className="shrink-0">ISO 17100</span>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12 pt-24 lg:pt-36 pb-20 lg:pb-32">
        {/* Eyebrow row */}
        <div
          className="grid grid-cols-12 gap-6 mb-10 lg:mb-16 animate-fade-in items-end"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="col-span-6 lg:col-span-2 font-mono text-[10px] tracking-[0.18em] uppercase text-mute">
            <div>Issue 030</div>
            <div className="text-ink/60">1995 — 2025</div>
          </div>
          <div className="col-span-12 lg:col-span-7 order-3 lg:order-2">
            <div className="font-mono text-[10px] lg:text-[11px] tracking-[0.22em] uppercase text-ink/80">
              Sound · Localization · Entertainment
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3 flex items-end justify-end order-2 lg:order-3">
            <EqVisualizer />
          </div>
        </div>

        {/* Main headline — reduced indent on mobile */}
        <h1 className="font-display tracking-[-0.02em]">
          <span
            className="block text-[clamp(2.6rem,11vw,12rem)] leading-[0.94] text-ink animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            Sound that
          </span>
          <span
            className="block text-[clamp(2.6rem,11vw,12rem)] leading-[0.94] italic text-ink animate-fade-up pl-[clamp(0.5rem,8vw,10rem)]"
            style={{ animationDelay: '0.32s' }}
          >
            ships globally.
          </span>
        </h1>

        {/* Subline + CTA */}
        <div className="mt-12 lg:mt-20 grid grid-cols-12 gap-6 lg:gap-8">
          <div
            className="col-span-12 lg:col-span-5 lg:col-start-2 animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            <p className="font-kr-display text-[16px] md:text-[17px] lg:text-[18px] text-ink-soft leading-[1.95]">
              <span className="text-ink">CD Projekt Red, Larian, Riot, Rockstar.</span>
              <br />
              세계가 신뢰하는 한국의 사운드 — 1995년부터,
              <br />
              서울과 베를린의 두 스튜디오에서.
            </p>
          </div>

          <div
            className="col-span-12 lg:col-span-5 flex flex-wrap items-end justify-start lg:justify-end gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: '0.72s' }}
          >
            <a
              href="#works"
              className="group inline-flex items-center gap-3 text-[13px] md:text-[14px] tracking-tight text-bg bg-ink hover:bg-ink-soft px-5 sm:px-6 py-3 sm:py-3.5 transition-colors duration-500"
            >
              <span>View selected works</span>
              <span className="font-display italic transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#service"
              className="group inline-flex items-center gap-2 text-[13px] md:text-[14px] tracking-tight text-ink border border-line-2 hover:border-ink/60 px-5 sm:px-6 py-3 sm:py-3.5 transition-colors duration-500"
            >
              <span>About the studio</span>
              <span className="opacity-60 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </div>
        </div>

        {/* Bottom technical strip */}
        <div className="mt-20 lg:mt-28 pt-8 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {[
            { k: 'Years', v: '30+', sub: 'Since 1995' },
            { k: 'Languages', v: '30+', sub: 'KR · EN · JP · CN · DE …' },
            { k: 'Titles', v: '2,000+', sub: 'Shipped worldwide' },
            { k: 'Partners', v: '200+', sub: 'AAA studios & publishers' },
          ].map((item, idx) => (
            <div
              key={item.k}
              className="animate-fade-in"
              style={{ animationDelay: `${0.9 + idx * 0.06}s` }}
            >
              <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-mute mb-2">
                — {item.k}
              </div>
              <div className="font-display text-3xl md:text-4xl text-ink leading-none mb-2">
                {item.v}
              </div>
              <div className="font-mono text-[9px] md:text-[10px] tracking-[0.12em] uppercase text-ink-soft/70 truncate">
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 lg:right-12 hidden md:flex flex-col items-end gap-2 text-mute">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase">
          scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-ink/40 to-transparent" />
      </div>
    </section>
  );
}

function EqVisualizer() {
  return (
    <div className="flex items-end gap-[2px] h-8 md:h-9" aria-hidden>
      {EQ_BARS.map((i) => (
        <span
          key={i}
          className="eq-bar"
          style={{
            height: '100%',
            animationDelay: `${(i % 12) * 0.07}s`,
            animationDuration: `${1.1 + (i % 5) * 0.15}s`,
            opacity: 0.35 + ((i * 7) % 10) / 22,
          }}
        />
      ))}
    </div>
  );
}
