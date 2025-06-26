import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['var(--font-jost)', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Добавляем цвета из нашей палитры
        primary: {
          50: '#E6FFFA',
          100: '#B2F5EA',
          200: '#81E6D9',
          300: '#4FD1C7',
          400: '#38B2AC',
          500: '#00D6BF',
          600: '#00B7A3',
          700: '#009688',
          800: '#007D6B',
          900: '#00564A',
          950: '#003B36',
          hover: '#00D6A8'
        },
        secondary: {
          500: '#FEE389',
          hover: '#FFC73D'
        },
        success: {
          500: '#119D10',
          hover: '#22C55E'
        },
        info: {
          500: '#3B82F6',
          hover: '#60A5FA'
        },
        // CSS переменные для кнопок
        'btn-bg': 'var(--btn-bg)',
        'btn-bg-hover': 'var(--btn-bg-hover)',
        'btn-bg-active': 'var(--btn-bg-active)',
        'btn-bg-disabled': 'var(--btn-bg-disabled)',
        'btn-text': 'var(--btn-text)',
        'btn-text-disabled': 'var(--btn-text-disabled)',
        'btn-color-text': 'var(--btn-color-text)'
      },
    },
  },
  plugins: [],
};
export default config; 