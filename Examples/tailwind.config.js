module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        moveWidth: 'moveWidth 0.5s linear', 
        moveWidthInfinite: 'moveWidth 0.5s linear infinite', 
        moveHeight: 'moveHeight 0.5s linear', 
        moveHeightInfinite: 'moveHeight 0.5s linear infinite', 
      },
      keyframes: {
        moveWidth: {
          '0%': { width: '0%' },
          '99%': { width: '100%' },
          '100%': { width: '0%' },
        }, 
        moveHeight: {
          '0%': { heiight: '0%' },
          '99%': { height: '100%' },
          '100%': { height: '0%' },
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
}