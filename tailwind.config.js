module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgorundImage: (theme) => ({
        "hero-pattern": "url('../images/header_image.jpg')",
      }),
      fontFamily: {
        body: ["Poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
