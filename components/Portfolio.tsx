const WORKS = [
  {
    title: "Baldur's Gate 3",
    publisher: 'Larian Studios',
    category: 'Sound · Localization',
    year: '2023',
    palette: ['#3b1810', '#7a2e16', '#c9a84c'],
    span: 'lg:col-span-2 lg:row-span-2',
    featured: true,
  },
  {
    title: 'Cyberpunk 2077',
    publisher: 'CD Projekt Red',
    category: 'KR Voice Direction',
    year: '2023',
    palette: ['#0e1c2e', '#1f4068', '#fbbf24'],
    span: '',
  },
  {
    title: 'Red Dead Redemption 2',
    publisher: 'Rockstar Games',
    category: 'Localization',
    year: '2018',
    palette: ['#2c1408', '#5e2c10', '#e0c378'],
    span: '',
  },
  {
    title: 'The Witcher 3',
    publisher: 'CD Projekt Red',
    category: 'Dubbing · Voice Direction',
    year: '2015',
    palette: ['#0a1410', '#1a2e22', '#c9a84c'],
    span: 'lg:col-span-2',
  },
  {
    title: 'League of Legends',
    publisher: 'Riot Games',
    category: 'Voice & Audio',
    year: 'Ongoing',
    palette: ['#0c1830', '#1d3673', '#f5e7b3'],
    span: '',
  },
  {
    title: 'Call of Duty: Modern Warfare',
    publisher: 'Activision',
    category: 'KR Voice & Mixing',
    year: '2019',
    palette: ['#1a1614', '#3a2820', '#c9a84c'],
    span: '',
  },
  {
    title: 'Wuthering Waves',
    publisher: 'Kuro Games',
    category: 'Voice Direction',
    year: '2024',
    palette: ['#1a0f1f', '#3a1d4a', '#c9a84c'],
    span: '',
  },
  {
    title: 'Borderlands 4',
    publisher: 'Gearbox Software',
    category: 'KR Localization',
    year: '2025',
    palette: ['#2a1c08', '#6a4818', '#e0c378'],
    span: '',
  },
];

function ArtCard({ work, idx }: { work: (typeof WORKS)[number]; idx: number }) {
  const [c1, c2, accent] = work.palette;
  return (
    <article
      className={`group relative overflow-hidden cursor-pointer ${work.span} aspect-[4/3]`}
    >
      {/* Cinematic gradient artwork stand-in */}
      <div
        className="absolute inset-0 transition-transform duration-[2s] group-hover:scale-[1.04]"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 30% 35%, ${accent}30 0%, transparent 55%), linear-gradient(135deg, ${c1} 0%, ${c2} 60%, ${c1} 100%)`,
        }}
      />

      {/* Atmospheric grain */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.5) 0%, transparent 60%)',
        }}
      />

      {/* Bottom dark gradient */}
      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />

      {/* Editorial border */}
      <div className="absolute inset-3 border border-transparent group-hover:border-gold/35 transition-colors duration-700 pointer-events-none" />

      {/* Top corner */}
      <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
        <span className="text-[9px] tracking-[0.4em] uppercase text-ink/85 backdrop-blur-sm bg-black/35 px-2.5 py-1.5">
          № {String(idx + 1).padStart(2, '0')} / Selected
        </span>
        {work.featured && (
          <span className="text-[9px] tracking-[0.4em] uppercase text-bg bg-gold px-2.5 py-1.5">
            Featured
          </span>
        )}
      </div>

      {/* Year top-right when not featured */}
      {!work.featured && (
        <div className="absolute top-5 right-5 text-[10px] tracking-[0.4em] uppercase text-gold">
          {work.year}
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[9px] tracking-[0.4em] uppercase text-gold/85 mb-2">
              {work.category} · {work.year}
            </div>
            <h3 className="font-display text-2xl lg:text-3xl text-ink/95 leading-[1.05] tracking-[-0.01em] mb-1">
              {work.title}
            </h3>
            <p className="font-kr-display text-[11px] text-ink/55 tracking-wider">
              {work.publisher}
            </p>
          </div>
          <span className="shrink-0 text-gold/70 group-hover:text-gold group-hover:translate-x-1 transition-all duration-500 text-xl">
            →
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="works" className="relative py-32 lg:py-44 bg-[#070707] border-y border-gold/15">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14">
        <div className="mb-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <span className="text-[10px] tracking-[0.45em] uppercase text-gold/80">
              Chapter 04
            </span>
            <div className="mt-3 text-[10px] tracking-[0.45em] uppercase text-ink/40">
              Selected Works
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.02em]">
              Stories the world
              <br />
              <span className="italic gold-text">already plays</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:pt-3 flex flex-col gap-6">
            <p className="font-kr-display text-[14px] text-ink/55 leading-[1.85]">
              AAA 게임부터 글로벌 애니메이션까지.
              가장 까다로운 파트너들이 가장 깊이 신뢰한 결과물입니다.
            </p>
            <a
              href="#"
              className="self-start text-[11px] tracking-[0.32em] uppercase text-ink/75 hover:text-gold border-b border-gold/30 hover:border-gold pb-1.5 transition-colors"
            >
              Full Portfolio →
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[minmax(0,1fr)]">
          {WORKS.map((work, idx) => (
            <ArtCard key={work.title} work={work} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
