import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
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
        // light: {
        //   bg: '#f3f4f6', // gray-100
        //   text: '#1f2937', // gray-900
        // },
        // dark: {
        //   bg: 'rgb(var(--color-black))',
        // },
      },
    },
  },
  plugins: [],
};

export default config;