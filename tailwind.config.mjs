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
    },
  },
  plugins: [],
};
