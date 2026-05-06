export default function About() {
  return (
    <section id="about" className="relative py-32 lg:py-44 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Section index */}
          <div className="col-span-12 lg:col-span-2">
            <div className="text-[10px] tracking-[0.45em] uppercase text-gold/80 mb-3">
              Chapter 01
            </div>
            <div className="font-display text-7xl gold-text leading-none">
              ※
            </div>
            <div className="mt-6 text-[10px] tracking-[0.45em] uppercase text-ink/40">
              The House
            </div>
          </div>

          {/* Headline */}
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.75rem)] leading-[0.98] tracking-[-0.02em]">
              <span className="text-ink/95">A studio for</span>
              <br />
              <span className="italic gold-text">global storytellers</span>
              <span className="text-ink/95">,</span>
              <br />
              <span className="text-ink/95">since 1995.</span>
            </h2>
          </div>

          {/* Body copy */}
          <div className="col-span-12 lg:col-span-4 lg:pt-4">
            <p className="font-kr-display text-[16px] text-ink/65 leading-[2] mb-8">
              MUSAI는 사운드, 로컬라이제이션, 엔터테인먼트의 경계를 잇는
              종합 미디어 프로덕션입니다. CD Projekt Red, Larian, Riot,
              Rockstar 등 세계 유수의 파트너들과 작품의 톤앤매너를 함께
              완성해 왔습니다.
            </p>
            <p className="text-[14px] text-ink/50 leading-[1.85]">
              30 years of voice, 200+ trusted partners, two studios in
              Seoul and Berlin. We bring craftsmanship into every play.
            </p>
            <a
              href="#service"
              className="mt-10 inline-flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-gold hover:text-gold-light border-b border-gold/30 hover:border-gold-light pb-1.5 transition-colors"
            >
              Our Approach <span>→</span>
            </a>
          </div>
        </div>

        {/* Pull quote */}
        <div className="mt-24 lg:mt-32 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-start-3 lg:col-span-9">
            <div className="border-l border-gold/40 pl-8 lg:pl-12">
              <p className="font-display italic text-2xl md:text-3xl lg:text-4xl text-ink/85 leading-[1.4] tracking-[-0.01em]">
                <span className="gold-text not-italic font-medium">"</span>
                We don't dub. We translate emotion across cultures and
                preserve the original creative intent — that's the bar we
                hold for every project that ships globally.
                <span className="gold-text not-italic font-medium">"</span>
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] tracking-[0.35em] uppercase text-ink/55">
                  MUSAI Studio · Voice Direction
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
