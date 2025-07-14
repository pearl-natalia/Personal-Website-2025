// postcss.config.mjs
export default {
  plugins: {
    "@tailwindcss/postcss": {}, // the new Tailwind v4 PostCSS plugin
    autoprefixer: {}, // you'll need to bring in autoprefixer yourself
  },
};
