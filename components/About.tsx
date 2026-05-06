import SectionHeader from './SectionHeader';

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <SectionHeader
        no="01"
        label="Studio"
        caption="A house for global storytellers"
        meta="01 / 07"
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
        <div className="grid grid-cols-12 gap-8 lg:gap-12 mt-4">
          <div className="col-span-12 lg:col-span-2 lg:col-start-2">
            <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-mute">
              — Note
            </div>
            <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-ink-soft/70 mt-2">
              From the founder
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <p className="font-kr-display text-[16.5px] text-ink leading-[2.05]">
              MUSAI는 사운드, 로컬라이제이션, 엔터테인먼트의 경계를 잇는 종합
              미디어 프로덕션입니다. 30년간 우리는 한 가지를 지켜왔습니다 —
              원작의 의도를 가장 정확한 결로 옮기는 일.
            </p>
            <p className="mt-7 font-kr text-[14.5px] text-ink-soft leading-[1.9]">
              CD Projekt Red, Larian, Riot, Rockstar 등 가장 까다로운
              파트너들이 한국어와 아시아 시장의 톤앤매너를 우리에게 맡기는
              이유입니다. 더빙이 아니라, 감정의 번역.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-3 lg:col-start-9">
            <dl className="border-t border-line-2">
              {[
                ['Founded', '1995'],
                ['Headquarters', 'Seoul, KR'],
                ['Europe office', 'Berlin, DE'],
                ['Languages', '30+'],
                ['Discipline', 'Sound · L10N · ECHO'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between border-b border-line py-3.5 font-mono text-[11px] tracking-[0.08em]"
                >
                  <dt className="text-mute uppercase tracking-[0.18em] text-[10px]">
                    {k}
                  </dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#service"
              className="mt-8 inline-flex items-baseline gap-3 text-[13px] text-ink border-b border-ink/30 hover:border-ink pb-1.5 transition-colors"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                →
              </span>
              Our approach
            </a>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-9 lg:col-start-3">
            <div className="border-l border-line-2 pl-6 lg:pl-12">
              <p className="font-display text-[clamp(1.5rem,3vw,2.6rem)] text-ink leading-[1.42] tracking-[-0.01em]">
                <span className="italic">We don&apos;t dub.</span> We translate
                emotion across cultures and preserve the original creative
                intent — that&apos;s the bar we hold for every title that
                ships globally.
              </p>
              <div className="mt-8 flex items-center gap-4 font-mono text-[10px] tracking-[0.2em] uppercase">
                <span className="h-px w-8 bg-line-2" />
                <span className="text-ink">Musai Studio</span>
                <span className="text-mute">/ Voice Direction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
