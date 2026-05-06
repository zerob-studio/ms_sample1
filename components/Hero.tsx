const EQ_BARS = Array.from({ length: 64 }, (_, i) => i);

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden grain pt-16">
      {/* very subtle ambience, no glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0a0a0b 0%, #0c0c0d 60%, #0a0a0b 100%)',
        }}
      />

      {/* Top metadata strip */}
      <div className="absolute top-16 left-0 right-0 border-b border-line">
        <div className="mx-auto max-w-[1480px] px-6 lg:px-12 h-9 flex items-center justify-between font-mono text-[10px] tracking-[0.14em] uppercase text-mute">
          <div className="flex items-center gap-6">
            <span className="text-ink/85 flex items-center gap-2">
              <span className="rec-dot" />
              REC · Studio A
            </span>
            <span className="hidden md:inline">Seoul · 37.5°N 127.0°E</span>
            <span className="hidden lg:inline">Berlin · 52.5°N 13.4°E</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden md:inline">192 kHz · 24 bit</span>
            <span className="hidden md:inline">Dolby Atmos / 5.1.4</span>
            <span>ISO 17100</span>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12 pt-28 lg:pt-36 pb-24 lg:pb-36">
        {/* Top eyebrow row */}
        <div
          className="grid grid-cols-12 gap-6 mb-12 lg:mb-20 animate-fade-in"
          style={{ animationDelay: '0.05s' }}
        >
          <div className="col-span-12 lg:col-span-2 font-mono text-[10px] tracking-[0.18em] uppercase text-mute">
            <div>Issue 030</div>
            <div className="text-ink/60">1995 — 2025</div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/70">
              Sound · Localization · Entertainment
            </div>
          </div>
          <div className="hidden lg:flex col-span-3 items-end justify-end">
            <EqVisualizer />
          </div>
        </div>

        {/* Main editorial headline */}
        <h1 className="font-display tracking-[-0.02em]">
          <span
            className="block text-[clamp(3.2rem,11.5vw,12.5rem)] leading-[0.94] text-ink animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            Sound that
          </span>
          <span
            className="block text-[clamp(3.2rem,11.5vw,12.5rem)] leading-[0.94] italic text-ink animate-fade-up pl-[clamp(2rem,10vw,11rem)]"
            style={{ animationDelay: '0.32s' }}
          >
            ships globally.
          </span>
        </h1>

        {/* Subline + CTA row */}
        <div className="mt-14 lg:mt-20 grid grid-cols-12 gap-8">
          <div
            className="col-span-12 lg:col-span-5 lg:col-start-2 animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            <p className="font-kr-display text-[17px] md:text-[18px] text-ink-soft leading-[1.95]">
              <span className="text-ink">CD Projekt Red, Larian, Riot, Rockstar.</span>
              <br />
              세계가 신뢰하는 한국의 사운드 — 1995년부터,
              <br />
              서울과 베를린의 두 스튜디오에서.
            </p>
          </div>

          <div
            className="col-span-12 lg:col-span-5 flex items-end justify-start lg:justify-end gap-10 animate-fade-up"
            style={{ animationDelay: '0.72s' }}
          >
            <a
              href="#works"
              className="group inline-flex items-baseline gap-3 text-[15px] text-ink border-b border-ink/40 hover:border-ink pb-2 transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-mute group-hover:text-ink/70 transition-colors">
                01
              </span>
              <span>View selected works</span>
              <span className="font-display italic transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#service"
              className="group inline-flex items-baseline gap-3 text-[15px] text-ink-soft hover:text-ink transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-mute group-hover:text-ink/70 transition-colors">
                02
              </span>
              <span>The Studio</span>
            </a>
          </div>
        </div>

        {/* Bottom technical strip */}
        <div className="mt-24 lg:mt-32 pt-8 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
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
              <div className="font-display text-3xl lg:text-4xl text-ink leading-none mb-2">
                {item.v}
              </div>
              <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-soft/70">
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
    <div className="flex items-end gap-[2px] h-9" aria-hidden>
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
