module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#4977EA',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#464748',
      'gray-light': '#d3dce6',
      'crema': '#F9F4E8',
      'white': '#FFFF'
    },
    fontFamily: {
      sans: [
        'Span Bold Compressed'
      ],
      serif: [
        'GreyscaleBasic'
      ],
    },
    extend: {},
  },
  plugins: [],
};
