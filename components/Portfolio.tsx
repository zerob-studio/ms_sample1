import SectionHeader from './SectionHeader';

const WORKS = [
  {
    title: "Baldur's Gate 3",
    publisher: 'Larian Studios',
    category: 'Sound · Localization',
    year: '2023',
    runtime: '01:42:18',
    channels: '5.1.4',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/library_hero.jpg',
    fallback: ['#1c1410', '#3a2418'],
    featured: true,
  },
  {
    title: 'Cyberpunk 2077',
    publisher: 'CD Projekt Red',
    category: 'KR Voice Direction',
    year: '2023',
    runtime: '00:58:02',
    channels: 'Atmos',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/library_hero.jpg',
    fallback: ['#0d141c', '#1b2536'],
  },
  {
    title: 'Red Dead Redemption 2',
    publisher: 'Rockstar Games',
    category: 'Localization',
    year: '2018',
    runtime: '01:22:40',
    channels: '7.1',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/library_hero.jpg',
    fallback: ['#1a1009', '#2e1c0e'],
  },
  {
    title: 'The Witcher 3',
    publisher: 'CD Projekt Red',
    category: 'Dubbing · Voice Direction',
    year: '2015',
    runtime: '01:14:55',
    channels: '5.1',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/library_hero.jpg',
    fallback: ['#0c1410', '#19241c'],
  },
  {
    title: 'League of Legends',
    publisher: 'Riot Games',
    category: 'Voice & Audio',
    year: 'Ongoing',
    runtime: '—',
    channels: 'Stereo',
    cover: null,
    fallback: ['#0a1426', '#172a4a'],
  },
  {
    title: 'Modern Warfare',
    publisher: 'Activision',
    category: 'KR Voice & Mixing',
    year: '2019',
    runtime: '00:46:11',
    channels: 'Atmos',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/library_hero.jpg',
    fallback: ['#15110e', '#28201a'],
  },
  {
    title: 'Wuthering Waves',
    publisher: 'Kuro Games',
    category: 'Voice Direction',
    year: '2024',
    runtime: '00:38:24',
    channels: '5.1',
    cover: null,
    fallback: ['#140d1a', '#241638'],
  },
  {
    title: 'Borderlands',
    publisher: 'Gearbox Software',
    category: 'KR Localization',
    year: '2025',
    runtime: '—',
    channels: 'Atmos',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/397540/library_hero.jpg',
    fallback: ['#1a1208', '#2e2010'],
  },
];

function ArtCard({ work, idx }: { work: (typeof WORKS)[number]; idx: number }) {
  const [c1, c2] = work.fallback;
  return (
    <article
      className="group relative overflow-hidden cursor-pointer aspect-[4/5] sm:aspect-[4/3] bg-bg"
    >
      {/* Real cover image with cinematic filter.
          object-position: 50% 35% biases toward the upper-middle where game
          key art typically places character/logo focal points. */}
      {work.cover ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={work.cover}
          alt={work.title}
          loading="lazy"
          className="poster-cover absolute inset-0 w-full h-full object-cover transition-transform duration-[1.8s] ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: '50% 35%' }}
        />
      ) : (
        <div
          className="absolute inset-0 transition-transform duration-[1.8s] ease-out group-hover:scale-[1.04]"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${c2} 0%, ${c1} 60%, #08080a 100%)`,
          }}
        />
      )}

      {/* Vignette / readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30" />
      <div className="absolute inset-0 bg-bg/15" />

      {/* Top metadata strip */}
      <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 lg:p-5 flex items-start justify-between font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase z-10 gap-2">
        <span className="text-ink-soft shrink-0">
          № {String(idx + 1).padStart(2, '0')}
        </span>
        <span className="text-ink-soft flex items-center gap-2 shrink-0">
          {work.featured && (
            <span className="border border-ink/40 bg-bg/40 backdrop-blur-sm px-2 py-0.5 text-[8px] sm:text-[9px] tracking-[0.2em] text-ink">
              Featured
            </span>
          )}
          <span>{work.year}</span>
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-5 lg:p-7 z-10">
        <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-ink-soft mb-2 sm:mb-3 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="truncate">{work.category}</span>
          <span className="text-mute hidden sm:inline">·</span>
          <span className="hidden sm:inline">{work.channels}</span>
          {work.runtime !== '—' && (
            <>
              <span className="text-mute hidden md:inline">·</span>
              <span className="hidden md:inline">{work.runtime}</span>
            </>
          )}
        </div>
        <h3
          className="font-display text-ink leading-[1.05] tracking-[-0.01em] mb-1.5 sm:mb-2 text-base sm:text-xl lg:text-2xl"
          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.6)' }}
        >
          {work.title}
        </h3>
        <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-ink-soft mt-1.5 sm:mt-2 flex items-center justify-between gap-2">
          <span className="truncate">{work.publisher}</span>
          <span className="shrink-0 text-ink/70 group-hover:text-ink group-hover:translate-x-1 transition-all duration-500">
            →
          </span>
        </p>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="works" className="relative bg-elev/30">
      <SectionHeader
        no="04"
        label="Works"
        caption="Selected titles · 1995 — 2025"
        meta="08 of 2,000+"
        headline={
          <>
            Stories the world{' '}
            <span className="italic">already plays.</span>
          </>
        }
        description={
          <>
            AAA 게임부터 글로벌 애니메이션까지. 가장 까다로운 파트너들이
            가장 깊이 신뢰한 결과물입니다.
          </>
        }
        actions={
          <a
            href="#"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink border-b border-ink/30 hover:border-ink pb-1.5 transition-colors"
          >
            Full portfolio →
          </a>
        }
      />

      {/* Full-bleed grid — no horizontal padding so cards reach viewport edges */}
      <div className="pb-24 lg:pb-36">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-line/40 border-y border-line">
          {WORKS.map((work, idx) => (
            <ArtCard key={work.title} work={work} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
