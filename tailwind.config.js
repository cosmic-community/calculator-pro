/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(222.2, 84%, 4.9%)',
        foreground: 'hsl(210, 40%, 98%)',
        primary: {
          DEFAULT: 'hsl(210, 40%, 98%)',
          foreground: 'hsl(222.2, 84%, 4.9%)',
        },
        secondary: {
          DEFAULT: 'hsl(217.2, 32.6%, 17.5%)',
          foreground: 'hsl(210, 40%, 98%)',
        },
        accent: {
          DEFAULT: 'hsl(217.2, 32.6%, 17.5%)',
          foreground: 'hsl(210, 40%, 98%)',
        },
        muted: {
          DEFAULT: 'hsl(217.2, 32.6%, 17.5%)',
          foreground: 'hsl(215, 20.2%, 65.1%)',
        },
        border: 'hsl(217.2, 32.6%, 17.5%)',
        ring: 'hsl(212.7, 26.8%, 83.9%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}