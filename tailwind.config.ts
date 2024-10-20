import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

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
      },
      keyframes: {
        "scale-up-0.8": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "scale-up-0.8": "scale-up-0.8 .5s ease-out forwards",
      },
      animationDelay: {
        "0": "0s",
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "500": "500ms",
        "700": "700ms",
        "1000": "1s",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: PluginAPI) {
      const delays = theme("animationDelay") ?? {};
      const utilities = Object.entries(delays).map(([key, value]) => {
        return {
          [`.animation-delay-${key}`]: {
            "animation-delay": value,
          },
        };
      });

      addUtilities(utilities);
    },
  ],
};
export default config;
