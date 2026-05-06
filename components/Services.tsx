const SERVICES = [
  {
    no: '01',
    title: 'SOUND',
    krTitle: '사운드',
    tagline: 'For voices that carry stories.',
    description:
      '보이스오버 레코딩과 디렉션, 캐스팅, 사전·후반 오디오 작업까지. 전담 PM이 작품의 톤앤매너를 끝까지 책임집니다.',
    items: [
      'Voice Recording',
      'Voice Direction',
      'Casting & Audition',
      'Pre · Post Production',
    ],
  },
  {
    no: '02',
    title: 'L10N',
    krTitle: '로컬라이제이션',
    tagline: 'Translate emotion, not words.',
    description:
      '번역과 어댑테이션, 포스트에디팅, LQA에 이르기까지. 30개 이상의 언어를 가장 정확한 문화적 결로 옮깁니다.',
    items: ['Translation', 'Adaptation', 'Post-Editing', 'LQA'],
  },
  {
    no: '03',
    title: 'ECHO',
    krTitle: '엔터테인먼트',
    tagline: 'Talents who find their stage.',
    description:
      '아티스트 매니지먼트, 전문 트레이닝, 오디션, 글로벌 마켓 진출까지. 사운드의 경계를 넘어 사람과 IP를 잇습니다.',
    items: [
      'Artist Management',
      'Professional Training',
      'Casting & Audition',
      'Global Expansion',
    ],
  },
];

export default function Services() {
  return (
    <section id="service" className="relative py-32 lg:py-44">
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14">
        <div className="mb-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <span className="text-[10px] tracking-[0.45em] uppercase text-gold/80">
              Chapter 03
            </span>
            <div className="mt-3 text-[10px] tracking-[0.45em] uppercase text-ink/40">
              Service
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.02em]">
              Three pillars,
              <br />
              <span className="italic gold-text">one philosophy</span>.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:pt-3">
            <p className="font-kr-display text-[15px] text-ink/55 leading-[1.9]">
              Sound, Localization, Echo.
              <br />
              세 영역의 전문성이 하나의 파이프라인으로 연결되어,
              의뢰부터 출시까지 끊김 없이 동행합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/15">
          {SERVICES.map((service) => (
            <article
              key={service.no}
              className="group relative bg-bg p-8 lg:p-12 hover:bg-[#0d0d0d] transition-colors duration-700 overflow-hidden"
            >
              {/* gold sweep on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)',
                }}
              />

              <div className="relative">
                <div className="flex items-baseline justify-between mb-12">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-ink/40">
                    {service.no} / 03
                  </span>
                  <span className="text-gold/50 group-hover:text-gold group-hover:translate-x-1 transition-all duration-500">
                    →
                  </span>
                </div>

                <h3 className="font-display text-5xl lg:text-6xl text-ink/95 mb-3 leading-none tracking-[-0.03em]">
                  {service.title}
                </h3>
                <p className="font-kr-display text-[13px] text-gold/85 mb-8 tracking-[0.2em]">
                  {service.krTitle}
                </p>

                <p className="font-display italic text-[17px] text-ink/75 mb-7 leading-snug">
                  {service.tagline}
                </p>

                <div className="h-px bg-gold/20 group-hover:bg-gold/55 transition-colors duration-700 mb-8" />

                <p className="font-kr-display text-[14px] text-ink/55 leading-[1.95] mb-10">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[12px] tracking-[0.18em] uppercase text-ink/55 group-hover:text-ink/80 transition-colors duration-500"
                    >
                      <span className="h-px w-3 bg-gold/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
