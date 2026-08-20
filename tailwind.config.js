/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e2e',
        'prompt-green': '#a6e3a1',
        'prompt-blue': '#89b4fa',
        'prompt-yellow': '#f9e2af',
      },
    },
  },
  plugins: [],
}
