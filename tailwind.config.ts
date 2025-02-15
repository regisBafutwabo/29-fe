import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.{ts,tsx}", "./src/app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "var(--container-width)",
      },
      fontFamily: {
        sans: ["var(--font-pretendard)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#000000",
        secondary: "#474747",
        accent: "#FF4800",
        line: "#E4E4E4",
        divider: "#F4F4F4",
        "btn-disabled": "#F4F4F4",
        "txt-disabled": "#C4C4C4",
        soldout: "#999999",
        silent: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
