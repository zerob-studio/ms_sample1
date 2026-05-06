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
    coords: '37.5°N · 127.0°E',
    rooms: '12 rooms · Atmos · ISO booths',
    status: 'On Air',
  },
  {
    city: 'Berlin',
    krCity: '베를린',
    role: 'European Office',
    address: 'Holsteinische Str. 1, Steglitz, Berlin 12163, Germany',
    krAddress: 'Steglitz, Berlin · Germany',
    contacts: [{ label: 'Inquiries', value: 'contact@musaistudio.com' }],
    coords: '52.5°N · 13.4°E',
    rooms: 'Production hub · EU partners',
    status: 'Open',
  },
];

export default function Studios() {
  return (
    <section
      id="studios"
      className="relative py-28 lg:py-40 bg-elev/40 border-t border-line"
    >
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12">
        <div className="mb-12 lg:mb-16 grid grid-cols-12 gap-6 font-mono text-[10px] tracking-[0.18em] uppercase">
          <div className="col-span-6 lg:col-span-2 text-ink">— 06 / Locations</div>
          <div className="hidden lg:block col-span-7 text-mute">
            Two cities, one studio
          </div>
          <div className="col-span-6 lg:col-span-3 lg:text-right text-mute">
            KR · DE
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-20">
          <div className="col-span-12 lg:col-span-9 lg:col-start-2">
            <h2 className="font-display text-[clamp(2.2rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.02em] text-ink">
              Recording on{' '}
              <span className="italic">two continents</span>.
            </h2>
          </div>
        </div>

        <div className="border-t border-line-2">
          {STUDIOS.map((studio, idx) => (
            <article
              key={studio.city}
              className="group grid grid-cols-12 gap-6 lg:gap-8 py-12 lg:py-16 border-b border-line"
            >
              <div className="col-span-12 lg:col-span-1 font-mono text-[11px] tracking-[0.18em] uppercase text-mute">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="col-span-12 lg:col-span-5">
                <h3 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-[-0.03em] text-ink">
                  {studio.city}
                </h3>
                <p className="font-kr-display text-[14px] text-ink-soft mt-3 tracking-[0.04em]">
                  {studio.krCity} · {studio.role}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink">
                  <span className="rec-dot" />
                  {studio.status}
                </div>
              </div>

              <div className="col-span-12 lg:col-span-3 space-y-6">
                <Detail label="Coordinates" value={studio.coords} />
                <Detail label="Facility" value={studio.rooms} />
                <Detail label="Address" value={studio.address} sub={studio.krAddress} />
              </div>

              <div className="col-span-12 lg:col-span-3 space-y-6">
                {studio.contacts.map((c) => (
                  <Detail key={c.label} label={c.label} value={c.value} mono />
                ))}
                <a
                  href="#contact"
                  className="inline-flex items-baseline gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-ink border-b border-ink/30 hover:border-ink pb-1.5 transition-colors"
                >
                  Visit / Schedule →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Detail({
  label,
  value,
  sub,
  mono,
}: {
  label: string;
  value: string;
  sub?: string;
  mono?: boolean;
}) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-mute mb-1.5">
        — {label}
      </div>
      <div className={`text-[14px] text-ink leading-[1.55] ${mono ? 'font-mono tracking-tight' : ''}`}>
        {value}
      </div>
      {sub && (
        <div className="font-kr text-[12px] text-ink-soft/80 mt-1">{sub}</div>
      )}
    </div>
  );
}
