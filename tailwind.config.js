module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        Emerald: "#014751",
        Firefly: "#0F2830",
        Zircon: "#F8FBFF",
        Greener: "#00D37F",
        Mint: "#AFF8C8",
        BananaYellow: "#FFEEB4",
        Lilac: "#D2C4FB",
        SeafoamLight: "#D8EBE9",
        SeafoamDark: "#004A43",
      },
    },
  },
  plugins: [],
};
