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
  },
  {
    city: 'Berlin',
    krCity: '베를린',
    role: 'European Office',
    address: 'Holsteinische Str. 1, Steglitz, Berlin 12163, Germany',
    krAddress: 'Steglitz, Berlin · Germany',
    contacts: [{ label: 'Inquiries', value: 'contact@musaistudio.com' }],
    coords: '52.5°N · 13.4°E',
  },
];

export default function Studios() {
  return (
    <section
      id="studios"
      className="relative py-32 lg:py-44 bg-[#070707] border-y border-gold/15"
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14">
        <div className="mb-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-2">
            <span className="text-[10px] tracking-[0.45em] uppercase text-gold/80">
              Chapter 06
            </span>
            <div className="mt-3 text-[10px] tracking-[0.45em] uppercase text-ink/40">
              Studios
            </div>
          </div>
          <div className="col-span-12 lg:col-span-10">
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.02em]">
              Two cities,
              <br />
              <span className="italic gold-text">one studio</span>.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/15">
          {STUDIOS.map((studio, idx) => (
            <article
              key={studio.city}
              className="bg-bg p-8 lg:p-12 group hover:bg-[#0d0d0d] transition-colors duration-700 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse 50% 60% at 80% 20%, rgba(201,168,76,0.10) 0%, transparent 70%)',
                }}
              />

              <div className="relative">
                <div className="flex items-baseline justify-between mb-12">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-ink/40">
                    0{idx + 1} · {studio.role}
                  </span>
                  <span className="text-[10px] tracking-[0.35em] text-gold/65 font-display">
                    {studio.coords}
                  </span>
                </div>

                <h3 className="font-display text-6xl lg:text-7xl text-ink/95 leading-none tracking-[-0.03em] mb-3">
                  {studio.city}
                </h3>
                <p className="font-kr-display text-[15px] text-gold/85 mb-12 tracking-[0.18em]">
                  {studio.krCity} · {studio.role}
                </p>

                <div className="h-px bg-gold/25 group-hover:bg-gold/55 transition-colors duration-700 mb-10" />

                <div className="space-y-7">
                  <div>
                    <div className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-2">
                      Address
                    </div>
                    <div className="text-[14px] text-ink/80 leading-[1.7]">
                      {studio.address}
                    </div>
                    <div className="font-kr-display text-[12px] text-ink/45 mt-1">
                      {studio.krAddress}
                    </div>
                  </div>

                  {studio.contacts.map((c) => (
                    <div key={c.label}>
                      <div className="text-[10px] tracking-[0.4em] uppercase text-gold/70 mb-2">
                        {c.label}
                      </div>
                      <div className="font-display text-[15px] text-ink/85 tracking-wide">
                        {c.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
