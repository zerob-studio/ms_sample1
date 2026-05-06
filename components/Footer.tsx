export default function Footer() {
  return (
    <footer className="relative border-t border-line pt-16 lg:pt-20 pb-10">
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12">
        {/* Big quiet wordmark */}
        <div className="mb-14 lg:mb-16 grid grid-cols-12 gap-y-6 lg:gap-x-6 items-end">
          <div className="col-span-12 lg:col-span-9">
            <div className="font-display text-[clamp(3.5rem,16vw,15rem)] leading-[0.84] tracking-[-0.04em] text-ink">
              Musai<span className="italic text-ink-soft">.</span>
            </div>
            <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute mt-6">
              Sound · Localization · Entertainment — Since 1995
            </p>
          </div>
          <div className="col-span-12 lg:col-span-3 lg:text-right">
            <p className="font-display italic text-2xl text-ink">
              Boost Your Play.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14 pt-10 border-t border-line">
          <FooterCol
            label="Studio"
            items={['About', 'Service', 'Works', 'Blog', 'Careers']}
          />
          <FooterCol
            label="Service"
            items={['Sound', 'L10N', 'Echo']}
          />
          <FooterCol
            label="Studios"
            items={['Seoul, KR', 'Berlin, DE']}
          />
          <FooterCol
            label="Connect"
            items={[
              'contact@musaistudio.com',
              '+82 2 529 1488',
              'Instagram',
              'LinkedIn',
            ]}
          />
        </div>

        <div className="pt-8 border-t border-line flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-mono text-[10px] tracking-[0.22em] uppercase text-mute">
          <span>© 2026 Musai Studio</span>
          <div className="flex items-center gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink-soft mb-5">
        {label}
      </div>
      <ul className="space-y-2.5 text-[13px] text-ink-soft">
        {items.map((item) => (
          <li
            key={item}
            className="hover:text-ink transition-colors duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
