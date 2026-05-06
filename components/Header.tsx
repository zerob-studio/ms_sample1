'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Studio', href: '#about', no: '01' },
  { label: 'Service', href: '#service', no: '02' },
  { label: 'Works', href: '#works', no: '03' },
  { label: 'Locations', href: '#studios', no: '04' },
  { label: 'Contact', href: '#contact', no: '05' },
];

const LANGS = ['EN', 'KR', 'JP', 'CN', 'DE'];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border-color] duration-700 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-xl border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-display text-[22px] tracking-[-0.01em] text-ink">
            Musai
          </span>
          <span className="hidden md:inline-block h-3 w-px bg-line-2" />
          <span className="hidden md:inline-block font-mono text-[10px] tracking-[0.18em] uppercase text-mute">
            Sound&nbsp;Studio · EST&nbsp;1995
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-baseline gap-1.5 text-[13px] text-ink/70 hover:text-ink transition-colors duration-500"
            >
              <span className="font-mono text-[9px] text-mute group-hover:text-ink/60 transition-colors">
                {item.no}
              </span>
              <span className="tracking-tight">{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center font-mono text-[10px] tracking-[0.12em]">
            {LANGS.map((l, idx) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-1.5 py-1 transition-colors ${
                  lang === l ? 'text-ink' : 'text-mute hover:text-ink/60'
                }`}
              >
                {l}
                {idx < LANGS.length - 1 && (
                  <span className="ml-1.5 text-mute/40">·</span>
                )}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] uppercase text-ink/85 border border-line-2 hover:border-ink/60 px-4 py-2 transition-colors duration-500"
          >
            <span className="rec-dot" />
            Start a project
          </a>
        </div>
      </div>
    </header>
  );
}
