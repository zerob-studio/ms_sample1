'use client';

import { useEffect, useRef, useState } from 'react';

const CHAPTERS = [
  { id: 'top', short: 'Musai' },
  { id: 'about', short: 'Studio' },
  { id: 'numbers', short: 'Numbers' },
  { id: 'service', short: 'Service' },
  { id: 'works', short: 'Works' },
  { id: 'clients', short: 'Trust' },
  { id: 'studios', short: 'Studios' },
  { id: 'contact', short: 'Contact' },
];

export default function SectionScroller() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
      setProgress(Math.min(Math.max(pct, 0), 100));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        threshold: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 0.85, 1],
        rootMargin: '-25% 0px -50% 0px',
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top thin progress bar — fixed under header */}
      <div
        aria-hidden
        className="fixed top-16 left-0 right-0 h-px bg-line z-40 pointer-events-none"
      >
        <div
          className="h-full bg-ink-soft/70 transition-[width] duration-200 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Desktop right-side dot rail — quiet by default, label on hover/active */}
      <nav
        aria-label="Section navigation"
        className="hidden lg:block fixed right-5 xl:right-7 top-1/2 -translate-y-1/2 z-40 group/rail"
      >
        <ul className="flex flex-col items-end gap-3">
          {CHAPTERS.map((c, idx) => {
            const isActive = idx === activeIdx;
            return (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  aria-label={c.short}
                  className="group/dot flex items-center gap-3 cursor-pointer py-1"
                >
                  <span
                    className={`font-mono text-[10px] tracking-[0.22em] uppercase whitespace-nowrap transition-all duration-500 ${
                      isActive
                        ? 'text-ink opacity-100'
                        : 'text-ink-soft opacity-0 group-hover/rail:opacity-50 group-hover/dot:!opacity-100'
                    }`}
                  >
                    {c.short}
                  </span>
                  <span
                    className={`block rounded-full transition-all duration-500 ${
                      isActive
                        ? 'h-1.5 w-1.5 bg-ink'
                        : 'h-1 w-1 bg-mute group-hover/dot:bg-ink-soft'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
