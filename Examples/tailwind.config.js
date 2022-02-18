module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        move: 'move 2s linear infinite', 
      },
      keyframes: {
        move: {
          '25%': { 'background-position': 'left bottom' },
          '50%': { 'background-position': 'right bottom' },
          '75%': { 'background-position': 'right top' },
          '100%': { 'background-position': 'left top' }
        },
        wiggle: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: 'translateY(25%)' },
        },
      },
    },
  },
  plugins: [],
}