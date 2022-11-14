module.exports = {
  theme: {
    extend: {
    fontFamily: {
    headline: ['font2']
    }
  }
    },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require("daisyui")],
  daisyui: {
  themes:["cupcake"],
},
}
