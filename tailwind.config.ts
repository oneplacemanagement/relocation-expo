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
        navy: "#2B2F48",
        "accent-yellow": "#EFC544",
        "off-white": "#EFEFF0",
        "muted-grey": "#535466",
        "blue-grey": "#5C6D8C",
      },
    },
  },
  plugins: [],
};
export default config;
