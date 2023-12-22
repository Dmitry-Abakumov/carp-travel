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
      fontSize: {
        "2.5rem": "2.5rem",
        "2.75rem": "2.75rem",
        "0.625rem": "0.625rem",
        "3.5rem": "3.5rem",
      },
      lineHeight: {
        "3.5rem": "3.5rem",
        "3rem": "3rem",
      },
      letterSpacing: {
        "0.8em": "0.8em",
        "0.2em": "0.2em",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-text-color": "#ffffff",
        "secondary-text-color": "rgba(255, 255, 255, 0.2)",
        "not-active-points": "rgba(255, 255, 255, 0.5)",
        "input-bg-color": "rgba(255, 255, 255, 0.05)",
        "error-color": "#FF5757",
      },
      maxWidth: {
        "17.5rem": "17.5rem",
        "11.25rem": "11.25rem",
      },
      spacing: {
        "0.375rem": "0.375rem",
      },
    },
  },
  plugins: [],
};
export default config;
