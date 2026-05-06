'use client';

import { useEffect, useRef, useState } from 'react';

const CHAPTERS = [
  { id: 'top', no: '00', label: 'Studio', short: 'Musai' },
  { id: 'about', no: '01', label: 'Studio', short: 'About' },
  { id: 'numbers', no: '02', label: 'Index', short: 'Numbers' },
  { id: 'service', no: '03', label: 'Service', short: 'Service' },
  { id: 'works', no: '04', label: 'Works', short: 'Works' },
  { id: 'clients', no: '05', label: 'Trust', short: 'Clients' },
  { id: 'studios', no: '06', label: 'Locations', short: 'Studios' },
  { id: 'contact', no: '07', label: 'Begin', short: 'Contact' },
];

export default function SectionScroller() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  // Track scroll progress
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(Math.min(Math.max(pct, 0), 100));
      setScrolled(window.scrollY > window.innerHeight * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track which section is currently most visible
  useEffect(() => {
    const sections = CHAPTERS.map((c) => document.getElementById(c.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(entry.target.id, entry.intersectionRatio);
        });
        // Find chapter with the highest ratio
        let bestId = CHAPTERS[0].id;
        let bestRatio = 0;
        ratiosRef.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });
        const idx = CHAPTERS.findIndex((c) => c.id === bestId);
        if (idx >= 0) setActiveIdx(idx);
      },
      {
        // multiple thresholds so we can compare visibility ratios
        threshold: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
        rootMargin: '-20% 0px -50% 0px',
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const active = CHAPTERS[activeIdx];

  return (
    <>
      {/* Top thin progress bar — fixed under header */}
      <div
        aria-hidden
        className="fixed top-16 left-0 right-0 h-px bg-line z-40 pointer-events-none"
      >
        <div
          className="h-full bg-ink/80 transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Mobile floating chapter pill — visible only after scrolling past hero */}
      <div
        aria-hidden
        className={`md:hidden fixed top-[72px] left-1/2 -translate-x-1/2 z-40 pointer-events-none transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-elev/90 backdrop-blur-md border border-line-2 rounded-full shadow-lg">
          <span className="font-mono text-[9px] tracking-[0.18em] uppercase text-mute">
            Ch.{active.no}
          </span>
          <span className="h-3 w-px bg-line-2" />
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-ink">
            {active.label}
          </span>
        </div>
      </div>

      {/* Desktop right-side vertical rail */}
      <nav
        aria-label="Section navigation"
        className="hidden lg:block fixed right-6 xl:right-8 top-1/2 -translate-y-1/2 z-40"
      >
        <ul className="flex flex-col items-end gap-3.5">
          {CHAPTERS.map((c, idx) => {
            const isActive = idx === activeIdx;
            return (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="group flex items-center gap-3 cursor-pointer"
                >
                  <span
                    className={`font-mono text-[10px] tracking-[0.18em] uppercase whitespace-nowrap transition-all duration-500 ${
                      isActive
                        ? 'text-ink opacity-100 translate-x-0'
                        : 'text-mute opacity-0 -translate-x-1 group-hover:opacity-80 group-hover:translate-x-0'
                    }`}
                  >
                    {c.short}
                  </span>
                  <span
                    className={`h-px transition-all duration-500 ${
                      isActive
                        ? 'w-9 bg-ink'
                        : 'w-4 bg-mute/50 group-hover:bg-ink/70 group-hover:w-7'
                    }`}
                  />
                  <span
                    className={`font-mono text-[10px] tracking-[0.18em] uppercase transition-colors duration-500 w-5 text-right ${
                      isActive ? 'text-ink' : 'text-mute group-hover:text-ink/80'
                    }`}
                  >
                    {c.no}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
