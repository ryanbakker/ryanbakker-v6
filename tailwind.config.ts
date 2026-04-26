import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Now you can use 'font-crimson' anywhere in your Tailwind classes
        crimson: ["var(--font-crimson)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
