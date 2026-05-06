import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0a',
        ink: '#f5f1e8',
        muted: '#9a9085',
        gold: {
          DEFAULT: '#c9a84c',
          light: '#e0c378',
          dark: '#8a7332',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        kr: ['var(--font-noto-serif-kr)', 'serif'],
      },
      letterSpacing: {
        widest2: '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1.2s ease-out both',
        'shimmer': 'shimmer 2.4s linear infinite',
        'marquee': 'marquee 32s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
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
