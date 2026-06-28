/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#070709',
        surface: '#0F0F14',
        card: '#14141C',
        border: '#1E1E2E',
        purple: { DEFAULT: '#7C3AED', light: '#A78BFA', dark: '#5B21B6' },
        teal: '#14B8A6',
        amber: '#F59E0B',
        coral: '#F43F5E',
        silver: '#94A3B8',
        offwhite: '#F1F5F9',
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'spin-slow': 'spin 3s linear infinite',
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
