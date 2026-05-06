const STATS = [
  { value: '30', suffix: '+', unit: 'Years', kr: '장인의 시간' },
  { value: '20', suffix: '+', unit: 'Studios', kr: '글로벌 거점' },
  { value: '200', suffix: '+', unit: 'Clients', kr: '신뢰의 파트너' },
  { value: '2,000', suffix: '+', unit: 'Projects', kr: '완성된 이야기' },
];

export default function Stats() {
  return (
    <section className="relative py-28 lg:py-32 border-y border-gold/15">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-[10px] tracking-[0.45em] uppercase text-gold/80">
              Chapter 02 — In Numbers
            </span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-ink/90 leading-tight tracking-[-0.01em]">
              Three decades of <span className="italic gold-text">listening</span>.
            </h2>
          </div>
          <p className="font-kr-display text-sm text-ink/45 max-w-sm">
            숫자는 결과가 아니라 결을 말합니다.
            <br />
            우리가 쌓은 시간은 작품의 결로 돌아갑니다.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10">
          {STATS.map((stat, idx) => (
            <div
              key={stat.unit}
              className="bg-bg p-8 lg:p-10 group hover:bg-gold/[0.04] transition-colors duration-700 relative"
            >
              {/* corner accent */}
              <span className="absolute top-4 right-4 h-1 w-1 bg-gold/40 group-hover:bg-gold transition-colors" />

              <div className="flex items-baseline justify-between mb-8">
                <span className="text-[10px] tracking-[0.4em] uppercase text-ink/40">
                  0{idx + 1}
                </span>
                <span className="h-px w-10 bg-gold/30 group-hover:w-20 group-hover:bg-gold transition-all duration-700" />
              </div>

              <div className="font-display leading-none mb-7">
                <span className="gold-text text-6xl md:text-7xl lg:text-[5.5rem] tracking-[-0.04em]">
                  {stat.value}
                </span>
                <span className="text-gold/60 text-3xl md:text-4xl ml-1">
                  {stat.suffix}
                </span>
              </div>

              <div className="text-[11px] tracking-[0.35em] uppercase text-ink/70 mb-2">
                {stat.unit}
              </div>
              <div className="font-kr-display text-[13px] text-ink/40">
                {stat.kr}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
