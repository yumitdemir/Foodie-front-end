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
  plugins: [],
}

