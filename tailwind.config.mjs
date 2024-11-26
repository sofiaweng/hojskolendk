/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  /* Vil du overskrive eller extende tailwinds indstillinger?  */

  theme: {
    /* Tilføj din egen farvepalette nedenfor */
    orange: {
      100: "#FFDECC",
      200: "#FFBD99",
      300: "#FF9C66",
      400: "#FF7A33",
      500: "#FF5900",
      600: "#CC4700",
      700: "#993600",
      800: "#662400",
      900: "#331200",
    },
    yellow: {
      100: "#FDFFD6",
      200: "#FBFFB3",
      300: "#F9FE8Ae",
      400: "#F7FE67",
      500: "#F3FE40",
      600: "#F1FE01",
      700: "#B2BC01",
      800: "#3A3D00",
      900: "#1D1E00",
    },
    white: "#F2F2F2",
    lightgrey: "#C4C4C4",
    grey: "#686563",
    black: "#0C0C0C",

    /* Tilføj din egen spacing nedenfor */
    spacing: {
      xxs: "8px",
      xs: "16px",
      s: "24px",
      sm: "32px",
      m: "40px",
      ml: "48px",
      lg: "64px",
      xl: "80px",
      "2xl": "96px",
      "3xl": "112px",
    },
    /* Tilføj fonte herunder - husk også at tilføje webfonte i head-sektionen i MainLayout  */
    fontFamily: {
      sans: ["neue-haas-grotesk-display", "sans-serif"],
      cooper: ["cooper-black-std", "serif"],
      display: ["playfair-display", "monospace"] /* eksempel på ekstra font */,
    },

    /* Tilføj dit typografiske hierarki herunder */
    fontSize: {
      base: ["17px", { lineHeight: "auto" }],
      medium: ["33px", { lineHeight: "auto" }],
      large: ["39px", { lineHeight: "auto" }],
      xlarge: ["55px", { lineHeight: "auto" }],
    },

    /* Tilføj dit fontvægt-hierarki nedenfor */
    //   fontWeight: {
    //     regular: '400',
    //   },

    /* Borders - borderstørrelser herunder */
    // borderWidth: {
    //     DEFAULT: '1px',
    //     0: '0px',
    //     2: '2px',
    // },

    /* Border radius størrelser herunder */
    // borderRadius: {
    //     DEFAULT: '1.25rem',
    //     none: '0px',
    // },

    /* Box shadows herunder */
    // boxShadow: {
    //     drop25: '4px 4px 4px 0 rgb(0 0 0 / 0.25)', /* x y blur spread farve / opacity */
    // },

    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};

