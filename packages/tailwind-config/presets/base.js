/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./services/**/*.{js,ts,jsx,tsx}",
        "./packages/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      container: {
        center: true,
        padding: "2rem",
        screens: { "2xl": "1400px" },
      },
    }
  };
  