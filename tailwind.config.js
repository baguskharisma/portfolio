/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "about-me.html",
    "tech-stack.html",
    "projects.html",
    "notebook.html",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0D0D0D",
        onyx: "#181818",
        "dark-gray": "#808080",
        "medium-gray": "rgba(128, 128, 128, 0.5)",
        "light-gray": "#C5C5C5",
        "light-blue": "rgba(63, 100, 234, 0.43)",
        "light-red": "rgba(233, 63, 64, 0.43)",
        "light-yellow": "rgba(255, 184, 0, 0.43)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nanum: ["Nanum Pen Script", "sans-serif"],
      },
      backgroundImage: {
        notebook: "url('/src/img/guide.png')",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
