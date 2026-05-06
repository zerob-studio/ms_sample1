import SectionHeader from './SectionHeader';

const STUDIOS = [
  {
    city: 'Seoul',
    krCity: '서울',
    role: 'Headquarters',
    address: '166 Donggwang-ro, Seocho, Seoul 06589, Korea',
    krAddress: '서울특별시 서초구 동광로 166',
    contacts: [
      { label: 'Korean', value: '+82 2 529 1488' },
      { label: 'English', value: '+82 10 3800 8638' },
    ],
  },
  {
    city: 'Berlin',
    krCity: '베를린',
    role: 'European Office',
    address: 'Holsteinische Str. 1, Steglitz, Berlin 12163, Germany',
    krAddress: 'Steglitz, Berlin · Germany',
    contacts: [{ label: 'Inquiries', value: 'contact@musaistudio.com' }],
  },
];

export default function Studios() {
  return (
    <section id="studios" className="relative">
      <SectionHeader
        no="06"
        label="Studios"
        topic="스튜디오 — Where we are."
        headline={
          <>
            Recording on{' '}
            <span className="italic">two continents</span>.
          </>
        }
      />

      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pb-24 lg:pb-36">
        <div className="border-t border-line">
          {STUDIOS.map((studio) => (
            <article
              key={studio.city}
              className="grid grid-cols-12 gap-y-8 lg:gap-12 py-12 lg:py-20 border-b border-line"
            >
              <div className="col-span-12 lg:col-span-5">
                <h3 className="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.95] tracking-[-0.03em] text-ink">
                  {studio.city}
                </h3>
                <p className="font-kr text-[13.5px] text-ink-soft mt-3 tracking-[0.05em]">
                  {studio.krCity} · {studio.role}
                </p>
              </div>

              <div className="col-span-12 md:col-span-7 lg:col-span-4">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute mb-3">
                  Address
                </div>
                <p className="text-[14px] text-ink leading-[1.7]">
                  {studio.address}
                </p>
                <p className="font-kr text-[12.5px] text-ink-soft/80 mt-1.5">
                  {studio.krAddress}
                </p>
              </div>

              <div className="col-span-12 md:col-span-5 lg:col-span-3">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute mb-3">
                  Contact
                </div>
                <ul className="space-y-2.5">
                  {studio.contacts.map((c) => (
                    <li
                      key={c.label}
                      className="flex items-baseline justify-between gap-3"
                    >
                      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-mute shrink-0">
                        {c.label}
                      </span>
                      <span className="font-mono text-[12.5px] text-ink text-right break-all">
                        {c.value}
                      </span>
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
