import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'backgroundColor': '#1a1a1a',
        'cardColor': '#2a2a2a',
        'textColor': "#e5e7eb",
        'white': "#ffffff",
        'hoverColor': "#9ca3af",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to bottom right, #93c5fd, #a5b4fc, #e9d5ff)',
      },

    },
  },
  plugins: [],
};

export default config;