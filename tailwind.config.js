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
        font: "#e4e4e7", //main fonts
        background: "#171717",
        textcolor: "#e4e4e7", //highlight font in portfolio
        itembg: "#27272a",
        highlight: "#404040", //hover item
        imagehover: "#27272a",
        BananaYellow: "#FFEEB4",
        Lilac: "#D2C4FB",
        SeafoamLight: "#D8EBE9",
        SeafoamDark: "#004A43",
      },
    },
  },
  plugins: [],
};

//        font: "#16215b", //main fonts
//        background: "#787CA9",
//        textcolor: "#E0EAF8", //highlight font in portfolio
//        itembg: "#E0EAF8",
//        highlight: "#A3A9F5", //hover item
//        BananaYellow: "#FFEEB4",
//        Lilac: "#D2C4FB",
//        SeafoamLight: "#D8EBE9",
//        SeafoamDark: "#004A43",

// font: "#1A3355", //main fonts
// background: "#CFE2ED",
// textcolor: "#E0EAF8", //highlight font in portfolio
// itembg: "#E0EAF8",
// highlight: "#C1D7F9", //hover item
// imagehover: "#264150",
// BananaYellow: "#FFEEB4",
// Lilac: "#D2C4FB",
// SeafoamLight: "#D8EBE9",
// SeafoamDark: "#004A43",
