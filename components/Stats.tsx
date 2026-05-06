import SectionHeader from './SectionHeader';

const STATS = [
  { value: '30', suffix: '+', unit: 'Years', sub: 'Since 1995' },
  { value: '20', suffix: '+', unit: 'Studios', sub: 'Recording rooms' },
  { value: '200', suffix: '+', unit: 'Clients', sub: 'AAA & global' },
  { value: '2,000', suffix: '+', unit: 'Titles', sub: 'Shipped to date' },
];

export default function Stats() {
  return (
    <section id="numbers" className="relative">
      <SectionHeader
        no="02"
        label="Numbers"
        headline={
          <>
            Three decades, in <span className="italic">numbers</span>.
          </>
        }
        description={<>우리가 쌓아온 시간은 결국 작품의 결로 돌아갑니다.</>}
      />

      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pb-24 lg:pb-36">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-line">
          {STATS.map((stat, idx) => {
            const classes = [
              'min-w-0 border-line px-5 sm:px-7 lg:px-8 py-10 lg:py-14',
              // mobile: left-border on right cell of each row
              idx === 1 || idx === 3 ? 'border-l' : '',
              // desktop only: middle cell needs its own left border
              idx === 2 ? 'lg:border-l' : '',
              // mobile only: top row gets bottom border, removed on desktop
              idx < 2 ? 'border-b lg:border-b-0' : '',
            ]
              .filter(Boolean)
              .join(' ');
            return (
              <div key={stat.unit} className={classes}>
                <div className="font-display leading-[0.92] tracking-[-0.04em] text-ink whitespace-nowrap">
                  <span className="text-[clamp(2.2rem,7vw,5.4rem)]">
                    {stat.value}
                  </span>
                  <span className="text-[clamp(1.1rem,3vw,2.4rem)] text-ink-soft/70 align-top ml-1">
                    {stat.suffix}
                  </span>
                </div>

                <div className="mt-5 lg:mt-7 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-soft truncate">
                  {stat.unit}
                </div>
                <div className="mt-1.5 font-mono text-[10px] tracking-[0.14em] uppercase text-mute truncate">
                  {stat.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
