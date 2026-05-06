import SectionHeader from './SectionHeader';

const SERVICES = [
  {
    no: '01',
    title: 'Sound',
    krTitle: '사운드',
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
    description:
      '번역과 어댑테이션, 포스트에디팅, LQA에 이르기까지. 30개 이상의 언어를 가장 정확한 문화적 결로 옮깁니다.',
    items: ['Translation', 'Adaptation', 'Post-Editing', 'LQA'],
  },
  {
    no: '03',
    title: 'Echo',
    krTitle: '엔터테인먼트',
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
    <section id="service" className="relative">
      <SectionHeader
        no="03"
        label="Services"
        topic="우리의 작업 — What we do."
        headline={
          <>
            Sound, Localization,{' '}
            <span className="italic">Echo.</span>
          </>
        }
        description={
          <>세 영역의 전문성이 하나의 파이프라인으로 연결되어, 의뢰부터 출시까지 끊김 없이 동행합니다.</>
        }
      />

      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pb-24 lg:pb-36">
        <div className="border-t border-line">
          {SERVICES.map((service) => (
            <article
              key={service.no}
              className="group grid grid-cols-12 gap-y-6 lg:gap-8 py-12 lg:py-20 border-b border-line"
            >
              <div className="col-span-12 lg:col-span-2 font-mono text-[11px] tracking-[0.22em] uppercase text-mute">
                {service.no}
              </div>

              <div className="col-span-12 lg:col-span-4">
                <h3 className="font-display text-[clamp(2rem,4vw,3.2rem)] leading-none tracking-[-0.025em] text-ink">
                  {service.title}
                </h3>
                <p className="font-kr text-[13px] text-ink-soft mt-3 tracking-[0.04em]">
                  {service.krTitle}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-3">
                <p className="font-kr text-[14.5px] text-ink-soft leading-[2]">
                  {service.description}
                </p>
              </div>

              <div className="col-span-12 lg:col-span-3">
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[11px] tracking-[0.12em] uppercase text-ink-soft group-hover:text-ink transition-colors duration-500"
                    >
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
