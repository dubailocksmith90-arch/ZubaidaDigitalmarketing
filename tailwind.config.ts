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
      colors: {
        brand: {
          navy: '#0f172a',
          gold: '#c7a35c',
          sand: '#f6f4ef',
          smoke: '#f1efe9',
        },
      },
    },
  },
  plugins: [],
};

export default config;
