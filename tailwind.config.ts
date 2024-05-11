import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#f1efed',
      green: '#353831',
      black: '#141414',
      beige: '#F7EADF',
    },
    extend: {
      screens: {
        sx: '500px',
        sm: '700px',
        md: '960px',
        lg: '1280px',
      },
      backgroundImage: {
        schablon: "url('/images/schablon-flower.svg')",
      },
      backgroundSize: {
        small: '0.8rem',
      },
    },
  },
  plugins: [],
};
export default config;
