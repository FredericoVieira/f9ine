import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    function ({ addBase }: { addBase: (styles: Record<string, any>) => void }) {
      addBase({
        ":root": {
          "--tw-color-neutral-200": colors.neutral[200],
          "--tw-color-neutral-600": colors.neutral[600],
          "--tw-color-neutral-900": colors.neutral[900],
        },
      });
    },
  ],
};

export default config;
