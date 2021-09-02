module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        prata: ['Prata', 'serif'],
        titillium: ['Titillium Web', 'sans-serif']
      },
      colors: {
        phoenixRed: '#f83600',
        phoenixYellow: '#f9d423',
        jaguarYellow: '#f9f047',
        jaguarGreen: '#0fd850',
        seaGreen: '#2af598',
        seaBlue: '#009efd',
        metalBrown: '#d7d2cc',
        metalGray: '#304352',
        carbon: '#111111',
        offwhite: '#fefefe'
      },
      opacity: {
        80: '0.8',
        85: '0.85',
        90: '0.9',
        95: '0.95'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
