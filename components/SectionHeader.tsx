'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  no: string;
  label: string;
  /** @deprecated kept for compatibility — no longer rendered */
  caption?: string;
  /** @deprecated kept for compatibility — no longer rendered */
  meta?: string;
  headline: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
};

export default function SectionHeader({
  no,
  label,
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
          if (entry.isIntersecting && entry.intersectionRatio > 0.25) {
            setActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: [0, 0.25, 0.5] },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Hairline divider — single quiet line, no chapter strip box */}
      <div className="border-t border-line" />

      {/* Section title block — generous breathing room */}
      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pt-20 lg:pt-32 pb-14 lg:pb-20">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-12">
          {/* Eyebrow + headline */}
          <div
            className={`col-span-12 lg:col-span-9 transition-all duration-[1.1s] ease-out ${
              active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute mb-6 lg:mb-8">
              <span className="text-ink-soft">{label}</span>
              <span className="mx-2 text-mute/50">/</span>
              <span>{no}</span>
            </div>
            <h2 className="font-display text-[clamp(2.2rem,5.6vw,5.2rem)] leading-[1.04] tracking-[-0.02em] text-ink">
              {headline}
            </h2>
          </div>

          {/* Side: description / actions */}
          {(description || actions) && (
            <div
              className={`col-span-12 lg:col-span-3 flex flex-col items-start lg:items-start gap-6 justify-end lg:pt-12 transition-all duration-[1.3s] ease-out delay-100 ${
                active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1.5'
              }`}
            >
              {description && (
                <div className="font-kr text-[14px] text-ink-soft leading-[1.95] max-w-xs">
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
