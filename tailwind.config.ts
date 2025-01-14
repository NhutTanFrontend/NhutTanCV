import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'background-color': '#152B2E',
        'background-color-2': '#F6F6F6',
        'background-footer': '#061F24',
        'background-btn': '#007E6A',
      },
      fontSize: {
        'xs': '12px'
      },
      screens: {
        'xs': '480px'
      },
      width: {
        '90%': '90%'
      }
    },
  },
  plugins: [],
};
export default config;
