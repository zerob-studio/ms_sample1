const SERVICES = [
  {
    no: '01',
    title: 'SOUND',
    krTitle: '사운드 디자인',
    description:
      '게임과 영상을 위한 음악 제작, 사운드 디자인, 음향 후반작업까지. 작품의 정서를 결정짓는 모든 청각적 순간을 디자인합니다.',
    items: ['Original Score', 'Sound Design', 'Mixing & Mastering', 'Voice Recording'],
  },
  {
    no: '02',
    title: 'L10N',
    krTitle: '로컬라이제이션',
    description:
      '언어를 넘어 문화를 옮깁니다. 30개 이상의 언어, 1,000명의 로컬 보이스 풀로 게임과 콘텐츠의 세계관을 현지에 안착시킵니다.',
    items: ['Translation', 'Voice Casting', 'Dubbing & ADR', 'QA & LQA'],
  },
  {
    no: '03',
    title: 'ENTERTAINMENT',
    krTitle: '엔터테인먼트',
    description:
      '아티스트 매니지먼트와 콘텐츠 IP 기획. 사운드의 경계를 넘어, 이야기와 사람을 잇는 종합 엔터테인먼트 비즈니스로 확장합니다.',
    items: ['IP Development', 'Artist Management', 'Live Production', 'Brand Collab'],
  },
];

export default function Services() {
  return (
    <section id="service" className="relative py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12">
        <div className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-[11px] tracking-widest2 uppercase text-gold">
              — Service
            </span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-ink/95 leading-tight">
              Three pillars,<br />
              <span className="italic text-gold">one philosophy</span>.
            </h2>
          </div>
          <p className="font-kr-display text-ink/55 max-w-md leading-relaxed">
            사운드, 로컬라이제이션, 엔터테인먼트.
            <br />
            세 영역이 서로의 결을 깊게 만듭니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.no}
              className="group relative border border-gold/15 bg-bg p-8 lg:p-10 hover:border-gold/60 transition-colors duration-700 overflow-hidden"
            >
              {/* Decorative top corner */}
              <div className="absolute top-0 right-0 w-24 h-24 border-l border-b border-gold/10 group-hover:border-gold/40 transition-colors duration-700" />

              <div className="flex items-baseline justify-between mb-10">
                <span className="text-[11px] tracking-widest2 uppercase text-ink/40">
                  {service.no} / 03
                </span>
                <span className="text-gold/60 group-hover:text-gold transition-colors duration-500">
                  →
                </span>
              </div>

              <h3 className="font-display text-4xl lg:text-5xl text-ink/95 mb-2 leading-none">
                {service.title}
              </h3>
              <p className="font-kr-display text-sm text-gold/80 mb-8 tracking-wider">
                {service.krTitle}
              </p>

              <div className="h-px bg-gold/15 group-hover:bg-gold/50 transition-colors duration-700 mb-8" />

              <p className="font-kr-display text-ink/65 text-[15px] leading-[1.85] mb-10">
                {service.description}
              </p>

              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[13px] tracking-wider text-ink/60"
                  >
                    <span className="h-px w-3 bg-gold/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
