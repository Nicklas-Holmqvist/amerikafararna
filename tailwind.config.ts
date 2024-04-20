import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'basic-white': '#f1efed',
      green: '#353831',
      black: '#141414',
    },
    extend: {
      screens: {
        sm: '576px',
        md: '960px',
        lg: '1280px',
      },
    },
  },
  plugins: [],
};
export default config;
