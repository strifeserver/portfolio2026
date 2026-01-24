/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "void-black": "#0B0B0F",
        "deep-obsidian": "#12121A",
        "soft-black": "#181826",
        "shadow-line": "#242436",
        "scourge-purple": "#6C2EB9",
        "arcane-violet": "#8B5CF6",
        "necro-glow": "#A970FF",
        "primary-text": "#E5E7EB",
        "secondary-text": "#A1A1AA",
        "bone-highlight": "#D6C9A0",
        "syntax-keyword": "#C084FC",
        "syntax-function": "#60A5FA",
        "syntax-string": "#6EE7B7",
      },
      fontFamily: {
        display: ["Epilogue", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
