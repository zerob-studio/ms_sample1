'use client';

import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Studio', href: '#about' },
  { label: 'Service', href: '#service' },
  { label: 'Works', href: '#works' },
  { label: 'Clients', href: '#clients' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-bg/85 backdrop-blur-md border-b border-gold/15'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-8 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" className="font-display text-2xl tracking-[0.18em] text-ink">
          <span className="gold-text">MUSAI</span>
          <span className="text-ink/70 ml-1">STUDIO</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] tracking-[0.25em] uppercase text-ink/70 hover:text-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-[12px] tracking-[0.3em] uppercase text-gold border border-gold/40 px-5 py-2.5 hover:bg-gold hover:text-bg transition-all duration-500"
        >
          Inquire
        </a>
      </div>
    </header>
  );
}
