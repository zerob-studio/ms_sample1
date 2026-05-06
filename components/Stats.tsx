const STATS = [
  { value: '30+', label: 'Years of Craft', kr: '장인의 시간' },
  { value: '20+', label: 'Studios Worldwide', kr: '글로벌 스튜디오' },
  { value: '200+', label: 'Trusted Clients', kr: '신뢰의 파트너' },
  { value: '2,000+', label: 'Realized Projects', kr: '완성된 이야기' },
];

export default function Stats() {
  return (
    <section id="about" className="relative py-32 lg:py-40 border-y border-gold/10">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="mb-20 max-w-2xl">
          <span className="text-[11px] tracking-widest2 uppercase text-gold">
            — Numbers
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink/95 leading-tight">
            Three decades<br />
            of <span className="italic text-gold">listening</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-bg p-8 lg:p-12 group hover:bg-gold/[0.04] transition-colors duration-700"
            >
              <div className="flex items-baseline justify-between mb-6">
                <span className="text-[11px] tracking-widest2 uppercase text-ink/40">
                  0{idx + 1}
                </span>
                <span className="h-px w-12 bg-gold/40 group-hover:w-20 group-hover:bg-gold transition-all duration-700" />
              </div>
              <div className="font-display text-5xl md:text-6xl lg:text-7xl gold-text mb-6 leading-none">
                {stat.value}
              </div>
              <div className="text-[12px] tracking-widest2 uppercase text-ink/70 mb-2">
                {stat.label}
              </div>
              <div className="font-kr-display text-sm text-ink/45">
                {stat.kr}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
