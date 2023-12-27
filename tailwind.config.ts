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
        "40px": "40px",
        "44px": "44px",
        "10px": "10px",
        "56px": "56px",
        "67px": "67px",
      },
      lineHeight: {
        "56px": "56px",
        "48px": "48px",
        "0.9em": "0.9em",
      },
      letterSpacing: {
        "0.8em": "0.8em",
        "0.2em": "0.2em",
        "1.85em": "1.85em",
        "0.13em": "0.13em",
        "0.04em": "0.04em",
      },
      colors: {
        "primary-text-color": "#ffffff",
        "secondary-text-color": "rgba(255, 255, 255, 0.2)",
        "not-active-points": "rgba(255, 255, 255, 0.5)",
        "input-bg-color": "rgba(255, 255, 255, 0.05)",
        "error-color": "#FF5757",
      },
      maxWidth: {
        "280px": "280px",
        "180px": "180px",
        "426px": "426px",
      },
      spacing: {
        "46px": "46px",
        "48px": "48px",
        "68px": "68px",
        "76px": "76px",
      },
      screens: {
        xs: "480px",
      },
      width: {
        "480px": "480px",
        "768px": "768px",
        "1280px": "1280px",
        "230px": "230px",
        "118px": "118px",
        "262px": "262px",
      },
    },
  },
  plugins: [],
};
export default config;
