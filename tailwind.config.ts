import type { Config } from "tailwindcss";
import AsymmetricCursor from "@/images/cursor.png";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "tiffanyblue": "#7AD2CA",
        "carribean-current": "#246A65",
        "eggshell": "#F3EFE0",
      },
      keyframes: {
        shrink: {
          '0%, 100%': { fontSize: '1rem' },
        }
      },
      animation: {
        'shrink': 'shrink 2s ease-in-out 1',
      },
      fontFamily: {
        techFont: [ "techFont" ],
        tiltPrism: [ "tiltPrism" ],
      },
      cursor: {
        default: "url(/asymmetric_cursor.png), default",
        pointer: "url(/asymmetric_cursor.png), pointer",
        auto: "url(/asymmetric_cursor.png), auto",
        wait: "url(/asymmetric_cursor.png), wait",
        text: "url(/asymmetric_cursor.png), text",
        move: "url(/asymmetric_cursor.png), move",
        help: "url(/asymmetric_cursor.png), help",
      }
    },
  },
  plugins: [],
};
export default config;
