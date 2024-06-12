/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    boxShadow: {
      "shadow-8":"0px 0px 8px 0px rgba(59, 130, 246, 0.12)",
    },
    colors: {
      "main": "#393939",
      "blue": "#3B82F6",
      "text-dark": "#020617",
      "white":"#FFF",
      "black": "#000",
      "grey-700":"#334155",
      "grey-900":"#0F172A",
      "primary-500":"#3B82F6",
      "grey-border":"#E2E8F0",
      "primary-100":"#E0F2FE"
    }
  },
  plugins: [],
}

