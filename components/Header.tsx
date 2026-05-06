'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Works', href: '#works' },
  { label: 'Studios', href: '#studios' },
  { label: 'Contact', href: '#contact' },
];

const LANGS = ['KR', 'EN', 'JP', 'CN', 'DE'];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-gold/15'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-8 lg:px-14 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-display text-2xl tracking-[0.2em]">
            <span className="gold-text">MUSAI</span>
          </span>
          <span className="hidden md:inline-block h-3 w-px bg-gold/30" />
          <span className="hidden md:inline-block text-[10px] tracking-[0.35em] uppercase text-ink/50">
            Studio · Est. 1995
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-[12px] tracking-[0.25em] uppercase text-ink/70 hover:text-gold transition-colors duration-500 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <div className="hidden lg:flex items-center gap-1 text-[10px] tracking-[0.25em] uppercase">
            {LANGS.map((l, idx) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-1.5 py-1 transition-colors ${
                  lang === l ? 'text-gold' : 'text-ink/35 hover:text-ink/60'
                }`}
              >
                {l}
                {idx < LANGS.length - 1 && (
                  <span className="ml-1 text-ink/15">/</span>
                )}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-gold border border-gold/40 px-5 py-2.5 hover:bg-gold hover:text-bg transition-all duration-500"
          >
            Inquire
          </a>
        </div>
      </div>
    </header>
  );
}
