'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  no: string;
  label: string;
  caption?: string;
  meta?: string;
  headline: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
};

export default function SectionHeader({
  no,
  label,
  caption,
  meta,
  headline,
  description,
  actions,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: [0, 0.3, 0.6] },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-active={active}>
      {/* Chapter strip — clearly delineates section start */}
      <div className="chapter-strip relative overflow-hidden">
        {/* Sweep line that ignites when the section enters view */}
        <span
          aria-hidden
          className={`absolute left-0 top-0 h-full w-full origin-left bg-ink/[0.03] transition-transform duration-[1.4s] ease-out ${
            active ? 'scale-x-100' : 'scale-x-0'
          }`}
        />
        <span
          aria-hidden
          className={`absolute left-0 bottom-0 h-px bg-ink/40 origin-left transition-transform duration-[1.6s] ease-out ${
            active ? 'scale-x-100' : 'scale-x-0'
          }`}
        />

        <div className="relative mx-auto max-w-[1480px] px-6 lg:px-12 h-12 flex items-center justify-between font-mono text-[10px] md:text-[11px] tracking-[0.22em] uppercase">
          <span className="text-ink flex items-center gap-2.5">
            <span
              className={`h-1.5 w-1.5 rounded-full bg-live transition-opacity duration-700 ${
                active ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ animation: active ? 'blink 1.6s steps(1) infinite' : 'none' }}
            />
            <span className="text-mute">Ch.{no}</span>
            <span className="text-mute/60">/</span>
            <span>{label}</span>
          </span>
          {caption && (
            <span className="hidden md:inline text-mute truncate">{caption}</span>
          )}
          <span className="text-mute hidden sm:inline">{meta ?? `0${no} / 07`}</span>
        </div>
      </div>

      {/* Section title block */}
      <div className="mx-auto max-w-[1480px] px-6 lg:px-12 pt-14 lg:pt-24 pb-12 lg:pb-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div
            className={`col-span-12 lg:col-span-9 lg:col-start-2 transition-all duration-[1.2s] ease-out ${
              active
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-3'
            }`}
          >
            <h2 className="font-display text-[clamp(2rem,5vw,4.6rem)] leading-[1.04] tracking-[-0.02em] text-ink">
              {headline}
            </h2>
          </div>
          {(description || actions) && (
            <div
              className={`col-span-12 lg:col-span-3 flex flex-col items-start lg:items-end gap-5 justify-end transition-all duration-[1.4s] ease-out delay-100 ${
                active
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-2'
              }`}
            >
              {description && (
                <div className="font-kr text-[14px] text-ink-soft leading-[1.85] lg:text-right max-w-xs">
                  {description}
                </div>
              )}
              {actions}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
