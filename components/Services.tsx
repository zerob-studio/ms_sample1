import SectionHeader from './SectionHeader';

const SERVICES = [
  {
    no: '01',
    title: 'Sound',
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
    meta: '192 kHz · 24 bit · Atmos',
  },
  {
    no: '02',
    title: 'L10N',
    krTitle: '로컬라이제이션',
    tagline: 'Translate emotion, not words.',
    description:
      '번역과 어댑테이션, 포스트에디팅, LQA에 이르기까지. 30개 이상의 언어를 가장 정확한 문화적 결로 옮깁니다.',
    items: ['Translation', 'Adaptation', 'Post-Editing', 'LQA'],
    meta: '30+ languages · ISO 17100',
  },
  {
    no: '03',
    title: 'Echo',
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
    meta: 'Talent · IP · Global',
  },
];

export default function Services() {
  return (
    <section id="service" className="relative">
      <SectionHeader
        no="03"
        label="Service"
        caption="Three pillars, one pipeline"
        meta="Brief → Ship"
        headline={
          <>
            Sound, Localization,{' '}
            <span className="italic">Echo.</span>
          </>
        }
        description={
          <>
            세 영역의 전문성이 하나의 파이프라인으로 연결되어,
            의뢰부터 출시까지 끊김 없이 동행합니다.
          </>
        }
      />

      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pb-24 lg:pb-36">
        <div className="border-t border-line-2">
          {SERVICES.map((service) => (
            <article
              key={service.no}
              className="group grid grid-cols-12 gap-y-6 lg:gap-8 py-10 lg:py-14 border-b border-line hover:bg-elev/40 transition-colors duration-700"
            >
              <div className="col-span-12 lg:col-span-1 font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
                {service.no} / 03
              </div>

              <div className="col-span-12 lg:col-span-3">
                <h3 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.02em] text-ink">
                  {service.title}
                </h3>
                <p className="font-kr text-[13px] text-ink-soft mt-3 tracking-[0.05em]">
                  {service.krTitle}
                </p>
                <div className="mt-6 font-mono text-[10px] tracking-[0.14em] uppercase text-mute">
                  {service.meta}
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <p className="font-display italic text-[19px] lg:text-[22px] text-ink leading-[1.45] mb-5">
                  {service.tagline}
                </p>
                <p className="font-kr text-[14px] text-ink-soft leading-[1.95]">
                  {service.description}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-3 lg:col-start-10">
                <ul className="space-y-2.5 font-mono text-[11px] tracking-[0.1em] uppercase text-ink-soft">
                  {service.items.map((item, idx) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span className="text-mute text-[10px]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="group-hover:text-ink transition-colors duration-500">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-block font-display italic text-ink/60 group-hover:text-ink group-hover:translate-x-1 transition-all duration-500">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
