module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,wasm}",
  ],
  theme: {
    extend: {},
    colors: {
      bgprimary: '#332E3C',
      bgsecondary: '#4E475C',
      primary: '#B298DC',
      secondary: '#A663CC',
      trinary: '#8BE8CB',
      accentprimary: '#E03616',
      accentsecondary: '#F0816A'
    }
  },
  plugins: [
    require("daisyui")
  ],
}
