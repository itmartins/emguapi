/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          dark: 'var(--color-navy-dark)',
          base: 'var(--color-navy-base)',
          soft: 'var(--color-navy-soft)',
        },
        red: {
          light: 'var(--color-red-light)',
          base: 'var(--color-red-base)',
          deep: 'var(--color-red-deep)',
        },
        ice: 'var(--color-bg-ice)',
        borderLight: 'var(--color-border-light)',
      },
    },
  },
  plugins: [],
}