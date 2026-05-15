'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  /** Target value as displayed (e.g. "2,000" or "30"). Non-digits preserved on completion. */
  target: string;
  /** Duration in ms */
  duration?: number;
  /** Render instantly (mobile/reduced-motion path) */
  lite?: boolean;
  className?: string;
};

/**
 * Fast count-up that triggers when the element scrolls into view.
 * Ease-out cubic gives the "spinning slot machine" feel that decelerates
 * into the final number. Final frame snaps to the exact original string
 * so commas and other formatting are preserved.
 */
export default function CountUp({
  target,
  duration = 1500,
  lite = false,
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(lite ? target : '0');
  const startedRef = useRef(false);

  useEffect(() => {
    if (lite) {
      setDisplay(target);
      return;
    }
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || startedRef.current) return;
          startedRef.current = true;
          obs.disconnect();
          const numericTarget = parseInt(target.replace(/[^\d-]/g, ''), 10);
          if (!Number.isFinite(numericTarget)) {
            setDisplay(target);
            return;
          }
          const start = performance.now();
          let raf = 0;
          const tick = () => {
            const t = Math.min((performance.now() - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const val = Math.floor(numericTarget * eased);
            setDisplay(val.toLocaleString('en-US'));
            if (t < 1) raf = requestAnimationFrame(tick);
            else setDisplay(target);
          };
          raf = requestAnimationFrame(tick);
          return () => cancelAnimationFrame(raf);
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration, lite]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
