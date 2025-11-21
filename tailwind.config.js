/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      fontFamily:{
        "poppins": ["poppins", "sans-serif"],
       " inter": ["inter", "sans-serif"],
        "light": ["poppins-light", "sans-serif"],
       " stack": ["stack", "sans-serif"]
      }
    },
  },
  plugins: [],
}