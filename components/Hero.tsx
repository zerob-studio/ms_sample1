export default function Hero() {
  return (
    <section className="relative h-screen min-h-[760px] w-full overflow-hidden vignette grain">
      {/* Background gradient layers — replicates moody studio lighting */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 35%, rgba(201,168,76,0.18) 0%, rgba(201,168,76,0.04) 35%, transparent 70%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(201,168,76,0.08) 0%, transparent 60%), linear-gradient(180deg, #0a0a0a 0%, #0d0a05 50%, #050505 100%)',
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #c9a84c 1px, transparent 1px), linear-gradient(to bottom, #c9a84c 1px, transparent 1px)',
          backgroundSize: '120px 120px',
        }}
      />

      {/* Gold accent line top */}
      <div className="absolute top-32 left-0 right-0 h-px gold-line opacity-40" />

      <div className="relative h-full mx-auto max-w-[1400px] px-8 lg:px-12 flex flex-col justify-center">
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <span className="h-px w-12 bg-gold" />
          <span className="text-[11px] tracking-widest2 uppercase text-gold/90">
            Since 1995 · Seoul
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.95] tracking-tight">
          <span className="block animate-fade-up text-ink/95" style={{ animationDelay: '0.1s' }}>
            The Art of
          </span>
          <span
            className="block animate-fade-up shimmer-text italic font-medium"
            style={{ animationDelay: '0.25s' }}
          >
            Sound &amp; Story
          </span>
        </h1>

        {/* Korean subtitle */}
        <p
          className="mt-10 max-w-2xl text-lg md:text-xl text-ink/65 leading-relaxed font-kr-display animate-fade-up"
          style={{ animationDelay: '0.5s' }}
        >
          게임, 영상, 그리고 모든 이야기에 숨결을 불어넣습니다.
          <br />
          30년의 장인정신으로 빚어낸, 사운드의 미학.
        </p>

        {/* CTA */}
        <div
          className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href="#works"
            className="group inline-flex items-center gap-3 text-[13px] tracking-[0.3em] uppercase text-bg bg-gold px-8 py-4 hover:bg-gold-light transition-colors duration-500"
          >
            View Works
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#service"
            className="text-[13px] tracking-[0.3em] uppercase text-ink/80 hover:text-gold transition-colors duration-300 border-b border-gold/30 hover:border-gold pb-1"
          >
            Our Services
          </a>
        </div>

        {/* Bottom row */}
        <div className="absolute bottom-12 left-8 lg:left-12 right-8 lg:right-12 flex items-end justify-between text-[11px] tracking-widest2 uppercase text-ink/45">
          <div className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: '1s' }}>
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span>Now Recording — Stage A</span>
          </div>
          <div className="hidden md:flex items-center gap-8 animate-fade-in" style={{ animationDelay: '1s' }}>
            <span>Sound Design</span>
            <span className="text-gold">/</span>
            <span>Localization</span>
            <span className="text-gold">/</span>
            <span>Entertainment</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-ink/40">
        <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
