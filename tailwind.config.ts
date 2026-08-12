import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 28px 80px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'gradient-hero': 'radial-gradient(circle at top, rgba(99,102,241,0.16), transparent 46%), radial-gradient(circle at right, rgba(139,92,246,0.14), transparent 32%)',
      },
      colors: {
        brand: {
          950: '#090c18',
        },
      },
    },
  },
  plugins: [],
};

export default config;
