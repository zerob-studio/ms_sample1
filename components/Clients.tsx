const CLIENTS = [
  'NEXON',
  'NCSOFT',
  'KRAFTON',
  'NETMARBLE',
  'PEARL ABYSS',
  'SMILEGATE',
  'NETFLIX',
  'CD PROJEKT RED',
  'LARIAN',
  'SQUARE ENIX',
  'TENCENT',
  'BANDAI NAMCO',
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="mb-16 text-center">
          <span className="text-[11px] tracking-widest2 uppercase text-gold">
            — Trusted by
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink/95 leading-tight">
            <span className="italic text-gold">200+</span> studios &amp; publishers
          </h2>
          <p className="mt-6 font-kr-display text-ink/55 max-w-xl mx-auto">
            세계가 선택한 한국의 사운드. 가장 까다로운 파트너들과의 협업을 이어가고 있습니다.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-gold/15 py-10">
        {/* fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap will-change-transform">
          {[...CLIENTS, ...CLIENTS].map((client, idx) => (
            <div
              key={`${client}-${idx}`}
              className="flex items-center mx-12 lg:mx-16"
            >
              <span className="font-display text-2xl lg:text-3xl tracking-[0.18em] text-ink/40 hover:text-gold transition-colors duration-500">
                {client}
              </span>
              <span className="ml-12 lg:ml-16 text-gold/30">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
