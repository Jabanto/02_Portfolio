/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A0A0F',
          light: '#12131A',
        },
        secondary: {
          DEFAULT: '#12131A',
          light: '#1a1b24',
        },
        text: {
          primary: '#F5F6F8',
          secondary: '#8A8F98',
        },
        accent: {
          DEFAULT: '#22D3EE',
          dark: '#0891b2',
          glow: 'rgba(34, 211, 238, 0.3)',
        },
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.2)' },
          '100%': { boxShadow: '0 0 40px rgba(34, 211, 238, 0.4)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
