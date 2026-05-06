const WORKS = [
  {
    title: "Baldur's Gate 3",
    publisher: 'Larian Studios',
    category: 'Sound · Localization',
    year: '2023',
    runtime: '01:42:18',
    channels: '5.1.4',
    palette: ['#1c1410', '#3a2418'],
    span: 'lg:col-span-2 lg:row-span-2',
    featured: true,
  },
  {
    title: 'Cyberpunk 2077',
    publisher: 'CD Projekt Red',
    category: 'KR Voice Direction',
    year: '2023',
    runtime: '00:58:02',
    channels: 'Atmos',
    palette: ['#0d141c', '#1b2536'],
    span: '',
  },
  {
    title: 'Red Dead Redemption 2',
    publisher: 'Rockstar Games',
    category: 'Localization',
    year: '2018',
    runtime: '01:22:40',
    channels: '7.1',
    palette: ['#1a1009', '#2e1c0e'],
    span: '',
  },
  {
    title: 'The Witcher 3',
    publisher: 'CD Projekt Red',
    category: 'Dubbing · Voice Direction',
    year: '2015',
    runtime: '01:14:55',
    channels: '5.1',
    palette: ['#0c1410', '#19241c'],
    span: 'lg:col-span-2',
  },
  {
    title: 'League of Legends',
    publisher: 'Riot Games',
    category: 'Voice & Audio',
    year: 'Ongoing',
    runtime: '—',
    channels: 'Stereo',
    palette: ['#0a1426', '#172a4a'],
    span: '',
  },
  {
    title: 'Call of Duty: MW',
    publisher: 'Activision',
    category: 'KR Voice & Mixing',
    year: '2019',
    runtime: '00:46:11',
    channels: 'Atmos',
    palette: ['#15110e', '#28201a'],
    span: '',
  },
  {
    title: 'Wuthering Waves',
    publisher: 'Kuro Games',
    category: 'Voice Direction',
    year: '2024',
    runtime: '00:38:24',
    channels: '5.1',
    palette: ['#140d1a', '#241638'],
    span: '',
  },
  {
    title: 'Borderlands 4',
    publisher: 'Gearbox Software',
    category: 'KR Localization',
    year: '2025',
    runtime: '—',
    channels: 'Atmos',
    palette: ['#1a1208', '#2e2010'],
    span: '',
  },
];

function WaveformSvg({ seed }: { seed: number }) {
  // Deterministic pseudo waveform — looks like a real spectro
  const rand = (i: number) => {
    const x = Math.sin(i * 9301 + seed * 49297) * 233280;
    return x - Math.floor(x);
  };
  const bars = 56;
  return (
    <svg
      className="w-full h-full"
      viewBox={`0 0 ${bars * 3} 40`}
      preserveAspectRatio="none"
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => {
        const h = 4 + rand(i) * 32;
        return (
          <rect
            key={i}
            x={i * 3}
            y={(40 - h) / 2}
            width={1.4}
            height={h}
            fill="rgba(237,233,222,0.55)"
          />
        );
      })}
    </svg>
  );
}

function ArtCard({ work, idx }: { work: (typeof WORKS)[number]; idx: number }) {
  const [c1, c2] = work.palette;
  return (
    <article
      className={`group relative overflow-hidden cursor-pointer ${work.span} ${
        work.featured ? 'aspect-square lg:aspect-auto' : 'aspect-[4/3]'
      } border border-line hover:border-line-2 transition-colors duration-700`}
    >
      {/* Cinematic dark thumbnail */}
      <div
        className="absolute inset-0 transition-transform duration-[1.8s] ease-out group-hover:scale-[1.03]"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${c2} 0%, ${c1} 60%, #08080a 100%)`,
        }}
      />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      {/* Top metadata strip */}
      <div className="absolute top-0 left-0 right-0 p-4 lg:p-5 flex items-start justify-between font-mono text-[10px] tracking-[0.16em] uppercase">
        <span className="text-ink-soft">
          № {String(idx + 1).padStart(2, '0')}
        </span>
        <span className="text-ink-soft flex items-center gap-2">
          {work.featured && (
            <span className="border border-ink/30 px-2 py-0.5 text-[9px] tracking-[0.2em]">
              Featured
            </span>
          )}
          <span>{work.year}</span>
        </span>
      </div>

      {/* Center waveform */}
      <div className="absolute inset-x-8 lg:inset-x-12 top-1/2 -translate-y-1/2 opacity-30 group-hover:opacity-55 transition-opacity duration-700">
        <WaveformSvg seed={idx + 1} />
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-5 lg:p-7">
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-soft mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          <span>{work.category}</span>
          <span className="text-mute">·</span>
          <span>{work.channels}</span>
          {work.runtime !== '—' && (
            <>
              <span className="text-mute">·</span>
              <span>{work.runtime}</span>
            </>
          )}
        </div>
        <h3
          className={`font-display text-ink leading-[1.05] tracking-[-0.01em] mb-1 ${
            work.featured
              ? 'text-3xl lg:text-5xl'
              : 'text-2xl lg:text-3xl'
          }`}
        >
          {work.title}
        </h3>
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute mt-2 flex items-center justify-between">
          <span>{work.publisher}</span>
          <span className="text-ink/50 group-hover:text-ink group-hover:translate-x-1 transition-all duration-500">
            →
          </span>
        </p>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section
      id="works"
      className="relative py-28 lg:py-40 bg-elev/40 border-t border-line"
    >
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="mb-12 lg:mb-16 grid grid-cols-12 gap-6 font-mono text-[10px] tracking-[0.18em] uppercase">
          <div className="col-span-6 lg:col-span-2 text-ink">— 04 / Works</div>
          <div className="hidden lg:block col-span-7 text-mute">
            Selected titles · 1995 — 2025
          </div>
          <div className="col-span-6 lg:col-span-3 lg:text-right text-mute">
            08 of 2,000+
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-8 lg:col-start-2">
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.02em] text-ink">
              Stories the world{' '}
              <span className="italic">already plays.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 flex flex-col items-start lg:items-end gap-5 justify-end">
            <p className="font-kr text-[14px] text-ink-soft leading-[1.85] lg:text-right max-w-xs">
              AAA 게임부터 글로벌 애니메이션까지. 가장 까다로운 파트너들이 가장
              깊이 신뢰한 결과물입니다.
            </p>
            <a
              href="#"
              className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink border-b border-ink/30 hover:border-ink pb-1.5 transition-colors"
            >
              Full portfolio →
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
