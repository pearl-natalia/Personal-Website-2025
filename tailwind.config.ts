import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // all your App Router files
    "./components/**/*.{js,ts,jsx,tsx}", // if you have a components/ dir
  ],
  theme: {
    extend: {
      /* your custom theme settings… */
    },
  },
  plugins: [],
};

export default config;
