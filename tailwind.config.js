/* eslint-disable no-undef */
// tailwind.config.js
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
    theme: {
      extend: {
        keyframes: {
          "shine-pulse": {
            "0%": {
              "background-position": "0% 0%",
            },
            "50%": {
              "background-position": "100% 100%",
            },
            to: {
              "background-position": "0% 0%",
            },
          },
        },
      },
    },
  };
  