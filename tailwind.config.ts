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
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#6144F3",
        green: "#48FFB0",
        white: "#f8f8f8",
        black: "#000000",
      },
      fontFamily: {
        header: "Montserrat",
        text: "Roboto",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(97,68,243,0.3785889355742297) 100%, rgba(97,68,243,1) 100%)",
      },
      boxShadow: {
        "custom-big":
          "0 0 50px 20px rgba(97,68,243,0.1), 0 0 1000px 100px rgba(97,68,243,1)",
      },
      animation: {
        menu: "fade .7s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
