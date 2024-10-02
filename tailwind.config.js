import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-blue': {
          50: '#e5ecf5',  // Lightest tint
          100: '#c9d7ea', // Lighter tint
          200: '#9cb7d8', // Light tint
          300: '#6f96c7', // Medium tint
          400: '#4d78b7', // Slightly darker
          500: '#1E3054', // Base color
          600: '#18294b', // Darker tint
          700: '#132141', // Dark
          800: '#0d1938', // Darker shade
          900: '#08112e', // Darkest shade
        },
      },
      fontFamily: {
        calibre: ['calibre', 'sans-serif'], // Fallback to sans-serif
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

export default config;
