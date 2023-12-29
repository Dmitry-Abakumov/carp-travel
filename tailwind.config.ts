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
        "22px": "22px",
        "13px": "13px",
      },
      lineHeight: {
        "56px": "56px",
        "48px": "48px",
        "18px": "18px",
        "22px": "22px",
      },
      letterSpacing: {
        "0.8em": "0.8em",
        "0.2em": "0.2em",
        "1.85em": "1.85em",
        "0.13em": "0.13em",
        "0.04em": "0.04em",
        "0.01em": "0.01em",
        "0.02em": "0.02em",
      },
      colors: {
        "primary-text-color": "#ffffff",
        "secondary-text-color": "rgba(255, 255, 255, 0.2)",
        "not-active-points": "rgba(255, 255, 255, 0.5)",
        "input-bg-color": "rgba(255, 255, 255, 0.05)",
        "error-color": "#FF5757",
      },
      maxWidth: {
        "180px": "180px",
        "426px": "426px",
        "280px": "280px",
        "220px": "220px",
        "192px": "192px",
        "463px": "463px",
        "225px": "225px",
      },
      spacing: {
        "46px": "46px",
        "48px": "48px",
        "68px": "68px",
        "76px": "76px",
        "86px": "86px",
        "124px": "124px",
        "154px": "154px",
        "56px": "56px",
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
        "220px": "220px",
        "460px": "460px",
        "42px": "42px",
        "35px": "35px",
        "44px": "44px",
      },
      height: {
        "53px": "53px",
        "50px": "50px",
        "71px": "71px",
        "228px": "228px",
        "256px": "256px",
      },
    },
  },
  plugins: [],
};
export default config;
