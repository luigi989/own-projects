module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        move: 'move_right 1s linear', 
      },
      keyframes: {
        move_right: {
          '0%': { width: '0%' },
          '99%': { width: '100%' },
          '100%': { width: '0%' },
        }
      },
    },
  },
  plugins: [],
}