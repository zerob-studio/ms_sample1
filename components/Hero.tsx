export default function Hero() {
  return (
    <section className="relative h-screen min-h-[820px] w-full overflow-hidden vignette grain">
      {/* Atmospheric lighting */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 65% 50% at 50% 30%, rgba(201,168,76,0.20) 0%, rgba(201,168,76,0.05) 35%, transparent 70%), radial-gradient(ellipse 50% 40% at 15% 90%, rgba(201,168,76,0.08) 0%, transparent 60%), linear-gradient(180deg, #0a0a0a 0%, #0e0a05 55%, #060606 100%)',
        }}
      />

      {/* Editorial grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #c9a84c 1px, transparent 1px), linear-gradient(to bottom, #c9a84c 1px, transparent 1px)',
          backgroundSize: '160px 160px',
        }}
      />

      {/* Top hairline */}
      <div className="absolute top-32 left-0 right-0 h-px gold-line opacity-50" />

      <div className="relative h-full mx-auto max-w-[1440px] px-8 lg:px-14 grid grid-cols-12 gap-6 items-center">
        {/* Side index — editorial touch */}
        <div className="hidden lg:block col-span-1 self-stretch relative">
          <div className="absolute top-1/2 -translate-y-1/2 -left-2 -rotate-90 origin-left whitespace-nowrap text-[10px] tracking-[0.5em] uppercase text-ink/35 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Issue 030 — 1995 / 2025
          </div>
        </div>

        {/* Main column */}
        <div className="col-span-12 lg:col-span-9">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-4 mb-10 animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="h-px w-14 bg-gold" />
            <span className="text-[10px] tracking-[0.45em] uppercase text-gold/95">
              Sound · Localization · Entertainment
            </span>
          </div>

          {/* Tagline */}
          <p
            className="font-display text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-ink/55 mb-8 animate-fade-up"
            style={{ animationDelay: '0.18s' }}
          >
            — Boost Your Play
          </p>

          {/* Main headline */}
          <h1 className="font-display leading-[0.9] tracking-[-0.02em]">
            <span
              className="block text-[clamp(3.5rem,11vw,11.5rem)] text-ink/95 animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              Where craft
            </span>
            <span
              className="block text-[clamp(3.5rem,11vw,11.5rem)] animate-fade-up shimmer-text italic font-medium pl-[clamp(2rem,8vw,9rem)]"
              style={{ animationDelay: '0.4s' }}
            >
              meets play.
            </span>
          </h1>

          {/* Korean subtitle */}
          <p
            className="mt-12 max-w-xl text-[17px] md:text-lg text-ink/60 leading-[1.85] font-kr-display animate-fade-up"
            style={{ animationDelay: '0.6s' }}
          >
            세계 유수의 제작 파트너들과 함께,
            <br />
            <span className="text-ink/85">신뢰의 발자취를 새기다.</span>
          </p>

          {/* CTAs */}
          <div
            className="mt-12 flex flex-wrap items-center gap-8 animate-fade-up"
            style={{ animationDelay: '0.75s' }}
          >
            <a
              href="#works"
              className="group inline-flex items-center gap-3 text-[12px] tracking-[0.32em] uppercase text-bg bg-gold px-9 py-4 hover:bg-gold-light transition-colors duration-500"
            >
              View Selected Works
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </a>
            <a
              href="#service"
              className="text-[12px] tracking-[0.3em] uppercase text-ink/85 hover:text-gold transition-colors duration-300 border-b border-gold/30 hover:border-gold pb-1.5"
            >
              The Studio
            </a>
          </div>
        </div>

        {/* Bottom meta */}
        <div className="absolute bottom-12 left-8 lg:left-14 right-8 lg:right-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-[10px] tracking-[0.35em] uppercase text-ink/50">
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <div className="text-gold/70 mb-1.5">— Origin</div>
            <div className="text-ink/80 font-display tracking-[0.2em]">Seoul · Berlin</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.05s' }}>
            <div className="text-gold/70 mb-1.5">— Founded</div>
            <div className="text-ink/80 font-display tracking-[0.2em]">1995</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <div className="text-gold/70 mb-1.5">— Languages</div>
            <div className="text-ink/80 font-display tracking-[0.2em]">30+</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '1.15s' }}>
            <div className="text-gold/70 mb-1.5">— Status</div>
            <div className="text-ink/80 font-display tracking-[0.2em] flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Now Recording
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-8 lg:right-14 hidden md:flex flex-col items-center gap-2 text-ink/35">
        <span className="text-[9px] tracking-[0.45em] uppercase">Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
