import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0b',
        elev: '#101012',
        ink: {
          DEFAULT: '#ede9de',
          soft: '#b6b1a4',
        },
        mute: '#6b6863',
        line: 'rgba(237, 233, 222, 0.08)',
        'line-2': 'rgba(237, 233, 222, 0.18)',
        live: '#e04b36',
      },
      fontFamily: {
        display: ['var(--font-instrument)', 'Times New Roman', 'serif'],
        sans: ['var(--font-inter)', 'var(--font-noto-sans-kr)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'SF Mono', 'Menlo', 'monospace'],
        kr: ['var(--font-noto-sans-kr)', 'sans-serif'],
        'kr-display': ['var(--font-noto-serif-kr)', 'serif'],
      },
      letterSpacing: {
        widest2: '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1.4s ease-out both',
        'marquee': 'marquee 48s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
