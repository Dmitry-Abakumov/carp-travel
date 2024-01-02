import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text-color": "#ffffff",
        "secondary-text-color": "rgba(255, 255, 255, 0.2)",
        "not-active-points": "rgba(255, 255, 255, 0.5)",
        "input-bg-color": "rgba(255, 255, 255, 0.05)",
        "error-color": "#FF5757",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
export default config;
