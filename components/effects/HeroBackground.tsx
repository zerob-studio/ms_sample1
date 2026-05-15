'use client';

import dynamic from 'next/dynamic';
import { useIsMobileOrLowPower } from '../hooks/useIsMobileOrLowPower';

// Three.js bundle is ~150KB. Dynamic-imported so it doesn't block first paint.
const HeroParticles = dynamic(() => import('./HeroParticles'), {
  ssr: false,
  loading: () => null,
});

/**
 * The Hero's atmospheric layer. On capable devices renders the Three.js
 * particle field; on mobile / reduced-motion / low-CPU it falls back to a
 * CSS-only "studio glow" — same visual language, near-zero cost.
 */
export default function HeroBackground() {
  const isLite = useIsMobileOrLowPower();

  return (
    <>
      {/* base gradient — always rendered, also acts as fallback */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #0a0a0b 0%, #0c0c0d 60%, #0a0a0b 100%)',
        }}
      />

      {isLite ? <LiteBackground /> : <HeroParticles />}
    </>
  );
}

/**
 * CSS-only atmospheric replacement for mobile/low-power.
 * Two slow drifting radial-glow layers + a thin wave band — gives a sense of
 * motion without any JS or WebGL.
 */
function LiteBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="hero-lite-glow hero-lite-glow-a" />
      <div className="hero-lite-glow hero-lite-glow-b" />
      <div className="hero-lite-wave" />
    </div>
  );
}
