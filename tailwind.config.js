/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.html"],
  theme: {
    fontSize: {
      "5xl": [
        "3rem",
        {
          lineHeight: "3.5rem",
        },
      ],
      "6xl": [
        "3.75rem",
        {
          lineHeight: "1",
        },
      ],
      "7xl": [
        "4.5rem",
        {
          lineHeight: "1.1",
        },
      ],
      "8xl": [
        "6rem",
        {
          lineHeight: "1",
        },
      ],
      "9xl": [
        "8rem",
        {
          lineHeight: "1",
        },
      ],
    },
    extend: {
      fontFamily: {
        'alice': ['"Alice"', "sans-serif"]
      }
    },
    plugins: [],
  }
}
