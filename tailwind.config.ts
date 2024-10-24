import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: "#8403fc"
      },
      fontFamily:{
        purista: "Purista"
      },
      borderRadius:{
        standard: "5px"
      },
      boxShadow:{
        standard: "1px 1px 10px #00000033"
      }
    },
  },
  plugins: [],
};
export default config;
