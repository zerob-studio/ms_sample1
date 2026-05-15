import HeroBackground from './effects/HeroBackground';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden grain pt-16 flex items-center"
    >
      {/* Three.js particle field (desktop) / CSS glow fallback (mobile).
          Replaces the old static gradient — same base color tones. */}
      <HeroBackground />

      <div className="relative w-full mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 py-24 lg:py-28">
        {/* Eyebrow — single quiet line */}
        <div
          className="font-mono text-[10px] lg:text-[11px] tracking-[0.28em] uppercase text-ink-soft mb-10 lg:mb-14 animate-fade-in flex items-center gap-3"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="h-px w-8 bg-line-2" />
          <span>Sound · Localization · Entertainment</span>
        </div>

        {/* Headline */}
        <h1 className="font-display tracking-[-0.025em]">
          <span
            className="block text-[clamp(2.1rem,9vw,9.5rem)] leading-[0.94] text-ink animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            Sound that
          </span>
          <span
            className="block text-[clamp(2.1rem,9vw,9.5rem)] leading-[0.94] italic text-ink animate-fade-up"
            style={{ animationDelay: '0.32s' }}
          >
            ships globally.
          </span>
        </h1>

        {/* Subline + CTAs */}
        <div className="mt-14 lg:mt-20 grid grid-cols-12 gap-y-8 lg:gap-x-12 items-end">
          <div
            className="col-span-12 lg:col-span-6 animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            <p className="font-kr-display text-[15.5px] md:text-[17px] text-ink-soft leading-[2]">
              <span className="text-ink">CD Projekt Red, Larian, Riot, Rockstar.</span>
              <br />
              세계가 신뢰하는 한국의 사운드 — 1995년부터.
            </p>
          </div>

          <div
            className="col-span-12 lg:col-span-5 lg:col-start-8 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: '0.72s' }}
          >
            <a
              href="#works"
              className="group inline-flex items-center gap-3 text-[13px] md:text-[14px] tracking-tight text-bg bg-ink hover:bg-ink-soft px-6 py-3.5 transition-colors duration-500"
            >
              <span>View selected works</span>
              <span className="font-display italic transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#service"
              className="group inline-flex items-center gap-2 text-[13px] md:text-[14px] tracking-tight text-ink hover:text-ink-soft border-b border-line-2 hover:border-ink/60 pb-1.5 transition-colors duration-500"
            >
              <span>About the studio</span>
            </a>
          </div>
        </div>
      </div>

      {/* Origin/founded — bottom-left */}
      <div className="absolute bottom-6 left-4 sm:left-6 lg:left-12 font-mono text-[10px] tracking-[0.22em] uppercase text-mute hidden sm:flex items-center gap-3">
        <span>Seoul · Berlin</span>
        <span className="text-mute/50">/</span>
        <span>Est. 1995</span>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-4 sm:right-6 lg:right-12 hidden md:flex flex-col items-end gap-2 text-mute">
        <span className="font-mono text-[9px] tracking-[0.32em] uppercase">
          scroll
        </span>
        <span className="h-10 w-px bg-gradient-to-b from-ink/40 to-transparent" />
      </div>
    </section>
  );
}
