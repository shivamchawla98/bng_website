/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/page-components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A1078",
        secondary: "#fef3f4",
        primaryBg: "#E6EBF4",
        secondryBg: "#EFF6FF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Paytone One'", "sans-serif"],
      },
      backgroundImage: { 
        // 'custom-nav-gradient': 'linear-gradient(to bottom, #27293B, rgb(230, 235, 244))',
        'cstm-bg-rad-grad-memb-benfts': 'radial-gradient(circle, #6853DB 20%, rgba(58, 16, 120, var(--tw-bg-opacity)) 90%)',
       },
    },
  },
  plugins: [],
};
