const WORKS = [
  {
    title: "Baldur's Gate 3",
    category: 'Sound · Localization',
    year: '2023',
    palette: ['#3b1810', '#7a2e16', '#c9a84c'],
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    title: 'Cyberpunk 2077',
    category: 'KR Voice Direction',
    year: '2020',
    palette: ['#0e1c2e', '#1f4068', '#fbbf24'],
    span: '',
  },
  {
    title: 'Stellar Blade',
    category: 'Original Score',
    year: '2024',
    palette: ['#1a0f1f', '#3a1d4a', '#e0c378'],
    span: '',
  },
  {
    title: 'The Witcher 3',
    category: 'Localization · Dubbing',
    year: '2015',
    palette: ['#0a1410', '#1a2e22', '#c9a84c'],
    span: 'lg:col-span-2',
  },
  {
    title: 'Final Fantasy XVI',
    category: 'Sound Design',
    year: '2023',
    palette: ['#1c0a0a', '#3d1414', '#f5e7b3'],
    span: '',
  },
  {
    title: 'Black Myth: Wukong',
    category: 'KR Voice & Mixing',
    year: '2024',
    palette: ['#2a1a08', '#5a3818', '#c9a84c'],
    span: '',
  },
];

function ArtCard({ work, idx }: { work: (typeof WORKS)[number]; idx: number }) {
  const [c1, c2, accent] = work.palette;
  return (
    <article
      className={`group relative overflow-hidden border border-gold/10 hover:border-gold/40 transition-colors duration-700 cursor-pointer ${work.span} aspect-[4/3]`}
    >
      {/* Cinematic gradient artwork stand-in */}
      <div
        className="absolute inset-0 transition-transform duration-[1.6s] group-hover:scale-105"
        style={{
          background: `radial-gradient(ellipse 70% 60% at 30% 35%, ${accent}30 0%, transparent 55%), linear-gradient(135deg, ${c1} 0%, ${c2} 60%, ${c1} 100%)`,
        }}
      />

      {/* Atmosphere overlay */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 40%), radial-gradient(circle at 80% 20%, rgba(0,0,0,0.5) 0%, transparent 60%)',
        }}
      />

      {/* Bottom dark gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Border accent on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-gold/30 transition-colors duration-700 m-2" />

      {/* Index badge */}
      <div className="absolute top-5 left-5 text-[10px] tracking-widest2 uppercase text-ink/70 backdrop-blur-sm bg-black/30 px-2.5 py-1">
        Work / {String(idx + 1).padStart(2, '0')}
      </div>

      {/* Year top right */}
      <div className="absolute top-5 right-5 text-[11px] tracking-widest2 uppercase text-gold">
        {work.year}
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] tracking-widest2 uppercase text-gold/85 mb-2">
              {work.category}
            </div>
            <h3 className="font-display text-2xl lg:text-3xl text-ink/95 leading-tight">
              {work.title}
            </h3>
          </div>
          <span className="shrink-0 text-gold/70 group-hover:text-gold group-hover:translate-x-1 transition-all duration-500">
            →
          </span>
        </div>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="works" className="relative py-32 lg:py-40 bg-[#080808] border-y border-gold/10">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-widest2 uppercase text-gold">
              — Selected Works
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink/95 leading-tight">
              Stories we<br />
              <span className="italic text-gold">helped tell</span>.
            </h2>
          </div>
          <a
            href="#"
            className="self-start md:self-end text-[12px] tracking-widest2 uppercase text-ink/70 hover:text-gold border-b border-gold/30 hover:border-gold pb-1 transition-colors duration-300"
          >
            Full Portfolio →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[minmax(0,1fr)]">
          {WORKS.map((work, idx) => (
            <ArtCard key={work.title} work={work} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
