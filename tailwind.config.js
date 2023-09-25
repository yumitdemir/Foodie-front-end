import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "title-black":"#262626",
        "paragraph-black":"#262626",
      }
    },
    fontFamily:{
      dmSans:["DM Sans","sans-serif"]
    }
  },
  plugins: [
    require("daisyui"),
  ],
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "primary": "#082967",
          "primary-focus": "#194494",
          secondary:"#e36934"
        },
      },
    ],
  },
}

