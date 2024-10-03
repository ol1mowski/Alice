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
        allWhite: '#fff',
        black: "#2e2d2e",
        boxWhite: "#F2F3F5",
      },
      fontFamily: {
        header: "Montserrat",
        text: "Roboto",
        code: "Fira Code",
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
      maxHeight: {
        mainImage: "45rem",
      },
      maxWidth: {
        mainImage: "45rem",
      },
      padding: {
        main: "5rem 120px",
      },
    },
  },
  plugins: [],
};
export default config;
