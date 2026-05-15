'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  /** The content to glitch in — typically a single line / heading */
  children: React.ReactNode;
  /** Render plain (mobile/reduced-motion path) */
  lite?: boolean;
  /** Optional delay (ms) before glitch fires after intersection */
  delay?: number;
  className?: string;
  /** Element tag — defaults to span. Use 'div' for block wrappers. */
  as?: 'span' | 'div';
};

/**
 * Wraps any content with a CSS-driven glitch entrance animation.
 *   - First ~500ms: position-shifted clones via ::before / ::after pseudos
 *     create an RGB-split / scanline tear feel (cream + dim tones, no red/cyan).
 *   - Last frame: clones fade, content settles to its final rendered state.
 *   - Triggers via IntersectionObserver; runs once per element.
 *
 * The pseudos use `data-text` to mirror the content, so the wrapper must
 * receive text-only `children` (it stringifies via element traversal would
 * be over-engineered for the use here). For headings with inline italic
 * spans we keep them — the glitch operates on the wrapper as a whole.
 */
export default function GlitchReveal({
  children,
  lite = false,
  delay = 0,
  className = '',
  as = 'span',
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (lite || !ref.current) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (delay > 0) {
              const t = setTimeout(() => setActive(true), delay);
              obs.disconnect();
              return () => clearTimeout(t);
            }
            setActive(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, lite]);

  const cls = `${lite ? '' : `glitch-reveal ${active ? 'is-active' : ''}`} ${className}`;
  const Tag = as as 'span';
  return (
    <Tag ref={ref as React.RefObject<HTMLSpanElement>} className={cls}>
      {children}
    </Tag>
  );
}
