'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  text: string;
  /** Delay before first letter starts (s) */
  delay?: number;
  /** Per-letter stagger (s) */
  stagger?: number;
  /** Extra className applied to outer span */
  className?: string;
  /** Each character also gets this className (useful for italic etc.) */
  charClassName?: string;
  /** Disable per-letter animation (mobile/reduced-motion). Renders as plain text. */
  lite?: boolean;
};

/**
 * Splits text into letter spans that fade + lift in sequence. Each char is
 * `inline-block` so the line breaks at word boundaries normally.
 * Spaces use a non-breaking space so they keep their width during the lift.
 *
 * Animation kicks in once the element scrolls into view (or immediately if
 * already visible on mount).
 */
export default function LetterReveal({
  text,
  delay = 0,
  stagger = 0.035,
  className = '',
  charClassName = '',
  lite = false,
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  if (lite) {
    return <span className={className}>{text}</span>;
  }

  const chars = Array.from(text);
  return (
    <span ref={ref} className={`inline ${className}`} aria-label={text}>
      {chars.map((c, i) => {
        const isSpace = c === ' ' || c === ' ';
        const ch = isSpace ? ' ' : c;
        return (
          <span
            key={i}
            aria-hidden
            className={`letter-reveal ${visible ? 'is-visible' : ''} ${charClassName}`}
            style={{ animationDelay: `${delay + i * stagger}s` }}
          >
            {ch}
          </span>
        );
      })}
    </span>
  );
}
