/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E2F',
        accent: '#7C3AED',
        success: '#16A34A',
        warning: '#F59E0B',
        danger: '#DC2626'
      }
    }
  },
  plugins: []
}
