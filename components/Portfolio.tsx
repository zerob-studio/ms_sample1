'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';

const WORKS = [
  {
    title: "Baldur's Gate 3",
    publisher: 'Larian Studios',
    category: 'Sound · Localization',
    year: '2023',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg',
    fallback: ['#1c1410', '#3a2418'],
  },
  {
    title: 'Cyberpunk 2077',
    publisher: 'CD Projekt Red',
    category: 'KR Voice Direction',
    year: '2023',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg',
    fallback: ['#0d141c', '#1b2536'],
  },
  {
    title: 'Red Dead Redemption 2',
    publisher: 'Rockstar Games',
    category: 'Localization',
    year: '2018',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg',
    fallback: ['#1a1009', '#2e1c0e'],
  },
  {
    title: 'The Witcher 3',
    publisher: 'CD Projekt Red',
    category: 'Dubbing · Voice Direction',
    year: '2015',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg',
    fallback: ['#0c1410', '#19241c'],
  },
  {
    title: 'League of Legends',
    publisher: 'Riot Games',
    category: 'Voice & Audio',
    year: 'Ongoing',
    cover: null,
    fallback: ['#0a1426', '#172a4a'],
  },
  {
    title: 'Modern Warfare',
    publisher: 'Activision',
    category: 'KR Voice & Mixing',
    year: '2019',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/1938090/header.jpg',
    fallback: ['#15110e', '#28201a'],
  },
  {
    title: 'Wuthering Waves',
    publisher: 'Kuro Games',
    category: 'Voice Direction',
    year: '2024',
    cover: null,
    fallback: ['#140d1a', '#241638'],
  },
  {
    title: 'Borderlands',
    publisher: 'Gearbox Software',
    category: 'KR Localization',
    year: '2025',
    cover:
      'https://cdn.cloudflare.steamstatic.com/steam/apps/397540/header.jpg',
    fallback: ['#1a1208', '#2e2010'],
  },
];

function ArtCard({ work }: { work: (typeof WORKS)[number] }) {
  const [c1, c2] = work.fallback;
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = work.cover && !imgFailed;

  return (
    <article className="group flex flex-col cursor-pointer">
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-bg">
        <div
          className="absolute inset-0 transition-transform duration-[1.8s] ease-out group-hover:scale-[1.04]"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${c2} 0%, ${c1} 60%, #08080a 100%)`,
          }}
        />
        {showImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={work.cover!}
            alt={work.title}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="poster-cover absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[1.8s] ease-out group-hover:scale-[1.04]"
          />
        )}
      </div>

      {/* Text strip — generous, quiet */}
      <div className="px-4 sm:px-5 lg:px-6 py-5 lg:py-6">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-mute mb-3 flex items-center justify-between gap-3">
          <span className="truncate">{work.category}</span>
          <span className="shrink-0">{work.year}</span>
        </div>
        <h3 className="font-display text-ink leading-[1.1] tracking-[-0.01em] text-lg sm:text-xl lg:text-2xl">
          {work.title}
        </h3>
        <p className="mt-2 font-kr text-[12px] text-ink-soft tracking-[0.02em]">
          {work.publisher}
        </p>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="works" className="relative">
      <SectionHeader
        no="04"
        label="Works"
        headline={
          <>
            Stories the world{' '}
            <span className="italic">already plays.</span>
          </>
        }
        description={
          <>
            AAA 게임부터 글로벌 애니메이션까지. 가장 까다로운 파트너들이
            가장 깊이 신뢰한 결과물.
          </>
        }
        actions={
          <a
            href="#"
            className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-soft border-b border-line-2 hover:border-ink hover:text-ink pb-1.5 transition-colors"
          >
            Full portfolio →
          </a>
        }
      />

      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pb-24 lg:pb-36">
        <div className="border-t border-line">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-y-16 gap-x-4 sm:gap-x-6 lg:gap-x-8 pt-12 lg:pt-16">
            {WORKS.map((work) => (
              <ArtCard key={work.title} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
