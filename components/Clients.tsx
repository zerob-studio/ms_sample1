import SectionHeader from './SectionHeader';

const CLIENTS = [
  'CD Projekt Red',
  'Larian Studios',
  'Rockstar Games',
  'Riot Games',
  'Electronic Arts',
  'Sony Interactive',
  'Tencent',
  'Kuro Games',
  'Pearl Abyss',
  'Take-Two',
  'HYPERGRYPH',
  'Activision',
  'SEGA',
  'KONAMI',
  'ByteDance',
  'Smilegate',
];

const QUOTES = [
  {
    body:
      'A trusted creative partner. They understood our world from the inside out — every line, every emotion.',
    author: 'AAA Game Producer',
    org: 'Global Publisher',
    project: 'RPG · 2023',
  },
  {
    body:
      '문화의 차이를 넘어, 캐릭터의 감정까지 옮겨내는 팀. 가장 신뢰하는 한국 파트너입니다.',
    author: 'Voice Producer',
    org: 'Tokyo · Animation Studio',
    project: 'Series · 2024',
  },
];

export default function Clients() {
  return (
    <section id="clients" className="relative">
      <SectionHeader
        no="05"
        label="Clients"
        topic="글로벌 파트너 — Who trusts us."
        headline={
          <>
            From Seoul to Berlin,{' '}
            <span className="italic">trusted by</span>
          </>
        }
      />

      {/* Marquee — infinite scroll, GPU-accelerated, slows on hover */}
      <div
        className="group/marquee relative overflow-hidden border-y border-line py-8 mb-16 lg:mb-20 bg-elev/30"
        aria-label="Trusted partners"
      >
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-marquee whitespace-nowrap will-change-transform [animation-duration:48s] hover:[animation-duration:120s] transition-[animation-duration] duration-700"
          style={{ animationTimingFunction: 'linear' }}
        >
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={`${client}-${idx}`}
              className="flex items-center mx-8 lg:mx-12"
            >
              <span className="font-display text-2xl lg:text-3xl tracking-[-0.01em] text-ink-soft hover:text-ink transition-colors duration-500">
                {client}
              </span>
              <span className="ml-8 lg:ml-12 font-mono text-mute text-[10px] tracking-[0.2em]">
                /
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pb-24 lg:pb-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          {QUOTES.map((quote, idx) => (
            <figure
              key={idx}
              className="bg-bg p-7 md:p-10 lg:p-12 hover:bg-elev/40 transition-colors duration-700"
            >
              <div className="flex items-baseline justify-between font-mono text-[10px] tracking-[0.18em] uppercase text-mute mb-7">
                <span>Testimony 0{idx + 1}</span>
                <span>{quote.project}</span>
              </div>
              <blockquote className="font-display italic text-[18px] md:text-[22px] lg:text-[24px] text-ink leading-[1.55] tracking-[-0.005em]">
                <span className="text-ink-soft not-italic">“</span>
                {quote.body}
                <span className="text-ink-soft not-italic">”</span>
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] tracking-[0.18em] uppercase">
                <span className="h-px w-8 bg-line-2" />
                <span className="text-ink">{quote.author}</span>
                <span className="text-mute">/</span>
                <span className="text-ink-soft">{quote.org}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
