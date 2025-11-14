/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.{md,html,js}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'charcoal': {
          100: '#36454f',
          200: '#313e47',
          300: '#2b373f',
          400: '#263037',
          500: '#20292f',
          600: '#1b2328',
          700: '#161c20',
          800: '#101518',
          900: '#0b0e10',
        },
      },
    },
  },
}