import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        black: 'rgb(var(--color-black))',
        lightBlack: 'rgb(var(--color-light-black))',
        darkBlue: 'rgb(var(--color-dark-blue))',
        lightBlue: 'rgb(var(--color-light-blue))',
        lighterBlue: 'rgb(var(--color-lighter-blue))',
      },
    },
  },
  plugins: [],
};

export default config;