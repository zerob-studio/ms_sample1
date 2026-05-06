'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  no: string;
  /** Topic word — shown prominently as the section subject (e.g. ABOUT, SERVICES) */
  label: string;
  /** Optional one-line subject descriptor in serif italic — clarifies what this section is */
  topic?: React.ReactNode;
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
  topic,
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
      {/* Hairline divider */}
      <div className="border-t border-line" />

      <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-12 pt-16 lg:pt-24 pb-12 lg:pb-16">
        <div className="grid grid-cols-12 gap-y-6 lg:gap-12">
          {/* Eyebrow + headline */}
          <div
            className={`col-span-12 lg:col-span-9 transition-all duration-[1.1s] ease-out ${
              active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            {/* Subject ribbon — clear, prominent topic identifier */}
            <div className="flex items-center gap-3 mb-7 lg:mb-9">
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-mute tabular-nums">
                {no} / 07
              </span>
              <span className="h-px w-6 bg-line-2" />
              <span className="font-mono text-[12px] lg:text-[13px] tracking-[0.32em] uppercase text-ink font-medium">
                {label}
              </span>
            </div>

            {/* Optional clarifying topic line in serif italic */}
            {topic && (
              <p className="font-display italic text-ink-soft text-[clamp(1rem,1.4vw,1.25rem)] tracking-[-0.005em] mb-5 lg:mb-6">
                {topic}
              </p>
            )}

            <h2 className="font-display text-[clamp(1.85rem,4.6vw,4.2rem)] leading-[1.06] tracking-[-0.02em] text-ink">
              {headline}
            </h2>
          </div>

          {/* Side: description / actions */}
          {(description || actions) && (
            <div
              className={`col-span-12 lg:col-span-3 flex flex-col items-start gap-5 justify-end lg:pt-12 transition-all duration-[1.3s] ease-out delay-100 ${
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
