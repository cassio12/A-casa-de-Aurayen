/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#FAF7F2',
          100: '#F5F0E8',
          200: '#EBE3D5',
          300: '#DDD2BE',
        },
        ink: {
          DEFAULT: '#2C2416',
          muted: '#5C5346',
          faint: '#8A8175',
        },
        sepia: {
          DEFAULT: '#8B7355',
          light: '#A69076',
          dark: '#6B5740',
        },
        hall: {
          wood: {
            DEFAULT: '#3D2E1F',
            light: '#5C4A38',
            dark: '#2A1F14',
          },
          stone: {
            DEFAULT: '#4A4D52',
            light: '#6B6E73',
            dark: '#2E3034',
          },
          bronze: {
            DEFAULT: '#8B6914',
            light: '#A8842E',
            dark: '#6B5010',
          },
          gold: {
            DEFAULT: '#B8963E',
            light: '#D4B56A',
            dark: '#8A7030',
          },
          deep: '#1A2438',
          moss: '#3D4F3A',
          ember: '#C4783A',
          flame: '#E8A04C',
          ivory: '#D4C9B0',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'Georgia', 'serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
      },
      maxWidth: {
        prose: '42rem',
        content: '56rem',
      },
      boxShadow: {
        ember: '0 0 60px 20px rgba(196, 120, 58, 0.25)',
        'ember-soft': '0 0 40px 10px rgba(232, 160, 76, 0.15)',
        portal: 'inset 0 0 30px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
