/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        // 粉紅色主色調
        "primary-pink": "#F78FB3", // 主粉紅色
        "primary-pink-light": "#FFC1E3", // 淺粉紅色（hover/背景）

        // 藍色輔助色
        "secondary-blue": "#74C0FC", // 輔助藍色
        "secondary-blue-dark": "#4DABF7", // 深藍色（強調色）

        // 黃色點綴色
        "accent-yellow": "#FFE066", // 黃色（點綴）

        // 背景和字體顏色
        "background-light": "#FAF9F9", // 淺色背景
        "text-main": "#343A40", // 主要字體顏色
        "text-secondary": "#495057", // 次要字體顏色
      },
      boxShadow: {
        custom1: "0 0 10px rgba(0,0,0,0.1)",
        custom2: "0 5px 15px rgba(0,0,0,0.2)",
      },
    },
  },

  plugins: [],
};
