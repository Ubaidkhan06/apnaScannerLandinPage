/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      paleBlue: "#E7ECFF",
      mainBlue: "#091133",
      secondaryPurple: "#BFACE2",
      primaryPurple: "#A084DC",
      tertiaryPurple: "#645CBB",
      gradientPurple : "linear-gradient(315deg, #f8ceec 0%, #a88beb 74%)"
    },
  },
  plugins: [require("daisyui")],
}
