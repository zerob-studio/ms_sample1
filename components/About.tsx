import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <SectionHeader
        no="01"
        label="Studio"
        headline={
          <>
            A studio for{' '}
            <span className="italic">global storytellers</span>,
            <br />
            listening since 1995.
          </>
        }
      />

      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pb-24 lg:pb-36">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-12">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-kr-display text-[16.5px] text-ink leading-[2.05]">
              MUSAI는 사운드, 로컬라이제이션, 엔터테인먼트의 경계를 잇는 종합
              미디어 프로덕션입니다. 30년간 우리는 한 가지를 지켜왔습니다 —
              원작의 의도를 가장 정확한 결로 옮기는 일.
            </p>
            <p className="mt-7 font-kr text-[14.5px] text-ink-soft leading-[1.95]">
              CD Projekt Red, Larian, Riot, Rockstar 등 가장 까다로운
              파트너들이 한국어와 아시아 시장의 톤앤매너를 우리에게 맡기는
              이유입니다. 더빙이 아니라, 감정의 번역.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <dl className="border-t border-line">
              {[
                ['Founded', '1995'],
                ['Headquarters', 'Seoul, KR'],
                ['Europe', 'Berlin, DE'],
                ['Languages', '30+'],
                ['Discipline', 'Sound · L10N · Echo'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between border-b border-line py-4"
                >
                  <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute">
                    {k}
                  </dt>
                  <dd className="font-mono text-[12px] tracking-[0.04em] text-ink text-right">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Pull quote */}
        <div className="mt-24 lg:mt-36">
          <div className="max-w-4xl">
            <p className="font-display text-[clamp(1.6rem,3.4vw,3rem)] text-ink leading-[1.4] tracking-[-0.015em]">
              <span className="italic">We don&apos;t dub.</span> We translate
              emotion across cultures and preserve the original creative
              intent — that&apos;s the bar we hold for every title that ships
              globally.
            </p>
            <div className="mt-10 flex items-center gap-4 font-mono text-[10px] tracking-[0.22em] uppercase">
              <span className="h-px w-8 bg-line-2" />
              <span className="text-ink-soft">Musai Studio · Voice Direction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
