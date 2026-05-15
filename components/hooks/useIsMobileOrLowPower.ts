'use client';

import { useEffect, useState } from 'react';

/**
 * Returns true on mobile-class devices or when WebGL should be disabled:
 *   - viewport width < 768px
 *   - prefers-reduced-motion is set
 *   - hardwareConcurrency < 4 (very low-end devices)
 *   - WebGL is unavailable
 *
 * The check runs once on mount and on viewport changes. Server render returns
 * `false` so we don't ship a "use lite path" decision based on no data — the
 * actual decision happens client-side after hydration.
 */
export function useIsMobileOrLowPower(): boolean {
  const [isLite, setIsLite] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowCpu = (navigator.hardwareConcurrency ?? 8) < 4;

    let webglOk = true;
    try {
      const c = document.createElement('canvas');
      webglOk = !!(c.getContext('webgl2') || c.getContext('webgl'));
    } catch {
      webglOk = false;
    }

    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsLite(reducedMotion || lowCpu || !webglOk || mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isLite;
}
