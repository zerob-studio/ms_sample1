const CLIENTS = [
  'CD PROJEKT RED',
  'LARIAN STUDIOS',
  'ROCKSTAR GAMES',
  'RIOT GAMES',
  'ELECTRONIC ARTS',
  'SONY INTERACTIVE',
  'TENCENT',
  'KURO GAMES',
  'PEARL ABYSS',
  'TAKE-TWO',
  'HYPERGRYPH',
  'ACTIVISION',
  'SEGA',
  'KONAMI',
  'BYTEDANCE',
  'SMILEGATE',
];

const QUOTES = [
  {
    body:
      'A trusted creative partner. They understood our world from the inside out — every line, every emotion.',
    author: 'AAA Game Producer',
    org: 'Global Publisher',
  },
  {
    body:
      '문화의 차이를 넘어, 캐릭터의 감정까지 옮겨내는 팀. 가장 신뢰하는 한국 파트너입니다.',
    author: 'Voice Producer',
    org: 'Tokyo · Animation Studio',
  },
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14">
        <div className="mb-16 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <span className="text-[10px] tracking-[0.45em] uppercase text-gold/80">
              Chapter 05
            </span>
            <div className="mt-3 text-[10px] tracking-[0.45em] uppercase text-ink/40">
              Trusted By
            </div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.02em]">
              <span className="italic gold-text">200+</span> studios &amp; publishers,
              <br />
              from Seoul to <span className="italic">Berlin</span>.
            </h2>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-gold/15 py-10 mb-20">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div key={`${client}-${idx}`} className="flex items-center mx-10 lg:mx-14">
              <span className="font-display text-xl lg:text-2xl tracking-[0.2em] text-ink/40 hover:text-gold transition-colors duration-500">
                {client}
              </span>
              <span className="ml-10 lg:ml-14 text-gold/30 text-xs">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {QUOTES.map((quote, idx) => (
            <figure
              key={idx}
              className="border border-gold/15 p-8 lg:p-10 hover:border-gold/40 transition-colors duration-500"
            >
              <span className="font-display text-5xl gold-text leading-none">"</span>
              <blockquote className="mt-2 font-kr-display text-[16px] text-ink/75 leading-[1.95]">
                {quote.body}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase">
                <span className="h-px w-8 bg-gold" />
                <span className="text-ink/85">{quote.author}</span>
                <span className="text-ink/40">/</span>
                <span className="text-gold/85">{quote.org}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
